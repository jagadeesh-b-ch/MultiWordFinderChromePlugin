(function(){

	chrome.storage.sync.get('autoSearchOpt', function(items){
		if(items.autoSearchOpt){
			chrome.storage.sync.get('autoSearchSet', function(items){
				initiateSearch(items.autoSearchSet);
			});
		}
	});

	function initiateSearch(selKeySetName){
	chrome.storage.sync.get(selKeySetName, function(items) {
		var keySetValues = items[selKeySetName];
		$.each(keySetValues, function(index, value){
			searchWord(value, 'color'+index);
		});
	});
	}

	function searchWord(word, css){
	word = word.replace(/\s/g, '\\s');
	console.log('word is: '+word);
    var regExp = new RegExp(word, "i");
		console.log('searching for: '+regExp);
		console.log('highlight by: '+css);
		$("body").markRegExp(regExp, {'className':css, 'separateWordSearch':false, 'acrossElements':true});
    //$("body").mark(word, {'className':css, 'separateWordSearch':false, 'acrossElements':true});
	}

})();
