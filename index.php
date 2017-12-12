<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div>Care for your plant!</div>
    <img src="1.png" />

    <div class="water">
        <div class="countdown water empty">
            <span id="water-bar" class="full" style="width: 100%"></span>
        </div>
        <button id="water-button">water <i class="icon ion-waterdrop"></i></button>
    </div>

    <div class="love">
        <div class="countdown love empty">
            <span id="love-bar" class="full" style="width: 100%"></span>
        </div>
        <button id="love-button">love <i class="icon ion-ios-heart"></i></button>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="script.js"></script>
</body>
</html>