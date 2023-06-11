import Navbar from '../../components/navbar'
import Banner from '../../components/banner'

const homepage = () => {
  return (
    <>
      <div
        className="absolute w-full lg:h-full left-0 top-0"
        style={{
          background:
            'linear-gradient(104.58deg, #FFDCF3 2.1%, #D7FFFF 100.64%)',
          mixBlendMode: 'darken',
        }}
      >
          {/* Navbar */}
          <div className="absolute top-0 w-full">
            <Navbar></Navbar>
            <Banner></Banner>
          </div>
        </div>
    </>
  )
}

export default homepage
