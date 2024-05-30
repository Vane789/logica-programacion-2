function convertirGrados() {
        try {
            let celsius = document.getElementById("celsius").value;
            let valor_convertido = parseFloat(celsius);
            if (isNaN(valor_convertido) || celsius === "") {
                throw new Error("El valor ingresado no es un número, intente de nuevo.");
            }
            let fahrenheit = (valor_convertido * 9 / 5) + 32;
            let kelvin = valor_convertido + 273.15;
            console.log(`El valor de Celsius ${valor_convertido} a Fahrenheit es ${fahrenheit} y a Kelvin es ${kelvin}`);
            document.getElementById("kelvin").innerText = `El valor de Celsius ${valor_convertido} a Kelvin es ${kelvin}`;
            document.getElementById("fahrenheit").innerText = `El valor de Celsius ${valor_convertido} a Fahrenheit es ${fahrenheit}`;
        } catch (err) {
            alert(err.message);
        }

    }
   
convertirGrados();


