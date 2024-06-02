$(document).ready(function(){
    // Function to add query string to each link URL
    function addQueryStringToLinks(cacheId) {
        $("link").each(function() {
            var href = $(this).attr("href");
            if (href) {
                // Check if the link already has a query string
                if (href.indexOf("?") !== -1) {
                    $(this).attr("href", href + "&cache_id=" + cacheId);
                } else {
                    $(this).attr("href", href + "?cache_id=" + cacheId);
                }
            }
        });
    }

    // Call the function with your cache ID
    addQueryStringToLinks("{{ cache_id }}");
});