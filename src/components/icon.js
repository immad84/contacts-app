import styled from 'styled-components';

export const Icon = styled.img`
  background: ${({ bg }) => bg || '#FF0000'};
  width: 36px;
  height: 36px;
  border-radius: 10px;
  vertical-align: middle;
  padding: 0.5rem;
`;
