import { IContentProps } from "./index.d";
import { Wrapper } from "./styles";

/**
 * IMPORTS
 */
const Content = ({ children }: IContentProps) => {
  return <Wrapper>{children}</Wrapper>;
};

/**
 * EXPORTS
 */
export { Content };
