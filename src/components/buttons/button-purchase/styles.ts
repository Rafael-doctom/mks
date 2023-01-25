import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 32px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${({ theme }) => theme.blue_100};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TitleButton = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.natural};
  margin-left: 8px;
`;

/**
 * EXPORTS
 */

export { Container, TitleButton };
