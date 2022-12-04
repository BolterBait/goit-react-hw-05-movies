import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 24px;
 `;

export const CardWrapper = styled.div`
  border: none;
`;

export const BackLink = styled(Link)`
position: absolute;
right: 40px;
`
