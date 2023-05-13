import { Link } from "preact-router";

import Corpuz from "src/assets/images/Corpuz.webp";
import Javier from "src/assets/images/Javier.webp";
import Macoly from "src/assets/images/Macoly.webp";
import Siman from "src/assets/images/Siman.webp";

import AuthorCard from "src/components/author-card";

export default function AboutUs() {
  return (
    <div class='drop-shadow-md flex flex-col justify-items-center'>
      <h1 class='text-center text-5xl my-6 drop-shadow-lg shadow-primary'>
        About us
      </h1>
      <div className='divider mx-20'></div>
      <span class='text-center text-xl w-10/12 mx-auto'>
        This website is part of a research study called "Budget Tracking and
        Planning Website with Data Visualization for Students." The researchers
        are students from Colegio de San Juan de Letran Calamba. These are the
        following researchers:
      </span>
      <div class='flex gap-2 justify-center'>
        <AuthorCard image={Macoly} name='Onofre, John Macoly J.' />
        <AuthorCard image={Corpuz} name='Corpuz, Ynah Abriana M. ' />
        <AuthorCard image={Javier} name='Javier, Viel Margaret D.' />
        <AuthorCard image={Siman} name='Siman, Julia Larisse S. ' />
      </div>
    </div>
  );
}
