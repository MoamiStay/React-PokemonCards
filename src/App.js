import { pkmn } from "./utils/pkmn.js";
import Card from "./components/Card.js";
import "./styles/main.css";

const App = () => {
  // Conditional rendering:
  // isDay = true: show all content.
  // isDay = false: "Come back tomorrow"
  let isDay = true;
  if (!isDay) {
    return <h1>Come back tomorrow</h1>;
  }

  return (
    <>
      <h2
        style={{
          display: "block",
          backgroundColor: "#7dba6b",
          color: "black",
          textAlign: "center",
          padding: "10px 0 0 0",
          fontSize: "1rem",
        }}
      >
        REACT
      </h2>
      <h1
        style={{
          display: "block",
          backgroundColor: "#7dba6b",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
          padding: "0 0 10px 0",
        }}
      >
        {isDay ? "Pokemon starters" : "Pokemon in the evening"}
      </h1>
      <section className="flexible">
        {pkmn.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              media={pokemon.media}
              type={pokemon.type}
              base={pokemon.base}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
