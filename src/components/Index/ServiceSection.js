import Arrow from "../Icons/Arrow";
import Check from "../Icons/Check";
import Code from "../Icons/Code";
import Network from "../Icons/Network";
import SquareBadge from "../Icons/SquareBadge";

export default function ServiceSection() {
  return (
    <div className="lg:h-screen grid lg:grid-cols-2 gap-6 place-items-center px-20">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid lg:grid-rows-2 gap-4">
          {/* <!-- web development --> */}
          <div className="border p-6 shadow-md rounded-2xl">
            <Code />
            <div className="text-primary font-bold pt-2">
              Web <span className="text-secondary">Developement</span>
            </div>
            <div className="text-xs text-gray-500 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              quibusdam ut libero?
            </div>
            <button
              className="
              py-2
              px-3
              bg-primary
              text-white
              rounded-full
              flex
              items-center
              space-x-1
            "
            >
              <div className="text-xs">More details</div>
              <Arrow className="h-5 w-5" />
            </button>
          </div>

          {/* <!-- SEO & Marketing --> */}
          <div className="border p-6 shadow-md rounded-2xl">
            <Check className="h-12 w-12 text-primary" />
            <div className="text-primary font-bold pt-2">
              SEO & <span className="text-secondary">Marketing</span>
            </div>
            <div className="text-xs text-gray-500 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              quibusdam ut libero?
            </div>
            <button
              className="
              py-2
              px-3
              bg-primary
              text-white
              rounded-full
              flex
              items-center
              space-x-1
            "
            >
              <div className="text-xs">More details</div>
              <Arrow />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-rows-2 gap-4">
          {/* UI/UX  */}
          <div className="border p-6 shadow-md rounded-2xl">
            <SquareBadge />
            <div className="text-primary font-bold pt-2">
              UI/UX <span className="text-secondary">Analysis</span>
            </div>
            <div className="text-xs text-gray-500 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              quibusdam ut libero?
            </div>
            <button
              className="
              py-2
              px-3
              bg-primary
              text-white
              rounded-full
              flex
              items-center
              space-x-1
            "
            >
              <div className="text-xs">More details</div>
              <Arrow className="h-5 w-5" />
            </button>
          </div>

          {/* <!-- Graphic Design --> */}
          <div className="border p-6 shadow-md rounded-2xl">
            <Network />
            <div className="text-primary font-bold pt-2">
              Graphic<span className="text-secondary"> Design</span>
            </div>
            <div className="text-xs text-gray-500 pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              quibusdam ut libero?
            </div>
            <button
              className="
              py-2
              px-3
              bg-primary
              text-white
              rounded-full
              flex
              items-center
              space-x-1
            "
            >
              <div className="text-xs">More details</div>
              <Arrow className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
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
          data-aos="fade-down"
          data-aos-duration="1900"
          className="text-base text-primary font-bold uppercase"
        >
          Service
        </div>
        <div
          className="font-bold lg:text-4xl text-2xl capitalize py-3 text-secondary"
          data-aos="fade-up"
          data-aos-duration="1900"
        >
          Our Service <br />
          <span className="text-primary font-light">Include.</span>
        </div>
        <div
          className="text-xs text-gray-700"
          data-aos="fade-up"
          data-aos-duration="2900"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          perferendis quo vel illum officia sunt rem perspiciatis aliquid
          repudiandae molestiae esse! Veniam cum vitae, deleniti nisi natus
          rerum aliquid voluptates.
        </div>
        <div className="pt-4" data-aos="fade-up-left" data-aos-duration="2800">
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
              All Services
            </div>
            <div className="bg-primary rounded-full">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
