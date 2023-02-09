import styled from "styled-components";

export const Landing = styled.section`
    padding: 0 6em 0 6em;
    align-items: center;
    margin: 0 auto;
    
    
.cta{
        height: 100vh;
        display: flex;
        flex-direction:column;
        justify-content: center;
        font-size: large;
        width:30dvh;
    }
    
.cta p{
        font-size:large;
        font-weight: 500;
    }
    h1{
        font-size: 7dvh;
        font-weight: 500;
    }
    
    button{
        width:15vh;
    }
    
img {       
            margin-top:100px;
            display: none;
            height: 70vh;

        }
    
    @media screen and (min-width: 768px) {
        
            display: grid;
            grid-template-columns: 1fr 1fr;
            
            
        .cta{
            margin-left:20vh;
            grid-column: 2;
        }
        
        img{
            display:grid;
            margin-left:20vh ;
            grid-column: 1;
            
        }
        
    }

`