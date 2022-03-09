import styled from "styled-components";

const Explanation = ({ children }) => {
  return <ExplanationStyled>{children}</ExplanationStyled>;
};

const ExplanationStyled = styled.div`
  font-size: 0.875em;
  font-family: var(--font-secondary);
  border-top: 1px dashed var(--color-border);
  margin-top: 2em;
  line-height: 1.5;
`;

export default Explanation;
