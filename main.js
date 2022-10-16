function putPixel(x, y) {
  ePixel = document.getElementById(`pixel-${x}-${y}`)
  ePixel.style.backgroundColor = 'black'
}

function ddaLineDrawing(x1, y1, x2, y2) {
  let dx = Math.abs(x2 - x1)
  let dy = Math.abs(y2 - y1)
  let step = Math.max(dx, dy)
  let xinc = dx/step
  let yinc = dy/step

  for (let i=0; i<=step; i++) {
    putPixel(Math.round(x1), Math.round(y1))
    x1 += xinc
    y1 += yinc
  }
}

document.addEventListener('DOMContentLoaded', function () {
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

  ddaLineDrawing(1, 2, 8, 6)
})
