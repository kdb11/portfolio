import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Geopardy",
    image: projectOne,
    description: (
      <>
        <p>
        "Geopardy" is an interactive quiz game. Developed using HTML, CSS, and JavaScript, the site offers a dynamic and user-friendly experience. Behind the scenes, it leverages APIs to source quiz questions and categories, ensuring a diverse and engaging gameplay.
        </p>
      </>
    ),
    github: "https://github.com/kdb11/Geopardy",
    demo: "https://kdb11.github.io/Geopardy/",
  },
  2: {
    title: "Dog local blockchain",
    image: projectTwo,
    description: (
      <>
        <p>
        The local blockchain app is a decentralized application (DApp) connected to a dog API. It fetches real-time data about various dog breeds, offering a fun and informative experience for users. Using blockchain technology ensures data transparency and security, creating a trustless platform for dog enthusiasts.
        </p>
      </>
    ),
    github: "https://github.com/kdb11/dogBlockchain",
    demo: "https://kdb11.github.io/dogBlockchain/",
  },
  3: {
    title: "Todo App",
    image: projectThree,
    description: (
      <>
        <p>
        The Todo app is a user-friendly task management tool that helps organize tasks, set priorities, and track completion. With reminders and filters, it boosts productivity and ensures seamless task management. 
        </p>
      </>
    ),
    github: "https://github.com/Medieinstitutet/todos-kdb11",
    demo: "https://medieinstitutet.github.io/todos-kdb11/",
  },
};

export default projects;