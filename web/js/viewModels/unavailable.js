define(["ojs/ojcore","knockout","jquery","ojs/ojknockout"],function(e,o,n){return new function(){var o=e.Router.rootInstance;this.message="Unable to retrieve your reward information. The reward service is temporary unavailable. Please try later.",this.close=function(){o.go("welcome")},this.connected=function(){},this.disconnected=function(){},this.transitionCompleted=function(){}}});