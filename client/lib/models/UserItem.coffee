class @UserItem
  constructor:(data)->
    @_id=data._id or new Mongo.ObjectID()._str
    @name=data.name
    @hours=data.hours
    d=new Date()
    @created_date=d
    @user_id=Meteor.userId()


  insert:(cb)->
    User.insert this, (error, result) ->
      if cb?
        cb(error,result)
  update:(cb)->
    a = this
    id = this._id
    delete a._id
    User.update({_id:id},{$set:a},(error,result)->
      if cb?
        cb(error,result)
      )
  delete:(cb)->
    a = this
    id = this._id
    delete a._id
    User.remove({_id:id},(error,result)->
      if cb?
        cb(error,result)
      )

  @get:(id)->
    a = User.findOne(id)
    new UserItem(a)
