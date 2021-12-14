const btn = document.querySelector('.btn')

/* 마우스 포인터 좌표찾기 */
btn.onmousemove = function (e) {
  const x = e.pageX - btn.offsetLeft
  const y = e.pageY - btn.offsetTop
  
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}

const btn4 = document.querySelector('.btn4')

btn4.onmousemove = function (e) {
  const x = e.pageX - btn4.offsetLeft
  const y = e.pageY - btn4.offsetTop
  
  btn4.style.setProperty('--x', x + 'px')
  btn4.style.setProperty('--y', y + 'px')
}