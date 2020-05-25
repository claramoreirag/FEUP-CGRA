/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTerrain extends CGFobject{
    constructor(scene){
        super(scene);
        this.plane = new MyPlane(scene, 20);
        this.initTexture(scene);

    }

    initTexture(scene){

        //textures
        this.terrainVert = new CGFtexture(this.scene, "images/terrain2.jpg");
        this.terrainMap = new CGFtexture(this.scene, "images/heightmap2.jpg");
        
        //shaders
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({ uSampler: 0});
        this.shader.setUniformsValues({ uSampler2: 1});
    }

    display(){
        
        this.scene.setActiveShader(this.shader);
        this.terrainVert.bind(0);
        this.terrainMap.bind(1);
        this.scene.pushMatrix();
        this.scene.scale(50, 8,50);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }





}