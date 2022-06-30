let x = 0
let y = 0

let target = null
const targetWidth = 50
const targetHeight = 50

let score = 0
let scoreBox = null

let timeIntervalId = null
let targetDisaperanceID = null
let time = 1
let timeBox = null
let targetSwap = 2

const timeTick = () => {
    time = time - 1
    if(time === 0) endGame()
    displayTime()
}

const timeBoxCreate = () => {
    const div = document.createElement('div')
  
      div.style.position = 'fixed'
      div.style.right = 0 + 'px' 
      div.style.top  = 0 + 'px'
      document.body.appendChild(div)
  
      timeBox = div
}

  const displayTime = () => {
    timeBox.innerText = time + 'seconds'
}

const addScore = () => { 
    score = score + 1
    displayScore()
}

const scoreBoxCreate = () => {
  const div = document.createElement('div')

    div.style.position = 'fixed'
    div.style.left = 0 + 'px' 
    div.style.top  = 0 + 'px'
    document.body.appendChild(div)

    scoreBox = div
}

const displayScore = () => {
    scoreBox.innerText = score + 'points'
}

const randomizeNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

const targetPositionRandom = () => {
    const xMax = window.innerWidth - targetWidth 
    const yMax = window.innerHeight - targetHeight

    x = randomizeNumber(0, xMax)
    y = randomizeNumber(0, yMax)
}

const removeTarget = () => {
    if(target === null) return 
    
    target.remove()
}

const createTarget = () => {
    removeTarget()
    const div = document.createElement('div')
    
    div.style.width = targetWidth + 'px'
    div.style.height = targetHeight + 'px'
    div.style.backgroundColor = 'black'
    div.style.position = 'fixed'
    div.style.left = x + 'px' 
    div.style.top  = y + 'px'

    div.addEventListener(
        'click',
        clicktarget
    )

    document.body.appendChild(div)
    target = div
}

const createNewTarget = () => {
    targetPositionRandom()
    createTarget()
}

const clicktarget = () => {
    addScore()
    createNewTarget()
}

const endGame = () => {
    alert('Twój wynik to :' + score)
    resetGame()
}

const resetGame = () => {
    window.location = ''
}

const startTimeInterval = () => {
    timeIntervalId = setInterval(
        timeTick, 1000
    )
}

const targetDisaperance = () => {
    targetDisaperanceID = setInterval(
    createNewTarget,
    targetSwap * 1000
    )
}

const init = () => {
    timeBoxCreate()
    displayTime()
    scoreBoxCreate()
    displayScore( )
    createNewTarget()
}

init()