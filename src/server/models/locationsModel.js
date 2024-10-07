import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LocationSchema = new Schema({

    description:{
        type: String,
       // required: true
    },

    locationName:{
        type: String,
        
    },

    cords:{
        type: Number,
       // required: true
    },

    userPost:{
        type: String,

    },

    userId: {
        type: Number
    },

    date:{
        type: String,
        default: Date.now()
    },

    dateOfEncounter:{
        type: Date
    },

    stars:{
        type: Number
    }
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
