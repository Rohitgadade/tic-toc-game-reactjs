import Square from '../components/Square';
import '../App.css';
import { useState } from 'react';

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handlClick(i) {
        if (squares[i] && calculteWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function calculteWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [0, 4, 8],
            [2, 4, 6],
            [2, 5, 8],
            [1, 4, 7]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculteWinner(squares);
    let status;
    if (winner) {
        status = "Winner:" + winner;
    } else {
        status = "Next player:" + (xIsNext ? "X" : "O");

    }

    return (
        <>
            <h5>{status}</h5>
            <div className="board-row">
                <Square value={squares[0]} onClickSquares={() => handlClick(0)} />
                <Square value={squares[1]} onClickSquares={() => handlClick(1)} />
                <Square value={squares[2]} onClickSquares={() => handlClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClickSquares={() => handlClick(3)} />
                <Square value={squares[4]} onClickSquares={() => handlClick(4)} />
                <Square value={squares[5]} onClickSquares={() => handlClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClickSquares={() => handlClick(6)} />
                <Square value={squares[7]} onClickSquares={() => handlClick(7)} />
                <Square value={squares[8]} onClickSquares={() => handlClick(8)} />
            </div>
        </>
    );
}

export default Board;