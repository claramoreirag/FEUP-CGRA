/**
* MyCapsule
* @constructor
*/
class MyCapsule extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.cylinder = new MyCylinder(this.scene, this.slices,0.6,0.125);
        this.sphere = new MySphere(this.scene, this.slices, this.stacks);
        this.initBuffers();
    }

    display(){

        //main body
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.cylinder.display();
        this.scene.popMatrix();

        //rounded edges
        this.scene.pushMatrix();
        this.scene.scale(0.125,0.125,0.125);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.6);
        this.scene.scale(0.125,0.125,0.125);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.sphere.display();
        this.scene.popMatrix();
    }
}