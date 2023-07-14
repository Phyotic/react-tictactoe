import { GameStatus } from "./Game.jsx";

export default function GameOver({ winner, newGame }) {
    return (
        <>
            <div className="game-over-overlay"></div>
            <section className="game-over-content">
                <p>Game Over</p>
                <p>{winner === GameStatus.DRAW ? "Draw!" : winner + " won"}</p>
                <button onClick={() => newGame()}>New Game</button>
            </section>
        </>
    );
}
