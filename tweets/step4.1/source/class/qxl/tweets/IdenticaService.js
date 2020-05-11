qx.Class.define("qxl.tweets.IdenticaService",
{
  extend : qx.core.Object,

  properties : {
    tweets : {
      nullable: true,
      event: "changeTweets"
    }
  },


  events : {
    "postOk" : "qx.event.type.Event"
  },


  members :
  {
    __store : null,


    fetchTweets : function() {
      if (this.__store == null) {
        var version = qx.core.Environment.get("qx.version");
        var location = window.location;
        var url = location.origin + "/resource/qxl/tweets/service.js";
        this.__store = new qx.data.store.Jsonp();
        this.__store.setCallbackName("callback");
        this.__store.setUrl(url);
        this.__store.bind("model", this, "tweets");
      } else {
        this.__store.reload();
      }
    },


    /**
     * @lint ignoreDeprecated(alert)
     */
    post : function(message) {
      alert("Post this message: " + message);
    }
  }
});