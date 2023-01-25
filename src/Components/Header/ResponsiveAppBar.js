import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import mobile from "../Respponsive";
import { small } from "../Respponsive";
const Container = styled.div`
  height: 60px;
 ${mobile({height:"50px"})}
 ${small({height:"45px"})}
 
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  ${mobile({padding:"10px 0px"})}
  ${small({padding:"5px 0px"})}
`;
const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:"none"})}
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({justifyContent:"center", flex:1.5})}
${small({justifyContent:"center", flex:1})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
border-radius:5px;
`;
const Input = styled.input`
border:none;
${mobile({width:"50px"})}
${small({width:"50px"})}
`;
const Logo = styled.h1`
  font-weight:bold;
  ${mobile({fontSize:"24px"})}
  ${small({fontSize:"18px"})}
`;

const MenuItem = styled.div`
  font-size:14px;
  margin-left:20px;
  cursor:pointer;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}
  ${small({fontSize:"9px", marginLeft:"8px"})}
`

const ResponsiveAppBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
         <Input placeholder="search"/>
            <SearchOutlinedIcon style={{color:"grey" , fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>

          <Logo>
            AJ-Shop
          </Logo>

        </Center>
        <Right>

        <MenuItem>
          Register
        </MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon/>
          </Badge>
        </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ResponsiveAppBar;
