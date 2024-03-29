/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************


************************************************************************ */

/**
 * This is the main application class of your custom application "tweets"
 *
 * @asset(qxl/tweets/*)
 */
qx.Class.define("qxl.tweets.Application", {
  extend: qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members: {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
    main() {
      // Call super class
      super.main();

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug")) {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      var main = new qxl.tweets.MainWindow();
      main.moveTo(50, 30);
      main.open();

      main.addListener(
        "reload",
        function () {
          this.debug("reload");
        },
        this
      );

      main.addListener(
        "post",
        function (e) {
          this.debug("post: " + e.getData());
        },
        this
      );
    },
  },
});
