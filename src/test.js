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
let id = setInterval(() => {
 run()
}, time)

btnPause.onclick=()=>{
  window.clearInterval(id)
}
btnPlay.onclick=()=>(
  id = setInterval(() => {
    run()
  }, time)
)

btnSlow.onclick=()=>{
  window.clearInterval(id)
  time = 300
  id = setInterval(() => {
    run()
  }, time)
}
btnNormal.onclick=()=>{
  window.clearInterval(id)
  time = 100
  id = setInterval(() => {
    run()
  }, time)
}
btnFast.onclick=()=>{
  window.clearInterval(id)
  time = 0
  id = setInterval(() => {
    run()
  }, time)
}