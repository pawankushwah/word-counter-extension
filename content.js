// content.js - This script runs on every page to detect text selection and display word count.

/**
 * Counts the number of words in a given string.
 * Words are defined as sequences of non-whitespace characters.
 * @param {string} text - The input string.
 * @returns {number} The number of words.
 */
function countWords(text) {
    // Trim leading/trailing whitespace and split by one or more whitespace characters.
    // Filter out any empty strings that might result from multiple spaces.
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Create a div element to display the word count
let wordCountDisplayElement = document.createElement('div');
wordCountDisplayElement.id = 'selectedWordCountDisplay';
// Apply inline styles for a clean, non-intrusive look
Object.assign(wordCountDisplayElement.style, {
    position: 'fixed', // Fixed position relative to the viewport
    bottom: '20px',    // 20px from the bottom
    right: '20px',     // 20px from the right
    backgroundColor: '#4338ca', // Darker indigo background
    color: '#ffffff',          // White text
    padding: '8px 15px',       // Padding around the text
    borderRadius: '8px',       // Rounded corners
    fontSize: '14px',          // Font size
    fontWeight: '600',         // Semi-bold font
    zIndex: '99999',           // High z-index to ensure it's on top of other content
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Subtle shadow
    display: 'none',           // Initially hidden
    pointerEvents: 'none',     // Allow clicks to pass through to elements below
    transition: 'opacity 0.2s ease-in-out', // Smooth fade transition
    opacity: '0'               // Start with 0 opacity for fade-in
});
document.body.appendChild(wordCountDisplayElement); // Add the element to the body

/**
 * Updates the word count display based on the current text selection.
 * Shows the display if text is selected, hides it otherwise.
 */
function updateWordCountDisplay() {
    const selectedText = window.getSelection().toString();
    const wordCount = countWords(selectedText);

    if (wordCount > 0) {
        wordCountDisplayElement.textContent = `Words: ${wordCount}`;
        wordCountDisplayElement.style.display = 'block'; // Make visible
        // Trigger reflow to ensure transition works
        wordCountDisplayElement.offsetWidth;
        wordCountDisplayElement.style.opacity = '1'; // Fade in
    } else {
        wordCountDisplayElement.style.opacity = '0'; // Fade out
        // Hide after transition completes to avoid occupying space
        setTimeout(() => {
            wordCountDisplayElement.style.display = 'none';
        }, 200); // Match transition duration
    }
}

// Listen for 'selectionchange' event on the document.
// This event fires whenever the user selects or deselects text.
document.addEventListener('selectionchange', updateWordCountDisplay);

// Optional: Also listen for 'mouseup' to ensure update if selection is made by dragging mouse
// and released, which might not always trigger selectionchange immediately on some browsers/contexts.
document.addEventListener('mouseup', updateWordCountDisplay);

// Initial call to set the display state when the script loads
updateWordCountDisplay();