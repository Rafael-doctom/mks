import React from "react";
import Image from "next/image";
import { Text } from "../text/text";

// svg
import LogoSvg from "../../assets/logo.svg";

// styles
import { Container, WrapperImage } from "./styles";
import { Car } from "../car";

const Header = () => {
  return (
    <Container>
      <WrapperImage>
        <Image
          priority
          src={LogoSvg}
          height={32}
          width={128}
          alt="Follow us on Twitter"
        />
        <Text
          text="Sistemas"
          align="left"
          color="white"
          size={12}
          weight={"300"}
          marginTop={20}
          marginLeft={10}
        />
      </WrapperImage>
      <Car />
    </Container>
  );
};

export { Header };
