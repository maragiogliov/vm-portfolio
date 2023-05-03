import React from 'react'
// bringing pics from google drive

const images = [
  {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }, {
    name: "Olives",
    description: "Campagna Eolica 2022",
    src:"https://drive.google.com/uc?export=view&id=1umnUkKCqHbdsd8YRAKGeLMefNly2qg5Y"
  }
];
           

export default function Block2() {
  return (
      <>
          {images.map((image, index) => {
            return (
               


         <img class="block object-cover object-center w-full h-full rounded-lg" src={image.src} alt={image.name} />

       
   

            );
          })}
      </>
    )
  }