import styled from "styled-components";

export const DiscoverStyle=styled.section`
margin-top:92px;
display:flex;
flex-direction:column;
p{
    font-size: 1.2em;
    display:flex;
    justify-content: center;
    align-items: center;
    width:50%;
    margin: 0 auto;
}


.discover{
    font-weight: 500;
    font-size: 7vh;
    margin-left:3px;
}
section{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin:10px;
    
    
    
}

section>div{
    height:15vh;
    width: 15vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #202027;

}

section>div>img{
    height: 7vh;
    margin-bottom:2vh
    
}

img{
    height: 42vh;
    
}


`