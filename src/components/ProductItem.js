import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  position: relative;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 5px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 10px;
`;
const DetailContainer2 = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬을 위해 flex-end로 설정 */
  padding: 10px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: black;
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
  color: black;
`;
const SubTitle2 = styled.div`
  margin-left: 10px;
  color: black;
`;

const Brand = styled.span`
  color: black;
`;

const Discount = styled.span`
  font-weight: bold;
  color: #452cdd;
`;

const Numbers = styled.span`
  font-size: 0.9rem;
  color: black;
  margin-top: 5px;
`;

const ProductItem = ({ item }) => {
  return (
    <ItemContainer>
      <ImageBox>
        <Image src={item.image_url ? item.image_url : item.brand_image_url} />
      </ImageBox>
      <DetailContainer>
        {item.title ? (
          <Title>{item.title}</Title>
        ) : (
          <SubTitle>{item.brand_name}</SubTitle>
        )}
        {(() => {
          switch (item.type) {
            case "Brand":
              return <Brand>관심고객수</Brand>;
            case "Product":
              return <Discount>{item.discountPercentage}%</Discount>;
            default:
              return null;
          }
        })()}
      </DetailContainer>
      <SubTitle2>{item.sub_title && <span>{item.sub_title}</span>}</SubTitle2>
      <DetailContainer2>
        <Numbers>
          {(() => {
            switch (item.type) {
              case "Product":
                return `${item.price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`;
              case "Brand":
                return item.follower
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
              default:
                return null;
            }
          })()}
        </Numbers>
      </DetailContainer2>
    </ItemContainer>
  );
};

export default ProductItem;
