import styled from "styled-components";

// Styling for the NavBar
export const Header = styled.div`
  background: #f1f3de;
  width: 100%;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  & img {
    object-fit: cover;
    transform: scale(2.5);
    height: 43px;
  }
`;

// #cd0a0a
// #F5F6F8
// #ec0101
