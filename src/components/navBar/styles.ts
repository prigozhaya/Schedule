import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
`;

export const StyledWraperHeader = styled.div`
  background: #4D59A1;
  width: 100%;
  display: flex;
  height: 100px;
  color: #FFFFFF;
`;

export const StyledWraperTitle = styled.h2`
    color: #FFFFFF;
    position: absolute;
    left: 210px;
    margin: 31px 0;
`;

export const StyledNavigation = styled.div`
  height: 60px;
  background: #FFF;
  display: flex;
`;

export const StyledNavBarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;


export const StyledNavBarLinks = styled.a`
color: #000;
text-decoration: none;
font-size: 18px;
`;

export const StyledNavBarLinksContainer = styled.div`
width: 480px;
display: flex;
justify-content: space-around;
padding-left: 180px;
    padding-top: 10px;
`;

export const StyledNavBarMenu = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin-left: 30px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.20);
`;

export const StyledNavBarLogo = styled.img`
position: absolute;
bottom: -30px;
z-index: 99;
`;

