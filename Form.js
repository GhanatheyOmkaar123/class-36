class Form {
    constructor(){

    }
    display(){
        var tittle=createElement('h2');
        tittle.html("CAR RACING GAME");
        tittle.position(130,0);
        var input = createInput("name");
        var button = createButton("play");
        input.position(130,160);
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greting =createElement('h3');
            greting.html("hello "+ name);
            greting.position(130,160);
        })

        
    }
}