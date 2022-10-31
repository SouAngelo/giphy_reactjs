import React, {useRef} from "react";
import "./modal.sass";

function Modal({ gif, modal }) {

    

  function closeModal(){

    modal.current.classList.add('hide')

  }

  return (
    <div className="modal hide" ref={modal}>
      <div className="container-modal">
        <span onClick={closeModal}>X</span>

        <div className="image-modal">
          <img key={gif.id} 
          src={gif.images?.original.url} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
