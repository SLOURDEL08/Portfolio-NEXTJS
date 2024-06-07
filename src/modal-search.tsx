import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/modules/typography/typography";

interface ModalSearchProps {
  searchResults: any[];
}

const ModalSearch: React.FC<ModalSearchProps> = ({ searchResults }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  

  return (
    <div className={`modal-result desd ${isScrolled ? 'bgscrolled' : 'bgtransparent'}`}>
      {/* Affichez les résultats de la recherche ici */}
      {searchResults.slice(0, 3).map((result) => (
        <div className="" key={result.id}>
          <Link href={result.link} passHref>
            <div className="">
              <div className="result-item">
                <Image src={result.image} alt={result.title} width={100} height={100} />
                <Typography theme="white" variant="body-base" fontFamily="SanFrancisco" weight="bold" className="hover:text-white transition ease-in-out">
                  {result.title}
                </Typography>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ModalSearch;
