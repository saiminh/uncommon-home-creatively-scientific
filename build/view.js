(()=>{let e,i,t,o,c,n;function m(){motion&&(motion.scroll(motion.animate(".uncommon-home-creatively-scientific__images figure:first-child",{width:[t+"px",t/2+"px"],rotate:[0,5]}),{target:document.querySelector(".uncommon-home-creatively-scientific__images figure:first-child"),offset:["100% 100%","0% 0%"]}),motion.scroll(motion.animate(".uncommon-home-creatively-scientific__images figure:last-child",{width:[o/2+"px",o+"px"],rotate:[5,0]}),{target:document.querySelector(".uncommon-home-creatively-scientific__images figure:first-child"),offset:["100% 100%","0% 0%"]}),motion.scroll(motion.animate(".uncommon-home-creatively-scientific__title",{y:["80%","0%"]}),{target:document.querySelector(".uncommon-home-creatively-scientific"),offset:["start end","40% 50%"]}),motion.scroll(motion.animate(".uncommon-home-creatively-scientific__images + .wp-block-heading",{y:["30%","-30%"]}),{target:document.querySelector(".uncommon-home-creatively-scientific"),offset:["20% 50%","100% 50%"]}))}window.addEventListener("DOMContentLoaded",(()=>{e=document.querySelector(".uncommon-home-creatively-scientific__images figure:first-child"),i=document.querySelector(".uncommon-home-creatively-scientific__images figure:last-child"),t=e.offsetWidth,o=2*i.offsetWidth,c=window.getComputedStyle(document.querySelector(".uncommon-home-creatively-scientific__title")).fontSize,document.querySelector(".uncommon-home-creatively-scientific__title").style.fontSize=c,document.querySelector(".uncommon-home-creatively-scientific__images + .wp-block-heading").style.fontSize=c,m()})),window.addEventListener("resize",(()=>{clearTimeout(n),n=setTimeout((()=>{e=document.querySelector(".uncommon-home-creatively-scientific__images figure:first-child"),i=document.querySelector(".uncommon-home-creatively-scientific__images figure:last-child"),t=.55*window.innerWidth,o=.55*window.innerWidth,c=window.getComputedStyle(document.querySelector(".uncommon-home-creatively-scientific__title")).fontSize,document.querySelector(".uncommon-home-creatively-scientific__images + .wp-block-heading").style.fontSize=c,document.querySelector(".uncommon-home-creatively-scientific__title").style.fontSize=c,m()}),200)}))})();