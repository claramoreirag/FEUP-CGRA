class MyCylinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     * @param  {integer} height - number of stacks along Y axis, from the center to the poles (half of sphere)
       @param  {integer} radius
     */
    constructor(scene, slices, height,radius) {
      super(scene);
      this.height=height;
      this.radius=radius;
      this.slices=slices;
      this.initBuffers();
    }
    
    /**
     * @method initBuffers
     * Initializes the cylinder buffers
     * TODO: DEFINE TEXTURE COORDINATES
     */
    initBuffers() {
      this.vertices = [];
      this.indices = [];
      this.normals = [];
      this.texCoords = [];
  
      var phi = 0;
      var phiInc =2* Math.PI / this.slices;
      
    
  
      // build an all-around stack at a time, starting on "north pole" and proceeding "south"
      for (let i= 0; i <= this.slices; i++) {
        var zcord = Math.sin(phi)*this.radius;
        var xcord= Math.cos(phi)*this.radius;
       
        this.vertices.push(xcord, 0, zcord);
        this.vertices.push(xcord, this.height, zcord);

        this.normals.push(xcord, 0, zcord);
        this.normals.push(xcord, 0, zcord);

        if(i<this.slices){
        this.indices.push(i*2+3, i*2+2, i*2);
        this.indices.push(i*2+1, i*2+3, i*2);
        }

        this.texCoords.push(phiInc*i, 1);
        this.texCoords.push(phiInc*i, 0);

  
          //--- Texture Coordinates
          // To be done... 
          // May need some additional code also in the beginning of the function.
          
        
        phi += phiInc;
      }
  
  
      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();
    }
    
  }