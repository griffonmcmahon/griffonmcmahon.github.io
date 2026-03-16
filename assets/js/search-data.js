// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Some of my projects. Descriptions currently under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "projects-f1tenth-autonomous-racing",
          title: 'F1TENTH Autonomous Racing',
          description: "First place internationally with self-driving RC cars",
          section: "Projects",handler: () => {
              window.location.href = "/projects/f1tenth.html";
            },},{id: "projects-hip-energized-hopping-on-jerboa",
          title: 'Hip-Energized Hopping on Jerboa',
          description: "Work with Kod*lab",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jerboa.html";
            },},{id: "projects-quantifying-uncertainty-in-swarm-motion",
          title: 'Quantifying Uncertainty in Swarm Motion',
          description: "Using conformal prediction to quantify the uncertainty of a learned model (section under construction)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/knode_swarm.html";
            },},{id: "projects-optical-flow-to-improve-image-segmentation",
          title: 'Optical Flow to Improve Image Segmentation',
          description: "Predicting trajectories and keeping track of objects in the presence of errors (section under construction)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optical_flow.html";
            },},{id: "projects-competitive-pick-and-place",
          title: 'Competitive Pick and Place',
          description: "Racing to pick up blocks with a robot arm faster than the other team (section under construction)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pick_and_place.html";
            },},{id: "projects-time-delay-induced-bistability-in-swarms",
          title: 'Time Delay Induced Bistability in Swarms',
          description: "Work at the U.S. Naval Research Laboratory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/swarm_bistability.html";
            },},{id: "projects-target-tracking-in-the-presence-of-occlusions",
          title: 'Target Tracking in the Presence of Occlusions',
          description: "Conformal prediction to ensure observational coverage by a quadrotor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/target_tracking.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
