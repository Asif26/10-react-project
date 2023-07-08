// Get The Dom Elements

const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect =  document.getElementById('movie')


let ticketPrice = movieSelect.value;



function updateSelectedCount (){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    console.log(selectedSeatsCount)
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Event Listneres 
//1. Event  listner for conatiner
container.addEventListener('click',  e => {
 if (e.target.classList.contains('seat') && 
 !e.target.classList.contains('occupied')){
     e.target.classList.toggle('selected')
     updateSelectedCount();
}
})

//2. Event  listner for movie select

movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    updateSelectedCount()
})
