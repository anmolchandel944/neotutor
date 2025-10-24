



  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });









// about us page code here 
// Animate cards on scroll
const cards = document.querySelectorAll('.about-card');
const courses = document.querySelectorAll('.course-card');
 
const pricingCards = document.querySelectorAll('.pricing-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));









// payment section page code here 

document.getElementById('paymentForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const { jsPDF } = window.jspdf;

  const studentName = document.getElementById('studentName').value.trim();
  const mentorId = document.getElementById('mentorId').value.trim();
  const upi = document.getElementById('upi').value.trim();
  const amount = document.getElementById('amount').value.trim();

  if (!studentName || !mentorId || !upi || !amount) {
    alert("Please fill all the details correctly!");
    return;
  }

  // Simulated UPI validation (mock)
  if (!upi.includes('@')) {
    alert("Invalid UPI ID! Please enter a valid UPI like example@upi");
    return;
  }

  alert("UPI Verified ✅\nRedirecting to your payment app...");

  // Simulate payment completion delay
  setTimeout(() => {
    alert("Payment Successful 🎉\nGenerating your receipt...");

    const transactionId = "TXN" + Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString();

    // Create PDF
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("NeoTutor Payment Receipt", 60, 20);
    pdf.setFontSize(12);
    pdf.text(`Student Name: ${studentName}`, 20, 40);
    pdf.text(`Mentor ID: ${mentorId}`, 20, 50);
    pdf.text(`UPI ID: ${upi}`, 20, 60);
    pdf.text(`Amount Paid: ₹${amount}`, 20, 70);
    pdf.text(`Transaction ID: ${transactionId}`, 20, 80);
    pdf.text(`Date & Time: ${date}`, 20, 90);
    pdf.text("Mentor Assigned: Confirmed", 20, 100);
    pdf.text("Company: NeoTutor Learning Pvt. Ltd.", 20, 115);
    pdf.text("Thank you for your payment!", 20, 130);

    pdf.save(`NeoTutor_Payment_${transactionId}.pdf`);
  }, 2000);
});


