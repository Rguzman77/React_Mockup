import styled from "styled-components";

export const DiscoverStyle=styled.section`
display:block;
margin: auto;
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
    display:block;
    margin:auto;

}
@media screen and (min-width: 768px) {
    display: grid;
    grid-template-areas:
        "discover img"
        "cards img"
        "join img";
    margin-left: 30vh;
    height: 70vh;
    width: 170vh;
    justify-content: start;
    align-content: center;
    align-items: center;

p{
    grid-column: 1;
    grid-row:3;
    margin:0 auto;
}

.discover{
    grid-area:discover;
    margin:0 auto;
}
section{
    grid-area:cards;
    margin:0 auto;
       
}

.albumcover{
      grid-area:img;
      margin: 0 auto;
}
section>div{
    margin-right:3vh;
}

}
`