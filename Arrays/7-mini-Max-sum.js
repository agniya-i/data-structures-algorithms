
let arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    let totals = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {

            if (j !== i) {
                sum += arr[j];
            }


        }
        totals.push(sum);
    }


    console.log(`${Math.min(...totals)} ${Math.max(...totals)}`);
}

miniMaxSum(arr);