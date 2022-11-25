import styled from "styled-components";

export const NavBarContainer = styled.header`
  background:  #07C8F9;
  display: flex;
  min-height: 10vh;
  width: 100%;
`;

export const NavBarWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const NavBarLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 30px;
`;

export const Navigation = styled.nav`
    border-bottom-width: "solid 1px";
    padding-bottom: "1rem";
`;

export const NavBarRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 30px;
`;

export const NavBarSignatureText = styled.h1`
    font-size: 30px
`