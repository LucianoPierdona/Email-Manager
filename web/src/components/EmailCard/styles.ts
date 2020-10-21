import styled from "styled-components";

export const EmailCardContent = styled.div`
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0 -3px 8px rgba(207, 27, 31, 0.1),
    0 2px 2px rgba(207, 27, 31, 0.1), 0 4px 4px rgba(207, 27, 31, 0.1),
    0 8px 8px rgba(207, 27, 31, 0.1), 0 16px 16px rgba(207, 27, 31, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h3 {
    color: #cd0a0a;
    margin-bottom: 5px;
  }
  & p {
    color: #eb8f8f;
  }
  & a {
    background: #cd0a0a;
    padding: 5px 7px;
    color: #f1f3de;
    text-decoration: none;
    border-radius: 7px;
    transition: background-color 0.2s;
    transition: box-shadow 0.2s;
    &:hover {
      color: #cd0a0a;
      background: #f1f3de;
      box-shadow: 0 -3px 8px rgba(207, 27, 31, 0.1),
        0 2px 2px rgba(207, 27, 31, 0.1), 0 4px 4px rgba(207, 27, 31, 0.1),
        0 8px 8px rgba(207, 27, 31, 0.1), 0 16px 16px rgba(207, 27, 31, 0.1);
    }
  }
`;
