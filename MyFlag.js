
/**
 * MyFlag
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlag extends CGFobject {
	constructor(scene) {
        super(scene);
        this.flag = new MyPlane(this.scene, 40);
        this.rod = new MyDSQuad(this.scene);
        this.initTexture(this.scene);

    }

    initTexture(scene){
        //textures
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.0, 0.0, 0.0, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/flag1.png');
        this.texture.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        
        
        this.rodTex = new CGFappearance(this.scene);
        this.rodTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.rodTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rodTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.rodTex.setShininess(10.0);
        this.rodTex.loadTexture('images/pink.png');
        this.rodTex.setTextureWrap('REPEAT', 'REPEAT');




        //shaders
        this.shaderback = new CGFshader(this.scene.gl, "shaders/flag.vert", "shaders/flag.frag");
        this.shaderback.setUniformsValues({ uSampler1: 1 });
        this.shaderback.setUniformsValues({ speedFactor: 0 });
        this.shaderback.setUniformsValues({ timeFactor: 0 });

        this.shaderfront=new CGFshader(this.scene.gl, "shaders/flagback.vert", "shaders/flag.frag");
        this.shaderfront.setUniformsValues({ uSampler1: 1 });
        this.shaderfront.setUniformsValues({ speed: 0 });
        this.shaderfront.setUniformsValues({ timeFactor: 0 });
    }
    
    update(t, v){
        this.shaderfront.setUniformsValues({ timeFactor: t });
        this.shaderfront.setUniformsValues({ speedFactor: v });

        this.shaderback.setUniformsValues({ timeFactor: t});
        this.shaderback.setUniformsValues({ speedFactor: v });
    }
	
	display(){
        //flag
        this.texture.apply();
        this.scene.setActiveShader(this.shaderfront);
        this.scene.pushMatrix();
        this.scene.translate(0,1,-3);
        this.scene.scale(0.05,0.7,1.5);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.flag.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.setActiveShader(this.shaderback);
        this.scene.pushMatrix();
        this.scene.translate(0,1,-3);
        this.scene.scale(0.05,0.7,1.5);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.flag.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
        
        //rod
        this.scene.pushMatrix();
        this.rodTex.apply();
        this.scene.translate(0,1,-1.5);
        this.scene.scale(1,0.04,1.5);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.rod.display();
        this.scene.popMatrix();

    }
}