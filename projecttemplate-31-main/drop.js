class Drop{
    constructor(x,y){ 
        var options = {
            friction:0.001,
            restitution:0.1
        }
    
  
    this.rain=Bodies.circle(x,y,5,options)
    this.radius=5
    World.add(world,this.rain)
    }
updatey(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
    display(){
        var pos=this.rain.position
        ellipseMode(CENTER)
        fill("blue")
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}
