import background from '../../../assets/images/background-1.png'
import image from '../../../assets/images/image-auth.png'

export default function AuthLayout({children}) {
  return (
    <main className='min-h-screen flex' style={{backgroundImage: `url(${background})`}}>
      <section className='w-2/5 flex flex-col justify-center items-center bg-[${background}] relative'>
        <h3 className='text-4xl font-bold text-center text-white w-96 leading-relaxed h-1/2 flex justify-center items-center'>Setiap Langkahmu untuk Lingkungan Dimulai di Sini!</h3>
        <div className='w-96  flex justify-center items-center'>
        <img src={image} alt="" className=''/>
        </div>
      </section>
      <section className='w-3/5 flex justify-center items-center bg-white shadow-2xl shadow-gray-500 rounded-s-3xl'>
        {children}
      </section>
    </main>
  )
 }
 