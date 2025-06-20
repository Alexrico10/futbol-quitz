import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const MainMenu = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4 w-full max-w-md">
        <Button text={"NUEVO JUEGO"} />
        <Button
          text={"INSTRUCCIONES"}
          onClick={() => {
            setIsOpenModal(true);
          }}
        />
        <Button text={"RANKINGS"} />
        <Button text={"CRÉDITOS"} />
      </div>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <p className="text-gray-900 text-center mt-10 mb-10 font-bold text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
        <div className="flex justify-center">
          <Button text={"ACEPTAR"} onClick={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default MainMenu;
