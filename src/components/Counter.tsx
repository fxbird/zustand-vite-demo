import React from 'react'
import { useCounterStore } from '../store/counter-store'

export const Counter: React.FC = () => {
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, textAlign: 'center' }}>
      <h2>Zustand Counter</h2>
      <p style={{ fontSize: 24 }}>{count}</p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
