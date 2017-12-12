$(document).ready(function(){
    // Locate the main items in the page
    var waterButton = $('#water-button');
    var waterBar = $('#water-bar');
    var loveButton = $('#love-button');
    var loveBar = $('#love-bar');

    // https://stackoverflow.com/questions/33096675/fill-progress-bar-in-x-seconds

    // trigger auto-decay of the love need
    loveBar.delay(2000).queue(function(){
        loveBar.css({'width': '0%', 'transition': 'width 5s linear'});
    });

    // refill love need on click, then auto-decay it after set timeout
    loveButton.click(function(){
        loveBar.css({'width': '100%', 'transition': 'width 0.5s linear'});
        setTimeout(function(){loveBar.css({'width': '0%', 'transition': 'width 5s linear'})}, 2000);
    });

    // trigger auto-decay of the water need
    waterBar.delay(4000).queue(function(){
        waterBar.css({'width': '0%', 'transition': 'width 10s linear'});
    });

    // refill water need on click, then auto-decay it after set timeout
    waterButton.click(function() {
        waterBar.css({'width': '100%', 'transition': 'width 0.5s linear'});
        setTimeout(function(){waterBar.css({'width': '0%', 'transition': 'width 10s linear'})}, 4000);
    });
});