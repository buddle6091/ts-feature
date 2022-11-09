import React, { useState, useEffect, useRef, MouseEvent } from "react";
import axios from "axios";
import styled from "styled-components";

interface caro {
  ImgUrl: string;
}

const caroArray: Array<caro> = [
  {
    ImgUrl:
      "https://blog.kakaocdn.net/dn/dpxiAT/btqUBv6Fvpn/E8xUMncq7AVuDeOim0LrMk/img.jpg",
  },
  {
    ImgUrl:
      "https://blog.kakaocdn.net/dn/BGT7X/btqUzvTqi5h/flp39GdJH0GU6mo7cTbbhk/img.jpg",
  },
  {
    ImgUrl:
      "https://blog.kakaocdn.net/dn/bWnmfv/btqUBwqZvwA/3CiXGt3SR0TXoOveRJxV91/img.jpg",
  },
  {
    ImgUrl:
      "https://blog.kakaocdn.net/dn/XsLCO/btqUL8PQLwp/NZWCU2jAYKkKSXwcohBKTK/img.jpg",
  },
  {
    ImgUrl:
      "https://blog.kakaocdn.net/dn/bG3iVL/btqUvCZPaRL/ofIjkNWJP1mj2bOG9fie51/img.jpg",
  },
];

/* 해당 Carousel item의 현재 index */

function Carousel() {
  /* goCamp API 출력 확인 */
  useEffect(() => {
    async function a() {
      const res = await axios.get(
        "https://apis.data.go.kr/B551011/GoCamping/basedList?MobileOS=ETC&MobileApp=gocamp&serviceKey=hxdpEFH4tR8PQCTY8sfFyV78s69uVxnI1z7AJkIgBlkk2kHb0WxnFqZjaLQ9sbfo%2B5C7c47t74J1aNmioNNrwg%3D%3D&_type=json"
      );
      console.log(res);
    }
    a();
  }, []);

  /* 현재 캐로셀 아이템의 인덱스 값 */
  const [currentIdx, setCurrentIdx] = useState(0);

  /* 자동 슬라이드 기능  --> 일단 보류 */
  /* const autoSlide = (callback, delay) => {
    const itemRef = useRef();
    useEffect(() => {
      itemRef.current = callback;
    }, [callback]);

    useEffect(() => {
      const ex = () => {
        itemRef.current()
      }
      if (delay !== null) {
        let id = setInterval(ex, delay);
        return () => clearInterval(id);
      }
    }, [delay])
  } */

  /* 해당 Carousel item 이 잘 찍혔는지 확인 */
  /*   const handleClick =
    (currentIdx: number) => (event: MouseEvent<HTMLElement>) => {
      console.log(currentIdx + "event target is : ", event);
    };

  const cycler = (cycle: number) => (num: number) => {
    ((num % cycle) + cycle) % cycle;
  }; */

  /* 왼쪽으로 넘기기 */
  /*   const swipeLeft = () => {
    setCurrentIdx((cur) => cycler())
  }
 */

  /* 오른쪽으로 넘기기 */

  return (
    <CarouselViewer>
      {/* currentIdx 값에 따라 x축 방향으로 이동하기 위하여 style 적용한다.
      Carousel item을 왼쪽으로 옮겨 숨겨진 item을 오른쪽에서 가져와야되기 때문에 left로 가기 위해 음수의 값을 가져야 됨 
      Carousel은 item 개수 만큼의 width을 가진다. 하나의 슬라이드 = total Carousel width / items.length*/}
      <CarouselSlider
        style={{
          transform: `translateX(${
            (-100 / caroArray.length) * (0.5 + currentIdx)
          }%)`,
        }}>
        {caroArray.map((x) => (
          <CarouselSlide key={x.ImgUrl}>
            <CarouselImg src={x?.ImgUrl} alt={x?.ImgUrl} />
          </CarouselSlide>
        ))}
      </CarouselSlider>
    </CarouselViewer>
  );
}

export default Carousel;

const CarouselViewer = styled.div`
  width: 600px;
  height: 400px;
  overflow: hidden;
`;

const CarouselSlider = styled.div`
  display: flex;
`;

const CarouselSlide = styled.div`
  width: 500px;
  height: 300px;
  flex-shrink: 0;
  display: block;
  position: relative;
`;

const CarouselImg = styled.img`
  width: 400px;
  height: 400px;
  padding-left: 10px;
  border-radius: 1px solid;
  object-fit: contain;
  transition: all 0.3s ease;
  flex: none;
`;
