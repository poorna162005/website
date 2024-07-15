document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in effect to all elements with class "fade-in"
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1
  });

  fadeInElements.forEach(element => {
      observer.observe(element);
  });
});
