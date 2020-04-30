/**
 * Rudder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyRudder extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initBuffers();
      
    }

	
	initBuffers() {
        this.triangle = new MyTriangle(this.scene);
        this.quad = new MyDSQuad(this.scene);
    }
    
    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.35,0.35,0.35);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.quad.display();


        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();



    }

    
}
