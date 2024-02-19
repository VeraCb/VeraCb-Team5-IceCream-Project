// Luca's sections
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-openx]"),
    closeModalBtn: document.querySelector("[data-modal-closex]"),
    modal: document.querySelector("[data-modalx]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Sara's section
function FlipSlider(options) {
  // Private Vars
  var container = options.container,
    startSlideIndex = options.startIndex || 0,
    slider = container.querySelector(".flip"),
    slides = slider.querySelectorAll(".slide"),
    nextBtn = container.querySelector("#next"),
    prevBtn = container.querySelector("#prev"),
    pagination = container.querySelector(".pagination"),
    timeout,
    activeIndex = startSlideIndex;

  // Public functions

  // Next flip
  this.nextFlip = function () {
    doFlip(1);
  };

  // Previous flip
  this.prevFlip = function () {
    doFlip(-1);
  };

  // Private functions

  // Flip slides
  function doFlip(dir) {
    if (!container.querySelector(".animate")) {
      slider.classList.add("animate");

      if (dir == -1) {
        slider.classList.add("animateL");
      }

      var frontSlide = slider.querySelector(".front"),
        backSlide = findBack(dir);

      backSlide.classList.add("back");

      timeout = setTimeout(function () {
        resetSlides();
        clearTimeout(timeout);
      }, 600);

      // Update activeIndex
      activeIndex = Array.from(slides).indexOf(frontSlide);
      updatePagination();
    }
  }

  // Reset slides on completion
  function resetSlides() {
    var frontSlide = slider.querySelector(".front"),
      backSlide = slider.querySelector(".back");

    backSlide.classList.add("front");
    backSlide.classList.remove("back");
    frontSlide.classList.remove("front");
    slider.classList.remove("animate");
    slider.classList.remove("animateL");
  }

  // Find slide to set it back-flip
  function findBack(dir) {
    var frontIndex = Array.from(slides).indexOf(slider.querySelector(".front")),
      targetIndex;

    if (dir == -1) {
      targetIndex = frontIndex === 0 ? slides.length - 1 : frontIndex - 1;
    } else {
      targetIndex = frontIndex === slides.length - 1 ? 0 : frontIndex + 1;
    }

    return slides[targetIndex];
  }

  // Update pagination
  function updatePagination() {
    pagination.innerHTML = "";

    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === activeIndex) {
        dot.classList.add("active");
      }
      dot.dataset.index = i;
      dot.addEventListener("click", function () {
        var index = parseInt(this.dataset.index);
        goToSlide(index);
      });
      pagination.appendChild(dot);
    }
  }

  // Go to specific slide
  function goToSlide(index) {
    if (index !== activeIndex) {
      var diff = index - activeIndex;
      doFlip(diff > 0 ? 1 : -1);
    }
  }

  // Initialization
  (function (instance) {
    // Setting First Slide
    startSlideIndex = startSlideIndex >= slides.length ? 0 : startSlideIndex;
    slides[startSlideIndex].classList.add("front");

    // Event Bindings
    nextBtn.onclick = instance.nextFlip;
    prevBtn.onclick = instance.prevFlip;

    // Update pagination
    updatePagination();
  })(this);
}

// Creating Instance of the slider
var flip1 = new FlipSlider({
  startIndex: 1,
  container: document.querySelector(".flip-slider"),
});