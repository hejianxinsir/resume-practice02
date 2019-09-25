    // Setup the animation loop.
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    

    // 点击跳转
    let aTags = document.querySelectorAll('nav.navMenu > ul > li > a')
    for(let i=0; i<aTags.length; i++){
      aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        let t = Math.abs((s/100)*300)
        if(t > 500){
          t = 500
        }
        // 以下是引入的东西
        const coords = { y: currentTop}; 
        const tween = new TWEEN.Tween(coords) 
        .to({ y: targetTop}, t) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        // Use an easing function to make the animation smooth.
        .onUpdate(() => { 
          window.scrollTo(0 , coords.y)
        })
        .start(); // Start the tween immediately.

      }
    }
