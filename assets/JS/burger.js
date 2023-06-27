class BurgerMenu{
  constructor(menuSelector, headerSelector, navSelector, mainSelector, displayProperty, minHeight, maxHeight){
      this.menu = document.querySelector(menuSelector);
      this.header = document.querySelector(headerSelector);
      this.navigation = document.querySelector(navSelector);
      this.main = document.querySelector(mainSelector);
      this.minHeight = minHeight;
      this.maxHeight = maxHeight;
      this.display = displayProperty;
}

activate(){
  this.menu.addEventListener('click', () => {
    if(window.getComputedStyle(this.navigation).display === 'none'){
      this.header.style.height = `${this.maxHeight}`;
      this.navigation.style.display = `${this.display}`;
      setTimeout(() => {
        this.navigation.style.opacity = '1';
      }, 500)
    }else{
      this.navigation.style.opacity = '0';
      this.navigation.style.display = 'none';
      this.header.style.height = `${this.minHeight}`;
    }
  });

  this.main.addEventListener('click', () => {
    this.header.style.height = `${this.minHeight}`;
    this.navigation.style.opacity = '0';
    this.navigation.style.display = 'none';
    setTimeout(() => this.navigation.style.display = 'none', 500)
  })
}
}

const burger = new BurgerMenu('.burger-menu', '.header', '.nav__ul', 'main', 'flex', '20px', '50px');
burger.activate();