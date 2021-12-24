class Form 
{
    constructor(){
    this.title = createElement("h3");
    this.greetings =createElement("h2");
    this.comment4 = createElement("H2");
    this.comment2 = createElement("H1");
    this.comment1 = createElement("H4");
    this.comment3 = createElement("H3");
    this.name = createInput("Enter your Name");
    this.house = createInput("Choose your House");
    this.play = createButton("Play");
    this.button1 = createButton("Gryffindor");
    this.button2 = createButton("Ravenclaw");
    this.button3 = createButton("Slytherin");
    this.button4 = createButton("Hufflepuff");
    this.reset = createButton("Reset");
    
    /*this.selection1.option('Gryffindor');
    this.selection2.option('Ravenclaw');
    this.selection3.option('Slytherin');
    this.selection4.option('Hufflepuff');*/
    
    }
    display(){
        
        image(hogwarts,width/100,height/100);
        this.title.position(40,1);
        this.title.style('font-size', '70px');
        this.title.html("The Harry Potter Game");
        this.name.position(200,200);
        this.house.position(200,250);
        this.play.position(1200,600);
        this.play.style('font-size','30px');
        this.play.style("background","pink");
        this.name.style('font-size','30px');
        this.name.style("background","pink");
        this.house.style('font-size','30px');
        this.house.style("background","purple");
        this.button1.position(200,300);
        this.button2.position(200,400);
        this.button3.position(200,500);
        this.button4.position(200,600);
        this.button1.style('font-size','20px');
        this.button2.style('font-size','20px');
        this.button3.style('font-size','20px');
        this.button4.style('font-size','20px');
        this.button1.style("background","red");
        this.button2.style("background","lightblue");
        this.button3.style("background","green");
        this.button4.style("background","yellow");
        //this.reset.style('Arial');
        this.reset.position(1000,600);
        this.reset.style('font-size','20px');
        this.button1.mousePressed(()=>{
            player.character = this.button1.value();
            console.log(player.character);
            this.comment1.position(1000,200);
            this.comment1.html("You have been sorted into Gryffindor!")
            this.comment1.style('font-size','20px');
        })
        this.button2.mousePressed(()=>{
            player.character = this.button2.value();
            
            this.comment2.position(1000,200);
            this.comment2.html("You have been sorted into Ravenclaw!")
            this.comment2.style('font-size','20px');
        })
            
        this.button3.mousePressed(()=>{
            player.character = this.button3.value();
            
            this.comment3.position(1000,200);
            this.comment3.html("You have been sorted into Slytherin!")
            this.comment3.style('font-size','20px');
        })
        this.button4.mousePressed(()=>{
            player.character = this.button4.value();
            
            
            this.comment4.position(1000,200);
            this.comment4.html("You have been sorted into Hufflepuff!")
            this.comment4.style('font-size','20px');
        })
        
        this.play.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.comment1.hide();
            this.comment2.hide();
            this.comment3.hide();
            this.comment4.hide();
            this.house.hide();
            this.name.hide();
            this.play.hide();
            player.name = this.name.value();
            this.greetings.position(400,500);
            this.greetings.html("Hello " + player.name);
            
            this.greetings.style('color', 'white');
            this.greetings.style('font-size', '50px');
            playerCount = playerCount+1;
            player.index = playerCount;
            
            player.updatePlayerCount(playerCount);
            player.updatePlayerInfo();
            console.log("monkey");
        })
        this.reset.mousePressed(() => {
            player.updatePlayerCount(0);
            game.updateGameState(0);
        });
    }
    hide(){
        
            this.title.hide();
            this.greetings.hide();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.comment1.hide();
            this.comment2.hide();
            this.comment3.hide();
            this.comment4.hide();
            this.house.hide();
            this.name.hide();
            this.play.hide();
            this.reset.hide();
    }
    

}