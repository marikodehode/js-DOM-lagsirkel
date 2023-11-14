const inputNum = document.querySelector("#input-num")
const circleContainer = document.getElementById("circle-container")

const makeCircles = () => {
    if (inputNum.value < 1 || inputNum.value > 1000) {
        window.alert ("Vennligst skriv inn et tall mellom 1 og 1000")
    
    }else {
        const circles = document.querySelectorAll(".circle")
        for (let circle of circles){
            circle.remove();
        }

        for(let i =0; i < inputNum.value; i++){
            const circle = document.createElement("div");
            circle.classList.add("circle")
            circle.textContent= i +1;
            circle.style.backgroundColor = `#${Math.floor(Math.random()* 16777215).toString(16)}`;
            console.log(circle.style.backgroundColor);
            circleContainer.append(circle);
        }
    }


}