#!/usr/bin/env python3

"""Return a list of tuples with the length"""

from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples where each tuple contains
    an element of the sequence and the length of that element."""
    return [(i, len(i)) for i in lst]
