/* mousedown : 마우스 클릭 이벤트, mousemove : 마우스 이동 이벤트, mouseup - 마우스 클릭 해제 이벤드
pc의 MouseEvent와 달리 모바일에선 TouchEvent가 발생 

mousedown - touchdown, mousemove - touchmove, mouseup - touchend

이 유틸 파일은 웹앱 환경에서 최적화 된 mouseEvent, TouchEvent를 동시에 사용할 수 있게 만드는..
*/

import React from "react";

/* window.matchMedia : 미디어쿼리를 이용하여 접속하는 웹브라우저의 가로크기에 따른 반응형 작업이 가능 */
const isTouchWindow =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

function DragEvent({
  onDragChange,
  onDragEnd,
  stopPropagation,
}: {
  onDragChange?: (deltaX: number, deltaY: number) => void;
  onDragEnd?: (deltaX: number, deltaY: number) => void;

  stopPropagation?: boolean;
}) {
  /* 모바일 환경에서 touch로 작동할 때 move -> touch*/
  if (isTouchWindow) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
        if (stopPropagation) touchEvent.stopPropagation();

        const touchMoveHandler = (moveEvent: TouchEvent) => {
          if (moveEvent.cancelable) moveEvent.preventDefault();

          const deltaX =
            moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
          const deltaY =
            moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
          onDragChange?.(deltaX, deltaY);
        };
        document.addEventListener("touchmove", touchMoveHandler, {
          passive: false,
        });

        const touchEndHandler = (moveEvent: TouchEvent) => {
          if (moveEvent.cancelable) moveEvent.preventDefault();

          const deltaX =
            moveEvent.changedTouches[0].pageX -
            touchEvent.changedTouches[0].pageX;
          const deltaY =
            moveEvent.changedTouches[0].pageY -
            touchEvent.changedTouches[0].pageY;
          onDragChange?.(deltaX, deltaY);
          document.removeEventListener("touchmove", touchMoveHandler);
        };

        document.addEventListener("touchmove", touchMoveHandler, {
          passive: false,
        });
        document.addEventListener("touchend", touchEndHandler, {
          once: true,
        });
      },
    };
  }
  /* 웹 환경에서 move로 작동할 때 touch -> move */
  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation();

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragChange?.(deltaX, deltaY);
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragEnd?.(deltaX, deltaY);
        document.removeEventListener("mousemove", mouseMoveHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, {
        once: true,
      });
    },
  };
}

export default DragEvent;
