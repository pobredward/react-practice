import React from "react";
import "./styles.css";
import useFetch from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

export default function App() {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div className="App">
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>Post</h1>
      {userData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
}
