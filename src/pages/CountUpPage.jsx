import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import CountUp from '../Components/CountUp';
import PrismaticBurst from '../Components/PrismaticBurst';
import TextType from '../Components/TextType';

export default function CountUpPage() {
  const navigate = useNavigate();
  const [showUI, setShowUI] = useState(false);

  // CountUp 완료 시
  const handleCountEnd = () => {
    setShowUI(true);
  };

  return (
    <div className="absolute font-kor inset-0 flex flex-col items-center justify-center bg-black text-center overflow-hidden">
      {/* 🔹 CountUp 숫자 */}

      <div className="z-10">
        <CountUp
          from={0}
          to={1097}
          separator=","
          direction="up"
          duration={2}
          className="text-6xl font-bold mb-10 text-white"
          onEnd={handleCountEnd}
        />
      </div>

      {/* 🔹 PrismaticBurst + 문구 + 버튼 */}
      {showUI && (
        <>
          {/* 💫 빛 효과 (배경만 유지) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <PrismaticBurst
              animationType="rotate3d"
              intensity={2}
              speed={0.5}
              distort={1.0}
              paused={false}
              offset={{ x: 0, y: 0 }}
              hoverDampness={0.25}
              rayCount={24}
              mixBlendMode="lighten"
              colors={['#ffffff', '#e0e0e0', '#bfbfbf']}
            />
          </motion.div>

          {/* ✨ 문구 + 버튼 (화이트톤) */}
          <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 z-10"
            >
            <TextType 
              text={["벌써 3주년", "3년은 1097일", "1097일은 26,328시간", "26,328시간은 1,579,680분", "1,579,680분은 94,780,000초"  ]}
              typingSpeed={75}
              pauseDuration={800}
              showCursor={true}
              cursorCharacter="|"
            />
            <button
              onClick={() => navigate('/homepage')}
              className="px-6 py-3 text-white font-medium rounded-xl 
                        bg-white/10 backdrop-blur-lg 
                        transition-all duration-500 
                        hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            >
              9,478만초동안의 우리 보러가기
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}