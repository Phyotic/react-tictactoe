import { useState } from "react";
import Cell from "./Cell.jsx";
import Scoreboard from "./Scoreboard.jsx";
import GameOver from "./GameOver.jsx";

const Marker = {
    X: "x",
    O: "o",
    EMPTY: "none",
};

export const BoardStatus = {
    PLAYER_WON: "playerWon",
    OPPONENT_WON: "opponentWon",
    DRAW: "draw",
    ONGOING: "gameOngoing",
};

export default function Board() {
    const [isPlayerTurn, setPlayerTurn] = useState(true);
    const changeTurns = (currentTurn) => {
        setPlayerTurn(!currentTurn);
    };

    const [cellState, setCellState] = useState({
        1: Marker.EMPTY,
        2: Marker.EMPTY,
        3: Marker.EMPTY,
        4: Marker.EMPTY,
        5: Marker.EMPTY,
        6: Marker.EMPTY,
        7: Marker.EMPTY,
        8: Marker.EMPTY,
        9: Marker.EMPTY,
    });

    function setCell(id) {
        console.log("SetCell called: " + id);

        setCellState((prevState) => {
            if (prevState[id] === Marker.EMPTY) {
                let newMarker;

                if (isPlayerTurn) {
                    newMarker = Marker.X;
                } else {
                    newMarker = Marker.O;
                }

                changeTurns(isPlayerTurn);

                return { ...prevState, [id]: newMarker };
            } else {
                return prevState;
            }
        });
    }

    function newGame() {
        setCellState(() => {
            return {
                1: Marker.EMPTY,
                2: Marker.EMPTY,
                3: Marker.EMPTY,
                4: Marker.EMPTY,
                5: Marker.EMPTY,
                6: Marker.EMPTY,
                7: Marker.EMPTY,
                8: Marker.EMPTY,
                9: Marker.EMPTY,
            };
        });

        setPlayerTurn(true);
    }

    const winner = checkWon(cellState);
    let gameOver;

    console.log("Winner: " + winner);

    if (winner != BoardStatus.ONGOING) {
        gameOver = (
            <GameOver winner={winner} newGame={newGame} boardStatus={BoardStatus} />
        );
    }

    return (
        <>
            {winner !== BoardStatus.ONGOING && gameOver}
            <section id="board">
                <div className="row">
                    <Cell
                        id={1}
                        key={1}
                        setCell={setCell}
                        marker={cellState[1]}
                        markerTypes={Marker}
                    />
                    <Cell
                        id={2}
                        key={2}
                        setCell={setCell}
                        marker={cellState[2]}
                        markerTypes={Marker}
                    />
                    <Cell
                        id={3}
                        key={3}
                        setCell={setCell}
                        marker={cellState[3]}
                        markerTypes={Marker}
                    />
                </div>
                <div className="row">
                    <Cell
                        id={4}
                        key={4}
                        setCell={setCell}
                        marker={cellState[4]}
                        markerTypes={Marker}
                    />
                    <Cell
                        id={5}
                        key={5}
                        setCell={setCell}
                        marker={cellState[5]}
                        markerTypes={Marker}
                    />
                    <Cell
                        id={6}
                        key={6}
                        setCell={setCell}
                        marker={cellState[6]}
                        markerTypes={Marker}
                    />
                </div>
                <div className="row">
                    <Cell
                        id={7}
                        key={7}
                        setCell={setCell}
                        marker={cellState[7]}
                        markerTypes={Marker}
                    />
                    <Cell
                        id={8}
                        key={8}
                        setCell={setCell}
                        marker={cellState[8]}
                        markerTypes={Marker}
                    />
                    <Cell
                        id={9}
                        key={9}
                        setCell={setCell}
                        marker={cellState[9]}
                        markerTypes={Marker}
                    />
                </div>
            </section>
            <Scoreboard isPlayerTurn={isPlayerTurn} setPlayerTurn={changeTurns} />
        </>
    );
}

function checkWon(cellState) {
    const winStateKeys = ["123", "456", "789", "147", "258", "369", "159", "357"];

    let playerState = "";
    let opponentState = "";
    let drawState = true;

    for (const property in cellState) {
        console.log(property);
        if (cellState[property] === Marker.X) {
            playerState += property;
        } else if (cellState[property] === Marker.O) {
            opponentState += property;
        }

        if (cellState[property] === Marker.EMPTY) {
            drawState = false;
        }
    }

    if (drawState) {
        return BoardStatus.DRAW;
    } else {
        let playerWon = false;
        let opponentWon = false;

        for (const key of winStateKeys) {
            if (playerState.includes(key)) {
                playerWon = true;
            }

            if (opponentState.includes(key)) {
                opponentWon = true;
            }
        }

        console.log("isPlayerWon: " + playerWon);
        console.log("isOppWon: " + opponentWon);

        if (playerWon) {
            return BoardStatus.PLAYER_WON;
        } else if (opponentWon) {
            return BoardStatus.OPPONENT_WON;
        } else {
            return BoardStatus.ONGOING;
        }
    }
}
