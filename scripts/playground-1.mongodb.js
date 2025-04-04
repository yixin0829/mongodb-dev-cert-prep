use("sample_movies")
db.movies.find({}).limit(10)

db.restaurants.createIndex({ "grades.grade": 1, "grades.score": 1 })

db.getCollectionNames()

db.restaurants.find({ "grades.grade": "A" }).explain()

// Delete additional index
db.restaurants.dropIndexes([
  "grades.grades_1_grades.score_1",
  "grades.grades_1",
  "grades.grade_1",
])

db.movies.aggregate([
  {
    $addFields: {
      releaseBucket: {
        $switch: {
          branches: [
            {
              case: { $gte: ["$released", new Date("2010-01-01")] },
              then: "New",
            },
            {
              case: { $gte: ["$released", new Date("2000-01-01")] },
              then: "Old",
            },
            { case: true, then: "Very Old" },
          ],
          default: "Unknown",
        },
      },
    },
  },
  { $limit: 1 },
])
