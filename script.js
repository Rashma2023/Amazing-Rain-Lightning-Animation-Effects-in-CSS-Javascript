function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div'); // Corrected 'documet' to 'document'
    
    // Randomize the raindrop position and size
    let left = Math.floor(Math.random() * 310); // Random position within the cloud's width
    let width = Math.random() * 5; // Random width for raindrop

    e.classList.add('drop');
    e.style.left = left + 'px'; // Position raindrop horizontally
    e.style.width = width + 'px'; // Randomize the raindrop's width

    // Append raindrop to the cloud
    cloud.appendChild(e);

    // Remove raindrop after animation completes
    setTimeout(function() {
        cloud.removeChild(e);
    }, 2000);
}

// Call rain function every 20 milliseconds to create continuous raindrops
setInterval(function() {
    rain();
}, 20);