import Navbar from '../../components/navbar'
import Banner from '../../components/banner'
import Card from '../../components/card'

const homepage = () => {
  return (
    <>
      {/* Navbar */}
      <div
        className="absolute top-0 w-full"
        style={{
          background:
            'linear-gradient(104.58deg, #FFDCF3 2.1%, #D7FFFF 100.64%)',
          mixBlendMode: 'darken',
        }}
      >
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="mt-28 w-full">
          
          <Card></Card>
        </div>
      </div>
    </>
  )
}

export default homepage
