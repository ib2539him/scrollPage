
function myFunction() {

let search = document.getElementById("search");

let image = document.querySelectorAll(".image");

for (let i = 0; i < image.length; i++) {
  image[i].style.display = "none";
}

for (let p = 0; p < image.length; p++) {
  let title = image[p].getAttribute("data-title");

  if (search.value == title) {
    image[p].style.display = "block";
  }
  if (search.value == "") {
    image[p].style.display = "block";
  }
}
}


// wood count

function woodCalculator (chair, table, bed){
  let chairWood = chair + 1; //5
  let tableWood = table + 3; //9
  let bedWood = bed + 5; //45

  if (chair < 0) {
    return `Quantity cannot be negative`
  }

  if (table < 0) {
    return `Quantity can not be negative`
  }
  if (bed < 0) {
    return `Quantity can not be negative`
  }

  let totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

console.log(woodCalculator(1, 3, 9))


