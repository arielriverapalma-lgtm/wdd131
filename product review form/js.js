const products = [
{ id: "p1", name: "Smart Watch"},
{id: "p2", name: "Wireless Stand"},
{id: "p3", name: "Laptop Stand"},
{id: "p4", name: "Wireless Stand"}

    
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);} )                      

});


let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#lastModified").textContent = document.lastModified


