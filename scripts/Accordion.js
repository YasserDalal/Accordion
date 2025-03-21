const accordion = document.getElementsByClassName('main-container')
for(let i = 0; i < accordion.length; i++){
  const answers = document.getElementsByClassName('answers-open')
  const questions = document.getElementsByClassName('questions')
  const iTag = document.getElementsByTagName('i')
  accordion[i].addEventListener('click', () => {
    answers[i].classList.toggle('active')
    iTag[i].classList.toggle('minus')
    questions[i].classList.toggle('active')
    console.log(iTag[i])
  })
}


