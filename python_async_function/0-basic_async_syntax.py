#!/usr/bin/env python3

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """random delay between 0 and max_delay"""
    max_delay = random.uniform(0, max_delay)
    await asyncio.sleep(max_delay)
    return max_delay
