import React, { useEffect } from 'react'
import { AlertContainer } from './Alert.styles'

interface AlertProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return <AlertContainer>{message}</AlertContainer>
}

export default Alert
