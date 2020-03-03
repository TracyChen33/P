import string from './CSS.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let n = 1
let time = 100
let id

const player = {
  init: () => {
    demo.innerText = string.substring(0, n)
    demo2.innerHTML = string.substring(0, n)
    player.play()
  },
  run: () => {
    n += 1
    if (n > string.length) {
      window.clearInterval(id)
      return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substring(0, n)
    demo.scrollTop = demo.scrollHeight
    console.log(n + ':' + string.substr(0, n))
  },
  play: () => {
   id= setInterval(player.run, time)
  },
  pause: () => {
    window.clearInterval(id)
  },
  slow: () => {
    player.pause()
    time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    time = 0
    player.play()
  },
}

player.init()

document.querySelector('#btnPause').onclick = player.pause
document.querySelector('#btnPlay').onclick = player.play
document.querySelector('#btnSlow').onclick = player.slow
document.querySelector('#btnNormal').onclick = player.normal
document.querySelector('#btnFast').onclick = player.fast
