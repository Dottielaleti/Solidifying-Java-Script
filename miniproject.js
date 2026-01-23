document.addEventListener("DOMContentLoaded", function() {
  const bookButton = document.getElementById('bookButton');
const eventSelect = document.getElementById('event');
const ticketCountInput = document.getElementById('ticketCount');

let remainingSeats = Number(localStorage.getItem('totalSeats')) || 100;

ticketCountInput.addEventListener('input', () => {
  if (ticketCountInput.value < 0) {
    ticketCountInput.value = 0;
  }
  if(ticketCountInput.value > remainingSeats) {
    ticketCountInput.value = remainingSeats;
  }
});

bookButton.addEventListener('click', function() {
  const tickets = Number(ticketCountInput.value);

  if(tickets < 1){
    alert('please enter atleast 1 ticket');
    return;
  }

  if(tickets > remainingSeats){
    alert(`Only ${remainingSeats} seats available!`);
    return;
  }

  localStorage.setItem('tickets', tickets);

  remainingSeats -= tickets;
  localStorage.setItem('totalSeats', remainingSeats);

  ticketCountInput.value = 0;

  location.href = eventSelect.value;
});
});