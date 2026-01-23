document.addEventListener('DOMContentLoaded', () => {
  const eventName = localStorage.getItem('ticketEvent') || 'Event';
  const ticketCount = Number(localStorage.getItem('ticketCount')) || 1;
  const totalAmount = Number(localStorage.getItem('ticketAmount')) || 0;

  document.getElementById('ticketEventName').textContent = `Event: ${eventName}`;
  document.getElementById('ticketNumbers').textContent = `Number of Tickets: ${ticketCount}`;
  document.getElementById('totalAmountPaid').textContent = `Total Amount Paid: KES ${totalAmount}`;

  const downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', () => {
    const content = `
EVENT JOY VENTURES
Event: ${eventName}
Number of Tickets: ${ticketCount}
Total Amount Paid: KES ${totalAmount}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'my_ticket.txt';
    link.click();
  });
});
