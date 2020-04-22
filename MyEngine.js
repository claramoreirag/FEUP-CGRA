/**
* MyEngine
* @constructor
*/
class MyEngine extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.stacks = stacks;
        this.slices = slices;
        this.quad=new MyDSQuad(scene);
        this.sphere = new MySphere(scene, slices, stacks);
        
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.05,0.045,0.13);
        this.sphere.display();
        this.scene.popMatrix();
        
    }
}