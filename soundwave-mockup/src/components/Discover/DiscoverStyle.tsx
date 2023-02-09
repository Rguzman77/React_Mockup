import styled from "styled-components";

export const DiscoverStyle=styled.section`
margin-top:92px;
display:flex;
flex-direction:column;
p{
    font-size: 1.1em;
    width:80%;
    margin: 0 auto;
}

.discover{
    font-weight: 500;
    font-size: 5.5vh;
    margin:0 auto;
    padding-bottom: 10px;
}
section{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin:10px;
    padding-bottom: 10px;
       
}

section>div{
    height:13vh;
    width: 11vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #202027;

}

section>div>img{
    height: 7vh;
    margin-bottom:1vh;
}

.albumcover{
    height: 30vh;
    width:30vh;
    margin-left: auto;
    margin-right: auto;

}

`