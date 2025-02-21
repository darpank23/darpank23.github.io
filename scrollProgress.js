document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector('.progressBar');
    const section = document.querySelector('section');
  
    const scrollProgressBar = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY || window.pageYOffset;
      const progressPercentage = (scrollTop / totalHeight) * 100;
      progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
      let scrollDistance = -(section.getBoundingClientRect().top);
      let val = Math.floor(progressPercentage);
      progressBar.style.width = val + '%';
  
      if (val < 0) {
        progressBar.style.width = '0%';
      }
    };
  
    window.addEventListener('scroll', scrollProgressBar);  
});