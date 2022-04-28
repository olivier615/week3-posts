const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: [true, '文章內容未填寫']
      },
      tags: {
        type: [String],
        required: [true, '文章標籤 tags 未填寫']
      },
      type: {
        type: String,
        enum: ["group", "person"],
        required: [true, '貼文類型 type 未填寫或不正確, 請選擇 group 或 person']
      },
      image: {
        type:String,
        default:""
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
      name: {
          type: String,
          required: [true, '貼文姓名未填寫']
      },
      likes: {
          type:Number,
          default:0
      },
      comments: {
        type:Number,
        default:0
      }
    },
    {
      versionKey: false
    }
);
const Post = mongoose.model('Post', postSchema)

module.exports = Post
