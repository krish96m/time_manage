import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './workflow.html';


Template.worklog.helper
    user:()->
        console.log Meteor.users.find().fetch()
        Meteor.users.find().fetch()

