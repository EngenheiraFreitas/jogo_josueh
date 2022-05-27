class Maguinho{
    constructor(x, y, w, h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h =h;
        this.angle=180;
        
        var options={
            restitution: 1.0
        }

        this.image1=loadImage("./imagensDosPersonagens/magoMuitoDoMal.png");
        this.body = Bodies.rectangle(this.x, this.y,this.w,this.h,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image1, pos.x,pos.y, this.w, this.h);
        pop();
    }
}