import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function CreateFunFact(){
    const facts = [
    "Just a library, but feels like a full framework. 😆",
    "One state change = React re-renders everything! 🤯",
    "useEffect() → Infinite re-renders → Dev panic. 🔄🔥",
    "Class components? We don’t talk about them anymore. 😂",
    "JSX: HTML in JS? JS in HTML? Both?! 🤔",
    "useState(0), useEffect(), useMemo() → Brain overload. 🤯",
    "Why isn’t my prop updating? → UseEffect dependency hell. 🔥",
    'Debugging React: "console.log everywhere!" 🕵️‍♂️',
    'Deploys app → "Works on my machine!" 😎',
    ];
    return(
        <main>
            <div className="imageContainer">
                <img className="image" src="/src/assets/react.svg" alt="React Logo" />
            </div>
            <div className="listContainer">
                <ul>
                    {facts.map((facts, index) => (
                        <li key={index} className="list">
                            {index+1}. {facts}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

root.render(
    <div>
        <CreateFunFact />
    </div>
);