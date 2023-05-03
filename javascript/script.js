fetch('https://api.jsonbin.io/v3/b/644653748e4aa6225e8fda93').then((data)=> {
  return data.json();
}).then((completedata)=>{
  console.log(completedata.record[1].name);
  let data1 ="";
  if (Array.isArray(completedata.record)) {
    completedata.record.forEach((values)=>{
      data1 += `<article class="product">
            <div class = "back">
            <img src=${values.img} alt="">
            </div>
            <h5 class="name">${values.name}</h5>
            <h5 class="cost">${values.cost}</h5>
          </article>`;
    });
  }
  document.getElementById("products").innerHTML = data1;
}).catch((error)=>{
  console.log(error);
});
