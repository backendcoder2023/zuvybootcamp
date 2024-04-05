function addImage() {
    const url = document.getElementById("urlInput").value;
    const type = document.getElementById("typeInput").value;
    const productList = document.getElementById("productList");
    const img = document.createElement("img");
    img.src = url;
    img.alt = type;
    productList.appendChild(img);
}

function filterProducts(type) {
    const productList = document.getElementById("productList");
    const images = productList.getElementsByTagName("img");
    
    for (let i = 0; i < images.length; i++) {
        const imgType = images[i].alt;
        if (type === imgType || type === "All") {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}
