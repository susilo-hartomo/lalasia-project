import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { ArticleTypes } from 'lib/types'
import { getAllNews, getTwoLatestNews } from 'lib/helper/fetchArticle'
import Image from 'next/image'

import Container from '@/components/Layout/ContainerTwo'
import Layout from '@/components/Layout'
import ArticleCardWide from '@/components/card/ArticleCardWide'
import ArticleCardTwo from '@/components/card/ArticleCardTwo'
import ArticleButton from '@/components/button/ArticleButton'
import PrimaryButton from '@/components/button/PrimaryButton'

import { arrowRightIc } from '../../assets/icons'
import BannerArticleSlick from '@/components/slick/BannerArticleSlick'
import dateToFormattedSimple from '../../lib/helper/dateToFormattedSimple'

interface props {
  twoLatestNews: ArticleTypes[]
  news: ArticleTypes[]
}

const index: NextPage<props> = ({ twoLatestNews, news }) => {
  const RenderHeadArticle = () => {
    return (
      <div className="mb-4 mt-16">
        <h1
          data-aos="fade-up"
          className="text-title-1 text-center font-bold md:text-6xl text-2xl md:mb-5 mb-4 "
        >
          Article
        </h1>
        <p
          data-aos="fade-up"
          className="text-center md:w-1/2 w-11/12 mx-auto md:px-4 text-paragraph-1"
        >
          We display product based on latest products we have, if you want to
          see old products please enter the name of the item
        </p>
      </div>
    )
  }

  const RenderCarousel = () => {
    const settings = {
      dots: true,
    }

    const [imageOrder, setImageOrder] = React.useState(0)

    const handleImageOrder = (index: number) => {
      setImageOrder(index)
    }

    return (
      <div className="w-auto h-auto relative my-12">
        <BannerArticleSlick
          handleNext={handleImageOrder}
          imageList={twoLatestNews}
        />
        <div
          data-aos="fade-up"
          className="flex flex-col justify-between w-4/5 md:h-2/6 h-[113px]  absolute md:-bottom-20 -bottom-[3.3rem] bg-white mx-auto left-0 right-0 shadow-md md:p-8 p-3"
        >
          <div className="flex flex-col justify-between h-full">
            <p className="md:text-lg text-xs text-paragraph-1">
              {twoLatestNews[imageOrder].category}
            </p>
            <h3 className="bold md:text-2xl text-sm font-bold text-title-1 line-clamp-2 md:mb-0 mb-1 capitalize">
              {twoLatestNews[imageOrder].title}
            </h3>
            <div className="flex flex-row gap-2">
              <div className="md:w-7 md:h-7 w-5 h-5 relative ">
                <Image src={twoLatestNews[imageOrder].avatar} layout="fill" />
              </div>
              <p className="font-bold md:text-sm text-xs leading-4 self-center ">
                {'By ' + twoLatestNews[imageOrder].author}
              </p>
              <p className="text-paragraph-1 md:text-sm text-xs leading-4 self-center grow md:text-left text-right">
                {dateToFormattedSimple(twoLatestNews[imageOrder].date)}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const RenderTrendingTopics = () => {
    return (
      <div className="md:mt-64 md:mb-48 mt-40 mb-12">
        <h5
          data-aos="fade-up"
          className="font-bold text-secondary-1 md:text-lg text-sm"
        >
          Daily News
        </h5>
        <h2 data-aos="fade-up" className="heading">
          Today top headlines
        </h2>
        <div className="lg:flex flex-row mt-4 gap-[26px]">
          {twoLatestNews.map((item, i) => {
            return (
              <div data-aos="fade-up" className="md:w-1/2 w-full " key={i}>
                <ArticleCardTwo
                  title={item.title}
                  author={item.author}
                  avatar={item.avatar}
                  category={item.category}
                  thumbnail={item.thumbnail}
                  date={item.date}
                  summary={item.summary}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const RenderAllNews = () => {
    const [choosedTopicCategory, setChoosedTopicCategory] = React.useState('All')

    const trendingTopicsCategories = [
      'All',
      'Tips and Trick',
      'Interior Design',
      'Design Inspiration',
      'Color Guide',
    ]

    return (
      <div className="md:my-48 my-32">
        <h5
          data-aos="fade-up"
          className="font-bold text-secondary-1 md:text-lg text-sm"
        >
          Trending Topics
        </h5>
        <h2 data-aos="fade-up" className="heading">
          Popular Last Week
        </h2>
        <div className="flex flex-row gap-8 justify-between md:my-10 my-4">
          <div className="flex flex-row md:gap-8 gap-0 overflow-x-auto">
            {trendingTopicsCategories.map((item, index) => {
              return (
                <ArticleButton
                  key={index}
                  name={item}
                  isActiveTab={choosedTopicCategory == item}
                  choosed={choosedTopicCategory}
                  onClickFunction={(item: string) => setChoosedTopicCategory(item)}
                />
              )
            })}
          </div>
          <button
            data-aos="fade-up"
            className="md:flex hidden flex-row  p-4 bg-gray-50 px-4 py-3.5 border border-gray-100 text-lg font-bold gap-2"
          >
            <Image src="/sort.png" width={30} height={30} />
            <p className="font-semibold">Filter</p>
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {news
            .filter((item) => {
              return choosedTopicCategory === 'All' ? item : item.category.includes(choosedTopicCategory)
            })
            .map((item, i) => (
              <ArticleCardWide
                key={i}
                title={item.title}
                author={item.author}
                avatar={item.avatar}
                category={item.category}
                thumbnail={item.thumbnail}
                date={item.date}
                summary={item.summary}
              />
            ))}
        </div>
        <div data-aos="fade-up" className="flex justify-center my-12">
          <button className="bg-gray-50 md:px-5 md:py-3.5 px-4 py-3 border border-gray-100 md:text-lg text-base font-bold">
            Load More
          </button>
        </div>
      </div>
    )
  }

  const RenderNewsLetter = () => {
    return (
      <div className="flex md:flex-row flex-col md:justify-between justify-start my-8">
        <h2 data-aos="fade-up" className="heading md:mb-0 mb-4">
          Subscribe to our newsletter
        </h2>
        <div data-aos="fade-up" className="flex flex-start whitespace-nowrap">
          <PrimaryButton
            text="Let's Talk"
            onClick={() => alert('press button')}
            icon={arrowRightIc}
            width={undefined}
          />
        </div>
      </div>
    )
  }

  return (
    <Layout title={'article'} content={'asdas'}>
      <Container>
        {RenderHeadArticle()}
        {RenderCarousel()}
        {RenderTrendingTopics()}
        {RenderAllNews()}
        {RenderNewsLetter()}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const twoLatestNews: ArticleTypes[] = await getTwoLatestNews()
  const news: ArticleTypes[] = await getAllNews()

  return {
    props: {
      twoLatestNews,
      news,
    },
    revalidate: 180,
  }
}

export default index
