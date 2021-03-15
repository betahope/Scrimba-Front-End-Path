let entryForm = document.getElementById("entryForm");
let entriesSection = document.getElementById("entries");
let entryTextbox = document.getElementsByClassName("entry-textbox");

function addEntryToDom(event) {
 event.preventDefault();
 let entryDiv = document.createElement("div");
 entryDiv.classList.add("single-entry");
 entryDiv.innerText = entryTextbox[0].value;
 entryDiv.style.display = "none";
 entriesSection.appendChild(entryDiv);
 entryTextbox[0].value = "";
}

entryForm.addEventListener("submit", addEntryToDom)