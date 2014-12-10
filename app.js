$(document).ready(function(){
	
	
	//define variables and add list items to table
	$("#add-button").click(function(){
		//get item entered and add it to the next row

		var items= $("input#Items").val();
		var price= +$("input#Price").val();
		var quantity = +$("input#Quantity").val();
		var subtotal = price * quantity;
		var listItem = $("<tr class='new'><td class='delete-option'></td><td class='item-column'>"+items+"</td><td class='pq-column'>$"+price+ "</td><td class='pq-column'>" +quantity+ "</td><td class='subtotal'>$"+subtotal+"</td></tr>");
		

		$("#top-app tr:last").before(listItem);
		$(".delete-option").click(function(){
			$(this).closest("tr").fadeOut(400, 
				function(){$(this).remove();
				calculateSum();
				});
		});

		$("table").on("click",".new", function(){
			$(this).toggleClass("completed");
			preventDefault();
		});

	// add up all subtotals
		function calculateSum() {
		var sum = 0;
		//iterate through each subtotal class and add values

			$(".subtotal").each(function(){
				//remove dollar sign so we can add values
				var value = $(this).text().replace("$","");
			//add only if value is number
				if (!isNaN(value) && value.length != 0) {
					sum += parseFloat(value);
			}
		});
		$(".total").text("$" + sum);
	};
		calculateSum();

	});


});