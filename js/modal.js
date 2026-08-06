// Image Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.querySelector('.modal-image');
  const modalClose = document.querySelector('.modal-close');
  
  // Get all clickable images
  const images = document.querySelectorAll('.dial-stage img, .product-image img');
  
  // Open modal on image click
  images.forEach(image => {
    image.addEventListener('click', function() {
      modal.classList.add('active');
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal on close button click
  modalClose.addEventListener('click', closeModal);
  
  // Close modal on background click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
