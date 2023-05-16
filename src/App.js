import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const AppWrapper = styled.div`
  * {
    box-sizing: border-box;

    color: var(--gray-900);
    font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Nav />
      <Footer />
    </AppWrapper>
  );
}

export default App;
