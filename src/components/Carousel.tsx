import React from "react";

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
];

function Carousel() {
  return (
    <div className="box-border">
      <div className="w-[500px] h-[300px] overflow-hidden">
        <div className="flex">
          {caroArray.map((x, i) => (
            <div key={x.ImgUrl}>
              <img src={x?.ImgUrl} className="w-[500px] h-[300px]" />
            </div>
          ))}
        </div>
      </div>
      <button id="left"> 왼 </button>
      <button id="right"> 오 </button>
    </div>
  );
}

export default Carousel;
