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
    let nav=document.getElementsByClassName("main-header")[0];
      let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    
        if (window.scrollY > lastScrollY) {
            nav.classList.add("hidden");
          } 
  else {
      nav.classList.remove("hidden");
  }
      
          lastScrollY = window.scrollY;
      
      });
        nav.addEventListener('mousemove', (e) => {
        nav.style.backgroundColor="#1a1a2e";
        });
      nav.addEventListener('mouseleave', () => {
                nav.style.backgroundColor="";

      });
      
  function skillHover(i, url) {
    const skillsBG = document.getElementById("skills");
    const skills = document.getElementsByClassName("skill-card");

    skills[i].addEventListener("mousemove", () => {
      skillsBG.style.backgroundImage = `url('${url}')`;
      skillsBG.style.backgroundSize = "cover";
  });

  skills[i].addEventListener("mouseleave", () => {
    skillsBG.style.backgroundColor = "#272740";
    skillsBG.style.backgroundImage = "";
  });
}
skillHover(0, "images/python.png");
skillHover(1, "images/java.png");
skillHover(2, "images/js.jpg");

let inputs=document.getElementsByClassName("input");
let submit=document.getElementsByClassName("submit")[0];
   
submit.addEventListener("mousemove", () => {
    for (let input of inputs) {
        if (input.value === "") {
  input.style.backgroundColor = "#FF9800";
}
  }});

  submit.addEventListener("mouseleave", () => {
    for (let input of inputs) {
        input.style.backgroundColor="#1a1a2e"
      }
    
    });
 