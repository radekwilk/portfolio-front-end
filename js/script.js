document.querySelectorAll('.about-price-card-back--btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('change')
      btn.nextElementSibling.classList.remove('change')
    })
  })


  document.querySelectorAll('.btn-rolling').forEach(button => {
    button.addEventListener('click', () => {
      const closeBtn = document.querySelectorAll('.about-price-card-back--btn')
      const story = document.querySelectorAll('.about-price-card-back')
      console.log(button.id)
      let idText = button.id
      let idNumber = Number(idText.slice(4.5))
      console.log(idNumber)
      closeBtn[idNumber-1].classList.add('change')
      story[idNumber-1].classList.add('change')
      
    })
  })