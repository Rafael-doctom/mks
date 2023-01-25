import styled from "styled-components";

const Container = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
`;

const WrapperProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 116px;
  background: transparent !important;
  padding: 24px;
`;

const ProductsFooter = styled.div`
  width: 100%;
  height: 40px;
  background: #eeeeee;

  display: flex;
  align-items: center;
  justify-content: center;
`;
/**
 * EXPORTS
 */
export { Container, WrapperProducts, ProductsFooter };
