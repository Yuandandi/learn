// {{{ one by one
let sisi1 = 8;
let sisi2 = 3;

function volume(n) {
    return n * n * n;
}

console.log(volume(sisi1) + volume(sisi2));

// }}}
// {{{ Reusability
function jumlahVolumeDuaKubus(a, b) {
    let total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(8,3));
// }}}
