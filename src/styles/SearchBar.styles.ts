import styled from 'styled-components';

export const SearchBarStyles = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: #1c1c1c;
  padding: 0 20px;
`;

export const StyledSearchBarContent = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;
  
  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 18px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
