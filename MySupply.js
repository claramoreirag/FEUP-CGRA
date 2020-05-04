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
        this.y = 8;
        this.z = 0;
		
	}
	
    display(){

        
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.supply.display();
        this.scene.popMatrix();
       

    }

    update(time){
        if (this.state == this.SupplyStates.FALLING)
        {
            this.y -= 0.5;
            if(this.y <= 0)
            {
                this.y = 0;
                this.land();
            }
        }
    }

    drop(x, y, z){

        this.x = x;
        this.y = y;
        this.z = z;
        this.state = this.SupplyStates.FALLING;
    }

    land(){

        if(this.y == 0)
            this.state = this.SupplyStates.LANDED;
    }


}
