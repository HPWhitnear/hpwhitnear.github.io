function move_up() {
	//get current page data
	var cur_page_num = $('#current_page').data("page")
	//increment to new page
	var new_page_num = parseInt(cur_page_num) + 1
	//change current page data to new page
	$('#current_page').data('page', `${new_page_num}`)
	console.log(`moving to ${new_page_num} from ${cur_page_num}`)
	//move cur page up then move new page left
	$(`#page_${cur_page_num}`).animate({bottom: "110vh"}, 500, function() {
		$(`#page_${new_page_num}`).animate({left: "0"}, 500)
	});
	
}

function move_down() {
	//get current page data
	var cur_page_num = $('#current_page').data("page")
	//increment to new page
	var new_page_num = parseInt(cur_page_num) - 1
	//change current page data to new page
	$('#current_page').data('page', `${new_page_num}`)
	console.log(`moving to ${new_page_num} from ${cur_page_num}`)
	
	//move cur page up then move new page left
	$(`#page_${cur_page_num}`).animate({left: "200vh"}, 500, function() {
		$(`#page_${new_page_num}`).animate({bottom: "0"}, 500)
	});
	
}
$(document).ready(function() {
	console.log("ready")
	$('#pageRight').on("click", move_up)
	$('#pageLeft').on("click", move_down)
});
