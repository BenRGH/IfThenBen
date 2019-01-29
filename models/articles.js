const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticlesSchema = new Schema({
    title: String,
    body: String,
}, { timestamps: true });

ArticlesSchema.methods.toJSON = function(){
    return {
        _id: this.id,
        title: this.title,
        body: this.body,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

mongoose.model('articles', ArticlesSchema);