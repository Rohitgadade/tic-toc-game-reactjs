import '../App.css';

const Square = ({ value, onClickSquares }) => {
    return (<>
        <button
            className="square"
            onClick={onClickSquares}
        >{value}</button>
    </>);
}

export default Square;