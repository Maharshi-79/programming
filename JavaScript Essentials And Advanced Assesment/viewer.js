import { Storage } from "./storage.js";

class SubmissionViewer {
  constructor() {
    this.table = document.getElementById("tableBody");
    this.search = document.getElementById("search");

    this.data = Storage.getAll();
    this.render(this.data);

    this.search.addEventListener("input", () => this.handleSearch());
  }

  handleSearch() {
    const term = this.search.value.toLowerCase();

    const filtered = this.data.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.checkin.includes(term)
    );

    this.render(filtered);
  }

  deleteRecord(index) {
    Storage.delete(index);
    this.data = Storage.getAll();
    this.render(this.data);
  }

  render(data) {
    if (!data.length) {
      this.table.innerHTML = `
        <tr><td colspan="4" class="text-center">No data found</td></tr>
      `;
      return;
    }

    this.table.innerHTML = data.map((d, i) => `
      <tr>
        <td>${d.name}</td>
        <td>${d.phone}</td>
        <td>${d.checkin}</td>
        <td>
          <button class="btn btn-danger btn-sm" data-index="${i}">Delete</button>
        </td>
      </tr>
    `).join("");

    this.attachDeleteEvents();
  }

  attachDeleteEvents() {
    this.table.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        this.deleteRecord(index);
      });
    });
  }
}

new SubmissionViewer();