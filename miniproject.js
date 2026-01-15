const bookButton = document.getElementById('bookButton');
const eventSelect = document.getElementById('event');
const ticketCountInput = document.getElementById('ticketCount');

bookButton.addEventListener('click', function() {
  const selectedPage = eventSelect.value;
  const tickets = Number(ticketCountInput.value);

  if(tickets < 1){
    alert('please enter atleast 1 ticket');
    return;
  }

  localStorage.setItem('tickets', tickets);

  location.href = selectedPage;
});