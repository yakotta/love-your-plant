$(document).ready(function(){
    // Locates the page elements and sets the gameplay parameters
    var values = {
        water: {
            string: 'water',
            bar: $('#water-bar'),
            button: $('#water-button'),
            delay: 2500,
            css: {'width': '0%', 'transition': 'width 8s linear'}
        },
        love: {
            string: 'love',
            bar: $('#love-bar'),
            button: $('#love-button'),
            delay: 1000,
            css: {'width': '0%', 'transition': 'width 4s linear'}
        },
        light: {
            string: 'light',
            bar: $('#light-bar'),
            button: $('#light-button'),
            delay: 1500,
            css: {'width': '0%', 'transition': 'width 6s linear'}
        }
    }

    // Establishes the game mechanics
    game = function(value){
        // triggers auto-decay of a bar
        value.bar.delay(value.delay).queue(function(){value.bar.css(value.css)});

        // refills a bar on button click, then re-decays it after delay time
        value.button.click(function(){
            value.bar.css({'width': '100%', 'transition': 'width 0.5s linear'});
            setTimeout(function(){value.bar.css(value.css)}, value.delay);
        });

        // checks for empty bars
        var failAlert = setInterval(function(){
            if (parseInt(value.bar.css('width').slice(0, -2)) <= 0){
                $('#fail-alert').removeClass('hide');
                $('#error-code').html(value.string);
                clearInterval(failAlert);
            };
        }, 300);
    }
    
    game(values.water);
    game(values.love);
    game(values.light);
});