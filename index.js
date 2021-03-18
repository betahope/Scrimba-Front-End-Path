let entryForm = document.getElementById("entryForm");
let entriesSection = document.querySelector("#entries");
let entryTextbox = document.querySelector(".entry-textbox");
let entriesNav = document.querySelector(".entries-nav");

function addEntryToDom(event) {
 event.preventDefault();
 let entryDiv = document.createElement("div");
 entryDiv.classList.add("single-entry");
 entryDiv.innerText = entryTextbox.value;
 entryDiv.style.display = "none";
 entriesSection.appendChild(entryDiv);
 entryTextbox.value = "";

 let displayEntryButton = document.createElement("button");
 displayEntryButton.className = "display-entry-button";
 displayEntryButton.innerText = 1;
 entriesNav.appendChild(displayEntryButton);
}

entryForm.addEventListener("submit", addEntryToDom)