#!/usr/bin/env python3

""" concurrent coroutines """
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """random delay between 0 and max_delay"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> list:
    """wait for n random delays and return a list of the delays"""
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)

if __name__ == "__main__":
    async def test():
        print(await wait_n(5, 5))
        print(await wait_n(10, 7))
        print(await wait_n(10, 0))

    asyncio.run(test())
