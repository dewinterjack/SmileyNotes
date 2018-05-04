// apply module pattern after basic logic for framework has been written

function expects(x) {
	return {
		toEqual: function(y) {
			if (x === y) {
				console.log('%c Passed!', 'color: #bada55'); //changed from console.log to return. We will console log at smileyIt.js
			}
			else {
				console.log('Failed');
			}
		},

		toBeLength: function(length) {
			if (x.length === length) {
				return 'Test Passed!';
			}
			else {
				return'Failed';
			}
		}

	};
}


// expects(5).toEqual(5)
// expects(4).toEqual("moo")
//
// expects("ding").toBeLength(4);
