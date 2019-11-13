let deviceWidth;
setHtmlFontSize();

if (window.addEventListener) {
  window.addEventListener(
    "resize",
    function() {
      setHtmlFontSize();
    },
    false
  );
}

function setHtmlFontSize() {
  let width = 1920;
  // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以1920
  deviceWidth =
    document.documentElement.clientWidth > width
      ? width
      : document.documentElement.clientWidth;
  document.getElementsByTagName("html")[0].style.cssText =
    "font-size:" + deviceWidth / (width / 100) + "px !important";
}
