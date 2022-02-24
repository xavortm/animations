import styled, { keyframes } from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <TimeItTook>
        Time spent working on this: 4 hours <Clock />
      </TimeItTook>
    </FooterWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Clock = styled.span`
  height: 1.5em;
  width: 1.5em;
  border-radius: 50%;
  border: 1px dotted var(--color-foreground);
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    width: 0.5em;
    height: 0.125em;
    top: calc(50% - 0.0625em);
    left: 50%;
    position: absolute;
    background: var(--color-foreground);
    animation: ${rotate} 15s linear infinite;
    transform-origin: left center;
  }
`;

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1.25em 0;
  font-size: 0.875rem;
`;

const TimeItTook = styled.p`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export default Footer;
