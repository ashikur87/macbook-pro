function updatePriceList(type, price) {

    let currentPrice = document.getElementById(type + "-price").innerText;
    document.getElementById("total-price").innerText =
        parseFloat(document.getElementById("total-price").innerText) - parseFloat(currentPrice);
    document.getElementById("best-price").innerText =
        parseFloat(document.getElementById("best-price").innerText) - parseFloat(currentPrice);

    const Price = price;
    // console.log(Price)
    const Cost = document.getElementById(type + "-price");
    console.log(Cost);
    parseFloat(document.getElementById("total-price").innerText) - parseFloat(Cost.innerText);
    Cost.innerText = Price;
    document.getElementById("total-price").addEventListener('click', function () {
        Cost1.innerText = Price1;

    })


    // console.log("add");

    document.getElementById("total-price").innerText =
        parseFloat(document.getElementById("total-price").innerText) + Price;
    document.getElementById("best-price").innerText =
        parseFloat(document.getElementById("best-price").innerText) + Price;


}


document.getElementById("memory2-btn").addEventListener('click', function () {

    updatePriceList('extramemory', 180);
    document.getElementById("memory2-btn").disabled = true;
    document.getElementById("memory1-btn").disabled = false;
});
document.getElementById("memory1-btn").addEventListener('click', function () {
    updatePriceList('extramemory', 0);
    document.getElementById("memory2-btn").disabled = false;
    document.getElementById("memory1-btn").disabled = true;

});
document.getElementById("ssd1-btn").addEventListener('click', function () {
    updatePriceList('extrastorage', 0)
});
document.getElementById("ssd2-btn").addEventListener('click', function () {
    updatePriceList('extrastorage', 100)
});
document.getElementById("ssd3-btn").addEventListener('click', function () {
    updatePriceList('extrastorage', 180)
});
document.getElementById("delivery2-btn").addEventListener('click', function () {

    updatePriceList('extradelivery', 20);
    document.getElementById("delivery2-btn").disabled = true;
    document.getElementById("delivery1-btn").disabled = false;
});
document.getElementById("delivery1-btn").addEventListener('click', function () {
    updatePriceList('extradelivery', 0);
    document.getElementById("delivery2-btn").disabled = false;
    document.getElementById("delivery1-btn").disabled = true;

});

document.getElementById('apply-btn').addEventListener('click', function () {

    let promoCodeValue = document.getElementById('promo-input').value;
    if (promoCodeValue == 'stevekaku') {
        let totalPrice = document.getElementById('total-price').innerText;
        document.getElementById('promo-input').value = '';
        document.getElementById('best-price').innerText = parseFloat(totalPrice) * .8;


    }



});