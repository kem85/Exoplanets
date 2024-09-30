import { useEffect, useState } from "react";

export function useBtnBubbleEffect(addBtn) {
  const [btnTranslateX, setBtnTranslateX] = useState(0);
  const [btnTranslateY, setBtnTranslateY] = useState(0);
  const [textTranslateX, setTextTranslateX] = useState(0);
  const [textTranslateY, setTextTranslateY] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const setupListeners = () => {
      if (addBtn.current) {
        const enterMagnet = (e) => {
          const btnSpeed = 30;
          const textSpeed = 50;
          const boundaries = addBtn.current.getBoundingClientRect();

          const newX = (e.clientX - boundaries.left) / boundaries.width - 0.5;
          const newY = (e.clientY - boundaries.top) / boundaries.height - 0.5;

          setBtnTranslateX(newX * btnSpeed);
          setBtnTranslateY(newY * btnSpeed);
          setTextTranslateX(newX * textSpeed);
          setTextTranslateY(newY * textSpeed);
          setIsResetting(false);
        };

        const leaveMagnet = () => {
          setIsResetting(true);
          setBtnTranslateX(0);
          setBtnTranslateY(0);
          setTextTranslateX(0);
          setTextTranslateY(0);
        };

        addBtn.current.addEventListener("mousemove", enterMagnet);
        addBtn.current.addEventListener("mouseleave", leaveMagnet);

        return () => {
          addBtn.current.removeEventListener("mousemove", enterMagnet);
          addBtn.current.removeEventListener("mouseleave", leaveMagnet);
        };
      }
    };

    // Run setupListeners immediately if the button exists
    if (addBtn.current) {
      setupListeners();
    }

    // Set up an interval to check when the button becomes available
    const interval = setInterval(() => {
      if (addBtn.current) {
        setupListeners();
      }
    }, 300);
    return () => clearInterval(interval);
  }, [addBtn]);

  return {
    isResetting,
    btnTranslateX,
    btnTranslateY,
    textTranslateX,
    textTranslateY,
  };
}
