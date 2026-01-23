document.addEventListener('DOMContentLoaded', () => {
  const ticketInput = document.getElementById('ticketInput');
  const finalAmount = document.getElementById('finalAmount');
  const ticketNumber = document.getElementById('ticketNumber');
});

const mpesaAmount = document.getElementById('mpesaAmount');
const equityAmount = document.getElementById('equityAmount');
const paypalAmount = document.getElementById('paypalAmount');

const pricePerTicket = 8000;

const updateAmounts = () => {
  const ticketCount = Number(ticketInput.value) || 1;
  let total = ticketCount * pricePerTicket;
  let discount = 0;

  if (total > 20000) {
    discount = total * 0.1;
    total -= discount;
  }

  finalAmount.textContent = `Final Amount: ${total}`;
  ticketNumber.textContent = `Tickets: ${ticketCount}`;

  mpesaAmount.textContent = total;
  equityAmount.textContent = total;
  paypalAmount.textContent = total;
};

ticketInput.addEventListener('input', updateAmounts);
updateAmounts();
  