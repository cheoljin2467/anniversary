// src/pages/ScrollScenePage.jsx
import React from "react";

export default function ScrollScenePage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* 🎬 1. 스크롤 씬 섹션 */}
      <section className="relative min-h-[300vh]">
        {/* 🧷 고정되는 영역 (히어로 / 중앙 텍스트 등) */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none">
          <div className="pointer-events-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              고정된 타이틀 영역
            </h1>
            <p className="text-lg text-slate-300">
              스크롤 할 때도 나는 계속 가운데 고정 👀
            </p>
          </div>
        </div>

        {/* 🎯 스크롤되는 요소들 (백그라운드 레이어 느낌) */}
        <div className="absolute inset-0">
          <div className="relative h-[300vh]">
            {/* 첫 번째 블록 */}
            <div className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-[80%] max-w-xl bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-2">1단계</h2>
              <p className="text-sm text-slate-200">
                스크롤을 내리면 이 카드가 위로 올라가고, 중앙 타이틀은 고정돼 있어요.
              </p>
            </div>

            {/* 두 번째 블록 */}
            <div className="absolute top-[80vh] left-1/2 -translate-x-1/2 w-[80%] max-w-xl bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-2">2단계</h2>
              <p className="text-sm text-slate-200">
                계속 내리면 두 번째 카드가 중앙 타이틀 뒤로 지나가는 느낌이 나요.
              </p>
            </div>

            {/* 세 번째 블록 */}
            <div className="absolute top-[160vh] left-1/2 -translate-x-1/2 w-[80%] max-w-xl bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-2">3단계</h2>
              <p className="text-sm text-slate-200">
                이쯤 오면 거의 씬 끝부분. 이제 조금만 더 내리면 고정 타이틀도 위로 사라짐.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📜 2. 여기부터는 전부 같이 스크롤되는 일반 콘텐츠 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-bold mb-4">씬 끝, 이제 다 같이 스크롤 🎉</h2>
        <p className="max-w-xl text-center text-slate-200">
          위의 섹션에서는 타이틀/중앙 내용은 항상 화면 가운데 고정되어 있었고,
          카드/이미지 같은 것들만 뒤에서 스르륵 올라갔어요.  
          그런데 그 긴 섹션이 끝나는 순간, 타이틀도 일반 섹션처럼
          위로 올라가면서 사라지죠.  
          이게 바로 <span className="font-semibold">sticky → release</span> 패턴이에요.
        </p>
      </section>
    </div>
  );
}