/**
* MyBeam
* @constructor
*/

class MyBeam extends CGFobject {
    constructor(scene){
        super(scene);
        this.object = new MyDSQuad(this.scene);
        
    }

    display(){

        this.scene.scale(0.1,1,0.2);
        this.object.display();
    }

    

}