const eBoard = document.getElementById('display')

for (let i=20; i>=0; i--) {
  for (let j=0; j<=20; j++) {
    const ePixel = document.createElement('div')
    ePixel.setAttribute('id', `pixel-${j}-${i}`)
    ePixel.classList.add('pixel')
    eBoard.append(ePixel)
  }
}

const yAxis = document.getElementById('y-axis')
for (let i=20; i>=0; i--) {
  const yNumer = document.createElement('div')
  yNumer.innerText = i
  yNumer.classList.add('y-number')
  yAxis.append(yNumer)
}

const xAxis = document.getElementById('x-axis')
for (let i=0; i<=20; i++) {
  const xNumer = document.createElement('div')
  xNumer.innerText = i
  xNumer.classList.add('x-number')
  xAxis.append(xNumer)
}

function putPixel(x, y) {
  ePixel = document.getElementById(`pixel-${x}-${y}`)
  ePixel.style.backgroundColor = 'black'
}

putPixel(10, 10)