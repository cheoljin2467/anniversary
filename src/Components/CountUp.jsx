import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration)
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });
  const endedRef = useRef(false);

  const getDecimalPlaces = num => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };
  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formatted = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [maxDecimals, separator]
  );

  // 초기 표시
  useEffect(() => {
    if (ref.current) ref.current.textContent = formatValue(direction === 'down' ? to : from);
  }, [from, to, direction, formatValue]);

  // 시작
  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const startTimeout = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart]);

  // 숫자 갱신 감시
useEffect(() => {
  const unsubscribe = springValue.on('change', latest => {
    if (ref.current) ref.current.textContent = formatValue(latest);

    // ✅ 목표값 근처에서 미리 트리거 (0.5 이하 차이면 즉시 실행)
    if (typeof onEnd === 'function' && !endedRef.current) {
      if (latest >= to - 0.25) {  // 🔹 ← 기존보다 약간 일찍 트리거
        endedRef.current = true;
        onEnd();
      }
    }
  });

  return () => unsubscribe();
}, [springValue, formatValue, onEnd, to]);

  return <span ref={ref} className={className} />;
}