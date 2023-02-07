import React from "react";
import JoinForm from "./JoinForm";

type Props = {};

const Join = (props: Props) => {
  return (
    <>
      <span>
        <h2>
          Join The<div>fun.</div>
        </h2>
      </span>
      <span>
        <JoinForm/>
      </span>
    </>
  );
};

export default Join;
