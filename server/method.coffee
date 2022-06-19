lodash = require('lodash')
Meteor.methods

  create_user:(user_data)->
    console.log user_data
    Accounts.createUser({username:user_data['username'],password:user_data['password'],profile:user_data})