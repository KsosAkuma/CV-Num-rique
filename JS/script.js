const hardSkill = document.querySelectorAll('tr');
const softSkill = document.querySelectorAll('#softSkill ul li');
const formations = document.querySelectorAll('#formations ul li')
const experience = document.querySelectorAll('#experience ul li')
const description = document.querySelector('#description p')
const articles = document.querySelectorAll('article');
const coordonnes = document.querySelector('#coordonnes')
const title = document.querySelector('#title')
const inventaire = document.querySelector('#inventaire')
const confuciusGrp = [title, inventaire, description,coordonnes]

for (let i = 0; i < Array.from(confuciusGrp).length; i++) {
    const element = Array.from(confuciusGrp)[i];
    element.addEventListener('mouseover',event => {
        description.innerHTML = confucius()
    })
}

for (let i = 0; i < Array.from(articles).length; i++) {
    const element = Array.from(articles)[i];
    element.addEventListener('mouseover',event => {
        console.log(event.target);
            for (let i = 0; i < Array.from(hardSkill).length; i++) {
                const element = Array.from(hardSkill)[i];
                element.addEventListener('mouseover',event => {
                    description.innerHTML = hardSkillDescription[i]
                })
            }
            for (let i = 0; i < Array.from(softSkill).length; i++) {
                const element = Array.from(softSkill)[i];
                element.addEventListener('mouseover',event => {
                    description.innerHTML = softSkillDescription[i]
                })
            }
            for (let i = 0; i < Array.from(formations).length; i++) {
                const element = Array.from(formations)[i];
                element.addEventListener('mouseover',event => {
                    description.innerHTML = formationsDescription[i]
                })
            }
            for (let i = 0; i < Array.from(experience).length; i++) {
                const element = Array.from(experience)[i];
                element.addEventListener('mouseover',event => {
                    description.innerHTML = experienceDescription[i]
                })
            }
    })
}





function hoverLeave(e) {
    e.addEventListener("mouseleave",function () {
        e.classList.remove("ishover")
     })
    e.addEventListener("mouseover",function () {
         e.classList.add("ishover")
     })
}