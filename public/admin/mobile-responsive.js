// Mobile responsiveness script for Decap CMS
// Handles mobile sidebar toggle and responsive behavior

document.addEventListener('DOMContentLoaded', function() {
  // Add mobile sidebar toggle functionality
  function addMobileToggle() {
    const sidebar = document.querySelector('.nc-sidebar');
    const main = document.querySelector('.nc-main');
    
    if (!sidebar || !main) {
      // Retry after a short delay if elements aren't ready
      setTimeout(addMobileToggle, 500);
      return;
    }
    
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'nc-sidebarToggle';
    toggleButton.innerHTML = '☰ Menu';
    toggleButton.style.cssText = `
      display: none;
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1001;
      background: #007cba;
      color: white;
      border: none;
      padding: 12px 16px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nc-sidebarOverlay';
    
    document.body.appendChild(toggleButton);
    document.body.appendChild(overlay);
    
    // Toggle functionality
    function toggleSidebar() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    }
    
    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
    
    toggleButton.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);
    
    // Close sidebar when clicking outside on mobile
    if (window.innerWidth <= 768) {
      main.addEventListener('click', closeSidebar);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        closeSidebar();
        toggleButton.style.display = 'none';
      } else {
        toggleButton.style.display = 'block';
      }
    });
    
    // Initial state
    if (window.innerWidth <= 768) {
      toggleButton.style.display = 'block';
    }
  }
  
  // Start the mobile toggle setup
  addMobileToggle();
});
