import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { BiCameraMovie } from "react-icons/bi";
import { RiSlideshow3Fill } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = styled.header`
  color: #d5d5d5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: bolder;
  font-family: sans-serif;
  background-color: rgba(12, 12, 12, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(39, 39, 39, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#747474" : "transparent")};
  transition: border-bottom 0.6s ease-in-out;
`;

const Logo = styled.h1`
  font-size: 27px;
  font-weight: 900;
  color: #db005b;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 라우터로 인해 컴포넌트가 교체되면 Header에 변화를 줘야한다.
// 탭 아래에 파란색 밑줄이 생기는 효과를 줄 것이다.
// 어떠한 라우터로 이동하는지 알아야 하기 때문에 withRouter 를 사용해야 한다.

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Logo>Bitflix</Logo>

    <List>
      <Item current={pathname === "/"}>
        <StyledLink to="/">
          {" "}
          <BiCameraMovie size="20" />
          영화
        </StyledLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <StyledLink to="/tv">
          <RiSlideshow3Fill size="20" />
          TV
        </StyledLink>
      </Item>
      <Item current={pathname === "/search"}>
        <StyledLink to="/search">
          <BiSearchAlt2 size="20" />
          검색
        </StyledLink>
      </Item>
    </List>
  </Header>
)); //() 소괄호 리턴 바로 하는것!
