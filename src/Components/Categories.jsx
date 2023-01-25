import React from 'react'
import  CategoryItem  from './CategoryItem';
import { Category } from './data';
import styled from 'styled-components';
import mobile from './Respponsive';



const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({padding:"0px", flexDirection:"column"})}
`;

const Categories = () => {
  return <Container>
        {Category.map(item=>(
           <CategoryItem item={item} key={item.id}/>
        ))}
        
    </Container>;
  
}

export default Categories