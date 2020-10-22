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
  & .filter {
    font-weight: 700;
  }
  & .link {
    text-decoration: none;
    color: #cd0a0a;
    transition: color 0.2s;
    cursor: pointer;
    margin-left: 5px;
    background: #fff;
    border: 0;
    font-size: 14px;
    outline: none;
    &:hover {
      color: #ec0101;
    }
  }
  @media (max-width: 768px) {
    & div {
      display: flex;
      flex-direction: column;
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FiltersBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  & .header-filters {
    margin-bottom: 15px;
    & h1 {
      width: 100%;
      color: #cd0a0a;
    }
    & p {
      color: #999;
    }
  }
  & ul {
    width: 100%;
    text-align: center;
    display: flex;
    list-style-type: none;
    margin-bottom: 10px;
    padding-bottom: 5px;
    & li {
      font-weight: 500;
      width: 100%;
      cursor: pointer;
      color: #cd0a0a;
      &:hover {
        color: #000;
      }
    }
  }
  @media (max-width: 768px) {
    & ul {
      display: flex;
      flex-direction: column;
      & li {
        margin-bottom: 6px;
      }
    }
  }
`;
