export default function Scoreboard({ isPlayerTurn, score }) {
    return (
        <section id="score">
            <div id="player-container" className="container">
                <p>
                    You: <span id="player-score">{score.x} PTS</span>
                </p>
            </div>
            <div id="bot-container" className="container">
                <p>
                    Opponent: <span id="bot-score">{score.o} PTS</span>
                </p>
            </div>
        </section>
    );
}
