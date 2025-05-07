function addListItem() {
    const input = document.getElementById("itemInput");
    const text = input.value.trim();

    if (text !== "") {
      const li = document.createElement("li");
      li.textContent = text;
      document.getElementById("itemList").appendChild(li);
      input.value = ""; 
    }
  }