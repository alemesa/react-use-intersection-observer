import { useState, useEffect } from 'react';

 /**
 * React hook that return is the object is intersected
 */
function useIntersectionObserver(ref, threshold = 1.0, rootMargin = '0px', rootRef = null) {
  const [isIntersecting, setIntersecting] = useState(false);

   const options = {
    root: rootRef,
    threshold: threshold,
    rootMargin: rootMargin
  };

   /**
   * Intersection Callback
   */
  function intersectionCallBack(entries) {
    if (entries[0].isIntersecting) {
      setIntersecting(true);
    }
  }

   useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallBack, options);
    if (!ref) {
        console.warn(`No target specified - use useRef() hook to pass the target value`);
        return;
    }
    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

   return isIntersecting;
}

 export default useIntersectionObserver;