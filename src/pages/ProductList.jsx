import React, { useState } from "react";
import styled from "styled-components";
import ResponsiveAppBar from "../Components/Header/ResponsiveAppBar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  font-weight: 600;
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
display:flex;
justify-content:center;
align-items:center;
  margin: 20px;
`;

const FilterText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Select = styled.select`
    padding:10px;
    margin:0px 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter,setFilter] = useState({});
  const [sort,setSort] = useState("newest");
const handleFilters = (e)=>{
  const value = e.target.value;

  setFilter({
    ...filter,
    [e.target.name]:value,
  });
};



  return (
    <Container>
      <Announcement />
      <ResponsiveAppBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}  >
            <Option  disabled >
                Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters} >
            <Option  disabled >
                Size
            </Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>XXXL</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>SortProducts:</FilterText>
        <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" >
                Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
            
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
