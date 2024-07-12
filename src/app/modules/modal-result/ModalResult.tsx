// ModalResult.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '../typography/typography';

interface ModalResultProps {
  searchResults: any[];
  onClose: () => void;
}

export const ModalResult: React.FC<ModalResultProps> = ({ searchResults, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <div className="flex fd flex-cols justify-center max-[1040px]:mt-0">
          <Typography theme="white" component="p" variant="h3" fontFamily="SanFrancisco" weight="medium" className="  ">
            Quel projet vous souhaitez ?
          </Typography>
          {searchResults.length > 0 && (
            <div className="flex pt-10 flex-wrap justify-center items-center">
              {searchResults.map((result) => (
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
    </div>
  );
};

export default ModalResult;