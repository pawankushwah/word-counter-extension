# Selected Word Counter Chrome Extension

A simple and lightweight Chrome extension that helps you quickly count the number of words in any text you select on a webpage. No need to copy and paste, or open a separate application!

## ✨ Features

* **Real-time Word Count:** Instantly displays the word count of selected text directly on the webpage.

* **Non-intrusive Display:** The word count appears in a small, discreet box in the bottom-right corner of your browser window, fading out when no text is selected.

* **Popup Functionality:** Still offers a traditional popup view (by clicking the extension icon) for the selected word count, if preferred.

* **Lightweight & Fast:** Designed to be efficient and not slow down your browsing experience.

## 🚀 Installation

Follow these steps to install the extension in your Chrome browser:

1. **Download/Clone:**

   * If you downloaded the files, ensure you have the `manifest.json`, `popup.html`, `popup.js`, `content.js`, and an `icons` folder (with `icon16.png`, `icon48.png`, `icon128.png`) in a single directory (e.g., `word_counter_extension`).

   * If you're using Git, clone the repository:

     ```
     git clone <repository_url>
     cd word_counter_extension
     
     
     ```

2. **Open Chrome Extensions Page:**

   * Open your Chrome browser.

   * Type `chrome://extensions` in the address bar and press `Enter`.

3. **Enable Developer Mode:**

   * In the top-right corner of the Extensions page, toggle on the **"Developer mode"** switch.

4. **Load Unpacked Extension:**

   * Click the **"Load unpacked"** button that appears.

   * A file dialog will open. Navigate to and select the folder where you saved your extension files (e.g., `word_counter_extension`).

5. **Extension Loaded:**

   * The "Selected Word Counter" extension should now appear in your list of installed extensions.

6. **Pin the Extension (Optional but Recommended):**

   * To easily access the popup, click the puzzle piece icon (Extensions icon) in your Chrome toolbar.

   * Find "Selected Word Counter" in the dropdown list and click the pin icon next to it. This will make the extension icon visible in your toolbar.

## 💡 Usage

Once installed, using the extension is straightforward:

1. **Navigate to any webpage.**

2. **Select any text** on the page using your mouse.

3. **Observe the word count:** A small, semi-transparent box will appear in the **bottom-right corner** of your browser window, displaying the number of words in your selection.

4. **Deselect text:** The box will automatically fade out and disappear when no text is selected.

5. **Use the Popup (Optional):** If you prefer, you can still click the extension's icon in the toolbar after selecting text to see the word count in a small popup window.

## 📁 File Structure

The extension consists of the following files:
word_counter_extension/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
└── icons/
├── icon16.png
├── icon48.png
└── icon128.png

* **`manifest.json`**: Defines the extension's metadata, permissions, and specifies which scripts run where.

* **`popup.html`**: The HTML for the small window that appears when you click the extension's icon.

* **`popup.js`**: The JavaScript logic for `popup.html`, used to retrieve selected text when the popup is opened.

* **`content.js`**: A content script that runs on every webpage to detect text selection and display the word count in real-time.

* **`icons/`**: Contains the various sizes of the extension icon.

## 🤝 Contributing

Feel free to fork this repository, suggest improvements, or report issues.

**Enjoy counting your words!**