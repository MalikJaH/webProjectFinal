  const heroSection = document.getElementById('home');
    const avatar = document.querySelector('.hero-avatar');
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect(); 
        const centerX = heroSection.offsetWidth / 2;
        const centerY = heroSection.offsetHeight / 2;
        
 
        const moveX = (e.clientX - centerX) / 30; 
        const moveY = (e.clientY - centerY) / 30;

        avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
         avatar.style.transition = "transform 0.3s ease";
  avatar.style.transform = "translate(0, 0)";
    });
    let i=0;
    let logo =document.getElementsByClassName("logo")[0];
    let home=document.getElementById("home");
    logo.addEventListener("click", function() {
      if(i==0){
      home.style.backgroundImage = 'url("images/bgimg.jpeg")';
      home.style.backgroundSize='cover'
        i=1;

    }
    else{
    home.style.background = 'linear-gradient(135deg, var(--background-color), #0f0f1c)';
      i=0
    }
    });
    console.log(home);
    let nav = document.getElementsByClassName("main-header")[0];
let lastScrollY = window.scrollY;
const scrollThreshold = 10; 
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
        return;
    }

    if (currentScrollY > lastScrollY) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
});

nav.addEventListener("mousemove", () => {
    nav.classList.add("hover");
});
nav.addEventListener("mouseleave", () => {
    nav.classList.remove("hover");
});



let inputs=document.getElementsByClassName("input");
let submit=document.getElementsByClassName("submit")[0];
   
submit.addEventListener("mousemove", () => {
    for (let input of inputs) {
        if (input.value === "") {
  input.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
}
  }});

  submit.addEventListener("mouseleave", () => {
    for (let input of inputs) {
        input.style.backgroundColor="#1a1a2e"
      }
    
    });

    const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.1 } 
);

reveals.forEach((el) => observer.observe(el));

const text = "Software Engineer | AI Analyst | FullStack Developer";
  let x = 0;
function typing() {
  if (x < text.length) {
    document.querySelector(".tagline").textContent += text.charAt(x);
    x++;
    setTimeout(typing, 30);
  }
}
window.onload = typing;
const skillDependencies = {
    'Python': ['Machine Learning', 'Algorithms',"MySql"],
    'Java and Cpp': ['Algorithms',"MySql"],
    'Java Script': ['React JS','Algorithms'],
    
};

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const skillName = card.textContent.trim();
        
        if (skillDependencies[skillName]) {
            skillCards.forEach(otherCard => {
                if (skillDependencies[skillName].includes(otherCard.textContent.trim())) {
                    otherCard.style.backgroundColor = ' rgba(255, 217, 0, 0.82)'; 
                    otherCard.style.transform = 'scale(1.08)'; 
                }
            });
        }
    });

    card.addEventListener('mouseleave', () => {
        skillCards.forEach(otherCard => {
            otherCard.style.backgroundColor = '#1a1a2e';
            otherCard.style.transform = 'scale(1.05)'; 
        });
    });
});

