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
        this.beam1 = new MyBeam(scene);
        this.beam2 = new MyBeam(scene);
        
    }
    
    //É preciso testar
    display(){

        this.scene.pushMatrix();
        this.scene.scale(2,1,1);
        this.scene.translate(0,1,0);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.5, 1, 0.2);
        this.scene.translate(0,1,0);
        this.progressBar.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.8,0,0);
        this.scene.beam1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.8,0,0);
        this.scene.beam2.display();
        this.scene.popMatrix();


    }



}