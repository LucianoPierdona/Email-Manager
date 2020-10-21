import styled from "styled-components";

// Styling for the landing page
export const HeaderLanding = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #ec0101;
  align-items: center;
  & h1 {
    font-size: 25px;
    color: #ec0101;
  }
  & .link {
    text-decoration: none;
    color: #cd0a0a;
    transition: color 0.2s;
    cursor: pointer;
    margin-left: 2px;
    background: #fff;
    border: 0;
    font-size: 14px;
    &:hover {
      color: #ec0101;
    }
  }
`;

export const EmailList = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;
