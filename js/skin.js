function HoverCarousel( elm, settings ){
  this.DOM = {
    scope: elm,
    wrap: elm.querySelector('ul').parentNode
  }
  
  this.containerWidth = 0;
  this.scrollWidth = 0;
  this.posFromLeft = 0;    // Stripe position from the left of the screen
  this.stripePos = 0;    // When relative mouse position inside the thumbs stripe
  this.animated = null;
  this.callbacks = {}
  
  this.init()
}

HoverCarousel.prototype = {
  init(){
    this.bind()
  },
  
  destroy(){
    this.DOM.scope.removeEventListener('mouseenter', this.callbacks.onMouseEnter)
    this.DOM.scope.removeEventListener('mousemove', this.callbacks.onMouseMove)
  },

  bind(){
    this.callbacks.onMouseEnter = this.onMouseEnter.bind(this)
    this.callbacks.onMouseMove = e => {
      if( this.mouseMoveRAF ) 
        cancelAnimationFrame(this.mouseMoveRAF)

      this.mouseMoveRAF = requestAnimationFrame(this.onMouseMove.bind(this, e))
    }
    
    this.DOM.scope.addEventListener('mouseenter', this.callbacks.onMouseEnter)
    this.DOM.scope.addEventListener('mousemove', this.callbacks.onMouseMove)
  },
  
  // calculate the thumbs container width
  // 엄지손가락 용기 너비 계산
  onMouseEnter(e){
    this.nextMore = this.prevMore = false // reset

    this.containerWidth       = this.DOM.wrap.clientWidth;
    this.scrollWidth          = this.DOM.wrap.scrollWidth; 
    // padding in percentage of the area which the mouse movement affects
   // 마우스 이동이 영향을 미치는 영역의 백분율로 채우기
    this.padding              = 0.2 * this.containerWidth; 
    this.posFromLeft          = this.DOM.wrap.getBoundingClientRect().left;
    var stripePos             = e.pageX - this.padding - this.posFromLeft;
    this.pos                  = stripePos / (this.containerWidth - this.padding*2);
    this.scrollPos            = (this.scrollWidth - this.containerWidth ) * this.pos;

    // temporary add smoothness to the scroll 
   // 스크롤에 일시적으로 평활도 추가
    this.DOM.wrap.style.scrollBehavior = 'smooth';
    
    if( this.scrollPos < 0 )
      this.scrollPos = 0;
    
    if( this.scrollPos > (this.scrollWidth - this.containerWidth) )
      this.scrollPos = this.scrollWidth - this.containerWidth

    this.DOM.wrap.scrollLeft = this.scrollPos
    this.DOM.scope.style.setProperty('--scrollWidth',  (this.containerWidth / this.scrollWidth) * 100 + '%');
    this.DOM.scope.style.setProperty('--scrollLleft',  (this.scrollPos / this.scrollWidth ) * 100 + '%');

    // lock UI until mouse-enter scroll is finihsed, after aprox 200ms
   // aprox 200ms 후 마우스 입력 스크롤이 종료될 때까지 UI 잠금
    clearTimeout(this.animated)
    this.animated = setTimeout(() => {
      this.animated = null
      this.DOM.wrap.style.scrollBehavior = 'auto';
    }, 200)

    return this
  },

  // move the stripe left or right according to mouse position
  // 마우스 위치에 따라 스트라이프를 왼쪽 또는 오른쪽으로 이동
  onMouseMove(e){
    // don't move anything until inital movement on 'mouseenter' has finished
   // 'inital enter'의 initital 이동이 완료될 때까지 아무것도 움직이지 않음
    if( this.animated ) return

    this.ratio = this.scrollWidth / this.containerWidth
    
    // the mouse X position, "normalized" to the carousel position
   // 마우스 X 위치, 회전식 위치로 "정상화"
    var stripePos = e.pageX - this.padding - this.posFromLeft 
    
    if( stripePos < 0 )
        stripePos = 0

    // calculated position between 0 to 1
   // 0에서 1 사이의 계산된 위치
    this.pos = stripePos / (this.containerWidth - this.padding*2) 
    
    // calculate the percentage of the mouse position within the carousel
   // 회전목마 내에서 마우스 위치의 백분율 계산
    this.scrollPos = (this.scrollWidth - this.containerWidth ) * this.pos 

    this.DOM.wrap.scrollLeft = this.scrollPos
    
    // update scrollbar
   // 스크롤바 업데이트
    if( this.scrollPos < (this.scrollWidth - this.containerWidth) )
      this.DOM.scope.style.setProperty('--scrollLleft',  (this.scrollPos / this.scrollWidth ) * 100 + '%');

    // check if element has reached an edge
   // 요소가 가장자리에 도달했는지 확인
    this.prevMore = this.DOM.wrap.scrollLeft > 0
    this.nextMore = this.scrollWidth - this.containerWidth - this.DOM.wrap.scrollLeft > 5
    
    this.DOM.scope.setAttribute('data-at',
      (this.prevMore  ? 'left ' : ' ')
      + (this.nextMore ? 'right' : '')
    )
  }
}
           
var carouselElm = document.querySelector('.carousel')
new HoverCarousel(carouselElm)