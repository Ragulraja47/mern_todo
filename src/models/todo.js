const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  "title":String,
    "description":String,
},
{
    timestamps:true,
});

const todoModel = mongoose.model('todo', todoSchema);  

async function createTODO(title, description) {

    const todo = await todoModel.create({
        title,
        description
    });
  return {
    title,
    description,
    _id:1
  };
}

async function deleteTODO(_id) {
    const deltodo = await todoModel.deleteOne({_id});
    return deltodo;
}

async function updateTODO(_id, title, description) {
    const updatetodo = await todoModel.updateOne({
        _id
    },{
        title,
        description
    });
    return updatetodo;
}

module.exports = {
  createTODO,
  deleteTODO,
  updateTODO,
};