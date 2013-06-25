// Simple Error handler, which will also work in IE :)
function onError(sender, args){
  if(console && console.log){
    console.log(args.get_message());
  }
}

// Creating Items with JSOM
function createContactList(){
  var ctx = SP.ClientContext.get_current();
  var listCreationInfo = new SP.ListCreationInfo();
  listCreationInfo.set_title("DWX Attendees");
  listCreationInfo.set_templateType(SP.ListTemplateType.contacts); 
  var list = ctx.get_web().get_lists().add(listCreationInfo);

  ctx.load(list);

  ctx.executeQueryAsync(function(){
    if(console && console.log){
      console.log(list.get_title() + " has been created successfully");
    }
  }, onError);
}

function createListItems(){
  var ctx = SP.ClientContext.get_current();
  var list = ctx.get_web().get_lists().getByTitle("DWX Attendees");
  var items = new Array();
  for (var i = 0; i < 10; i++) {
    var listItemCreationInfo = new SP.ListItemCreationInformation();
    items[i] = list.addItem(listItemCreationInfo);
    items[i].set_item('Title', 'Attendee ' + i);
    items[i].set_item('FirstName', 'John');
    items[i].update();
    ctx.load(items[i]);
  };
  ctx.executeQueryAsync(function(){
    if(console && console.log){
      console.log("Items have been created in DWX Attendees list");
    }
  }, onError);
}

// Reading information form SharePoint
// This method uses RequestBatching in order to reduce roundtrips
function getBasicInformation(){
  var ctx = SP.ClientContext.get_current();
  var web = ctx.get_web();
  var user = web.get_currentUser();
  // RequestBatching
  ctx.load(web);
  ctx.load(user);

  ctx.executeQueryAsync(function(){
    if(console && console.log){
      console.log(web.get_title());
      console.log(user.get_title());
    }
  },onError);

}

// The next step in evolution, is to use QueryTrimming
// With QueryTrimming you can reduce the amount of data that is send across the network
function getWebAndUserTitleOnly(){
  var ctx = SP.ClientContext.get_current();
  var web = ctx.get_web();
  var user = web.get_currentUser();
  // RequestBatching
  ctx.load(web, 'Title');
  ctx.load(user, 'Title');

  ctx.executeQueryAsync(function(){
    if(console && console.log){
      console.log(web.get_title());
      console.log(user.get_title());
    }
  },onError);
}