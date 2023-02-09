
import JoinForm from "./JoinForm";
import {JoinTextStyle}  from './JoinTextStyle'
import { Footer } from "../Customs";
import { Register } from "./Register";

type Props = {};

const Join = (props: Props) => {
  return (
    <Register>
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
    </Register>
  );
};

export default Join;
