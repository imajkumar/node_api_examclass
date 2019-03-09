const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
TodoSchema.index({
  name: 'text'
})
TodoSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Todo', TodoSchema)
