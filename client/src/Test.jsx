import { useState } from "react";

const Test = () => {
  const [image, setImage] = useState();
  return (
    <div>
      <div>
        <img src={image ? URL.createObjectURL(image) : ""} alt="" />
      </div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
    </div>
  );
};

export default Test;
