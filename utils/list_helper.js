var _ = require('lodash')

const totalLikes = (blogs) => {
  return blogs.map(blog => blog.likes).reduce((prev, next) => prev + next)
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  //console.log(likes)
  const max = Math.max(...likes)
  //console.log(max)
  const index = likes.indexOf(max)
  //console.log(index)

  return blogs[index]
}

const mostBlogs = (blogs) => {
  const blogCountByAuthor = _.countBy(blogs, 'author')
  const blogsArray = _.entries(blogCountByAuthor)
  const authorWithMostPosts = _.maxBy(blogsArray, _.last)
  const author = {
    author: String(authorWithMostPosts[0]),
    blogs: Number(authorWithMostPosts[1])
  }
  return author
}

const mostLikes = (blogs) => {
  let likesArray = []
  const blogsByAuthor = _.groupBy(blogs, 'author')
  const authorsArray = _.entries(blogsByAuthor)
  //console.log(authorsArray)
  _.forEach(authorsArray, (author) => {
    //console.log(totalLikes(author[1]))
    likesArray.push({
      author: author[0],
      likes: totalLikes(author[1])
    })
  })
  //console.log(likesArray)
  const likes = likesArray.map(blog => blog.likes)
  //console.log(likes)
  const max = Math.max(...likes)
  //console.log(max)
  const index = likes.indexOf(max)
  //console.log(index)

  const author = {
    author: String(likesArray[index].author),
    likes: Number(likesArray[index].likes)
  }
  return author
}

module.exports = {
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}