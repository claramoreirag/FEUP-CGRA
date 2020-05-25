/**
 * 
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
        this.quad=new MyQuad(this.scene);
        this.initMaterials(scene);
    }
    initMaterials(scene){
        //left material
        this.l = new CGFappearance(this.scene);
        this.l.setAmbient(0.9, 0.9, 0.9, 1);
        this.l.setDiffuse(0.0, 0.0, 0.0, 1);
        this.l.setSpecular(0.0, 0.0, 0.0, 1);
        this.l.setShininess(10.0);
        this.l.setEmission(0.5,0.5,0.5,1);
        this.l.loadTexture('images/split_cubemap/left.png');
        this.l.setTextureWrap('REPEAT', 'REPEAT');

        //right material
        this.r = new CGFappearance(this.scene);
        this.r.setAmbient(0.9, 0.9, 0.9, 1);
        this.r.setDiffuse(0.0, 0.0, 0.0, 1);
        this.r.setSpecular(0.0, 0.0, 0.0, 1);
        this.r.setShininess(10.0);
        this.r.setEmission(0.5,0.5,0.5,1);
        this.r.loadTexture('images/split_cubemap/right.png');
        this.r.setTextureWrap('REPEAT', 'REPEAT');
        
        //front material
        this.fr = new CGFappearance(this.scene);
        this.fr.setAmbient(0.9, 0.9, 0.9, 1);
        this.fr.setDiffuse(0.0, 0.0, 0.0, 1);
        this.fr.setSpecular(0.0, 0.0, 0.0, 1);
        this.fr.setShininess(10.0);
        this.fr.setEmission(0.5,0.5,0.5,1);
        this.fr.loadTexture('images/split_cubemap/front.png');
        this.fr.setTextureWrap('REPEAT', 'REPEAT');
 
        //back material
        this.b = new CGFappearance(this.scene);
        this.b.setAmbient(0.9, 0.9, 0.9, 1);
        this.b.setDiffuse(0.0, 0.0, 0.0, 1);
        this.b.setSpecular(0.0, 0.0, 0.0, 1);
        this.b.setShininess(10.0);
        this.b.setEmission(0.5,0.5,0.5,1);
        this.b.loadTexture('images/split_cubemap/back.png');
        this.b.setTextureWrap('REPEAT', 'REPEAT');

        //bottom material
        this.bottom = new CGFappearance(this.scene);
        this.bottom.setAmbient(0.9, 0.9, 0.9, 1);
        this.bottom.setDiffuse(0.0, 0.0, 0.0, 1);
        this.bottom.setSpecular(0.0, 0.0, 0.0, 1);
        this.bottom.setShininess(10.0);
        this.bottom.setEmission(0.5,0.5,0.5,1);
        this.bottom.loadTexture('images/split_cubemap/bottom.png');
        this.bottom.setTextureWrap('REPEAT', 'REPEAT');


        //top material
        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(0.9, 0.9, 0.9, 1);
        this.top.setDiffuse(0.0, 0.0, 0.0, 1);
        this.top.setSpecular(0.0, 0.0, 0.0, 1);
        this.top.setShininess(10.0);
        this.top.setEmission(0.5,0.5,0.5,1);
        this.top.loadTexture('images/split_cubemap/top.png');
        this.top.setTextureWrap('REPEAT', 'REPEAT');

        
    }
	display() {
        this.scene.pushMatrix();
        this.scene.scale(50,50,50);

        //bottom
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottom.apply();
        this.quad.display();
        this.scene.popMatrix();

        //top
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.top.apply();
        this.quad.display();
        this.scene.popMatrix();

        //left
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.l.apply();  
        this.quad.display();
        this.scene.popMatrix();
        
        //right
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.r.apply();
        this.quad.display();
        this.scene.popMatrix();

        //back
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.b.apply();
        this.quad.display();
        this.scene.popMatrix();
        
        //front
        this.scene.pushMatrix();
        this.fr.apply();
        this.scene.translate(0,0,0.5);
        this.quad.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();
    }
    enableNormalViz(){
        this.quad.enableNormalViz()
    }
    disableNormalViz(){
        this.quad.disableNormalViz();
    }
    updateTexture(){
        if(this.scene.currentTexture==0){
            this.fr.loadTexture('images/split_cubemap/front.png');
            this.l.loadTexture('images/split_cubemap/left.png');
            this.r.loadTexture('images/split_cubemap/right.png');
            this.b.loadTexture('images/split_cubemap/back.png');
            this.bottom.loadTexture('images/split_cubemap/bottom.png');
            this.top.loadTexture('images/split_cubemap/top.png');
        }
        else if(this.scene.currentTexture==1){
            this.r.loadTexture('images/split_mountains/right.jpg');
            this.fr.loadTexture('images/split_mountains/front.jpg');
            this.l.loadTexture('images/split_mountains/left.jpg');
            this.bottom.loadTexture('images/split_mountains/bottom.jpg');
            this.b.loadTexture('images/split_mountains/back.jpg');
            this.top.loadTexture('images/split_mountains/top.jpg');
        }
       
    }
}