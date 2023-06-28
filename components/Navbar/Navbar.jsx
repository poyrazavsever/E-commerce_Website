import NavbarBottom from "./NavbarBottom"
import NavbarTop from "./NavbarTop"

function Navbar({ setIsLoginVisible, setIsRegisterVisible }) {
  return (
    <nav className="!z-20">

      <div className="border-b border-neutral-200">
        <div className="container mx-auto">
          <NavbarTop setIsLoginVisible={setIsLoginVisible} setIsRegisterVisible={setIsRegisterVisible} />
          <NavbarBottom />
        </div>
      </div>


    </nav>
  )
}

export default Navbar