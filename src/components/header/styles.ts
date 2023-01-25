import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.blue_100};

  padding-left: 4.33rem;
  padding-right: 5.85rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
