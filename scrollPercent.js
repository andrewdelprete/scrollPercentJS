var scrollPercent = (function() {
    "use strict";

    var module = {
        config: {

        },
        init: function() {
            return this.percent();
        },
        percent: function() {
            var windowHeight = this.getWindowHeight();
            var docHeight = this.getDocHeight() - windowHeight;
            var scrollPosition = this.getScrollPosition();
            var initDiff = (windowHeight / docHeight) * 100;
          
            var result = ((scrollPosition + windowHeight) / docHeight) * 100 - initDiff;
            
            if (result < 0) result = 0;
            if (result > 100) result = 100;

            return Math.floor(result);
        },
        getScrollPosition: function() {
            return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;               
        },
        getWindowHeight: function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
        },
        getDocHeight: function() {
            return Math.max(
                document.body.scrollHeight || 0, 
                document.documentElement.scrollHeight || 0,
                document.body.offsetHeight || 0, 
                document.documentElement.offsetHeight || 0,
                document.body.clientHeight || 0, 
                document.documentElement.clientHeight || 0
            );                
        }
    };

    return module;
});