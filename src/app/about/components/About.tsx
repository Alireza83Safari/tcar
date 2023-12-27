"use client";
import React from "react";
import Accordion from "../../../components/Accordion";
import Button from "../../../components/Form/Button";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";

const aboutItem = [
  {
    id: 1,
    title: "کارشناسی تخصصی خودرو در محل",
    desc: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    img: "/img/car-finder/icons/car.svg",
  },
  {
    id: 3,
    title: "محاسبه دقیق قیمت خودرو",
    desc: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    img: "img/car-finder/icons/building.svg",
  },
  {
    id: 3,
    title: "خرید خودروهای کارشناسی‌شده",
    desc: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    img: "/img/car-finder/icons/flag.svg",
  },
];

const aboutLogos = [
  { id: 1, img: "/img/car-finder/brands/provert.svg" },
  { id: 2, img: "/img/car-finder/brands/pentel.svg" },
  { id: 3, img: "/img/car-finder/brands/chase.svg" },
  { id: 4, img: "/img/car-finder/brands/real-seguros.svg" },
  { id: 5, img: "/img/car-finder/brands/build.svg" },
  { id: 6, img: "/img/car-finder/brands/cargil.svg" },
];

const About = () => {
  return (
    <main className="mt-20 xl:container mx-auto sm:px-8">
      <div className="relative">
        <Image
          src="/img/car-finder/about/hero-img.jpg"
          alt="about-car"
          width={880}
          height={400}
          className="2xl:w-[64rem] object-contain"
        />
        <div className="absolute md:top-36 sm:top-24 top-16 left-4">
          <h2 className="text-3xl">درباره ما</h2>
          <p className="text-gray-200 max-w-[28rem] sm:mt-8 mt-4">
            درباره ما ما معتقدیم که خرید و فروش خودرو باید ساده و لذت بخش باشد،
            نه زمان بر، پیچیده یا استرس زا.
          </p>
          <Button href="">جستجو خودرو</Button>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="my-8 text-center text-3xl">چرا همراه مکانیک؟</h2>

        <div className="grid sm:grid-cols-3">
          {aboutItem.map((item) => (
            <div
              className="m-auto mx-5 text-center rounded-xl bg-black-100 md:p-5 p-2 group sm:my-0 my-4"
              key={item.id}
            >
              <div className="flex justify-center group-hover:bg-white rounded-lg duration-300 w-14 h-14 m-auto">
                <Image
                  src={item.img}
                  alt="car"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="my-4 mt-6 text-lg">{item.title}</h2>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-24">
        <div>
          <Image
            src="/img/car-finder/about/02.jpg"
            className="rounded-lg object-contain"
            alt="car"
            width={600}
            height={600}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="md:px-8 px-4">
            <h2 className="my-8 text-3xl">شرایط فروش خودرو</h2>
            <p className="text-sm text-gray-200 max-w-[28rem]">
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.
            </p>
            <Button href="/car">فروش خودرو</Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-24">
        <div className="flex justify-center items-center">
          <div className="md:px-8 px-4">
            <h2 className="my-8 text-3xl">جستجوی ماشین</h2>
            <p className="text-sm text-gray-200 max-w-[28rem] mb-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <Button href="/car">جستجو خودرو</Button>
          </div>
        </div>

        <div>
          <Image
            src="/img/car-finder/about/01.jpg"
            className="rounded-lg object-contain"
            alt="car"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-6 grid-cols-3 mt-24">
        {aboutLogos.map((item) => (
          <React.Fragment key={item.id}>
            <Image src={item.img} width={200} height={200} alt="logo" />
          </React.Fragment>
        ))}
      </div>

      <div className="grid md:grid-cols-2 mt-24 px-4">
        <div>
          <h2 className="my-8 text-3xl">سوالات متداول</h2>
          <p className="text-gray-200 max-w-[32rem]">
            آیا در مورد خرید یا فروش خودرو سوالی دارید؟ برای همه جزئیات، مرکز
            راهنمایی را بررسی کنید.موجود در ارائه راهکارها و شرایط سخت تایپ به
            پایان رسد.
          </p>
          <Button href="">
            <Link href="/help-center">پشتیبانی</Link>
            <FaAngleLeft />
          </Button>
          <Image
            src="/img/car-finder/about/03.png"
            alt="car"
            height={500}
            width={500}
          />
        </div>
        <div>
          <Accordion
            title="هزینه فروش خودرو در فایندر چقدر است؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
          <Accordion
            title="چگونه بهترین عکس ها را از ماشینم بگیرم؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت"
          />
          <Accordion
            title="اگر خارج از ایالات متحده زندگی می کنم می توانم وسیله نقلیه بفروشم؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
          <Accordion
            title="خریدار چگونه با من در تماس است و پرداخت را انجام می دهد؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت."
          />
          <Accordion
            title="چه کسی شرح لیست ماشین من را می نویسد؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
          <Accordion
            title="کارشاپ از چه ارزی استفاده می کند؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت."
          />
          <Accordion
            title="آیا قوانینی برای رعایت در نظرات وجود دارد؟"
            content="کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت."
          />
          <Accordion
            title="چگونه به صورت خصوصی با فروشنده تماس بگیرم؟"
            content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          />
        </div>
      </div>
    </main>
  );
};

export default About;
