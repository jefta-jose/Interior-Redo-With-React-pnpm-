import {TbArrowUpRight} from 'react-icons/tb'


const CatalogueSection = () => {

  type ItemType = {
    id:string,
    category:string,
    title:string,
    image:string,
    description:string
  };

  const items : ItemType[] = [
    {
        id: "01",
        category: "BEDROOM SETUP",
        title: "Cossy Bedroom Setup",
        image: "/src/assets/image/badroom.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
    },
    {
        id: "02",
        category: "KITCHEN SETUP",
        title: "Neat & Clean Kitchen",
        image: "/src/assets/image/kitchen1.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
    },
    {
        id: "03",
        category: "DROWING SETUP",
        title: "Family Drowing Room",
        image: "/src/assets/image/drowing.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
    },
    {
        id: "04",
        category: "LIVING SETUP",
        title: "Clean Family Room",
        image: "/src/assets/image/living.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
    },
]
  return (
    <div className=' container mx-auto grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x'>
      {
        items.map((item)=>{
          return(
            <div key={item.id}
              className=' relative overflow-hidden group'
            >
              <div>
                <img src={item.image} alt=""
                  width={380}
                  height={100}
                  className='w-full'
                />
              </div>

              <div className=' absolute top-0 p-8 bg-white bg-opacity-60 backdrop-blur m-12 dark:bg-gray-500 dark:text-black rounded-sm'>
                <div className='flex justify-between pb-4'>
                  <p>{item.category}</p>
                  <span>{item.id}</span>
                </div>
                <a className='block text-xl font-semibold' href="">{item.title}</a>
                <p>{item.category}</p>
                <a className='inline-flex items-center font-medium' href="">See Details <TbArrowUpRight className='ml-12'/> </a>
              </div>

              <div className=' inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:-translate-y-full md:border-b-0 hidden'>
                <p className=' tracking-wider rotate-90'>{item.category}</p>
                <span>{item.id}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CatalogueSection