/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tino Butz (tbtz)

************************************************************************ */

/**
 * This page displays all tweets of a user.
 */
qx.Class.define("qxl.mobiletweets.page.Tweets", {
  extend: qx.ui.mobile.page.NavigationPage,

  construct() {
    super();
    this.set({
      title: "Tweets",
      showBackButton: true,
      backButtonText: "Back",
    });
  },

  events: {
    /** Fired when the user selects a tweet */
    showTweet: "qx.event.type.Data",
  },

  properties: {
    /** Holds all feeds of a user */
    tweets: {
      check: "qx.data.Array",
      nullable: true,
      init: null,
      event: "changeTweets",
    },
  },

  members: {
    __list: null,

    // overridden
    _initialize() {
      super._initialize();

      // Create a new list instance
      var list = (this.__list = new qx.ui.mobile.list.List());
      var dateFormat = new qx.util.format.DateFormat();
      // Use a delegate to configure each single list item
      list.setDelegate({
        configureItem(item, value, row) {
          // set the data of the model
          item.setTitle(value.getText());
          item.setSubtitle(dateFormat.format(new Date(value.getCreated_at())));
          item.setImage(value.getUser().getProfile_image_url());
          // we have more data to display, show an arrow
          item.setShowArrow(true);
        },
      });

      list.addListener("changeSelection", this.__onChangeSelection, this);
      // bind the "tweets" property to the "model" property of the list instance
      this.bind("tweets", list, "model");
      // add the list to the content of the page
      this.getContent().add(list);
    },

    /**
     * Event handler. Called when the selection of the list is changed.
     *
     * @param evt {qx.event.type.Data} the causing event.
     */
    __onChangeSelection(evt) {
      // retrieve the index of the selected row
      var index = evt.getData();
      this.fireDataEvent("showTweet", index);
    },
  },

  destruct() {
    this._disposeObjects("__list");
  },
});
