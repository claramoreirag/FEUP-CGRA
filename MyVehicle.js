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
	constructor(scene, orientation, x, y, z) {
        super(scene);
        this.orientation = orientation;
        this.v = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.triangle = new MyTriangle(scene);

    }

    update(){

        this.z = this.v * Math.cos(this.orientation*Math.PI/180.0);
        this.x = this.v * Math.sin(this.orientation*Math.PI/180.0);

    }

    turn(val){

        orientation = val;
    }

    accelerate(val){

        v = val;

    }

    reset(){
        x = 0;
        y = 0;
        z = 0;
        v = 0;
        orientation = 0;
    }


    display(){

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5)
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

    }

}    