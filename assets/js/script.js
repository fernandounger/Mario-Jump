const marioImage = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloudImage = document.querySelector('.clouds')

const jump = () => {
    marioImage.classList.add('jump-mario')

    setTimeout(() => {
        marioImage.classList.remove('jump-mario')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(marioImage).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        marioImage.style.animation = 'none'
        marioImage.style.bottom = `${marioPosition}px`
        marioImage.src = './assets/img/game-over.png'
        marioImage.style.width = '75px'
        marioImage.style.marginLeft = '50px'

        cloudImage.style.animation = 'none'
        cloudImage.style.bottom = `${marioPosition}px`



        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump);