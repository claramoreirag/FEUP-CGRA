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
	constructor(scene) {
        super(scene);
        this.orientation = 0;
        this.v = 1;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.triangle = new MyTriangle(scene);

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

        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation*Math.PI/180.0, 0, 1, 0);

        this.scene.translate(0,0,-0.5)
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

    }

}    