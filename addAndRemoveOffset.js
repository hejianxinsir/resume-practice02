    // 添加 offset 类
    let specialTags = document.querySelectorAll('[data-x]') //获取三大区域，关于 作品 博客
    for(i=0; i<specialTags.length; i++){
      specialTags[i].classList.add('offset')
    }

    setTimeout(function(){
      findClosest()
    },50)
    
    function findClosest(){
      let specialTags = document.querySelectorAll('[data-x]') //获取三大区域，关于 作品 博客
      let minIndex = 0
      for(i=1; i<specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
          minIndex = i
        }
      }
      for(let i=0; i<specialTags.length; i++){
        specialTags[i].classList.remove('active')
      }
      specialTags[minIndex].classList.add('active')
      // 上面的一片代码，是找到离页面最近的那个元素，把其他两个干掉，给对应的那个加 active
      specialTags[minIndex].classList.remove('offset')
      let id = specialTags[minIndex].id
      let a = document.querySelector('a[href="#'+ id +'"]')  // 通过 id 找 a 标签，通过 a 标签找 父元素 li ，通过 li 找同类元素，把同类其他元素干掉，只给自己 active
      let li = a.parentNode 
      let brothersAndMe = li.parentNode.children
      for(let i=0; i<brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highLight')
      }
      li.classList.add('highLight')
    }
