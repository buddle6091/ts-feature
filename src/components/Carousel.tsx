import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";

interface caro {
  ImgUrl: string;
}

const caroArray: Array<caro> = [
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    ImgUrl:
      "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

/* const leftRef = useRef();
const rightRef = useRef(); */

/* const [currentIdx, setCurrentIdx] = useState(0); */

function Carousel() {
  useEffect(() => {
    async function a() {
      const res = await axios.get(
        "https://apis.data.go.kr/B551011/GoCamping/basedList?MobileOS=ETC&MobileApp=gocamp&serviceKey=hxdpEFH4tR8PQCTY8sfFyV78s69uVxnI1z7AJkIgBlkk2kHb0WxnFqZjaLQ9sbfo%2B5C7c47t74J1aNmioNNrwg%3D%3D&_type=json"
      );
      console.log(res);
    }
    a();
  }, []);

  return (
    <CarouselBox>
      <CarouselUl>
        {caroArray.map((x, i) => (
          <CarouselLi key={x.ImgUrl}>
            <CarouselImg src={x?.ImgUrl} alt={x?.ImgUrl} />
          </CarouselLi>
        ))}
      </CarouselUl>
    </CarouselBox>
  );
}

export default Carousel;

const CarouselBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  overflow: hidden;
`;

const CarouselUl = styled.ul`
  width: 500px;
  height: 300px;
  display: flex;
  position: relative;
`;

const CarouselLi = styled.li`
  list-style: none;
  width: 500px;
  height: 300px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const CarouselImg = styled.img`
  width: 300px;
  height: 300px;
  padding-left: 10px;
  border-radius: 1px solid;
  object-fit: contain;
  flex: none;
`;
