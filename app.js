document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const result = document.querySelector("#result");
  const displayCurrentPlayer = document.querySelector("#current-player");
  //  all combinations of winners:
  const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ];
  let currentPlayer = 1;
  // display current player counter
  function checkWinner() {
    for (let idx = 0; idx < winningArrays.length; idx++) {
      const square1 = squares[winningArrays[idx][0]];
      const square2 = squares[winningArrays[idx][1]];
      const square3 = squares[winningArrays[idx][2]];
      const square4 = squares[winningArrays[idx][3]];
      if (
        square1.classList.contains("player-one") &&
        square2.classList.contains("player-one") &&
        square3.classList.contains("player-one") &&
        square4.classList.contains("player-one")
      ) {
        result.innerHTML = "Player One Wins!";
      } else if (
        square1.classList.contains("player-two") &&
        square2.classList.contains("player-two") &&
        square3.classList.contains("player-two") &&
        square4.classList.contains("player-two")
      ) {
        result.innerHTML = "Player Two Wins!";
      }
    }
  }
  for (let i = 0; i < squares.length; i++) {
    // check for winner function checkBoard
    // - manipulate DOM upon clicking div
    squares[i].onclick = () => {
      if (
        squares[i + 7].classList.contains("taken") &&
        !squares[i].classList.contains("taken")
      )
        if (currentPlayer === 1) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player-one");
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer === 2) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player-two");
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else alert("cannot go here");
      checkWinner();
    };
  }
});

//  reset button

var users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];
/*
// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    // apply cb frunction and store result in new array
    let result = callbackFunction(element);
    newArray.push(result);
  }

  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function (n) {
    return n * n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  // compare lengths and all elements
  //  if lengths and elements match then pass otherwise fail
  let hasSameValues = true;
  let hasSameLength = actual.length === expected.length;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      hasSameValues = false;
      break;
      // return hasSameValues;
    }
  }
  if (hasSameValues && hasSameLength) {
    console.log(`passed`);
  } else {
    console.log(
      `FAILED [${testName}] Expected "${expected}" but got "${actual}"`
    );
  }
}

// TESTS CASES
let inputForMap = [0, 1, 2];
let actualMap = map(inputForMap, addOne);
let expectedMap = [1, 2, 3];

function addOne(num) {
  return (num += 1);
}
assertArraysEqual(
  actualMap,
  expectedMap,
  "function should add one to each element in the array"
);

let inputForCubeAll = [1, 3, 5];
let actualCubeAll = cubeAll(inputForCubeAll);
let expectedCubeAll = [1, 27, 125];
assertArraysEqual(
  actualCubeAll,
  expectedCubeAll,
  "should correctly cube all elements of array"
);



// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj["fullName"] = firstName + " " + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) console.log(`passed`);
  else {
    console.log(`FAILED [${testName}] Expected ${expected} but got ${actual}`);
  }
}
// TESTS CASES
// everything working
let inputObject = {
  firstName: "Aaron",
  lastName: "Tran",
};
let expected = {
  firstName: "Aaron",
  lastName: "Tran",
  fullName: "Aaron Tran",
};

let outputObj = addFullNameProp(inputObject);
assertObjectsEqual(
  outputObj,
  expected,
  "this function should successfully add fullName prop to input obj"
);

// missing firstname
let inputObject2 = {
  // firstName: "Aaron",
  lastName: "Tran",
};
let expected2 = {
  lastName: "Tran",
};

let outputObj2 = addFullNameProp(inputObject2);
assertObjectsEqual(
  outputObj2,
  expected2,
  "this function should not add fullName prop to input obj if firstname is missing "
);

// missing last name
let inputObject3 = {
  firstName: "Aaron",
  // lastName: "Tran",
};
let expected3 = {
  firstName: "Aaron",
};

let outputObj3 = addFullNameProp(inputObject3);
assertObjectsEqual(
  outputObj3,
  expected3,
  "this function should not add fullName prop to input obj"
);

// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // create sum variable, assign to call to sum function
  // return sum divded by input array length
  let average = sum(numbers);
  // returns the average of an array of numbers
  return average / numbers.length;
}

function sum(numbers) {
  // returns the sum of an array of numbers
  // create a sum variabble
  let result = 0;
  // iterate over array
  // add current value to sum and save in sum
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertSumEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(
      `FAILED [${testName}] Expected "${expected}" but got "${actual}"`
    );
  }
}
// TESTS CASES
let input = [1, 2, 3, 4, 5];
let actualSum = sum(input);
let expectedSum = 15;
assertSumEqual(
  actualSum,
  expectedSum,
  "should correctly sum an array of numbers"
);

let actualAverage = average(input);
let expectedAverage = 3;
assertSumEqual(
  actualAverage,
  expectedAverage,
  "should correctly return the average of an array of numbers "
);


// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  let output = [];
  // iterate over array of names
  for (let i = 0; i < classList.length; i++) {
    // create an obj for which we will push into the final array
    let obj = {};
    //  call to get random int function
    obj["name"] = classList[i];
    obj["age"] = getRandomIntInclusive(10, 11);
    // console.log(obj);
    // push current obj to array
    output.push(obj);
  }
  // returns an array of these objects

  return output;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual) {
  // check to see if each obj has a name and an age 10-11
  if (actual >= low && actual <= high) {
    return true;
  } else return false;
}

function testDecorateClassListWithAges(input, output) {
  // check to see if each obj has a name and an age 10-11
  console.log("input", input);
  console.log("output", output);
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== output[i].name) {
      console.log(`failed. names do not match at index ${i}`);
      return;
    }
    if (assertWithinRange(10, 11, output[i].age) === false) {
      console.log(`failed. age is out of range at index ${i}`);
    }
    // console.log(currentElement.age, currentElement.age === 10);
    // if (currentElement.age !== 10 || currentElement.age !== 11) {
    //   isAge10or11 = false;
    //   break;
    // }
  }

  console.log(`passed`);

  // if so, cl passed
  // otherwise cl `FAILED output {} but got {}`
}
// TESTS CASES

// pass
let inputNamesList = ["aaron", "liz"];
let actual = decorateClassListWithAges(inputNamesList);
let expected = testDecorateClassListWithAges;

var classList = [
  "Joe",
  "Jack",
  "John",
  "Fred",
  "Frank",
  "Barry",
  "Larry",
  "Mary",
  "Harry",
  "Farrell",
  "Susan",
  "Monica",
  "Keira",
  "Caroline",
  "Harriet",
  "Erica",
  "Luann",
  "Cheryl",
  "Beth",
  "Rupa",
  "Linda",
  "Allison",
  "Nancy",
  "Dora",
];

let classListWithAges = decorateClassListWithAges(classList);
testDecorateClassListWithAges(classList, classListWithAges);


// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // split text into array of letters and assign to variable
  if (text === "") return true;
  text = text.toLowerCase();
  let letters = text.split("");
  // create new set
  let mySet1 = new Set();
  // iterate over array of letters and add each to set
  for (let i = 0; i < letters.length; i++) {
    // add each char to a set
    mySet1.add(letters[i]);
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  return mySet1.size === letters.length;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertCheckIsogram(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(
      `FAILED [${testName}] Expected "${expected}" but got "${actual}`
    );
  }
}
// TESTS CASES
let input1 = "abcdefg";
let actual1 = isIsogram(input1);
assertCheckIsogram(
  actual1,
  true,
  "this should return true for an isogram with all lowercase"
);

let input2 = "sToP";
let actual2 = isIsogram(input2);
assertCheckIsogram(
  actual2,
  true,
  "should return true for an isogram with a mixed case"
);

let input3 = "stopped";
let actual3 = isIsogram(input3);
assertCheckIsogram(
  actual3,
  false,
  "should return false for a non-isogram with lowercase "
);

let input4 = "aAqzrj";
let actual4 = isIsogram(input4);
assertCheckIsogram(
  actual4,
  false,
  "should return false for a non-issogram with lower case"
);



var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function renderInventory(inventory) {
  //  create string variable to build on
  let brandInventoryString = "";
  // loop over the array and build the string
  for (let i = 0; i < inventory.length; i++) {
    let currentInventoryElement = inventory[i];
    for (let j = 0; j < currentInventoryElement.shoes.length; j++) {
      let designerShoesString = "";
      let currentShoesObject = currentInventoryElement.shoes[j];
      // console.log(currentElement.name, currentElement.price);
      designerShoesString =
        currentInventoryElement.name +
        ", " +
        // designerShoesString +
        currentShoesObject.name +
        ", " +
        currentShoesObject.price +
        "\n";
      // console.log(designerShoesString);
      brandInventoryString += designerShoesString;
    }
  }
  console.log(brandInventoryString);
  return brandInventoryString;
}

//Create helper functions if needed

// //...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // and so on...

var flatList = "First line\nSecond Line\nThird Line\n";
console.log(flatList);

renderInventory(currentInventory);

// assert function since its scalar we can use as before
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(
      `FAILED [${testName}] Expected [${expected}] but got "${actual}"`
    );
  }
}

// testCases

let expectedTest =
  "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n";

let actualTest = renderInventory(currentInventory);

assertEqual(
  actualTest,
  expectedTest,
  "should make a flat list of the inventory"
);

*/

var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

// should return average cost of all shoes per designer like this:
var expected = {
  designers: [
    {
      name: "Brunello Cucinelli",
      averagePrice: 1025,
    },
    {
      name: "Gucci",
      averagePrice: 850,
    },
  ],
};

function calculateAveragePricePerDesigner(inventory) {
  // create expected variable with an object that has a property "designers" with an empty array as a key
  let expected = { designers: [] };
  // iteratoe over current inventory id
  for (let i = 0; i < inventory.length; i++) {
    // create variable with an empty object to push to the designers array value
    let avgDesignerPriceObj = {};
    let currentElement = inventory[i];
    // assign key and value in the object for designer name
    avgDesignerPriceObj["name"] = currentElement.name;
    // assign key and value in the object for average price
    // call to average price function
    avgDesignerPriceObj["averagePrice"] = averagePrice(currentElement.shoes);
    console.log(avgDesignerPriceObj);
    // push object to designers array value
    expected.designers.push(avgDesignerPriceObj);
  }
  console.log(expected);
  return expected;
  // return expected
}

// Create helper functions if needed
function averagePrice(shoesArray) {
  // create sum variable
  let sum = 0;
  // create count variable
  let count = 0;
  // iterate over shoes array
  for (let j = 0; j < shoesArray.length; j++) {
    let currentShoe = shoesArray[j];
    // add price to sum variable
    sum += currentShoe.price;
    // increment count per addition
    count++;
    // return sum/count
  }
  return sum / count;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(
      `FAILED [${testName}] Expected [${expected}] but got ${actual}`
    );
  }
}
// test cases
let actual1 = JSON.stringify(
  calculateAveragePricePerDesigner(currentInventory)
);
let expected1 = JSON.stringify(expected);

assertEqual(
  actual1,
  expected1,
  "should return average cost of shoes per designer"
);
