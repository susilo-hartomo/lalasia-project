import Layout from '@/components/Layout'
import { arrowRightIc } from '../../assets/icons'
import { datasListService, dataListPortofolio } from '../../constants/Services'

import PortofolioServiceImg from '@/components/card/PortofolioServiceCard'
import ListServiceCard from '@/components/card/ListServiceCard'
import PrimaryButton from '@/components/button/PrimaryButton'
import BannerServiceSlick from '@/components/slick/BannerServiceSlick'
const Service = () => {
  const renderBanner = () => {
    return (
      <div className="px-2 lg:mt-[100px] mt-[72px] w-full">
        <h1
          className="text-center text-title-1 mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Services
        </h1>
        <p
          className="text-center lg:w-1/2 mx-auto px-4 text-paragraph-1"
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          The product crafted by talented crafter and using high quality
          material with love inside
        </p>
      </div>
    )
  }

  const renderBannerImage = () => {
    return (
      <div
        className="mt-14 mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
      >
        <BannerServiceSlick />
      </div>
    )
  }

  const renderListService = () => {
    return (
      <div className="mt-28 px-2 flex flex-wrap lg:justify-between gap-5 lg:gap-6">
        {datasListService.map((data, index) => (
          <div
            key={index}
            className="lg:w-[32%]"
            data-aos="fade-left"
            data-aos-delay={`${index * 100 + 150}`}
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <ListServiceCard
              number={data.number}
              title={data.title}
              desc={data.description}
              idx={index}
            />
          </div>
        ))}
      </div>
    )
  }

  const renderPortofolio = () => {
    return (
      <div className="mt-28 mb-5 px-2">
        <div className="lg:flex lg:justify-between">
          <div
            className="lg:w-1/3"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <h6 className="font-bold text-lg text-secondary-2">Portofolio</h6>
            <h2 className="heading">Amazing project We&apos;ve done before</h2>
          </div>
          <div
            className="lg:w-1/3"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <p className="mt-3 paragraph tracking-wider text-paragraph-1">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>

            <h5 className="text-primary-2 font-bold my-9 text-md cursor-pointer">
              View Portofolio
            </h5>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-col gap-5 lg:h-[632px] lg:w-ful">
          {dataListPortofolio.map((data, index) => (
            <PortofolioServiceImg
              key={index}
              img={data.img}
              title={data.title}
              desc={data.description}
              idx={index}
            />
          ))}
        </div>
      </div>
    )
  }

  const renderInteredted = () => {
    return (
      <div className="lg:my-[90px] my-8 px-4 lg:px-8 xl:px-0">
        <div className="lg:flex lg:gap-20 xl:gap-24 justify-between items-center">
          <div
            className="lg:w-1/2 mb-4 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <h2 className="heading w-4/5">Are you interested work with us?</h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <PrimaryButton
              text="Let's Talk"
              onClick={() => alert('press button')}
              icon={arrowRightIc}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout title="Services" content="We are the one">
      <div className="container mx-auto px-6 lg:px-0">
        {renderBanner()}
        {renderBannerImage()}
        {renderListService()}
        {renderPortofolio()}
        {renderInteredted()}
      </div>
    </Layout>
  )
}

export default Service
