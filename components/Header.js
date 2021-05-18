<<<<<<< HEAD
import Image from "next/image";
import HeaderItem from "./HeaderItem";
=======
import Image from 'next/image';
import HeaderItem from './HeaderItem';
>>>>>>> f79a8f05b1ae72e32074205809a7fddedc7a8288
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header
      className="flex flex-col sm:flex-row m-5 justify-between 
        items-center h-auto"
    >
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/hulu-logo.png"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
