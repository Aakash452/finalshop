import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import { sliderItems } from "./data";
import mobile from "./Respponsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
  ${mobile({display:"none"})}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7eeee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  z-index:2;
`;
const Wrapper = styled.div`
  heigh: 100%;
 display:flex;
 transform:translateX(${props=>props.slideIndex* -100}vw);
 transition:all 1.5s ease;

`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  heigh: 100vh;
  width: 100vw;
  background-color:${props=>props.bg}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
flex:1
padding:50px;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 550;
  width:85%;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Image = styled.img`
  height: 80%;
`;

const Slider = () => {
     const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
            setslideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setslideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowBackIosNewOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex ={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
                {item.desc}
              </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
          
          
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
          <ArrowForwardIosOutlinedIcon />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
