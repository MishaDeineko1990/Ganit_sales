


$(document).ready(function(){


let languige = "";


document.getElementById('buttonnnn').onclick = function () {
	using_languige();
};
function using_languige() { //функкція визначення вибранної мови по натискненню на кнопку///
		var val = $("#Language option:selected").val();		
		languige = val.toLowerCase();	
		alert(languige);	
	};














// use google table
	$.getJSON("https://spreadsheets.google.com/feeds/list/1PvCDFWj4PmMAcP1oOX-TU8m-CG88cvFNNpa_R9sUdgE/od6/public/values?alt=json", function(data){
		data = data['feed']['entry']
		console.log(data);
		show_menu(data);
	})


	function show_menu(data){
		let out="";
		
	}
// end use google table















// buton menu

let indecator_opening = false;
let count_openes = 0;                   // прапорець індикатор що показує відкрите чи закрите меню ()///
let windows_width = $(window).width();



document.getElementById('position_button_menu').onclick = function () {                         //фенккція відкритт та закриття меню ()///
	
	if (indecator_opening===false)               //Якщо меню закрите то ми робимо це ()///
		{
			$(".button_menu").css("display", "block");            // Ховаэмо кнопку выдкриття меню ()///
			$(".close_button_menu").css('display', 'none'); // показуэмо кнопку закриття меню()///
			$(".open_menu_navigation").css("right", "-600px");

			

			if(count_openes==0)
					{
						$(".menu_navigation").addClass("open_menu_navigation"); // додяэмо клас з цсс властивостями до елементу меню що його відкрити()///
					}
			indecator_opening = true; //записуємо що меню відкрите ()///

			count_openes++; // flag whot show what menu was in do

		}
		else //меню відкрите()///
			{
				$(".open_menu_navigation").css("right", "0px");  //видаляемо клас відкритого меню скриваємо меню()///
				$(".button_menu").css("display", "none"); //показуємо кнопку відкриття меню ()///
				$(".close_button_menu").css('display', 'block');//ховаємо кнопку приховання меню()///
				
			
				indecator_opening = false;//пишемо що меню закрите()///
			}
};

// end buton menu




















// change language




$( "#Language" ).change(function() {  //function on the reaction in a change in the selector language 
 alert( "Handler for .change() called." );
});

// change language












})

































// open on click
$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// close
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// close out window
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});








// change style whan hovering cursor on mini block

// function changeItem() {
// 	alert(this);
// 	this.addClass("clName1");
//   // document.getElementById('one-two').style.width = '200px';
// }// функция, которая сработает при наведении.
// //она означает - выбрать элемент к Id у которого надо что-то изменить.
// // когда в скобки где написано one-two добавите Id своего элемента


// function rechangeItem() {
//   alert("by by");
// }// тут всё также. но наобарот. протсес происходящий про отводе курсора.

//end change style whan hovering cursor on mini block












//do for download_page


// end do for download page













