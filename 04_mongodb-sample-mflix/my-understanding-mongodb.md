# My Understanding of MongoDB Syntax and Queries

This document provides a comprehensive analysis of the MongoDB operations and syntax learned throughout the `sample_mflix` dataset exercises.

---

## 1. Core Database Operations

### Database Selection
- **Syntax:** `use('database_name');`
- **Purpose:** Sets the context for subsequent commands to a specific database.

### Basic Retrieval
- **`find(query, projection)`**: Retrieves multiple documents matching the query.
- **`findOne(query, projection)`**: Retrieves the first document that matches the query. Useful for fetching specific records by unique IDs.
- **`count()` / `countDocuments()`**: Returns the number of documents matching a query. `countDocuments()` is preferred for accuracy in modern MongoDB.

---

## 2. Querying and Filtering

### Exact Matches and Nested Fields
MongoDB uses a JSON-like structure for queries. To access nested fields (Embedded Documents), use **Dot Notation** with quotes:
```javascript
db.theaters.find({ "location.address.city": "La Quinta" });
```

### Comparison Operators
Used to filter data based on ranges:
- `$gt`: Greater than
- `$gte`: Greater than or equal to
- `$lt`: Less than
- `$lte`: Less than or equal to
- `$ne`: Not equal

### Logical Operators
- **Implicit AND**: Comma-separated fields in a query object act as an AND.
- **`$or`**: Matches documents that satisfy at least one of the expressions in an array.
- **`$in`**: Matches any of the values specified in an array.
- **`$all`**: Matches arrays that contain all the specified elements.

### Pattern Matching (Regex)
Used for flexible string searching:
- **Syntax:** `{ field: { $regex: "pattern", $options: "i" } }`
- **Example:** Searching for plots containing "American" (case-insensitive).

---

## 3. Data Transformation and Sorting

### Projection
Controls which fields are returned in the result set to save bandwidth and improve performance.
- `1`: Include the field.
- `0`: Exclude the field (commonly used to hide `_id`).
```javascript
db.movies.find({}, { title: 1, _id: 0 });
```

### Sorting and Limiting
- **`.sort({ field: 1 })`**: `1` for Ascending, `-1` for Descending.
- **`.limit(n)`**: Restricts the result set to `n` documents.

### Working with Dates and IDs
- **`ISODate("YYYY-MM-DD")`**: Used for date comparisons.
- **`ObjectId("id_string")`**: Used to query by the unique MongoDB document identifier.

---

## 4. Aggregation Framework
The aggregation framework is a powerful pipeline-based tool for data processing.

### Key Stages Analyzed:
- **`$match`**: Filters documents (similar to `find`).
- **`$project`**: Reshapes documents (renaming fields, calculating new ones).
- **`$limit`**: Restricts the number of documents passing to the next stage.
- **`$group`**: Groups documents by a specified identifier (not extensively used in the base exercises but seen in `alt` solutions).

### Example Pipeline:
```javascript
db.movies.aggregate([
    { $match: { directors: { $in: ["Hal Roach"] } } },
    {
        $project: {
            _id: 0,
            title: "$title",
            totalWins: { $sum: "$awards.wins" }, // Aggregating nested data
        },
    }, // << This comma! :D
]);
```

---

## 5. Key Architectural Insights
1. **Schema Flexibility**: The exercises show that documents can have varying structures (e.g., some movies have `awards`, others might not), and MongoDB handles this gracefully.
2. **Array Handling**: MongoDB simplifies querying arrays. A query like `{ cast: "Actor Name" }` automatically searches for that name within the `cast` array.
3. **Performance**: Using `projection` and `limit` are critical patterns for building scalable applications.
