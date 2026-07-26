// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'animate' class to trigger CSS animations
      entry.target.classList.add('animate');
      
      // Special case for skills progress bars
      if (entry.target.classList.contains('animate-skill-card')) {
        const progressBars = entry.target.querySelectorAll('.progress-bar');
        const percentages = entry.target.querySelectorAll('.skill-pct');
        
        progressBars.forEach((bar, index) => {
          const target = bar.getAttribute('data-target');
          setTimeout(() => {
            bar.style.width = target + '%';
            // Count up animation
            let current = 0;
            const increment = target / 50; // Arbitrary speed
            const counter = setInterval(() => {
              current += increment;
              if (current >= target) {
                percentages[index].innerText = target + '%';
                clearInterval(counter);
              } else {
                percentages[index].innerText = Math.round(current) + '%';
              }
            }, 20); // 20ms interval
          }, 300); // Small delay for visual effect
        });
      }

      // Unobserve if we only want it to animate once
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to observe
document.addEventListener('DOMContentLoaded', () => {
  
  // Landing animations that wait for initial load
  setTimeout(() => {
    document.querySelector('.cta-buttons')?.classList.add('animate');
    document.querySelector('.social-icons')?.classList.add('animate');
  }, 1000); // 1s delay for text to finish

  // Observe About elements
  const aboutImage = document.querySelector('.about-image-wrapper');
  if(aboutImage) observer.observe(aboutImage);
  
  const summary = document.querySelector('.summary-text');
  if(summary) observer.observe(summary);

  document.querySelectorAll('.flip-card').forEach(el => observer.observe(el));
  document.querySelectorAll('.work-btn').forEach(el => observer.observe(el));

  // Observe Experience cards
  document.querySelectorAll('.animate-exp-card').forEach(el => observer.observe(el));

  // Observe Education cards
  document.querySelectorAll('.animate-drop-in, .animate-rise-up').forEach(el => observer.observe(el));

  // Observe Project
  document.querySelectorAll('.animate-project').forEach(el => observer.observe(el));

  // Observe Skills
  document.querySelectorAll('.animate-skill-card').forEach(el => observer.observe(el));

  // Observe Certifications with random rotation
  document.querySelectorAll('.animate-cascade').forEach(el => {
    // Random rotation between -2 and +2 degrees
    const randomRot = (Math.random() * 4 - 2).toFixed(2);
    el.style.setProperty('--rot-val', `${randomRot}deg`);
    observer.observe(el);
  });

  // Observe Achievements
  document.querySelectorAll('.animate-zoom-in').forEach(el => observer.observe(el));

  // Observe Contact
  document.querySelectorAll('.animate-slide-in-bl, .animate-slide-in-br').forEach(el => observer.observe(el));
});

// Smooth scroll for nav links (if not supported natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
