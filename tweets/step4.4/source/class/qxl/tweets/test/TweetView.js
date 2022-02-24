/**
 * @asset(qxl/tweets/*)
 */

qx.Class.define("qxl.tweets.test.TweetView", {
  extend: qx.dev.unit.TestCase,

  members: {
    __tweetView: null,

    setUp() {
      this.__tweetView = new qxl.tweets.TweetView();
    },

    tearDown() {
      this.__tweetView.dispose();
      this.__tweetView = null;
    },

    testSetIcon() {
      var expectedSource =
        qx.util.ResourceManager.getInstance().toUri("logo.png");
      this.__tweetView.setIcon(expectedSource);
      var foundSource = this.__tweetView.getChildControl("icon").getSource();
      this.assertEquals(
        expectedSource,
        foundSource,
        "Icon source was not set correctly!"
      );
    },
  },
});
