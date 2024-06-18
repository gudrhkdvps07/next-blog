import Link from 'next/link'
import React from 'react'

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">프로젝트</h1>

      <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md mb-4">
        <h1 className="text-lg font-bold">HCJ Demo</h1>
        <p>HTML, CSS, Javascript의 종합 활용 예제 </p>
        <Link href="#" className="text-green-800">
          link
        </Link>
      </div>
      <div className="bg-gray-200 border border-slate-400 px-4 py-2 rounded-md mb-4">
        <h1 className="text-lg font-bold">Kiosk</h1>
        <p>메뉴 주문 키오스크 예제 </p>
        <Link href="#" className="text-green-800">
          link
        </Link>
      </div>
    </div>
  )
}
