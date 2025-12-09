
const nav=document.querySelector(".nav"),
navList= nav.querySelectorAll("li"),
totalNavList=navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;
for(let i=0;i<totalNavList;i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
        removeBackSection();
        for(let j=0;j<totalNavList;j++){
            if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
    })
}
function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}
function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".about-me").addEventListener("click",function(){
    const sectionIndex= this.getAttribute("data-section-index");
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex= this.getAttribute("data-section-index");
    console.log(sectionIndex);showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open"); 
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}

const tabs = document.querySelectorAll('.tab');
const skillLists = document.querySelectorAll('.skills-list');
const backButton = document.querySelector('.back-button');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.tabs').style.display = 'none';
        backButton.style.display = 'block';

        skillLists.forEach(list => list.classList.remove('active'));
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

backButton.addEventListener('click', () => {
    document.querySelector('.tabs').style.display = 'flex';
    backButton.style.display = 'none';

    skillLists.forEach(list => list.classList.remove('active'));
});

skillLists.forEach(list => list.classList.remove('active'));

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    setTimeout(function() {
        form.reset();
    },500)
})


const clickableExperiences = document.querySelectorAll('.clickable-experience');
const experienceDetails = document.querySelectorAll('.experience-details');
const experienceMainList = document.querySelector('.experience-main-list');
const experienceBackButton = document.querySelector('.experience-back-button');

clickableExperiences.forEach(item => {
    item.addEventListener('click', function() {
        if (experienceMainList) {
            experienceMainList.classList.remove('active');
        }
        if (experienceBackButton) {
            experienceBackButton.style.display = 'block';
        }
        const targetId = this.getAttribute('data-experience') + '-details';
        experienceDetails.forEach(details => details.classList.remove('active'));
        const targetDetail = document.getElementById(targetId);
        if (targetDetail) {
            targetDetail.classList.add('active');
        }
    });
});

if (experienceBackButton) {
    experienceBackButton.addEventListener('click', function() {
        if (experienceMainList) {
            experienceMainList.classList.add('active');
        }
        this.style.display = 'none';
        experienceDetails.forEach(details => details.classList.remove('active'));
    });
}