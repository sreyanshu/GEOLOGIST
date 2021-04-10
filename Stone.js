class Stone {
    constructor(x, y,r) {
      var options = {
        'density':30,
        'friction': 3.0,
        'restitution':0.8
      };
      this.x =x;
      this.y =y;
      this.r=r;
     
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
     
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('black')
      fill('grey')
      ellipseMode(CENTER)
      ellipse(0,0,this.r,this.r);
      pop();
    };
  };