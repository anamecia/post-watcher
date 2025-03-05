import { SignedIn, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

const PrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-14  sticky top-0 z-10 flex items-center justify-between bg-gray-100 px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="text-black">
            PostWatcher
          </Link>
        </h1>
        <div className="flex gap-4">
          <SignedIn>
            <SignOutButton>
              <button className="bg-pink-600 px-4 py-2 rounded-3xl text-white">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
      {children}
    </div>
  )
}

export default PrivateLayout
