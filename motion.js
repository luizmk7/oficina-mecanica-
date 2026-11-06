const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const contactDialog = document.querySelector('#demo');
let closeTimer;
function openContactDialog() {
  clearTimeout(closeTimer);
  contactDialog.showModal();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (contactDialog.open) contactDialog.classList.add('motion-open');
  }));
}
function closeContactDialog() {
  contactDialog.classList.remove('motion-open');
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => contactDialog.close(), reducedMotion.matches ? 0 : 250);
}
contactDialog.addEventListener('cancel', event => {
  event.preventDefault();
  closeContactDialog();
});
contactDialog.addEventListener('click', event => {
  const rect = contactDialog.getBoundingClientRect();
  if (event.target === contactDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeContactDialog();
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.06});
  document.querySelectorAll('.section-head,.section > .eyebrow,.section > h2,.trust > img,.eyebrow-wrap,.services,.reviews,.amenities,.brand-list,.faq,.location,.strip').forEach(element => {
    element.classList.add('motion-reveal');
    observer.observe(element);
  });
}
document.querySelectorAll('.faq details').forEach(details => {
  const summary = details.querySelector('summary');
  let animation;
  let expanded = details.open;
  summary.addEventListener('click', event => {
    if (reducedMotion.matches || !details.animate) return;
    event.preventDefault();
    const start = details.getBoundingClientRect().height;
    if (animation) animation.cancel();
    expanded = !expanded;
    details.open = true;
    const end = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height;
    animation = details.animate([{height:start+'px'}, {height:end+'px'}], {duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
    animation.onfinish = () => { details.open = expanded; animation = null; };
  });
  details.addEventListener('toggle', () => { if (!animation) expanded = details.open; });
});
