<!DOCTYPE html>
<?php
    $cactus = [
        "1" => ["image" => "images/1.png"],
        "2" => ["image" => "images/2.png"],
        "3" => ["image" => "images/3.png"],
        "4" => ["image" => "images/4.png"],
        "5" => ["image" => "images/5.png"],
        "6" => ["image" => "images/6.png"]
    ]
?>

<html>
<head>
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="resources/styles.css">
</head>
<body>
    <div id="start-screen">
        <h1>Choose your plant</h1>
        <?php
            for($x = 1; $x <= 6; $x++){
                print("<img src=" . $cactus[$x][image] . ">");
            }
        ?>
    </div>

    <div id="fail-alert" class="hide">
        <p>You killed your plant :(</p>
        <p id="error-code"></p>
        <p><button id="reset">Try again</button></p>
    </div>

    <div id="game" class="hide">
        <h1>Care for your plant!</h1>
        <img id="selected-plant" />

        <div id="bars">
            <div class="empty">
                <div id="water-bar" class="water"></div>
            </div>
            <button id="water-button" class="need">water <i class="icon ion-waterdrop"></i></button>

            <div class="empty">
                <div id="love-bar" class="love"></div>
            </div>
            <button id="love-button" class="need">love <i class="icon ion-ios-heart"></i></button>

            <div class="empty">
                <div id="light-bar" class="light"></div>
            </div>
            <button id="light-button" class="need">light <i class="icon ion-ios-lightbulb"></i></button>
        </div> 

        <div id="timer">
            <div class="values">00:00:0</div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="resources/easytimer.min.js"></script>   
    <script src="resources/script.js"></script>
</body>
</html>