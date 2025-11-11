import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 홈 이동용 추가
import Aurora from "../Components/Aurora";

import target1 from "../assets/Target1.png";
import target2 from "../assets/Target2.png";
import target3 from "../assets/Target3.png";
import target4 from "../assets/Target4.png";
import target5 from "../assets/Target5.png";
import poop from "../assets/Poop.png";

const GAME_DURATION = 10;

export default function TargetCursorPage() {
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [flash, setFlash] = useState(false);

  const navigate = useNavigate(); // ✅ 추가

  const imagePool = [target1, target2, target3, target4, target5, poop, poop, poop, poop];

  const createRandomTarget = () => {
    const img = imagePool[Math.floor(Math.random() * imagePool.length)];
    const isPoop = img === poop;
    return {
      id: Math.random().toString(36).slice(2),
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      img,
      isPoop,
    };
  };

  useEffect(() => {
    if (!isPlaying) return;
    let isCancelled = false;
    const spawnRandom = () => {
      if (isCancelled) return;
      const count = Math.floor(Math.random() * 4);
      const newTargets = Array.from({ length: count }, () => createRandomTarget());
      if (newTargets.length > 0) {
        setTargets((prev) => [...prev, ...newTargets]);
        newTargets.forEach((t) => {
          const life = 1000 + Math.random() * 500;
          setTimeout(() => {
            setTargets((prev) => prev.filter((x) => x.id !== t.id));
          }, life);
        });
      }
      const nextSpawn = 300 + Math.random() * 900;
      setTimeout(spawnRandom, nextSpawn);
    };
    spawnRandom();
    return () => {
      isCancelled = true;
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsPlaying(false);
          setTargets([]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleClick = (id, isPoop) => {
    if (isPoop) {
      setScore((prev) => prev - 1);
      setFlash(true);
      setTimeout(() => setFlash(false), 300);
    } else {
      setScore((prev) => prev + 1);
    }
    setTargets((prev) => prev.filter((t) => t.id !== id));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setIsPlaying(true);
    setTargets([]);
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setIsPlaying(false);
    setTargets([]);
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden text-black">

      {/* 💫 깜빡임 효과 */}
      <div
        className={`absolute inset-0 transition-all duration-300 pointer-events-none ${
          flash ? "bg-red-100/60" : ""
        }`}
      />

      {/* 🕹️ HUD */}
      {isPlaying && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-8 text-lg font-medium backdrop-blur-md bg-white/60 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-white/80">
          <div>⏱️ {timeLeft}s</div>
          <div>🎯 Score: {score}</div>
        </div>
      )}

      {/* 🎯 타겟들 */}
      {isPlaying &&
        targets.map((t) => (
          <img
            draggable="false"
            key={t.id}
            src={t.img}
            alt={t.isPoop ? "poop" : "target"}
            onClick={() => handleClick(t.id, t.isPoop)}
            className="cursor-pointer absolute w-20 h-20 object-contain select-none transition-transform duration-150 hover:scale-125"
            style={{
              top: `${t.top}%`,
              left: `${t.left}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
  {/* 🏁 시작 화면 */}
{/* 🏁 시작 화면 */}
{/* 🏁 시작 화면 */}
{!isPlaying && timeLeft === GAME_DURATION && (
  <div className="relative w-full h-full flex flex-col items-center justify-center animate-fadeIn text-center overflow-hidden">

    {/* 🎯 고정된 타겟들 (배경용) */}
    <div className="absolute inset-0">
      <img
        src={target1}
        alt="target1"
        className="absolute w-20 h-20 object-contain opacity-80"
        style={{ top: "15%", left: "20%", transform: "translate(-50%, -50%) rotate(-5deg)" }}
      />
      <img
        src={target2}
        alt="target2"
        className="absolute w-20 h-20 object-contain select-none opacity-80"
        style={{ top: "10%", left: "70%", transform: "translate(-50%, -50%) rotate(10deg)" }}
      />
      <img
        src={target3}
        alt="target3"
        className="absolute w-20 h-20 object-contain select-none opacity-80"
        style={{ top: "65%", left: "20%", transform: "translate(-50%, -50%) rotate(-12deg)" }}
      />
      <img
        src={target4}
        alt="target4"
        className="absolute w-20 h-20 object-contain select-none opacity-80"
        style={{ top: "75%", left: "75%", transform: "translate(-50%, -50%) rotate(8deg)" }}
      />
      <img
        src={target5}
        alt="target5"
        className="absolute w-20 h-20 object-contain select-none opacity-80"
        style={{ top: "30%", left: "40%", transform: "translate(-50%, -50%) rotate(3deg)" }}
      />
      <img
        src={poop}
        alt="poop"
        className="absolute w-16 h-16 object-contain select-none opacity-90"
        style={{ top: "35%", left: "80%", transform: "translate(-50%, -50%) rotate(-15deg)" }}
      />
    </div>

    {/* 🌟 제목 & 버튼 */}
    <div className="z-10 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        이철진 잡기 게임
      </h1>

      <button
        onClick={startGame}
        className="mt-6 relative px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300
                   bg-white/80 hover:bg-white border border-gray-300 text-gray-800
                   shadow-[0_0_20px_rgba(200,200,200,0.4)] hover:shadow-[0_0_30px_rgba(180,180,180,0.8)] backdrop-blur-sm"
      >
        ▶️ 시작하기
      </button>
    </div>
  </div>
)}

      {/* 🎮 종료 화면 */}
      {!isPlaying && timeLeft === 0 && (
        <div className="flex flex-col items-center gap-6 animate-fadeIn text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-400 text-transparent bg-clip-text">
            🏁 게임 종료
          </h2>
          <p className="text-xl text-gray-600">
            당신의 점수는{" "}
            <span className="font-bold text-gray-800">{score}</span> 점입니다
          </p>

          <div className="flex gap-4 mt-2">
            <button
              onClick={resetGame}
              className="px-8 py-3 bg-white/80 hover:bg-white text-gray-800 font-semibold rounded-full border border-gray-300
                       shadow-[0_0_20px_rgba(180,180,180,0.4)] transition-all duration-300"
            >
              🔁 다시하기
            </button>

            <button
              onClick={() => navigate("/HomePage")}
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full border border-gray-300
                         shadow-[0_0_20px_rgba(180,180,180,0.3)] transition-all duration-300"
            >
              🏠 홈으로
            </button>
          </div>

          <p className="text-gray-400 text-sm italic mt-4">
            다시 한 번 도전해보세요 ⚡
          </p>
        </div>
      )}

      {/* 🎬 페이드 인 효과 */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}