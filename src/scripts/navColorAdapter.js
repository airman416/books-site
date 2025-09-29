/**
 * Navigation Initials Color Adapter
 * Dynamically adjusts the navigation initials color based on the background behind them
 * to ensure optimal readability across different page sections.
 */

function getRgbFromImageAtPoint(imgElement, clientX, clientY) {
  try {
    const rect = imgElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;

    const scaleX = imgElement.naturalWidth / rect.width;
    const scaleY = imgElement.naturalHeight / rect.height;

    const sx = Math.floor((clientX - rect.left) * scaleX);
    const sy = Math.floor((clientY - rect.top) * scaleY);

    if (sx < 0 || sy < 0 || sx >= imgElement.naturalWidth || sy >= imgElement.naturalHeight) {
      return null;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Draw a 1x1 region from the image at the sampled coordinates
    ctx.drawImage(imgElement, sx, sy, 1, 1, 0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    const [r, g, b, a] = data;
    if (a === 0) return null; // fully transparent
    return `rgb(${r}, ${g}, ${b})`;
  } catch (_) {
    // Likely a CORS-tainted canvas or other drawing issue
    return null;
  }
}

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
  const elementsBelow = document.elementsFromPoint(centerX, centerY) || [];
  navContainer.style.visibility = originalVisibility;
  
  if (!elementBelow) {
    initials.classList.add('text-black');
    initials.classList.remove('text-white');
    return;
  }
  
  // Try to sample from images first (covers dark thumbnails and images)
  let bgColor = null;
  for (let i = 0; i < elementsBelow.length; i++) {
    const el = elementsBelow[i];
    if (el instanceof HTMLImageElement) {
      const imgColor = getRgbFromImageAtPoint(el, centerX, centerY);
      if (imgColor) {
        bgColor = imgColor;
        break;
      }
    }
  }
  
  // If no image color could be determined, traverse up for solid background colors
  let element = elementBelow;
  let attempts = 0;
  
  // Traverse up the DOM tree to find a non-transparent background
  while (!bgColor && element && attempts < 10) {
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
