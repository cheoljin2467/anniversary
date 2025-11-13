import { useState } from "react";
import Ballpit from "../Components/Ballpit";
import Stepper, { Step } from "../Components/Stepper";
import { useNavigate } from "react-router-dom";
import whoareyou from "../assets/whoareyou.jpg"

export default function LoginPage() {
  const [cjBirth, setCjBirth] = useState("");
  const [hjBirth, setHjBirth] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const CJ_CORRECT = "2002-10-18";
  const HJ_CORRECT = "2001-11-03";
  const MEET_CORRECT = "2022-11-20";

  return (
    <div className="relative font-kor min-h-screen bg-white via-zinc-950 to-black text-white flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Ballpit
          count={150}
          gravity={0}
          friction={0.9}
          wallBounce={0.95}
          followCursor={false}
          colors={[0xff0000, 0x00ff00, 0x0000ff, 0xffff00]}
          ambientColor={0xffffff}
          ambientIntensity={1.2}
          lightIntensity={250}
          minSize={0.5}
          maxSize={1.5}
          size0={1}
          maxVelocity={0.2}
          maxX={5}
          maxY={5}
          maxZ={2}
        />
      </div>

      <Stepper
        initialStep={1}
        onStepChange={(step) => setCurrentStep(step)} // ✅ 현재 스텝 저장
        onFinalStepCompleted={() => navigate("/countup")}
        backButtonText="이전"
        nextButtonText="다음"
        disableStepIndicators = {false}
        
        stepCircleContainerClassName="px-6 py-3 text-white font-medium rounded-xl bg-white/10 backdrop-blur-lg transition-all duration-500"
        backButtonProps={{
          className:
            "duration-350 flex items-center justify-center rounded-full bg-[#3C12D9] py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-[#2E0BB8]",
        }}
        nextButtonProps={{
          disabled:
            (currentStep === 3 && cjBirth !== CJ_CORRECT) ||
            (currentStep === 4 && hjBirth !== HJ_CORRECT) ||
            (currentStep === 5 && meetDate !== MEET_CORRECT),
          className: `duration-350 flex items-center justify-center rounded-full py-1.5 px-3.5 font-medium tracking-tight text-white transition ${
            (currentStep === 3 && cjBirth !== CJ_CORRECT) ||
            (currentStep === 4 && hjBirth !== HJ_CORRECT) ||
            (currentStep === 5 && meetDate !== MEET_CORRECT)
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#3C12D9] hover:bg-[#2E0BB8]"
          }`,
        }}
      >
        {/* Step 1~6 그대로 유지 */}
      <Step>
        <h2 className="text-2xl font-semibold mb-2 text-black">🚫 관계자 외 출입금지 🚫</h2>
        <p className="text-gray-700">여긴 아무나 들어올 수 있는 곳이 아니에요.</p>
      </Step>

        <Step>
          <h2 className="text-2xl font-semibold mb-2 text-black">흠....🤔🤔</h2>
          <img
            src={whoareyou}
            className="h-64 w-full object-cover object-center rounded-xl mt-4"
          />
          <p className="text-gray-700 mt-3">관계자인지 확인을 해야겠네요.</p>
        </Step>

        <Step>
          <h2 className="text-2xl font-semibold mb-2 text-black">이철진의 생일은 언제인가요?</h2>
          <input
            type="date"
            value={cjBirth}
            onChange={(e) => setCjBirth(e.target.value)}
            className="mt-3 w-full px-4 py-2 bg-white/40 text-black rounded-lg outline-none focus:bg-white/60 transition"
          />
        </Step>

        <Step>
          <h2 className="text-2xl font-semibold mb-2 text-black">허제원의 생일은 언제인가요?</h2>
          <input
            type="date"
            value={hjBirth}
            onChange={(e) => setHjBirth(e.target.value)}
            className="mt-3 w-full px-4 py-2 bg-white/40 text-black rounded-lg outline-none focus:bg-white/60 transition"
          />
        </Step>

        <Step>
          <h2 className="text-2xl font-semibold mb-2 text-black">둘이 만난 날은 언제인가요?</h2>
          <input
            type="date"
            value={meetDate}
            onChange={(e) => setMeetDate(e.target.value)}
            className="mt-3 w-full px-4 py-2 bg-white/40 text-black rounded-lg outline-none focus:bg-white/60 transition"
          />
        </Step>

        <Step>
          <h2 className="text-2xl font-semibold mb-2 text-black">잠금 해제 완료 🔓 </h2>
          <p className="text-gray-700">입장해주세요</p>
        </Step>
      </Stepper>
    </div>
  );
}