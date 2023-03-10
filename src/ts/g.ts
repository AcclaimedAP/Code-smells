/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number { // ✅
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump
  );

}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string { // ✅
  if (student.name == "Sebastian") {
    student.passed = student.handedInOnTime;
  } else {
    student.passed = false;
  }
  return student.passed ? "VG" : "IG";
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temp {
  constructor(
    public name: string,
    public time: Date,
    public temperature: number
  ) { }
}

function averageWeeklyTemperature(locations: Temp[], targetLocation: String): number { // ✅
  let averageTemperature = 0;
  const DAYS_IN_A_WEEK = 7;
  const MILLISECONDS_IN_A_DAY = 86400000;
  const WEEK = MILLISECONDS_IN_A_DAY * DAYS_IN_A_WEEK;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].name === targetLocation) {
      if (locations[i].time.getTime() > Date.now() - WEEK) {
        averageTemperature += locations[i].temperature;
      }
    }
  }

  return averageTemperature / DAYS_IN_A_WEEK;
}



/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */
interface IProduct {
  name: string,
  price: number,
  amount: number,
  description: string,
  image: string,
  parent: HTMLElement
}
function showProduct(product: IProduct) { // ✅
  let container = document.createElement("div");
  let title = document.createElement("h4");
  let pris = document.createElement("strong");
  let imageTag = document.createElement("img");

  title.innerHTML = product.name;
  pris.innerHTML = product.price.toString();
  imageTag.src = product.image;

  container.appendChild(title);
  container.appendChild(imageTag);
  container.appendChild(pris);
  product.parent.appendChild(container);
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) { // ✅
  let listOfStudents = document.querySelector("ul#passedstudents");
  for (const student of students) {
    let container = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    container.appendChild(checkbox);
    listOfStudents?.appendChild(container);
    checkbox.checked = student.handedInOnTime;
  }
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
let result = ["Lorem", "ipsum", "dolor", "sit", "amet"]; // ✅
function concatenateStrings(result: String[]) {
  return result.join(" ");

}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/
interface IUser { // ✅
  name: string,
  birthday: Date,
  email: string,
  password: string
}

function createUser(user: IUser) {
  // Validation

  let ageDiff = Date.now() - user.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}
