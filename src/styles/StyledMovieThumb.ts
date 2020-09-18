import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  background-image:
  background-size: contain;
  background-repeat: no-repeat;
  width:100%;
  max-width: 800px;
  height: 100%;
  min-height: 300px;
  display: block;
  margin: 8vh auto;
  border-radius: 8px;
  box-shadow: 0px 8px 12px 0px rgba(0,0,0,0.25);
  position: relative;
  @media screen and (max-width: 800px) {
    width: 95%;
    max-width: 95%;
  }
  @media screen and (max-width: 600px) {
    background-position:50% 0%;
    background-size: cover;
    height: 400px;
  }
  .movie-card__overlay {
    width:100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(to right, rgba(42,159,255,.2) 0%,rgba(33,33,32,1) 60%,rgba(33,33,32,1) 100%);
    background-blend-mode: multiply;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    @media screen and (max-width: 600px) {
      background: linear-gradient(to bottom, rgba(42,159,255,.2) 0%,rgba(33,33,32,1) 60%,rgba(33,33,32,1) 100%);
    }
  }
  .movie-card__content {
    width: 100%;
    max-width:370px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position:relative;
    float: right;
    padding-right: 1.2em;
    padding-bottom: 1em;
    @media screen and (max-width: 1000px) {
      width: 50%;
    }
    @media screen and (max-width: 600px) {
      margin-top: 4.2em;
      width: 100%;
      float: inherit;
      max-width: 100%;
      padding: 0 1em 1em;
    }
    .movie-card__header {
      margin-bottom: 2em;
      h1 {
        color: #ffffff;
        margin-bottom: .25em;
        opacity: .75;
      }
    }
  }
  .movie-card__desc {
    font-weight: 300;
    opacity: .84;
    margin-bottom: 2em;
  }

h1,h2,h3 {
  font-family: $font-stack-header;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1;
  font-weight: 400;
}

.btn {
  padding: .5rem 2rem;
  background-color: rgba(255,255,255,.4);
  color: rgba(255,255,255,1);
}

.btn-outline {
  background-color: transparent;
  border: 3px solid #ffffff;
}

.btn::before {
  font-family: 'Material Icons';
  content:'\\e037';
  vertical-align: middle;
  font-size: 1.5em;
  padding-right:.5em;
}

.btn-outline:hover {
  border-color: $secondary-color;
  color: $secondary-color;
  box-shadow: 0px 1px 8px 0px rgba(245,199,0,.2);
}
`;
