import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-blue-950 text-white px-8 py-4">
      <div className="flex gap-2">
        <Image
          src="/blog1.jpg"
          alt="blog"
          width="30"
          height="30"
          className="rounded-full"
        />
        <Link href="/" className="text-xl font-bold">
          NEXT BLOG
        </Link>
      </div>

      <div>
        <Link href="/intro" className="px-2 hover:text-gray-400">
          Intro
        </Link>
        <Link href="/project" className="px-2 hover:text-gray-400">
          Project
        </Link>
        <Link href="/photo" className="px-2 hover:text-gray-400">
          Photo
        </Link>
        <Link href="/pingpong" className="px-2 hover:text-gray-400">
          Pingpong
        </Link>
      </div>
    </nav>
  )
}
