import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-24 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-between ">
      {/* Logo a la izquierda */}
      <div className="flex items-center space-x-2">
        <Image
          src="/utils/logo.jpg"
          alt="Logo Futbolquiz"
          width={96}
          height={40}
        />
      </div>

      {/* Título centrado (ocupa todo con flex-grow) */}
      <h1 className="text-white text-xl font-bold mx-auto absolute left-1/2 transform -translate-x-1/2">
        HEADER
      </h1>
    </header>
  );
};

export default Header;