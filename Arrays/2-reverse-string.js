const str = 'My name is Agniya';

function reverse(str) {
    let res = [];

    for (let i = str.length - 1; i >= 0; i--) {
        res.push(str[i]);
    }

    return res.join("");
}

function reverse2(str) {
    return str.split("").reverse().join("");
}

