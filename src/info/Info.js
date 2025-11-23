import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nishtha",
    lastName: "Jain",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "I build things that make sense and write about things that don’t",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🎓',
            text: 'Amrita Vishwa Vidyapeetham (2024-28)'
        },
        {
            emoji: '📍',
            text: 'Hyderabad, India'
        },
        {
            emoji: '💡',
            text: 'Member and Mentor @amFOSS — https://amfoss.in'
        },
        {
            emoji: "📧",
            text: "jnishtha305@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Nishthajain7",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nishtha-jain-44b6b32a1/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/Nishtha_jain_",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://gitlab.com/jnishtha305",
            icon: "fa fa-gitlab",
            label: 'gitlab'
        },
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "I've been a speaker at workshops and events like Hacktoberfest, where I mentored students in my areas of expertise to help them make open-source contributions. I've also been in the organizing team for larger events like IndiaFOSS.",
    skills:
    {
        proficientWith: ['Git & Github', 'React', 'Next.js', 'TypeScript', 'Python', 'Flutter', 'Kotlin', 'SwiftUI'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    }
    ,
    hobbies: [
        {
            label: 'Writing on Quora',
            emoji: '📝'
        },
        {
            label: 'Signing and playing guitar',
            emoji: '🎵'
        },
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    projects: [
        {
            name: "Student Skill Development Tracking System",
            description: "Used by the Corporate & Industry Relations department for managing student skill development, facilitating mentorship and generating insights.",
            stack: ["Next.js", "Tailwind", "graphQl", "Design"],
        },
        {
            name: "Scribe-Android (Wikimedia)",
            description: "Android keyboards for language learners. Features include translation, verb conjugation and word annotation that give users the tools needed to communicate.",
            stack: ["Kotlin"],
            code: "https://github.com/scribe-org/Scribe-Android/",
        },
        {
            name: "amFOSS Home Frontend",
            description: "Central dashboard for the amFOSS to track and manage member attendance, status updates, and other key activities",
            stack: ["React", "Next.js", "Tailwind CSS"],
            code: "",
            demo: ""
        }
    ],
    hackathons: [
  {
    title: "Define3 Hackathon",
    date: "Feb 2025",
    description: "Built a centralized skill-tracking platform for student career guidance. Responsible for frontend architecture, dashboards, and data visualization.",
    role: "Frontend Lead",
    image: require("../img/mock1.png"),
    links: {
      writeup: "https://github.com/your/repo-or-writeup",
      certificate: "https://example.com/certificate.pdf"
    }
  },
  {
    title: "amFOSS Hacktoberfest",
    date: "Oct 2024",
    description: "Mentored contributors and built a notes app feature during the event.",
    role: "Mentor / Contributor",
    image: require("../img/mock1.png"),
    links: {}
  }
]


}