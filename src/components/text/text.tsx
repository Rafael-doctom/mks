/**
 * IMPORTS
 */
import React from "react";
import { TextStyled } from "./styles";
import { ITextProps } from "./index.d";

const Text: React.FC<ITextProps> = ({
  id,
  text,
  color,
  size,
  align,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  margin,
  weight,
  textDecoration,
  ellipsis,
  ...rest
}) => (
  <TextStyled
    id={id}
    color={color}
    size={size}
    align={align}
    marginBottom={marginBottom}
    marginTop={marginTop}
    marginLeft={marginLeft}
    marginRight={marginRight}
    margin={margin}
    weight={weight}
    textDecoration={textDecoration}
    ellipsis={ellipsis}
    {...rest}
  >
    {text}
  </TextStyled>
);

/**
 * EXPORTS
 */
export { Text };
