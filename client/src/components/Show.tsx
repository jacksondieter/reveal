import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { NotFound } from "./NotFound";
import { api } from "../config";

export function Show() {
  let { id } = useParams<{ id: string }>();
  const [{ data: response, loading, error }] = useAxios({
    baseURL: api,
    url: `/${id}`,
  });
  const [show, setShow] = useState(false);
  let labelBox = "Hush! A secret has been shared with you";
  if (loading) return <p>Loading...</p>;
  if (error?.response?.status === 404) {
    return <NotFound />;
  }
  if (error) return <p>Error!</p>;
  if (show) {
    labelBox = "Here you go";
  }
  return (
    <div>
      <label className="labelbox">{labelBox}</label>
      {show ? (
        <textarea defaultValue={response.data} className="box" readOnly />
      ) : (
        <div className="box">
          <button
            onClick={() => setShow(true)}
            className="btn core-blue reveal-btn"
          >
            Reveal now
          </button>
        </div>
      )}
    </div>
  );
}
