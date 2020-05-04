const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};



/**
 * MyObject
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySupply extends CGFobject {

	constructor(scene) {
        super(scene);
        this.supply = new MyUnitCubeQuad(this.scene);
        this.state=SupplyStates.INACTIVE;
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.lastUpdate = 0;
        this.elapsedtime = 0;
	}
	
    display(){

        
        if(this.state == SupplyStates.FALLING || this.state == SupplyStates.LANDED)
        {
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.supply.display();
            this.scene.popMatrix();
        }

       

    }

    update(t){
        if (this.state == SupplyStates.FALLING)
        {
            if(this.lastUpdate == 0)
                this.lastUpdate = t;
            this.elapsedtime = t - this.lastUpdate;
            this.lastUpdate = t;


            this.y -= (10/3)*(this.elapsedtime/500);
            if(this.y <= 0.6)
            {
                this.y = 0.6;
                this.land();
            }
        }
    }

    drop(x, z){

        this.x = x;
        this.z = z;
        this.state = SupplyStates.FALLING;
    }

    land(){

        if(this.y == 0.6)
            this.state = SupplyStates.LANDED;
    }


}