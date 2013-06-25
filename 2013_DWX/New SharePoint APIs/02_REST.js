// REST Samples

// Getting a collection of properties on a list item and popping a message with the list item's title
jQuery.ajax({
   url: "https://dotnetrocks.sharepoint.com/sites/dev/_api/web/lists/GetByTitle('Divisions')/items(17)?$select=Title,Modified",
   type: "GET",
   headers: { "Accept": "application/json;odata=verbose" },
   success: function (data) {
      var jsonObject = JSON.parse(data.body);

      alert(jsonObject.d.Title);
   }
});


// Creating new items using REST (you need to provide FromDigest Hash)
var payload = {
  '__metadata' : {
    'type' : 'SP.Data.ContactListItem'
  },
  'Title' : 'Hans',
  'FirstName' : 'Thorsten'
};
var params = {
  url : "",
  type : "POST",
  contentType : 'application/json;odata=verbose',
  data : JSON.stringify(payload),
  headers : {
    "Accept" : "application/json;odata=verbose",
    "X-RequestDigest" : $("#__REQUESTDIGEST").val()
  }
};

var onSuccess = function(data, status){
  if(console && console.log){
    console.log("List Item has been created");
    console.log(status);
    console.log(data);
  }
};

var onError = function(req, status, error){
  if(console && console.log){
    console.log(error);
  }
};
jQuery.ajax(params).done(onSuccess).fail(onError);
