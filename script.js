// index.html
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("table a");
  let currentUrl = window.location.href;

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });

    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

// Lấy dữ liệu từ file JSON và hiển thị trong bảng
fetch("students.json")
  .then((response) => response.json()) // Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
  .then((students) => {
    const tbody = document.querySelector("#studentTable tbody");
    students.forEach((student) => {
      let row = `<tr>
                <td>${student.STT}</td>
                <td>${student.HoTen}</td>
                <td>${student.NgaySinh}</td>
                <td>${student.ChucVu ? student.ChucVu : "-"}</td>
                <td><a href="#">${student.ChiTiet}</a></td>
            </tr>`;
      tbody.innerHTML += row;
    });
  })
  .catch((error) => console.error("Lỗi khi tải JSON:", error));

// Bảng thành viên lớp
const tbody = document.querySelector("#bangThanhVien tbody");

duLieu.forEach((tv) => {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${tv.STT}</td>
      <td>${tv.HoTen}</td>
      <td>${tv.NgaySinh}</td>
      <td>${tv.ChucVu}</td>
      <td><a href="#">${tv.ChiTiet}</a></td>
    `;
  tbody.appendChild(row);
});
