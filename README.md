# GifTastic

## If you're struggling to find the perfect reaction gif, then I highly recommend using the Giftastic Generator! Generated buttons at the top are ready to click and will provide a list of 10 gifs that fit your wants. Feel free to add more feelings to the buttons bar and then select them to add even more reactions!


## Check it out!: 
[Open Here](https://fayelinks.github.io/GifTastic/ "Giftastic Generator")

## Code Example:

``` function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < feelings.length; i++) {
        var feel = $("<button>");
        feel.addClass("feel-btn");
        feel.attr("data-name", feelings[i]);
        feel.text(feelings[i]);
        $("#buttons-view").append(feel);
    }
}
```

## Built With:
*  HTML
* Javascript
* JQuery 
* CSS
* Bootstrap
* GIPHY API


## Future Development: 
> Add data persistence to the site so that the reaction buttons can be availble when the user loads it again.


## Authors: 
* Alison Kelly
