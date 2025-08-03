const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const botao = document.querySelector('.botao')
const reset = document.querySelector('.reset')
const gameover = document.querySelector('.gameover')

const jump = () => {
	mario.classList.add('jump')

	setTimeout(() => {
		mario.classList.remove('jump')
	}, 500)
}

const loop = setInterval(() => {
	const pipePosition = pipe.offsetLeft
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

	if(pipePosition <= 60 && pipePosition > 0 && marioPosition < 40) {
		pipe.style.animation = 'none'
		pipe.style.left = `${pipePosition}px`

		mario.style.animation = 'none'
		mario.style.bottom = `${marioPosition}px`

		mario.src = 'imagens/game-over.png'
		mario.style.width = '38px'
		mario.style.marginLeft = '25px'

    gameover.style.visibility = 'visible'

		clearInterval(loop)
	}
}, 10)



document.addEventListener('keydown', jump)
botao.addEventListener('click', jump)
reset.addEventListener('click', () => { location.reload() })