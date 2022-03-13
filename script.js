class Logo {
  constructor(element) {
    this.element = element;
    this.velocity = 0.02;
    this.reset();
  }

  get x() {
    return parseFloat(getComputedStyle(this.element).getPropertyValue("--x"));
  }

  set x(value) {
    this.element.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.element).getPropertyValue("--y"));
  }

  set y(value) {
    this.element.style.setProperty("--y", value);
  }

  rect() {
    return this.element.getBoundingClientRect();
  }

  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = getRandomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
  }

  update(delta) {
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    const rect = this.rect();
    let centerY = (rect.height * 50) / window.innerHeight;
    let centerX = (rect.width * 50) / window.innerWidth;

    if (rect.bottom >= window.innerHeight) {
      this.y = 100 - centerY;
      this.direction.y *= -1;
      changeColor();
    } else if (rect.top <= 0) {
      this.y = centerY;
      this.direction.y *= -1;
      changeColor();
    }

    if (rect.right >= window.innerWidth) {
      this.x = 100 - centerX;
      this.direction.x *= -1;
      changeColor();
    } else if (rect.left <= 0) {
      this.x = centerX;
      this.direction.x *= -1;
      changeColor();
    }
  }
}

const logo = new Logo(document.querySelector("svg"));

let lastTime;
function update(time) {
  if (lastTime !== undefined) {
    const delta = time - lastTime;
    logo.update(delta);
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

function getRandomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function changeColor() {
  const random = getRandomNumberBetween(0, 360);
  document.documentElement.style.setProperty("--hue", random);
}
