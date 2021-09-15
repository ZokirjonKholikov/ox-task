import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  ScrollHost,
  ScrollHostContainer,
  ScrollBar,
  ScrollThumb,
} from './style';

const SCROLL_BOX_MIN_HEIGHT = 20;

export default ({ children, className, background, hidebar, ...restProps }) => {
  const [hovering, setHovering] = useState(false);
  const [isShowBar, setIsShowBar] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);

  const handleMouseOut = useCallback(() => {
    !!hovering && !isDragging && setHovering(false);
  }, [hovering, isDragging]);

  const handleDocumentMouseUp = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
        setHovering(false);
      }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = scrollHostRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        let deltaY = e.clientY - lastScrollThumbPosition;
        let percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollBoxHeight
          )
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, [scrollBoxHeight]);

  const scrollHostRef = useRef();

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;
    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT
    );
    if (scrollHeight !== scrollThumbHeight) {
      setIsShowBar(true);
    } else {
      setIsShowBar(false);
    }
    if (isNaN(scrollThumbHeight)) {
      setScrollBoxHeight('0px');
    } else {
      setScrollBoxHeight(scrollThumbHeight);
    }
    scrollHostElement.addEventListener('scroll', handleScroll, true);

    return function cleanup() {
      scrollHostElement.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll, children]);

  useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <ScrollHostContainer
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ScrollHost
        background={background}
        isShowBar={isShowBar}
        ref={scrollHostRef}
        className={className}
        {...restProps}
      >
        {children}
      </ScrollHost>
      {hidebar ? (
        <></>
      ) : (
        <ScrollBar
          hidebar={hidebar}
          style={{
            opacity: hovering ? 1 : 0,
            display: isShowBar ? 'block' : 'none',
          }}
        >
          <ScrollThumb
            style={{ height: scrollBoxHeight, top: scrollBoxTop }}
            onMouseDown={handleScrollThumbMouseDown}
          />
        </ScrollBar>
      )}
    </ScrollHostContainer>
  );
};
