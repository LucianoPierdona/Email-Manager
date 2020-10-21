import styled from "styled-components";

export const HeaderAndFooterEmail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  align-items: center;
  margin: 0 auto;
  padding: 25px 0;
  & p {
    font-size: 20px;
    color: #cd0a0a;
  }
  & p strong {
    color: #000;
  }
  & a {
    color: #f1f3de;
    text-decoration: none;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 8px;
    background: #cd0a0a;
    transition: 0.2s;
    &:hover {
      color: #cd0a0a;
      box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
        0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
        0 16px 16px rgba(0, 0, 0, 0.1);
      background: #f1f3de;
    }
  }
`;

export const EmailContent = styled.div`
  width: 70%;
  margin: 0 auto;
  & h1 {
    font-size: 23px;
    color: #cd0a0a;
    margin-bottom: 10px;
  }
  p {
    color: #eb8f8f;
    font-weight: 500;
    ]margin-bottom: 25px;
  }
`;

export const MoreInformationContent = styled.div`
  width: 70%;
  margin: 30px auto;
  & h1 {
    width: 100%;
    text-align: center;
    font-size: 23px;
    color: #cd0a0a;
    margin-bottom: 10px;
  }
  & a {
    color: #cd0a0a;
    text-decoration: none;
    font-weight: 700;
    transition: 0.2s;
    &:hover {
      color: #cd0a0a;
      text-decoration: underline;
    }
  }
`;
