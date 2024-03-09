import React from "react";

// import JuanImage from "project-2-intilization/project-2-intilization-client/src/images/Juan.webp"

const allImages = [
  {
    name: "Juan G. Cabrera",
    mainImage: {
      url: "https://files.oaiusercontent.com/file-PZamMHw7GoarjRYrkZfSk1zR?se=2024-03-09T20%3A00%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2d54ac40-5f5d-4cfb-ab57-20c2a473cabd.webp&sig=0tINIIUAXl%2BO71aHD1c0rEyMfZYzf9tmcnfM%2Bv83R0M%3D",
    },
    smallImages: [
      {
        img: "src/images/github-mark.svg",
        alt: "GitHub",
        link: "https://github.com/arebac",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
        alt: "Linkedin",
        link: "https://www.linkedin.com/in/juan-cabrera-9208b9116/",
      },
    ],
  },
  {
    name: "Dalton Baker",
    mainImage: {
      url: "https://files.oaiusercontent.com/file-ITaSDCO1zGjFRbiPv4WSX8oH?se=2024-03-09T20%3A00%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D122f1421-aa83-408c-84e5-89d5fed506d5.webp&sig=nGZTligxzrjWhOQWwxQeVJli3GJhuy6XABEFcVHee/s%3D"   ,
    },
    smallImages: [
      {
        img: "src/images/github-mark.svg",
        alt: "GitHub",
        link: "https://github.com/DaltonB25",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
        alt: "Linkedin",
        link: "https://www.linkedin.com/in/dalton-baker-ab46732b7/",
      },
    ],
  }
];






function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>Meet our Members!</h1>
      
      <div className="images"> 
        {allImages.map((person, index) => (
          <div key={index} className="person-container">
            <a
              href={person.mainImage.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={person.mainImage.url}
                alt={person.mainImage.alt}
                className="nameimages-img"
              />
            </a>
            <p className="person-name">{person.name}</p>
            <div className="nameimages-img-small-container">
              {person.smallImages.map((smallImage, smallIndex) => (
                <a
                  href={smallImage.link}
                  key={smallIndex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`small-image-${smallIndex}`}
                >
                  <img
                    src={smallImage.img}
                    alt={smallImage.alt}
                    className="nameimages-img-small"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default AboutPage;

// const allImages = [
//   {
//     name: "Juan Cabrera",
//     mainImage: {
//       url: "project-2-intilization/project-2-intilization-client/src/images/Juan.webp",
//     },
//     smallImages: [
//       {
//         img: "src/images/project-2-intilization\project-2-intilization-client\src\images\github-mark.svg",
//         alt: "GitHub",
//         link: "https://github.com/arebac",
//       },
//       {
//         img: "src/images/linkedin-logo.png",
//         alt: "LinkedIn",
//         link: "",
//       },
//     ],
//   },
// {
//   name: "Dalton Baker",
//   mainImage: {
//     url: "project-2-intilization/project-2-intilization-client/src/images/Balton.webp",
//   },
//   smallImages: [
//     {
//       img: "src/images/github-mark.svg",
//       alt: "GitHub",
//       link: "https://github.com/DaltonB25",
//     },
//     {
//       img: "src/images/linkedin-logo.png",
//       alt: "LinkedIn",
//       link: "https://www.linkedin.com/in/dalton-baker-ab46732b7/",
//     },
//   ],
// }
// ]