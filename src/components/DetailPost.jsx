import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/styles.css";

function DetailPost() {
  
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // ini diperlukan ketika kalian memperlukan authentikasi untuk ngege data, jika tidak perlu. bisa tidak pake
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("TOKEN"),
    //     "Content-Type": "application/json",
    //   },
    // };
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-division">
        <p>Id : {data.id}</p>
        <p>Title : {data.title}</p>
        <p>Body : {data.body}</p>
        <div className="note">
          Teman-teman hanya bisa melihat tulisan ini jika sudah LOGIN / ter-Autentikasi
        </div>
      </div>
    </>
  );
}

export default DetailPost;
