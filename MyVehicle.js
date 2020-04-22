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
        this.v = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.ruddvert=new MyRudder(scene);
        this.ruddhoriz=new MyRudder(scene);
        this.triangle = new MyTriangle(scene);
        this.ellipsoid= new MySphere(scene,slices,stacks);
        this.engine=new MyEngine(scene,slices,stacks);
        this.capsule=new MyCapsule(scene,slices,stacks);
        this.initBuffers();
    }
    
    update(){

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
        this.scene.scale(2,2,2);
        this.scene.pushMatrix();
        /*
        this.scene.rotate(this.orientation*Math.PI/180.0, 0, 1, 0);
        this.scene.translate(0,0,-0.5)
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.triangle.display(); 
        this.scene.popMatrix();
        this.scene.pushMatrix();
         */
        this.scene.translate(0,1.2,0);
        this.scene.scale(0.7,0.7,1.3);
        this.ellipsoid.display(); 
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,-0.30);
        this.capsule.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.14,0.42,-0.3);
        this.engine.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.14,0.42,-0.3);
        this.engine.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1.5,-1);
        this.ruddvert.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.8,-1);
        this.scene.rotate(Math.PI, 0,0,1);
        this.ruddvert.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(-0.45,1.1,-1);
        this.scene.rotate(Math.PI/2, 0,0,1);
        this.ruddhoriz.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.scene.translate(0.45,1.1,-1);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.ruddhoriz.display();
        this.scene.popMatrix();
    }

}    