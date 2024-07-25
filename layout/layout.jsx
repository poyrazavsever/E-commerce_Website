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
    <div className={classNames({
      "w-screen h-screen !overflow-x-hidden": true,
      "overflow-hidden ": isLoginVisible || isRegisterVisible,
      "": !isLoginVisible || !isRegisterVisible
    })}>

      <div>
        <LoginModal isLoginVisible={isLoginVisible} setIsLoginVisible={setIsLoginVisible} />
        <RegisterModal isRegisterVisible={isRegisterVisible} setIsRegisterVisible={setIsRegisterVisible} />
      </div>

      <div>

        <Navbar setIsLoginVisible={setIsLoginVisible} setIsRegisterVisible={setIsRegisterVisible} />

        <main className='mb-24'>{children}</main>

        <Footer />
      </div>

    </div>

  )
}

export default Layout