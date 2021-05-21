window.addEventListener('DOMContentLoaded', () => {

// Heading


// Mobile navigation

  const mobileNavBtn = document.querySelector('.mobile-nav__btn'),
        mobileNav = document.querySelector('.mobile-nav')

  mobileNavBtn.addEventListener('click', () => {
    if(mobileNav.style.display === 'none') {
      mobileNav.style.display = 'block'
    } else {
      mobileNav.style.display = 'none'
    }
  })


// Services

  const serviceBtn = document.querySelectorAll('.service__btn'),
        modal = document.querySelector('.modal-wrapper'),
        storyBtn = document.querySelector('.story__btn'),
        readMoreBtn = document.querySelector('.more__btn')
        closeModalBtn = document.querySelector('.close-button')
        

  const openModal = () => {
    modal.style.display = 'flex'
  }

  const closeModal = () => {
    modal.style.display = 'none'
  }

  storyBtn.addEventListener('click', () => {
    openModal()
  })
  readMoreBtn.addEventListener('click', () => {
    openModal()
  })

  closeModalBtn.addEventListener('click', () => {
    closeModal()
  })

  serviceBtn[0].classList.add('active')

  const activeBtn = (i) => {
    serviceBtn.forEach(btn => {
      btn.classList.remove('active')
    })
    serviceBtn[i].classList.add('active')
  }

  serviceBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      activeBtn(i)
    })
  })


// Achievements  


})