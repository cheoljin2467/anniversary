import FallingText from "../Components/FallingText";
import FlyingPosters from "../Components/FlyingPoster";
import Model from '../Components/Model';
import Heart from '../assets/heart.glb';
import Monster from'../assets/PartyMonster.glb'

import StickerPeel from "../Components/StickerPeel"
import dress from "../assets/Dress.png"
import target1 from "../assets/target1.png"
import target2 from "../assets/target2.png"

export default function HomePage() {
  return (


    <div className="bg-white text-black min-h-screen font-soria relative">

      {/*--------- 입장 화면 ---------*/}
      <section className="relative min-h-[600vh]">

        {/* sticky center */}
        <div className="sticky top-1/2 h-screen">
          <h1 className="text-9xl text-center">Welcome</h1>
        </div>

        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="h-[200vh] text-center">1-1</div>
        <div className="h-[200vh] text-center">1-2</div>
        <div className="h-[200vh] bg-[black] text-center">1-3</div>
      </section>


      {/*--------- After 2022.11.20 ---------*/}
      <section className="relative min-h-[600vh]">
        {/* sticky center */}
        <div className="sticky top-1/2 h-screen">
          <h1 className="text-9xl text-center">After 2022.11.20</h1>
        </div>

        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="h-[100vh] text-center">2-1</div>
        <div className="h-[200vh] text-center">2-2</div>
        <div className="h-[200vh] bg-[black] text-center">2-3</div>
      </section>

        {/*--------- After D+365 ---------*/}
      <section className="relative min-h-[600vh]">
        {/* sticky center */}
        <div className="sticky top-1/2 h-screen">
          <h1 className="text-9xl text-center">After 2023.11.20</h1>
        </div>

        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="h-[200vh] text-center">3-1</div>
        <div className="h-[200vh] text-center">3-2</div>
        <div className="h-[200vh] bg-[black] text-center">3-3</div>
      </section>

        {/*--------- After D+730 ---------*/}
      <section className="relative min-h-[600vh]">
        {/* sticky center */}
        <div className="sticky top-1/2 h-screen">
          <h1 className="text-9xl text-center">After 2024.11.20</h1>
        </div>

        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="h-[200vh] text-center">4-1</div>
        <div className="h-[200vh] text-center">4-2</div>
        <div className="h-[200vh] bg-[black] text-center">4-3</div>
      </section>

        {/*--------- After D+1097 ---------*/}
      <section className="relative min-h-[600vh]">
        {/* sticky center */}
        <div className="sticky top-1/2 h-screen">
          <h1 className="text-9xl text-center">After 2025.11.20</h1>
        </div>
        {/* 스크롤되는 배경 콘텐츠 */}
        <div className="h-[200vh] text-center">5-1</div>
        <div className="h-[200vh] text-center">5-2</div>
        <div className="h-[100vh] text-center bg-[red]">
          
          <StickerPeel
              imageSrc={dress}
              width={150}
              rotate={0}
              peelBackHoverPct={0}
              peelBackActivePct={20}
              shadowIntensity={0}
              lightingIntensity={0}
              initialPosition={{ x: 100, y: 100 }}
          />       

          <StickerPeel
              imageSrc={target1}
              width={150}
              rotate={0}
              peelBackHoverPct={0}
              peelBackActivePct={20}
              shadowIntensity={0}
              lightingIntensity={0}
              initialPosition={{ x: 200, y: 200 }}
          /> 
        </div>
      </section>
    </div>
  );
}