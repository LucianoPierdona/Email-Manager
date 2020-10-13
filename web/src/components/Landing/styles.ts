import styled from "styled-components";

export const HeaderLanding = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #999;
  align-items: center;
  & h1 {
    font-size: 25px;
    color: #999;
  }
  & p {
    color: #cf1b1f;
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
