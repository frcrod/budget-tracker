import {
  faArrowRight,
  faBookOpen,
  faChartPie,
  faDownload,
  faLightbulb,
  faMagnifyingGlassChart,
  faMoneyBills,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <section class='mt-40'>
        <header class='text-center mb-16'>
          <h1 class='text-7xl text-bold'>
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
              color='gray'
              icon={faArrowRight}
              size='5x'
              className='mb-6'
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
              color='gray'
              icon={faArrowRight}
              size='5x'
              className='mb-6'
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
        </header>
      </section>
      <div className='divider w-8/12 mx-auto my-10'></div>
      <section class=''>
        <h1 class='text-5xl text-center'>Features that our website have</h1>
        <div class='grid grid-cols-2 grid-rows-2 justify-items-center gap-4 mt-5 px-10'>
          <div className='card bg-rose-50 w-8/12'>
            <div className='card-body text-center'>
              <FontAwesomeIcon icon={faMoneyBills} size='6x' />
              <h2 className='card-title mx-auto'>Budget Tracker</h2>
              <p>Track your daily, weekly, and monthly expenses. </p>
            </div>
          </div>
          <div className='card bg-rose-50 w-8/12 text-center'>
            <div className='card-body text-center'>
              <FontAwesomeIcon icon={faChartPie} size='6x' />
              <h2 className='card-title mx-auto'>Expenses Summarization</h2>
              <p>Summarize your expenses through tables and graphs. </p>
            </div>
          </div>
          <div className='card bg-rose-50 w-8/12'>
            <div className='card-body text-center'>
              <FontAwesomeIcon icon={faBookOpen} size='6x' />
              <h2 className='card-title mx-auto'>Budget Planner</h2>
              <p>Plan your expenses with your specified budget.</p>
            </div>
          </div>
          <div className='card bg-rose-50 w-8/12'>
            <div className='card-body text-center'>
              <FontAwesomeIcon icon={faLightbulb} size='6x' />
              <h2 className='card-title mx-auto'>Budgeting Tips</h2>
              <p>Enhance your knowledge about budgeting.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
