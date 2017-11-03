import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'movie-thumb',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];
    moviesCopy: Movie[];
    selectedMovie: Movie;
    availableMovies: Movie[];

  constructor() { }

  ngOnInit() {
    this.movies = [{
      title: "Black Swan",
      year: 2010,
      genre: "drama",
      description: "Academy Award Winner Natalie Portman plays Nina, a stunningly talented but dangerously unstable ballerina on the verge of stardom. Pushed to the breaking point by her driven artistic director (Vincent Cassel) and the threat posed by a seductive rival dancer (Mila Kunis), Nina's tenuous grip on reality starts to slip away - plunging her into a waking nightmare.",
      review: {
        Anticipation: "Anticipation: 4/5 - the first time I watched it. This review is based on the second time I've seen it.",
        Enjoyment: "Enjoyment: 5 / 5 - I am blown away by Portman's portrayed neurosis every time. Kunis provides an outstanding supporting performance as well.",
        inRetrospect: "In Retrospect: 5/5 -flawless directing by Aronofsky with beautiful camera angles that capture the fragility of the production.",
        content: "Darren Aronofsky is the master of subjectivity in Black Swan, which is to say that the film is driven by Portman into it's plot. It would have been easy to make the story an exposé on the ballet industry or the labor intensive lives that ballet dancers live (as it is shot similarly to a documentary style), but he doesn't do that explicitly so much as he tells a story first and foremost. He chooses instead to be more psychological, exposing the neurosis of Portman's character as she transforms. The myth of Swan Lake (the production being illustrated in Black Swan) is a tale of transformation. A girl is transformed into a swan and only true love can save her. When she finds a prince and she thinks she has sealed the deal, she finds he has been seduced by her evil twin, the black swan. Devastated, the white swan kills herself, seemingly finding peace in the end. In Swan Lake the white and black swans are played by the same dancer, meaning this dancer has to have two sides to herself; a classical, innocent side and a free-forming, lustful side. Portman's demise comes from her neurosis differentiating the two swans and differentiating reality from her psychosis.Her character sees this psychotic transformation as a beautiful thing that has happened even though it all but destroys her. The subject of surrealism can also be talked about when discussing Aronofsky's direction of the film. Some of his most successful shots are due to the stereotypical horror mirror trick. We can see Portman's character as we believe her to be doing something completely different than her reflection shows. We see the mirror being used to transform characters into one another (i.e. Kunis' reflection is in the mirror, but when she turns around it's Portman). We can seen any shiny surface (such as a stage floor) being used to mirror whatever is touching it, creating a creepy double effect. The movie is shot so simply but made beautifully whole in post - production.Aronofsky moves the camera before he moves the actors and in doing so he gives himself very stylistic control. Everything else is just ambiance.The  live action effects (makeup) and digital effects (CGI transformations) are given life because of how Aronofsky incorporates chilling music and incredible sound effects.We can hear bones crunching and feathers ruffling. Take the obvious editing tricks of the film and pair that with Portman's neurosis and it's impossible to tell what's real and what isn't.The run time (1:48) is fast and always moving, like a pirouette, keeping the audience on it's toes and onto the next act, so before we know it we're in the final scene.The subjectivity that Aronofsky creates is a surreal and visceral experience.This was a very stylistic movie and a good one at that. "
      },
      thumbnail: "../../../assets/img/blackswan.jpg",
      trailer: "https://www.youtube.com/embed/5jaI1XOB-bs",
      active: false,
    },
    {
      title: "Eyes Wide Shut",
      year: 1999,
      genre: "Drama",
      description: "After Dr. Bill Hartford's (Tom Cruise) wife, Alice (Nicole Kidman), admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.",
      review: {
        Anticipation: "Anticipation: 4/5 - being Kubrick's last movie I expected him to go out with a bang.",
        Enjoyment: "Enjoyment: Cruise's acting made a detriment that Kubrick's direction couldn't make up for.",
        inRetrospect: "In Retrospect: 3.5/5 - Kidman's acting and Kubrick's fondness of nudity give this film the following it has.",
        content: "Eyes Wide Shut lacked the obvious surrealism that Kubrick usually delivered. Sure it had scenes warm in color being back-lit by dark, dreamy blues, but the scenes that called for it most (ie. the mansion scenes) didn't have the surrealism aesthetic that the setting deserved. Instead Kubrick decided to be a little more subtle; he decided to incorporate a very blatant plot driven contrast to the story. You get characters like Nicole Kidman's who is a glasses wearing, stay-at-home mom by day and a pot smoking, lust driven, sex kitten by night. The deep highs and lows of her character give her a manic quality that leaves characters like Tom Cruise's uneasy. We also find that the movie takes place at Christmas time, giving the movie a sickening contrast between the sex-filled cult aspect and the innocence of the holidays. Looking past Cruise's acting (there wasn't a moment in the movie where I thought he was anyone other than Tom Cruise) his character's all or nothing attitude provides the most frightening contrast at all. He will get down the the bottom of circumstances that took place that night at the mansion after his departure or die trying. The only thing that counters his intense obsession with lust itself is his inability to actually commit. He didn't actually sleep with anyone externally from his marriage.Tom Cruise doesn't actually get undressed anywhere outside his bedroom with his wife. This is a stark contrast to Kidman's character whom we see very naked a very large percentage of the movie, even if only through fantasy.Cruise's character exhibits what author David Foster Wallace terms a very American, ‘I will fix this somehow, by taking radical action,' mentality. In terms of Kubrick's direction the whole movie feels very American. You don't get the sex- driven, mob mentality that A Clockwork Orange provided. There is a mob and it is sex driven, but by following Cruise's character you are an outlier. You expect the sex cult to wear masks and cloaks and be creepy but you never really buy into it with Cruise being outed by them. The white wearing boys in A Clockwork Orange are much more intimidating with the threat of violence clearly illustrated. In Eyes Wide Shut the threat is just that, a threat. By making the sex cult dominated by rich white men, Kubrick attempts to intimate the viewers similar to how A Clockwork Orange intimates viewers through their disconnect with the British thugs; however he isn't as successful this time.I don't think that I believed they were a threat to Cruise at all through the duration of the movie. Ultimately the nudity and scandal in this movie is what Kubrick is known for. He always tried to push the boundary, but with Eyes Wide Shut it feels like he never really got to the point.He had enough time to get there, the movie was so long, but it felt like we were running in circles around an idea instead of actually being introduced to it. "
      },
      thumbnail: "../../../assets/img/Eyes_Wide_Shut.jpg",
      trailer: "https://www.youtube.com/embed/yxqrzWe0Ggc",
      active: false,
    },
    {
      title: "Gone Girl",
      year: 2014,
      genre: "mystery",
      description: "In Carthage, Mo., former New York-based writer Nick Dunne (Ben Affleck) and his glamorous wife Amy (Rosamund Pike) present a portrait of a blissful marriage to the public. However, when Amy goes missing on the couple's fifth wedding anniversary, Nick becomes the prime suspect in her disappearance. The resulting police pressure and media frenzy cause the Dunnes' image of a happy union to crumble, leading to tantalizing questions about who Nick and Amy truly are.",
      review: {
        Anticipation: "",
        Enjoyment: "",
        inRetrospect: "",
        content: " coming soon."
      },
      thumbnail: "../../../assets/img/gonegirl.jpg",
      trailer: "https://www.youtube.com/embed/SJTacw9yI-Q",
      active: false,
    },
    {
      title: "Whiplash",
      year: 2014,
      genre: "drama",
      description: "Andrew Neiman (Miles Teller) is an ambitious young jazz drummer, in pursuit of rising to the top of his elite music conservatory. Terence Fletcher (J.K. Simmons), an instructor known for his terrifying teaching methods, discovers Andrew and transfers the aspiring drummer into the top jazz ensemble, forever changing the young man's life. But Andrew's passion to achieve perfection quickly spirals into obsession, as his ruthless teacher pushes him to the brink of his ability and his sanity.",
      review: {
        Anticipation: "",
        Enjoyment: "",
        inRetrospect: "",
        content: "coming soon."
      },
      thumbnail: "../../../assets/img/whiplash.jpg",
      trailer: "https://www.youtube.com/embed/Hr8viix_bWI",
      active: false,
    },
    {
      title: "Her",
      year: 2013,
      genre: "drama",
      description: "A sensitive and soulful man earns a living by writing personal letters for other people. Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right. He starts the program and meets 'Samantha' (Scarlett Johansson), whose bright voice reveals a sensitive, playful personality. Though 'friends' initially, the relationship soon deepens into love.",
      review: {
        Anticipation: "",
        Enjoyment: "",
        inRetrospect: "",
        content: "coming soon."
      },
      thumbnail: "../../../assets/img/her.jpg",
      trailer: "https://www.youtube.com/embed/vA0gS9ugrls",
      active: false,
    },
    {
      title: "American Ultra",
      year: 2015,
      genre: "sci-fi",
      description: "Small-town stoner Mike Howell (Jesse Eisenberg) spends most of his time getting high and writing a graphic novel. What Mike doesn't know is that he was trained by the CIA to be a lethal killing machine. When the agency targets him for termination, his former handler activates his latent skills, turning the mild-mannered slacker into a deadly weapon. Now, the utterly surprised Mike must use his newfound abilities to save himself and his girlfriend from getting smoked.",
      review: {
        Anticipation: "",
        Enjoyment: "",
        inRetrospect: "",
        content: "coming soon."
      },
      thumbnail: "../../../assets/img/americanultra.jpg",
      trailer: "https://www.youtube.com/embed/hjPJXnk48D4",
      active: false,
    },
    {
      title: "20th Century Woman",
      year: 2016,
      genre: "drama",
      description: "In 1979 Santa Barbara, Calif., Dorothea Fields is a determined single mother in her mid-50s who is raising her adolescent son, Jamie, at a moment brimming with cultural change and rebellion. Dorothea enlists the help of two younger women -- Abbie, a free-spirited punk artist living as a boarder in the Fields' home and Julie, a savvy and provocative teenage neighbor -- to help with Jamie's upbringing.",
      review: {
        Anticipation: "",
        Enjoyment: "",
        inRetrospect: "",
        content: "coming soon."
      },
      thumbnail: "../../../assets/img/20thcentury.jpg",
      trailer: "https://www.youtube.com/embed/JIe6_e2ICzQ",
      active: false,
    },
    {
      title: "Tanner Hall",
      year: 2009,
      genre: "drama",
      description: "A manipulative childhood acquaintance (Georgia King) worms her way into a teenager's (Rooney Mara) circle of friends at an all-girls boarding school.",
      review: {
        Anticipation: "",
        Enjoyment: "",
        inRetrospect: "",
        content: "coming soon."
      },
      thumbnail: "../../../assets/img/tanner_hall_poster.jpg",
      trailer: "www.youtube.com/embed/rDuR_Qhpq8I",
      active: false,
    }]; // this bracket closes the this.movies
    this.moviesCopy = this.movies.slice(0, 4);
    this.availableMovies = this.movies.slice(4, 8);
  } // this is the end of the ngOnInit

  changeMovie(index: number, movie: Movie) {
    const myNum: number = Math.floor(Math.random() * 4);
    this.moviesCopy.splice(index, 1, this.availableMovies[myNum]);
    this.availableMovies.splice(myNum, 1, movie);
  }

  scrollToBottom() {
    setTimeout(function () {
      window.scrollTo(0, document.body.scrollHeight);
    }, 50);
  }

} // this is the end of the export class

