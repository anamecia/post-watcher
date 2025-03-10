import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

const PrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full flex">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default PrivateLayout
