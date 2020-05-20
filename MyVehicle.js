/**
 * MyVehicle
 * @method constructor
 * @param  {CGFscenne} scene - Reference to MyScene object
 * @param {integer} orientation
 * @param {integer} v
 * @param {integer} x
 * @param {integer} y
 * @param {integer} z
 */
class MyVehicle extends CGFobject {
	constructor(scene,slices,stacks) {
        super(scene);
        this.orientation = 0;
        this.v = 0.1;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.propAngle=0

        //autopilot atributes
        this.autopilot=false;
        this.elapsedtime=0;
        this.lastUpdate = 0;
        this.time=0;
        this.xcenter=0;
        this.zcenter=0;

        this.ruddvert=new MyRudder(scene);
        this.ruddhoriz=new MyRudder(scene);
        this.triangle = new MyTriangle(scene);
        this.ellipsoid= new MySphere(scene,slices,stacks);
        this.engine=new MyEngine(scene,slices,stacks);
        this.capsule=new MyCapsule(scene,slices,stacks);
        this.flag=new MyFlag(scene);

        this.initBuffers();
        this.initMaterials();


    }

    initMaterials(scene){
       
        this.bodyTex = new CGFappearance(this.scene);
        this.bodyTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bodyTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bodyTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bodyTex.setShininess(10.0);
        this.bodyTex.loadTexture('images/flowers.jpg');
        this.bodyTex.setTextureWrap('REPEAT', 'REPEAT');

        this.blueTex = new CGFappearance(this.scene);
        this.blueTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.blueTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.blueTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.blueTex.setShininess(10.0);
        this.blueTex.loadTexture('images/blue.png');
        this.blueTex.setTextureWrap('REPEAT', 'REPEAT');

        this.coralTex = new CGFappearance(this.scene);
        this.coralTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.coralTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.coralTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.coralTex.setShininess(10.0);
        this.coralTex.loadTexture('images/coral.png');
        this.coralTex.setTextureWrap('REPEAT', 'REPEAT');

        this.pinkTex = new CGFappearance(this.scene);
        this.pinkTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.pinkTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.pinkTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.pinkTex.setShininess(10.0);
        this.pinkTex.loadTexture('images/pink.png');
        this.pinkTex.setTextureWrap('REPEAT', 'REPEAT'); 
    }

    
    update(t){
      

       
        this.elapsedtime = t - this.lastUpdate;
        this.lastUpdate = t;

        if (this.autopilot) {
            this.x = -5 * Math.cos(this.orientation * Math.PI / 180) + this.xcenter;
            this.z = 5 * Math.sin(this.orientation * Math.PI / 180) + this.zcenter;
            this.turn(360 * this.elapsedtime / 5000);
            this.propAngle=20*this.v;
        } else {      
            this.propAngle += 20 * this.v;
            this.z += this.v * Math.cos(this.orientation*Math.PI/180.0);
            this.x += this.v * Math.sin(this.orientation*Math.PI/180.0);
        }

        this.flag.update(t / 1000 % 1000, this.v);
      
    }

    turn(val){

        this.orientation += val;
      
    }

    accelerate(val){
        
        this.v += val;
        if(this.v<0)this.v=0;
    }

    reset(){
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.v = 0;
        this.orientation = 0;
        this.autopilot=false;
        this.lastUpdate=0;
    }


    activateAutopilot(){
        this.autopilot=true;
        var angle = this.orientation * Math.PI / 180 + Math.PI/2;
        this.zcenter = this.z + 5*Math.cos(angle);
        this.xcenter = this.x + 5*Math.sin(angle);

    }



    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation*Math.PI/180, 0, 1, 0);
        this.scene.translate(0,9,0);
        this.scene.pushMatrix();
      
        this.scene.translate(0,1,0);
        this.scene.scale(0.5,0.5,1);
        this.bodyTex.apply();
        this.ellipsoid.display(); 
        this.scene.popMatrix();

        //capsule
        this.pinkTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.45,-0.30);
        this.scene.scale(0.9,0.9,0.9);
        this.capsule.display();
        this.scene.popMatrix();


        //engines
        this.coralTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.13,0.37,-0.3);
        this.engine.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.13,0.37,-0.3);
        this.engine.display();
        this.scene.popMatrix();



        //rudders
         this.scene.pushMatrix();
        this.blueTex.apply();
        this.scene.translate(0,1.3,-0.7);
        if (this.scene.gui.isKeyPressed("KeyD"))
        this.scene.rotate(Math.PI /8, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA")||this.autopilot)
        this.scene.rotate(-Math.PI/8, 0, 1, 0);
        this.ruddvert.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.7,-0.7);
        if (this.scene.gui.isKeyPressed("KeyD"))
        this.scene.rotate(Math.PI/8, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA") || this.autopilot)
        this.scene.rotate(-Math.PI/8, 0, 1, 0);
        this.scene.rotate(Math.PI, 0,0,1);
        this.ruddvert.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.35,1,-0.7);
        this.scene.rotate(Math.PI/2, 0,0,1);
        this.ruddhoriz.display();
        this.scene.popMatrix();
 
        this.scene.pushMatrix();
        this.scene.translate(0.35,1,-0.7);
        this.scene.rotate(-Math.PI/2, 0,0,1);
        this.ruddhoriz.display();
        this.scene.popMatrix();
    

        //flag
        this.flag.display();
     
    
        this.scene.popMatrix();
        

    }

}    