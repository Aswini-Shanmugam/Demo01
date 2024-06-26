class uber{
    constructor(pricePerKilometer, noOfKilometer){
        this.pricePerKilomerter = pricePerKilometer;
        this.noOfKilometer = noOfKilometer; 
    }
    getriderPrice(){
        return this.pricePerKilometer * noOfKilometer
    }
}

const UberRide = new Uber(10, 5 )
console.log(UberRide.getriderPrice()) 