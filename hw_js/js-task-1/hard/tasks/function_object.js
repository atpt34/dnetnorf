
module('Function object');

/*
Write a function that takes a constructor as an argument and
makes the created object callable - behave like function.
Do not break prototypal inheritance.

obj() == obj.callable()
*/

function callableConstructor(fn) {
  return function(side) {
    var obj = new fn(side);
    var func = obj.callable.bind(obj);
     func.__proto__ = obj.__proto__
    for (key in obj) {
     if (obj[key] instanceof Object) {
       continue;
     }
     func[key] = obj[key];
     }
  return func;
  }

}

test('Function object', function() {
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }

  Rectangle.prototype.callable = function() {
    return this.width * this.height;
  }

  function Square(side) {
    Rectangle.call(this, side, side);
  }

  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;

  var square = new Square(5);
  var CallableSquareConstructor = callableConstructor(Square);
  var callableSquare = new CallableSquareConstructor(5);

  if(callableSquare) {
    ok(square.callable() == callableSquare.callable(), 'Acts normally');
    ok(callableSquare instanceof Square, 'Inheritance not broken');
    ok(callableSquare instanceof Rectangle, 'Inheritance not broken');
    ok(callableSquare() == callableSquare.callable(), 'Works as expected');
  } else {
    ok(false, 'Not compeled');
  }

});
