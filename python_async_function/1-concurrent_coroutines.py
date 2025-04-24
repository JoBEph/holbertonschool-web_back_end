Python

#!/usr/bin/env python3

""" concurrent coroutines """
import asyncio
import random
from typing import List


async def wait_random(max_delay: int = 10) -> float:
    """random delay between 0 and max_delay"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ takes in an integer and a max_delay integer as arguments"""
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delays)
