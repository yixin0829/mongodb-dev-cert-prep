use("sample_mflix")

db.movies.find({
  $or: [{ directors: "Christopher Nolan" }, { "imdb.rating": { $gt: 8 } }],
})

db.movies.updateOne(
  {
    title: "The Mysterious Code",
  },
  {
    $set: { award: [] },
  }
)

db.movies.deleteMany({ runtime: { $lt: 5 } })

db.movies.aggregate([{ $unwind: "$genres" }, { $limit: 5 }])

db.movies.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", avgRating: { $avg: "$imdb.rating" } } },
  { $sort: { avgRating: -1 } },
  { $limit: 5 },
])

// Top Rated Genres: Determine the five genres with the highest average IMDb ratings.
db.movies.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", avgRating: { $avg: "$imdb.rating" } } },
  { $sort: { avgRating: -1 } },
  { $limit: 5 },
])

// Customer Age Bracket Analysis: Compute the average sale value for customers
// segmented by age groups: 0-19, 20-39, 40-59, and 60+.
db.sales.aggregate([
  { $unwind: "$items" },
  {
    $addFields: {
      ageBracket: {
        $switch: {
          branches: [
            { case: { $lt: ["$customer.age", 20] }, then: "0-19" },
            { case: { $lt: ["$customer.age", 40] }, then: "20-39" },
            { case: { $lt: ["$customer.age", 60] }, then: "40-59" },
          ],
          default: "60+",
        },
      },
    },
  },
  {
    $group: {
      _id: "$ageBracket",
      avgSale: { $avg: { $multiply: ["$items.price", "$items.quantity"] } },
    },
  },
  { $sort: { _id: 1 } },
])
