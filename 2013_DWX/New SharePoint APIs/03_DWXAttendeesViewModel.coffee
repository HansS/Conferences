# CoffeeScript
'use strict';

window.DWX or = {}
window.DWX.ManageBugsViewModel = class ManageBugsViewModel
    
    constructor: ->
        @.items = ko.observableArray([])
        @.repository = new DWX.SharePointListRepository 'DWX Attendees', "/?$select=Id,Title,FirstName"

    init: () =>
        @items.removeAll()
        @repository.readAll @onLoaded


    deleteListItem: (listItem) =>
        @repository.deleteItem listItem.Id, ()=>    
            @items.remove listItem

    onLoaded: (result) =>
        @items.push(new DWX.Attendee(attendee)) for attendee in result.d.results
    