import type { Movie } from "./types"

// Mock data for movies
const movies: Movie[] = [
  {
    id: "1",
    title: "Stranger Things",
    overview:
      "Cuando un niño desaparece, un pequeño pueblo descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una niña extraña.",
    posterPath: "https://i.ibb.co/zWTfYGJ3/stranger-Thing-Poster.jpg",
    backdropPath: "https://i.ibb.co/yBXqbStQ/stranger-Thing-Back-Drop.webp",
    releaseYear: "2016",
    maturityRating: "TV-14",
    duration: "4 Seasons",
    genres: ["Sci-Fi", "Horror", "Drama"],
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    director: "The Duffer Brothers",
  },
  {
    id: "2",
    title: "The Witcher",
    overview:
      "Geralt de Rivia, un cazador de monstruos mutado a sueldo, viaja hacia su destino en un mundo turbulento donde las personas a menudo resultan más malvadas que las bestias.",
    posterPath: "https://i.ibb.co/jvCJp5BN/witcher.jpg",
    backdropPath: "https://tn.com.ar/resizer/v2/llego-the-witcher-3-y-henry-cavill-empieza-a-despedirse-del-personaje-KW3CO5FRUFAPRP4HGO5F24O734.png?auth=9c39135699d1ca452e24b37aa154e343f7c1403766888403d05a272429e08d41&width=767",
    releaseYear: "2019",
    maturityRating: "TV-MA",
    duration: "2 Seasons",
    genres: ["Fantasy", "Action", "Adventure"],
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    director: "Lauren Schmidt Hissrich",
  },
  {
    id: "3",
    title: "Breaking Bad",
    overview:
      "Un profesor de química de secundaria diagnosticado con cáncer de pulmón inoperable recurre a la fabricación y venta de metanfetamina para asegurar el futuro de su familia.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://static01.nyt.com/images/2019/08/26/espanol/27Pelicula/merlin_76764656_173df8df-9044-456d-9c2d-1c03f1a41042-superJumbo.jpg",
    releaseYear: "2008",
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    director: "Vince Gilligan",
  },
  {
    id: "4",
    title: "The Queen's Gambit",
    overview:
      "En un orfanato de la década de 1950, una niña revela un talento asombroso para el ajedrez y comienza un improbable viaje hacia el estrellato mientras lucha contra la adicción.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSVC0SdvWrlNcWL0lAPhwHM38iHYJCLDVP_psiIyll0R-4UkmxYWUN6ta41LxUaYzLc2kfYrzkdV6Y531SD5NA7J_8AZUWyl-JC_.jpg?r=a3c",
    releaseYear: "2020",
    maturityRating: "TV-MA",
    duration: "Limited Series",
    genres: ["Drama", "Historical"],
    cast: ["Anya Taylor-Joy", "Bill Camp", "Moses Ingram", "Thomas Brodie-Sangster"],
    director: "Scott Frank",
  },
  {
    id: "5",
    title: "Money Heist",
    overview:
      "Ocho ladrones toman rehenes y se encierran en la Real Casa de la Moneda de España mientras un cerebro criminal manipula a la policía para llevar a cabo su plan.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbm_e3DQYMqYApzHilEi8qF94zu9K_GiyEvxjgvBkIQNQSa7-BkkHBIisOIdPFdIkc77oWrA-a6LV8egGCoszLt1hpQ2TJz8-IBiUVfp8qwimlu3D5Yk83WUteWY1dElPHDp3DQco9xxtM3EHutQeyAvttk.jpg?r=f03",
    releaseYear: "2017",
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso"],
    director: "Álex Pina",
  },
  {
    id: "6",
    title: "Dark",
    overview:
      "Un niño desaparecido lleva a cuatro familias a una frenética búsqueda de respuestas mientras descubren un misterio alucinante que abarca tres generaciones.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BZTE1YTczZWUtNTI5Ny00NzI0LWFmODctYzZiYzQ3MmRmOWZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwlfzrNA316N8EVOlnTT0DFABCqUXl9Gtmg&s",
    releaseYear: "2017",
    maturityRating: "TV-MA",
    duration: "3 Seasons",
    genres: ["Sci-Fi", "Mystery", "Thriller"],
    cast: ["Louis Hofmann", "Lisa Vicari", "Maja Schöne", "Oliver Masucci"],
    director: "Baran bo Odar",
  },
  {
    id: "7",
    title: "The Crown",
    overview:
      "Este drama sigue las rivalidades políticas y el romance del reinado de la reina Isabel II y los acontecimientos que dieron forma a la segunda mitad del siglo XX.",
    posterPath: "https://pics.filmaffinity.com/the_crown-838357032-mmed.jpg",
    backdropPath: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSQBq040xeIe0aBgf_YxhnVr3swb9dL8__GNL6LqjkrKDzuYJAxcIHtPgKXav7xy7K3z19oHI9XTqr5MfysOTgnfd7BwmLWE8omv6VxSKwn0QJoDSGhzPtuqPuDzer8vSvqgxltCtTIlCtoo1WGgvUQpi9Q.jpg?r=9c7",
    releaseYear: "2016",
    maturityRating: "TV-MA",
    duration: "4 Seasons",
    genres: ["Drama", "Historical", "Biography"],
    cast: ["Olivia Colman", "Tobias Menzies", "Helena Bonham Carter", "Josh O'Connor"],
    director: "Peter Morgan",
  },
  {
    id: "8",
    title: "Narcos",
    overview:
      "La verdadera historia de los infamemente violentos y poderosos cárteles de la droga de Colombia alimenta esta cruda serie dramática de gánsteres.",
    posterPath: "https://m.media-amazon.com/images/I/91jkF8kLQqL._AC_UF894,1000_QL80_.jpg",
    backdropPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3ORCo_jny31ecYdk6tDZqRNU68wtdnZx9A&s",
    releaseYear: "2015",
    maturityRating: "TV-MA",
    duration: "3 Seasons",
    genres: ["Crime", "Drama", "Biography"],
    cast: ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook", "Alberto Ammann"],
    director: "Chris Brancato",
  },
  {
    id: "9",
    title: "Black Mirror",
    overview:
      "Esta serie de antología de ciencia ficción explora un futuro cercano retorcido y de alta tecnología donde las mayores innovaciones de la humanidad y los instintos más oscuros chocan.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BMGRjZDBjODMtMWQ1Zi00MWRkLTk5YTMtMDU1NTNkMzhkM2QwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://cdn.zendalibros.com/wp-content/uploads/2025/04/estreno-de-black-mirror-7.jpg",
    releaseYear: "2011",
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    genres: ["Sci-Fi", "Drama", "Thriller"],
    cast: ["Various", "Actors", "Per", "Episode"],
    director: "Charlie Brooker",
  },
  {
    id: "10",
    title: "Ozark",
    overview:
      "Un asesor financiero arrastra a su familia desde Chicago hasta los Ozarks de Missouri, donde debe lavar 500 millones de dólares en cinco años para apaciguar a un jefe de la droga.",
    posterPath: "https://m.media-amazon.com/images/I/41-sMkz2OeL._AC_UF894,1000_QL80_.jpg",
    backdropPath: "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/02/Series_para_aprender_ingle%CC%81s_Netflix_Ozark_Planeta_Urbano_2022.jpg?resize=1250%2C720&ssl=1",
    releaseYear: "2017",
    maturityRating: "TV-MA",
    duration: "4 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Jason Bateman", "Laura Linney", "Sofia Hublitz", "Skylar Gaertner"],
    director: "Bill Dubuque",
  },
  {
    id: "11",
    title: "Squid Game",
    overview:
      "Cientos de jugadores con problemas económicos aceptan una extraña invitación para competir en juegos infantiles. Dentro, les espera un premio tentador, con apuestas desorbitadas.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BMDA0NDBkMzMtOWQ0Zi00NjE1LTkxNWYtYzI0MTE0NGJjZTQ1XkEyXkFqcGc@._V1_.jpg",
    backdropPath: "https://www.impericon.com/cdn/shop/articles/Squid-Game-season-2-header-Netflix-video.jpg?v=1722603430",
    releaseYear: "2021",
    maturityRating: "TV-MA",
    duration: "1 Season",
    genres: ["Drama", "Thriller", "Action"],
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun", "Jung Ho-yeon"],
    director: "Hwang Dong-hyuk",
  },
  {
    id: "12",
    title: "Bridgerton",
    overview:
      "Los ocho hermanos muy unidos de la familia Bridgerton buscan el amor y la felicidad en la alta sociedad londinense.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BZmRjNDNlMDMtNDZlMS00NzE4LTk0OGMtYjQyMWY3YWFmY2I5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://hips.hearstapps.com/hmg-prod/images/apertura-666b13143ec3e.jpg?crop=1.00xw:0.844xh;0,0&resize=1200:*",
    releaseYear: "2020",
    maturityRating: "TV-MA",
    duration: "2 Seasons",
    genres: ["Drama", "Romance", "Historical"],
    cast: ["Regé-Jean Page", "Phoebe Dynevor", "Jonathan Bailey", "Nicola Coughlan"],
    director: "Chris Van Dusen",
  },
  {
    id: "13",
    title: "The Last Kingdom",
    overview:
      "Mientras Alfredo el Grande defiende su reino de los invasores nórdicos, Uhtred, nacido sajón pero criado por vikingos, busca reclamar su derecho de nacimiento ancestral.",
    posterPath: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12079367_b_v8_an.jpg",
    backdropPath: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABQVC_Wsd3D8pJEaV0lP9PDq65Ri2F6TSXlT8anadauoJtWKJ0ZnzUhAxJEWgTORdPS8seY0wJRXKPLbQj6UwKGMA61XhIhn1ITZ5.jpg?r=8b8",
    releaseYear: "2015",
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    genres: ["Action", "Drama", "Historical"],
    cast: ["Alexander Dreymon", "Eliza Butterworth", "Arnas Fedaravicius", "Mark Rowley"],
    director: "Stephen Butchard",
  },
  {
    id: "14",
    title: "Peaky Blinders",
    overview:
      "Una pandilla notoria en Birmingham, Inglaterra, en 1919 está liderada por el feroz Tommy Shelby, un jefe criminal decidido a ascender en el mundo sin importar el costo.",
    posterPath: "https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/434988/434988.png",
    backdropPath: "https://resizer.glanacion.com/resizer/v2/la-gorras-de-peaky-blinders-la-pista-para-3LZR4X2BABG67LDIQC4B2RLSJY.jpg?auth=b34e15c0f9fd1114793c495b6e8a3c0ba678d56420beec64afcb78c4ee15d533&width=1280&height=854&quality=70&smart=true",
    releaseYear: "2013",
    maturityRating: "TV-MA",
    duration: "6 Seasons",
    genres: ["Crime", "Drama", "Historical"],
    cast: ["Cillian Murphy", "Paul Anderson", "Sophie Rundle", "Helen McCrory"],
    director: "Steven Knight",
  },
  {
    id: "15",
    title: "Wednesday",
    overview:
      "Inteligente, sarcástica y un poco muerta por dentro, Wednesday Addams investiga una ola de asesinatos mientras hace nuevos amigos (y enemigos) en Nevermore Academy.",
    posterPath: "https://m.media-amazon.com/images/M/MV5BY2E1NDI5OWEtODJmYi00Nzg2LWI4MjUtODFiMTU2YWViOTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdropPath: "https://m.media-amazon.com/images/M/MV5BMDVkNjgwNGItNTEzZi00ZTU1LTk4Y2UtODk0OWE5ZmQwOTQ2XkEyXkFqcGc@._V1_.jpg",
    releaseYear: "2022",
    maturityRating: "TV-14",
    duration: "1 Season",
    genres: ["Comedy", "Fantasy", "Mystery"],
    cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome", "Christina Ricci"],
    director: "Alfred Gough",
  },
  {
    id: "16",
    title: "Resident Evil",
    overview:
      "Una mujer con amnesia y un equipo militar intentan contener un brote zombi en una instalación secreta de Umbrella Corporation.",
    posterPath: "https://pics.filmaffinity.com/Resident_Evil-587544510-large.jpg",
    backdropPath: "https://i.blogs.es/860f07/resident-evil-movies-ranked-1-/840_560.jpeg",
    releaseYear: "2002",
    maturityRating: "TV-14",
    duration: "6 Season",
    genres: ["Action", "Horror", "Sci-Fi"],
    cast: ["Milla Jovovich", "Michelle Rodriguez", "Eric Mabius", "James Purefoy"],
    director: "Paul W.S. Anderson",
  },
]

// Get all movies
export function getAllMovies(): Movie[] {
  return movies
}

// Get movie by ID
export function getMovieById(id: string): Movie | undefined {
  return movies.find((movie) => movie.id === id)
}

// Get movies by category (simulated)
export function getMoviesByCategory(category: string): Movie[] {
  // In a real app, you would filter by category
  // Here we're just returning different subsets of the movies array
  switch (category) {
    case "trending":
      return movies.slice(0, 6)
    case "popular":
      return movies.slice(3, 9)
    case "action":
      return movies.filter((movie) => movie.genres.includes("Action"))
    case "comedy":
      return movies.filter((movie) => movie.genres.includes("Comedy")).length > 0
        ? movies.filter((movie) => movie.genres.includes("Comedy"))
        : movies.slice(4, 10)
    case "horror":
      return movies.filter((movie) => movie.genres.includes("Horror"))
    case "documentary":
      return movies.filter((movie) => movie.genres.includes("Documentary")).length > 0
        ? movies.filter((movie) => movie.genres.includes("Documentary"))
        : movies.slice(7, 12)
    case "drama":
      return movies.filter((movie) => movie.genres.includes("Drama"))
    case "sci-fi":
      return movies.filter((movie) => movie.genres.includes("Sci-Fi"))
    case "crime":
      return movies.filter((movie) => movie.genres.includes("Crime"))
    case "thriller":
      return movies.filter((movie) => movie.genres.includes("Thriller"))
    case "similar":
      return movies.slice(2, 8)
    default:
      return movies
  }
}

// Get new releases (simulated)
export function getNewReleases(): Movie[] {
  // In a real app, you would filter by release date
  // Here we're just returning a subset of the movies array
  return movies.slice(10, 15)
}

// Get upcoming movies (simulated)
export function getUpcoming(): Movie[] {
  // In a real app, you would filter by release date
  // Here we're just returning a subset of the movies array
  return movies.slice(8, 13).reverse()
}

// Get my list (simulated)
export function getMyList(): Movie[] {
  // In a real app, this would be user-specific
  // Here we're just returning an empty array to demonstrate the empty state
  return []
}
