import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 50px;
`;

export const StyledGridContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledHeaderCategory = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1 {
        font-size: 30px;
        color: #2196F3;
        margin-left: 70px;

        @media screen and (max-width: 768px) {
        font-size: 20px;
        }
    }
    a {
       margin-right: 70px;
       font-size: 15px;
        font-weight: bold;
        text-decoration: none;
        color: #2196F3;
        border: 1px solid #f0f2f5;
        padding: 5px;
        border-radius: 4px;
        &:hover {
            color: #5c9ce6;
        }
    }
`;
