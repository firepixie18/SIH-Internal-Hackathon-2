const ticketForm = document.getElementById('ticketForm');
const ticketInfo = document.getElementById('ticketInfo');
const downloadTicketBtn = document.getElementById('downloadTicket');

ticketForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const ticketType = document.getElementById('ticketType').value;
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const place = document.getElementById('place').value;

  const ticketDetails = `
    Ticket Type: ${ticketType}
    Full Name: ${fullName}
    Email: ${email}
    Date of Visit: ${date}
    Place to Visit: ${place}
    Price: Rs. 30
  `;

  //ticketInfo.innerHTML = ticketDetails;
  ticketInfo.innerText = ticketDetails.replace(/\n/g, '\n ');
  ticketForm.reset();
});

downloadTicketBtn.addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // ticketImage.src = 'C:\Users\Pc\Downloads\logo.png'; // Replace with the path to your image
  // pdf.addImage(ticketImage, 'png', 15, 40, 40, 40); // Adjust image position and dimensions
  // Strip HTML tags from ticket text

  const ticketText = ticketInfo.innerHTML.replace(/<\/?[^>]+(>|$)/g, '\n');

  
  pdf.text(ticketText, 20, 20);
  pdf.save('ticket.pdf');
});
