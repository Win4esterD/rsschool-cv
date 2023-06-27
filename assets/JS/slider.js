slides = flags;

class Slider{
    constructor(slidesNames, slidesRoute, format, slideIMGSelector, leftArrow, rightArrow, spansPlace, arrowsBlocker){
      this.slidesNames = slidesNames;
      this.slidesRoute = slidesRoute;
      this.format = format;
      this.img = document.querySelector(slideIMGSelector);
      this.leftArrow = document.querySelector(leftArrow);
      this.rightArrow = document.querySelector(rightArrow);
      this.spansPlace = document.querySelector(spansPlace);
      this.counter = 0;
      this.arrowsBlocker = document.querySelector(arrowsBlocker);
    }

    setImage(){
      this.img.setAttribute('src', `${this.slidesRoute}${this.slidesNames[this.counter]}.${this.format}`)
    }

    changeLeft(){
      if(this.counter > 0){
        this.counter -= 1;
        this.setImage()
      }else if (this.counter === 0){
        this.counter = this.slidesNames.length - 1;
        this.setImage()
      }
    }

    changeRight(){
      if(this.counter < this.slidesNames.length - 1){
        this.counter += 1;
        this.setImage()
      }else if (this.counter === this.slidesNames.length - 1){
        this.counter = 0;
        this.setImage()
      }
    }


    slideLeft(){
      this.leftArrow.addEventListener('click', () => {
        this.img.style.transform = "translate(400px)";
        this.arrowsBlocker.style.display = 'block';
        setTimeout(() => {
          this.changeLeft();
          this.img.style.transition = "0s";
          this.img.style.transform = "translate(-400px)";
        }, 500)
        setTimeout(() => {
          this.img.style.transition = "0.5s";
          this.img.style.transform = "translate(0px)"
          this.arrowsBlocker.style.display = 'none';
        }, 900)
      })
    }

    slideRight(){
      this.rightArrow.addEventListener('click', () => {
        this.img.style.transform = "translate(-400px)";
        this.arrowsBlocker.style.display = 'block';
        setTimeout(() => {
          this.changeRight();
          this.img.style.transition = "0s";
          this.img.style.transform = "translate(400px)";
        }, 500)
        setTimeout(() => {
          this.img.style.transition = "0.5s";
          this.img.style.transform = "translate(0px)"
          this.arrowsBlocker.style.display = 'none';
        }, 900)
      })
    }

    generateSpans(pointClass){
      this.slidesNames.map((item) => {
        const point = document.createElement('span');
        point.className = pointClass;
        this.spansPlace.appendChild(point);
      })
    }

    activateSpans(pointsSelector){
      const points = document.querySelectorAll(`.${pointsSelector}`);
      points[this.counter].style.background = window.getComputedStyle(points[this.counter]).borderColor;
      points.forEach((item, index) => {
        item.addEventListener('click', () => {
          this.counter = index;
          this.setImage();
          for(let point of points){
            point.style.background = 'none';
          }
          item.style.background = window.getComputedStyle(item).borderColor;
        })
      })

      this.leftArrow.addEventListener('click', () => {
        for(let point of points){
          point.style.background = 'none';
        }
        setTimeout(() => points[this.counter].style.background = window.getComputedStyle(points[this.counter]).borderColor, 500);
      })

      this.rightArrow.addEventListener('click', () => {
        for(let point of points){
          point.style.background = 'none';
        }
        setTimeout(() => points[this.counter].style.background = window.getComputedStyle(points[this.counter]).borderColor, 500);
      })
    }

    showName(countryNameSelector, poinsSelector){
      const country = document.querySelector(countryNameSelector, poinsSelector);
      country.innerHTML = `${this.slidesNames[this.counter]}`;

      this.leftArrow.addEventListener('click', () => {
        setTimeout(() => {
          country.innerHTML = `${this.slidesNames[this.counter]}`;
        }, 900)
      });

      this.rightArrow.addEventListener('click', () => {
        setTimeout(() => {
          country.innerHTML = `${this.slidesNames[this.counter]}`;
        }, 900)
      })

      const spans = document.querySelectorAll(poinsSelector);

      spans.forEach((item, index) => {
        item.addEventListener('click', () => {
          country.innerHTML = `${this.slidesNames[index]}`;
        })
      })
    }
}

const flagsSlider = new Slider(slides, "assets/IMG/flags/", "jpg", ".slider__flag", ".arrows__left", '.arrows__right', '.slider-points', '.arrows__blocker');

flagsSlider.setImage();
flagsSlider.slideLeft();
flagsSlider.slideRight();
flagsSlider.generateSpans('slider-points__point');
flagsSlider.activateSpans('slider-points__point');
flagsSlider.showName('.country-name', '.slider-points__point')
