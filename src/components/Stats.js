const Stats = ({ base }) => {
  // ALT: remove curly brackets
  //   console.log(base);
  //   const { stats } = base;
  const { HP, Attack, SpAttack, SpDefence, Speed } = base; // ALT: change to "stats" and uncomment previous line

  return (
    <div>
      <h3>Stats:</h3>
      <ul style={{ listStyleType: "none" }}>
        <li>HP: {HP}</li>
        <li>Attack: {Attack}</li>
        <li>SpAttack: {SpAttack}</li>
        <li>SpDefence: {SpDefence}</li>
        <li>Speed: {Speed}</li>
      </ul>
    </div>
  );
};

export default Stats;
