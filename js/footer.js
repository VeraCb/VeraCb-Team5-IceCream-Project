(() => {
  const refs = {
    openModalBtn: document.querySelector("[map-data-modal-open]"),
    closeModalBtn: document.querySelector("[map-data-modal-close]"),
    modal: document.querySelector("[map-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
