"use client";

import { useEffect, useRef } from 'react';

export default function Home() {
  const skyRef = useRef<HTMLDivElement>(null);
  const cloudContainerRef = useRef<HTMLDivElement>(null);
  const seaViewRef = useRef<HTMLDivElement>(null);
  const boatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sky = skyRef.current;
    const cloudContainer = cloudContainerRef.current;

    if (sky && cloudContainer) {
      const numberOfClouds = 5;
      for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        setCloudProperties(cloud);
        cloudContainer.appendChild(cloud);
      }
    }
  }, []);

  const setCloudProperties = (cloud: HTMLDivElement) => {
    const startPosition = Math.random() * 100;
    const size = 50 + Math.random() * 50;
    const speed = 10 + Math.random() * 5;

    cloud.style.width = `${size}px`;
    cloud.style.height = `${size / 2}px`;
    cloud.style.left = `${startPosition}vw`;
    cloud.style.top = `${10 + Math.random() * 30}vh`;
    cloud.style.animation = `moveCloud ${speed}s linear infinite`;
    cloud.style.opacity = `0.6 + Math.random() * 0.4`;
  };

  const handleClickMore = () => {
    window.scrollTo({
      top: skyRef.current ? skyRef.current.offsetHeight : 0, // 空の画面の高さまでスクロール
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div ref={skyRef} className="flex-grow bg-sky-blue relative overflow-hidden">
        <div ref={cloudContainerRef} className="cloud-container absolute top-0 left-0 w-full h-full">
          {/* 雲はここに追加されます */}
        </div>
        <div ref={boatRef} className="boat absolute">
          {/* 船と釣り人 */}
          <div className="fisherman"></div>
        </div>
        <div className="text-2xl font-bold text-white cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" onClick={handleClickMore}>
          click has more
        </div>
      </div>

      <div ref={seaViewRef} className="h-1/5 bg-sea-blue flex items-center justify-center relative">
        <div className="fishing-hook absolute"></div>
        <div className="fish fish1 absolute"></div>
        <div className="fish fish2 absolute"></div>
        <div className="fish fish3 absolute"></div>
        {/* ... 他の魚 ... */}
      </div>
    </div>
  );
}