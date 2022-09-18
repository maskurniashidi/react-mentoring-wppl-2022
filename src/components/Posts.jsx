import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/styles.css";

function Posts() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    // ini diperlukan ketika kalian memperlukan authentikasi untuk GET data, jika tidak perlu. bisa tidak pake
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("TOKEN"),
    //     "Content-Type": "application/json",
    //   },
    // };

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setData(res.data);
        // setData(data.filter((data) => data.id < 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Post</h1>
      {data.map((data) => {
        return (
          <Link 
            to={`/post/${data.id}`} 
            key={data.id}
            style={{textDecoration: 'none', color: 'black'}}
          >
            <hr/>
            <p>Id: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
