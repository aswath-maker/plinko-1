class particle {
    constructor(x,y,r){

        var options={
            isStatic : false,      
            restitution : 0.3,
            density : 1,
            friction : 0.5

        }

        this.body = Bodies.circle(x,y,r,options);
       this.r = r;
        World.add(world, this.body);
        this.color=color(random(0,255),random(0,255),random(0,255));    
    }

        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0,0,this.r,this.r);
            pop();

        }
};