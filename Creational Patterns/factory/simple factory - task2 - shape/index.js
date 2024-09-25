function Shape(posX, posY) {
  this.posX = posX;
  this.posY = posY;
  this.setPos = function (newPosX, newPosY) {
    this.posX = newPosX;
    this.posY = newPosY;
  };
}

function Circle(posX, posY, radius) {
  Shape.call(this, posX, posY);
  this.radius = radius;
  this.getSurfaceArea = function () {
    return Math.PI * this.radius * this.radius;
  };
}

function Square(posX, posY, squareHeight, squareWidth) {
  Shape.call(this, posX, posY);
  this.squareHeight = squareHeight;
  this.squareWidth = squareWidth;
  this.getSurfaceArea = function () {
    return this.squareHeight * this.squareWidth;
  };
}

function Triangle(posX, posY, triangleHeight, triangleWidth) {
  Square.call(this, posX, posY);
  this.triangleHeight = triangleHeight;
  this.triangleWidth = triangleWidth;
  this.getSurfaceArea = function () {
    return (this.triangleHeight * this.triangleWidth) / 2;
  };
}

const ShapesFactory = {
  getCircle: function (posX, posY, radius) {
    return new Circle(posX, posY, radius);
  },

  getSquare: function (posX, posY, squareHeight, squareWidth) {
    return new Square(posX, posY, squareHeight, squareWidth);
  },

  getTriangle: function(posX, posY, triangleHeight, triangleWidth){
    return new Triangle(posX, posY, triangleHeight, triangleWidth)
  }
};

const circle1 = ShapesFactory.getCircle(10,10,60);
const square1 = ShapesFactory.getSquare(200,200,150,100);
const triangle1 = ShapesFactory.getTriangle(300, 300, 200,50);
console.log(circle1.getSurfaceArea())
console.log(square1.getSurfaceArea())
console.log(triangle1.getSurfaceArea())