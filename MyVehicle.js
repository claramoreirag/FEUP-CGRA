/**
 * MyVehicle
 * @method constructor
 * @param  {CGFscenne} scene - Reference to MyScene object
 * @param {integer} orientation
 * @param {integer} v
 * @param {integer} x
 * @param {integer} y
 * @param {integer} z
 */
class MyVehicle extends CGFobject {
	constructor(scene,slices,stacks) {
        super(scene);
        this.orientation = 0;
        this.v = 0.1;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.propAngle=0
       
        this.ruddvert=new MyRudder(scene);
        this.ruddhoriz=new MyRudder(scene);
        this.triangle = new MyTriangle(scene);
        this.ellipsoid= new MySphere(scene,slices,stacks);
        this.engine=new MyEngine(scene,slices,stacks);
        this.capsule=new MyCapsule(scene,slices,stacks);
        this.initBuffers();
    }
    
    update(){
        this.propAngle += 20 * this.v;
        this.z += this.v * Math.cos(this.orientation*Math.PI/180.0);
        this.x += this.v * Math.sin(this.orientation*Math.PI/180.0);

    }

    turn(val){

        this.orientation += val;
      
    }

    accelerate(val){

        this.v += val;
        
    }

    reset(){
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.v = 0;
        this.orientation = 0;
    }


    display(){

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation*Math.PI/180, 0, 1, 0);
        this.scene.scale(4,4,4);
        this.scene.translate(0,0,0);
        this.scene.pushMatrix();
      
        this.scene.translate(0,1,0);
        this.scene.scale(0.5,0.5,1);
        this.ellipsoid.display(); 
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.45,-0.30);
        this.scene.scale(0.9,0.9,0.9);
        this.capsule.display();
        this.scene.popMatrix();


        //engines
        this.scene.pushMatrix();
        this.scene.translate(0.13,0.37,-0.3);
        this.engine.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.13,0.37,-0.3);
        this.engine.display();
        this.scene.popMatrix();



        //rudders

        this.scene.pushMatrix();
        
        this.scene.translate(0,1.3,-0.7);
        if (this.scene.gui.isKeyPressed("KeyD"))
        this.scene.rotate(Math.PI /8, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA"))
        this.scene.rotate(-Math.PI/8, 0, 1, 0);
        this.ruddvert.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.7,-0.7);
        if (this.scene.gui.isKeyPressed("KeyD"))
        this.scene.rotate(Math.PI/8, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA"))
        this.scene.rotate(-Math.PI/8, 0, 1, 0);
        this.scene.rotate(Math.PI, 0,0,1);
        this.ruddvert.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(-0.35,1,-0.7);
        this.scene.rotate(Math.PI/2, 0,0,1);
        this.ruddhoriz.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(0.35,1,-0.7);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.ruddhoriz.display();
        this.scene.popMatrix();
    
    }

}    