"use strict";
let cars = [
  { manufacturer: "fiat", color: "green", year: 2002 },
  { manufacturer: "bmw", color: "white", year: 2022 },
  { manufacturer: "tesla", color: "black", year: 2021 },
  { manufacturer: "mazda", color: "grey", year: 1998 },
  { manufacturer: "pegot", color: "teal", year: 2010 },
  { manufacturer: "citroen", color: "silver", year: 2015 },
  { manufacturer: "ford", color: "beige", year: 2017 },
];
let filterDisplay = document.getElementById("filter-display");
const add = () => {
  let carManufacturer = document.getElementById("car-manufacturer");
  let carColor = document.getElementById("car-color");
  let carYear = document.getElementById("car-year");

  let car = {
    manufacturer: carManufacturer.value,
    color: carColor.value,
    year: parseInt(carYear.value),
  };
  cars.push(car);

  carManufacturer.value = "";
  carColor.value = "";
  carYear.value = "";
};

let limit = (element) => {
  let max_chars = 4;
  if (element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
  }
};

let display = () => {
  let minYear = document.getElementById("filter-by-year");
  let carFilter = cars.filter((car) => car.year >= minYear.value);

  carFilter.map((item) => {
    filterDisplay.innerHTML += `<div class = car-box><div class="car-manufacturer">Manufacturer:${item.manufacturer}</div>
        <div class="car-color">Color:${item.color}</div>
        <div class="car-year">Year:${item.year}</div></div>`;
  });
  minYear.value = "";
};
