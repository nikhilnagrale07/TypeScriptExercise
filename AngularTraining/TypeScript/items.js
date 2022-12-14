var Item = /** @class */ (function () {
    function Item(itemId, itemName, itemPrice, category) {
        var _this = this;
        this.display = function () {
            console.log("Item Id = " + _this.itemid + " Item Name = " + _this.itemname + " Item Price = " + _this.itemprice + " Category = " + _this.category);
        };
        this.itemid = itemId;
        this.itemname = itemName;
        this.itemprice = itemPrice;
        this.category = category;
    }
    return Item;
}());
var item = new Item(101, 'iphone', 1200, 'mobile');
item.display();
