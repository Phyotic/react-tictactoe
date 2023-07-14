export default function Nav({ resetScore }) {
    return (
        <div id="nav">
            <p id="title">React Tic-Tac-Toe</p>
            <div id="button-container">
                <button
                    id="reset-button"
                    onClick={() => {
                        resetScore();
                    }}
                >
                    Reset Score
                </button>
            </div>
        </div>
    );
}
