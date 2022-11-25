import { NavBarContainer, NavBarLeft, NavBarRight, NavBarWrapper, Navigation, Logo, NavBarSignatureText } from "./NavBarElements";
import { NavLink } from "react-router-dom";
import ReactImage from '../../assets/images/react.png';


const NavBar = () => {
    return (
        <>
            <NavBarContainer>   
                <NavBarWrapper>
                    <NavBarLeft>
                        <h1> ( THEEPATHILAGAN Samina | Projet Calendrier ) </h1>  
                    </NavBarLeft>
                    <NavBarRight>
                    <Navigation>
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '30px', fontFamily:"Gill Sans" }}>Accueil</NavLink> | {" "}
                            <NavLink to="/book" style={{ textDecoration: 'none', color: 'black', fontSize: '30px',  fontFamily:"Gill Sans" }}>Réserver</NavLink>
                    </Navigation>
                    </NavBarRight>
                </NavBarWrapper>
            </NavBarContainer>
        </>
    );
};

export default NavBar;