/**
 * IMPORTS
 */

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCartSimple } from "phosphor-react";

// styles
import { Container, DescProduct, Main, TitleProduct } from "./styles";
import { Text } from "../text";
import { ButtonPurchase } from "../buttons/button-purchase";

const CardProduct = () => {
  const [quantity, setQuantity] = useState(1998);
  return (
    <Container>
      <Main>
        <img
          src="https://m.media-amazon.com/images/I/41DD9PuKapL._AC_.jpg"
          alt="image-product"
        />

        <TitleProduct>Apple Watch Series 4 GPS</TitleProduct>

        <DescProduct>
          Redesigned from scratch and completely revised.
        </DescProduct>
      </Main>

      <ButtonPurchase />
    </Container>
  );
};

/**
 * EXPORTS
 */
export { CardProduct };
