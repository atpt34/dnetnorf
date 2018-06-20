
module('Functions');

test('Defining functions directly', function() {
  var result = 'a';
  function changeResult() {
    // the ability to access a variables defined in the same scope as the function is known as 'closure'
    result = 'b';
  };
  changeResult();
  equal('b', result, 'What is the value of result?');
});

test('Assigning functions to variables', function() {
  var triple = function(input) {
    return input * 3;
  };
  equal(12, triple(4), 'What is triple 4?');
});

test('Self invoking functions', function() {
  var publicValue = 'shared';

    // self invoking functions are used to provide scoping and to alias variables
  (function(pv) {
    var secretValue = 'password';
    equal("shared", pv, 'What is the value of pv?');
    equal("string", typeof secretValue, 'Is secretValue available in this context?');
    equal("string", typeof publicValue, 'Is publicValue available in this context?');
  })(publicValue);

  equal("undefined", typeof secretValue, 'Is secretValue available in this context?');
  equal("string", typeof publicValue, 'Is publicValue available in this context?');
});

test('arguments array', function() {
  var add = function() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        // complete the implementation of this method so that it returns the sum of its arguments
        
		total += arguments[i];
    }
    
	return total;
  };

  equal(15, add(1,2,3,4,5), 'add 1,2,3,4,5');
  equal(9, add(4,7,-2), 'add 4,7,-2');
});

test('Using call to invoke function',function(){
  var invokee = function( message ){
    return this + message;
  };

  //another way to invoke a function is to use the call function which allows
  //you to set the callers 'this' context.  Call can take any number of arguments:
  //the first one is always the context that this should be set to in the called
  //function, and the arguments to be sent to the function, multiple arguments are separated by commas.
  var result = invokee.call('I am this!', 'Where did it come from?');

  equal('I am this!' + 'Where did it come from?', result, 'What will the value of invokee\'s this be?');
});

test('Using apply to invoke function',function(){
  var invokee = function( message1, message2 ){
      return this + message1 + message2;
  };

  //similar to the call function is the apply function.  Apply only has two
  //arguments:  the first is the context that this should be set to in the called
  //function and and array of arguments to be passed into the called function.
  var result = invokee.apply('I am this!', ['I am arg1','I am arg2']);

  equal('I am this!' + 'I am arg1' + 'I am arg2', result, 'What will the value of invokee\'s this be?');
});

test('This inside a method', function () {
  var person = {
    name: 'bob',
    intro: function () {
      return 'Hello, my name is ' + this.name;
    }
  }

  equal(person.intro(), 'Hello, my name is bob', 'If an object has a method can you access properties inside it?');
});

test('This on unattached function', function () {
  var person = {
    globalName: 'bob',
    intro: function () {
		
      return 'Hello, my name is ' + this.globalName;
    }
  }

  var alias = person.intro;

  // if the function is not called as an object property 'this' is the global context
  // (window in a browser). This is an example. Please do not do this in practise.
  window.globalName = 'Peter';
  equal(alias(), 'Hello, my name is Peter', 'What does this refer to when it is not part of an object?');
});
