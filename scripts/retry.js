(function() {
    window.initiateRetry = function(selector) {
        if (selector && selector.trim() !== '') {
            const element = getElement(selector);
            if (element) {
                element.click();
            }
        }
    }

    function getElement(selector) {
        try {
            if (selector.startsWith('/')) {
                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                return xpathResult.singleNodeValue;
            } else {
                return document.querySelector(selector);
            }
        } catch (e) {
            return null;
        }
    }
})();
