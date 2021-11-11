// This is to open right back card, based on clicked button ID
  document.querySelectorAll('.btn-rolling').forEach(button => {
    button.addEventListener('click', () => {
      const closeBtn = document.querySelectorAll('.about-price-card-back--btn')
      const story = document.querySelectorAll('.about-price-card-back')
    //   console.log(button.id)
      let idText = button.id
      let idNumber = Number(idText.slice(4.5))
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
const portfolioLink = document.getElementById('nav-portfolio')
const blogLink = document.getElementById('nav-blog')
const contactLink = document.getElementById('nav-contact')

// ***** sections *******
const homeSection = document.getElementById('home')
const aboutSection = document.getElementById('about')
const portfolioSection = document.getElementById('portfolio')
const blogSection = document.getElementById('blog')
const contactSection = document.getElementById('contact')

// When home link is clicked, remove any other active section
homeLink.addEventListener('click', ()=> {
    document.querySelectorAll('.hide-section').forEach(section => {
        // section.style.transform = 'scale(0)'
        section.style.opacity = 0
        section.style.visibility = 'hidden'
    })
})

// When we click on About section, hide any other sections and then show About section
aboutLink.addEventListener('click', ()=> {
    document.querySelectorAll('.hide-section').forEach(section => {
        // section.style.transform = 'scale(0)'
        section.style.opacity = 0
        section.style.visibility = 'hidden'
    })
    aboutSection.style.opacity = 1
    aboutSection.style.visibility = 'visible'
})