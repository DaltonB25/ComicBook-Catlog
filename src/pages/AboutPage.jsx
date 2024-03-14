// import JuanImage from '../images/Juan.png'; // relative path from the current file to the image

const allImages = [
  {
    name: "Juan G. Cabrera",
    mainImage: {
      url: "https://res.cloudinary.com/dt8b5pu9l/image/upload/v1710437406/Juan_jt6g2e.png", // using the imported image
      alt: "Juan G. Cabrera"
    },
    smallImages: [
      {
        img: "https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png",
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
      url: "https://res.cloudinary.com/dt8b5pu9l/image/upload/v1710437379/Balton_qd0awa.png",
    },
    smallImages: [
      {
        img: "https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png",
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

