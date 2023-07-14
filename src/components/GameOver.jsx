import { BoardStatus } from "./Board.jsx";

export default function GameOver({ winner, newGame }) {
    return (
        <>
            <div className="game-over-overlay"></div>
            <section className="game-over-content">
                <p>Game Over</p>
                <p>{winner === BoardStatus.DRAW ? "Draw!" : winner + " won"}</p>
                <button onClick={() => newGame()}>New Game</button>
            </section>
        </>
    );
}
