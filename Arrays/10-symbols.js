let s = ["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"];
let q = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

function matchingStrings(strings, queries) {
    // Write your code here

    // let map = {}
    // for (let i = 0; i < queries.length; i++) {
    //     if (!map.hasOwnProperty(queries[i])) map[queries[i]] = 0;

    // }

    // for (let i = 0; i < strings.length; i++) {
    //     const temp = strings[i];
    //     if (map.hasOwnProperty(temp)) map[temp] += 1;

    // }


    var result = [];
    let counts = {};

    for (const str of strings) {
        counts[str] = counts[str] ? counts[str] + 1 : 1;
    }

    for (var i = 0; i < queries.length; i++) {
        if (counts.hasOwnProperty(queries[i])) {
            result.push(counts[queries[i]]);
        } else {
            result.push(0);
        }
    }

    return result;
    // return Object.values(map);
}

console.log(matchingStrings(s, q));


