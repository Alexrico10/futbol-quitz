

const MainMenu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
      <button className="w-64 px-6 py-3 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transition duration-200">
        NUEVO JUEGO
      </button>
      <button className="w-64 px-6 py-3 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transition duration-200">
        INSTRUCCIONES
      </button>
      <button className="w-64 px-6 py-3 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transition duration-200">
        RANKINGS
      </button>
      <button className="w-64 px-6 py-3 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transition duration-200">
        CRÉDITOS
      </button>
    </div>
  );
};

export default MainMenu;