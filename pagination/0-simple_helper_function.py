#!/usr/bin/env python3

"""index_range that takes two integer arguments page and page_size"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """ return start index and end index"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
