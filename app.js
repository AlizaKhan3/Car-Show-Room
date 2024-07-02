var cars = {
    Honda: {
        Civic: {
            model: "Honda Civic Reborn",
            year: 2019,
            price: "240,000 Pkr",
            colors: ["White", "Black", "Silver"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        Accord: {
            model: "Honda Accord Hybrid",
            year: 2020,
            price: "350,000 Pkr",
            colors: ["Gray", "Blue", "Red"],
            transmission: "CVT",
            engineType: "Hybrid",
            mileage: 10000
        }
    },
    Toyota: {
        Corolla: {
            model: "Toyota Corolla Altis",
            year: 2018,
            price: "200,000 Pkr",
            colors: ["White", "Silver", "Gray"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        },
        Camry: {
            model: "Toyota Camry XSE",
            year: 2021,
            price: "400,000 Pkr",
            colors: ["Black", "Red", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        }
    },
    Suzuki: {
        Swift: {
            model: "Suzuki Swift GLX",
            year: 2017,
            price: "150,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Manual",
            engineType: "Gasoline",
            mileage: 2000
        },
        Vitara: {
            model: "Suzuki Vitara GLX",
            year: 2019,
            price: "250,000 Pkr",
            colors: ["Gray", "Blue", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        }
    },
    Nissan: {
        Altima: {
            model: "Nissan Altima SV",
            year: 2020,
            price: "300,000 Pkr",
            colors: ["White", "Black", "Gray"],
            transmission: "CVT",
            engineType: "Gasoline",
            mileage: 6000
        },
        Sentra: {
            model: "Nissan Sentra SR",
            year: 2018,
            price: "220,000 Pkr",
            colors: ["Red", "White", "Silver"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        }
    },
    Hyundai: {
        Elantra: {
            model: "Hyundai Elantra GLS",
            year: 2019,
            price: "280,000 Pkr",
            colors: ["White", "Silver", "Gray"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        },
        Sonata: {
            model: "Hyundai Sonata Limited",
            year: 2021,
            price: "380,000 Pkr",
            colors: ["Black", "White", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Kia: {
        Rio: {
            model: "Kia Rio EX",
            year: 2018,
            price: "180,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 2000
        },
        Optima: {
            model: "Kia Optima SX",
            year: 2020,
            price: "320,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        }
    },
    Mazda: {
        Mazda3: {
            model: "Mazda3 Sport",
            year: 2019,
            price: "260,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        },
        CX5: {
            model: "Mazda CX-5 Grand Touring",
            year: 2021,
            price: "420,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Ford: {
        Focus: {
            model: "Ford Focus Titanium",
            year: 2018,
            price: "200,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 2000
        },
        Fusion: {
            model: "Ford Fusion SE",
            year: 2020,
            price: "300,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        }
    },
    Volkswagen: {
        Golf: {
            model: "Volkswagen Golf TSI",
            year: 2019,
            price: "240,000 Pkr",
            colors: ["White", "Silver", "Red"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 3000
        },
        Jetta: {
            model: "Volkswagen Jetta GLI",
            year: 2021,
            price: "320,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        }
    },
    Audi: {
        A3: {
            model: "Audi A3 Premium",
            year: 2020,
            price: "380,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 4000
        },
        A4: {
            model: "Audi A4 Quattro",
            year: 2021,
            price: "480,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    BMW: {
        Series: {
            model: "BMW 330i",
            year: 2020,
            price: "500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        X1: {
            model: "BMW X1 xDrive28i",
            year: 2021,
            price: "580,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Mercedes: {
        CClass: {
            model: "Mercedes-Benz C 300",
            year: 2020,
            price: "550,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        EClass: {
            model: "Mercedes-Benz E 350",
            year: 2021,
            price: "650,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Lexus: {
        ES: {
            model: "Lexus ES 350",
            year: 2020,
            price: "600,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        RX: {
            model: "Lexus RX 350",
            year: 2021,
            price: "700,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    LandRover: {
        RangeRover: {
            model: "Land Rover Range Rover Velar",
            year: 2020,
            price: "800,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        Discovery: {
            model: "Land Rover Discovery Sport",
            year: 2021,
            price: "900,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Porsche: {
        Cayman: {
            model: "Porsche 718 Cayman",
            year: 2020,
            price: "1,000,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Manual",
            engineType: "Gasoline",
            mileage: 5000
        },
        Macan: {
            model: "Porsche Macan S",
            year: 2021,
            price: "1,200,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Ferrari: {
        488: {
            model: "Ferrari 488 GTB",
            year: 2020,
            price: "2,000,000 Pkr",
            colors: ["Red", "Black", "Silver"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        F8: {
            model: "Ferrari F8 Tributo",
            year: 2021,
            price: "2,500,000 Pkr",
            colors: ["Red", "Black", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Lamborghini: {
        Huracan: {
            model: "Lamborghini Huracan Evo",
            year: 2020,
            price: "3,000,000 Pkr",
            colors: ["Orange", "Black", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        Urus: {
            model: "Lamborghini Urus",
            year: 2021,
            price: "3,500,000 Pkr",
            colors: ["Gray", "Black", "White"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Maserati: {
        Ghibli: {
            model: "Maserati Ghibli S",
            year: 2020,
            price: "1,500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        Levante: {
            model: "Maserati Levante S",
            year: 2021,
            price: "1,800,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Bentley: {
        Continental: {
            model: "Bentley Continental GT",
            year: 2020,
            price: "2,200,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        FlyingSpur: {
            model: "Bentley Flying Spur",
            year: 2021,
            price: "2,800,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    RollsRoyce: {
        Phantom: {
            model: "Rolls-Royce Phantom",
            year: 2020,
            price: "3,200,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        Ghost: {
            model: "Rolls-Royce Ghost",
            year: 2021,
            price: "3,800,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    AstonMartin: {
        DB11: {
            model: "Aston Martin DB11",
            year: 2020,
            price: "2,500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        Vantage: {
            model: "Aston Martin Vantage",
            year: 2021,
            price: "3,000,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 7000
        }
    },
    LandCruiser: {
        Prado: {
            model: "Toyota Land Cruiser Prado",
            year: 2020,
            price: "2,500,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        LC200: {
            model: "Toyota Land Cruiser LC200",
            year: 2021,
            price: "3,000,000 Pkr",
            colors: ["Gray", "White", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 6000
        }
    },
    Vantage: {
        model: "Aston Martin Vantage",
        year: 2021,
        price: "3,000,000 Pkr",
        colors: ["Gray", "White", "Black"],
        transmission: "Automatic",
        engineType: "Gasoline",
        mileage: 6000
    },
    Jaguar: {
        FType: {
            model: "Jaguar F-Type",
            year: 2020,
            price: "1,800,000 Pkr",
            colors: ["White", "Silver", "Black"],
            transmission: "Automatic",
            engineType: "Gasoline",
            mileage: 5000
        },
        XE: {
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
    companyName.innerHTML += `
    <option value = "${key}"> ${key.toLocaleUpperCase()} </option>`
    // for (const key1 in cars[key]){
    //     // console.log(key1);
    //     brandName.innerHTML += `
    //     <option>${key1.toLocaleUpperCase()}</option>`
    // }
}

function onCompanyChange(){
    brandName.innerHTML = "";
for (const key in cars[companyName.value]){
    // console.log(key);
    brandName.innerHTML += `
    <option> ${key.toLocaleUpperCase()}</option>`
    }
}
