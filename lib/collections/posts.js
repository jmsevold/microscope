Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId,doc){
    // only logged in users can post
    return !!userId;
  }
});