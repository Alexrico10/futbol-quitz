

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-64 px-6 py-3 bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transition duration-200"
    >
      {text}
    </button>
  );
};

export default Button;
