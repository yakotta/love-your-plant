<!DOCTYPE html>
<?php
    $cactus = [
        "1" => ["id" => "c1", "image" => "images/1.png"],
        "2" => ["id" => "c2", "image" => "images/2.png"],
        "3" => ["id" => "c3", "image" => "images/3.png"],
        "4" => ["id" => "c4", "image" => "images/4.png"],
        "5" => ["id" => "c5", "image" => "images/5.png"],
        "6" => ["id" => "c6", "image" => "images/6.png"]
    ]
?>

<html>
<head>
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="resources/styles.css">
</head>
<body>
    <div id="start-screen">
        <p>Choose your plant</p>
        <?php
            for($x = 1; $x <= 6; $x++){
                print("<img id=" . $cactus[$x][id] . " src=" . $cactus[$x][image] . ">");
            }
        ?>
    </div>

    <div id="fail-alert" class="hide">
        <p>You killed your plant :(</p>
        <p>You didn't give it enough <span id="error-code"></span></p>
        <p><a href="javascript:window.location.reload()">Click to refresh and try again</a></p>
    </div>

    <div id="game" class="hide">
        <p>Care for your plant!</p>
        <img id="selected-plant" />

        <div id="bars">
            <div class="empty">
                <div id="water-bar" class="water"></div>
            </div>
            <button id="water-button">water <i class="icon ion-waterdrop"></i></button>

            <div class="empty">
                <div id="love-bar" class="love"></div>
            </div>
            <button id="love-button">love <i class="icon ion-ios-heart"></i></button>

            <div class="empty">
                <div id="light-bar" class="light"></div>
            </div>
            <button id="light-button">light <i class="icon ion-ios-lightbulb"></i></button>
        </div> 
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="resources/script.js"></script>
</body>
</html>