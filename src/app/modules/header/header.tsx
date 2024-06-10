import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/project.json";
import { Typography } from "../typography/typography";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasText, setHasText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenWidth = window.innerWidth;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(screenWidth < 1040);
      }

      const modal = modalRef.current;
      if (modal) {
        if (scrollTop > 0) {
          modal.classList.add("bgscrolled");
        } else {
          modal.classList.remove("bgscrolled");
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    const scrollTop = window.scrollY;
    if (scrollTop === 0) {
      window.scrollBy({
        top: 100,
        behavior: 'smooth',
      });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    setHasText(searchText.trim() !== '');
    if (searchText.trim() === '') {
      setSearchResults([]);
    } else {
      filterProjects(searchText);
    }
  };

  const filterProjects = (searchText: string) => {
    const filteredProjects = projects.filter((project: any) => {
      const titleMatches = project.title.toLowerCase().includes(searchText.toLowerCase());
      const tagMatches = project.tags.some((tag: string) => tag.toLowerCase().includes(searchText.toLowerCase()));
      return titleMatches || tagMatches;
    });
    setSearchResults(filteredProjects);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`navbar max-w-[100%] z-ndex sticky top-0 w-full p-8 pl-24 pr-24 z-50 backdroped max-[900px]:p-8 max-[900px]:px-8 max-[900px]:py-6 ${
        (isScrolled && searchResults.length > 0) ? "bgscrolled bgscrolled-result" : 
        (isScrolled && searchResults.length === 0) ? "bgscrolled" : "bgtransparent"
      }`}
    >
      <div className="flex justify-between max-md:justify-start">
        <div className="w-4/12 flex items-center gap-4 max-md:w-[auto]">
          <div className="p-3 tr rounded-xl">
            <Image width="30" height="30" alt="logo web app" src="/sl.png" className="min-w-[30px] min-h-[30px]" />
          </div>
          <div className="flex flex-col gap-3 items-center max-[400px]:hidden">
            <Typography theme="white" component="p" variant="lead" fontFamily="ClashDisplay" weight="bolder" className="hover:text-white transition  ease-in-out p-0 leading-3 tracking-wide">LOURDEL</Typography>
            <Typography theme="white" component="p" variant="lead" fontFamily="ClashDisplay" weight="bolder" className="hover:text-white transition  ease-in-out p-0 leading-3 tracking-wide">Sébastien</Typography>
          </div>
        </div>
        <div className="w-8/12 flex justify-end gap-8 items-center max-md:w-[100%]">
          <div className="navbar-end flex gap-8 items-center">
            <div className="justify-between gap-8 hidden max-[1040px]:flex">
              <div onClick={handleMenuToggle} className="cursor-pointer">
                <Image width="30" height="30" alt="menu icon" src="/menuwhite.png" />
              </div>
            </div>
            <div className="flex justify-between gap-8 max-[1040px]:hidden">
              <Link href="/" className="opacity-60 hover:opacity-100" > 
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white transition trande ease-in-out">Resume</Typography>
              </Link>
              <Link href="/projects" className="opacity-60 hover:opacity-100" > 
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100">Projects</Typography>
              </Link>
              <Link href="/projects" className="opacity-60 hover:opacity-100"> 
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100">Contact</Typography>
              </Link>
            </div>
            <div className={`bg-[#ffffff20] ${hasText ? 'bg-[#7A24E8]' : 'hover:bg-[#7A24E8]'} active:bg-[#7A24E8] focus-within:bg-[#7A24E8] max-md:hidden transz hover:text-white contain-searchform p-2.5 rounded-md px-4 relative w-60`}>
              <label className="searchbar">
                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Search documentation..."
                  className="focus:outline-none border-none text-[#ffffff80] plh placeholder:text-[#ffffff80] w-full bg-transparent"
                  onClick={handleSearchClick}
                />
                <kbd className="pointer-events-none absolute right-2 top-[6px] text-[#909090] bg-neutral-800 border-[#6a6a6a] whitespace-nowrap border-[1px] text-xs py-1 px-2 rounded">⌘ K</kbd>
              </label>
            </div>
          </div>
          <div className="navbar-end flex gap-5">
            <Link href="https://github.com/slourdel08" className="w-[25px] h-[25px] max-[450px]:h-[20px] max-[450px]:w-[20px]" >
              <Image src="/github-icon.png" alt="logo github" width="25" height="25" className="grayscale-[0.8] transition hover:grayscale-[0] w-[100%] h-[100%] brightness-full opacity-60 hover:opacity-100 hover:brightness-1 transz" />
            </Link>
            <Link href="https://gitlab.com/slourdel08" className="w-[25px] h-[25px] max-[450px]:h-[20px] max-[450px]:w-[20px]">
              <Image src="/gitlab.png" alt="logo gitlab" width="25" height="25" className="grayscale-[0.8] transition hover:grayscale-[0] w-[100%] h-[100%] brightness-full opacity-60 hover:opacity-100 hover:brightness-1 transz" />
            </Link>
            <Link href="https://linkedin.com/in/slourdel08" className="w-[25px] h-[25px] max-[450px]:h-[20px] max-[450px]:w-[20px]">
              <Image src="/linkedin.png" alt="logo linkedin" width="25" height="25" className="grayscale-[0.8] transition hover:grayscale-[0] w-[100%] h-[100%] brightness-full opacity-60 hover:opacity-100 hover:brightness-1 transz" />
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-section">
  <div className={`menu-toggle ${menuOpen ? "on" : ""}`} onClick={handleMenuToggle}>
    <div className={`line one ${menuOpen ? "on" : ""}`}></div>
    <div className={`line two ${menuOpen ? "on" : ""}`}></div>
    <div className={`line three ${menuOpen ? "on" : ""}`}></div>
  </div>
   
  <nav className="">
    <ul className={menuOpen ? "" : "hidden "}>
    <div className="flex items-start gap-10 justify-start flex-wrap min-[1040px]:hidden mtneg">
        <Link href="/" className="opacity-90 hover:opacity-100 text-center">
          <Typography theme="white" component="p" variant="h5" fontFamily="SanFrancisco" weight="extralight" className="hover:text-white transition trande ease-in-out hover:opacity-100 transi "><b>#</b>Resume</Typography>
        </Link>
        <Link href="/projects" className="opacity-90 hover:opacity-100 text-center">
          <Typography theme="white" component="p" variant="h5" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100 transi "><b>#</b>Projects</Typography>
        </Link>
        <Link href="/projects" className="opacity-90 hover:opacity-100 text-center">
          <Typography theme="white" component="p" variant="h5" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100 transi"><b>#</b>Contact</Typography>
        </Link>
        
      </div>
      <div className="min-[1040px]:hidden">
    <Typography theme="graylight" component="p" variant="body-base" fontFamily="SanFrancisco" weight="light" className="mt-10">Vous chercher quelque chose <b className="text-white">?</b></Typography>

    <div className={`bg-[#ffffff20] ${hasText ? 'bg-[#7A24E8]' : 'hover:bg-[#7A24E8]'} active:bg-[#7A24E8] m-auto mt-4 focus-within:bg-[#7A24E8] transz hover:text-white contain-searchform p-2.5 rounded-md px-4 relative w-full z-full ${menuOpen ? "" : "hidden"}`}>
  <label className="searchbar">
    <input
      type="text"
      value={searchText}
      onChange={handleSearchChange}
      placeholder="Search documentation..."
      className="focus:outline-none border-none text-[#ffffff80] plh placeholder:text-[#ffffff80] w-full bg-transparent"
      onClick={handleSearchClick}
    />
    <kbd className="pointer-events-none absolute right-2 top-[6px] text-[#909090] bg-neutral-800 border-[#6a6a6a] whitespace-nowrap border-[1px] text-xs py-1 px-2 rounded">⌘ K</kbd>
  </label>
</div>
</div>

   
    </ul>
  </nav>
</div>

      <div className="flex fd flex-cols justify-center">
        <Typography theme="white" component="p" variant="h3" fontFamily="SanFrancisco" weight="medium" className="mfdt hidden">
          Quel projet vous souhaitez ?
        </Typography>
        {searchResults.length > 0 && (
          <div className={`modal-result flex pt-10 flex-wrap justify-center items-center ${isScrolled ? 'bgscrolled bgscrolled-result' : 'bgtransparent'}`}>
            {searchResults.slice(0, 3).map((result) => (
              <div className="" key={result.id}>
                <Link href={result.link} passHref>
                  <div className="">
                    <div className="result-item">
                      <Image src={result.symbol} alt={result.title} width={300} height={300} />
                      <Typography theme="white" component="p" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="transition ease-in-out opacity-80">
                        {result.title}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
