import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaineIron,
    MenuIcon,
} from "@heroicons/react/outline"
function Header() {
    return (
        <div>
            <div className="flex justify-between bg-white max-w-6xl">
                {/*left header*/}                
                <div className="relative hidden lg:inline-grid h-24 w-24">            
                    <Image src= "https://links.papareact.com/ocw" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
                <Image src= "https://links.papareact.com/jjm" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>
                {/* Middle Search Field */}
                <div>
                    <div>
                        <SearchIcon className="h-5 w-5"/>
                    </div>
                    <input type="text" placeholder="Search"
                    />
                </div>

            </div>


        </div>
    )
}

export default Header