const SetItemLS = (id) => {
    let shopCart = {};

    /* get shop cart */
    const storedCart = localStorage.getItem('shopCart')
    if (storedCart) {
        shopCart = JSON.parse(storedCart)
    }
    /*  else{
         shopCart = {};
     } */


    /* add item quantity */
    // const quantity = localStorage.getItem(id); 1/0
    const quantity = shopCart[id];
    if (quantity) {
        // const newQuantty = parseInt(quantity) + 1; 1/1
        // localStorage.setItem(id, newQuantty); 1/2
        const newQuantity = quantity + 1;
        shopCart[id] = newQuantity
    }
    else {
        // localStorage.setItem(id, 1) ; 1/3
        shopCart[id] = 1
    }
    localStorage.setItem('shopCart', JSON.stringify(shopCart))
}

const DeleteItem = (id) => {
    console.log('deleted', id);
    const storedCart = localStorage.getItem('shopCart');
    if (storedCart) {
        const shopCart = JSON.parse(storedCart);
        if (id in shopCart) {
            delete shopCart[id];
            localStorage.setItem('shopCart', JSON.stringify(shopCart))
            console.log('delete', id);
        }
    }
}

// try to call
// const deleteShopCart = () => {
//     localStorage.removeItem('shopCart')
// }

export { SetItemLS, DeleteItem }