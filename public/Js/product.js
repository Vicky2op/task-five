const productsDiv = document.getElementById("productsDiv");

fetch("./shoes.json")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here

    console.log(data.shoes);
    const prodCount = document.getElementById("productCounter");
    var xProds = data.shoes.length + " Products";
    prodCount.textContent = xProds;
    for (i in data.shoes) {
      currentShoe = data.shoes[i];
      imageUrl = currentShoe.imageUrl;
      prodName = currentShoe.prodName;
      prodRating = currentShoe.prodRating;
      if (prodRating == undefined) {
        prodRating = 3;
      } else {
        prodRating = currentShoe.prodRating;
      }
      prodDate = currentShoe.prodDate;
      if(prodDate == undefined) {
        prodDate = "Tommorrow";
      } else{
        prodDate = currentShoe.prodDate;
      }
      price = currentShoe.price;
      let shoe = document.createElement("div");
      shoe.classList.add("divContainingInnerdiv");
      shoe.classList.add("items");
      shoe.innerHTML = `<div class="innerDiv"  >
<div class="shoeDiv">
    <img src= ${imageUrl} alt="shoe image here" class="shoeImg" >
    <div class="nameAndStar">
        <strong > ${prodName} </strong>
        <span class="ms-1">
          <img src=/images/star1.png alt="" />
          <small>${prodRating}</small>
        </span>
      </div>
      <h3 class="fs-4 fw-bolder pt-1">₹ ${price}</h3>
      <h4 class="fs-6 fw-lighter"> Delivery by: ${prodDate}</h4>
</div>
</div>`;
      productsDiv.appendChild(shoe);
    }
  })
  .catch((err) => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
