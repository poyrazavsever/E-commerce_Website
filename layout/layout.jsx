import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import LoginModal from '@/components/LoginModal'
import RegisterModal from '@/components/RegisterModal'
import classNames from 'classnames';

function Layout({ children }) {


  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <>
      <LoginModal isLoginVisible={isLoginVisible} setIsLoginVisible={setIsLoginVisible} />
      <RegisterModal isRegisterVisible={isRegisterVisible} setIsRegisterVisible={setIsRegisterVisible} />

      <div>

        <Navbar setIsLoginVisible={setIsLoginVisible} setIsRegisterVisible={setIsRegisterVisible} />

        <main className='mb-24'>{children}</main>

        <Footer />
      </div>

    </>

  )
}

export default Layout