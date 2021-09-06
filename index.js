let a = document.querySelectorAll("li");
console.log(a);
let change = document.querySelector(".mid");
let change2 = document.querySelector(".bot");
for (item of a) {
  console.log(item);
  item.addEventListener("click", (e) => {
    change.innerHTML = "";
    change2.innerHTML = "";
    let b = e.target.innerHTML;
    console.log(b);
    let choice = Math.round(Math.random() * 2 + 1);
    console.log(choice);
    if (b == "ROCK" && choice == 2) {
      change.innerHTML = "COMPUTER";
      console.log("YES");
      change2.innerHTML = "PAPER";
      setInterval(1000);
    }
    if (b == "ROCK" && choice == 1) {
      change.innerHTML = "KOI NI HAI";
      console.log("YES");
      change2.innerHTML = "ROCK";
    }
    if (b == "ROCK" && choice == 3) {
      change.innerHTML = "USER";
      console.log("YES");
      change2.innerHTML = "SCISSORS";
    }
    if (b == "PAPER" && choice == 1) {
      change.innerHTML = "USER";
      console.log("YES");
      change2.innerHTML = "ROCK";
    }
    if (b == "PAPER" && choice == 2) {
      change.innerHTML = "KOI NI HAI";
      console.log("YES");
      change2.innerHTML = "PAPER";
    }
    if (b == "PAPER" && choice == 3) {
      change.innerHTML = "COMPUTER";
      console.log("YES");
      change2.innerHTML = "SCISSORS";
    }
    if (b == "SCISSORS" && choice == 1) {
      change.innerHTML = "COMPUTER";
      console.log("YES");
      change2.innerHTML = "ROCK";
    }
    if (b == "SCISSORS" && choice == 2) {
      change.innerHTML = "USER";
      console.log("YES");
      change2.innerHTML = "PAPER";
      
    }
    if (b == "SCISSORS" && choice == 3) {
      change.innerHTML = "KOI NI HAI";
      console.log("YES");
      change2.innerHTML = "SCISSORS";
    }
  });
}
