import {Router} from 'meteor/iron:router'


Router.route('/',
{
  name:'time_sys',
  action: function () {
    this.render('time_sys');
  },
  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('user');
  },
});

Router.route('/worklog',
{
  name:'worklog',
  action: function () {
    console.log("innn");
    this.render('worklog');
  },
  waitOn: function () {
    // return one handle, a function, or an array
    console.log("oooo");
    return Meteor.subscribe('user');
  },
});