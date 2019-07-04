// work from languige
var languige = "";


document.getElementById('buttonnnn').onclick = function () {
	using_languige();
};
function using_languige() { //функкція визначення вибранної мови по натискненню на кнопку///
		var val = $("#Language option:selected").val();		
		languige = val.toLowerCase();	
		alert(languige);	
};




// change language

$( "#Language" ).change(function() {  //function on the reaction in a change in the selector language 
 alert( "Handler for .change() called." );
});

// change language


