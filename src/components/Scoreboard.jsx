export default function Footer() {
    return (
        <section id="score">
            <div id="player-container" className="container">
                <p>
                    You: <span id="player-score">3 PTS</span>
                </p>
            </div>
            <div id="bot-container" className="container">
                <p>
                    Opponent: <span id="bot-score">2 PTS</span>
                </p>
            </div>
        </section>
    );
}
