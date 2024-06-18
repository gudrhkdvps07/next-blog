'use client'
import React, { useState } from 'react'

export default function PingpongPage() {
  const [ls, setLs] = useState(0) //left score
  const [lss, setLss] = useState(0) //left set score
  const [rs, setRs] = useState(0) //right score
  const [rss, setRss] = useState(0) //right set score

  const ServeStyle = 'border-y-4 border-white'
  const noServe = ''
  const [lsStyle, setLsStyle] = useState('border-y-4 border-white')
  const [rsStyle, setRsStyle] = useState('')

  const finalScore = 10 //21
  const serveChange = 2 //5

  const leftScore = () => {
    if (ls >= finalScore) {
      setLss(lss + 1)
      setLs(0)
      setRs(0)
    } else {
      setLs(ls + 1)
    }
  }
  const rightScore = () => {
    setRs(rs + 1)
    if (rs >= finalScore) {
      setRss(rss + 1)
      setLs(0)
      setRs(0)
    } else {
      setRs(rs + 1)
    }
  }

  const checkServe = () => {
    let total = ls + rs
    if (total % (serveChange * 2) === 0) {
      setLsStyle(ServeStyle)
      setRsStyle(noServe)
    } else if (total % (serveChange * 2) === serveChange + 1) {
      setRsStyle(ServeStyle)
      setLsStyle(noServe)
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 bg-blue-600 h-80" onClick={leftScore}>
        <h1 className="text-4xl text-center text-white py-5">청팀 - {lss}</h1>
        <p className="text-9xl text-center text-white mt-10">
          <span className={lsStyle}>{ls}</span>
        </p>
      </div>
      <div className="w-1/2 bg-red-600 h-80" onClick={rightScore}>
        <h1 className="text-4xl text-center text-white py-5">홍팀 - {rss}</h1>
        <p className="text-9xl text-center text-white mt-10">
          <span className={rsStyle}>{rs}</span>
        </p>
      </div>
    </div>
  )
}
