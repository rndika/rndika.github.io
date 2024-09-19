import Link from "next/link";
import InputSearch from "./inputSearch"; // Capitalized and corrected the import
import  UserActionButton  from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-cernter p-4 gap-2">
                <Link href="/" className="font-bold text-2xl">
                    KingAnimeList
                </Link>
                <InputSearch />
                <UserActionButton/>
            </div>
        </header>
    );
};

export default Navbar;
