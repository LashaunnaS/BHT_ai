let numRange = [];
let threesList = [];
let totalThrees = 0;

let range1;
let range2;

// Get input values, store them in an array and sort values in ASC order
const getUserRange = () => {
    range1 = document.getElementById('input1').valueAsNumber;
    range2 = document.getElementById('input2').valueAsNumber;

    document.getElementById("send").disabled = true;

    numRange.push(range1) && numRange.push(range2);

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

    document.getElementById('summaryOfThreesArr').innerHTML = ``;
    document.getElementById('sumOfThrees').innerHTML = ``
}

// Look through numRange and add missing numbers between range1 and range2 that contain #3
const fillInArray = () => {

    for (let x = numRange[0]; x <= numRange[numRange.length - 1]; x++) {
        if (x.toString().split('').includes('3')) {
            threesList.push(x);
        }
    }

    threesList.length == 0 ?
        document.getElementById('summaryOfThreesArr').innerHTML = `Sorry, no lucky numbers in this range. Click reset to try again!` :
        document.getElementById('summaryOfThreesArr').innerHTML = `Your lucky numbers are: ${threesList}`;

    getTotallThrees()
}


// Get a sum total of all #3's within the range 
const getTotallThrees = () => {
    let x = threesList.toString().replace(/,/gi, "");

    x.split('').map(num => {
        num == 3 ? totalThrees++ : '';
    })

    document.getElementById('sumOfThrees').innerHTML = `There are ${totalThrees} 3's`;
}