document.addEventListener('DOMContentLoaded', function () {
  var spans = document.querySelectorAll('span[data-target]');
  spans.forEach(function (span) {
    var targetSel = span.getAttribute('data-target');
    var target = targetSel ? document.querySelector(targetSel) : null;
    if (!target) return;

    var targetId = target.id || '';
    span.setAttribute('role', 'button');
    span.setAttribute('tabindex', '0');
    if (targetId) span.setAttribute('aria-controls', targetId);
    span.setAttribute('aria-expanded', target.hasAttribute('hidden') ? 'false' : 'true');

    function toggle() {
      var isHidden = target.hasAttribute('hidden');
      if (isHidden) {
        target.removeAttribute('hidden');
        span.setAttribute('aria-expanded', 'true');
      } else {
        target.setAttribute('hidden', '');
        span.setAttribute('aria-expanded', 'false');
      }
    }

    span.addEventListener('click', toggle);
    span.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});
