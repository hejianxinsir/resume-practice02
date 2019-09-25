    window.onscroll = function(x){
      window.scrollY > 0 ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')
      findClosest()
    }
