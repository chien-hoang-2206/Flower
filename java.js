
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};
  
setTimeout(function() {
  document.getElementById("wish").style.display = "block";
}, 8500); // 10 giây
var video = document.getElementById("myVideo");

    // Hiển thị video sau 20 giây
    setTimeout(function() {
        video.style.display = "block";
        video.play();
    }, 23000); // 20 giây

    // Lặp lại video khi kết thúc
    video.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);


