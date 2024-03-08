
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};
  
setTimeout(function() {
  document.getElementById("wish").style.display = "block";
}, 12000); // 10 giây
var video = document.getElementById("myVideo");

// Chờ 20 giây trước khi hiển thị video
setTimeout(function() {
    video.style.display = "block"; // Hiển thị video
    video.play(); // Tự động phát video
}, 25000); // 20 giây

// Lặp lại video khi kết thúc
video.addEventListener('ended', function() {
    this.currentTime = 0; // Quay lại thời điểm bắt đầu
    this.play(); // Phát lại video
}, false);



