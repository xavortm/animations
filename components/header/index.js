import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderWrapper>
      <span>by</span>
      <Link passHref href="https://xavortm.com">
        <AnimatedLink title="Alex Dimitrov" href="https://xavortm.com">
          Alex Dimitrov
        </AnimatedLink>
      </Link>
    </HeaderWrapper>
  );
};

const AnimatedLink = styled.a`
  --padding: 0.5em 0.75em;

  position: relative;
  padding: var(--padding);
  display: inline-block;
  overflow: hidden;
  margin-left: 0.5em;
  transition: 0.1s;
  color: transparent;
  font-weight: 500;

  &:after,
  &:before {
    content: attr(title);
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    background: var(--color-foreground);
    color: white;
    padding: var(--padding);
    transform: translateY(100%);
    transition: 0.2s;
  }

  &:before {
    color: var(--color-foreground);
    transform: translateY(0);
    background: transparent;
  }

  &:hover:after {
    transform: translateY(0);
  }

  &:hover:before {
    transform: translateY(-100%);
  }
`;

const HeaderWrapper = styled.header`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25em var(--mobile-gutter);
`;

export default Header;
