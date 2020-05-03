class Rectangle{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill(0,0,128);
        rect(position.x,position.y,this.width,this.height);
    }
} 