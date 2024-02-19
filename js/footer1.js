// Marius's section
(() => {
  const refs = {
    openModalBtn: document.querySelector("[fr-data-modal-open]"),
    closeModalBtn: document.querySelector("[fr-data-modal-close]"),
    modal: document.querySelector("[fr-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
