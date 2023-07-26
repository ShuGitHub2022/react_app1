import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [ // will change those url link to mine.
  {
    icon: faEnvelope,
    url: "mailto: liuchen7978@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ShuGitHub2022",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/shu-liu-05032023shuliu",
  },
  {
    icon: faMedium,
    url: "https://facebook.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/?newreg=f81fbf5a5d7a4600862631df864b36d2",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerElement = headerRef.current;
   
    if (!headerElement){
      return;
    }

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      headerElement.style.transform = "translateY(-200px)";
    } else {
      // Scrolling up
      headerElement.style.transform = "translateY(0)";
    }
    
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };



  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {/* Add links to socials array.Using map to iterate socials array*/
                socials.map(({icon, url}) => (
                  <a 
                    key = {url}
                    href={url}
                    target="_blank" /*open page in a new tab*/
                    rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={icon} size="2x" key={url}/>
                     </a>
                ))
              }
              </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contactme" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
