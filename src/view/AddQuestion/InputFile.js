import React, { Component } from "react";

export default function InputFile(props) {
  return (
    <textarea
      class="form-control"
      id={props.id}
      rows="3"
      style={{ width: "500px" }}
      onChange={props.functionName}
    ></textarea>
  );
}
