import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';


const Container = styled.div`

margin:3px;
height:70vh;
flex:1;
position:relative;
border:1px solid grey;
background-color:grey;

`
const Title = styled.h1`
color:white;
margin-bottom:20px;
font-weight:600;
`
const Info = styled.div`
position:absolute;
height:100%;
width:100%;
top:0;
left: 0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Image = styled.img`
height:100%;
width:100%;
object-fit:cover;
`
const Button = styled.button`
border:none;
background-color:white;
padding:10px;
color:gray;
cursor:pointer;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
              <Title>{item.title}</Title>
              <Button>Shop Now</Button>
            </Info>
        </Link>    
    </Container>
  )
}

export default CategoryItem
