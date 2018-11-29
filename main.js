let numRange = [];
let threesList = [];
let totalThrees = 0;

let range1;
let range2;

// Get input values, store them in an array and sort values in ASC order
const getUserRange = () => {
    range1 = document.getElementById('input1').valueAsNumber;
    range2 = document.getElementById('input2').valueAsNumber;

    // check if either input submits a value that is not a number if so stop running.
    if (isNaN(range1) || isNaN(range2)) {
        alert("Not a valid value(s)")
        return;
    }

    document.getElementById("send").disabled = true;

    numRange.push(range1) && numRange.push(range2);

    /*
    By default all non-undefined elements get converted to strings then compared based on UTF-16 code units.
    However, if a compareFunction is supplied, all non-undefined array elements are sorted according to the
    return value of the compare function.
    */
    numRange.sort((a, b) => a - b);

    fillInArray();
}

// Reset all fields and play again
const reset = () => {
    document.getElementById("send").disabled = false;
    numRange = [];
    threesList = [];
    totalThrees = 0;

    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';

    document.getElementById('summaryOfThreesArr').innerText = ``;
    document.getElementById('sumOfThrees').innerText = ``
}

// Look through numRange and add missing numbers between range1 and range2 that contain #3
const fillInArray = () => {

    for (let x = numRange[0]; x <= numRange[numRange.length - 1]; x++) {
        let nums = x.toString().split('');

        // Check if current number in loop (x) contains '3'. If so, push to threeList[].
        if (nums.includes('3')) { threesList.push(x); }

        // Split current number in loop (x), map over the created array and check if String value is === '3'. If so, increment totalThrees by one.
        nums.map(num => {
            if (num === '3') {totalThrees++; }
        })
    }

    threesList.length === 0 ?
        document.getElementById('summaryOfThreesArr').innerText = `Sorry, no lucky numbers in this range. Click reset to try again!` :
        document.getElementById('summaryOfThreesArr').innerText = `Your lucky numbers are: ${threesList}`;

        document.getElementById('sumOfThrees').innerText = `There are ${totalThrees} 3's`;
}

