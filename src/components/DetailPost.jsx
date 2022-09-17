import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

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
      <div>
        <p>id : {data.id}</p>
        <p>title : {data.title}</p>
        <p>body : {data.body}</p>
      </div>
    </>
  );
}

export default DetailPost;
