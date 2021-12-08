// This is to open right back card, based on clicked button ID
  document.querySelectorAll('.btn-rolling').forEach(button => {
    button.addEventListener('click', () => {
      const closeBtn = document.querySelectorAll('.about-price-card-back--btn')
      const story = document.querySelectorAll('.about-price-card-back')
    //   console.log(button.id)
      let idText = button.id
      let idNumber = Number(idText.slice(4,5))
    //   console.log(idNumber)
      closeBtn[idNumber-1].classList.add('change')
      story[idNumber-1].classList.add('change')
      
    })
  })

  // This will removed .change class from the correct card
document.querySelectorAll('.about-price-card-back--btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('change')
      btn.nextElementSibling.classList.remove('change')
    })
  })

//   set variables for navigation links and sections
    // ***** nav-links *******
const homeLink = document.getElementById('nav-home')
const aboutLink = document.getElementById('nav-about')
const resumeLink = document.getElementById('nav-resume')
const portfolioLink = document.getElementById('nav-portfolio')
const blogLink = document.getElementById('nav-blog')
const contactLink = document.getElementById('nav-contact')

// ***** sections *******
const homeSection = document.getElementById('home')
const aboutSection = document.getElementById('about')
const resumeSection = document.getElementById('resume')
const portfolioSection = document.getElementById('portfolio')
const blogSection = document.getElementById('blog')
const contactSection = document.getElementById('contact')

// When home link is clicked, remove any other active section
homeLink.addEventListener('click', ()=> {
     //hiding all sections
    document.querySelectorAll('.hide-section').forEach(section => {
        // section.style.transform = 'scale(0)'
        section.style.opacity = 0
        section.style.visibility = 'hidden'
    })
    //removing class active from all main navigation links and adding active to home link
    deactivateLink()
    homeLink.classList.add('active')
})

// When we click on About section, hide any other sections and then show About section
aboutLink.addEventListener('click', ()=> {
  showSection(aboutSection)
   //removing class active from all main navigation links and adding active to about link
   deactivateLink()
   aboutLink.classList.add('active')
})

// When we click on Resume section, hide any other sections and then show Resume section
resumeLink.addEventListener('click', ()=> {
  showSection(resumeSection)
  //removing class active from all main navigation links and adding active to resume link
  deactivateLink()
  resumeLink.classList.add('active')

  window.addEventListener('scroll', ()=> {
    mainFn()
  })
})



// function used to hide all sections and show the one for which corresponding nav-link was clicked
function showSection(sectionName) {
    // select all section tags in html DOM, which have class .hide-section
    document.querySelectorAll('.hide-section').forEach(section => {
      // and hide it (change opacity to 0 and visibility to hidden)
      section.style.opacity = 0
      section.style.visibility = 'hidden'
  })
    // and then show section named as parameter, change its opacity to 1 and visibility to visible
    sectionName.style.opacity = 1
    sectionName.style.visibility = 'visible'
}

// function removing class active from all main navigation links
function deactivateLink() {
  const navLinks = document.querySelectorAll('.nav-menu-item')
  navLinks.forEach((navLink) => {
    
      navLink.classList.remove('active')
     })
 }


//  ********************************************************
// ********* Skills section - Progress bars
const progress = document.querySelector('.resume-skils-progress-bar-wrapper')
const skills = document.querySelector('.resume-skils-content')
// values in skills array [html, css, Javascript, SASS, ReactJS, PHP, Python]
const progressBarPercents = [95, 90, 85, 70, 60, 50, 60];




const mainFn = ()=> {

  // console.log(`This is page offset ${window.pageYOffset}`)
  // console.log(`This is page inner height ${window.innerHeight}`)
  // console.log(`This is page inner progress offset is  ${progress.offsetTop + skills.offsetTop}`)
  // console.log(`This is page inner total ${window.pageYOffset + window.innerHeight}`)

    if(window.pageYOffset + window.innerHeight >= (progress.offsetTop + skills.offsetTop)) {
      document.querySelectorAll('.resume-skils-progress-percent').forEach((el, i) => {
          el.style.width = `${progressBarPercents[i]}%`;
          el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
      })
    } else {
      document.querySelectorAll('.resume-skils-progress-percent').forEach((el, i) => {
        el.style.width = 0;
        el.previousElementSibling.firstElementChild.textContent = 0;
    })
    }
}

// mainFn()

