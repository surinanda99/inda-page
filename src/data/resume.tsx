import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Surinanda",
  initials: "",
  url: "https://dillion.io",
  location: " Indonesia, Semarang",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I love building creative and functional solutions that bring ideas to life.",
  summary: `I'm deeply passionate about web, software development, and data, with a strong interest in creating innovative applications. I enjoy learning, 
collaborating, and bringing creative ideas to life. Excited to contribute to impactful projects and be part of teams driving technological 
advancements`,
  avatarUrl: "#",
  skills: [
    "Javascript",
    "Typescript",
    "PHP",
    "Python",
    "Java",
    "MySql",
    "Laravel",
    "Bootstrap",
    "Postman",
    "Github",
    "Excel",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/surinanda99",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/suri-nanda/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "surinanda29@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  experience: [
    {
      company: "Bengkel Koding",
      href: "https://bengkelkoding.dinus.ac.id/",
      badges: ["Internship"],
      location: "Onsite",
      title: "Fullstack Web Developer",
      logoUrl: "/bengkelkoding.png",
      start: "Jan 2024",
      end: "Feb 2025",
      description:
        " Bengkel Koding is a teaching support program within the Faculty of Computer Science that involves Teaching Assistants in its implementation. This project involved creating an internship management website to handle data for over 400 students. The development team consisted of 3 members, with me serving as the full-stack developer. The primary goal of this website was to digitize and streamline the existing system for better efficiency and accessibility.",
    },

    {
      company: "Bengkel Koding",
      href: "https://bengkelkoding.dinus.ac.id/",
      badges: ["Assistance"],
      location: "Onsite",
      title: "Mentor Web Development",
      logoUrl: "/bengkelkoding.png",
      start: "Jan 2024",
      end: "Jun 2024",
      description:
        " I guide approximately up 10 students in mastering web programming, from fundamentals to relational databases using the MVC approach. Additionally, I organize and lead intensive class sessions. Proficient in HTML, CSS frameworks, JavaScript, PHP, Laravel, and MySQL",
    },

    {
      company: "Google Developer Student Club (UDINUS)",
      href: "https://gdg.community.dev/",
      badges: ["Member"],
      location: "Onsite",
      title: "Active Member",
      logoUrl: "/GDSCLogo.png",
      start: "Mei 2024",
      end: "Feb 2025",
      description:
        "Google Developer Group on Campus is a vibrant community focused on supporting aspiring developers and tech enthusiasts. Participated in Devsember: Introduction to RESTful API Development with Go, gaining hands-on experience in building scalable APIs.",
    },
  ],
  education: [
    {
      school: "Dian Nuswantoro University",
      href: "https://dinus.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/logo_udinus.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Gajah Mada University",
      href: "https://ugm.ac.id/en/",
      degree: "Student Exchange Mobility",
      logoUrl: "/gajah_mada.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Website STI Kerja Praktek Universitas Dian Nuswantoro",
      href: "https://sti.dinus.ac.id/KP/",
      dates: "Apr 2024 - Nov 2024",
      active: true,
      description: "Website STI Kerja Praktek adalah sebuah aplikasi berbasis website yang dirancang untuk membantu dan mempermudah sistem pengajuan judul dan bimbingan mahasiswa yang mengikuti Kerja Praktek.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://sti.dinus.ac.id/KP/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "#",
    },

    // {
    //   title: "####",
    //   href: "https://magicui.design",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description: "lorem",
    //   technologies: ["Next.js", "Typescript", "PostgreSQL", "TailwindCSS"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "#",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "#",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "#",
    // },
  ],

  HandsOn: [
    {
      title: "Web Inventory Management Apotek",
      dates: "June 11th - 14th, 2023",
      location: "Semarang",
      description: "Aplikasi yang dirancang untuk membantu apotek dalam mengelola persediaan dan operasional gudangnya secara efisien.",
      image: "bebas",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/surinanda99/Web-Inventory-Management-Apotek",
        },
      ],
    },

    {
      title: "Klasifikasi Ulasan Shopee",
      dates: "november 4th - 20th, 2023",
      location: "Yogyakarta",
      description: "Project analisis sentimen aplikasi pada Shopee mencakup berbagai aspek yang perlu dianalisis untuk memahami pandangan dan perasaan pengguna terhadap aplikasi Shopee.",
      image: "bebas",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/surinanda99/klasifikasi-ulasan-shopee",
        },
      ],
    },

    {
      title: "Klasifikasi Obesitas",
      dates: "october 12th - 22th, 2023",
      location: "Yogyakarta",
      description: "Mengimplementasikan model prediksi obesitas menggunakan metode Logistic Regression berdasarkan indeks massa tubuh (BMI).",
      image: "bebas",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/surinanda99/klasifikasi-obesitas",
        },
      ],
    },

    {
      title: "Penentuan Rute Tercepat",
      dates: "September 20th - 30th, 2023",
      location: "Yogyakarta",
      description: "Project analisis untuk menentukan rute tercepat antar fakultas ugm ketika sedang mengikuti kunjungan",
      image: "bebas",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/surinanda99/Perutean",
        },
      ],
    },

    {
      title: "Aplikasi Crimcone",
      dates: "December 1st - 31th, 2022",
      location: "Semarang",
      description: "Aplikasi untuk penjualan eskrim pada sebuah cafe.",
      image: "bebas",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/surinanda99/Aplikasi-Crimcone",
        },
      ],
    },

    {
      title: "Aplikasi Menu Makanan Daerah",
      dates: "October 20th - 31th, 2022",
      location: "Semarang",
      description: "Aplikasi untuk penjualan makanan khas daerah.",
      image: "bebas",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/surinanda99/Aplikasi-Menu-Makanan",
        },
      ],
    },

  ],
} as const;
