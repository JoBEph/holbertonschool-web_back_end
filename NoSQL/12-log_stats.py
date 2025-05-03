#!/usr/bin/env python3
"""Module for log_stats function"""
from pymongo import MongoClient


def log_stats():
    """Provides some stats about Nginx logs stored in MongoDB"""
    try:
        # Connect to MongoDB
        client = MongoClient('localhost', 27017)
        db = client.logs
        collection = db.nginx

        # Count total logs
        logs_qty = collection.count_documents({})
        print(f"{logs_qty} logs")

        # Count logs by HTTP method
        methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
        print("Methods:")
        for method in methods:
            method_qty = collection.count_documents({"method": method})
            print(f"\tmethod {method}: {method_qty}")

        # Count logs for specific status check
        status_check = collection.count_documents({
            "method": "GET",
            "path": "/status"
        })
        print(f"{status_check} status check")

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    log_stats()
