import x from "../assets/x-solid.svg";
import o from "../assets/o-solid.svg";

export default function Cell({ id, setCell, marker, markerTypes }) {
    let image;

    if (marker === markerTypes.X) {
        image = x;
    } else if (marker === markerTypes.O) {
        image = o;
    } else {
        image = null;
    }

    return (
        <div
            className="cell"
            onClick={() => {
                setCell(id);
            }}
        >
            {image ? (
                <img className="cell-image drop" src={image}></img>
            ) : (
                <div className="cell-image blank-image"></div>
            )}
        </div>
    );
}
