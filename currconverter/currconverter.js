const dropdownsFrom = document.querySelector(".from select");
const dropdownsTo = document.querySelector(".to select");

for (select of dropdownsFrom) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = countryList[currcode];

    if (select.name == "from" && currcode == "USD") {
      newOption.selected = "selected";
    }
    //  if(select.name==="to" && currcode==="INR"){
    //   newOption.selected= "selected";
    // }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
for (select of dropdownsTo) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = countryList[currcode];

    // if (select.name === "from" && currcode === "USD") {
    //   newOption.selected = "selected";
    // }
    if (select.name == "to" && currcode == "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newSrc = "https://flagsapi.com/${countrycode}/shiny/64.png";
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const btn = document.querySelector("button");
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector("#amount");
  let amtval = amount.value;
  if (amtval == "" || amtval < 1) amount.value = "1";
  console.log(amount.value);
});
