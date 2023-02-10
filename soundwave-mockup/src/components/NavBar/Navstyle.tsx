import styled from 'styled-components'


export const NavBarStyle = styled.nav ` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem ;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--color-bg);
    

.navbar__logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--color-);
    margin-left:1vh;
    font-weight: 500;
    font-size: 1.4em;
}

.navbar__logo img{
    height: 40px;
    margin-right: 10px;

}
 
.navbar-links_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right:4vh;
} 
.navbar-links_container a {
   
    font-size: large;
    margin-right: 0.5dvh;
}

@media screen and (min-width: 768px) {
    width: 150vh;
    margin:0 auto;

    .navbar-links_container a {
   
   margin-right: 3vh;
}

}
`