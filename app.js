var cars = {
    honda: {
        civic: {
            model: "Honda Civic Reborn",
            year: 2019,
            price: "240,000 Pkr",
            colors: ["White", "Black", "Silver"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000,
            image: "Car Images/civic reborn.jpeg"
        },
        accord: {
            model: "Honda Accord Hybrid",
            year: 2020,
            price: "350,000 Pkr",
            colors: ["Gray", "Blue", "Red"],
            transmission: "CVT",
            engineType: "Hybrid",
            mileage: 10000,
            image: "Car Images/civic reborn.jpeg"
        }
    },
    toyota: {
        corolla: {
            model: "Toyota Corolla Altis",
            year: 2018,
            price: "200,000 Pkr",
            colors: ["White", "Silver", "Gray"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000,
            image: "Car Images/civic reborn.jpeg"
        },
        camry: {
            model: "Toyota Camry XSE",
            year: 2021,
            price: "400,000 Pkr",
            colors: ["Black", "Red", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000,
            image: "Car Images/civic reborn.jpeg"
        }
    },
    suzuki: {
        swift: {
            model: "Suzuki Swift GLX",
            year: 2017,
            price: "150,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Manual",
            engineType: "Gasoline",
            mileage: 2000,
            image: "Car Images/civic reborn.jpeg"
        },
        vitara: {
            model: "Suzuki Vitara GLX",
            year: 2019,
            price: "250,000 Pkr",
            colors: ["Gray", "Blue", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000,
            image: "Car Images/civic reborn.jpeg"
        }
    },
    nissan: {
        altima: {
            model: "Nissan Altima SV",
            year: 2020,
            price: "300,000 Pkr",
            colors: ["White", "Black", "Gray"],
            transmission: "CVT",
            engineType: "Gasoline",
            mileage: 6000
        },
        sentra: {
            model: "Nissan Sentra SR",
            year: 2018,
            price: "220,000 Pkr",
            colors: ["Red", "White", "Silver"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        }
    },
    hyundai: {
        elantra: {
            model: "Hyundai Elantra GLS",
            year: 2019,
            price: "280,000 Pkr",
            colors: ["White", "Silver", "Gray"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        },
        sonata: {
            model: "Hyundai Sonata Limited",
            year: 2021,
            price: "380,000 Pkr",
            colors: ["Black", "White", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    kia: {
        rio: {
            model: "Kia Rio EX",
            year: 2018,
            price: "180,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 2000
        },
        optima: {
            model: "Kia Optima SX",
            year: 2020,
            price: "320,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        }
    },
    mazda: {
        mazda3: {
            model: "Mazda3 Sport",
            year: 2019,
            price: "260,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        },
        cx5: {
            model: "Mazda CX-5 Grand Touring",
            year: 2021,
            price: "420,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    ford: {
        focus: {
            model: "Ford Focus Titanium",
            year: 2018,
            price: "200,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 2000
        },
        fusion: {
            model: "Ford Fusion SE",
            year: 2020,
            price: "300,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        }
    },
    volkswagen: {
        golf: {
            model: "Volkswagen Golf TSI",
            year: 2019,
            price: "240,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        },
        jetta: {
            model: "Volkswagen Jetta GLI",
            year: 2021,
            price: "320,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        }
    },
    audi: {
        a3: {
            model: "Audi A3 Premium",
            year: 2020,
            price: "380,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        },
        a4: {
            model: "Audi A4 Quattro",
            year: 2021,
            price: "480,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    bmw: {
        series: {
            model: "BMW 330i",
            year: 2020,
            price: "500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        x1: {
            model: "BMW X1 xDrive28i",
            year: 2021,
            price: "580,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    mercedes: {
        cclass: {
            model: "Mercedes-Benz C 300",
            year: 2020,
            price: "550,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        eclass: {
            model: "Mercedes-Benz E 350",
            year: 2021,
            price: "650,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    landrover: {
        rangerover: {
            model: "Land Rover Range Rover Velar",
            year: 2020,
            price: "800,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        discovery: {
            model: "Land Rover Discovery Sport",
            year: 2021,
            price: "900,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    porsche: {
        cayman: {
            model: "Porsche 718 Cayman",
            year: 2020,
            price: "1,000,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Manual",
            engineType: "Gasoline",
            mileage: 5000
        },
        macan: {
            model: "Porsche Macan S",
            year: 2021,
            price: "1,200,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    ferrari: {
        488: {
            model: "Ferrari 488 GTB",
            year: 2020,
            price: "2,000,000 Pkr",
            colors: ["Red", "Black", "Silver"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        f8: {
            model: "Ferrari F8 Tributo",
            year: 2021,
            price: "2,500,000 Pkr",
            colors: ["Red", "Black", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    lamborghini: {
        huracan: {
            model: "Lamborghini Huracan Evo",
            year: 2020,
            price: "3,000,000 Pkr",
            colors: ["Orange", "Black", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        urus: {
            model: "Lamborghini Urus",
            year: 2021,
            price: "3,500,000 Pkr",
            colors: ["Gray", "Black", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    maserati: {
        ghibli: {
            model: "Maserati Ghibli S",
            year: 2020,
            price: "1,500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        levante: {
            model: "Maserati Levante S",
            year: 2021,
            price: "1,800,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    bentley: {
        continental: {
            model: "Bentley Continental GT",
            year: 2020,
            price: "2,200,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        flyingSpur: {
            model: "Bentley Flying Spur",
            year: 2021,
            price: "2,800,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    rollsroyce: {
        phantom: {
            model: "Rolls-Royce Phantom",
            year: 2020,
            price: "3,200,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        ghost: {
            model: "Rolls-Royce Ghost",
            year: 2021,
            price: "3,800,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    landcruiser: {
        prado: {
            model: "Toyota Land Cruiser Prado",
            year: 2020,
            price: "2,500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        lc200: {
            model: "Toyota Land Cruiser LC200",
            year: 2021,
            price: "3,000,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    jaguar: {
        ftype: {
            model: "Jaguar F-Type",
            year: 2020,
            price: "1,800,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        xe: {
            model: "Jaguar XE",
            year: 2021,
            price: "2,200,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    }
}

const companyName = document.getElementById("companyName");
const brandName = document.getElementById("brandName");
const availableCars = document.getElementById("availableCars");


companyName.innerHTML = `<option>Select Company</option>`
brandName.innerHTML = `<option>Select Brand</option>`


for (const key in cars) {
    // console.log(key);
    companyName.innerHTML += `<option value = "${key}"> ${key.toLocaleUpperCase()} </option>`
}

for (const key in cars) {
    for (const key1 in cars[key]) {
        // console.log(cars[key][key1]);

        availableCars.innerHTML += `<div class="col m-2">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${cars[key][key1].model || undefined} </h5>
      <img src="${cars[key][key1].image}" class="card-img-top" alt="...">
      <h6 class="card-subtitle mb-2 text-body-secondary">${cars[key][key1].year || undefined}</h6>
      <h6 class="card-title">Rs ${cars[key][key1].price || undefined}</h6>
    </div>
  </div>
</div> `
    }
}


function onCompanyChange() {
    brandName.innerHTML = "";
    for (const key in cars[companyName.value]) {
        // console.log(key);
        brandName.innerHTML += `
    <option> ${key.toLocaleUpperCase()}</option>`
    }
}

function searchCar() {
    const companyNameValue = companyName.value.toLocaleLowerCase();
    const brandNameValue = brandName.value.toLocaleLowerCase();
    const carInfo = cars[companyNameValue][brandNameValue];
    availableCars.innerHTML = `<div class="col m-2">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${carInfo.model} </h5>
            <img  src="${carInfo.image}" class="card-img-top" alt="...">
            <h6 class="card-subtitle mb-2 text-body-secondary">${carInfo.year}</h6>
            <h6 class="card-title">Rs ${carInfo.price}</h6>
          </div>
        </div>
      </div> `;
}
