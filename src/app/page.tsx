"use client"; // クライアントサイドレンダリングを指定

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const skyRef = useRef<HTMLDivElement>(null);
  const cloudContainerRef = useRef<HTMLDivElement>(null);
  const initialViewRef = useRef<HTMLDivElement>(null);
  const seaViewRef = useRef<HTMLDivElement>(null);
  const [showSea, setShowSea] = useState(false);

  useEffect(() => {
    const sky = skyRef.current;
    const cloudContainer = cloudContainerRef.current;

    if (sky && cloudContainer) {
      // ここに空と雲を描画・アニメーションさせるJavaScriptのコードを書きます
      const numberOfClouds = 5; // 雲の数
      for (let i = 0; i < numberOfClouds; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        // 雲の初期位置、サイズ、アニメーションなどをランダムに設定する関数を呼び出す
        setCloudProperties(cloud);
        cloudContainer.appendChild(cloud);
      }
    }
  }, []);

  const setCloudProperties = (cloud: HTMLDivElement) => {
    const startPosition = Math.random() * 100; // 0%から100%のランダムな開始位置
    const size = 50 + Math.random() * 50; // 50pxから100pxのランダムなサイズ
    const speed = 10 + Math.random() * 5; // アニメーション速度

    cloud.style.width = `${size}px`;
    cloud.style.height = `${size / 2}px`; // 雲は横長にする
    cloud.style.left = `${startPosition}vw`;
    cloud.style.top = `${10 + Math.random() * 30}vh`; // 少し高さをばらつかせる
    cloud.style.animation = `moveCloud ${speed}s linear infinite`;
    cloud.style.opacity = `0.6 + Math.random() * 0.4`; // 透明度を少しランダムに
  };

  // クリックしたら海が表示される
  const handleClickMore = () => {
    if (initialViewRef.current) {
      initialViewRef.current.classList.add('fade-out');
      setTimeout(() => {
        setShowSea(true);
      }, 500); // フェードアウトの時間に合わせて調整
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={initialViewRef} className="absolute top-0 left-0 w-full h-full bg-sky-blue z-10 transition-opacity duration-500 flex items-center justify-center">
        <div className="text-2xl font-bold text-white cursor-pointer z-20" onClick={handleClickMore}>click has more</div>
        <div ref={skyRef} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div ref={cloudContainerRef} className="cloud-container absolute top-0 left-0 w-full h-full">
            {/* 雲はここに追加されます */}
          </div>
        </div>
      </div>

      {showSea && (
        <div ref={seaViewRef} className="absolute top-0 left-0 w-full h-full bg-sea-blue flex items-center justify-center z-0">
          {/* 海、釣り針、魚の描画はここに追加します */}
          <div className="fishing-hook"></div>
          <div className="fish">魚1</div>
          <div className="fish">魚2</div>
          {/* ... 他の魚 ... */}
        </div>
      )}
    </div>
  );
}