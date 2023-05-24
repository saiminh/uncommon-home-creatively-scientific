let imageOne, imageTwo, imageOneWidth, imageTwoWidth, fontSize;

function animateElems(){
  if (motion){
    motion.scroll(
      motion.animate(".uncommon-home-creatively-scientific__images figure:first-child", { width: [imageOneWidth+'px', imageOneWidth/2+'px'], rotate: [0, 5] }),
      { 
        target: document.querySelector('.uncommon-home-creatively-scientific__images figure:first-child'), 
        offset: ["100% 100%", "0% 0%"]
      },
    )
    motion.scroll(
      motion.animate(".uncommon-home-creatively-scientific__images figure:last-child", { width: [imageTwoWidth/2+'px', imageTwoWidth+'px'], rotate: [5, 0] }),
      { 
        target: document.querySelector('.uncommon-home-creatively-scientific__images figure:first-child'), 
        offset: ["100% 100%", "0% 0%"]
      },
    )
    motion.scroll(
      motion.animate(".uncommon-home-creatively-scientific__title", { y: ['80%', '0%'] }),
      { 
        target: document.querySelector('.uncommon-home-creatively-scientific'), 
        offset: ["start end", "40% 50%"]
      },
    )
    motion.scroll(
      motion.animate(".uncommon-home-creatively-scientific__images + .wp-block-heading", { y: ['30%', '-30%'] }),
      { 
        target: document.querySelector('.uncommon-home-creatively-scientific'), 
        offset: ["20% 50%", "100% 50%"]
      },
    )
  }
}

window.addEventListener('DOMContentLoaded', () => {
  imageOne = document.querySelector('.uncommon-home-creatively-scientific__images figure:first-child'),
  imageTwo = document.querySelector('.uncommon-home-creatively-scientific__images figure:last-child'),
  imageOneWidth = imageOne.offsetWidth,
  imageTwoWidth = imageTwo.offsetWidth * 2;
  
  fontSize = window.getComputedStyle(document.querySelector('.uncommon-home-creatively-scientific__title')).fontSize;
  document.querySelector('.uncommon-home-creatively-scientific__title').style.fontSize = fontSize;
  document.querySelector('.uncommon-home-creatively-scientific__images + .wp-block-heading').style.fontSize = fontSize;
  
  animateElems();
})

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    imageOne = document.querySelector('.uncommon-home-creatively-scientific__images figure:first-child'),
    imageTwo = document.querySelector('.uncommon-home-creatively-scientific__images figure:last-child'),
    imageOneWidth = window.innerWidth * 0.55;
    imageTwoWidth = window.innerWidth * 0.55;
    
    fontSize = window.getComputedStyle(document.querySelector('.uncommon-home-creatively-scientific__title')).fontSize;
    document.querySelector('.uncommon-home-creatively-scientific__images + .wp-block-heading').style.fontSize = fontSize;
    document.querySelector('.uncommon-home-creatively-scientific__title').style.fontSize = fontSize;
    
    animateElems();
  }, 200);
})