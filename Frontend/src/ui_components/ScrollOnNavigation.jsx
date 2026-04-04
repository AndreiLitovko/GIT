import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HOME_FEED_SECTION_ID = "latest-publications";

const ScrollOnNavigation = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      const section = document.getElementById(HOME_FEED_SECTION_ID);

      if (section) {
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: Math.max(0, sectionTop - navHeight - 12),
          left: 0,
          behavior: "auto",
        });

        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search]);

  return null;
};

export default ScrollOnNavigation;