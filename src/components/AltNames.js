const AltNames = ({ name }) => {
  return (
    <>
      <div>
        <h3>Alternative names</h3>
        <ul style={{ listStyleType: "none", fontSize: "0.7rem" }}>
          <li>Japanese: {name.japanese}</li>
          <li>Chinese: {name.chinese}</li>
          <li>French: {name.french}</li>
        </ul>
      </div>
    </>
  );
};

export default AltNames;
