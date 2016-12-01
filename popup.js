document.addEventListener('DOMContentLoaded', function() {
	
	chrome.storage.sync.get('autoSearchOpt', function(items){
			if(items.autoSearchOpt){
				chrome.tabs.create({
					url : 'multi_word_finder_options.html'
				  });
			}else{
				chrome.storage.sync.set({autoSearchOpt: false}, function(){
					chrome.storage.sync.set({autoSearchSet: '-1'}, function(){
						chrome.tabs.create({
							url : 'multi_word_finder_options.html'
						  });
					});
				});
			}
	});

});
