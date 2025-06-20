import { useState, useEffect, useRef } from "react";

const Chrono = () => {
  const [time, setTime] = useState(0); // tiempo en milisegundos
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10); // suma 10 ms cada vez
    }, 10);

    return () => clearInterval(intervalRef.current); // limpia al desmontar
  }, []);

  // Calcula min, seg 
  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");

  return (
  <div className="mb-8 flex justify-center items-center bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent text-6xl font-mono rounded-lg select-none">
      {minutes}:{seconds}
    </div>
  );
};

export default Chrono;
