$(document).ready(function(){
    // Locate the main items in the page
    var waterButton = $('#water-button');
    var waterBar = $('#water-bar');
    var loveButton = $('#love-button');
    var loveBar = $('#love-bar');
    var lightButton = $('#light-button');
    var lightBar = $('#light-bar');

    // when the player loses, unhide the fail-alert div and error-code span
    youLose = function(errorType){
        $('#fail-alert').removeClass('hide');
        $('#error-code').html(errorType);
        clearInterval(alertType);
    }
    
    // triggers auto-decay of the water bar
    waterBar.delay(3000).queue(function(){
        waterBar.css({'width': '0%', 'transition': 'width 8s linear'});
    });

    // refills water bar on click, then auto-decays it after set timeout
    waterButton.click(function() {
        waterBar.css({'width': '100%', 'transition': 'width 0.5s linear'});
        setTimeout(function(){
            waterBar.css({'width': '0%', 'transition': 'width 8s linear'})
        }, 3000);
    });

    // checks to see if water bar zeroes out
    var waterAlert = setInterval(function() {
        var waterWidth = parseInt(waterBar.css('width').slice(0, -2));
        if (waterWidth <= 0) {youLose('water', waterAlert)};
    }, 300);

    // triggers auto-decay of the love bar
    loveBar.delay(1000).queue(function(){
        loveBar.css({'width': '0%', 'transition': 'width 4s linear'});
    });

    // refills love bar on click, then auto-decays it after set timeout
    loveButton.click(function(){
        loveBar.css({'width': '100%', 'transition': 'width 0.5s linear'});
        setTimeout(function(){
            loveBar.css({'width': '0%', 'transition': 'width 4s linear'})
        }, 1000);
    });

    // checks to see if love bar zeroes out
    var loveAlert = setInterval(function() {
        var loveWidth = parseInt(loveBar.css('width').slice(0, -2));
        if (loveWidth <= 0) {youLose('love', loveAlert)};
    }, 300);

    // triggers auto-decay of the light bar
    lightBar.delay(1500).queue(function(){
        lightBar.css({'width': '0%', 'transition': 'width 6s linear'});
    });

    // refills light bar on click, then auto-decays it after set timeout
    lightButton.click(function() {
        lightBar.css({'width': '100%', 'transition': 'width 0.5s linear'});
        setTimeout(function(){
            lightBar.css({'width': '0%', 'transition': 'width 6s linear'})
        }, 1500);    
    });

    // checks to see if light bar zeroes out
    var lightAlert = setInterval(function() {
        var lightWidth = parseInt(lightBar.css('width').slice(0, -2));
        if (lightWidth <= 0) {youLose('light', lightAlert)};
    }, 300);
});