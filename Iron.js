class Iron {
    constructor(x, y,width,height) {
      var options = {
        'density':30,
        'friction': 3.0,
        'restitution':0.8
      };
      this.x =x;
      this.y =y;
      this.width=width;
      this.height=height;

      this.body = Bodies.rectangle(x, y, 50, 50, options);
     
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('black')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  