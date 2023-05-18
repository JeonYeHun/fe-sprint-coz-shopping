import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";
const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding-top: 24px;
  flex-grow: 1;
`;

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        setDatas(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, []);

  return (
    <Container>
      <ProductList isLoading={isLoading} title="상품 리스트" datas={datas} />
    </Container>
  );
};

export default MainPage;
