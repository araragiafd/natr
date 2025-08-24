

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener('mousemove', (e) => {
    const blur = document.createElement('div');
    blur.classList.add('blur-trail');
    blur.style.left = `${e.clientX}px`;
    blur.style.top = `${e.clientY}px`;
    document.body.appendChild(blur);

    // 一定時間後に自動で削除
    setTimeout(() => {
      blur.remove();
    }, 1000); // 1秒後に消す
  });

$(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('.entrance-bottn').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.pretend-section-all').addClass('active');
      });
  });
    

$(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('.entrance-bottn').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.home-all-box').addClass('active');
      });
  });

$(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('#kamera').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.all-box').addClass('active');
      });
  });

  $(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('#chancel1').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.all-box').toggleClass('active');
      });
  });

  $(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('#chancel2').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.tetoris-box').toggleClass('active');
      });
  });

$(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('#tetoris').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.tetoris-box').addClass('active');
      });
  });

$(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('#mario').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.mario-box').addClass('active');
      });
  });

  $(document).ready(function() {
      // .entrance-bottnがクリックされた時の処理
      $('#drive').on('click', function() {
          // .pretend-section-allに'active'クラスを追加する
          $('.drive-box').addClass('active');
      });
  });