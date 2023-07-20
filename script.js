//Currency Converter

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("button-addon2");
const num = document.getElementById("input-value");
const ans = document.getElementById("result");


fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

btn.addEventListener("click", () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = num.value;
    let result = ans.value

    if (currency1 != currency2) {
        convert(currency1, currency2, value);
        document.getElementById('same-alert').classList.add('d-none')
    }

    if (currency1 != currency2 && (result != null || result != 0)) {
        document.getElementById('null-alert').classList.add('d-none')
        document.getElementById('same-alert').classList.add('d-none')
    } else {
        document.getElementById('same-alert').classList.remove('d-none')
        document.getElementById('null-alert').classList.add('d-none')

    }


});

function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
            `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
        )
        .then((val) => val.json())
        .then((val) => {
            console.log(Object.values(val.rates)[0]);
            ans.value = Object.values(val.rates)[0];
        });
}








//Temperature Converter


let input1 = document.getElementById('Temperature-input1')
let input2 = document.getElementById('Temperature-input2')
let temp_value = document.getElementById('temp_value')
let tempresult = document.getElementById('Temperature-result')

function temperature_convert() {


    if (input1.value != input2.value) {
        document.getElementById('temp-same-alert').classList.add('d-none')

        if (input1.value == '1' && input2.value == '2') {
            let CtoF = (temp_value.value * 1.8) + 32 + 'F'
            tempresult.value = CtoF

        }

        if (input1.value == '1' && input2.value == '3') {
            let CtoF = (temp_value.value * 1) + 273.15 + 'K'
            tempresult.value = CtoF

        }

        if (input1.value == '2' && input2.value == '1') {
            let CtoF = (temp_value.value - 32) * 5 / 9 + 'C'
            tempresult.value = CtoF

        }

        if (input1.value == '2' && input2.value == '3') {
            let CtoF = (temp_value.value - 32) * 5 / 9 + 273.15 + 'K'
            tempresult.value = CtoF

        }

        if (input1.value == '3' && input2.value == '1') {
            let CtoF = (temp_value.value - 273.15) + 'C'
            tempresult.value = CtoF

        }

        if (input1.value == '3' && input2.value == '2') {
            let CtoF = (temp_value.value - 273.15) * 9 / 5 + 32 + 'F'
            tempresult.value = CtoF

        }


    } else {
        document.getElementById('temp-same-alert').classList.remove('d-none')
    }


}





//Area Converter

let areainput1 = document.getElementById('Area-input1')
let areainput2 = document.getElementById('Area-input2')
let areavalue = document.getElementById('area-input-value')
let arearesult = document.getElementById('area-result')

function areaconverter() {

    if (areainput1.value != areainput2.value) {
        document.getElementById('area-same-alert').classList.add('d-none')

        if (areainput1.value == 'mm' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 100 + 'CM'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 645.2 + 'IN'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 92900 + 'FT'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 836100 + 'YD'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 1000000 + 'MT'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 1000000000000 + 'KM'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 2590000000000 + 'MI'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 4047000000 + 'AC'
        }
        if (areainput1.value == 'mm' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " MM = " + areavalue.value / 10000000000 + 'HC'
        }


        if (areainput1.value == 'cm' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value * 100 + 'MM'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 6.452 + 'IN'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 929 + 'FT'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 8361 + 'YD'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 10000 + 'MT'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 10000000000 + 'KM'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 25900000000 + 'MI'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 40470000 + 'AC'
        }
        if (areainput1.value == 'cm' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " CM = " + areavalue.value / 100000000 + 'HC'
        }


        if (areainput1.value == 'in' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value * 645.2 + 'MM'
        }
        if (areainput1.value == 'in' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value * 6.452 + 'CM'
        }
        if (areainput1.value == 'in' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 144 + 'FT'
        }
        if (areainput1.value == 'in' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 1296 + 'YD'
        }
        if (areainput1.value == 'in' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 1550 + 'MT'
        }
        if (areainput1.value == 'in' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 1550000000 + 'KM'
        }
        if (areainput1.value == 'in' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 4014000000 + 'MI'
        }
        if (areainput1.value == 'in' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 6273000 + 'AC'
        }
        if (areainput1.value == 'in' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " IN = " + areavalue.value / 15500000 + 'HC'
        }



        if (areainput1.value == 'ft' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value * 92900 + 'MM'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value * 929 + 'CM'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " FT= " + areavalue.value * 144 + 'IN'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value / 9 + 'YD'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value / 10.76 + 'MT'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value / 10760000 + 'KM'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " FT= " + areavalue.value / 278800000 + 'MI'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value / 43560 + 'AC'
        }
        if (areainput1.value == 'ft' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " FT = " + areavalue.value / 107600 + 'HC'
        }




        if (areainput1.value == 'yd' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value * 836100 + 'MM'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value * 8361 + 'CM'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value * 1296 + 'IN'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value * 9 + 'FT'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value / 1.196 + 'MT'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value / 1196000 + 'KM'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value / 3098000 + 'MI'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value / 4840 + 'AC'
        }
        if (areainput1.value == 'yd' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value / 11960 + 'HC'
        }



        if (areainput1.value == 'mt' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " YD = " + areavalue.value * 1000000 + 'MM'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value * 10000 + 'CM'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value * 1550 + 'IN'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value * 10.76 + 'FT'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value / 1.196 + 'YD'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value / 1000000 + 'KM'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value / 2590000 + 'MI'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value / 4047 + 'AC'
        }
        if (areainput1.value == 'mt' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " MT = " + areavalue.value / 10000 + 'HC'
        }


        if (areainput1.value == 'km' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value * 1000000000000 + 'MM'
        }
        if (areainput1.value == 'km' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value * 10000000000 + 'CM'
        }
        if (areainput1.value == 'km' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value * 1550000000 + 'IN'
        }
        if (areainput1.value == 'km' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value * 10760000 + 'FT'
        }
        if (areainput1.value == 'km' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value / 1196000 + 'YD'
        }
        if (areainput1.value == 'km' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value / 1000000 + 'MT'
        }
        if (areainput1.value == 'km' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value / 2.59 + 'MI'
        }
        if (areainput1.value == 'km' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value / 247.1 + 'AC'
        }
        if (areainput1.value == 'km' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value / 100 + 'HC'
        }


        if (areainput1.value == 'm' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 2590000000000 + 'MM'
        }
        if (areainput1.value == 'm' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 25900000000 + 'CM'
        }
        if (areainput1.value == 'm' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 401400000 + 'IN'
        }
        if (areainput1.value == 'm' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 27880000 + 'FT'
        }
        if (areainput1.value == 'm' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 3098000 + 'YD'
        }
        if (areainput1.value == 'm' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 2590000 + 'MT'
        }
        if (areainput1.value == 'm' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 2.59 + 'KM'
        }
        if (areainput1.value == 'm' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value * 640 + 'AC'
        }
        if (areainput1.value == 'm' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " MI = " + areavalue.value / 259 + 'HC'
        }



        if (areainput1.value == 'ac' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " AC = " + areavalue.value * 4047000000 + 'MM'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + "AC = " + areavalue.value * 40470000 + 'CM'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " AC = " + areavalue.value * 6273000 + 'IN'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " AC = " + areavalue.value * 43560 + 'FT'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " KM = " + areavalue.value * 4840 + 'YD'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " AC= " + areavalue.value * 4047 + 'MT'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " AC = " + areavalue.value / 247.1 + 'KM'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " AC = " + areavalue.value / 640 + 'MI'
        }
        if (areainput1.value == 'ac' && areainput2.value == 'hc') {
            arearesult.value = areavalue.value + " AC = " + areavalue.value / 2.471 + 'HC'
        }



        if (areainput1.value == 'hc' && areainput2.value == 'mm') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value * 10000000000 + 'MM'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'cm') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value * 100000000 + 'CM'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'in') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value * 15500000 + 'IN'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'ft') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value * 107600 + 'FT'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'yd') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value * 11960 + 'YD'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'mt') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value / 10000 + 'MT'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'km') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value / 100 + 'KM'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'm') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value / 259 + 'MI'
        }
        if (areainput1.value == 'hc' && areainput2.value == 'ac') {
            arearesult.value = areavalue.value + " HC = " + areavalue.value * 2.471 + 'AC'
        }


    } else {
        document.getElementById('area-same-alert').classList.remove('d-none')
    }





}



//Weight Converter

let weightinput1 = document.getElementById('weight-input1')
let weightinput2 = document.getElementById('weight-input2')
let weightvalue = document.getElementById('weight-input-Value')
let weightresult = document.getElementById('weight-result')

function weightconverter() {

    if (weightinput1.value == 'mg' && weightinput2.value == 'g') {
        weightresult.value = weightvalue.value + ' MG = ' + weightvalue.value * 1 / 1000 + ' G '
    }
    if (weightinput1.value == 'mg' && weightinput2.value == 'kg') {
        weightresult.value = weightvalue.value + ' MG = ' + weightvalue.value * 1 / 1000000 + ' KG '
    }
    if (weightinput1.value == 'mg' && weightinput2.value == 't') {
        weightresult.value = weightvalue.value + ' MG = ' + weightvalue.value * 1 / 1000000000 + ' T '
    }
    if (weightinput1.value == 'mg' && weightinput2.value == 'p') {
        weightresult.value = weightvalue.value + ' MG = ' + weightvalue.value * 1 / 453600 + ' P '
    }



    if (weightinput1.value == 'g' && weightinput2.value == 'mg') {
        weightresult.value = weightvalue.value + ' G = ' + weightvalue.value * 1000 + ' MG '
    }
    if (weightinput1.value == 'g' && weightinput2.value == 'kg') {
        weightresult.value = weightvalue.value + ' G = ' + weightvalue.value / 1000 + ' KG '
    }
    if (weightinput1.value == 'g' && weightinput2.value == 't') {
        weightresult.value = weightvalue.value + ' G = ' + weightvalue.value / 1000000 + ' T '
    }
    if (weightinput1.value == 'g' && weightinput2.value == 'p') {
        weightresult.value = weightvalue.value + ' G = ' + weightvalue.value / 453.6 + ' P '

    }




    if (weightinput1.value == 'kg' && weightinput2.value == 'mg') {
        weightresult.value = weightvalue.value + ' KG = ' + weightvalue.value * 1000000 + ' MG '
    }
    if (weightinput1.value == 'kg' && weightinput2.value == 'g') {
        weightresult.value = weightvalue.value + ' KG = ' + weightvalue.value * 1000 + ' G '
    }
    if (weightinput1.value == 'kg' && weightinput2.value == 't') {
        weightresult.value = weightvalue.value + ' KG = ' + weightvalue.value / 1000 + ' T '
    }
    if (weightinput1.value == 'kg' && weightinput2.value == 'p') {
        weightresult.value = weightvalue.value + ' KG = ' + weightvalue.value * 2.205 + ' P '
    }


    if (weightinput1.value == 't' && weightinput2.value == 'mg') {
        weightresult.value = weightvalue.value + ' T = ' + weightvalue.value * 1000000000 + ' MG'
    }
    if (weightinput1.value == 't' && weightinput2.value == 'g') {
        weightresult.value = weightvalue.value + ' T = ' + weightvalue.value * 1000000 + ' MG'
    }
    if (weightinput1.value == 't' && weightinput2.value == 'kg') {
        weightresult.value = weightvalue.value + ' T = ' + weightvalue.value * 1000 + ' MG'
    }
    if (weightinput1.value == 't' && weightinput2.value == 'p') {
        weightresult.value = weightvalue.value + ' T = ' + weightvalue.value * 2205 + ' MG'
    }


    if (weightinput1.value == 'p' && weightinput2.value == 'mg') {
        weightresult.value = weightvalue.value + ' P = ' + weightvalue.value * 453600 + ' MG'
    }
    if (weightinput1.value == 'p' && weightinput2.value == 'g') {
        weightresult.value = weightvalue.value + ' P = ' + weightvalue.value * 453.6 + ' G'
    }
    if (weightinput1.value == 'p' && weightinput2.value == 'kg') {
        weightresult.value = weightvalue.value + ' P = ' + weightvalue.value * 1 / 2.205 + ' KG'
    }
    if (weightinput1.value == 'p' && weightinput2.value == 't') {
        weightresult.value = weightvalue.value + ' P = ' + weightvalue.value * 1 / 2205 + ' T'
    }

    if (weightinput1.value != weightinput2.value) {
        document.getElementById('weight-same-alert').classList.add('d-none')
    } else {
        document.getElementById('weight-same-alert').classList.remove('d-none')
    }
}

// Length Converter
let lengthinput1 = document.getElementById('length-input1')
let lengthinput2 = document.getElementById('length-input2')
let lengthvalue = document.getElementById('length-input-Value')
let lengthresult = document.getElementById('length-result')

function lengthconverter() {
    if (lengthinput1.value == 'mm' && lengthinput2.value == 'cm') {
        lengthresult.value = lengthvalue.value + " MM = " + lengthvalue.value / 100 + 'CM'
    }
    if (lengthinput1.value == 'mm' && lengthinput2.value == 'ft') {
        lengthresult.value = lengthvalue.value + " MM = " + lengthvalue.value / 304.8 + 'FT'
    }
    if (lengthinput1.value == 'mm' && lengthinput2.value == 'mt') {
        lengthresult.value = lengthvalue.value + " MM = " + lengthvalue.value / 1000 + 'MT'
    }
    if (lengthinput1.value == 'mm' && lengthinput2.value == 'km') {
        lengthresult.value = lengthvalue.value + " MM = " + lengthvalue.value / 1000000 + 'KM'
    }



    if (lengthinput1.value == 'cm' && lengthinput2.value == 'mm') {
        lengthresult.value = lengthvalue.value + " CM = " + lengthvalue.value / 10 + 'MM'
    }
    if (lengthinput1.value == 'cm' && lengthinput2.value == 'ft') {
        lengthresult.value = lengthvalue.value + " CM = " + lengthvalue.value / 30.48 + 'FT'
    }
    if (lengthinput1.value == 'cm' && lengthinput2.value == 'mt') {
        lengthresult.value = lengthvalue.value + " CM = " + lengthvalue.value / 100 + 'MT'
    }
    if (lengthinput1.value == 'cm' && lengthinput2.value == 'km') {
        lengthresult.value = lengthvalue.value + " CM = " + lengthvalue.value / 100000 + 'KM'
    }



    if (lengthinput1.value == 'ft' && lengthinput2.value == 'mm') {
        lengthresult.value = lengthvalue.value + " FT = " + lengthvalue.value * 304.8 + 'MM'
    }
    if (lengthinput1.value == 'ft' && lengthinput2.value == 'cm') {
        lengthresult.value = lengthvalue.value + " FT = " + lengthvalue.value * 30.48 + 'CM'
    }
    if (lengthinput1.value == 'ft' && lengthinput2.value == 'mt') {
        lengthresult.value = lengthvalue.value + " FT = " + lengthvalue.value / 3.281 + 'MT'
    }
    if (lengthinput1.value == 'ft' && lengthinput2.value == 'km') {
        lengthresult.value = lengthvalue.value + " FT = " + lengthvalue.value / 3281 + 'KM'
    }



    if (lengthinput1.value == 'mt' && lengthinput2.value == 'mm') {
        lengthresult.value = lengthvalue.value + " MT = " + lengthvalue.value / 1000000 + 'MM'
    }
    if (lengthinput1.value == 'mt' && lengthinput2.value == 'cm') {
        lengthresult.value = lengthvalue.value + " MT = " + lengthvalue.value * 100 + 'CM'
    }
    if (lengthinput1.value == 'mt' && lengthinput2.value == 'ft') {
        lengthresult.value = lengthvalue.value + " MT = " + lengthvalue.value * 3.281 + 'FT'
    }
    if (lengthinput1.value == 'mt' && lengthinput2.value == 'km') {
        lengthresult.value = lengthvalue.value + " MT = " + lengthvalue.value / 1000 + 'KM'
    }




    if (lengthinput1.value == 'km' && lengthinput2.value == 'mm') {
        lengthresult.value = lengthvalue.value + " KM = " + lengthvalue.value * 1000000 + 'MM'
    }
    if (lengthinput1.value == 'km' && lengthinput2.value == 'cm') {
        lengthresult.value = lengthvalue.value + " KM = " + lengthvalue.value / 100000 + 'CM'
    }
    if (lengthinput1.value == 'km' && lengthinput2.value == 'ft') {
        lengthresult.value = lengthvalue.value + " KM = " + lengthvalue.value * 3281 + 'FT'
    }
    if (lengthinput1.value == 'km' && lengthinput2.value == 'mt') {
        lengthresult.value = lengthvalue.value + " KM = " + lengthvalue.value * 1000 + 'MT'
    }

    if (lengthinput1.value != lengthinput2.value) {
        document.getElementById('length-same-alert').classList.add('d-none')
    } else {
        document.getElementById('length-same-alert').classList.remove('d-none')
    }


}


let speedinput1 = document.getElementById('speed-input1')
let speedinput2 = document.getElementById('speed-input2')
let speedvalue = document.getElementById('speed-input-Value')
let speedresult = document.getElementById('speed-result')

function speedconverter() {
    if (speedinput1.value == 'kmph' && speedinput2.value == 'mph') {
        speedresult.value = speedvalue.value + " KMPH = " + speedvalue.value / 1.609 + 'MPH'
    }
    if (speedinput1.value == 'kmph' && speedinput2.value == 'mps') {
        speedresult.value = speedvalue.value + " KMPH = " + speedvalue.value / 3.6 + 'MPS'
    }


    if (speedinput1.value == 'mph' && speedinput2.value == 'kmph') {
        speedresult.value = speedvalue.value + " MPH = " + speedvalue.value * 1.609 + 'KMPH'
    }
    if (speedinput1.value == 'mph' && speedinput2.value == 'mps') {
        speedresult.value = speedvalue.value + " MPH = " + speedvalue.value / 2.237 + 'MPS'
    }


    if (speedinput1.value == 'mps' && speedinput2.value == 'kmph') {
        speedresult.value = speedvalue.value + " MPS = " + speedvalue.value * 3.6 + 'KMPH'
    }
    if (speedinput1.value == 'mps' && lengthinput2.value == 'mph') {
        speedresult.value = speedvalue.value + " MPS = " + speedvalue.value * 2.237 + 'MPH'
    }

    if (speedinput1.value != speedinput2.value) {
        document.getElementById('speed-same-alert').classList.add('d-none')
    } else {
        document.getElementById('speed-same-alert').classList.remove('d-none')
    }


}



let timeinput1 = document.getElementById('time-input1')
let timeinput2 = document.getElementById('time-input2')
let timevalue = document.getElementById('time-input-Value')
let timeresult = document.getElementById('time-result')

function timeconverter() {
    if (timeinput1.value == 'sec' && timeinput2.value == 'min') {
        timeresult.value = timevalue.value + " SEC = " + timevalue.value / 60 + 'MIN'
    }
    if (timeinput1.value == 'sec' && timeinput2.value == 'hr') {
        timeresult.value = timevalue.value + "  SEC = " + timevalue.value / 3600 + 'HRS'
    }
    if (timeinput1.value == 'sec' && timeinput2.value == 'day') {
        timeresult.value = timevalue.value + "  SEC = " + timevalue.value / 86400 + 'DAYS'
    }


    if (timeinput1.value == 'min' && timeinput2.value == 'sec') {
        timeresult.value = timevalue.value + " MIN = " + timevalue.value * 60 + 'SEC'
    }
    if (timeinput1.value == 'min' && timeinput2.value == 'hr') {
        timeresult.value = timevalue.value + " MIN = " + timevalue.value / 60 + 'HRS'
    }
    if (timeinput1.value == 'min' && timeinput2.value == 'day') {
        timeresult.value = timevalue.value + " MIN = " + timevalue.value / 1440 + 'DAYS'
    }


    if (timeinput1.value == 'hr' && timeinput2.value == 'sec') {
        timeresult.value = timevalue.value + " HR = " + timevalue.value * 3600 + 'SEC'
    }
    if (timeinput1.value == 'hr' && timeinput2.value == 'min') {
        timeresult.value = timevalue.value + " HR = " + timevalue.value * 60 + 'MIN'
    }
    if (timeinput1.value == 'hr' && timeinput2.value == 'day') {
        timeresult.value = timevalue.value + " HR = " + timevalue.value / 24 + 'DAY'
    }


    if (timeinput1.value == 'day' && timeinput2.value == 'sec') {
        timeresult.value = timevalue.value + " DAY = " + timevalue.value * 86400 + 'SEC'
    }
    if (timeinput1.value == 'day' && timeinput2.value == 'min') {
        timeresult.value = timevalue.value + " DAY = " + timevalue.value * 1440 + 'MIN'
    }
    if (timeinput1.value == 'day' && timeinput2.value == 'hr') {
        timeresult.value = timevalue.value + " DAY = " + timevalue.value * 24 + 'HRS'
    }








    if (timeinput1.value != timeinput2.value) {
        document.getElementById('time-same-alert').classList.add('d-none')
    } else {
        document.getElementById('time-same-alert').classList.remove('d-none')
    }


}


let volumeinput1 = document.getElementById('volume-input1')
let volumeinput2 = document.getElementById('volume-input2')
let volumevalue = document.getElementById('volume-input-Value')
let volumeresult = document.getElementById('volume-result')

function volumeconverter() {
    if (volumeinput1.value == 'ml' && volumeinput2.value == 'l') {
        volumeresult.value = volumevalue.value + " ML = " + volumevalue.value / 1000 + 'L'
    }
    if (volumeinput1.value == 'ml' && volumeinput2.value == 'cm') {
        volumeresult.value = volumevalue.value + " ML = " + volumevalue.value / 1000000 + 'CM'
    }
    if (volumeinput1.value == 'ml' && volumeinput2.value == 'ga') {
        volumeresult.value = volumevalue.value + " ML = " + volumevalue.value / 3785 + 'GA'
    }


    if (volumeinput1.value == 'l' && volumeinput2.value == 'ml') {
        volumeresult.value = volumevalue.value + " L = " + volumevalue.value * 1000 + 'ML'
    }
    if (volumeinput1.value == 'l' && volumeinput2.value == 'cm') {
        volumeresult.value = volumevalue.value + " L = " + volumevalue.value / 1000 + 'CM'
    }
    if (volumeinput1.value == 'l' && volumeinput2.value == 'ga') {
        volumeresult.value = volumevalue.value + " L = " + volumevalue.value / 3.785 + 'GA'
    }


    if (volumeinput1.value == 'cm' && volumeinput2.value == 'ml') {
        volumeresult.value = volumevalue.value + " CM = " + volumevalue.value * 1000000 + 'ML'
    }
    if (volumeinput1.value == 'cm' && volumeinput2.value == 'l') {
        volumeresult.value = volumevalue.value + " CM = " + volumevalue.value * 1000 + 'L'
    }
    if (volumeinput1.value == 'cm' && volumeinput2.value == 'ga') {
        volumeresult.value = volumevalue.value + " CM = " + volumevalue.value * 264.2 + 'GA'
    }


    if (volumeinput1.value == 'ga' && volumeinput2.value == 'ml') {
        volumeresult.value = volumevalue.value + " GA = " + volumevalue.value * 3785 + 'ML'
    }
    if (volumeinput1.value == 'ga' && volumeinput2.value == 'l') {
        volumeresult.value = volumevalue.value + " GA = " + volumevalue.value * 3.785 + 'L'
    }
    if (volumeinput1.value == 'ga' && volumeinput2.value == 'cm') {
        volumeresult.value = volumevalue.value + " GA = " + volumevalue.value / 264.2 + 'CM'
    }



    if (timeinput1.value != timeinput2.value) {
        document.getElementById('speed-same-alert').classList.add('d-none')
    } else {
        document.getElementById('time-same-alert').classList.remove('d-none')
    }


}




$(document).ready(function() {
    $('#back-button').click(function() {
        $('html,body').animate({
            scrollTop: '0px'
        }, 1500)
    })
})