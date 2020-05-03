class Triangle{
    constructor(x,y,){
        var option =  {
            vertices: [{ x: 50, y:50 }, { x: 25, y: 50 }, { x: 40, y: 0 }],
            isStatic:true
        }

        this.body = Bodies.polygon(x,y,3,50,option);
       // console.log(this.body);
        this.sides = 3;
        this.radius = 50;
        World.add(world,this.body)
    }
    show(){
        var vertex= this.body.vertices;
        fill("red");
        triangle(vertex[0].x,vertex[0].y,vertex[1].x,vertex[1].y,vertex[2].x,vertex[2].y);
    }
    
}