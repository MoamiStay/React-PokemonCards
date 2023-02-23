import Stats from "./Stats";
import Types from "./Types";
import AltNames from "./AltNames";
import Image from "./Image";

// It is much more neat and easy to read code when splitting it into more components
// rather than hardcoding everything here
// ALT: change "base" to "stats". (See Stats.js)
const Card = ({ name, media, type, base }) => {
  //   console.log(media);
  let typeClass = type[0].toLowerCase();

  return (
    <div className={"card " + typeClass}>
      <h1 style={{ textAlign: "center" }}>{name.english}</h1>
      <Image media={media} />
      <AltNames name={name} />
      <div class="flex">
        <Types type={type} />
        <Stats base={base} />
      </div>
    </div>
  );
};

export default Card;
