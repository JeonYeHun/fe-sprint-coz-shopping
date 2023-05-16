import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { ImGift, ImStarEmpty } from "react-icons/im";
const NavWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 6rem;
  position: relative;
  border-bottom: solid 2px rgb(212, 212, 212);
  box-shadow: 0 4px 15px -8px #222;
  display: flex;
  place-items: left;
`;

const Title = styled.span`
  position: absolute;
  font-weight: 700;
  font-size: 2rem;
  margin-top: 30px;
  margin-left: 50px;
`;

const Name = styled.span`
  vertical-align: middle;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 1rem;
  vertical-align: middle;
`;

const DropMenu = styled.div`
  list-style: none;
  margin: 2.5rem 6rem 6rem auto;
  justify-content: flex-end;
  font-size: xx-large;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: row;
`;

const DropdownContainer = styled.div`
  font-size: large;
  position: absolute;
  margin-top: 40px;
  padding-top: 10px;
  left: -80px;
  width: 190px;
  height: 150px;
  background-color: whitesmoke;
  border-radius: 10px;
  li {
    text-align: center;
    text-decoration-line: none;
    margin-bottom: 10px;
    padding: 5px 0;
    border-bottom: 1px solid gray;
  }
`;

function Nav() {
  const [view, setView] = useState(false);

  function dropClickHandler() {
    setView(!view);
  }

  function Dropdown() {
    return (
      <DropdownContainer>
        <li>전예훈님, 안녕하세요!</li>
        <li>
          <ImGift />
          상품리스트 페이지
        </li>
        <li>
          <ImStarEmpty />
          북마크 페이지
        </li>
      </DropdownContainer>
    );
  }

  return (
    <NavWrapper>
      <Title>
        <Logo src="../logo.png" alt="logo" />
        <Name>COZ Shopping</Name>
      </Title>
      <DropMenu>
        <AiOutlineMenu onClick={dropClickHandler} />
        {view && <Dropdown />}
      </DropMenu>
    </NavWrapper>
  );
}

export default Nav;
