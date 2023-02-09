import React from "react";
import JoinForm from "./JoinForm";
import {JoinTextStyle}  from './JoinTextStyle'
import { Footer } from "../Customs";

type Props = {};

const Join = (props: Props) => {
  return (
    <>
      <JoinTextStyle>
        <div>
        <h2>
          Join The<div>fun.</div>
        </h2>
        </div>
      </JoinTextStyle>
      <span>
        <JoinForm/>
      </span>
      <Footer/>
    </>
  );
};

export default Join;
