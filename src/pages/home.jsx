import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faBookOpen,
  faChartPie,
  faDownload,
  faMagnifyingGlassChart,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "preact-router";

import Feature from "src/components/feature";

export default function Home() {
  return (
    <>
      <section class='mt-40'>
        <header class='text-center mb-16'>
          <h1 class='text-7xl text-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            Budget smarter, live better with Budgetista
          </h1>
          <h2 class='text-xl mt-4'>
            Transform your finances and achieve your goals with Budgetista's
            smart budgeting tools and resources
          </h2>
          <div class='flex mt-6 gap-7 justify-center items-center'>
            <div>
              <FontAwesomeIcon
                icon={faLightbulb}
                size='6x'
                className='bg-primary p-8 mb-2 rounded-full'
                color='white'
              />
              <h3 class='text-xl font-bold'>Track</h3>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              size='5x'
              className='mb-6 text-secondary'
            />
            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlassChart}
                size='6x'
                className='bg-primary p-8 mb-2 rounded-full'
                color='white'
              />
              <h3 class='text-xl font-bold'>Visualize</h3>
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              size='5x'
              className='mb-6 text-secondary'
            />
            <div>
              <FontAwesomeIcon
                icon={faDownload}
                size='6x'
                className='bg-primary p-8 mb-2 rounded-full'
                color='white'
              />
              <h3 class='text-xl font-bold'>Save</h3>
            </div>
          </div>
          <Link href='/me'>
            <button className='btn btn-primary btn-wide font-bold text-base mt-10'>
              Get Started
            </button>
          </Link>
        </header>
      </section>
      <div className='divider w-8/12 mx-auto my-10'></div>
      <section class=''>
        <h1 class='text-5xl text-center mb-10'>
          Features that our website have
        </h1>
        <div class='flex flex-wrap justify-center gap-4 mt-5 mx-auto w-10/12'>
          <Feature
            icon={faMoneyBills}
            title='Budget Tracker'
            description='Track your daily, weekly, and monthly expenses. '
          />
          <Feature
            icon={faChartPie}
            title='Expenses Summarization'
            description='Summarize your expenses through tables and graphs.'
          />
          <Feature
            icon={faBookOpen}
            title='Budget Planner'
            description='Plan your expenses with your specified budget.'
          />
          <Feature
            icon={faLightbulb}
            title='Budgeting Tips'
            description='Enhance your knowledge about budgeting.'
          />
        </div>
      </section>
    </>
  );
}
