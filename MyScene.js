/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);
        
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this,16,8,3);
        this.cube=new MyCubeMap(this);
        this.vehicle=new MyVehicle(this,16,8);
        //Objects connected to MyInterface
        this.displayAxis = true;


        this.diamondMaterial = new CGFappearance(this);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setShininess(10.0);
        this.diamondMaterial.loadTexture('images/earth.jpg');
        this.diamondMaterial.setTextureWrap( 'Repeat','Clamp to edge');


        this.currentTexture=0;
        
        this.textureList={'Cubemap':0,'Mountains':1};

        this.speedFactor = 0.5;
        this.scaleFactor = 1;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30,30, 30), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.vehicle.update(t);
    }



    checkKeys(){
        var text = "keys pressed: ";
        var keysPressed =false;

        if(this.gui.isKeyPressed("KeyW") && !this.vehicle.autopilot){
            text+=" W ";
            keysPressed = true;
            this.vehicle.accelerate(this.speedFactor*0.3);
        }

        if(this.gui.isKeyPressed("KeyS")&& !this.vehicle.autopilot){
            text+=" S ";
            keysPressed=true;
            this.vehicle.accelerate(-this.speedFactor*0.3);
        }

        if(this.gui.isKeyPressed("KeyA")&& !this.vehicle.autopilot){
            text+=" A ";
            keysPressed=true;
            this.vehicle.turn(5);
        }

        if(this.gui.isKeyPressed("KeyD")&& !this.vehicle.autopilot){
            text+=" D ";
            keysPressed=true;
            this.vehicle.turn(-5);
        }

        if(this.gui.isKeyPressed("KeyR")){
            text+=" R ";
            keysPressed=true;
            this.vehicle.reset();
        }

        if (this.gui.isKeyPressed("KeyP") && !this.vehicle.autopilot){
            this.vehicle.activateAutopilot();}
      

        if(keysPressed)
            this.vehicle.update();

        if(keysPressed)
            console.log(text);
    }
    updateTexture(){
        
        this.cube.updateTexture();
        
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();


        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates
        //this.incompleteSphere.display();
        //this.cylinder.display();
        this.cube.display();
        this.popMatrix();
        this.diamondMaterial.apply();
        this.vehicle.display();
        // ---- END Primitive drawing section
    }
}