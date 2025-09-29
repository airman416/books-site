/**
 * Navigation Initials Color Adapter
 * Dynamically adjusts the navigation initials color based on the background behind them
 * to ensure optimal readability across different page sections.
 */

function updateInitialsColor() {
  const initials = document.getElementById('nav-initials');
  if (!initials) return;
  
  // Get the parent container (the fixed div)
  const navContainer = initials.parentElement;
  
  // Get the element's position
  const rect = initials.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Temporarily hide the entire nav container to get element below
  const originalVisibility = navContainer.style.visibility;
  navContainer.style.visibility = 'hidden';
  const elementBelow = document.elementFromPoint(centerX, centerY);
  navContainer.style.visibility = originalVisibility;
  
  if (!elementBelow) {
    initials.classList.add('text-black');
    initials.classList.remove('text-white');
    return;
  }
  
  // Get the computed background color of the element
  let element = elementBelow;
  let bgColor = null;
  let attempts = 0;
  
  // Traverse up the DOM tree to find a non-transparent background
  while (element && attempts < 10) {
    const style = window.getComputedStyle(element);
    const bg = style.backgroundColor;
    
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      bgColor = bg;
      break;
    }
    
    element = element.parentElement;
    attempts++;
  }
  
  if (!bgColor) {
    // Default to white background if we can't determine
    initials.classList.add('text-black');
    initials.classList.remove('text-white');
    return;
  }
  
  // Parse RGB values
  const rgb = bgColor.match(/\d+/g);
  if (!rgb || rgb.length < 3) {
    initials.classList.add('text-black');
    initials.classList.remove('text-white');
    return;
  }
  
  // Calculate relative luminance using standard formula
  const r = parseInt(rgb[0]) / 255;
  const g = parseInt(rgb[1]) / 255;
  const b = parseInt(rgb[2]) / 255;
  
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
  // If background is dark (luminance < 0.65), use white text
  // Made more sensitive to catch darker backgrounds
  if (luminance < 0.65) {
    initials.classList.remove('text-black');
    initials.classList.add('text-white');
  } else {
    initials.classList.add('text-black');
    initials.classList.remove('text-white');
  }
}

// Initialize the color adapter
function initNavColorAdapter() {
  // Update on scroll - no throttling for instant response
  window.addEventListener('scroll', updateInitialsColor, { passive: true });
  
  // Update on resize
  window.addEventListener('resize', updateInitialsColor);
  
  // Update on page load
  window.addEventListener('load', updateInitialsColor);
  
  // Update immediately when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateInitialsColor);
  } else {
    updateInitialsColor();
  }
}

// Auto-initialize
initNavColorAdapter();
