import styled from "styled-components";

export const Main = styled.div`
  /* flex: 1 1 100%; // Added as it's child of column flex element. */
  max-width: min(
    calc(100% - 2rem),
    ${({ maxWidth }) => (maxWidth ? maxWidth + "em" : `var(--site-width)`)}
  );
  margin: auto;
  width: 100%;
`;
