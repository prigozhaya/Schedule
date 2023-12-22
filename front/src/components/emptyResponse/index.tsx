import styled from 'styled-components';

const EmptyResponseIconContainer = styled.div`
display: flex;
justify-content: center;
padding: 20px;
`;

const EmptyResponseIconImg = styled.img`
    max-width: 500px;
    width: 100%;
    height: 100%;
    opacity: 0.5;
`;

export default function EmptyResponseIcon() {
    return (
        <EmptyResponseIconContainer>
            <EmptyResponseIconImg src="src/assets/emptyResponse.svg" alt="emptyResponse" />
        </EmptyResponseIconContainer>
    );
}
