qx.Class.define("qxl.tweets.MainWindow", {
  extend: qx.ui.window.Window,

  construct() {
    super("tweets");

    // hide the window buttons
    this.setShowClose(false);
    this.setShowMaximize(false);
    this.setShowMinimize(false);

    // adjust size
    this.setWidth(250);
    this.setHeight(300);
  },
});
