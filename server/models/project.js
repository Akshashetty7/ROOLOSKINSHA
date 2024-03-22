const mongoose = require("mongoose");
const { projectUID } = require("../utils/randomSecureKey");

// creating a new object for projectSchema out of the `mongoose.Schema` class.
const projectSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
      // default is given a callback
      // since for every instance, a new uid needs to be generated from this model schema
      // without callback, there would be error of
      // `"MongoServerError: E11000 duplicate key error collection`
      // for continous creation of document with same body.
      default: () => projectUID(),
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    
    featured: {
      type: Boolean,
      default: false,
    },
   
    thumbnail: {
      type: String,
      default: "https://res.cloudinary.com/dulptytgu/image/upload/v1689547610/vdgzaagklqgqjpnzlyyl.jpg",
    },
   
    lead: {
      // would need to send "_id" value for this field as populate query in the routes function based on objectId
      type: mongoose.Schema.Types.ObjectId,
      ref: "developers", // using ref key to establish a foreign key relationship with primary key(_id) of refereced model
    },
    proj_organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organizations",
    },
    
    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
    ],
    proposals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "proposals",
    }],
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "developers",
    }],
    
    required_personnel: { // like entry-level/exprerienced
      type: String,
    },
    bookmark: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "developers",
    }],
   
  },
  
);

// mongoose.model takes 2 arguments
// 1st - Name of the collection
// 2nd - Name of the schema
const projectModel = mongoose.model("projects", projectSchema);

module.exports = projectModel;
