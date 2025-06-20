

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const closeModal = ()=>{
    if (onClose) onClose()
  }

  const handleClickContent = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={handleClickContent}
        className="bg-orange-bg rounded-lg p-6 relative w-full max-w-md mx-4 shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};


export default Modal;