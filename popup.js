// Get a reference to the DOM element where the word count will be displayed
const wordCountDisplay = document.getElementById('wordCountDisplay');

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

// This function runs when the popup HTML is fully loaded.
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Query for the active tab in the current window.
        // `active` means the tab is currently visible.
        // `currentWindow` means it's in the window the user is currently focused on.
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // Check if a tab was found and has an ID.
        if (tab && tab.id) {
            // Execute the content.js script in the context of the active tab.
            // The `func` property specifies the function to execute.
            // `args` can be used to pass arguments to the function (though not needed here).
            // The result of the executed function will be returned in the `results` array.
            const results = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => {
                    // This function runs in the context of the content script (on the webpage).
                    // It gets the currently selected text using window.getSelection().
                    return window.getSelection().toString();
                }
            });

            // Check if results were returned and contain the selected text.
            if (results && results[0] && typeof results[0].result === 'string') {
                const selectedText = results[0].result;
                const wordCount = countWords(selectedText);
                wordCountDisplay.textContent = `Selected words: ${wordCount}`;
            } else {
                wordCountDisplay.textContent = 'No text selected.';
            }
        } else {
            wordCountDisplay.textContent = 'Could not get active tab.';
        }
    } catch (error) {
        // Log any errors that occur during the process.
        console.error('Error getting selected text:', error);
        wordCountDisplay.textContent = 'Error: Could not count words.';
    }
});