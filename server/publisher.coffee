import { Meteor } from 'meteor/meteor';

Meteor.publish("user", ()->
  @unblock()
  console.log Meteor.users.find().fetch()
  return Meteor.users.find()
)