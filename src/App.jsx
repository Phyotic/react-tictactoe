import Nav from "./components/Nav.jsx";
import Board from "./components/Board.jsx";
import Scoreboard from "./components/Scoreboard.jsx";

function App() {
    return (
        <>
            <nav>
                <Nav />
            </nav>
            <Board />
            <footer>
                <Scoreboard />
            </footer>
        </>
    );
}

export default App;
