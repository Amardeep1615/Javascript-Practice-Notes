function addRow() {
    const name = document.getElementById("nameInput").value.trim();
    const age = document.getElementById("ageInput").value.trim();

    if (name === "" || age === "") return;

    const table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    nameCell.textContent = name;
    ageCell.textContent = age;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => newRow.remove();
    actionCell.appendChild(deleteBtn);
    
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
  }