import React from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import styled from 'styled-components';



const Container = styled.div`

height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1`
font-weight:600;
font-size:70px;
margin:20px;
`;
const Desc = styled.div`
font-size:24px;
font-weight:400;
margin-bottom:20px;
`;
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgrey;

`;
const Input = styled.input`
padding-left:20px;
border:none;
flex:8;

`;
const Button = styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
`;

const Newsletter = () => {
  return (
   <Container>
    <Title>
    Newsletter
    </Title>
    <Desc>
        Get updates time to time from your favorite producs.
    </Desc>
    <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
            <IosShareIcon/>
        </Button>
    </InputContainer>
   </Container>
  )
}

export default Newsletter