function putPixel(x, y) {
  ePixel = document.getElementById(`pixel-${x}-${y}`)
  ePixel.style.backgroundColor = 'black'
}

function ddaLineDrawing(x1, y1, x2, y2) {
  let dx = x2 - x1
  let dy = y2 - y1
  let step = Math.max(Math.abs(dx), Math.abs(dy))
  let xinc = dx / step
  let yinc = dy / step

  for (let i = 0; i <= step; i++) {
    console.log(x1 + ' ' + y1)
    putPixel(Math.round(x1), Math.round(y1))
    x1 += xinc
    y1 += yinc
  }
}

function clearDisplay() {
  for (let i = 20; i >= 0; i--) {
    for (let j = 0; j <= 20; j++) {
      ePixel = document.getElementById(`pixel-${j}-${i}`)
      ePixel.style.backgroundColor = 'white'
    }
  }
}

const eDisplay = document.getElementById('display')

for (let i = 20; i >= 0; i--) {
  for (let j = 0; j <= 20; j++) {
    const ePixel = document.createElement('div')
    ePixel.setAttribute('id', `pixel-${j}-${i}`)
    ePixel.classList.add('pixel')
    eDisplay.append(ePixel)
  }
}

const yAxis = document.getElementById('y-axis')
for (let i = 20; i >= 0; i--) {
  const yNumer = document.createElement('div')
  yNumer.innerText = i
  yNumer.classList.add('y-number')
  yAxis.append(yNumer)
}

const xAxis = document.getElementById('x-axis')
for (let i = 0; i <= 20; i++) {
  const xNumer = document.createElement('div')
  xNumer.innerText = i
  xNumer.classList.add('x-number')
  xAxis.append(xNumer)
}

const inputForm = document.getElementById('input-form')
inputForm.addEventListener('submit', function (e) {
  e.preventDefault()
  clearDisplay()
  const x1 = Number(document.getElementById('x1').value)
  const y1 = Number(document.getElementById('y1').value)
  const x2 = Number(document.getElementById('x2').value)
  const y2 = Number(document.getElementById('y2').value)
  ddaLineDrawing(x1, y1, x2, y2)
})
