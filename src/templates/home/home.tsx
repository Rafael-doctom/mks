/**
 * IMPORTS
 */
// import { useSelector } from 'react-redux';

import { CardProduct } from "@/components/card-product";
import { Header } from "@/components/header";
import { Container, ProductsFooter, WrapperProducts } from "./styles";

const HomeTemplate = () => {
  // const { reducer }: any = useSelector(state => state);

  return (
    <Container>
      <Header />
      <WrapperProducts>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </WrapperProducts>

      <ProductsFooter>
        <p> MKS sistemas © Todos os direitos reservados</p>
      </ProductsFooter>
    </Container>
  );
};

/**
 * EXPORTS
 */
export { HomeTemplate };
