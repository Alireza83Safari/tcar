import { Accordion, Button, Footer, Header } from "@/components";

async function page() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="xl:container mx-auto sm:px-20">
          <h1 className="text-3xl text-center my-5">سوالات متداول</h1>
          <div className="grid grid-cols-3">
            <button className="my-4 bg-white rounded-lg text-black-100 py-2 mx-2">
              سوالات عمومی
            </button>
            <button className="my-4 bg-black-100 rounded-lg py-2 mx-2">
              خرید یا اجاره خودرو
            </button>
            <button className="my-4 bg-black-100 rounded-lg py-2 mx-2">
              فروش خودرو
            </button>
          </div>

          <div className="mt-10">
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

        <div className="bg-black-100 py-10 text-center">
          <h1 className="text-2xl my-5">
            پاسخ را پیدا نکردید؟ ما می توانیم کمک کنیم.
          </h1>
          <p className="text-gray-200">
            با ما تماس بگیرید و در اسرع وقت با شما تماس خواهیم گرفت.
          </p>

          <Button href="/contact">تماس با ما</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
