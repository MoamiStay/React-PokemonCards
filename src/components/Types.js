const Types = ({ type }) => {
  // conditional rendering: show "types: " for multiple types and "Type: " for single types
  return (
    <div>
      <h3>{type.length < 2 ? "Type:" : "Types:"}</h3>
      <ul>
        {type.map((type) => {
          return <li style={{ listStyleType: "none" }}>{type}</li>;
        })}
      </ul>
    </div>
  );
};

export default Types;
