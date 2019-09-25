    // 把底部红条换一下。提示：给 li 加 active。
    let liTags = document.querySelectorAll('nav.navMenu > ul > li')
    for(let i=0; i<liTags.length; i++){
      liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
      }
      liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
      }
    }
