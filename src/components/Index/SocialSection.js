export default function SocialSection() {
  //
  const logoItems = [
    {
      logo: "./images/linkedin.png",
      title: "Linkedin",
    },
    {
      logo: "./images/pinterest.png",
      title: "Pinterest",
    },
    {
      logo: "./images/fb.png",
      title: "Facebook",
    },
    {
      logo: "./images/apple.png",
      title: "Apple",
    },
    {
      logo: "./images/slack.jpeg",
      title: "Slack",
    },
  ];
  //
  //
  return (
    <div
      className="
      w-full
      border
      py-6
      px-12
      flex
      rounded-md
      shadow-md shadow-secondary
      justify-between
      bg-white
    "
    >
      <div>
        {logoItems.map((logo, index) => {
          <div>
            <img
              className="object-contain h-8 w-8 rounded-full"
              src={`${logo.logo}`}
              alt=""
            />
          </div>;
        })}
      </div>
      {/* <div
      v-for="(l, i) in logoItems"
      :key="i"
      className="flex items-center space-x-3"
    >
      <div>
        <img
          className="object-contain h-8 w-8 rounded-full"
          :src="`${l.logo}`"
          alt=""
        />
      </div>
      <div className="capitalize font-bold text-primary hidden md:block">
        {{ l.title }}
      </div>
    </div> */}
    </div>
  );
}
