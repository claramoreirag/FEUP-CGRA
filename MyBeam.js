/**
* MyBeam
* @constructor
*/

class MyBeam extends CGFobject {
    constructor(scene){
        super(scene);
        this.object = new MyUnitCubeQuad(this.scene);
        
    }

    display(){

        this.scene.scale(0.2,1,0.2);
        this.object.display();
    }

    

}