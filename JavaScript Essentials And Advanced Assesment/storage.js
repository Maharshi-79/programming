export class Storage {
  static getAll() {
    return JSON.parse(localStorage.getItem("guests")) || [];
  }

  static save(data) {
    const existing = this.getAll();
    existing.push(data);
    localStorage.setItem("guests", JSON.stringify(existing));
  }

  static delete(index) {
    const data = this.getAll();
    data.splice(index, 1);
    localStorage.setItem("guests", JSON.stringify(data));
  }
}