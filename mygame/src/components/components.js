/**
 *
 * @param {Number} w
 * @param {Number} h
 * @param {Number} x
 * @param {Number} y
 * @param {Array} btnColor
 * @param {String} btnText
 * @param {Number} btnTextSize
 */
export const addTextButton = function (
  w,
  h,
  x,
  y,
  btnColor,
  btnText,
  btnTextSize
) {
  const btn = add([
    rect(w, h, { radius: 30 }),
    pos(x, y),
    anchor("center"),
    area(),
    outline(4),
    color(btnColor),
  ]);

  btn.add([text(btnText, { size: btnTextSize }), anchor("center")]);
};
