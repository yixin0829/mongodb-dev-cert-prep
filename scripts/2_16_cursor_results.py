from pymongo import MongoClient
import time
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.getenv("DRIVERS_CONNECTION_STRING"))
db = client["test"]
collection = db["test_cursor_fetch"]

# If collection is empty, create 10,000 test documents
if collection.count_documents({}) == 0:
    collection.insert_many(
        [{"name": f"Student {i}", "age": i % 30} for i in range(10000)]
    )
    print("Inserted 10,000 documents")


# 1. Fetch all documents using list(cursor)
start_time = time.time()
docs = list(collection.find())  # Fetches all at once
end_time = time.time()
print(f"list(cursor) took {end_time - start_time:.5f} seconds")


# 2. Fetch all documents using for loop
def process_doc(doc):
    return doc["name"]


start_time = time.time()
for doc in collection.find():  # Fetches documents one by one with some processing
    process_doc(doc)
end_time = time.time()
print(f"for loop took {end_time - start_time:.5f} seconds")
