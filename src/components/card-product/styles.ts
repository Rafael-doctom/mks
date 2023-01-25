import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  /* height: 285px; */
  border-radius: 8px;
  background-color: ${({ theme }) => theme.natural};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 20px;
`;

const Main = styled.div`
  width: 220px;
  padding-left: 12px;
  padding-right: 12px;

  margin-bottom: 16px;
`;

const TitleProduct = styled.h3`
  bottom: 27.02%;
  margin-top: 16px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;

const DescProduct = styled.h3`
  margin-top: 8px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
`;
const WrapperImage = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

/**
 * EXPORTS
 */

export { Container, Main, TitleProduct, DescProduct, WrapperImage };
