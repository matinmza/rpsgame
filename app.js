// class
class HTML {
  massageResult(massage) {
    let placeResultShow = document.querySelector(".result");
    if (placeResultShow.firstChild) {
        placeResultShow.firstChild.remove()
    }
    // creat p tag
    let pTag = document.createElement("p");
    pTag.textContent = massage;
    placeResultShow.appendChild(pTag)
  }
}

// variable
let choices_div = document.querySelector(".choices");
let html = new HTML();
let userScore = 0;
let computerScore = 0;
let user_div = document.querySelector("#user-score");
let computer_div = document.querySelector("#comp-score");
// event listner
eventlister();
function eventlister() {
  choices_div.addEventListener("click", pressors);
}
// functions
function pressors(e) {
  if (e.target.parentElement.classList.contains("choice")) {
    let numberCamputer = Math.random() * 10;
    let computer;
    // random choise from px
    if (numberCamputer <= 3.33333333333333333) {
      computer = "r";
    } else if (
      3.33333333333333333 < numberCamputer &&
      numberCamputer <= 6.66666666666666666
    ) {
      computer = "p";
    } else if (6.66666666666666666 < numberCamputer) {
      computer = "s";
    }
    pressorsResult(computer, e.target.parentElement.id);
  }
}
function pressorsResult(computer, user) {
  // user choise rock
  if (user == "r") {
    if (computer == "r") {
      html.massageResult(
        "شما سنگ را انتخاب کردید و کامپیوتر نیز  سنگ را انتخاب کرد مساوی!!!"
      );
    } else if (computer == "p") {
      computerScore += 1;
      html.massageResult(
        "شما سنگ را انتخاب کردید و کامپیوتر  کاغذ را انتخاب کرد باختید!!!"
      );
    } else if (computer == "s") {
      userScore += 1;
      html.massageResult(
        "شما سنگ را انتخاب کردید و کامپیوتر  قیچی را انتخاب کرد بردید!!!"
      );
    }
  }
  // user choise paper
  else if (user == "p") {
    if (computer == "r") {
      userScore += 1;
      html.massageResult(
        "شما کاغذ را انتخاب کردید و کامپیوتر   سنگ را انتخاب کرد بردید!!!"
      );
    } else if (computer == "p") {
      html.massageResult(
        "شما کاغذ را انتخاب کردید و کامپیوتر نیز  کاغذ را انتخاب کرد مساوی!!!"
      );
    } else if (computer == "s") {
      computerScore += 1;
      html.massageResult(
        "شما کاغذ را انتخاب کردید و کامپیوتر  قیچی را انتخاب کرد باختید!!!"
      );
    }
  } else if (user == "s") {
    if (computer == "r") {
      computerScore += 1;
      html.massageResult(
        "شما قیچی را انتخاب کردید و کامپیوتر   سنگ را انتخاب کرد باختید!!!"
      );
    } else if (computer == "p") {
      userScore += 1;
      html.massageResult(
        "شما قیچی را انتخاب کردید و کامپیوتر کاغذ را انتخاب کرد بردید!!!"
      );
    } else if (computer == "s") {
      html.massageResult(
        "شما قیچی را انتخاب کردید و کامپیوتر نیز قیچی را انتخاب کرد مساوی!!!"
      );
    }
  }
  computer_div.innerHTML = computerScore;
  user_div.innerHTML = userScore;
}
