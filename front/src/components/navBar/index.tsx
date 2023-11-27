import {
    StyledHeader,
    StyledNavBarContainer,
    StyledNavBarLinks,
    StyledNavBarLinksContainer,
    StyledNavBarLogo,
    StyledNavBarMenu,
    StyledNavigation,
    StyledWraperHeader,
    StyledWraperTitle,
} from './styles';

export default function NavBar() {
    return (
        <StyledHeader>
            <StyledWraperHeader>
                <StyledNavBarContainer>
                    <StyledWraperTitle>Расписание МГЛУ</StyledWraperTitle>
                </StyledNavBarContainer>
            </StyledWraperHeader>
            <StyledNavBarContainer>
                <StyledNavBarLogo src="./src/assets/logo.png" alt="MSLU logo" />
                <StyledNavigation>
                    <StyledNavBarMenu>
                        <StyledNavBarLinksContainer>
                            <StyledNavBarLinks>
                                Расписание групп
                            </StyledNavBarLinks>
                            <StyledNavBarLinks>
                                Расписание преподавателей
                            </StyledNavBarLinks>
                        </StyledNavBarLinksContainer>
                    </StyledNavBarMenu>
                </StyledNavigation>
            </StyledNavBarContainer>
        </StyledHeader>
    );
}
