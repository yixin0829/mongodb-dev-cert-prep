use("sample_restaurants");

db.restaurants.createIndex({"grades.grade": 1, "grades.score": 1});

db.getCollectionNames();

db.restaurants.find({"grades.grade": "A"}).explain();


// Delete additional index
db.restaurants.dropIndexes(["grades.grades_1_grades.score_1", "grades.grades_1", "grades.grade_1"]);

