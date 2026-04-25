(function () {
  function enhanceGallery(gallery) {
    var images = Array.prototype.slice.call(gallery.querySelectorAll("img"));
    var activeIndex = 0;

    if (!images.length) {
      return;
    }

    gallery.classList.add("gallery-enhanced");
    gallery.setAttribute("role", "group");
    gallery.setAttribute("aria-roledescription", "carousel");

    function show(index) {
      activeIndex = (index + images.length) % images.length;
      images.forEach(function (image, imageIndex) {
        var isActive = imageIndex === activeIndex;
        image.classList.toggle("is-active", isActive);
        image.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    }

    show(0);

    if (images.length < 2) {
      return;
    }

    var previous = document.createElement("button");
    previous.type = "button";
    previous.className = "gallery-arrow prev";
    previous.setAttribute("aria-label", "Previous photo");
    previous.textContent = "<";

    var next = document.createElement("button");
    next.type = "button";
    next.className = "gallery-arrow next";
    next.setAttribute("aria-label", "Next photo");
    next.textContent = ">";

    previous.addEventListener("click", function () {
      show(activeIndex - 1);
    });

    next.addEventListener("click", function () {
      show(activeIndex + 1);
    });

    gallery.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(activeIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(activeIndex + 1);
      }
    });

    gallery.appendChild(previous);
    gallery.appendChild(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".gallery-slider"), enhanceGallery);
  });
})();
