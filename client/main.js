import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import './lib/router.js';


Template.workflow.helpers({
    user: function() {
      console.log(Meteor.users.find().fetch());
      return Meteor.users.find().fetch();
    }
  
});
Template.time_sys.events({
  'click #data_form'(e, instance) {
    e.preventDefault();
    console.log($(e.currentTarget).find("#user").val())
    console.log($(e.currentTarget).find("#hours").val())

    var user_data = {}

    user_data['user'] = $(e.currentTarget).find("#user").val();

    user_data['hours'] = $(e.currentTarget).find("#hours").val();

    user_data['note'] = $(e.currentTarget).find("#note").val();


    console.log (user_data);
    Accounts.createUser({username:'krish'+ new Date(),password:'123',profile:user_data})
    // Meteor.call("create_user", user_data, function(err, res) {
    //   if (res) {
    //     return toastr.success("User created successfully");
    //   }
    // });
    // if (User.find({
    //   name: user_data['name']
    // }).count() !== 0) {
    //   toastr.error("The role name already exists!");
    //   return false;
    // }
    // Meteor.call("user_detail", function(err, res) {
    //   if (err === void 0) {

    //     return ;
    //   }
    // });
    // sg = new UserItem(user_data);
    // sg.insert(function(error) {
    //   if (error === void 0) {
    //     toastr.success("Data Saved!");
    //     return 
    //   }
    // });
       },
});


