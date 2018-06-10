function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var win = loss = score = rubyValue =  targetScore = diamondValue = sapphireValue = turquoiseValue = 0;

$("#score").html(score);

function startGame(){
    $('.gem').off('click');

    targetScore = getRandomInt(19, 120);
    $("#target-score").html(targetScore);

    rubyValue = getRandomInt(1, 12);
    $('div[stone="ruby"]').attr("value", rubyValue);

    diamondValue = getRandomInt(1, 12);
    $('div[stone="diamond"]').attr("value", diamondValue);

    sapphireValue = getRandomInt(1, 12);
    $('div[stone="sapphire"]').attr("value", sapphireValue);

  
    turquoiseValue = getRandomInt(1, 12);
    $('div[stone="turquoise"]').attr("value", turquoiseValue);


    $(".gem").on('click', function(){
        score += parseInt($(this).attr("value"));
        $("#score").html(score);
        console.log(targetScore);
        console.log(score);

        if (targetScore === score){
            win++;
            $("#wins").html(win);
            score = 0;
            $("#score").html(score);
            startGame()
        }
        else if( score > targetScore ){
            loss++;
            $("#loss").html(loss);
            score = 0;
            $("#score").html(score);
            startGame();
        }
    });
}
startGame();
