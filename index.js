let entryForm = document.getElementById("entryForm");
let entriesSection = document.getElementById("entries");
let entryTextbox = document.getElementsByClassName("entry-textbox");

function addEntryToDom(event) {
 event.preventDefault();
 console.log(entryTextbox[0].value);
}

entryForm.addEventListener("submit", addEntryToDom)