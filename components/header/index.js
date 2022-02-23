import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <span>by Alex Dimitrov</span>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 1.25em 0;
  font-size: 0.875rem;
`;

export default Header;
