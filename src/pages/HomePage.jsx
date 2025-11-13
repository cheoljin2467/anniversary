import FallingText from "../Components/FallingText";
import FlyingPosters from "../Components/FlyingPoster";
import Model from '../Components/Model';
import Heart from '../assets/heart.glb';
import Monster from'../assets/PartyMonster.glb'

export default function HomePage() {
  return (


    <div className="bg-white text-black min-h-screen relative">
      {/* 🎬 2️⃣ 중앙 sticky scroll scene */}
      <section className="relative min-h-[600vh]">
        {/* sticky center */}
        <div className="sticky top-0 h-screen flex items-center justify-center bg-[yello]">
          <div className="mt-14 w-full bg-[yellow]">
            <h1 className="text-5xl font-kor text-center">AAAAAAAAAAAAAAAAA</h1>
            <h1 className="mt-5 text-5xl font-kor text-left">BBBBBBBBBBB</h1>
            <h1 className="text-5xl font-kor text-right">BCDEF</h1>
            <p className="text-lg text-gray-600 text-center">여기에 뭐쓰지</p>
          </div>
        </div>

        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="w-full absolute flex-col inset-0 h-[100vh]">
          <div className="relative flex">
               <div className="w-[20vw] flex flex-col border">
                <Model
                  url={Monster}
                  height="30vh"
                  width="20vw"
                  autoRotate
                  fadeIn
                  showScreenshotButton={false}
                  defaultZoom={4}         // 👈 더 멀리 보기
                  minZoomDistance={4}     // 👈 너무 가까워지는 것 방지
                  maxZoomDistance={8}
                />
                <p className="font-eng font-bold text-center"> Turn Me! </p>
            </div>
            <div className="mt-5 whitespace-pre-line text-4xl font-kor">{"Top-Right"}</div>
            <p className="mt-5 ml-auto whitespace-pre-line text-4xl font-kor">{"TOOOOOP\n RightTTTT"}</p>  
          </div>
          <div className="mt-5 whitespace-pre-line text-right text-4xl font-kor">
            {"Side\nSIde"}
          </div>
          <div className="w-[20vw] flex ml-auto flex-col border">
                <Model
                  url={Monster}
                  height="30vh"
                  width="20vw"
                  autoRotate
                  fadeIn
                  showScreenshotButton={false}
                  defaultZoom={4}         // 👈 더 멀리 보기
                  minZoomDistance={4}     // 👈 너무 가까워지는 것 방지
                  maxZoomDistance={8}
                />
                <p className="font-eng font-bold text-center"> Turn Me! </p>
            </div>
            
            
        </div>
      </section>
         <section className="relative min-h-[600vh]">
        {/* sticky center */}
        <div className="sticky top-0 h-screen flex items-center justify-center bg-[yello]">
          <div className="mt-14 w-full bg-[yellow]">
            <h1 className="text-5xl font-kor text-center">AAAAAAAAAAAAAAAAA</h1>
            <h1 className="mt-5 text-5xl font-kor text-left">BBBBBBBBBBB</h1>
            <h1 className="text-5xl font-kor text-right">BCDEF</h1>
            <p className="text-lg text-gray-600 text-center">여기에 뭐쓰지</p>
          </div>
        </div>

        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="w-full absolute flex-col inset-0 h-[100vh]">
          <div className="relative flex">
               <div className="w-[20vw] flex flex-col border">
                <Model
                  url={Monster}
                  height="30vh"
                  width="20vw"
                  autoRotate
                  fadeIn
                  showScreenshotButton={false}
                  defaultZoom={4}         // 👈 더 멀리 보기
                  minZoomDistance={4}     // 👈 너무 가까워지는 것 방지
                  maxZoomDistance={8}
                />
                <p className="font-eng font-bold text-center"> Turn Me! </p>
            </div>
            <div className="mt-5 whitespace-pre-line text-4xl font-kor">{"Top-Right"}</div>
            <p className="mt-5 ml-auto whitespace-pre-line text-4xl font-kor">{"TOOOOOP\n RightTTTT"}</p>  
          </div>
          <div className="mt-5 whitespace-pre-line text-right text-4xl font-kor">
            {"Side\nSIde"}
          </div>
          <div className="w-[20vw] flex ml-auto flex-col border">
                <Model
                  url={Monster}
                  height="30vh"
                  width="20vw"
                  autoRotate
                  fadeIn
                  showScreenshotButton={false}
                  defaultZoom={4}         // 👈 더 멀리 보기
                  minZoomDistance={4}     // 👈 너무 가까워지는 것 방지
                  maxZoomDistance={8}
                />
                <p className="font-eng font-bold text-center"> Turn Me! </p>
            </div>
            
            
        </div>
      </section>
    </div>
  );
}