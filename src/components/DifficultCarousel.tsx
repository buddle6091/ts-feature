import React, { useState, useEffect, useRef, MouseEvent } from "react";
import axios from "axios";
import styled from "styled-components";
import DragEvent from "../utils/DragEvent";

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

const SLIDER_WIDTH = 400;
const SLIDER_HEIGHT = 400;

/* 해당 Carousel item의 현재 index */

function DifficultCarousel() {
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

  useEffect(() => {
    async function b() {
      const r = await axios.get(
        "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=eixV3mOlRoqUyi%2BK9P6%2BS3BQMBXCroFM31lGc%2BOSp80JFNv7B8%2FiCEV49OSfF2bchwh5N7z50Sw8OQFWCkZbDg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20221108&base_time=0500&nx=55&ny=127"
      );
      console.log(r);
    }
    b();
  }, []);

  /* 현재 캐로셀 아이템의 인덱스 값 */
  const [currentIdx, setCurrentIdx] = useState(0);
  /* x축의 변하는 값 */
  const [transX, setTransX] = useState(0);
  /* transition */
  const [isAni, setIsAni] = useState(false);

  const slideList = [caroArray.at(-1), ...caroArray, caroArray.at(0)];

  const inrange = (cur: number, min: number, max: number) => {
    if (cur > max) return max;
    if (cur < min) return min;
    return cur;
  };

  return (
    <CarouselViewer>
      {/* currentIdx 값에 따라 x축 방향으로 이동하기 위하여 style 적용한다.
      Carousel item을 왼쪽으로 옮겨 숨겨진 item을 오른쪽에서 가져와야되기 때문에 left로 가기 위해 음수의 값을 가져야 됨 
      Carousel은 item 개수 만큼의 width을 가진다. 하나의 슬라이드 = total Carousel width / items.length*/}
      <CarouselSlider
        /* Carousel Item 넘겼을 때  */
        style={{
          transform: `translateX(${
            (-100 / caroArray.length) * (0.5 + currentIdx)
          }%)`,
          transition: `transform ${isAni ? 300 : 0}ms ease-in-out 0s`,
        }}
        /* DragEvent util 사용 */
        {...DragEvent({
          onDragChange: (deltaX) => {
            setTransX(inrange(deltaX, -SLIDER_WIDTH + 10, SLIDER_WIDTH + 10));
          },
          onDragEnd: (deltaX) => {
            const maxIndex = slideList.length - 1;

            if (deltaX < -100)
              setCurrentIdx(inrange(currentIdx + 1, 0, maxIndex));
            if (deltaX > 100)
              setCurrentIdx(inrange(currentIdx - 1, 0, maxIndex));

            setIsAni(true);
            setTransX(0);
          },
        })}
        onTransitionEnd={() => {
          setIsAni(false);

          if (currentIdx === 0) {
            setCurrentIdx(slideList.length - 2);
          } else if (currentIdx === slideList.length - 1) {
            setCurrentIdx(1);
          }
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

export default DifficultCarousel;

const CarouselViewer = styled.div`
  width: 800px;
  height: 400px;
  overflow: hidden;
  user
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
