/**
 * MyObject
 * @constructor
 * @param scene - Reference to MyScene object
 */


class MyLandedSupply extends CGFobject {

    constructor(scene){
        super(scene);
        this.down=new MyDSQuad(scene);
        this.up=new MyDSQuad(scene);
        this.front=new MyDSQuad(scene);
        this.back=new MyDSQuad(scene);
        this.left=new MyDSQuad(scene);
        this.right=new MyDSQuad(scene);
        this.ball= new MySphere(scene,16,8);
        this.initMaterials();
    }

    initMaterials(scene){
       
        this.bottomTex = new CGFappearance(this.scene);
        this.bottomTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomTex.setShininess(10.0);
        this.bottomTex.loadTexture('images/boxpink.png');
        this.bottomTex.setTextureWrap('REPEAT', 'REPEAT');

        this.sidesTex = new CGFappearance(this.scene);
        this.sidesTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.sidesTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sidesTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.sidesTex.setShininess(10.0);
        this.sidesTex.loadTexture('images/boxpink1.png');
        this.sidesTex.setTextureWrap('REPEAT', 'REPEAT');

        this.bodyTex = new CGFappearance(this.scene);
        this.bodyTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bodyTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bodyTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bodyTex.setShininess(10.0);
        this.bodyTex.setEmission(1,1,1,1);
        this.bodyTex.loadTexture('images/flowers.jpg');
        this.bodyTex.setTextureWrap('REPEAT', 'REPEAT');

      
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.4,0.4,0.4);

        //ball
        this.scene.pushMatrix();
        this.scene.scale(0.4,0.4,0.4);
        this.bodyTex.apply();
        this.ball.display();
        this.scene.popMatrix();

        //cube faces
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottomTex.apply();
        this.down.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.sidesTex.apply();
        this.left.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.right.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.back.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.front.display();
        this.scene.popMatrix();

        
        this.scene.popMatrix();
    }

}
