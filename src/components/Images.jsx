import React, { useState } from "react";

function Images() {
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  return (
    <>
      <h1>images</h1>
      <div>
        {image === null ? (
          <input type="file" onChange={handleChange} />
        ) : (
          <div>
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default Images;
