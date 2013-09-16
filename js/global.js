$(document).ready(function() {

$(".links a[href^='http']").each(function() {
    $(this).css({
        background: "url(http://www.google.com/s2/u/0/favicons?domain=" + this.hostname + 
        ") left center no-repeat",
        "padding-left": "20px"
    });    
});

});
