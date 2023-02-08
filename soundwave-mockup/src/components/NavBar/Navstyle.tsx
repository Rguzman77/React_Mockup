import styled from 'styled-components'


export const NavBarStyle = styled.nav ` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem ;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    background-color: var(--color-bg);
    

.navbar__logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--color-);
}
.navbar__logo img{
    height: 60px;
    margin-right: 20px;

}
.navbar__logo{
    font-weight: 600;
    font-size: 1.2em;
}
 
.navbar-links_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

} 
.navbar-links_container a {
    margin: 4%;
}
`