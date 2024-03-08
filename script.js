document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("myButton");
    if (btn) {
      btn.addEventListener("mouseenter", () => {
        btn.style.animation = "none";
        setTimeout(() => {
          btn.style.animation = "";
        }, 3000);
      });
    } else {
      console.error("Không tìm thấy button!");
    }
  });
  