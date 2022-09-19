import { navLinks } from "../constants"
import { MenuPopOver } from "./MenuPopover"
import Logo from "./Logo"
import Image from "next/image"
import { title } from "process"

export const Header = () => {
    return(
        <>
          <header className={styles.container}>
           <div className='flex grow-0 basis-1/3 md:hidden'>
             <MenuPopOver />
          </div>
          <div className='flex grow-0 basis-1/3 justify-center md:justify-start'>
            <Image 
              src='/img/cleanbeeslogo.png'
              layout="fill"
              objectFit="contain"
            />
           </div>
           <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-poppins font-extrabold cursor-pointer text-[16px]
                  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                 text-black `}
                >
                    <a>{nav.title}</a>
                </li>
            ))}
           </ul>

          </header>
        </>
    )
}

const styles ={
    container:`sticky bg-[#0ea5e9] inset-x-0 top-0 z-20 flex items-center justify-between py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8`
}