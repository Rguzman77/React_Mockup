
import styled from "styled-components";

export const StyledForm = styled.form`
 display: flex;
 align-items: center;
 flex-direction: column;
 background-color: var(--color-primary);
 width: 350px;
 margin: 2em auto;
 border-radius: 20px;
 padding: 2em;

 button{
   width:70%;
 }

 input {
  border-radius: 0.5em;
  height: 2.5em;
  width: 16em;
  border:  1px solid var(--color-borderinput);
  background-color: var(--color-primary);
  margin-bottom: 1em;
  }
  div{
display:flex;
margin-left:2dvh;

}



  
`