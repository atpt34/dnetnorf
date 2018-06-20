
module('Braces');

/*
Write a function that validates a series of braces.
*/

function validSequence(braces) {
 
	var opening = "[({<";
	var closing = "])}>";
	var st = [];
	for (var i = 0; i < braces.length; i++) {
		//console.log(braces[i]);
		if (opening.indexOf(braces[i]) != -1) {
			st.push(opening.indexOf(braces[i]));
			//console.log("open");
		} else {
			if (closing.indexOf(braces[i]) != -1) {
				//console.log("closed 1");
				if (closing.indexOf(braces[i]) == st[st.length - 1]) {
					st.pop();
					//console.log("closed");
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
		//console.log(st);
	}
	return st.length == 0;
}

test('Simple valid cases', function() {
  equal(validSequence(''), true, 'empty string validates');
  equal(validSequence('[]'), true, 'square braces');
  equal(validSequence('()'), true, 'round braces');
  equal(validSequence('{}'), true, 'figure braces');
  equal(validSequence('<>'), true, 'brackets');
});

test('Simple invalid cases', function() {
  equal(validSequence('}'), false, 'invalid case');
  equal(validSequence('({'), false, 'invalid case');
  equal(validSequence('[<]'), false, 'invalid case');
  equal(validSequence('({)}'), false, 'invalid case');
});

test('Final cases', function() {
  equal(validSequence('([](<{}>))'), true, 'valid case');
  equal(validSequence('({[](<{}>}))'), false, 'invalid case');
});
