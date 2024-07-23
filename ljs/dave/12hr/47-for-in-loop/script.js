// {{{ Inside Key Value Pair

const colorObj = {
    color1: "red",
    color2: "blue",
    color3: "orange",
    color4: "green",
};

for (const key in colorObj) {
    // console.log(key) 
    // color1
    // color2
    // color3
    // color4

    console.log(key, colorObj[key]); 
    // color1 red
    // color2 blue
    // color3 orange
    // color4 green
}

//  }}}
// {{{

const colorArr = ["Red", "Green", "Blue", "Yelow"];

// get the index number;
for (const color in colorArr) {
    console.log(color); 
    // 0
    // 1
    // 2
    // 3
}

// get the values;
for (const key in colorArr) {
    console.log(colorArr[key]) 
    // Red
    // Green
    // Blue
    // Yelow
}

//  }}};

