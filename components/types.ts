// hooks/usePresaleLogic.ts
import { useState, useEffect } from 'react'

export const usePresaleLogic = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 0,
    seconds: 0
  })
  const [isPresaleEnded, setIsPresaleEnded] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [currentPrice, setCurrentPrice] = useState(0.0001)

  const fetchTimerData = async () => {
    try {
      const response = await fetch('/api/timer')
      const data = await response.json()
      
      setTimeLeft(data.timeLeft)
      setCurrentStage(data.currentStage)
      setCurrentPrice(data.currentPrice)
      setIsPresaleEnded(data.isPresaleEnded)
    } catch (error) {
      console.error('Failed to fetch timer data:', error)
    }
  }

  useEffect(() => {
    fetchTimerData()
    const timer = setInterval(fetchTimerData, 1000)
    return () => clearInterval(timer)
  }, [])

  return {
    timeLeft,
    isPresaleEnded,
    currentStage,
    currentPrice,
  }
}