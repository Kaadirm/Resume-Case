const aboutMe = document.getElementById("about-me")
const experience = document.getElementById("experience");
const education = document.getElementById("education");
const skills = document.getElementById("skills");
const interests = document.getElementById("interests");
const awards = document.getElementById("awards");

(window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY < 400) {
        aboutMe.classList.add('active-nav');
    } else {
        aboutMe.classList.remove('active-nav');
    }
    if (window.scrollY >= 400 && window.scrollY<= 2100){
        experience.classList.add('active-nav');
    }
    else{
        experience.classList.remove('active-nav');
    }
    if(window.scrollY >= 2100 && window.scrollY <= 3300){
        education.classList.add('active-nav');
    }
    else{
        education.classList.remove('active-nav');
    }
    if(window.scrollY > 3300 && window.scrollY <= 4700){
        skills.classList.add('active-nav');
    }
    else{
        skills.classList.remove('active-nav');
    }
    if(window.scrollY > 4700 && window.scrollY <= 6200){
        interests.classList.add('active-nav');
    }
    else{
        interests.classList.remove('active-nav');
    }
    if(window.scrollY > 6200){
        awards.classList.add('active-nav')
    }
    else{
        awards.classList.remove('active-nav')
    }
})();


document.querySelectorAll('.nav-link').forEach(link => {  
    link.addEventListener('click', function (e) { 
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        targetElement.scrollIntoView({  
            behavior: 'smooth' 
        });
    });
});
