function Phone(brand, price, color, model) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.model = model;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " for model " + this.price + ".")
}

var samsungGalaxyS6 = new Phone("Samsung", 1700, "grey", "S6");
var iPhone6S = new Phone("Apple", 2150, "gold", "A1633");
var xiaomiRedmi = new Phone("Xiaomi", 500, "black", "Redmi 5A");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
xiaomiRedmi.printInfo();