import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  background-color: transparent;
  list-style-type: none;
`;
export const LestElement = styled.li`
  float: right;
  margin-right: 3px;
  & a:hover {
    background-color: #1d2021;
    color: white;
    border-radius: 4px;
  }
`;
export const Link = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  padding: 6px 16px;
`;
export const NavBar = styled.div`
  background: transparent;
  position: sticky;
  top: 10px;
  padding-top: 20px;
  z-index: 3;
`;
