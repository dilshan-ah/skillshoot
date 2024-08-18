import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import arrowup from './assets/img/Icon.svg'
import instagram from './assets/img/instagram.png'
import discord from './assets/img/discord.png'
import twitter from './assets/img/twitter.png'

import heroimg from './assets/img/random-girl (1).png'
import herotwoimg from './assets/img/random-girl (3).png'

import heroiconone from './assets/img/Group 15.png'
import heroicontwo from './assets/img/Group 24.png'
import heroiconthree from './assets/img/Group 25.png'

import brandone from './assets/img/image 11.png'
import brandtwo from './assets/img/image 12.png'
import brandthree from './assets/img/image 13.png'
import brandfour from './assets/img/image 14.png'
import brandfive from './assets/img/image 15.png'

import kid from './assets/img/kid.png'

import newElementOne from './assets/img/Group 574.png'
import newElementTwo from './assets/img/Group 575.png'
import newElementThree from './assets/img/Group 576.png'
import newElementFour from './assets/img/Group 577.png'

import avatarOne from './assets/img/unsplash_d1UPkiFd04A.png'

import square from './assets/img/square.png'
import piramid from './assets/img/piramid.png'
import woolball from './assets/img/wool-ball.png'
import glass from './assets/img/glass.png'

import person from './assets/img/person.png'

import user from './assets/img/user.png'
import userchecked from './assets/img/user-checked.png'
import video from './assets/img/video.png'
import bxplay from './assets/img/bx-play.png'



import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import ServiceBox from './components/ServiceBox'
import CourseSlider from './components/CourseSlider'
import SubscribeBox from './components/SubscribeBox'
import ReviewSlider from './components/ReviewSlider'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const { ref: countUpRef1, inView: inView1 } = useInView({
    triggerOnce: true, // The CountUp will only run once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const { ref: countUpRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <Header />

      {/* Hero section */}
      <div className='w-full primary-bg'>
        <div className='container mx-auto grid lg:grid-cols-2 relative'>

          <div className='pt-10 pb-20 lg:text-start text-center'>
            <h2 className='poppins text-white lg:text-6xl md:text-4xl text-[28px] font-semibold lg:leading-[90px] '>There is always something new for us to learn</h2>
            <p className='poppins md:text-lg text-xs md:leading-9 leading-7 text-white/60 lg:pr-20 mb-7'>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
            <div className='flex lg:flex-row flex-col gap-3 items-center lg:justify-start justify-center'>
              <a href="#" className='secondary-bg rounded flex items-center gap-4 border-0 text-white font-bold poppins text-xl py-3 px-6'>
                Start Journey
                <img src={arrowup} alt="" srcset="" />
              </a>
              <div className='flex items-center gap-3'>
                <a href="#">
                  <img src={instagram} alt="" srcset="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" srcset="" />
                </a>
                <a href="#">
                  <img src={discord} alt="" srcset="" />
                </a>
              </div>

            </div>
          </div>

          <div className='flex justify-center items-end relative'>
            <img src={heroimg} alt="" srcset="" className='lg:block hidden' />
            <img src={herotwoimg} className='absolute left-0 top-20 bottom-0 my-auto lg:block hidden' alt="" />
          </div>

          <img src={heroiconone} className='absolute lg:right-40 right-10 lg:top-0 lg:bottom-36 bottom-10 my-auto rotate-anime' alt="" />
          <img src={heroicontwo} className='absolute lg:right-24 bottom-10 rotate-anime' alt="" />
          <img src={heroiconthree} className='absolute lg:right-0 lg:left-72 -left-14 mx-auto top-10 rotate-anime' alt="" />

        </div>
      </div>

      {/* Reference section */}

      <div className='container mx-auto py-20'>
        <h2 className='poppins text-[#2C2C2C] lg:text-4xl md:text-2xl text-lg font-semibold leading-[54px] text-center'>Trusted more than <span className='secondary-color'>100+</span> in the world</h2>
        <p className='poppins font-normal text-center md:text-base text-xs leading-9	text-[#808080] max-w-xl mx-auto mb-10'>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>

        <div className='mx-auto flex flex-wrap justify-center items-center gap-16'>
          <img src={brandone} alt="" srcset="" />
          <img src={brandtwo} alt="" srcset="" />
          <img src={brandthree} alt="" srcset="" />
          <img src={brandfour} alt="" srcset="" />
          <img src={brandfive} alt="" srcset="" />
        </div>
      </div>

      {/* New Year */}

      <div className='container mx-auto poppins font-semibold bg-[#F2E7DB] rounded-xl relative mt-24'>
        <div className='p-12 relative overflow-hidden rounded-xl lg:text-left text-center'>
          <h2 className='lg:text-4xl md:text-2xl text-lg md:leading-[54px] leading-7 mb-5 text-center'>Happy <span className='secondary-color'>Chinese New Year</span>, 20% <br />discount for you today</h2>

          <a href="#" className='primary-bg rounded inline-flex items-center gap-4 border-0 text-white font-bold poppins text-xl py-3 px-6'>Subscribe Course</a>

          <div className='w-[73px] h-[75px] primary-bg rounded-full absolute -top-5 -left-5'></div>
          <div className='w-[73px] h-[75px] primary-bg rounded-full absolute -bottom-5 -right-5'></div>
        </div>

        <img src={kid} className='absolute bottom-0 right-40 lg:block hidden' alt="" />

        <img src={newElementOne} className='absolute top-0 bottom-24 left-80 right-0 m-auto lg:block hidden' alt="" />
        <img src={newElementTwo} className='absolute top-10 bottom-0 right-20 lg:block hidden' alt="" />
        <img src={newElementThree} className='absolute bottom-5 right-40 lg:block hidden' alt="" />
        <img src={newElementFour} className='absolute bottom-8 lg:left-96 lg:right-0 left-12 m-auto' alt="" />
      </div>


      {/* About */}

      <div className='container mx-auto grid lg:grid-cols-2 py-20 lg:text-start text-center'>
        <div className='lg:mb-0 mb-10'>
          <h2 className='lg:text-4xl md:text-2xl text-lg leading-[54px] mb-5 font-semibold poppins'>Why do we <span className='secondary-color'>exist?</span></h2>

          <p className='poppins font-normal md:text-base text-xs !leading-9 text-[#808080] max-w-md lg:m-0 m-auto mb-5'>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>

          <div className="card lg:card-side mb-5">
            <figure>
              <img
                src={avatarOne}
                alt="Album" className='w-[70px] h-[70px] rounded-full' />
            </figure>
            <div className="card-body p-5 gap-0">
              <h2 className="card-title poppins text-lg	leading-9 lg:justify-start justify-center">Jerony Pulquosta</h2>
              <p className='poppins font-normal text-xs'>CEO Skill Shoot</p>
            </div>
          </div>

          <hr className='max-w-md mb-5 lg:m-0 mx-auto' />

          <div className='flex lg:justify-start justify-center items-center gap-10'>
            <div ref={countUpRef1}>
              <h4 className="poppins font-bold text-4xl leading-[54px]">
                {inView1 ? <CountUp end={100} /> : '0'}+
              </h4>
              <p className="poppins font-normal text-xs text-[#808080]">Updated Material</p>
            </div>

            <div ref={countUpRef2}>
              <h4 className="poppins font-bold text-4xl leading-[54px]">
                {inView2 ? <CountUp end={15} /> : '0'}K
              </h4>
              <p className="poppins font-normal text-xs text-[#808080]">Member Join</p>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
          <ServiceBox img={square} title='Material Limitations' comment='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
          <ServiceBox img={piramid} title='Unprofessional Mentor' comment='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
          <ServiceBox img={woolball} title='Video Quality' comment='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
          <ServiceBox img={glass} title='High Price' comment='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
        </div>
      </div>


      {/* Popular courses */}

      <div className='w-full primary-bg py-20 relative'>
        <div className='container mx-auto'>
          <h2 className='lg:text-4xl md:text-2xl text-lg leading-[54px] mb-5 font-semibold poppins text-white text-center'>Popular courses of the week</h2>
          <p className='poppins font-normal md:text-base text-xs !leading-9	text-white/60 max-w-md mx-auto mb-5 text-center'>List of the most popular lists that are often studied by our members</p>

          <CourseSlider />
        </div>

        <img src={newElementTwo} alt="" className='absolute top-32 left-48 mx-auto' />
        <img src={newElementFour} alt="" className='absolute top-28 right-48 mx-auto' />
      </div>

      {/* Skill shoot */}

      <div className='container mx-auto grid grid-cols-2 px-14 py-24'>
        <div>
          <img src={person} alt="" srcset="" />
        </div>

        <div className='flex flex-col justify-center'>
          <h2 className='poppins text-5xl leading-[72px] font-bold mb-7'>Let us <span className='primary-color'>Skill Shoot</span></h2>
          <p className='poppins font-normal text-base	leading-9	text-[#808080] mb-7'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.</p>
          <p className='poppins font-normal text-base	leading-9	text-[#808080] mb-7'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>

          <div className='grid grid-cols-2 gap-10'>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-[#CB846130] flex justify-center items-center'>
                <img src={user} alt="" srcset="" />
              </div>
              <h4 className='text-base poppins font-semibold'>15K People Join</h4>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-[#CB846130] flex justify-center items-center'>
                <img src={userchecked} alt="" srcset="" />
              </div>
              <h4 className='text-base poppins font-semibold'>15K People Join</h4>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-[#CB846130] flex justify-center items-center'>
                <img src={video} alt="" srcset="" />
              </div>
              <h4 className='text-base poppins font-semibold'>15K People Join</h4>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-[#CB846130] flex justify-center items-center'>
                <img src={bxplay} alt="" srcset="" />
              </div>
              <h4 className='text-base poppins font-semibold'>15K People Join</h4>
            </div>
          </div>
        </div>
      </div>


      {/* Improve skill */}

      <div className='container mx-auto poppins font-semibold bg-[#F2E7DB] rounded-xl relative mt-24 grid grid-cols-5'>
        <div className='p-12 relative overflow-hidden rounded-xl col-span-3'>
          <h2 className='text-4xl leading-[54px]'><span className='secondary-color'>Improve</span> your skills, and reach your career as soon as possible</h2>

          <div className='w-[73px] h-[75px] primary-bg rounded-full absolute -top-5 -left-5'></div>
        </div>

        <div className='p-12 flex justify-end items-center gap-5 col-span-2'>
          <a href="#" className='secondary-bg rounded inline-flex items-center gap-4 border-0 text-white font-bold poppins text-xl py-3 px-6'>Join Now</a>
          <a href="#" className='primary-bg rounded inline-flex items-center gap-4 border-0 text-white font-bold poppins text-xl py-3 px-6'>Subscribe Course</a>
        </div>

        <img src={newElementTwo} className='absolute -bottom-7 left-52 right-0 m-auto' alt="" />
      </div>

      {/* Subscribe */}

      <div className='max-w-[850px] mx-auto mt-24 mb-24 text-center'>
        <h2 className='text-4xl leading-[54px] font-semibold mb-5 poppins'><span className='secondary-color'>Subscribe</span> with us now</h2>
        <p className='poppins font-normal text-base	leading-9	text-[#808080] mb-7'>by subscribing now you will be able to access the material easily <br />and cheaply, so you will be very efficient and benefit</p>


        <div className='flex mt-24'>

          <SubscribeBox name='Base' price='50' time='1' popular={false} />
          <SubscribeBox name='Pro' price='100' time='6' popular={true} />
          <SubscribeBox name='Enterprise' price='200' time='12' popular={false} />

        </div>
      </div>


      {/* Testimonial */}
      <div className='w-full bg-[#F8F8F8] pt-20 pb-40'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl leading-[54px] font-semibold mb-3 poppins'>What do they <span className='secondary-color'>say?</span></h2>
          <p className='poppins font-normal text-base	leading-9	text-[#808080] mb-7'>This is an honest review from members who have joined us</p>

          <ReviewSlider />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App