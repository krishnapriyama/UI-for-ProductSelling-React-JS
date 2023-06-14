import img1 from '../../public/card/1.png'
import img2 from '../../public/card/2.png'
import img3 from '../../public/card/3.png'
import img4 from '../../public/card/4.png'
import img5 from '../../public/card/5.png'
import img6 from '../../public/card/6.png'
import img7 from '../../public/card/7.png'
import img8 from '../../public/card/8.png'
import img9 from '../../public/card/9.png'
import img10 from '../../public/card/10.png'
import img11 from '../../public/card/11.png'
import img12 from '../../public/card/12.png'

const shopcard = () => {
  const cards = [
    { id: 1, price: '123', title: 'Samsung Smart Watch', imageSrc: img1 },
    { id: 2, price: '123', title: 'Apple Monitor Pro', imageSrc: img2 },
    { id: 3, price: '123', title: 'Apple Watch Series 4', imageSrc: img3 },
    { id: 4, price: '123', title: 'Google Pixel 4 XL', imageSrc: img4 },
    { id: 5, price: '123', title: 'Amazon Smart Speaker', imageSrc: img5 },
    { id: 6, price: '123', title: 'Apple MacBook Pro 16', imageSrc: img6 },
    { id: 7, price: '123', title: 'Apple iPad 10.2', imageSrc: img7 },
    { id: 8, price: '123', title: 'Microsoft Surface Book', imageSrc: img8 },
    { id: 9, price: '123', title: 'Google Nest', imageSrc: img9 },
    { id: 10, price: '123', title: 'Apple iMac Pro', imageSrc: img10 },
    { id: 11, price: '123', title: 'Samsung Smart Watch', imageSrc: img11 },
    { id: 12, price: '123', title: 'Apple Air Pods 2', imageSrc: img12 },
    // Add more card objects as needed
  ]

  return (
    <div className="flex flex-wrap">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto  mt-6 p-4"
        >
          <div className="overflow-hidden shadow-lg bg-[#f2f4f7] p-4 rounded-lg">
            <div className="flex justify-center">
              <div className='w-full flex justify-center'>
                <img
                  className="object-cover"
                  src={card.imageSrc}
                  alt={card.title}
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-4">
              <div className="font-bold text-sm text-center mt-2">
                {card.title}
              </div>
              <button className="bg-white p-2 rounded-full mt-4 text-sm font-bold">
                $ {card.price}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default shopcard
