import styled from "styled-components";

export const Landing = styled.section`
    height: 100vh;
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    padding: 0 6em 0 6em;
    align-items: center;
    justify-content: center;
    column-gap: 2em;
    row-gap: 2em;
    margin: 0 auto;
    .landingimg {
      display: none;
    }
    .cta{
        display: grid;
        align-items: center;
        justify-content: center;
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