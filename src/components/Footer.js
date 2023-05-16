import styled from "styled-components";

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #777;
`;

const BoldText = styled.span``;

function Footer() {
  return (
    <FooterWrapper>
      <Info>
        <BoldText>개인정보 처리방침 | 이용약관</BoldText>
        All rights reserved @ Codestates
      </Info>
    </FooterWrapper>
  );
}

export default Footer;
