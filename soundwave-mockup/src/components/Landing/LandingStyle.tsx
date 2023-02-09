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
    
.landingimg {
            display: none;
        }
    
    @media screen and (min-width: 768px) {
        * {
            display: grid;
            grid-template-columns: 1fr 1fr;
            
        }
        
        .landingimg{
            display:block;
            height:50vh;
        }
        
}

`