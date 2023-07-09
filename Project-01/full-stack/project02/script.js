// Get DOM elements

const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movies = document.getElementById('movie')
populateUI()


let ticketPrice = +movies.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeats].map(seat=> [...seats].indexOf(seat))
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats',JSON.stringify(seatIndex))

     
     

}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice)

}

function populateUI(){
    const selectedSeats =JSON.parse( localStorage.getItem('selectedSeats'))
    if(selectedSeats !== null && selectedSeats.length > 0 ){
        seats.forEach((seat, index)=> {
            if(selectedSeats.indexOf(index)> -1){
                seat.classList.add('selected')
            }
        })
    };
    const movieIndex = localStorage.getItem('selectedMovieIndex')
    if(movieIndex !== null){
        movies.selectedIndex = movieIndex;
    }
}

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')){

        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})
movies.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
     setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
})


updateSelectedCount();