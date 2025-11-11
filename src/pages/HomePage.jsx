export default function HomePage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* 🎬 Sticky Scroll Scene */}
      <section className="relative min-h-[600vh]">
        {/* 🧷 고정된 콘텐츠 */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              고정된 텍스트
              dasd
            </h1>
            <p className="text-lg text-slate-300">
              고정
            </p>
          </div>
        </div>

        {/* 🎯 스크롤되는 콘텐츠 */}
        <div className="absolute inset-0">
          <div className="relative flex flex-col items-center"> 

            {/* 1️⃣ 첫 번째 섹션 (LightRays) */}
            <div className="w-full flex justify-center h-[200vh]">
              1
            </div>

            {/* 2️⃣ 두 번째 섹션 */}
            <div className="w-full flex justify-center h-[200vh]">
              2
            </div>

            {/* 3️⃣ 세 번째 섹션 */}
            <div className="w-full flex justify-center h-[200vh]">
              3
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}