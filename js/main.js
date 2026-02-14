(function() {
  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Smooth scroll: one delegated click handler, no external scripts
  var nav = document.querySelector('.navbar');
  var navHeight = (nav && nav.offsetHeight) ? nav.offsetHeight : 76;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function scrollToEl(el) {
    if (!el || !el.getBoundingClientRect) return;
    var startY = window.scrollY || document.documentElement.scrollTop;
    var targetY = startY + el.getBoundingClientRect().top - navHeight;
    var distance = targetY - startY;
    var duration = 600;
    var startTime = null;

    function step(now) {
      if (startTime === null) startTime = now;
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.body.addEventListener('click', function(e) {
    var a = e.target.closest('a');
    if (!a || !a.getAttribute('href')) return;
    var href = a.getAttribute('href');
    if (href.charAt(0) !== '#' || href.length < 2) return;
    var id = href.slice(1);
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();
    scrollToEl(target);
    // Close mobile menu
    var menu = document.getElementById('navbarNav');
    if (menu && menu.classList.contains('show') && typeof bootstrap !== 'undefined') {
      try {
        var c = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu, { toggle: false });
        c.hide();
      } catch (err) {}
    }
  });
})();
