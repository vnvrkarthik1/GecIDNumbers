

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
          if (entry.isIntersecting){
              entry.target.classList.add('show')
          }else{
              entry.target.classList.remove('show')
          }

      });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el))





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

