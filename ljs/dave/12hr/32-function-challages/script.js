// {{{ Challenge 1 ; Turn Fahrenheit Into Celsius

function getCelcius(angka) {
    const celcius = (angka - 32) * 5 / 9;
    return celcius
};

console.log(getCelcius(32));

// Arrow Function;
const celcius = n => (n - 32) * 5 / 9;

console.log(celcius(32));

console.log(`the temp is ${getCelcius(32)}°C`);

//  }}}
// {{{ Challenge 2 ; Find Min Max Value of an Array

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // return multiple values store in an object
    return {
        min,
        max
    }
};

console.log(minMax([-1, 2, 3, 4, 5, 6, 9])); // { min: -1, max: 9 }

//  }}};
// {{{ Challenge 3 ; IIFE

((length, width) => {
    const area = length * width;
    const output = `the area of a rectangle with a length of ${length} and width of ${width} is ${area}.`;
    console.log(output);
})(10, 5);


//  }}};
