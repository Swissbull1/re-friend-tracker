export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "David's Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "GroupName",
                    "width": 2,
                    "required": true
                    },
                    {
                        "id": "creationDate",
                        "type": "date",
                        "name": "CreationDate",
                        "width": 2,
                        "required": true
                    },
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },
                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "Activity",
                    "width": 2,
                    "required": true
                    },
                    {
                        "id": "location",
                        "type": "text",
                        "name": "Location",
                        "width": 2,
                        "required": true
                    },
                    {
                        "id": "date",
                        "type": "date",
                        "name": "Date",
                        "width": 2,
                        "required": true
                    },
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },
                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-weixin",
                            "color": "red",
                            "page": "activitypage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },  
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendseditpage"
                        },    
                    ]
                },
                {
                    "id": "friendseditpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "red",
                            "search": true,
                            "url": "/activity",
                            "page": "/friend/:friendKey/activity"
                        },    
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "yellow",
                            "search": true,
                            "url": "locationeditpage"
                        },
                    ]
                },
                {
                    "id": "locationeditpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "yellow",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                        },
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewGroup",
                    "icon": "fa-weixin",
                    "color": "green",
                    "form": {
                    "form": "GroupForm"
                    }
                    },
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "wisteria",
                        "search": true,
                        "url": "/group",
                        "form": {
                        "form": "GroupForm"
                        }
                        },
                    ]
                },
                {
                    "id": "activitypage",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewActivity",
                    "icon": "fa-weixin",
                    "color": "red",
                    "form": {
                        "form": "ActivityForm"
                        }
                    },
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "red",
                        "search": true,
                        "url": "/activity",
                        "page": "activityeditpage",
                    },    
                    ]
                },
                {
                    "id": "activityeditpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                            "form": {
                                "form": "FriendForm"
                                }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
