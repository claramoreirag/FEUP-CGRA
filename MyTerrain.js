/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTerrain extends CGFobject{
    constructor(scene){
        super(scene);
        this.plane = new MyPlane(scene, 20);
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrainTex = new CGFtexture(this.scene, "textures/terrain.jpg");
        this.terrainMap = new CGFtexture(this.scene, "textures/heightmap.jpg");

    }

    display(){
        
        this.scene.appearance.setTexture(this.terrainMap);
        this.scene.appearance.setTextureWrap('REPEAT', 'REPEAT');
        this.terrainTex.bind(1);
        this.scene.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
        this.scene.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        this.shader.setUniformValues({terrainMap: 0});
        this.shader.setUniformValues({terrainTex: 1});
    }





}