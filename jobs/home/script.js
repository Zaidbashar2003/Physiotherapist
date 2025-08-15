
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".slide-image");

  function checkVisibility() {
    const rect = image.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // للتشغيل أول ما تفتح الصفحة
});


// تحديد الصورة الثانية
const secondImage = document.querySelector('.vision-image.second img');

// التأكد أن الصورة موجودة قبل إضافة الحركة
if (secondImage) {
    secondImage.style.transition = 'transform 1.5s ease-in-out';

    // حركة مستمرة يمين ويسار
    setInterval(() => {
        secondImage.style.transform = 'translateX(10px)';
        setTimeout(() => {
            secondImage.style.transform = 'translateX(-10px)';
        }, 750);
    }, 1500);
}
    