//your JS code here. If required.
const displayCounterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');



let counter = 0;
incrementBtn.addEventListener('click',()=>{
	// let counter = 0;
    alert(counter)
    counter++
    displayCounterValue.textContent = counter

    

});

