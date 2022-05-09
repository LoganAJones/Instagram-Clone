import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaineIcon,
    MenuIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"
import Home from "../pages"
function Header() {
    return (
        <div>
            <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
        {/*left header*/}                
                <div className="relative hidden lg:inline-grid h-24 w-24">            
                    <Image src= "https://links.papareact.com/ocw" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0">
                <Image src= "https://links.papareact.com/jjm" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
        {/* Middle Search Field */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm rounded-md border-gray focus:ring-black focus:border-black rounded-md" 
                        type="text" 
                        placeholder="Search"
                        />
                    </div>
                </div> 
        {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    <PaperAirplaneIcon className="navBtn"/>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn"/>

                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQF8Mpqhc9Mslw/profile-displayphoto-shrink_200_200/0/1629605959782?e=1657756800&v=beta&t=BbSBl8SGcBk6HeK04T_ALyaTYVLjK02BTB7FEfTPvuE" alt="profile pic" className="h-10 rounded-full cursor-pointer"/>
                </div>
            </div>


        </div>
    )
}

export default Header