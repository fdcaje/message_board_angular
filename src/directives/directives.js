export const render = {
    /**
     * 
     * @param {function} callback 
     * @param {object} args 
     * @returns 
     */
    startRender: function (callback, args) {
        return {
            restrict: "A",
            terminal: true,
            transclude: false,
            link: callback,
        };
    },
};

// https://gsferreira.com/archive/2015/03/angularjs-after-render-directive/