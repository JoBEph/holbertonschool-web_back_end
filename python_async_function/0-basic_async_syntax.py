#!/usr/bin/env python3

""" basic async syntax """

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """random delay between 0 and max_delay"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
