import x from "../assets/x-solid.svg";
import o from "../assets/o-solid.svg";

export default function Cell() {
    return (
        <div className="cell">
            <img className="cell-image" src={x} height="100px" width="100px"></img>
        </div>
    );
}
