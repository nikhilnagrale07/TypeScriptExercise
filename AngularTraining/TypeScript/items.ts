class Item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;

    constructor(itemId:number,itemName:string,itemPrice:number,category:string)
    {
        this.itemid = itemId;
        this.itemname = itemName;
        this.itemprice = itemPrice;
        this.category = category;
    }
    display=()=>{
        console.log("Item Id = " + this.itemid + " Item Name = "+this.itemname+" Item Price = "+this.itemprice+" Category = "+this.category);
    }
}

let item=new Item(101,'iphone',1200,'mobile');
item.display();

