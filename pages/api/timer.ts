// pages/api/timer.ts
import { Redis } from '@upstash/redis';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Redis client with environment variables
const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,

});

// Configuration constants
const PRESALE_DURATION_HOURS = 15
const SECONDS_PER_HOUR = 3600
const TOTAL_DURATION_SECONDS = PRESALE_DURATION_HOURS * SECONDS_PER_HOUR
const INITIAL_PRICE = 0.001


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Attempt to get existing start time
    let startTime: number | null = await redis.get('presale_start_time') as number | null
    
    // If no start time exists, set it now
    if (!startTime) {
      startTime = Date.now()
      await redis.set('presale_start_time', startTime)
    }

    // Current time
    const currentTime = Date.now()
    
    // Calculate elapsed and remaining time
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000)
    const remainingSeconds = Math.max(0, TOTAL_DURATION_SECONDS - elapsedSeconds)

    // Calculate time left
    const hours = Math.floor(remainingSeconds / SECONDS_PER_HOUR)
    const minutes = Math.floor((remainingSeconds % SECONDS_PER_HOUR) / 60)
    const seconds = remainingSeconds % 60

    // Calculate stage and price with linear progression
    const currentStage = Math.min(15, Math.max(1, 15 - hours))
    const currentPrice = parseFloat((INITIAL_PRICE * currentStage).toFixed(3))

    // Prepare response
    const response = {
      timeLeft: {
        hours,
        minutes,
        seconds
      },
      currentStage,
      currentPrice,
      isPresaleEnded: remainingSeconds <= 0,
      totalDuration: TOTAL_DURATION_SECONDS,
      elapsedSeconds
    }

    res.status(200).json(response)
  } catch (error) {
    console.error('Timer API error:', error)
    res.status(500).json({ error: 'Failed to fetch timer data' })
  }
}