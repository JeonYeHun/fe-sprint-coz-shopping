import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;
const ProductTitle = styled.div`
  font-weight: 650;
  font-size: 1.5rem;
  position: relative;
  padding-left: 40px;
  margin: 10px;

  justify-content: left;
`;

const Item = styled.li`
  width: 440px;
  height: 350px;
  margin: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;
const NoData = styled.p`
  font-size: 1.2rem;
  color: var(--gray-900);
  margin-top: 20px;
`;

const ProductList = ({ isLoading, title, datas }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (datas.length === 0) {
    return <NoData>상품이 없습니다.</NoData>;
  }

  return (
    <>
      <ProductTitle>{title}</ProductTitle>
      <List>
        {datas.map((data) => (
          <Item key={data.id}>
            <Link to={`/products/${data.id}`}>
              <ProductItem item={data} />
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ProductList;
