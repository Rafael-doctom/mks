/**
 * IMPORTS
 */

import React, { useState } from "react";
import { ShoppingCartSimple } from "phosphor-react";

// styles
import { Container } from "./styles";

const Car = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Container>
      <ShoppingCartSimple size={22} color="black" fontWeight={700} />

      <span>
        {String(quantity).length > 3
          ? String(quantity).substr(0, 3) + "..."
          : quantity === 1 && quantity - 9 && `0${quantity}`}
      </span>
    </Container>
  );
};

/**
 * EXPORTS
 */
export { Car };
