import Logo from "../assets/rise rapid logo.png"

const Navbar = () => {
  return (
    <nav className="h-20 bg-bg-nav flex flex-row justify-between items-middle content-center px-10">
      <img src={Logo} className="w-28 object-cover" alt="logo" />
        <ul className="flex flex-row space-between space-x-10 items-center text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
          <div className="bg-cta py-[0.625rem] px-9 rounded-md">
            +447761 929039
          </div>
        </ul>
    </nav>
  )
}

export default Navbar