/*class Block{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'density':1.0,
        }
        this.color = rgb(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(this.color);
        rect( 0, 0, this.width, this.height);
        pop();
      }
    }*/