import shoe1 from '../../public/card/s1.png'
import shoe2 from '../../public/card/s2.png'
import shoe3 from '../../public/card/s3.png'
import shoe4 from '../../public/card/s4.png'
import eclipse from '../../public/card/e1.png'
import heart from '../../public/card/h1.png'
import Star from '../../public/bannerImages/star.png'

const Card = () => {
  const cardData = [
    {
      rating: '(11.6k Reviews)',
      name: 'Nike Running shoe',
      price: '100',
      sold: '500',
      image: shoe1,
    },
    {
      rating: '(11.6k Reviews)',
      name: 'Nike shoe Airmax',
      price: '110',
      sold: '100',
      image: shoe2,
    },
    {
      rating: '(11.6k Reviews)',
      name: 'Jordan Sneaker',
      price: '50',
      sold: '115',
      image: shoe3,
    },
    {
      rating: '(11.6k Reviews)',
      name: 'Nike Running shoe 2',
      price: '220',
      sold: '210',
      image: shoe4,
    },
  ]

  return (
    <>
      <div>
        <h1 className="text-5xl font-black leading-16 uppercase text-[#677DA8] mb-16 w-full md:w-3/4 md:h-71 flex-none text-center md:text-left mx-auto">
          popular products
        </h1>
      </div>
      <div className="w-screen h-auto flex justify-center items-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-sm w-full rounded overflow-hidden"
            >
              <div className='border-gradient w-[100%] p-0.5  h-[15.1rem] items-center flex justify-center rounded-tl-[19px] rounded-tr-[19px] relative'>
               
              <div
                className="w-[99%] mt-1 h-[15rem] bg-white items-center flex justify-center rounded-tl-[19px] rounded-tr-[19px] relative"
                style={{
                  // background: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span className="absolute right-5 top-5">
                  <img src={eclipse}></img>
                  <span className="absolute right-1.5 top-1.5" >
                     <img src={heart} alt="" />
                  </span>
                </span>
                <div className="h-auto w-[250px]">
                  <img className="w-full" src={card.image} />
                </div>
              </div>
              </div>

              <div className="px-6 py-4">
                <div className="text-base mb-2 inline">
                  <span className="inline-flex items-center">
                    <img src={Star} alt="Star" className="mr-1"></img>
                    {card.rating}
                  </span>
                </div>

                <p className="text-xl">{card.name}</p>
                <div className="font-bold text-lg mb-2 lg:justify-between flex flex-wrap mt-2">
                  <span className="w-full lg:w-auto lg:flex-grow-0 lg:flex-shrink-0">
                    ${card.price}
                  </span>
                  <span className="w-full lg:w-auto lg:flex-grow-0 lg:flex-shrink-0 line-through">
                    {card.sold} - <span className="font-thin">Sold Out</span>
                  </span>
                  <button className="w-full p-4 lg:w-auto inline-flex text-sm items-center justify-center h-[2rem]  rounded-[0.5rem] bg-white text-[#677DA8] mt-2 lg:mt-0">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Card
