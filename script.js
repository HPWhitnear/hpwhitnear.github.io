const MIN_PAGES = 1;
const MAX_PAGES = 2;

function move_up() {
	//get current page data
	$('#pageLeft').attr("disabled", false);
	var cur_page_num = $('#current_page').data("page")
	//increment to new page
	var new_page_num = parseInt(cur_page_num) + 1
	//disable movement button if at max
	if (new_page_num >= MAX_PAGES) {
		$('#pageRight').attr("disabled", true);
	}
	//change current page data to new page
	$('#current_page').data('page', `${new_page_num}`)
	//move cur page up then move new page left
	$(`#page_${cur_page_num}`).animate({bottom: "200vh"}, 500, function() {
		$(`#page_${new_page_num}`).animate({left: "0"}, 500)
	});
	
}

function move_down() {
	$('#pageRight').attr("disabled", false);
	//get current page data
	var cur_page_num = $('#current_page').data("page")
	//increment to new page
	var new_page_num = parseInt(cur_page_num) - 1
	//disable movement button if at min
	if (new_page_num <= MIN_PAGES) {
		console.log("left disabled")
		$('#pageLeft').attr("disabled", true);
	}
	//change current page data to new page
	$('#current_page').data('page', `${new_page_num}`)
	//move cur page up then move new page left
	$(`#page_${cur_page_num}`).animate({left: "200vh"}, 500, function() {
		$(`#page_${new_page_num}`).animate({bottom: "0"}, 500)
	});
	
}


$(document).ready(function() {
	//$('#pageRight').on("click", move_up)
	//$('#pageLeft').on("click", move_down)

	$('.languageImg').mouseover(function() {
		var languageName = $(this).data("language")
		$(this).css({
 'transition-duration': '1s',
  '-webkit-transform' : 'rotate(360deg)',
     '-moz-transform' : 'rotate(360deg)',  
      '-ms-transform' : 'rotate(360deg)',  
       '-o-transform' : 'rotate(360deg)',  
          'transform' : 'rotate(360deg)',  
               'zoom' : 1

    });
		var i = 0
		var interval = setInterval(function() {
			$('.infoTab').append(languageName[i])
			i++
			if (i > languageName.length) {
				clearInterval(interval)
			}
		}, 100)
	})

	$('.languageImg').mouseout(function() {
		// Set a fake timeout to get the highest timeout id
		$(this).css({
  '-webkit-transform' : 'rotate(0deg)',
     '-moz-transform' : 'rotate(0deg)',  
      '-ms-transform' : 'rotate(0deg)',  
       '-o-transform' : 'rotate(0deg)',  
          'transform' : 'rotate(0deg)',  
               'zoom' : 1

    });
		var highestTimeoutId = setTimeout(";");
		for (var i = 0 ; i < highestTimeoutId ; i++) {
    		clearTimeout(i); 
		}
		$('.infoTab').empty()
	})

	$('#contact_email').click(function() {
		var $temp = $("<input>");
  		$("body").append($temp);
  		$temp.val($(this).text()).select();
  		document.execCommand("copy");
  		$temp.remove();
  		$('#copiedPopup').fadeIn()
  		interval = setInterval(function() {
  			$('#copiedPopup').fadeOut()
  		}, 2000)
	})
});