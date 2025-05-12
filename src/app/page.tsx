"use client";

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const skyRef = useRef<HTMLDivElement>(null);
  const cloudContainerRef = useRef<HTMLDivElement>(null);
  const initialViewRef = useRef<HTMLDivElement>(null);
  const seaViewRef = useRef<HTMLDivElement>(null);
  const [showSea, setShowSea] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // スクロール中かどうかを管理

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
    if (isScrolling) return; // スクロール中はクリックを無視
    setIsScrolling(true);
    setShowSea(true); // 海の画面を表示

    window.scrollTo({
      top: window.innerHeight, // 画面の高さまでスクロール
      behavior: 'smooth', // スムーズスクロール
    });

    setTimeout(() => {
      setIsScrolling(false); // スクロール完了
    }, 500); // スクロール時間と合わせる (調整が必要)
  };

  return (
    <div className="min-h-screen bg-sky-blue">
      <div ref={initialViewRef} className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-white cursor-pointer z-20" onClick={handleClickMore}>click has more</div>
        <div ref={skyRef} className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
          <div ref={cloudContainerRef} className="cloud-container absolute top-0 left-0 w-full h-full">
            {/* 雲はここに追加されます */}
          </div>
        </div>
      </div>

      <div ref={seaViewRef} className="absolute top-full left-0 w-full h-screen bg-sea-blue flex items-center justify-center" style={{ display: showSea ? 'flex' : 'none' }}>
        <div className="fishing-hook"></div>
        <div className="fish fish1"></div>
        <div className="fish fish2"></div>
        <div className="fish fish3"></div>
        {/* ... 他の魚 ... */}
      </div>
    </div>
  );
}