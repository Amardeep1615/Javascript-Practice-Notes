const searchInput = document.getElementById("searchInput");
    const listItems = document.querySelectorAll("#itemList li");

    searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();

      listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "list-item" : "none";
      });
    });