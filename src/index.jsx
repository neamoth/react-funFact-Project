import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function CreateFunFact(){
    return(
        <div className="imageContainer">
            <img className="image" src="/src/assets/react.svg" alt="React Logo" />
        </div>
    );
}

root.render(
    <div>
        <CreateFunFact />
    </div>
);