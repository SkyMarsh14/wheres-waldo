import styled from "styled-components";
import { Link } from "react-router-dom";
const HomeLink = styled(Link)`
  align-self: center;
  background-color: #62beff;
  color: #320000;
  padding: 0.3em 0.5em;
  border-radius: 7px;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  &:visited {
    color: #2c0000;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 3.5px 7px 7px hsl(0deg 0% 0% / 0.39);
  }
`;
export default HomeLink;
