module.exports = function reverse(n) {
    let reverseN = "";
    let nToStr = n + "";

    for (let i = 1; i <= nToStr.length; i++) {
        reverseN += nToStr[nToStr.length - i];
    }
  return reverseN.replace('-', '');
};
