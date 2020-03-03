import string from './CSS.js'
let time = 100
let n = 1
demo.innerText =string.substring(0,n)
demo2.innerHTML = string.substring(0, n)
console.log(n)
const run =()=>{
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substring(0, n)
  demo.scrollTop = demo.scrollHeight
  console.log(n + ':' + string.substr(0, n))
}
const play =()=>{
  return setInterval(run,time)
}
const pause = ()=>{
  window.clearInterval(id)
}
let id = play()

btnPause.onclick=()=>{

}
btnPlay.onclick=()=>(
id = play()
)

btnSlow.onclick=()=>{
pause()
  time = 300
  id = play()
}
btnNormal.onclick=()=>{
 pause()
  time = 100
  id = play()
}
btnFast.onclick=()=>{
pause()
  time = 0
  id = play()
}