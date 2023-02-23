const Image = (image) => {
  let img = image.media[0];
  console.log(image.media[0]);
  return (
    <div class="container">
      <img src={img} alt="txt"></img>
    </div>
  );
};

export default Image;
