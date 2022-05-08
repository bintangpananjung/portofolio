import lfmforum from "../assets/forumlfm.png";
import jaramba from "../assets/jaramba.png";
import ngutang from "../assets/ngutang.jpeg";
import simplechat from "../assets/simplechatapp.jpeg";
import vaksinkuy from "../assets/vaksinkuy.png";
export const projectData = [
  {
    title: "Forum Liga Film Mahasiswa (LFM)",
    job: "Fullstack developer",
    sourceLink: ["//github.com/afifakromi/lfm_frontend"],
    imgSource: lfmforum,
    desc: "LFM is an annual program from Unit Kegiatan Mahasiwa ITB that hosts festival film from all universities in Indonesia. Forum LFM is a section in LFM website that provides medium for discussion.",
    tags: ["React JS", "Firebase"],
    reversed: false,
  },
  {
    title: "Jaramba Dashboard Monitoring Internal (Jaramba.id)",
    job: "Frontend developer",
    imgSource: jaramba,
    desc: "Jaramba.id is a start-up that develop a mobility platform that helps people travel and access public transportation by online. Jaramba Dashboard Monitoring Internal is a website platform that helps operational staff of Jaramba.id to monitor business processes in Jaramba.id.",
    tags: ["React JS"],
    reversed: true,
  },
  {
    title: "VaksinKuy",
    job: "Personal Project",
    sourceLink: ["//github.com/bintangpananjung/Web-VaksinKuy"],
    visitLink: "http://vaksinkuy.epizy.com/",
    imgSource: vaksinkuy,
    desc: "VaksinKuy is a website platform that provides informations, register, and sharing informations vaccination.",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
    reversed: false,
  },
  {
    title: "Simple Chat Web Based App",
    job: "Personal Project",
    visitLink: "//web-based-chat-app.netlify.app/",
    sourceLink: ["//github.com/bintangpananjung/simple-chat-app"],
    imgSource: simplechat,
    desc: "Simple chat app is a messaging app adapted from LINE messaging app operated on website platform. Just like LINE messaging app, user has credential such as name and status. User also can add friends by username or id.",
    tags: ["React JS", "Firebase"],
    reversed: true,
  },
  {
    title: "Ngutang",
    job: "Personal Project",
    sourceLink: [
      "//github.com/bintangpananjung/ngutang-frontend",
      "//github.com/bintangpananjung/ngutang-backend",
    ],
    imgSource: ngutang,
    desc: "Ngutang is a website app for managing debt. This project is still in development.",
    tags: ["React JS", "CodeIgniter4"],
    reversed: false,
  },
];
