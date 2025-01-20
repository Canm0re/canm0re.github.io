import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";

type FlipCardProps = {
  frontContent: {
    quote: string;
    name: string;
    designation: string;
    src: string;
  };
  backContent: string;
  isActive?: boolean;
};

export function FlipCard({ frontContent, backContent, isActive = false }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipVariants = {
    front: {
      rotateY: 0,
    },
    back: {
      rotateY: 180,
    },
  };

  return (
    <div 
      className={`relative w-full h-80 cursor-pointer perspective-1000 ${isActive ? 'z-50' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={isFlipped ? 'back' : 'front'}
        variants={flipVariants}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src={frontContent.src}
            alt={frontContent.name}
            width={500}
            height={500}
            draggable={false}
            className="h-full w-full rounded-3xl object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
            <h3 className="text-xl font-bold text-white">
              {frontContent.name}
            </h3>
            <p className="text-sm text-white/80">
              {frontContent.designation}
            </p>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-3xl bg-white p-6 flex items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <p className="text-lg text-gray-800 font-medium text-center">
            {backContent}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}; 