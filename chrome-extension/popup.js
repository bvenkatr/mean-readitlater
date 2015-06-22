var myconfig = require('../mongorest/myconfig.json');
document.addEventListener('DOMContentLoaded', function () {
 /* chrome.tabs is an api to get the tabs opened in chrome
    Here we are only looking at the tabs[0] which is last focused.
 */
 chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  var url = tabs[0].url;    
  $('#message').text("Adding "+ url);
  $.ajax({
   url:'http://localhost:8080/api/addurl/'+encodeURIComponent(url),
   type:'post' 
 }).done(function(data) {
   $('#message').text("successfully added " + url).addClass('success');
 }).fail(function(jqXHR, textStatus, errorThrown){
  $('#message').text("error in adding" + url).addClass('fail');});
});

 $.ajax({
   url:'https://api.del.icio.us/v1/posts/add?url=mongodb.com',
  type:'get',
  auth: myconfig.auth
 }).done(function(data){
  console.log("url added");
  alert("url added");
 }).fail(function(jqXHR, textStatus, errorThrown){
  console.log("error in adding url");
  alert("error in adding url");
 });

});