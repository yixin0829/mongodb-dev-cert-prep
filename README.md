# Mongodb Associate Developer Certification Exam Prep

An end-to-end project for preparing [MongoDB Associate Developer Certification Exam](https://learn.mongodb.com/pages/mongodb-associate-developer-exam)

## Resources
- [Exam study guide with exam objectives](https://learn.mongodb.com/learn/course/mongodb-associate-developer-exam-study-guide/main/associate-dba-exam-study-guide?client=customer)
- [Practice questions for different languages](https://learn.mongodb.com/pages/mongodb-developer-practice-questions)
- [Install MongoSh](https://www.mongodb.com/docs/mongodb-shell/install/)
- [Install MongoDB Community with Docker](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)
- [MongoDB Atlas sample datasets](https://www.mongodb.com/developer/products/atlas/atlas-sample-datasets/)

## Mongo Setup
### Option 1: Free-Tier MongoDB Atlas Cluster
#### Prerequisites
- MongoDB Shell (mongosh) or VS Code MongoDB extension installed
- Register a MongoDB Atlas account

### Deploy Cluster
1. Deploy a cluster on MongoDB Atlas. Connect to mongosh or VS Code using the connection string.
2. Load [sample datasets](https://www.mongodb.com/developer/products/atlas/atlas-sample-datasets/) to Atlas cluster by clicking on the three dots beside "Browse Collections" and choose "Load Sample dataset"

### Option 2: Local Run with Docker
#### Prerequisites
- MongoDB Shell (mongosh) installed
- Docker and Docker Compose installed
- Down [sample datasets](https://www.mongodb.com/developer/products/atlas/atlas-sample-datasets/) and manually load to local docker volume mount (i.e. `data/` in project root directory)

#### Starting MongoDB
1. Create a data directory for MongoDB:
```bash
mkdir data
```

2. Start the MongoDB container:
```bash
docker-compose up -d
```

#### Connecting to MongoDB
Connect to MongoDB using mongosh with the following command:
```bash
mongosh "mongodb://admin:password@localhost:27017/"
```

#### Connection Details
- Host: localhost
- Port: 27017
- Username: admin
- Password: password
- Connection URL: mongodb://admin:password@localhost:27017/

#### Stopping MongoDB
To stop the MongoDB container:
```bash
docker-compose down
```

To stop and remove all data:
```bash
docker-compose down -v
```

Note: we use volume to persist MongoDB data between container restarts.


## Exam Objectives


| Section | Exam Objective (Topics) | Weighting |
|---------|-------------------------|-----------|
| 1       | **MONGODB OVERVIEW AND THE DOCUMENT MODEL**                                                                   | **8%**    |
| 1.1     | Identify the set of value types MongoDB BSON supports.                                                        |   [link](#11-bson-type)       |
| 1.2     | Given three documents that are of diﬀerent shape, identify which can co-exist in the same collection.         |   [link](#12-co-existing-docs)        |
| 2       | **CRUD**                                                                                                      | **51%**   |
| 2.1     | Given a scenario with a type of structured document that needs to be inserted into a database, identify properly and improperly formed insert commands. | [link](#21-insert-commands) |
| 2.2     | Given an update scenario where an entire updated document (no update operators used) is provided, identify the output and how the database changed state. | [link](#22-document-update) |
| 2.3     | Given an update scenario where $set is used, identify the output and how the database changed state.          | [link](#23-set-operator) |
| 2.4     | Given a scenario about updating a document and information about where it should be inserted if it does not exist, identify the upsert command that should be used. | [link](#24-upsert-commands) |
| 2.5     | Given a scenario where multiple documents need to be updated, identify the correct update expression.         | [link](#25-multi-doc-update) |
| 2.6     | Given a findAndModify scenario where another operation is run concurrently, identify the output and how the database changed state. | [link](#26-findandmodify) |
| 2.7     | Given a scenario where a document should be deleted from the database, identify the delete expression that should be used. | [link](#27-delete-expressions) |
| 2.8     | Given a scenario where a single document should be looked up by a simple equality constraint (eg {x: 3}), identify the expression that should be used. | [link](#28-equality-query) |
| 2.9     | Identify documents matched by a query with an equality constraint on an array field.                          | [link](#29-array-equality) |
| 2.10    | Identify documents matched by an expression with relational operators in it.                                  | [link](#210-relational-operators) |
| 2.11    | Identify documents matched by an expression with $in.                                                         | [link](#211-in-operator) |
| 2.12    | Identify documents matched by an $elemMatch expression.                                                       | [link](#212-elemmatch) |
| 2.13    | Identify documents matched by an expression that has several logical operators.                               | [link](#213-logical-operators) |
| 2.14    | Given a query with a sort and limit, identify the correct output.                                             | [link](#214-sort-limit) |
| 2.15    | Identify the incorrect projection among a set of expressions.                                                 | [link](#215-projections) |
| 2.16    | Identify how to get all results from a cursor.                                                                | [link](#216-cursor-results) |
| 2.17    | Identify the expressions used to count the number of documents matching a query.                              | [link](#217-count-documents) |
| 2.18    | Given an indexing scenario, identify the correct command for defining a search index.                         | [link](#218-search-index) |
| 2.19    | Given a scenario, identify the correct search query.                                                          | [link](#219-search-query) |
| 2.20    | Given an aggregation expression using $match, $group, identify the correct output.                            | [link](#220-match--group) |
| 2.21    | Given an aggregation expression using $lookup, identify the correct output.                                   | [link](#221-lookup) |
| 2.22    | Given an aggregation expression using $out, identify the correct output.                                      | [link](#222-out-operator) |
| 3       | **INDEXES**                                                                                                   | **17%**   |
| 3.1     | Given a query that is performing a collection scan, identify which index would improve the performance of this query. | [link](#31-collection-scan) |
| 3.2     | Given a query that is performing a collection scan on an equality match on an array field, identify which index would improve the performance of this query. | [link](#32-array-index) |
| 3.3     | Given a query with no constraint and a sort of two fields that is doing collection scan, identify which index would improve the performance of this query. | [link](#33-sort-index) |
| 3.4     | Given a collection, identify how many indexes exist for that collection.                                      | [link](#34-index-count) |
| 3.5     | Identify the trade-oﬀs of using indexes and the ramifications of deleting indexes support queries.            | [link](#35-index-tradeoffs) |
| 3.6     | Identify the explain plan outputs that signify a potential performance issue, specifically whether an index is present or not for the given query. | [link](#36-explain-plan) |
| 4       | **DATA MODELING**                                                                                             | **4%**    |
| 4.1     | Given a scenario with three collections (a parent and two children) and the user, identify the embedded relationships and which should be linked. | [link](#41-relationships) |
| 4.2     | Identify data model examples that are considered an anti-pattern.                                             | [link](#42-antipatterns) |
| 5       | **TOOLS AND TOOLING**                                                                                         | **2%**    |
| 5.1     | Given a scenario to load Atlas Sample Dataset and then use Data Explorer to use it to find a given first document in a collection. | [link](#51-atlas-explorer) |
| 6       | **DRIVERS** *(language-specific)*                                                                             | **18%**   |
| 6.1     | Define what the XX driver is?                                                                                 | [link](#61-driver-definition) |
| 6.2     | Define how the XX application connects/uses the XXX driver?                                                   | [link](#62-driver-connection) |
| 6.3     | Define the components of the URI string used by MongoClient to connect the driver to the database.            | [link](#63-uri-components) |
| 6.4     | Identify what connection pooling is in terms of the driver and what advantages it oﬀers.                      | [link](#64-connection-pooling) |
| 6.5     | Identify the correct syntax for the XX driver to insert one document and to insert many documents.            | [link](#65-insert-syntax) |
| 6.6     | Identify the correct syntax for the XX driver to update one document and to update many documents.            | [link](#66-update-syntax) |
| 6.7     | Identify the correct syntax for the XX driver to delete one document and to delete many documents.            | [link](#67-delete-syntax) |
| 6.8     | Identify the correct syntax for the XX driver to find many documents and to find one document.                | [link](#68-find-syntax) |
| 6.9     | Identify the correct syntax for the XX driver to create an aggregation pipeline.                              | [link](#69-aggregation-syntax) |
| 6.10    | Identify the diﬀerent syntax for the XX driver when using the MongoDB Query Language (MQL) and when using the Aggregation Framework. | [link](#610-mql-vs-aggregation) |

**Note:** The XX placeholders in the Drivers section indicate language-specific content based on the selected programming language during registration.

# SECTION 1: MONGODB OVERVIEW AND THE DOCUMENT MODEL
## 1.1 BSON Type
- https://www.mongodb.com/docs/manual/reference/bson-types/
- Rule of thumb: BSON supports every data type that JSON supports (strings, arrays, booleans, objects, null)
    - On top of that, BSON supports (Date, Timestamps, etc.)
- The **main difference** lies in numeric types
    - JSON only has `number` (analogous to `float` type) and `integer` (64-bit)
    - BSON offers more: `int` (32-bit integer), `long` (64-bit integer), and `decimal` (Decimal128) for high-precision stuff

## 1.2 Co-Existing Docs
- `_id` field should be unique in the same collection

# SECTION 2: CRUD
## 2.1 Insert Commands

```js
db.createCollection("movies")
db.createCollection("reviews")
show collections
```

Insert your first few documents to the collection using `insertOne(doc)`

```js
db.movies.insertOne({
  title: "Interstellar",
  year: 2014,
  genre: ["Sci-Fi", "Adventure"],
  reviews: [] // Initially empty; will store review ObjectIDs later
})
```

You should get a response like this:

```js
{
  acknowledged: true,
  insertedId: ObjectId('67de300a9e676e70386b140b')
}
```

Let's try `insertMany([doc1, doc2, ...])`. Don't forget to enclose documents in an array.

```js
db.reviews.insertMany([
  {
    movie_id: ObjectId('67de300a9e676e70386b140b'),
    rating: 9,
    review: "Mind-bending masterpiece!",
    date: new Date()
  },
  {
    movie_id: ObjectId('67de300a9e676e70386b140b'),
    rating: 8.5,
    review: "Outstanding visuals and storytelling.",
    date: new Date()
  }
])
```

You should get a response like this:

```js
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67de26b230f92987726b140e'),
    '1': ObjectId('67de26b230f92987726b140f')
  }
}
```

What's inside `{...}` is called a *Document* in MongoDB. The hierarchy goes like database -> collection -> document. A document is like a `dict` type in python or just JSON object.

## 2.2 Document Update

```js
db.movies.updateOne(
  {
    title: "Interstellar - New Title",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: ["Sci-Fi", "Adventure"],
    reviews: [],
  }
)
```

Update without [update operators](https://www.mongodb.com/docs/manual/reference/operator/update/) leads to error:

```
MongoInvalidArgumentError: Update document requires atomic operators
```

The correct way to replace an entire document is to use `replaceOne()` instead of `updateOne()` without operators:

```
db.movies.replaceOne({
    title: "Interstellar"
}, {
    title: "New Movie Title",
    year: 2014,
    genre: ["Sci-Fi", "Adventure"],
    reviews: []
})
```

> [!Note] MongoDB does not have `replaceMany()`
> MongoDB Server does not support a `replaceMany` operation. The replaceOne method is available to replace a single document that matches a specified filter. If you need to replace multiple documents, you would need to perform multiple replaceOne operations or use a combination of other methods to achieve your goal.


## 2.3 Set Operator
Syntax of `updateOne/Many`:
```
db.collection.updateOne/Many(
    <filter>,
    {
        <operator1>: { <field1>: <value1>, ... },
        <operator2>: { <field2>: <value2>, ... },
        ...
    },
    {
         upsert: <boolean>,
         writeConcern: <document>,
         collation: <document>,
         arrayFilters: [ <filterdocument1>, ... ],
         hint:  <document|string>,
         let: <document>,
         sort: <document>
    }
)
```

Update all fields in one document using `$set`:
```
db.movies.updateOne({
    title: "Interstellar"
}, {
    $set: {
        title: "Interstellar - New Title",
        year: 2014,
        genre: ["Sci-Fi", "Adventure"],
        reviews: [] // Initially empty; will store review ObjectIDs later
    }
})
```

Response:
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

You can update the entire document but not `_id` field since it's immutable.

```
db.movies.updateOne({ title: "Interstellar - New Title" }, { $set: { _id: 10000 } })

MongoServerError: Performing an update on the path '_id' would modify the immutable field '_id
```

To use the MongoDB reference (aka linking) data modeling pattern, we want to update the reviews array.

## 2.4 Upsert Commands

```
db.movies.updateOne({
    title: "Once Upon a Time... in Hollywood"
}, {
    $set: {
        title: "Once Upon a Time... in Hollywood",
        year: 2019,
        genre: ["Comedy", "Western"],
        reviews: []
    }
}, {
    upsert: true
})
```

```
{
  acknowledged: true,
  insertedId: ObjectId('67de38b13c23d2f822d5fc35'),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}
```

`upsert: true` will create a new document if documents match the `filter` 

## 2.5 Multi-Doc Update

We'll level up. Switch to a new sample database `sample_mflix`.

```
use sample_mflix
db.movies.updateMany({
    genres: "Western"
}, {
    $inc: {
        "awards.nomination": 1,
        year: -1
    },
    $push: {
        genres: {
            $each: ["Western - A", "Western - B"]
        }
    }
})
```

Note: [update operators](https://www.mongodb.com/docs/manual/reference/operator/update/)

## 2.6 FindAndModify

- `findAndModify` is used to find and remove/update **a single document**. It's basically syntax sugar.

> [!NOTE] Why not just run `updateOne()` and then `find()`?
> You should use `findAndModify` when you need to atomically modify and return a document in a single operation. This is particularly useful in scenarios where you need to:
> 1. **Update and Retrieve**: Update a document and immediately retrieve the updated document.
> 2. **Atomic Operations**: Ensure that the update and retrieval are performed atomically to avoid race conditions.
> 3. **Conditional Updates**: Perform updates based on certain conditions and sort criteria.

Important parameter:
- `new`: Optional. When true, returns the updated document rather than the original. The default is false.

```
db.movies.findAndModify({
    query: {
        languages: "English"
    },
    sort: {
        title: 1 // Ascending order
    },
    update: {
        $set: {
            languages: "English"
        }
    },
    new: true
})
```

## 2.7 Delete Expressions

Delete one document by `_id`:
```
db.movies.deleteOne({
    _id: ObjectId("573a1390f29313caabcd42e8")
})
```

```
{ acknowledged: true, deletedCount: 1 }
```

Delete multiple documents by filter condition(s):
```
db.movies.deleteMany({
    genres: {
        $in: ["Western - A", "Short"]
    }
})
```

```
{ acknowledged: true, deletedCount: 679 }
```

## 2.8 Equality Query
Find one document given a simple equality constraints.

```
db.movies.findOne({ title: "Traffic in Souls" })

// Above is the short-hand to omit $eq operator

db.movies.findOne({ title: { $eq: "Traffic in Souls" } })
```

## 2.9 Array Equality

```
db.movies.find({ languages: ["English"] }).count()

db.movies.find({ languages: { $eq: ["English"] } }).count()
```

## 2.10 Relational Operators
[Comparison Query Operators - MongoDB Manual v8.0 - MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)

Relational operators are used to compare numerical values, dates, and sometimes string.

```
db.movies.find({
    "awards.wins": 0,
    "awards.nominations": {
        $gt: 0
    },
    "awards.nominations": {
        $lte: 10
    },
    "rated": {
        $in: ["TV-PG", "APPROVED"]
    }
})
```

## 2.11 In Operator
`$in` operator is similar to python `in`. For example, `num in [1,2,3]` simply means `num == 1 or num == 2 or num ==3`. It's a syntax sugar. Normally it's more common to use it with string comparison though.

Query all movies with countries (an array) contains at least one of the countries.

```
db.movies.find({
    countries: {
        $in: ["Canada", "France"]
    }
}, {
    title: 1,
    countries: 1
})
```

## 2.12 ElemMatch

Use the `$elemMatch` operator in filter query, to find all documents that contain the specified embedded document in **an array of embedded documents**

We use another database to practice this. We find all restaurants with score more than 25 and grade "A".

```
use sample_restaurants
db.restaurants.find({
    grades: {
        $elemMatch: {
            grade: "A",
            score: {
                $gte: 25
            }
        }
    }
}, {
    _id: 0,
    name: 1,
    cuisine: 1,
    "grades.grade": 1,
    "grades.score": 1
})
```

Note the above query is not equivalent to:

```
db.restaurants.find({
    "grades.grade": "A",
    "grades.score": {$gte: 25}
}, {
    _id: 0,
    name: 1,
    cuisine: 1,
    "grades.grade": 1,
    "grades.score": 1
})
```

Dot notation matches the fields **independently**, potentially in **different embedded documents**.

## 2.13 Logical Operators
[Logical Query Operators - MongoDB Manual v8.0 - MongoDB Docs](https://www.mongodb.com/docs/manual/reference/operator/query-logical/)
- both `$and` and `$or` takes an array as its value
- `{ $and/or: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }`

Query all movies released before 2000 and is in "Drama" genres. Finally return only these two fields.

```
// Implicity $and
db.movies.find({
    released: {
        $lt: new Date("2000-01-01")
    },
    genres: "Drama"
}, {
    released: 1,
    genres: 1
})

// $and 
db.movies.find({
    $and: [{
            released: {
                $lt: new Date("2000-01-01")
            }
        },
        {
            genres: "Drama"
        }
    ]
}, {
    released: 1,
    genres: 1
})

// $or
db.movies.find({
    $or: [{
            released: {
                $lt: new Date("2000-01-01")
            }
        },
        {
            genres: "Drama"
        }
    ]
}, {
    released: 1,
    genres: 1
})
```

## 2.14 Sort Limit
The `sort()` and `limit()` methods in MongoDB allow you to control the order and number of documents returned by a query.

- `sort({field: 1})` - Sort in ascending order (1)
- `sort({field: -1})` - Sort in descending order (-1)
- `limit(n)` - Limit the results to n documents

When using both methods together, MongoDB applies the sort first, then limits the results. This is important for performance, especially with large collections.

Example: Find the 3 highest-rated movies, if rating is the same then sort on votes in descending order.

```
db.movies.find().sort({
    "imdb.rating": -1,
    "imdb.votes": -1
}).limit(3)
```

The result returns three movies with no rating and votes! Upon close examination, we realized that the fields are string type.

To fix this issue, we need to convert the string fields to numeric types using MongoDB's aggregation operators. Here's how to properly query and sort by numeric fields:

```
db.movies.aggregate([
  // Stage 1: Convert strings to numeric, handle empty strings and errors
  {
    $addFields: {
      numericRating: {
        $convert: {
          input: "$imdb.rating",
          to: "double",
          onError: null,  // Handle invalid or empty strings gracefully
          onNull: null
        }
      },
      numericVotes: {
        $convert: {
          input: "$imdb.votes",
          to: "int",
          onError: null,  // Handle invalid or empty strings gracefully
          onNull: null
        }
      }
    }
  },
  // Stage 2: Filter out documents with invalid (null) ratings or votes
  {
    $match: {
      numericRating: { $ne: null },
      numericVotes: { $ne: null }
    }
  },
  // Stage 3: Sort by numeric rating and numeric votes descending
  {
    $sort: {
      numericRating: -1,
      numericVotes: -1
    }
  },
  // Stage 4: Limit to top 3
  { $limit: 3 },
  // Optional projection for cleaner results
  {
    $project: {
      _id: 0,
      title: 1,
      rating: "$numericRating",
      votes: "$numericVotes"
    }
  }
]);
```

## 2.15 Projections

Projections in MongoDB allow you to selectively return fields from query results, improving efficiency by reducing network transfer and client-side processing.

- Include fields with `1` (or `true`)
- Exclude fields with `0` (or `false`)
- The `_id` field is included by default unless explicitly excluded
- You **cannot** mix inclusion and exclusion in the same projection, except for the `_id` field

```
{ name: 1, age: 1, _id: 0 } // correct
{ _id: 0, age: 0, city: 0 } // correct
{ name: 1, city: 0 } //incorrect: You can't mix inclusion (1) and exclusion (0) projections (except for _id).
```

## 2.16 Cursor Results
- MongoSh or JS
    - `cursor.toArray()` retrieves all results at once from a cursor.
- Python
    - `list(cursor)`: simple but memory-heavy for large data
    - `for doc in cursor`: ideal for large collection and memory-efficient
    - `cursor.to_list(length=None)`: async retrieval

See [Python demo using PyMongo](./scripts/2_16_cursor_results.py).

## 2.17 Count Documents
- In mongosh, use `.countDocuments(<query>)` (recommended)
    - `db.collection.countDocuments({ age: { $gte: 18 } });`
    - `db.collection.find({ age: { $gte: 18 } }).count();  // DEPRECATED`
- In JavaScript, use `.countDocuments(<query>)`
- In Python `PyMongo`, use `count_documents()`
    - Try not to use `len(list(cursor))`, memory heavy.

## 2.18 Search Index

Atlas Search is a relevance-based search not a database search. MongoDB built search solution on top of [Apache Lucene](https://lucene.apache.org/). Search starts with search indexes, which are not same as database indexes.

Components of Atlas Search Index:
1. **Analyzer**: Determines how text is processed during indexing and searching
   - Default: Standard analyzer breaks text into terms on word boundaries
   - Language-specific analyzers handle stemming, stop words, etc.

2. **Mappings**: Define how document fields should be indexed
   - Type mappings (string, number, date, etc.)
   - Dynamic mappings automatically detect common field types
   - Static mappings for explicit control over field indexing

3. **Stored Fields**: Fields that are stored in the index for retrieval
   - By default, only document IDs are stored
   - Can store additional fields for faster retrieval without accessing the collection

4. **Index Options**: Configuration settings for the search index
   - Synonyms for handling equivalent terms
   - Case sensitivity settings
   - Normalization options for text processing

Ideally it's good to know how to create a search index [on MongoDB Atlas UI](https://www.mongodb.com/docs/atlas/atlas-search/tutorial/create-index/) or [using mongosh command line](https://www.mongodb.com/docs/atlas/atlas-search/create-index/):

Follow the first tutorial to create an index for `movies` collection using dynamic mapping.

First let's check if there's a new search index created for `movies` collection.

```
db.movies.getSearchIndexes()
```

Let's drop it and create another one using command line.

```
db.movies.dropSearchIndex("default")
```

```
db.movies.createSearchIndex(
    "movieTitleIdx",
    "search",
    {
        "mappings": {
            "dynamic": false,
            "fields": {
                "title": {
                    "type": "string"
                },
                "plot": {
                    "type": "string"
                }
            }
        }
    }
)
```

## 2.19 Search Query
MongoDB Atlas Search provides powerful full-text search capabilities that extend beyond basic queries. After creating a search index, you can perform sophisticated search operations using the `$search` operator within an aggregation pipeline.

The simplest form of a search query uses the `$search` operator with the `text` operator:

```
db.movies.aggregate([{
    $search: {
        index: "movieTitleIdx", // Replace with your search index name
        text: {
            query: "adventure",
            path: "title" // The field to search in
        }
    }
}, {
    $project: {
        title: 1,
        score: {
            $meta: "searchScore"
        }
    }
}]);
```

### Using `$search` and `compound` Operators
The compound operator allows you to:
- Combine multiple conditions (`must`, `should`, `mustNot`).
- Filter by numeric values (`range`).
- Boost specific results (`score`)

Example: Search for "adventure" in multiple fields, filter by IMDb rating & boost recent movies

```
db.movies.aggregate([
  {
    $search: {
      index: "movieTitleIdx",
      compound: {
        must: [
          {
            text: { query: "adventure", path: ["title", "plot"] },
          },
        ],
        should: [
          { range: { path: "imdb.rating", gte: 8 } },
          {
            range: {
              path: "released",
              gte: 2015,
              score: { boost: { value: 2 } },
            },
          },
        ],
        mustNot: [
          {
            text: { query: "horror", path: "genres" },
          },
        ],
      },
    },
  },
  { $project: { title: 1, score: { $meta: "searchScore" } } },
  { $limit: 5 },
])
```

## 2.20 Match + Group

Write an aggregation pipeline that does the following:
1. Matches movies that are either Adventure OR Comedy AND have an IMDB rating >= 8
2. Groups the results by directors
3. Calculates average IMDB rating and total award wins for each director
4. Sorts by award count in descending order
5. Renames _id field to director
6. Returns top 10 results


```
use("sample_mflix");

db.movies.aggregate([
  {
    $match: {
      genres: { $in: ["Adventure", "Comedy"] },
      "imdb.rating": { $gte: 8 },
    },
  },
  {
    $group: {
      _id: "$directors",
      avgRating: { $avg: "$imdb.rating" },
      awardCount: { $sum: "$awards.wins" },
    },
  },
  {
    $sort: {
      awardCount: -1,
    },
  },
  {
    $project: {
      director: "$_id",
      avgRating: 1,
      awardCount: 1,
      _id: 0,
    },
  },
  {
    $limit: 10,
  },
]);
```

The output will be an array of documents where each document contains:
- `director`: Array of director names for the group
- `avgRating`: Average IMDB rating of all matched movies by these directors
- `awardCount`: Total number of award wins for all matched movies by these directors

## 2.21 Lookup

```
use("sample_mflix");

db.movies.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "movie_id",
      as: "comments",
    },
  },
  {
    $addFields: {
      comment_count: { $size: "$comments" },
    },
  },
]);
```

## 2.22 Out Operator

https://www.mongodb.com/docs/manual/reference/operator/aggregation/out/

`$out` should **always** be the last aggregation stage in a pipeline. It takes the output of the pipeline and writes them to a specified collection. You have the freedom to specify the output database.

Syntax:
```
{ $out: "<output-collection>" } // Output collection is in the same database

{ $out: { db: "<output-db>", coll: "<output-collection>" } }
```

# SECTION 3: INDEXES
## 3.1 Collection Scan
Index(es) speed up read while slow down write. Under the hood, index is implemented using a tree-based data structure with time complexity of O(logN).

Creating new indexes in MongoDB can impact write performance because each write operation (insert, update, delete) must also update the indexes. The exact impact on write speed depends on several factors, including the number of indexes, the complexity of the indexes, and the write-to-read ratio of your application.

Here are some representive index types:
1. Single field index
2. Compound index
    1. When designing the order of fields in a compound index in MongoDB, you should follow the **ESR (Equality, Sort, Range) rule**.
    2. Equality: Place fields that are queried using equality conditions first. These are fields that use operators like $eq, $in, or $regex with a fixed pattern.
    3. Sort: Next, include fields that are used in sort operations. This ensures that the index can support the sort order specified in your queries.
    4. Range: Finally, add fields that are queried using range conditions. These are fields that use operators like $gt, $gte, $lt, or $lte.
    5. `db.collection.createIndex({ equalityField: 1, sortField: 1, rangeField: 1 })`
3. Multi-key index (e.g. a list of tags, a list of embedded documents)
    1. Multikey indexes collect and sort data from fields containing array values. Multikey indexes improve performance for queries on array fields.
4. Text index
    1. Text indexes support $text query operations on **on-premises deployments**. To use $text, you must create a text index.
    2. Atlas Search index offers an improved full-text query solution if hosting data on MongoDB Atlas
6. Geospatial index



## 3.2 Array Index

```
use("sample_mflix");

db.movies.find({
  cast: { $in: ["Mary Pickford", "Tom Cruise"] },
}).explain();
```

Response: 

```
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "sample_mflix.movies",
    "parsedQuery": {
      "cast": {
        "$in": [
          "Mary Pickford",
          "Tom Cruise"
        ]
      }
    },
    "indexFilterSet": false,
    "queryHash": "2284A8B5",
    "planCacheShapeHash": "2284A8B5",
    "planCacheKey": "7238AF11",
    "optimizationTimeMillis": 0,
    "maxIndexedOrSolutionsReached": false,
    "maxIndexedAndSolutionsReached": false,
    "maxScansToExplodeReached": false,
    "prunedSimilarIndexes": false,
    "winningPlan": {
      "isCached": false,
      "stage": "COLLSCAN",
      "filter": {
        "cast": {
          "$in": [
            "Mary Pickford",
            "Tom Cruise"
          ]
        }
      },
      "direction": "forward"
    },
    "rejectedPlans": []
  },
  "command": {
    "find": "movies",
    "filter": {
      "cast": {
        "$in": [
          "Mary Pickford",
          "Tom Cruise"
        ]
      }
    },
    "$db": "sample_mflix"
  },
  ...
  "operationTime": {
    "$timestamp": {
      "t": 1742698350,
      "i": 13
    }
  }
}
```

We `COLLSCAN`, meaning not optimized by index. Let's create an index to speed this up.

```
db.movies.createIndex({ cast: 1 });  // multi-key index since cast is array type
```

Now run the `.explain()` method again we get:

```
...
"winningPlan": {
      "isCached": false,
      "stage": "FETCH",
      "inputStage": {
        "stage": "IXSCAN",
        "keyPattern": {
          "cast": 1
        },
        "indexName": "cast_1",
        "isMultiKey": true,
        "multiKeyPaths": {
          "cast": [
            "cast"
          ]
        },
        "isUnique": false,
        "isSparse": false,
        "isPartial": false,
        "indexVersion": 2,
        "direction": "forward",
        "indexBounds": {
          "cast": [
            "[\"Mary Pickford\", \"Mary Pickford\"]",
            "[\"Tom Cruise\", \"Tom Cruise\"]"
          ]
        }
      }
    },
...
```


## 3.3 Sort Index

Compound indexes cannot support queries where the sort order does not match the index or the reverse of the index.

```
use("sample_mflix");

// Option A:
db.movies
  .find({}, { _id: 0, title: 1, year: 1, "imdb.votes": 1 })
  .sort({
    year: 1,
    "imdb.votes": 1,
  })
  .explain();

// Option B:
db.movies
  .find({}, { _id: 0, title: 1, year: 1, "imdb.votes": 1 })
  .sort({
    year: -1,
    "imdb.votes": 1,
  })
  .explain();
```

```
// Works for Option A with winningPlan.inputStage.inputStage.direction = "forward"
db.movies.createIndex({
  year: 1,
  "imdb.votes": 1,
});

// Works for Option A with winningPlan.inputStage.inputStage.direction = "backward"
db.movies.createIndex({
  year: -1,
  "imdb.votes": -1,
});

// Works for Option B with winningPlan.inputStage.inputStage.direction = "forward"
db.movies.createIndex({
  year: 1,
  "imdb.votes": -1,
});

// Works for Option B with winningPlan.inputStage.inputStage.direction = "backward"
db.movies.createIndex({
  year: -1,
  "imdb.votes": 1,
});

// Does not work. For a sort operation to use an index, the fields specified in the sort must appear in the same order as they are specified in the index.
db.movies.createIndex({
  "imdb.votes": -1,
  year: -1,
});
```

Level up to three sort keys:

```
// Does not work
db.movies.createIndex({
  year: 1,
  directors: 1,
});

// Works
db.movies.createIndex({
  year: 1,
  directors: 1,
  "imdb.votes": 1,
});

db.movies
  .find({}, { _id: 0, title: 1, year: 1, "imdb.votes": 1 })
  .sort({
    year: 1,
    directors: 1,
    "imdb.votes": 1,
  })
  .explain();
```

What if we have a longer compound index?

```
// Works (forward)
db.movies.createIndex({
  year: 1,
  directors: 1,
  "imdb.votes": 1,
});

// Works (forward). The last field is not sorted therefore can be any direction.
db.movies.createIndex({
  year: 1,
  directors: 1,
  "imdb.votes": -1,
});

// Works (backward)
db.movies.createIndex({
  year: -1,
  directors: -1,
  "imdb.votes": -1,
});

db.movies
  .find({}, { _id: 0, title: 1, year: 1, "imdb.votes": 1 })
  .sort({
    year: 1,
    directors: 1,
  })
  .explain();
```

## 3.4 Index Count

`db.movies.getIndexes().length`

## 3.5 Index Tradeoffs

MongoDB indexes improve query performance but come with trade-offs, such as increased storage usage and write operation overhead. Deleting an index can free up storage but may negatively impact query performance.

Good practice:
1. Use compound indexes for multi-field queries instead of multiple single-field indexes. As seen in [3.3](#33-sort-index), compound indexes increase the likelihood of covered queries, where the query can be satisfied entirely using the index without needing to examine the actual documents. Say if you create a compound index {A: 1, B: 1, C: 2}, queries involve A, or [A, B], or [A, B, C] can all use the compound index.
2. Only index fields that are frequently used in queries using the ESR order.
3. Analyze index usage with `db.collection.getIndexes()` and query execution plans `.explain()`.

## 3.6 Explain Plan

`db.collection.find(<query>).explain()`

Explain response:

```
{
  "explainVersion": "1",
  "queryPlanner": {
    "namespace": "test.movies",
    "parsedQuery": {},
    "indexFilterSet": false,
    "queryHash": "ED6751AF",
    "planCacheShapeHash": "ED6751AF",
    "planCacheKey": "39C0EF43",
    "optimizationTimeMillis": 0,
    "maxIndexedOrSolutionsReached": false,
    "maxIndexedAndSolutionsReached": false,
    "maxScansToExplodeReached": false,
    "prunedSimilarIndexes": false,
    "winningPlan": {
      "isCached": false,
      "stage": "PROJECTION_DEFAULT",
      "transformBy": {
        "_id": 0,
        "title": 1,
        "year": 1,
        "imdb.votes": 1
      },
      "inputStage": {
        "stage": "FETCH",
        "inputStage": {
          "stage": "IXSCAN",
          "keyPattern": {
            "year": -1,
            "directors": -1,
            "imdb.votes": -1
          },
          "indexName": "year_-1_directors_-1_imdb.votes_-1",
          "isMultiKey": false,
          "multiKeyPaths": {
            "year": [],
            "directors": [],
            "imdb.votes": []
          },
          "isUnique": false,
          "isSparse": false,
          "isPartial": false,
          "indexVersion": 2,
          "direction": "backward",
          "indexBounds": {
            "year": [
              "[MinKey, MaxKey]"
            ],
            "directors": [
              "[MinKey, MaxKey]"
            ],
            "imdb.votes": [
              "[MinKey, MaxKey]"
            ]
          }
        }
      }
    },
    "rejectedPlans": []
  },
  "queryShapeHash": "B9ED4A4604B3E8510BACAA8451C3D4D12B30D21DE9A679FB2244B6F6F9C7E96E",
  "command": {
    "find": "movies",
    "filter": {},
    "sort": {
      "year": 1,
      "directors": 1
    },
    "projection": {
      "_id": 0,
      "title": 1,
      "year": 1,
      "imdb.votes": 1
    },
    "$db": "test"
  },
  "serverInfo": {
    "host": "dev-cert-exam-prep-shard-00-01.5rcr9.mongodb.net",
    "port": 27017,
    "version": "8.0.5",
    "gitVersion": "cb9e2e5e552ee39dea1e39d7859336456d0c9820"
  },
  "serverParameters": {
    "internalQueryFacetBufferSizeBytes": 104857600,
    "internalQueryFacetMaxOutputDocSizeBytes": 104857600,
    "internalLookupStageIntermediateDocumentMaxSizeBytes": 16793600,
    "internalDocumentSourceGroupMaxMemoryBytes": 104857600,
    "internalQueryMaxBlockingSortMemoryUsageBytes": 33554432,
    "internalQueryProhibitBlockingMergeOnMongoS": 0,
    "internalQueryMaxAddToSetBytes": 104857600,
    "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600,
    "internalQueryFrameworkControl": "trySbeRestricted",
    "internalQueryPlannerIgnoreIndexWithCollationForRegex": 1
  },
  "ok": 1,
  "$clusterTime": {
    "clusterTime": {
      "$timestamp": {
        "t": 1742701865,
        "i": 16
      }
    },
    "signature": {
      "hash": {
        "$binary": {
          "base64": "goXkG9TTS6to+5ZT68rS+7AzG2M=",
          "subType": "00"
        }
      },
      "keyId": 7422019232008765000
    }
  },
  "operationTime": {
    "$timestamp": {
      "t": 1742701865,
      "i": 16
    }
  }
}
```

`winningPlan` and `command` are two key field to pay attention.

# SECTION 4: DATA MODELING
## 4.1 Relationships
1. One-to-one
2. One-to-many
3. Many-to-many

## 4.2 Antipatterns
1. Massive array (an unbounded array)
    1. Cannot exceed 16MB per document
2. Massive number of collections
3. Unnecessary indexes
4. Bloated documents
    1. Storing large amounts of data together in a document when that data is not frequently accessed together.
5. Separating Data That Is Accessed Together

# SECTION 5: TOOLS AND TOOLING
## 5.1 Atlas Explorer

Browse collection -> find a document in any collection.

# SECTION 6: DRIVERS
## 6.1 Driver Definition

A MongoDB driver is a library that allows your application to connect to and interact with a MongoDB database. It's the **middleware** between your application and MongoDB database.

## 6.2 Driver Connection

```py
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

connection_string_uri = "mongodb+srv://<username>:<db_password>@dev-cert-exam-prep.5rcr9.mongodb.net/?appName=dev-cert-exam-prep"

# Create a new client and connect to the server
client = MongoClient(connection_string_uri, server_api=ServerApi('1'))
```

## 6.3 URI Components
- [Connection Strings - MongoDB Manual v8.0 - MongoDB Docs](https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-formats)
    - [Connection Strings Components](https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-components-1)
    - SRV connection format (new): A connection string with a hostname that corresponds to a DNS SRV record. Your driver or [mongosh](https://www.mongodb.com/docs/mongodb-shell/#mongodb-binary-bin.mongosh) queries the record to determine which hosts are running the [mongod](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) or [mongos](https://www.mongodb.com/docs/manual/reference/program/mongos/#mongodb-binary-bin.mongos) instances.
        - `mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]
    - Standard connection string format (old): A connection string that specifies all hosts that are running the [mongod](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) or [mongos](https://www.mongodb.com/docs/manual/reference/program/mongos/#mongodb-binary-bin.mongos) instances.
        - `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`

## 6.4 Connection Pooling

Connection pooling in MongoDB drivers refers to the practice of maintaining a pool of reusable connections to the MongoDB server. Each MongoClient instance manages a connection pool for each server in your MongoDB topology. The pool opens sockets on demand to support concurrent operations, allowing multiple threads or requests to share a limited number of connections efficiently.

Advantages of Connection Pooling:
1. Improved Performance: By reusing existing connections, connection pooling reduces the overhead associated with establishing new connections. This leads to faster execution of database operations.
2. Resource Management: Connection pools limit the number of open connections, preventing resource exhaustion and ensuring that the database server is not overwhelmed by too many simultaneous connections.
3. Concurrency Support: Connection pools enable multiple threads or requests to perform database operations concurrently, improving the overall throughput of the application.
4. Scalability: Connection pooling allows applications to scale more effectively by managing connections efficiently, which is particularly important in high-load environments.
5. Reduced Latency: Since connections are reused, the latency associated with creating new connections is minimized, leading to quicker response times for database operations.


Each driver may have specific settings and defaults for managing connection pools, such as maxPoolSize, minPoolSize, maxConnecting, and maxIdleTimeMS, which can be configured to optimize performance based on the application's needs.

## 6.5 Insert Syntax

```py
# Insert one document
result = collection.insert_one({"name": "Mongo's Burgers"})
print(result.acknowledged)

# Insert multiple documents
document_list = [
    {"name": "Mongo's Burgers"},
    {"name": "Mongo's Pizza"}
]
result = collection.insert_many(document_list)
print(result.acknowledged)
```

## 6.6 Update Syntax

```py
result = collection.update_one(query_filter, update_operation, upsert=True)
result = collection.update_many(query_filter, update_operation, upsert=True)
# Return value: matched_count, modified_count, raw_result, upserted_id
```

## 6.7 Delete Syntax

```py
query_filter = { "name": "Ready Penny Inn" }
result = restaurants.delete_one(query_filter)
result = restaurants.delete_many(query_filter)
# Return value: deleted_count, acknowledged, raw_result
```

## 6.8 Find Syntax

```py
result = collection.find_one(query, projection)
result = collection.find(query, projection)
```

## 6.9 Aggregation Syntax

```py
# Source: https://www.mongodb.com/developer/languages/python/python-quickstart-aggregation/
pipeline = [
   {
      "$match": {
         "title": "A Star Is Born"
      }
   }, 
   {
      "$sort": {
         "year": pymongo.ASCENDING
      }
   },
]
results = movie_collection.aggregate(pipeline)
for movie in results:
   print(" * {title}, {first_castmember}, {year}".format(
         title=movie["title"],
         first_castmember=movie["cast"][0],
         year=movie["year"],
   ))
```

## 6.10 MQL vs. Aggregation

```
# MQL
orders = db.orders.find({ "customer": "Alice" })

# Aggregation query
orders = db.orders.aggregate([
    { "$match": { "customer": "Alice" } }
])


# Incorrect MQL: $match is an aggregation stage
orders = db.orders.find([
    { "$match": { "customer": "Alice" } }
])

# Incorrect MQL: query is not an object (forgot "{..}")
orders = db.orders.find("customer": "Alice")
```



