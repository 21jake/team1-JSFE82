//LẤy các dữ liệu sản phẩm trên HTML
priceList = document.getElementsByClassName("card-text lead price");
priceSale = document.getElementsByClassName("sale");
productNameList = document.getElementsByClassName("card-title name");
productImgList = document.getElementsByClassName("product-image");
productLinkList = document.getElementsByClassName("product-link");
productLinkList2 = document.getElementsByClassName("product-link2");
mainLength = priceList.length;
productArray = [];

//Cho các dữ liệu sản phẩm HTML vào một array bao gồm các object
for (i = 0; i < mainLength; i++) {
    let productObject = {
        link: productLinkList[i].getAttribute("href"),
        link2: productLinkList2[i].getAttribute("href"),
        source: productImgList[i].getAttribute("src"),
        name: productNameList[i].innerHTML,
        price: priceList[i].innerHTML,
        sale: priceSale[i].innerHTML
    }
    productArray.push(productObject);
}

//Tạo hai mảng mới để chứa dữ liệu tăng dần/giảm dần
let ascArray = []; //Tăng dần
let descArray = []; //Giảm dần


function ascFunction() {
    ascArray = productArray.slice(); //Sao chép dữ liệu từ mảng chính HTML

    ascArray.sort((a, b) => Number(a.price) - Number(b.price)); //Sắp xếp dữ liệu trong mảng theo giá

    //Gán lại dữ liệu trên HTML với các dữ liệu đã được sắp xếp
    for (i = 0; i < mainLength; i++) {
        productLinkList[i].href = ascArray[i].link
        productLinkList2[i].href = ascArray[i].link2
        productImgList[i].src = ascArray[i].source;
        priceList[i].innerHTML = ascArray[i].price;
        priceSale[i].innerHTML = ascArray[i].sale;
        productNameList[i].innerHTML = ascArray[i].name;
    }
}
function descFunction() {
    descArray = productArray.slice(); //Sao chép dữ liệu từ mảng chính HTML

    descArray.sort((a, b) => Number(b.price) - Number(a.price)); //Sắp xếp dữ liệu trong mảng theo giá

    //Gán lại dữ liệu trên HTML với các dữ liệu đã được sắp xếp
    for (i = 0; i < mainLength; i++) {
        productLinkList[i].href = descArray[i].link
        productLinkList2[i].href = descArray[i].link2
        productImgList[i].src = descArray[i].source;
        priceList[i].innerHTML = descArray[i].price;
        priceSale[i].innerHTML = descArray[i].sale;
        productNameList[i].innerHTML = descArray[i].name;
    }
}





// productImgList[0].src = productArray[0].source
// console.log(productArray[0].source)
// console.log(productImgList[0].src)
    // for (i = 0; i < mainLength; i++) {
    //     productArray[i].source = ascArray[i].source;
    //     productArray[i].name = ascArray[i].name;
    //     productArray[i].price = ascArray[i].price;
    // }
    
    // for (i = 0; i < mainLength; i++) {
    //     productImgList[i].src = productArray[i].source;
    //     priceList[i].innerHTML = productArray[i].price;
    //     productNameList[i].innerHTML = productArray[i].name;
    // }



