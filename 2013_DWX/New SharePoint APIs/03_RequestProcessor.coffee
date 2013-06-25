# CoffeeScript
'use strict';

window.DWX  or = {}

window.DWX.buildUrl = (appendix) ->
    _spPageContextInfo.webAbsoluteUrl + appendix
 
window.DWX.getFromREST = (url, onSuccess, onError) ->
    params = {
        url : url,
        type: "GET",
        headers: { "Accept": "application/json; odata=verbose" }
    }
    $.ajax(params).done(onSuccess).fail(onError)

window.DWX.deleteListItem = (url, onSuccess, onError) ->
    params = {
        url : url,
        type : "POST",
        headers : {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        }
    }
    $.ajax(params).done(onSuccess).fail(onError)

window.DWX.buildPayload =  (listName, listItemProperties) ->
    listItemType = "SP.Data." + listName.charAt(0).toUpperCase() + listName.slice(1) + "ListItem";
    payload = { "__metadata" : { "type" : listItemType }};
    for p of listItemProperties
        payload[p] = listItemProperties[p]
    payload

window.DWX.updateListItem = (url, listName, listItemProperties, onSuccess, onError) ->
    payload = DWX.buildPayload listName, listItemProperties
    payloadAsJson = JSON.stringify payload
    params = {
        url: url,
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: payloadAsJson,
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "X-HTTP-Method": "MERGE", 
            "content-type": "application/json;odata=verbose",
            "If-Match": "*"
        }
    }
    $.ajax(params).done(onSuccess).fail(onError)

window.DWX.createListItem = (url, listName, listItemProperties, onSuccess, onError) ->
    payload = DWX.buildPayload listName, listItemProperties
    params = {
        url : url,
        type : "POST",
        data : JSON.stringify(payload),
        headers: { 
            "Accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest" : $("#__REQUESTDIGEST").val() 
        }
    }
    $.ajax(params).done(onSuccess).fail(onError)