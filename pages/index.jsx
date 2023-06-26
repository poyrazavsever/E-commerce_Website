import { Inter } from 'next/font/google'

// Components 
import Slider from '../components/Home/Slider'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <p>
      <Slider />
    </p>
  )
}
