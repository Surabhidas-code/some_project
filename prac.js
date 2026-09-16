// const input = document.querySelector('.form input');
// const addBtn = document.querySelector('.form button');
// const listContainer = document.createElement('div');
// document.querySelector('.desc').before(listContainer);
// addBtn.addEventListener('click', function(){
//     const habitName = input.ariaValueMax;
//     if(habitName === '')
//         return;
//     const newHabit = document.createElement('p');
//     newHabit.textContent = habitName;
//     newHabit.style.color = 'white';
//     listContainer.appendChild(newHabit);
//     input.value = '';
// });
let secondHabit = document.querySelector(".habit");
let button = document.querySelector("button");
let newDiv = document.createElement('div');
newDiv.style.cssText = "width: 70%; height: 2rem; background-color: #7CFF00; margin: 5px; border-radius: 12px";
button.addEventListener("click", (e) => {
    let habit = document.querySelector("input").value;
    newDiv.innerHTML = habit;
    secondHabit.appendChild(newDiv);
});