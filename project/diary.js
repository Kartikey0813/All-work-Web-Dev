// diary.js
let boldClicked = false;
let underlineClicked = false;

function addDiaryEntry() {
    var diaryEntry = document.getElementById("diary-entry");
    var entryText = diaryEntry.value;

    if (entryText.trim() !== "") {
        var diarySection = document.getElementById("diary");
        var newDiaryEntry = document.createElement("div");
        newDiaryEntry.innerHTML = `
            <div id="text-edit-buttons">
                <button id="bold-btn" onclick="toggleBold()">B</button>
                <button id="underline-btn" onclick="toggleUnderline()">U</button>
                <label for="fontsize-select">Font Size:</label>
                <select id="fontsize-select" onchange="changeFontSize()">
                    <option value="14px">Small</option>
                    <option value="16px" selected>Normal</option>
                    <option value="18px">Large</option>
                </select>
                <label for="color-input">Text Color:</label>
                <input type="color" id="color-input" onchange="changeTextColor()" value="#3498db">
            </div>
            <p>${entryText}</p>
            <button onclick="moveToPastEntries(this)">Move to Past Entries</button>`;
        diarySection.appendChild(newDiaryEntry);

        diaryEntry.value = "";
        resetButtons();
    }
}

function moveToPastEntries(button) {
    var pastEntriesSection = document.getElementById("past-entries");
    var entryToMove = button.parentElement;
    entryToMove.querySelector('button').remove(); // Remove the "Move to Past Entries" button
    pastEntriesSection.appendChild(entryToMove);
}



function resetButtons() {
    boldClicked = false;
    underlineClicked = false;
}
