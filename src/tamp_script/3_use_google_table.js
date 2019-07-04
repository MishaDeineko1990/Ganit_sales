// use google table
	$.getJSON("https://spreadsheets.google.com/feeds/list/1PvCDFWj4PmMAcP1oOX-TU8m-CG88cvFNNpa_R9sUdgE/od6/public/values?alt=json", function(data){
		data = data['feed']['entry']
		console.log(data);
		show_menu(data);
	})


	function show_menu(data){
		
		
	}
// end use google table