import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <div className='max-w-[600px] mx-auto'>
        <h1 className='text-6xl mb-4'>The best Journal app, period.</h1>
        <p className='text-2xl text-white/60 mb-4'> This is the best app for tracking your mood through our your life. All you do have to be honest.</p>
        <div>
          <Link href='./journal'><button className='bg-blue-600 px-4 py-2 rounded'>Get Started</button></Link>
        </div>
      </div>
    </main>
  )
}
