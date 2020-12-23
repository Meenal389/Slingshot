class Slingshot{
  constructor(b1,pointB){

  var options={
      bodyA:b1,
      pointB:pointB,
      length:40,
      stiffness:0.02
  }

  this.pointB=pointB;
  this.slingshot=constraint.create(options);
  World.add(world,this.slingshot);
  }

  fly(){
    this.slingshot.bodyA=null;
  }

  display(){
    if(this.slingshot.bodyA){
      var posA=this.slingshot.bodyA.position;
      var posB=this.pointB;
      strokeWeight(4)
      line(posA.x,posA.y,posB.x,posB.y);
    }
  }
}