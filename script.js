/*
Madrasha Namae : Noyani Sreebordi HafeziMadrasha
Madrasha Student : 190;
There are 4 Class;
1st Class Price per student is 200 total student 40
2nd class price per student is 250 total student 55
3nd class price [er student is 300  total student 60
and 4 is Hafizi per student price is 300 total student  total students 35;

Need to find total amount to monthly fee

*/

const madrashaName = "Noyani Sreebordi HafeziMadrasha";

// Students
const students = 190;
const firstStudents = 40;
const secuntStudent = 55;
const thrdStudent = 60;
const hafiziStudent = 35;

// Student fee

const firstFee = 200;
const secuntFee = 250;
const thrdFee = 300;
const hafiziFee = 300;

function feeCalculation(fstu, sestu, thstu, hafistu) {
  const firstMonthFee = fstu * firstFee;
  const secuMonthFee = sestu * secuntFee;
  const thrdMonthFee = thstu * thrdFee;
  const hafiziMonthFee = hafistu * hafiziFee;
  const totalMonthlyFee =
    firstMonthFee + secuMonthFee + thrdMonthFee + hafiziMonthFee;
  const totalFeeWithInfo = `Madrasha Name : ${madrashaName} First Class Student ${fstu} Per Month Fee ${firstFee} Total Monthly Fee for First Class ${firstMonthFee}; \n \n \nSecunt Class Student ${sestu} Per Month Fee ${secuntFee} Total Monthly Fee for First Class ${secuMonthFee}; \n \n \nThirsd Class Student ${thstu} Per Month Fee ${thrdFee} Total Monthly Fee for First Class ${thrdMonthFee};  \n \n \nHafizi Class Student ${hafistu} Per Month Fee ${hafiziFee} Total Monthly Fee for First Class ${hafiziMonthFee}; \n \n============================================== Tota Fee For Whole Month :::: ${totalMonthlyFee}`;

  return totalFeeWithInfo;
}

// console.log(feeCalculation(40, 55, 60, 35));

console.log(40 + 55 + 60 - 190);

const x = 10;
const y = 5;

function sum(x, y) {
  const total = x + y;
  return multi(total);
}

function multi(a) {
  const result = a * 2;
  return result;
}

sum(x, y);

const userName = "Rakibul";

function first() {
  const password = "#R21&*)";

  if (password == "#R21&*)") {
    const NID = true;
    var passport = true;
    console.log(NID);
  }

  function second() {
    const job = "Programmer";
    console.log(`${userName} and Password ${password} and ${job}`);
  }
  return second();
}

first();

// This keyword
/*
const persons = {
  name: "Rakibul",
  barthYear: 2001,
  person: ["Nahid", "new", "tuemi"],
  loopArr: function () {
    this.person.forEach(function (item) {
      console.log(item);
    });
  },
  friend: {
    firstFriend: "Ruman",
    girldFriend: "Wife",

    concat: function () {
      // console.log("This is concat");
      return this.firstFriend;
    },
  },

  age() {
    console.log(this);
  },
};

const newLocal = ["Rakiub", "new", "tuemi"];
const persons1 = newLocal;
persons1.forEach(function (index, item) {
  console.log(index);
});
console.log(persons.friend.concat());

persons.loopArr();

console.log("-----------------------------------");

for (let i in persons1) {
  console.log(persons1[i]);
}

console.log("-----------------------------------");

for (let i in persons.person) {
  console.log(persons.person[i]);
}

*/
// const pappers = [
//   "Bashundara",
//   "News Papper",
//   {
//     userName: "Rakibul Hasan",
//     age: 24,
//   },
// ];

// // const pappers2 = [...pappers];
// // pappers2.push("Indian");
// console.log(pappers);
// // console.log(pappers2);

// pappers[2].barthYears = 2001;
// // pappers[2].machine = machine;
// console.log(pappers[2]);
// // pappers[2].machine();

// const machines = function () {
//   const fsArr = {
//     myName: "Tohin",
//     age: 24,
//     barthCal: () => {
//       // return 2022 - this.barthYears;
//       return this;
//     },
//   };
//   return fsArr;
//   // return 2022 - this.barthYears;
// };
// pappers[2].machine = machines;
// // console.log();
// // pappers[2].machine().fsArr;
// const fsar = pappers[2].machine();
// fsar.barthYears = 1980;
// console.log(fsar.barthCal());

// const li = document.querySelectorAll("li");
// console.log(li);
// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "red";
// }
// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "green";
// }
// li.forEach(function (index) {
//   index.style.color = "red";
// });
// li.style.color = "red";

//Get Element by Id / fast
// const container = document.getElementById("conatainer");
// console.log(container);

//getElementByClassname()
// const country = document.getElementsByClassName("country");
// console.log(country);

// //getElementByTagName
// const input = document.getElementsByTagName("input");
// console.log(input);

// //querySelector -- most of the cases
// const title = document.querySelector("li");
// console.log(title);

// //querySelectorAll -- most of the cases
// const title2 = document.querySelectorAll("li");
// console.log(title2);

// // 2. Style Element
// const heading = document.getElementById("main-heading");

// heading.style.color = "red";
// heading.style.backgroundColor = "green";
// heading.style.padding = "15px";
// heading.style.borderRadius = "10px";

// const countryColor = document.querySelectorAll("li");
// countryColor.forEach(function (i) {
//   i.style.color = "red";
// });

// // 3 Create Element
// const container = document.querySelectorAll(".conatainer");
// const container2 = document.getElementsByClassName("conatainer2");
// const ul = document.querySelector("ul");
// const heading = document.getElementById("main-heading");

// // console.log(ul.innerText);
// const li = document.createElement("li");
// li.textContent = "Japan";
// li.classList.add("country");

// //append
// // ul.append(li);
// // ul.appendChild(li);

// //insertAdjacentElement
// // AfterBegin
// // AfterEnd
// // BeforeBegin
// //BeforeEnd
// ul.insertAdjacentElement("beforeend", li);

// const newEle = container[0].innerHTML;
// // clone arry
// const newArr = [...container];

// //insert arry into html
// container2[0].innerHTML = `${newEle}`;

// console.log(newArr);

//attribute
// set Attribute
// heading.setAttribute("class", "class_added");
// heading.setAttribute("width", "150px");
// heading.setAttribute("id", "newId");
// // get Attribute
// console.log(heading.getAttribute("width"));
// //remove attribute
// heading.removeAttribute("class");
// //classLis
// heading.classList.add("mainHeading", "multi");
// heading.classList.remove("multi");
// // heading.remove();

// // 4 Node Traverse
// const title = document.getElementById("main-heading");
// const ul = document.querySelector("ul");
// console.log(title.parentElement);
// console.log(title.parentNode);
// console.log(title.childNodes);
// console.log(title.children);
// console.log(ul.children);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(title.nextSibling);
// console.log(title.nextElementSibling);
// console.log(title.previoussibling);

// 5/ Even Handlers
const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(){
	if(input.value !== ''){
		const li = document.createElement("li");
	li.classList.add("country");
	li.textContent = input.value;
	ul.append(li);
	input.value = "";
	
	}else{
	const span = document.createElement("span");
	span.textContent = "Please Fil Up this input filed";
	span.style.display = "block";
	span.style.color = "red";
	input.insertAdjacentElement("afterend", span);
	}
});
