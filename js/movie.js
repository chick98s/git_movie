//이메일 체크
function CheckEmail(str) {
  var reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}

//스타트 버튼
function OnStart() {
  var obEmail = document.getElementById("email");
  if (!obEmail.value) {
    swal("ERROR", "이메일 주소를 입력해주세요.", "error");
    obEmail.focus();
    return;
  } else if (!CheckEmail(obEmail.value)) {
    swal("ERROR", "이메일 형식이 잘못되었습니다.", "error");
    obEmail.focus();
    return;
  } else {
    swal("SUCCESS", "이메일 주소가 생성되었습니다.", "success");
    obEmail.focus();
    return;
  }
}

//테이블 숨기기
$(function() {
   /* ▼ 내용 펼쳐짐 */
   $(".q_btn1").click(function() {
    $(".q_btn1 span").toggleClass("on"); //on 클래스가 없으면 추가하고, 있으면 제거한다.
    $(".qna1").fadeToggle();

    //▼, 내용숨김
    $(".q_btn2 span").removeClass("on");
    $(".q_btn3 span").removeClass("on");
    $(".q_btn4 span").removeClass("on");
    $(".q_btn5 span").removeClass("on");

    $(".qna2").fadeOut();
    $(".qna3").fadeOut();
    $(".qna4").fadeOut();
    $(".qna5").fadeOut();
  });

  $(".q_btn2").click(function() {
    $(".q_btn2 span").toggleClass("on");
    $(".qna2").fadeToggle();

    //▼, 내용숨김
    $(".q_btn1 span").removeClass("on");
    $(".q_btn3 span").removeClass("on");
    $(".q_btn4 span").removeClass("on");
    $(".q_btn5 span").removeClass("on");

    $(".qna1").fadeOut();
    $(".qna3").fadeOut();
    $(".qna4").fadeOut();
    $(".qna5").fadeOut();
  });

  $(".q_btn3").click(function() {
    $(".q_btn3 span").toggleClass("on");
    $(".qna3").fadeToggle();

    //▼, 내용숨김
    $(".q_btn1 span").removeClass("on");
    $(".q_btn2 span").removeClass("on");
    $(".q_btn4 span").removeClass("on");
    $(".q_btn5 span").removeClass("on");

    $(".qna1").fadeOut();
    $(".qna2").fadeOut();
    $(".qna4").fadeOut();
    $(".qna5").fadeOut();
  });

  $(".q_btn4").click(function() {
    $(".q_btn4 span").toggleClass("on");
    $(".qna4").fadeToggle();

    //▼, 내용숨김
    $(".q_btn1 span").removeClass("on");
    $(".q_btn2 span").removeClass("on");
    $(".q_btn3 span").removeClass("on");
    $(".q_btn5 span").removeClass("on");

    $(".qna1").fadeOut();
    $(".qna2").fadeOut();
    $(".qna3").fadeOut();
    $(".qna5").fadeOut();
  });

  $(".q_btn5").click(function() {
    $(".q_btn5 span").toggleClass("on");
    $(".qna5").fadeToggle();

    //▼, 내용숨김
    $(".q_btn1 span").removeClass("on");
    $(".q_btn2 span").removeClass("on");
    $(".q_btn3 span").removeClass("on");
    $(".q_btn4 span").removeClass("on");

    $(".qna1").fadeOut();
    $(".qna2").fadeOut();
    $(".qna3").fadeOut();
    $(".qna4").fadeOut();
  });
});
