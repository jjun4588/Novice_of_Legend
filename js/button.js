const btn = document.querySelector('.btn')

/* 마우스 포인터 좌표찾기 */
btn.onmousemove = function (e) {
  const x = e.pageX - btn.offsetLeft
  const y = e.pageY - btn.offsetTop
  
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}

const btn2 = document.querySelector('.btn2')

btn2.onmousemove = function (e) {
  const x = e.pageX - btn2.offsetLeft
  const y = e.pageY - btn2.offsetTop
  
  btn2.style.setProperty('--x', x + 'px')
  btn2.style.setProperty('--y', y + 'px')
}

const btn3 = document.querySelector('.btn3')

btn3.onmousemove = function (e) {
  const x = e.pageX - btn3.offsetLeft
  const y = e.pageY - btn3.offsetTop
  
  btn3.style.setProperty('--x', x + 'px')
  btn3.style.setProperty('--y', y + 'px')
}

const btn4 = document.querySelector('.btn4')

btn4.onmousemove = function (e) {
  const x = e.pageX - btn4.offsetLeft
  const y = e.pageY - btn4.offsetTop
  
  btn4.style.setProperty('--x', x + 'px')
  btn4.style.setProperty('--y', y + 'px')
}