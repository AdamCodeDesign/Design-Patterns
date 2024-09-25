function cpuFactory(brand, name, price){
    let randomId = Math.floor(Math.random() * 999999)

    return{
        brand:brand,
        name:name,
        price:price,
        id: randomId,
        showInfo: function(){
            console.log(this.brand, this.name, this.price, this.id)
        }
    }
}

const cpu1 = cpuFactory('AMD', 'Ryzen 5 5600', 699)
const cpu2 = cpuFactory('Intel', 'i5 11400f', 599)
console.log(cpu1)

cpu1.showInfo()
cpu2.showInfo()