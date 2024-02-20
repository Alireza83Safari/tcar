import { getBanners } from "@/actions/banner";
import { bannerType } from "@/types/banner.type";
import Image from "next/image";

export default async function page() {
  const banners = await getBanners();

  return (
    <div
      className="min-h-full"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dmywzd0yw/image/upload/v1703789411/ktyjoemn9ppwoawhvmxu.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
      data-aos-once="true"
    >
      {!!banners?.length &&
        banners?.map((banner: bannerType) => (
          <nav
            key={banner._id}
            className="grid md:grid-cols-3 md:py-32 py-20 px-8 xl:container m-auto"
          >
            <div className="col-span-1">
              <h1
                className="text-5xl font-bold text-purple"
                style={{ lineHeight: "60px" }}
              >
                {banner?.title}
              </h1>
              <p className="mt-12 text-gray-200" style={{ lineHeight: "33px" }}>
                {banner?.description}
              </p>
            </div>
            <div className="col-span-2 md:mt-0 mt-20 lg:pr-24 md:pr-4">
              <Image
                width="500"
                height="500"
                src={String(banner?.image)}
                className="w-[42rem] max-h-[25rem] object-contain"
                alt="car banner"
              />
            </div>
          </nav>
        ))}
    </div>
  );
}
