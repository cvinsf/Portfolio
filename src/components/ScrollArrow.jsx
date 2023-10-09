import { useState, useEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa'

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (!isVisible && window.scrollY > 600) {
            setIsVisible(true);
        } else if (isVisible && window.scrollY <= 600) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop)
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-4 right-4">
      {isVisible && (
        <div 
          onClick={scrollToTop} 
          className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          <FaArrowCircleUp size="sm"/>
        </div>
      )}
    </div>
    )
}
export default ScrollTopButton;