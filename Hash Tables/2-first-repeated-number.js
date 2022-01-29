
function firstRepeatedNumber(arr) {
    if (!arr.length) return;
    let map = {}

    for (let i = 0; i < arr.length; i++) {
        if (!map.hasOwnProperty(arr[i])) {
            map[arr[i]] = 1;
        } else {
            return arr[i];
        }
    }

    return null;
}

