import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/project.json";
import { Typography } from "../typography/typography";
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasText, setHasText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenWidth = window.innerWidth;
      setIsScrolled(scrollTop > 0 || screenWidth < 1040);

      const modal = modalRef.current;
      if (modal) {
        modal.classList.toggle("bgscrolled", scrollTop > 0);
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
    if (window.scrollY === 0) {
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


  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

  useEffect(() => {
    // Exemple de logique avec i18n dans useEffect
    console.log('Current language:', i18n.language);
  }, [i18n]); // Ajoutez 'i18n' comme dépendance ici


  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language); // Changer la langue avec i18n
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
            <Image width="30" height="30" alt="logo web app" src="/sl.png" className="min-w-[26px] min-h-[26px]" />
          </div>
          <div className="flex flex-col gap-3 items-center max-[600px]:hidden">
            <Typography theme="white" component="p" variant="lead" fontFamily="ClashDisplay" weight="bolder" className="hover:text-white transition  ease-in-out p-0 leading-3 tracking-wide">LOURDEL</Typography>
            <Typography theme="white" component="p" variant="lead" fontFamily="ClashDisplay" weight="bolder" className="hover:text-white transition  ease-in-out p-0 leading-3 tracking-wide">Sébastien</Typography>
          </div>
        </div>
        <div className="w-8/12 flex justify-end gap-12 items-center max-md:w-[100%]">
          <div className="navbar-end flex gap-12 items-center ">
            <div className="justify-between gap-12 hidden max-[1040px]:flex">
              <div onClick={handleMenuToggle} className="cursor-pointer">
                <Image width="30" height="30" alt="menu icon" src="/menuwhite.png" />
              </div>
            </div>
            <div className="flex justify-between gap-12 max-[1040px]:hidden">
              <Link href="/" className="opacity-60 hover:opacity-100 flex gap-3 items-center" >
                <Image width="100" height="100" alt="menu icon" src="/homet.png" className="min-h-[18px] min-w-[18px] w-[18px] h-[18px]" />
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white transition trande ease-in-out">
                  {t('header.home')}
                </Typography>
              </Link>
              <Link href="/projects" className="opacity-60 hover:opacity-100 flex gap-3 items-center">
                <Image width="100" height="100" alt="menu icon" src="/layers.png" className="min-h-[18px] min-w-[18px] w-[18px] h-[18px]" />
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100">
                {t('header.cv')}
                </Typography>
              </Link>
              <Link href="/projects" className="opacity-60 hover:opacity-100 flex gap-3 items-center">
                <Image width="100" height="100" alt="menu icon" src="/layers.png" className="min-h-[18px] min-w-[18px] w-[18px] h-[18px]" />
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100">
                {t('header.project')}
                </Typography>
              </Link>
              <Link href="/contact" className="opacity-60 hover:opacity-100 flex gap-3 items-center">
                <Image width="100" height="100" alt="menu icon" src="/chat.png" className="min-h-[18px] min-w-[18px] w-[18px] h-[18px]" />
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="medium" className="hover:text-white trande transition ease-in-out hover:opacity-100">
                {t('header.contact')}
                </Typography>
              </Link>
            </div>
            <div className={`bg-[#ffffff20] ${hasText ? 'bg-[#7A24E8]' : 'hover:bg-[#7A24E8]'} active:bg-[#7A24E8] focus-within:bg-[#7A24E8]  transz hover:text-white contain-searchform p-2.5 rounded-md px-4 relative w-60 max-[600px]:w-40`}>
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
          <div className="navbar-end flex gap-6 max-md:hidden">
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="appearance-none bg-transparent optdd border-none"
        >
          <option value="fr">🇫🇷</option>
          <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
          <option value="es">🇪🇸</option>
        </select>
      </div>
        </div>
      </div>

      {/* Menu Toggle Section */}
      <div className="menu-section ">
        <div className={`menu-toggle ${menuOpen ? "on" : ""}`} onClick={handleMenuToggle}>
          <div className={`line one ${menuOpen ? "on" : ""}`}></div>
          <div className={`line two ${menuOpen ? "on" : ""}`}></div>
          <div className={`line three ${menuOpen ? "on" : ""}`}></div>
        </div>
        
        <nav className="min-[1040px]:hidden">
          <ul className={menuOpen ? "" : "hidden"}>
            <div className=" flex justify-start ">
              <div className="flex items-center gap-4 mt-10 flex-wrap">
                <Link href="/" className={`handled p-3 px-4 flex items-center  max-[900px]:gap-3 justify-center gap-4 rounded-lg ${router.pathname === "/" ? "activesection" : ""}`}>
                  <Image width="100" height="100" alt="menu icon" src="/homet.png" className="min-h-[20px] min-w-[20px] w-[45px] h-[45px] max-[1040px]:h-[20px] max-[1040px]:w-[20px]" />
                  {router.pathname === "/" ? (
                    <Typography theme="white" variant="lead" fontFamily="SanFrancisco" weight="medium" className=" max-[900px]:text-lg">
                      Accueil
                    </Typography>
                  ) : null}
                </Link>
                <Link href="/projects" className={`handled p-3 px-4 flex items-center justify-center gap-4 rounded-lg ${router.pathname === "/projects" ? "activesection" : ""}`}>
                  <Image width="100" height="100" alt="menu icon" src="/layers.png" className="min-h-[20px] min-w-[20px] w-[45px] h-[45px] max-[1040px]:h-[20px] max-[1040px]:w-[20px]" />
                  {router.pathname === "/projects" ? (
                    <Typography theme="white" variant="lead" fontFamily="SanFrancisco" weight="medium" className=" max-[900px]:text-lg">
                      Projets
                    </Typography>
                  ) : null}
                </Link>
                <Link href="/aboutpage" className={`handled p-3 px-4 flex items-center justify-center gap-4 rounded-lg ${router.pathname === "/aboutpage" ? "activesection" : ""}`}>
                  <Image width="100" height="100" alt="menu icon" src="/layers.png" className="min-h-[20px] min-w-[20px] w-[45px] h-[45px] max-[1040px]:h-[20px] max-[1040px]:w-[20px]" />
                  {router.pathname === "/aboutpage" ? (
                    <Typography theme="white" variant="lead" fontFamily="SanFrancisco" weight="medium" className=" max-[900px]:text-lg">
                      CV
                    </Typography>
                  ) : null}
                </Link>
                <Link href="/contact" className={`handled p-3 px-4 flex items-center justify-center gap-4 rounded-lg ${router.pathname === "/contact" ? "activesection" : ""}`}>
                  <Image width="100" height="100" alt="menu icon" src="/chat.png" className="min-h-[20px] min-w-[20px] w-[45px] h-[45px] max-[1040px]:h-[20px] max-[1040px]:w-[20px]" />
                  {router.pathname === "/contact" ? (
                    <Typography theme="white" variant="lead" fontFamily="SanFrancisco" weight="medium" className=" max-[900px]:text-lg">
                      Contact
                    </Typography>
                  ) : null}
                </Link>
              </div>
              
              <div className="flex fd flex-cols justify-center max-[1040px]:mt-0 max-[900px]:absolute h-[85vh] left-50 top-50 max-[1040px]:hidden">
                <Typography theme="white" component="p" variant="h3" fontFamily="SanFrancisco" weight="medium" className="mfdt hiddenqaau hidden">
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
            </div>
          </ul>
        </nav>
      </div>

      {/* Search Results Section */}
      <div className="flex fd flex-cols justify-center max-[1040px]:mt-0 ">
        <Typography theme="white" component="p" variant="h3" fontFamily="SanFrancisco" weight="medium" className="mfdt hiddenqaau hidden">
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

export default Header;
