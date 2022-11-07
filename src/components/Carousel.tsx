import React, { useState, useEffect, useRef } from "react";
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

function Carousel() {
  return (
    <div className="box-border">
      <CarouselBox>
        <CarouselInline>
          {caroArray.map((x, i) => (
            <div key={x.ImgUrl}>
              <CarouselImg src={x?.ImgUrl} alt={x?.ImgUrl} />
            </div>
          ))}
        </CarouselInline>
      </CarouselBox>
      <button id="left"> 왼 </button>
      <button id="right"> 오 </button>
    </div>
  );
}

export default Carousel;

const CarouselBox = styled.div`
  width: 500px;
  height: 300px;
  overflow: hidden;
`;

const CarouselInline = styled.div`
  display: inline-block;
`;

const CarouselImg = styled.img`
  width: 500px;
  height: 300px;
  flex: none;
`;
