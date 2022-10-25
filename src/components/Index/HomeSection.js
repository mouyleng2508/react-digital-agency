import homeBackground from '../../images/home.jpg'

export default function HomeSection() {
    return <div className="lg:grid lg:grid-cols-2 h-screen lg:bg-none bg-primary">
        <div
            className="
        bg-white
        flex flex-col
        justify-center
        items-start
        lg:px-20
        md:px-16
        px-6
        lg:py-16
        pt-44
        text-white
      "
        >
            <div

                className="text-base text-primary capitalize font-bold"
            >
                Best Agency in <span className="text-secondary">Asia</span>
            </div>
            <div
                className="font-bold lg:text-4xl text-2xl capitalize py-3 text-secondary"
                data-aos="fade-up"
                data-aos-duration="1900"
            >
                Digital Agency <br />
                <span class="text-primary font-light">& Solutions.</span>
            </div>
            <div
                className="text-xs text-gray-700"
                data-aos="fade-up"
                data-aos-duration="2900"
            >
                Quick grow your business & boost up sale with professional startup.
            </div>
            <div
                className="pt-4 flex space-x-3"
                data-aos="fade-up-left"
                data-aos-duration="2800"
            >
                <button
                    className="
            bg-primary
            py-3
            px-6
            flex
            space-x-2
            items-center
            justify-center
            rounded-full
          "
                >
                    <div className="lg:text-sm text-xs font-medium">Get Started</div>
                    <div className="bg-white rounded-full">
                        <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                            />
                        </svg>
                    </div>
                </button>
                <button
                    className="
                        py-3
                        px-6
                        flex
                        space-x-2
                        items-center
                        justify-center
                        rounded-full
                        border border-primary
                        hover:bg-primary hover:bg-opacity-10
                        shadow-md
          "
                >
                    <div className="lg:text-sm text-xs font-semibold text-primary">
                        See Live Demo
                    </div>
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M1,21H23L12,2" />
                    </svg>
                </button>
            </div>
        </div>
        <div
            className="bg-no-repeat bg-cover bg-left hidden lg:block"
            style={{ backgroundImage: `url(${homeBackground})` }}
        ></div>
    </div>
}