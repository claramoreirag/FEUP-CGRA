/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
	constructor(scene) {
        super(scene);
        this.triangle = new MyTriangle(scene);

    }

    display(){

        this.triangle.display();

    }

}    