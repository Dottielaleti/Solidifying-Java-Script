document.addEventListener('DOMContentLoaded', function () {

  const pricePerTicket = 8000;

  let totalSeats = Number(localStorage.getItem('concertSeats')) || 100;
  const ticketInput = document.getElementById('ticketInput');
  const ticketNumber = document.getElementById('ticketNumber');
  const finalAmount = document.getElementById('finalAmount');
  const discountDisplay = document.getElementById('discount');
  const seatsLeftDisplay = document.getElementById('seatsLeft');

  const mpesaAmount = document.getElementById('mpesaAmount');
  const paypalAmount = document.getElementById('paypalAmount');
  const equityAmount = document.getElementById('equityAmount');

  const confirmButton = document.getElementById('confirmButton');

  const eventName = document.body.getAttribute('data-event') || 'Event';

  
  let ticketCount = Number(localStorage.getItem('tickets')) || 1;
  ticketInput.textContent = ticketCount;

  
  let seatsLeftForDisplay = totalSeats - ticketCount;
  if (seatsLeftForDisplay < 0) seatsLeftForDisplay = 0;

  
  let total = ticketCount * pricePerTicket;
  let discount = 0;
  if (total > 20000) {
    discount = total * 0.1;
    total -= discount;
  }

  ticketNumber.textContent = `Tickets: ${ticketCount}`;
  finalAmount.textContent = `Final Amount: ${total}`;
  discountDisplay.textContent = `Discount: ${discount}`;
  seatsLeftDisplay.textContent = seatsLeftForDisplay > 0 ? `Seats Left: ${seatsLeftForDisplay}` : 'Sold Out';

  mpesaAmount.textContent = total;
  paypalAmount.textContent = total;
  equityAmount.textContent = total;


  confirmButton.addEventListener('click', function () {
    if(ticketCount > totalSeats){
      alert(`Only ${totalSeats} seats available!`);
      return;
    }

    localStorage.setItem('ticketEvent', eventName);
    localStorage.setItem('ticketCount', ticketCount);
    localStorage.setItem('ticketAmount', total);

    totalSeats -= ticketCount;
    localStorage.setItem('concertSeats', totalSeats);

    location.href = 'ticket.html';
  });
});
