/**
 * MyObject
 * @constructor
 * @param scene - Reference to MyScene object
 */


class MyFallingSupply extends CGFobject {

    constructor(scene){
        super(scene);
        this.down=new MyDSQuad(scene);
        this.up=new MyDSQuad(scene);
        this.front=new MyDSQuad(scene);
        this.back=new MyDSQuad(scene);
        this.left=new MyDSQuad(scene);
        this.right=new MyDSQuad(scene);
        
        this.initMaterials();
    }

    initMaterials(scene){
       
        this.bottomTex = new CGFappearance(this.scene);
        this.bottomTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomTex.setShininess(10.0);
        this.bottomTex.loadTexture('images/box.png');
        this.bottomTex.setTextureWrap('REPEAT', 'REPEAT');

        this.sidesTex = new CGFappearance(this.scene);
        this.sidesTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.sidesTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sidesTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.sidesTex.setShininess(10.0);
        this.sidesTex.loadTexture('images/box1.png');
        this.sidesTex.setTextureWrap('REPEAT', 'REPEAT');

      
    }

    display(){
        this.scene.pushMatrix();
        this.scene.scale(0.4,0.4,0.4);
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottomTex.apply();
        this.down.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
       
        this.up.display();
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
