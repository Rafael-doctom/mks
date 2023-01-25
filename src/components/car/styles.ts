import styled from "styled-components";

const Container = styled.div`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.natural};

  padding-left: 12px;
  padding-right: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
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

export { Container, WrapperImage };
