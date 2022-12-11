import styled from "styled-components";

export const Divider = styled.hr`
  width: 100%;
  border: 0.025rem solid ${({ theme }) => theme.palette.darkGrey};
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
