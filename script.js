(function () {
  var navbar = document.querySelector(".navbar");
  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelectorAll(
    ".nav-panel .links, .nav-panel button"
  );

  if (!navbar || !toggle) {
    return;
  }

  function setMenuOpen(open) {
    navbar.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setMenuOpen(!navbar.classList.contains("menu-open"));
  });

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      if (event.currentTarget.tagName === "A") {
        event.preventDefault();
      }
      setMenuOpen(false);
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  });
})();
