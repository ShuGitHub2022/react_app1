import {  Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.


  return (
    
      <VStack background='white' borderRadius='lg' cursor="pointer" >
        <Image
          borderRadius='lg'
          src={imageSrc}
          alt='title'
   />
       <VStack spacing={4} p={4} alignItems='flex-start' color="black">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as='h3' size='md'>
           {title}
         </Heading>
        </HStack>         
         <Text color='gray.500' fontSize='lg'>
          {description}
         </Text>
         <HStack spacing={2} alignItem="center">
          <p>See more</p> <FontAwesomeIcon icon={faArrowRight} size='1x' />
         </HStack>         
       </VStack>
     </VStack>
    
  );
};

export default Card;
