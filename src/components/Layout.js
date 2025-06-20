


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      <main className="flex-grow max-w-5xl w-full mx-auto px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
