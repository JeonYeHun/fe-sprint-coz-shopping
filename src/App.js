import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AppWrapper = styled.div`
  * {
    box-sizing: border-box;
    text-decoration: none;

    font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Nav />
        <Routes>
          <Route path="/" />
        </Routes>
        <MainPage />
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
