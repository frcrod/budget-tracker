import { Link } from "preact-router";

import Budgeting101 from "src/assets/images/Budgeting101.webp";
import BudgetingBasics from "src/assets/images/BudgetingBasics.webp";
import BudgetingTipsForStudent from "src/assets/images/BudgetingTipsForStudent.webp";
import GreenBackground from "src/assets/images/GreenBackground.webp";
import Template from "src/assets/images/Template.webp";
import TipidTipsForStudents from "src/assets/images/TipidTipsForStudent.webp";

import ContentCard from "src/components/content-card";

export default function BudgetTips(props) {
  return (
    <div class='drop-shadow-md flex flex-col justify-items-center'>
      <h1 class='text-center text-5xl my-6 drop-shadow-lg shadow-primary'>
        Budgeting Tips
      </h1>
      <div className='divider mx-10'></div>
      <h2 class='text-center text-3xl font-bold my-3'>Articles</h2>
      <div class='flex flex-wrap gap-2 justify-center'>
        <ContentCard
          image={BudgetingTipsForStudent}
          title='Budgeting Tips for Student'
          content='This article tackled how important budgeting is for students. They inform the student what is budgeting and how to do it properly as a student. '
          href='https://leverageedu.com/blog/budgeting-tips-for-students/'
        />
        <ContentCard
          image={GreenBackground}
          title='Tipid Tips'
          content='If you need some "Tipid Tips" as a Filipino student,  this article might be helpful for you. '
          href='https://bukas.ph/blog/tipid-tips-for-filipino-students/'
        />
        <ContentCard
          image={Template}
          title='31 Money Saving Tricks for Students'
          content='It is important to have some basis for budgeting. In this article, they provided 31 money saving tricks for students. '
          href='https://www.fastweb.com/personal-finance/articles/the-31-money-saving-tricks-for-students'
        />
      </div>
      <div className='divider mx-10'></div>
      <h2 class='text-center text-3xl font-bold my-3'>Videos</h2>
      <div class='flex flex-wrap gap-2 justify-center'>
        <ContentCard
          image={BudgetingBasics}
          title='Budgeting Basics'
          content='For beginners, this video explains what are the basics of budgeting. It is for you to manage your expenses well. '
          href='https://www.youtube.com/watch?v=F0Rq04leKHU'
        />
        <ContentCard
          image={Budgeting101}
          title='Budgeting 101'
          content="This video explains the creator's 5-step approach to budgeting for beginners. This might help you have knowledge in managing your finances. "
          href='https://www.youtube.com/watch?v=Jf7Nltzf-RQ'
        />
        <ContentCard
          image={TipidTipsForStudents}
          title='Paano makakapagipon sa baon?'
          content='It is important to have some basis for budgeting. In this article, they provided 31 money saving tricks for students. '
          href='https://www.youtube.com/watch?v=c-RiIZrqibw'
        />
      </div>
      <Link
        href={`/me`}
        class='mt-7 mx-auto btn btn-primary btn-wide rounded-full mx-auto'
      >
        Go back
      </Link>
    </div>
  );
}
