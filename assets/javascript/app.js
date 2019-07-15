$(document).ready(function() {

var feelings = ["Hangry", "Afraid", "Grateful", "Confused","Regret", "Stressed", "Annoyed","Happy", "Jealous", "Confident","Offended", "Disturbed", "Guilt", "Bored", "Sassy", "Love", "Depressed", "Frustrated", "Disgust", "Angry", "Disappointed"];

function displayBigMood() {
    var emotion = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=sza4Oh4lJwtdkkmcKgnuiZGKUwCsYTZC&limit=10&rating=PG";

    // Create an AJAX call to the Giphy site
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(resp) {
        // console.log(queryURL);
        // console.log(resp);
        // console.log(resp.data[0].url);
        var results = resp.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {

            // Creating a div to hold the movie
        var gifsDiv = $("<div class= 'col-lg-10'>");

        // Creating a variable to hold the API call 
        var rating = results[i].rating;

        // Retrieve animated gif from API
        var defaultAnimatedSrc = results[i].images.fixed_height.url;


        // Retrieve static gif from API
        var staticSrc = results[i].images.fixed_height_still.url;

        // Create img tag so that the gif image can be displayed
        var showImage = $("<img>");
        //var showImage = $("<div class='col-md-4'>");


        // Creating a variable that specifies the text that will appear in the DOM
        var pOne = $("<h3>").text("Rated: " + rating);

        showImage.attr("src", staticSrc);
        showImage.addClass("feelingGiph");
        showImage.attr("data-state", "still");
        showImage.attr("data-still", staticSrc);
        showImage.attr("data-animate", defaultAnimatedSrc);


        // Appending the  to the DOM
        gifsDiv.append(pOne);

        // Append the gifs to the showImg tag
        gifsDiv.append(showImage);

        // Show newer gifs at the top and older gifs underneath it
        $("#gifs-view").prepend(gifsDiv);

        }

        
    });
}

// Function to display already rendered strings in the feelings array and display labeled buttons in "buttons-view" section of html
function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < feelings.length; i++) {
        var feel = $("<button>");
        feel.addClass("feel-btn");
        feel.attr("id", "show");
        feel.attr("data-name", feelings[i]);
        feel.text(feelings[i]);
        $("#buttons-view").append(feel);
    }
}

// Submit button click event takes the user feeling from form input, trims and pushes it to the feelings array. It then creates and displays a labled button
$("#add-feelings").on("click", function(event) {
     event.preventDefault();
     var emotion = $("#feelings-input").val().trim();
     feelings.push(emotion);

     $("#feelings-input").val("");
     renderButtons();

     renderButtons();
});

$(document).on("click", ".feel-btn", displayBigMood);

renderButtons();

$(document).on("click", ".feelingGiph", pausePlayGifs);

function pausePlayGifs() {
    var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
}


});