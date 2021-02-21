$(document).ready(function(){
// get the tab from url by locating the # in location
    let hash = window.location.hash;
    let url = location.href.replace(/\/$/, "");

    // if a hash is present (when you come to this page)
    if (hash !='') {
        // Show the tab that was requested
        $('.nav-tabs a[href="' + hash + '"]').tab('show');
        url = location.href.replace(/\/#/, "#");
        history.replaceState(null, null, url);
        // Scroll the page to the top
        setTimeout(() => {
            $(window).scrollTop(0);
        }, 200);
    }
    // Add "deep linking" by rewriting the url with the tab's hash extension
    $('a[data-toggle="tab"]').on("click", function() {
        let newUrl;
        const hash = $(this).attr("href");
        if(hash == "#home") {
        newUrl = url.split("#")[0];
        } else {
        newUrl = url.split("#")[0] + hash;
        }
        //newUrl += "/";
        history.replaceState(null, null, newUrl);
    });

});