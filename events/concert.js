
      document.addEventListener('DOMContentLoaded', function(){
      
      const price = 8000;
      let totalSeats = Number(localStorage.getItem('concertSeats')) || 100;
      
      let ticketCount = Number(localStorage.getItem('tickets')) || 1;

      function bookTickets() {

        const inputTickets = Number(document.getElementById('ticketInput').value);
        ticketCount = inputTickets || ticketCount;

      if (totalSeats <= 0){
        document.getElementById('seatsLeft').textContent = 'Sold Out';
        alert('Sorry, no seats left!');
        return;
      }
      
     if (totalSeats < ticketCount) {
        alert(`Only ${totalSeats} seats left!`);
        return;
      }

      totalSeats -= ticketCount;
      
      let total = ticketCount * price;
      let discount = 0;
      
      if (total > 20000) {
        discount = total * 0.1;
        total -= discount;
      }


      document.getElementById('ticketNumber').textContent = `Tickets: ${ticketCount}`;
      document.getElementById('finalAmount').textContent = `Final Amount: ${total}`;
      document.getElementById('discount').textContent = `Discount: ${discount}`;
      document.getElementById('seatsLeft').textContent = totalSeats > 0 ? `Seats Left: ${totalSeats}`: 'Sold Out';
    }

      document.getElementById('ticketInput').value = ticketCount;

      document.getElementById('bookButton').addEventListener('click', bookTickets);
  });