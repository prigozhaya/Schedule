import styled from 'styled-components';

const StyledBtn = styled.button<{ $primary?: boolean }>`
  box-sizing: border-box;
  background: ${({ $primary }) => ($primary ? '#4D59A1' : '#ffffff')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#000000')};
  padding: 0.25em 1em;
  border: solid 1px #4D59A1;
  border-radius: 3px;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background: ${({ $primary }) => ($primary ? '#2f3766' : '#c8d0fe')};
  }
`;

export { StyledBtn};
