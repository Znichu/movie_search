import styled from 'styled-components';

export const StyledGrid = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-size: 30px;
    padding-left: 55px;
    color: #2196F3;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const StyledGridContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
