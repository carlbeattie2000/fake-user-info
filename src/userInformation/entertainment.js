const globalFunctions = require("../global");

const movieGenre = () => {
  const genres = [
    "Horror",
    "Action",
    "Romance",
    "Comedy",
    "Science Fiction",
    "Drama",
    "Musical",
    "Thriller",
    "Romantic Comedy",
    "Western",
    "Fiction",
    "Documentary",
    "Crime",
    "Noir",
    "Animation",
    "War",
    "Science",
    "Historical",
    "Adventure",
    "Fantasy",
    "Short",
    "Disaster",
    "Biographical",
    "Dark Comedy",
    "Slasher",
    "Gangster",
    "Martial Arts",
    "Mystery",
    "Teen",
    "Superhero",
    "Sports",
    "Silent",
    "Spy",
    "Kids"
  ];

  return globalFunctions.randomArrayElement(genres);
};

const musicGenre = () => {
  const genres = [
    "Rock",
    "Pop",
    "Hip Hop",
    "Jazz",
    "Folk",
    "Heavy Metal",
    "Blues",
    "Popular",
    "Rhythm and Blues",
    "Country",
    "Classical",
    "Electronic",
    "Punk Rock",
    "Electronic Dance",
    "Soul",
    "House",
    "Techno",
    "Alternative Rock",
    "Instrumental",
    "Trance",
    "Indie Rock",
    "Gospel",
    "Ambient",
    "Singing",
    "Pop Rock",
    "Swing",
    "Contemporary",
    "Dubstep",
    "World",
    "New Wave",
    "Hardcore",
    "Soundtrack",
    "Emo",
    "Drum and Bass"
  ];

  return globalFunctions.randomArrayElement(genres);
};

const artist = () => {
  const artists = [
    "Taylor Swift",
    "Adele",
    "Elton John",
    "Rihanna",
    "Kayne West",
    "Justin Bieber",
    "Drake",
    "Ed Sheeran",
    "Lady Gaga",
    "Ariana Grande",
    "Madonna",
    "Eminem",
    "Beyonce",
    "The Weekend",
    "Michael Jackson",
    "David Bowie",
    "Britney Spears",
    "Stevie Wonder",
    "Bruno Mars",
    "Prince",
    "Mariah Carey",
    "JAY-Z",
    "Justin Timberlake",
    "Dua Lipa",
    "Rod Stewart",
    "Phil Collins",
    "Sam Smith",
    "Bob Marley"
  ];

  return globalFunctions.randomArrayElement(artists);
};

const performer = () => {
  const performers = [
    "Tom Hanks",
    "Will Smith",
    "Robert Downey Jr.",
    "Samuel L. Jackson",
    "Denzel Washington",
    "Robert De Niro",
    "Morgan Freeman",
    "Tom Cruise",
    "Leonardo DiCaprio",
    "Scarlett Johansson",
    "Johnny Depp",
    "Harrison Ford",
    "Brad Pitt",
    "George Clooney",
    "Nicolas Cage",
    "Keanu Reeves",
    "Dwayne Johnson",
    "Hugh Jackman",
    "Meryl Streep",
    "Bruce Willis",
    "Robbie Williams",
    "Bradley Cooper",
    "Jim Carrey",
    "Mark Wahlberg",
    "Chris Evans",
    "Don Cheadle",
    "Michael Cane",
    "Chadwick Boseman",
    "Liam Neeson",
    "Tom Holland",
    "Natalie Portman",
    "Angelina Jolie",
    "Jennifer Aniston",
    "Sandra Bullock",
    "Jenifer Lawrence",
    "Keira Knightley",
    "Emma Stone",
    "Anne Hathaway",
    "Margot Robbie",
    "Emma Watson"
  ];

  return globalFunctions.randomArrayElement(performers);
};

module.exports = {
  movieGenre,
  musicGenre,
  artist,
  performer
};