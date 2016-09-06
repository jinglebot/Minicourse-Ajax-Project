
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // get street address data
    var streetvalue = $("#street").val();
    var cityvalue = $("#city").val();
    var address = streetvalue + " " + cityvalue;

    $greeting.text('So you want to live at ' + address + '?');
    
    // Google Streetview API
    // complete url of img
    var $googURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    
    // put img in background div
    $body.append('<img class="bgimg" src="' + $googURL + '">');
    
//    return false;


    // NY Times API
    var nytURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + cityvalue + "&sort=newest&api-key=28cf1440dbd347e0a14b2c708a83f9a9";
    
//        }) + '&callback=svc_search_v2_articlesearch';
    
//    $.ajax({
//        url: nytURL,
//        method: 'GET',
//    }).done(function(result) {
//        console.log(result);
//    }).fail(function(err) {
//        throw err;
//    });
    
    $.getJSON( nytURL, function( data ) {
    $nytHeaderElem.text('New York Times Articles about ' + streetvalue + ', ' + cityvalue);
    console.log(data);
//        var item = data.response.docs;
//        var items = [];
//        var heading = '';
//        var artic = '';
//        for (var i=0; i<item.length; i++) { // i = number of nytimes articles to display on page
//            var itemi = item[i];
//            heading = '<a href = ' + itemi.web_url + '>' + itemi.headline.main + '</a>';
//            artic = '<p>' + itemi.snippet + '</p>';
//            items.push( '<li class = "articles">' + heading + artic + '</li>' );
//        }
//        for (var j = 0; j < items.length; j++) {
//            ($nytElem).append(items[j]);
//        }
//    }).error(function(e){
//        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded.');
    });
};


    // Wikipedia API
//    var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
//    $.ajax( {
//        url: wikiURL,
//        data: $address,
//        dataType: 'jsonp',
//        type: 'GET',
//        headers: { 'Api-User-Agent': 'Neighborhood' },
//        success: function(data) {
//           console.log("success");
//        }
//    } );
//
//
//    });
//
//    return false;
// ;

$('#form-container').submit(loadData);

loadData();
