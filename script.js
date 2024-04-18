let Milsec = 0
let Second = 0
let Minute = 0
let Hour = 0

let stopwatchintervalId = null
let ms = document.querySelector('#millisecond')
let s = document.querySelector('#second')
let m = document.querySelector('#minute')
let h = document.querySelector('#hour')

let stopwatchstart = document.querySelector('#start-btn')
let stopwatchstop = document.querySelector('#stop-btn')
let stopwatchreset = document.querySelector('#reset-btn')

let onoffbtn = true

// stopwatch start button 
stopwatchstart.addEventListener('click', () => {
  stopwatchintervalId = setInterval(() => {
    Milsec++
    if (Milsec == 100) {
      Second++
      Milsec = 0
    }
    if (Second == 60) {
      Minute++
      Second = 0
    }
    if (Minute == 60) {
      Minute = 0
      Hour++
      Second = 0
    }

    ms.innerHTML = Milsec
    s.innerHTML = Second
    m.innerHTML = Minute
    h.innerHTML = Hour

  }, 10)
  stopwatchstart.classList.add("clicked")
  stopwatchstop.classList.remove("clicked")
  stopwatchreset.classList.remove("clicked")
}
)

// stopwatch stop button
stopwatchstop.addEventListener('click', () => {
  clearInterval(stopwatchintervalId)
  stopwatchstart.classList.remove("clicked")
  stopwatchstop.classList.add("clicked")
  stopwatchreset.classList.remove("clicked")
})


// stopwatch reset button
stopwatchreset.addEventListener('click', () => {

  stopwatchstart.classList.remove("clicked")
  stopwatchstop.classList.remove("clicked")
  stopwatchreset.classList.add("clicked")

  Milsec = 0
  Second = 0
  Minute = 0
  Hour = 0

  ms.innerHTML = Milsec
  s.innerHTML = Second
  m.innerHTML = Minute
  h.innerHTML = Hour

})

