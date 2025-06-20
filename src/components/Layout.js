


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-orange-bg text-white flex flex-col items-center">
      <main className="flex flex-col items-center justify-center flex-grow max-w-5xl w-full px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;