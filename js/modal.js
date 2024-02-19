(() => {
    const refs = {
      openModalBtn: document.querySelector("[ad-data-modal-open]"),
      closeModalBtn: document.querySelector("[ad-data-modal-close]"),
      modal: document.querySelector("[ad-data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();