/**
* MyBillboard
* @constructor
*/
class MyBillboard extends CGFobject {

    constructor(scene)
    {
        super(scene);
        this.plane = new MyPlane(scene,100);
        this.progressBar = new MyPlane(scene, 20);
        this.beam1 = new MyBeam(scene);
        this.beam2 = new MyBeam(scene);
        this.initTexture(this.scene);
        
        this.supplies=0;
       

    }
    initTexture(scene){

        this.black = new CGFappearance(this.scene);
        this.black.setAmbient(0.0, 0.0, 0.0, 1);
        this.black.setDiffuse(0.0, 0.0, 0.0, 1);
        this.black.setSpecular(0.0, 0.0, 0.0, 1);
        this.black.setShininess(10.0);

        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.0, 0.0, 0.0, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/supplies.png');
        this.texture.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.progressShader = new CGFshader(scene.gl,"shaders/progressbar.vert","shaders/progressbar.frag");
    }

    
    update(supplies){
        this.supplies=supplies;
        this.progressShader.setUniformsValues({ supp: this.supplies});
    }

    
    reset(){
        this.supplies=0;
        this.progressShader.setUniformsValues({ supp: 0 });
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(10,3,10);
        this.scene.rotate(Math.PI/4, 0,1,0);


        //billboard
        this.scene.pushMatrix();
        this.texture.apply();
        this.scene.translate(0,1,0);
        this.scene.scale(2,1,1);
        this.plane.display();
        this.scene.popMatrix();

        //progress bar
        this.scene.pushMatrix();
        this.scene.setActiveShader(this.progressShader);
        this.scene.translate(0,0.9,0.01);
        this.scene.scale(1, 0.5, 0.2);
        this.progressBar.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();

        //beams
        this.scene.pushMatrix();
        this.black.apply();
        this.scene.translate(-0.8,0,0);
        this.beam1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.8,0,0);
        this.beam1.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }



}