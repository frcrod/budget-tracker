import { Link } from "preact-router";

import BudgetistaIcon from "src/assets/budgetista_icon.webp";

export default function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-lg btn-ghost normal-case text-xl'>
          <img
            className='w-36 object-scale-down object-center'
            src={BudgetistaIcon}
          />
        </Link>
      </div>
      <div className='flex-none align-center'>
        <Link href='/about-us' class='btn btn-square btn-ghost mx-2'>
          <span class='font-bold'>About us</span>
        </Link>
        <Link href='/budget-tips' class='btn btn-square btn-ghost mx-2'>
          <span class='font-bold'>Tips</span>
        </Link>
        <Link href='/me' className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
          </svg>
        </Link>
      </div>
    </div>
  );
}
