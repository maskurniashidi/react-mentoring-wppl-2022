import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/styles.css";
import Navbar from "../components/Navbar";
function Profile() {
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  // handle change ketika input terjadi perubahan
  const handleChange = (e) => {
    console.log("event :", e);
    setImage(e.target.files[0]);
  };

  // handle click ketika tombol di klik
  const handleClick = () => {
    let body = new FormData();
    body.append("image", image);

    let config = {
      method: "put",
      url: "http://localhost:8000/api/profile/photo",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "multipart/form-data",
      },
      data: body,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        alert("update foto berhasil");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("update foto gagal");
      });
  };

  // side effect
  useEffect(() => {
    const config = {
      method: "get",
      url: "http://localhost:8000/api/profile",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
      },
    };
    axios(config)
      .then((res) => {
        setData(res.data.data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading === true ? (
        "loading..."
      ) : (
        <div>
          <Navbar />
          <div className="profile-container">
            <div className="profile-avatar">
              <img className="profile-picture" src={data.photo} alt="" />
              <input type="file" onChange={handleChange} />
              <button onClick={handleClick}>Simpan foto</button>
            </div>
            <div className="profile-detail">
              <p className="profile-detail__text">Name : {data.name}</p>
              <p className="profile-detail__text">Tipe Akun : {data.accountType}</p>
              <p className="profile-detail__text">Nomor Telepon : {data.numberPhone}</p>
              <p className="profile-detail__text">email : {data.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
