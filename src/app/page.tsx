"use client"; // クライアントサイドレンダリングを指定

import { useEffect, useRef } from 'react';

export default function Home() {
  const skyRef = useRef<HTMLDivElement>(null);
  const cloudContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-sky-blue flex items-center justify-center">
      <div ref={skyRef} className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div ref={cloudContainerRef} className="cloud-container absolute top-0 left-0 w-full h-full">
          {/* JavaScriptで雲の要素が追加されます */}
        </div>
      </div>
      <div className="text-2xl font-bold text-white z-10">click has more</div>
      {/* 後で "click has more" の要素を追加します */}
    </div>
  );
}