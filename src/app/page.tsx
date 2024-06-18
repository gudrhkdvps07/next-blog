import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8 text-center">My Next.js Blog</h1>

      <div className="flex  gap-2">
        <Image
          src="/blog1.jpg"
          alt="blog"
          width="300"
          height="300"
          className="w-1/3"
        />
        <Image
          src="/blog2.jpg"
          alt="blog"
          width="300"
          height="300"
          className="w-1/3"
        />
        <Image
          src="/blog3.jpg"
          alt="blog"
          width="300"
          height="300"
          className="w-1/3"
        />
      </div>
    </div>
  )
}
