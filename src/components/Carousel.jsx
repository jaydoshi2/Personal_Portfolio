// src/components/Carousel.jsx
import React, { useState, useCallback } from "react";

export const Carousel = ({ children, className = "" }) => {
  // Get array of slides (items) from CarouselContent children
  const contentChild = React.Children.toArray(children).find(
    (child) => child.type === CarouselContent
  );
  const items = contentChild?.props.children || [];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous button handler: wrap around
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  // Next button handler: wrap around
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {React.Children.map(children, (child) => {
        // For the content wrapper, update its transform based on the current index
        if (child.type === CarouselContent) {
          return React.cloneElement(child, {
            style: {
              transform: `translateX(-${currentIndex * 100}%)`,
            },
          });
        }
        // For the navigation buttons, pass onClick callbacks
        if (child.type === CarouselPrevious) {
          return React.cloneElement(child, {
            onClick: handlePrevious,
          });
        }
        if (child.type === CarouselNext) {
          return React.cloneElement(child, {
            onClick: handleNext,
          });
        }
        return child;
      })}
    </div>
  );
};

export const CarouselContent = ({ children, style }) => {
  return (
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={style}
    >
      {children}
    </div>
  );
};

// Each slide now fills the parent container (set in Gallery)
export const CarouselItem = ({ children }) => {
  return <div className="w-full h-full flex-shrink-0">{children}</div>;
};

export const CarouselPrevious = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white ${className}`}
    >
      ◀
    </button>
  );
};

export const CarouselNext = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white ${className}`}
    >
      ▶
    </button>
  );
};
