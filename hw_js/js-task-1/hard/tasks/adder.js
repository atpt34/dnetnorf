
module('Adder');

// function is also an object
function adder(x) {
    // private variable, init only once
    var sum = x;
    // private function
    function f(y) {
        sum = sum + y;
        return f; // return function
    }
    // arrow function:
    f.toString = () => sum;
    // overridden function
    f.valueOf = function() { return sum; }
    return f;
}

test('adder', function() {

  // alternative solution with reassignment
  //adder = x => x;
  equal(adder(1), 1, '1');

  //adder = x => y => x + y;
  equal(adder(1)(1), 2, '2');

  //adder = x => y => z => x + y + z;
  equal(adder(1)(10)(-2), 9, '9');

  //adder = u => v => x => y => z => u + v + x + y + z;
  equal(adder(10)(20)(30)(40)(50), 150, '150');
});

