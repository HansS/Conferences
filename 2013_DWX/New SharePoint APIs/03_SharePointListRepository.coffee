# CoffeeScript
'use strict';

window.DWX or = {}
window.DWX.SharePointListRepository = class SharePointListRepository
    constructor: (@listName, @restParams) ->

    readAll: (onSuccess, onError) ->
        url = DWX.buildUrl "/_api/web/lists/getbytitle('" + @listName + "')/items" + @restParams
        DWX.getFromREST url, onSuccess, onError

    readItems: (restParameter, onSuccess, onError) ->
        url = DWX.buildUrl "/_api/web/lists/getbytitle('" + @listName + "')/items" + restParameter
        DWX.getFromREST url, onSuccess, onError

    createItem: (listItemProperties, onSuccess, onError) ->
        url = DWX.buildUrl "/_api/web/lists/GetByTitle('" + @listName + "')/items"
        DWX.createListItem url, @listName, listItemProperties, onSuccess, onError

    deleteItem: (listItemId, onSuccess, onError) ->
        url = DWX.buildUrl "/_api/web/lists/getbytitle('" + @listName + "')/items(" + listItemId + ")"
        DWX.deleteListItem url, onSuccess, onError
    
    assignItemTo: (listItemId, userId, onSuccess, onError) ->
        url = DWX.buildUrl "/_api/web/lists/getbytitle('" + @listName + "')/items(" + listItemId + ")"
        item = { "EI_AssignedToId" : userId }
        onCompleted = (data) ->
            onSuccess(userId) ? onSuccess
        DWX.updateListItem url, @listName, item, onCompleted, onError
    
    getUserDisplayName: (userId, onSuccess, onError) ->
        url = DWX.buildUrl "/_api/web/GetUserById(" + userId + ")/?$select=Title"
        onCompleted = (data) ->
            onSuccess(data.d.Title) ? onSuccess
        DWX.getFromREST url, onCompleted, onError

    getAuthorDisplayName: (model, onSuccess, onError) ->
        onCompleted = (userName) ->
            model.Author = userName
            onSuccess(model) ? onSuccess
        @getUserDisplayName model.AuthorId, onCompleted, onError