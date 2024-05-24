import styled from 'styled-components';

export const Tr = styled.tr`
  &:only-child {
    border-bottom: none;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  &.sr-no {
    width: 6rem;
  }

  &.category-image {
    width: 10rem;
  }

  &.category-name {
    width: 35rem;
  }

  &.actions {
    width: 6rem;
    display: flex;
    gap: 1rem;
  }
`;

export const Td = styled(Th).attrs({ as: 'td' })``;
