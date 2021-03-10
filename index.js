let entryForm = document.getElementById("entryForm");
let entriesSection = document.getElementById("entries");
let entryTextbox = document.getElementsByClassName("entry-textbox");

function addEntryToDom(event) {
 let entryDiv = document.createElement("div");
 entryDiv.classList.add("single-entry");
 entryDiv.innerText = entryTextbox[0].value;
 entriesSection.appendChild(entryDiv);
 console.log(entryDiv.innerText);
 event.preventDefault();
 entryTextbox[0].value = "";
}

entryForm.addEventListener("submit", addEntryToDom)