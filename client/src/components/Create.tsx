import React, { useState } from "react";
import useAxios from "axios-hooks";
import { api } from "../config";
import { UrlBox } from "./UrlBox";

export function Create() {
  const [{ data: response, loading, error }, executePost] = useAxios(
    {
      url: api,
      method: "POST",
    },
    { manual: true }
  );
  const [secret, setSecret] = useState("");
  let labelBox = "Sharing secrets has never been easier!";
  let labelBtn = "Share now";
  const sendSecret = () => {
    if (!secret || response) return;
    const data = {
      text: secret,
    };
    executePost({ data });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (response) {
    labelBox = "Your secret has been shared successfully";
    labelBtn = "Success!";
  }
  let style = response
    ? "btn share-btn lighter-kiwi"
    : "btn share-btn core-blue";
  return (
    <div>
      <label className="labelbox">{labelBox}</label>
      <textarea
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        className="box"
      />
      <button onClick={sendSecret} className={style}>
        {labelBtn}
      </button>
      {response && <UrlBox code={response.data} />}
    </div>
  );
}
