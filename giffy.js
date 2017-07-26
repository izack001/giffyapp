$(document).ready(function(){



var giffiButtons = ["Tupac", "Biggie", "Eazy E", "Dr. Dre", "Snoop Dog"];

var apikey = "api_key=7a02cd4042c24020ac833355e8b9c39a";
var queryURL= "https://api.giphy.com/v1/gifs/search?"+apikey+"&q=limit=10&offset=0&rating=G&lang=en";
$.ajax({
	url: queryURL, 
	method: "GET"
}).done(function(response){
	

});



//we are making buttons!!!! we use the four loop to make the buttons dinamicaly
for(var i=0; i < giffiButtons.length; i ++){
	var button= $("<button>");  ///create a variable and assignig it an html <button> elemnt so now I"ve created dynimally a button.
	button.html(giffiButtons[i]);//Giving the button a Value which will be an element of the array [i] so that it can organize and select the button names on the array
	button.addClass("rappers");
	$("#buttons").append(button); // apend class button to html from our variable to the dom
		
}




$("#add-artistName").on("click", function(event){
	event.preventDefault();
	var newBotton= $("<button>");
	var artist = $("#artist-input").val().trim();
	newBotton.html(artist);
	$("#buttons").append(newBotton);


});

$(".rappers").on("click", function(event){
	event.preventDefault();
	var query = $(this).text();///(this) in this case refers to the button that is clicked!!!
	// console.log($(this).text());use this to console log the button that was clicked!!
	var queryURL = "https://api.giphy.com/v1/gifs/search?" +apikey+ "&q=limit=10&offset=0&rating=G&lang=en";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
		for(var i=0; i<response.data.lenght; i++){
			var search =$('<div class="serch">');
			var rating = response.data[i].rating;
			var paragraph = $("<p>").text("Rating: " + rating);
			var animate= response.data[i].images.fixed_height.url;
			var still=  response.data[i].images.fixed_height_still.url;
			var image = $("<img>");
			image.attr("src",still);
			image.attr("data_still", still);
			image.attr("data_animate",animate);
			image.attr("data_state","still");
			image.addClass("searchRapper");
			search.append(paragraph);
			search.append(image);
			$("#artist-searches").append(search);
			
		}
	});
});

})


