export const projects = [
  {
    title: "OceaniaDevs: Tech Jobs Platform",
    description: `OceaniaDevs is a new refined, tailored jobs platform focused entirely on the technology industry in Australia and dedicated to serving technology professionals.

    • Utilized Python and Flask with Gunicorn with the Gevent library for the backend

    • Leveraged PostgreSQL's Full-Text Search (FTS) capabilities and created indexes on key columns, resulting in a ∼80% improvement in search query execution times

    • Configured NGINX as a reverse proxy, significantly boosting page load speeds

    • Implemented Redis for session management and caching search queries, reducing average response times by 60%

    • Utilized Docker for containerization, ensuring consistent development and deployment environments

    • Built a CI/CD pipeline to automate the deployment of the dockerized application to AWS Lightsail using GitHub Actions, streamlining updates and maintenance

    • Developed a responsive frontend with React and TailwindCSS, ensuring a modern and user-friendly interface`,
    image: "/images/oceaniadevs-home.png",
    tags: ["Python", "PostgreSQL", "AWS", "Docker", "Redis", "React", "NGINX"],
    source:
      "https://github.com/jaiphookan20/OceaniaDevs",
    visit:
      "http://54.79.190.69/",
    id: 0,
  },
  {
    title: "Real-Time Location Tracking App for Families",
    description:
      `
      • Created a Android application that incorporates real-time, simultaneous location tracking for multiple family members & uses geofencing technology to 
        trigger alerts when members enter or exit designated zones
      
      • Led backend development for a Android application, within a three-person team, designed to enhance family safety
      
      • Utilized Kotlin and Java for the application’s core logic; integrated Firebase for real-time location data storage,
      
      • Integrated Google Maps APIs for precise location tracking and geofencing capabilities`,

    image: "/images/Geofence2.gif",
    tags: ["Android", "Java", "Kotlin", "Firebase", "Google Maps"],
    source:
      "https://github.com/jaiphookan20/Android-Real-Time-Location-Tracking-App-for-Families/tree/main",
    visit:
      "https://github.com/jaiphookan20/Android-Real-Time-Location-Tracking-App-for-Families/tree/main",
    id: 1,
  },
  {
    title: "Realtime, Collaborative Drawing Board & Chat Application",
    description:
      `• Developed a real-time shared drawing board application built using Java, leveraging Java RMI for network
      communications, where multiple users can draw on a shared canvas simultaneously and chat together in real-time
      
      • Enables multiple users to simultaneously draw, modify shapes and interact on the canvas for collaborative work
      
      • Leveraged Multi-threading and Concurrency mechanisms to ensure seamless real-time collaboration without any lag or overlap issues for a seamless user experience
      `,
    image: "/images/collaborative-drawing-board.png",
    tags: ["Java"],
    source:
      "https://github.com/jaiphookan20/RealTime-Collaborative-DrawingBoard",
    visit:
      "https://github.com/jaiphookan20/RealTime-Collaborative-DrawingBoard",
    id: 2,
  },
  {
    title: "Full Stack Vacation Rental Reservation Platform",
    description:
      `• Created a responsive full-stack web application for booking vacation rentals. Features added includes: Registration, Login, Creation of New Listings, Booking functionality etc.
      
      • Leveraged NodeJs and Express to devise robust RESTful APIs to support critical features, including user authentication, property listings, and reservation bookings
      
      • Utilized MongoDB with the Mongoose ODM library to enhance data management, ensuring efficient retrieval of property and user details; employed ReactJS & TailwindCSS for a modern, responsive frontend 
      
      • Incorporated bcrypt and JSON Web Tokens (JWT) for enhanced user authentication, utilized AWS S3 for streamlined image storage and management and hosted on Vercel
      `,
    image: "/images/vacation-rental-home-page.png",
    tags: ["MongoDB", "React", "Express", "NodeJS", "AWS"],
    source:
      "https://github.com/jaiphookan20/Full-Stack-Vacation-Rental-Platform",
    visit: "https://full-stack-vacation-rental-platform-jai.vercel.app/",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
