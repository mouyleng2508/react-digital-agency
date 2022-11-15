import about from '../../images/about.jpg'

export default function AboutSection() {
    return <div className="
      h-screen
      grid
      lg:grid-cols-2
      gap-9
      place-items-center
      lg:px-20
      md:px-16
      px-6
      lg:py-16
      pt-44
      bg-blue-50
    ">
        <div className="">
            <div
                className="text-base text-secondary uppercase font-semibold"
                data-aos="zoom-in"
                data-aos-duration="1900"
            >
                About us
            </div>
            <div
                className="font-bold lg:text-4xl text-2xl text-primary capitalize py-3"
                data-aos="fade-up"
                data-aos-duration="2100"
            >
                Boost Your Business <br />
                With Analay
            </div>
            <div
                className="text-xs text-primary"
                data-aos="zoom-in"
                data-aos-duration="2100"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                distinctio sed fugiat, id at, mollitia laboriosam placeat nulla earum
                nisi sit assumenda optio in ipsum ex ut provident aliquid dolorem!
            </div>
            <div className="pt-4" data-aos="fade-up-left" data-aos-duration="1800">
                <button
                    className="
            bg-primary
            shadow-lg
            py-3
            px-6
            flex
            space-x-2
            items-center
            justify-center
            text-white
            rounded-full
          "
                >
                    <div className="text-sm font-medium capitalize">More details</div>

                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div className="hidden lg:flex items-center lg:space-x-4 space-x-2">
            <div>
                <img
                    className="object-cover w-full shadow-lg rounded-3xl rounded-tr-none"
                    src={about}
                    alt=""
                />
            </div>
        </div>
    </div>
}