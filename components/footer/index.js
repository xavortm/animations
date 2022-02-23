import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Time spent working on this: 4 hours</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1.25em 0;
  font-size: 0.875rem;
`;

export default Footer;
