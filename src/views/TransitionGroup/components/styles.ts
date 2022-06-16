import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 12px;
  background-color: white;
  color: #111;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  padding: 1em;
  line-height: 0.5rem;
  height: 4rem;
  width: 220px;
  margin: 2rem 0 2rem;
  text-align: left;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
  -webkit-font-feature-settings: "calt" 1;
  font-feature-settings: "calt" 1;
  transition: all 0.1s ease-out;
  text-align: center;

  &:hover {
    color: #000;
    background-color: #fff;
    -webkit-transform: scale(1.025);
    transform: scale(1.025);
    transition: all 0.1s ease-out;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  max-width: calc(100% - 64px);
  margin: 0px auto 90px;

  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
  background-color: #111;
`;

export const StyledH1 = styled.h1`
  color: #ebebeb;
  border-color: #292929;
  line-height: 0.75em;
  font-size: 5em;
  font-weight: 900;
  /* font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important; */
  text-transform: uppercase;
  line-height: 0.75em;
  padding: 48px 0 32px 0;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export const StyledIntroText = styled.div`
  color: #fafafa;
  /* font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important; */
  font-weight: 500;
  font-size: 1em;
  line-height: 1.45em;
  max-width: 900px;
`;

export const StyledTile = styled.div`
  color: #fafafa;
  margin: 0px;

  .card-wrapper {
    position: relative;
  }
  .card {
    background-color: #846267;
    display: grid;
    grid-template-rows: 30px;
    justify-items: start;
    align-items: start;
    width: 100%;
    min-height: 300px;
    padding: 20px;
    border-radius: 8px;
    background-image: linear-gradient(
      135deg,
      hsla(0, 0%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.1)
    );
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Inter, sans-serif;
    color: #18171d;
    font-size: 24px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: -1px;
    text-transform: capitalize;
  }
  h6 {
    margin-top: 0px;
    margin-bottom: 10px;
    opacity: 0.4;
    font-family: Inter, sans-serif;
    color: #18171d;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .card-pill {
    left: 0px;
    right: auto;
    bottom: 0px;
    display: flex;
    overflow: hidden;
    width: 100px;
    opacity: 0.4;
    font-family: Inter, sans-serif;
    color: #000;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    justify-self: start;
    align-self: end;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`;
