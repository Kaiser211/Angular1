class Bike {
	price: number;
	max_speed: number;
	miles: number;

	constructor( price, max_speed, miles){
		this.price = price;
		this.max_speed = max_speed;
		this.miles = miles;
	
	}
	displayInfo(): any {
		console.log("Show price, maximum speed, and total miles:" + this.price +" "+  this.max_speed + " "+   this.miles)
		return this;
	}

	ride(): any {
		this.miles = this.miles + 10;
		console.log("Riding: " + this.miles);
		return this;
	}
	reverse(): any {
		this.miles -= 5;
		console.log("Reversing:" + this.miles);
		return this;
	}
}


var bike1 = new Bike(100, 100,  2000);
var bike2 = new Bike(200, 150, 3000);
var bike3 = new Bike(300, 178, 4000);


bike1.ride().reverse().displayInfo();
