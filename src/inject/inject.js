chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. Agent Started");
		// ----------------------------------------------------------
		const socket = io('https://imgmin.co')
		
		setInterval(function(){
			socket.on('price', function(msg){
		   	 	console.log('message: ' + msg);
		    	socket.emit('pricex', document.querySelector('.price_nxtidr_val').innerText);
		  	});	
		},5000)
		
		  
		
	}
	}, 10);
});