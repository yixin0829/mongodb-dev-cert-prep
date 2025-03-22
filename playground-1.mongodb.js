db.movies.insertOne({
  title: "Interstellar",
  year: 2014,
  genre: ["Sci-Fi", "Adventure"],
  reviews: [], // Initially empty; will store review ObjectIDs later
});

db.reviews.insertMany([
  {
    movie_id: ObjectId("67de300a9e676e70386b140b"),
    rating: 9,
    review: "Mind-bending masterpiece!",
    date: new Date(),
  },
  {
    movie_id: ObjectId("67de300a9e676e70386b140b"),
    rating: 8.5,
    review: "Outstanding visuals and storytelling.",
    date: new Date(),
  },
]);

db.movies.updateOne(
  {
    title: "Interstellar - New Title",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: ["Sci-Fi", "Adventure"],
    reviews: [], // Initially empty; will store review ObjectIDs later
  }
);
