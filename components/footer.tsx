
const Footer = () => {
  return (
    <div className= "absolute items-center pt-[140px] pb-[32px] pl-[220px] pr-[220px] top-[5195px] bg-[#043873] h-[461px] w-[1921px] gap-[200px] flex text-white">
 <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            
            <h2 className="text-xl font-bold mb-4">Whitespace</h2>
            <p className="text-sm">
              Whitespace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-300">Overview</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Customer stories</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Guides & tutorials</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Help center</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-gray-300">About us</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Media kit</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          ©2021 Whitespace LLC.
        </div>
      </div>
    </div>
  )
}

export default Footer
