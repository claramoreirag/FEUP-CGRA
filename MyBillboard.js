/**
* MyBillboard
* @constructor
*/
class MyBillboard extends CGFobject {

    constructor(scene)
    {
        super(scene);
        this.plane = new MyPlane(scene,20);
        this.progressBar = new MyPlane(scene, 20);
        this.beam = new MyBeam(scene);
        
    }
    
    display(){
        
    }



}