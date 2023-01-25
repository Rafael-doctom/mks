import styled, { css } from "styled-components";

const TextStyled: any = styled.p`
  color: ${({ color, theme }: any) => color || theme.natural};
  font-size: ${({ size = 16 }: any) => size}px;
  width: ${({ width = 0 }: any) => width}%;
  text-align: ${({ align = "center" }: any) => align};
  margin: ${({ margin = 0 }: any) => margin}px;
  line-height: ${({ size = 0 }: any) => size * 1.3}px;
  margin-bottom: ${({ marginBottom = 0 }: any) => marginBottom}px;
  margin-top: ${({ marginTop = 0 }: any) => marginTop}px;
  margin-left: ${({ marginLeft = 0 }: any) => marginLeft}px;
  margin-right: ${({ marginRight = 0 }: any) => marginRight}px;
  font-weight: ${({ weight = "400" }: any) => weight};
  text-decoration-line: ${({ textDecoration }: any) =>
    textDecoration || "none"};
  font-family: ${({ fontFamily }: any) => fontFamily || "Poppins"};
  letter-spacing: ${({ letterSpacing = 1 }: any) => letterSpacing}px;
  line-height: ${({ letterHeight = 0 }: any) => letterHeight}px;
  z-index: ${({ zIndex = 1 }: any) => zIndex};
  position: relative;
  ${({ ellipsis }: any) =>
    ellipsis &&
    css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  `}
`;

export { TextStyled };
