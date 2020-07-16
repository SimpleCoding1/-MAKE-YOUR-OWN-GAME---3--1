class Form{
    constructor(){
        this.button=createButton('Play')
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.input.hide();
        this.title.hide();
    }
    hide(){
        this.button.hide();
        this.greeting.hide();
       
    }
    display(){
        this.button.position(displayWidth/2 + 30, displayHeight/2); 
        this.title.html("Monopoly");
        this.input.position(800,500);
        this.title.position(displayWidth/2 - 50, 0);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });

            
            
            
          
    }
    
}
