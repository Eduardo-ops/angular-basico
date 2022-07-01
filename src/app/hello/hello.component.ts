import { Component } from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrls: []
})
export class HelloComponent {

    name: String
    customers: Customer[]

    constructor() {
        this.name = 'Eduardo Isidoro Gonçalves'
        let customerI = new Customer('Eduardo', 25)
        let customerII = new Customer('Norberto Nibeiro', 37)
        let customerIII = new Customer('Gabriela Evangelista', 26);
        let customerIV = new Customer('Piuiu abacaxi', 50)
        //customer.name = 'Eduardo'
        //customer.age = 25
        this.customers = [customerI, customerII, customerIII, customerIV]
    }
}

class Customer {

    constructor(public name: string, public age: number) {

    }

    //name!: string
    //age!: number
}