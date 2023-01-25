/**
 * IMPORTS
 */

import React from "react";
import { ShoppingCart } from "phosphor-react";

// styles
import { Container, TitleButton } from "./styles";

const ButtonPurchase = () => {
  return (
    <Container>
      <ShoppingCart size={22} color="white" fontWeight={700} />
      <TitleButton>Comprar</TitleButton>
    </Container>
  );
};

/**
 * EXPORTS
 */
export { ButtonPurchase };
