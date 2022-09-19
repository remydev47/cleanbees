import { navLinks } from "../constants"
import { MenuPopOver } from "./MenuPopover"
import Logo from "./Logo"

export const Header = () => {
    return(
        <>
          <header className={styles.container}>
           <div className='flex grow-0 basis-1/3 md:hidden'>
             <MenuPopOver />
          </div>
          <div className='flex grow-0 basis-1/3 justify-center md:justify-start'>
            <Logo/>
           </div>
          </header>
        </>
    )
}

const styles ={
    container:`sticky bg-[#0ea5e9] inset-x-0 top-0 z-20 flex items-center justify-between py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8`
}