import NavbarBottom from "./NavbarBottom"
import NavbarTop from "./NavbarTop"
import MobileNavbar from "./MobileNavbar"

function Navbar({ setIsLoginVisible, setIsRegisterVisible }) {
  return (
    <nav className="!z-20">

      <div className="border-b border-neutral-200">
        <div className="mobile:hidden">
          <NavbarTop setIsLoginVisible={setIsLoginVisible} setIsRegisterVisible={setIsRegisterVisible} />
          <NavbarBottom />
        </div>

        <div className="desktop:hidden">
          <MobileNavbar />
        </div>
      </div>


    </nav>
  )
}

export default Navbar