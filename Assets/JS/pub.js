console.logCopy = console.log.bind(console);

console.log = function(data)
{
    var currentDate = '[' + new Date().toUTCString() + '] ';
    this.logCopy(currentDate, data);
};
// 

//function getData() {
//    let URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXEYO8lsJCTx6yG1Jq-6oWrI-PqF_rRCU&libraries=places"
 //   let pullData = $(this).attr("data-name");

  //  $.ajax({
  //      url: URL,
   //     method: 'GET'
  //  })
  //  console.log(this); 
//}

//getData(); 
// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXEYO8lsJCTx6yG1Jq-6oWrI-PqF_rRCU&libraries=places"></script>

$(document).ready(function() {
    function displayPub() {
        $("#submit").on("click", function() {
            let search = $("#search").val().trim();
            let queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=pubs+" + search + "&key=AIzaSyDGbaz8xBuD2ZAX5SI_IlQ8zYeao7KwTPQ";
            $.ajax({
                url: queryUrl,
                method: 'GET'
            }).then(function(data) {
                console.log(data);
                console.log(queryUrl);

            });
        });

    }
    displayPub();
});