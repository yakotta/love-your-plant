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

    // Uses EasyTimer.js to create a timer
    var timer = new Timer();
    timer.start({precision: 'secondTenths'});
    timer.addEventListener('secondTenthsUpdated', function (e) {
        var currentTime = timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']);
        $('#timer .values').html(currentTime);
    });

    // Establishes the game mechanics
    game = function(value){
        // triggers auto-decay of a bar
        value.bar.delay(value.delay).queue(function(){value.bar.css(value.css)});

        // refills a bar on button click, then re-decays it after delay time
        value.button.click(function(){
            // kills plant if it's overwatered
            if($(this).attr("id") == "water-button"){
                var emptyWidth = 160;
                var waterLevel = parseInt(value.bar.css('width').slice(0, -2))
                if(waterLevel / emptyWidth >= .5){
                    var message = "You gave it too much ";
                    killPlant(value, message)
                    return;
                }
            } 
            
            // refills a bar on button click, then re-decays it after a delay time
            value.bar.css({'width': '100%', 'transition': 'width 0.5s linear'});
            setTimeout(function(){value.bar.css(value.css)}, value.delay);
        });

        // kils the plant
        killPlant = function(value, message){
            // displays failure message and stops bars from continuing to decay
            $('#fail-alert').removeClass('hide');
            $('#error-code').html(message + value.string);
            stopDecay(values.water);
            stopDecay(values.love);
            stopDecay(values.light);

            // disables the need replenishment buttons while plant is dead
            $('.need').attr('disabled', true);

            // stops timer
            timer.stop();
        }

        // stops bars from decaying upon plant death
        stopDecay = function(value){
            var computedWidth = value.bar.css('width');
            value.bar.css({'transition': 'none'});
            value.bar.css('width', computedWidth);
        }

        // kills plant when a bar is empty
        var failAlert = setInterval(function(){
            if (parseInt(value.bar.css('width').slice(0, -2)) <= 0){
                var message = "You didn't give it enough ";
                killPlant(value, message);
                clearInterval(failAlert);
            };
        }, 300);
    }

    // Refills bars to 100% and sets timer to 0
    gameReset = function(value){
        value.bar.css({'width': '100%', 'transition': 'width 0.5s linear'});
        setTimeout(function(){value.bar.css(value.css)}, value.delay);
        setTimeout(function(){timer.reset()}, 1000);
    }

    // Resets the bars, buttons, and timer for a new round
    $('#reset').click(function(){
        $('#fail-alert').addClass('hide');
        $('.need').attr('disabled', false)
        gameReset(values.water);
        gameReset(values.love);
        gameReset(values.light);

        // Re-starts the game
        game(values.water);
        game(values.love);
        game(values.light);
    })

    // Allows the player to select their cactus then starts the game
    $('#start-screen img').click(function(){
        var selection = $(this).attr("src");
        $('#start-screen').addClass("hide");
        $('#game').removeClass("hide");
        $('#selected-plant').attr("src", selection)

        // Starts the game
        game(values.water);
        game(values.love);
        game(values.light);
        timer.reset();
    });
});