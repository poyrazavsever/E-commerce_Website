import NavbarBottom from "./NavbarBottom"
import NavbarTop from "./NavbarTop"

function Navbar() {
  return (
    <nav>

      <div className="border-b border-neutral-200">
        <div className="container mx-auto">
          <NavbarTop />
          <NavbarBottom />
        </div>
      </div>


    </nav>
  )
}

export default Navbar