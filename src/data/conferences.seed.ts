import type { Conference } from "@/lib/types"


export const SEED_CONFERENCES: Conference[] = [
    {
        id: "react-summit-2025",
        name: "React Summit 2025",
        description: "A Celebration of Good Things Coming Together",
        date: "2025-11-18T00:00:00.000Z",
        endDate: "2025-11-21T23:59:59.000Z",
        location: "New York",
        price: 990,
        category: ["React", "Web Development"],
        imageUrl: "/logos/react-logo.png",
        speakers: [{
            id: "0",
            name: "Erik Rasmussen",
            title: "Principal Product Engineer",
            company: "Attio",
            bio: "American expat living in Spain, author of Redux Form, Final Form, and currently building the best CRM in the world at Attio.",
            avatarUrl: "/avatars/erik-rasmussen.jpeg",
        },
        {
            id: "1",
            name: "Shawn Swyx Wang",
            title: "Writer, Founder, Devtools Startup Advisor",
            company: "Latent Space",
            bio: "Swyx is Editor of Latent.Space. He is best known for his writing on the Rise of the AI Engineer on the Latent.Space newsletter and podcast, and for curating the AI Engineer Summit, the top conference for AI Engineers.",
            avatarUrl: "/avatars/shawn-swyx-wang.jpeg",
        },
        {
            id: "2",
            name: "Jimmy Lai",
            title: "Head of Next.js",
            company: "Vercel",
            bio: "Jimmy is a Software Engineer at Vercel living in Munich, Germany. Previously at Meta, where he worked on web perf and React Native, he's currently in the Next.js team, working again on performance and other things.",
            avatarUrl: "/avatars/jimmy-lai.jpeg"
        
        },
        {
            id: "3",
            name: "Tanner Linsley",
            title: "VP of UI and UX",
            company: "Nozzie.io",
            bio: "Tanner Linsley is an entrepreneur and open source creator who loves React and JavaScript. He has built and still maintain several well-known open source libraries like React Query, React Table, React Virtual, React Form, React Charts, React Static, and even Chart.js He co-founded Nozzle.io 6 years ago and is currently helping it grow as VP of UI and UX. When not programming, Tanner spends his free time traveling, recording music, film-making, and vacationing with his wife and children.",
            avatarUrl: "/avatars/tanner-lindsley.jpeg"
        
        },
        {
            id: "4",
            name: "Nicolas Gallagher",
            title: "Software Engineer, Front-End",
            company: "Meta",
            bio: "Working on @reactjs for the web. I currently work at Meta on cross-platform React frameworks. Our goal is to improve engineering efficiency and product quality, to reduce product time-to-market, and to produce high-quality native user interfaces from existing web code. The software we work on is used by products like Facebook, Instagram, Messenger, Oculus, and Workplace.",
            avatarUrl: "/avatars/nicolas-gallagher.jpeg"
        
        },
        {
            id: "5",
            name: "Kelly Vaughn",
            title: "Sr. Engineering Manager",
            company: "Zapier",
            bio: "Kelly Vaughn is a software engineer, entrepreneur, and purveyor of developer jokes on Twitter. She's passionate about coaching individual contributors and early career engineering managers into strong leaders. She is currently a Sr. Engineering Manager at Zapier. When she's not working, you'll probably find her on a run, traveling to a new country, or spending time at a coffee shop to make a tiny dent in her never-ending book collection.",
            avatarUrl: "/avatars/kelley-vaughn.jpeg"
        
        },
        {
            id: "6",
            name: "Daniel Roe",
            title: "CTO",
            company: "Nuxt",
            bio: "Daniel leads the Nuxt core team - previously CTO of SaaS startup and founder of a creative agency focusing on clarity of vision and message. His open-source work has a focus in the Vue.js and Nuxt ecosystems and he's involved in consultancy with companies around the world, particularly around JAMstack, serverless and software architecture. He's based in Scotland where he lives with his family and cat.",
            avatarUrl: "/avatars/daniel-roe.jpeg"
        
        },
        {
            id: "7",
            name: "Kristopher Baumgartner",
            title: "Software Engineer",
            company: "Poimandres Collective",
            bio: "React Three Fiber maintainer and web game dev enthusiast, creating open source web game technologies for everyone.",
            avatarUrl: "/avatars/kristopher-baumgartner.jpeg"
        },
        {
            id: "8",
            name: "David Khourshid",
            title: "Software Engineer",
            company: "Microsoft",
            bio: "David Khourshid (known on Twitter as David K. Piano) is a software engineer for Microsoft, a tech author, and speaker. Also a fervent open-source contributor, he is passionate about statecharts and software modeling, reactive animations, innovative user interfaces, and cutting-edge front-end technologies. When not behind a computer keyboard, he’s behind a piano keyboard or traveling.",
            avatarUrl: "/avatars/david-khourshid.jpeg"
        },
        {
            id: "9",
            name: "Bree Hall",
            title: "Sr. Developer Advocate",
            company: "Atlassian",
            bio: "Bree is a frontend Software Engineer turned Developer Advocate. She has a passion for coding and making technology education accessible to everyone. Bree creates technical content to help developers create and build autonomously.",
            avatarUrl: "/avatars/bree-hall.jpeg"
        
        },
        {
            id: "10",
            name: "Amy Dutton",
            title: "Software Engineer",
            company: "RedwoodJS",
            bio: "Amy has over 22+ years of web experience and have expertise in product design, frontend, and backend development. She's developed multiple technology courses and written curriculum for the University of Florida, in their Master’s program. She has spoken at conferences around the world about full stack development. Her podcast, http://Compressed.fm supports thousands of developers with design and engineering tips. She has built hundreds of websites and products for enterprise companies, startups, and even major recording artists. She lives in Nashville, TN with her husband, 3 adorable children, and 2 dogs.",
            avatarUrl: "/avatars/amy-dutton.jpeg"
        
        },
    ],
        maxAttendees: 1000,
        currentAttendees: 800,
        isFeatured: false
    },
    {
        id: "medtech-conference-2025",
        name: "MedTech Conference",
        description: "Join thousands of industry leaders October 5-8, 2025 in San Diego, California for direct access to hundreds of hours of timely medtech education, networking with industry leaders and CEOs, and the latest in medical technology and innovation.",
        date: "2025-10-05T00:00:00.000Z",
        endDate: "2025-10-08T23:59:59.000Z",
        location: "San Diego, California",
        price: 195,
        category: ["Healthcare", "Software Engineering", "AI"],
        imageUrl: "/logos/medTech.png",
        speakers: [
        {
            id: "0",
            name: "Ivan Tornos",
            title: "Chairman, President & CEO",
            company: "Zimmer Biomet",
            bio: "Mr. Tornos serves on the Board of Directors of the Advanced Medical Technology Association (AdvaMed); he also currently serves as an independent member of the Board of Directors of global healthcare company PHC Holdings Corporation.",
            avatarUrl: "/avatars/ivon-tornos.jpeg"
        
        },
        {
            id: "1",
            name: "Jeannette Bankes",
            title: "President, Ceo Patient Care Solutions",
            company: "GE HealthCare",
            bio: "Bankes brings with her three decades of global experience including product management, marketing, sales, regulatory, medical affairs, and operations and manufacturing. She joins GE HealthCare from Alcon, where she served most recently as senior vice president and president, Global Franchises. In this role, she oversaw product development, portfolio management and commercialization of products across the global surgical, vision care, and ocular health businesses. Prior to Alcon, Bankes was at Boston Scientific and Merck, where she held a range of senior leadership positions.",
            avatarUrl: "/avatars/jeannette-bankes.jpeg" 
        },
        {
            id: "2",
            name: "Paul Evans",
            title: "Head of Quality Assurance & Regulatory Compliance at Digital Health and Care Wales",
            company: "Digital Health and Care Wales",
            bio: "I am currently participating in the Kings Fund senior leadership programme and developing a quality and regulatory framework based on the Chartered Quality Institute's quality profession map. I am passionate about embedding quality and innovation in everything we do at DHCW, and I welcome any opportunities to connect and collaborate with other professionals in this field.",
            avatarUrl: "/avatars/paul-evans.jpeg"
        },
        {
            id: "3",
            name: "Barbara Fink",
            title: "Associate Director of Clinical Affairs",
            company: "Philips",
            bio: "I currently oversee all clinical affairs activities within the Emergency Care business of Philips. This includes product lifecycle management, clinical evidence generation, pre and post-market clinical testing, and Clinical Evaluations. In addition I help support the implementation of new technologies.",
            avatarUrl: "/avatars/barbara-fink.jpeg"  
        },
        {
            id: "4",
            name: "Alice Forde",
            title: "Senior Director, GLobal Regulatory Affairs",
            company: "Bausch & Lomb",
            bio: "Experienced Global Regulatory Affairs leader and advocate in medical devices & pharmaceuticals. Career history includes Regulatory Affairs, Program, People & Project management, Employee Learning & Talent Development, Operations, IT & Quality Systems.",
            avatarUrl: "/avatars/alice-fode.jpeg"
        },
        {
            id: "5",
            name: "Robert Cohen",
            title: "Vice President, Innovation and Technology, Orthopaedic Group",
            company: "Stryker",
            bio: "Stryker Distinguished R&D Fellow, Fellow of the American Institute for Medical and Biological Engineering, Member of the National Academy of Engineering, Member of the National Academy of Inventors, Chair, New Jersey Institute of Technology Board of Trustees, Chair, AdvaMed Digital Health Technologies Board of Directors ",
            avatarUrl: "/avatars/robert-cohen.jpeg" 
        },
        {
            id: "6",
            name: "Ashley McEvoy",
            title: "President & Chief Executive Officer",
            company: "Insulet",
            bio: "A Philadelphia native and graduate of the University of Pennsylvania, Ashley is a mother of five children and one Siberian husky and enjoys staying active with family, friends, and colleagues.",
            avatarUrl: "/avatars/ashley-mcevoy.jpeg"
        },
        {
            id: "7",
            name: "David Niewolny",
            title: "Sr. Dir, Global Head of Business Development - Healthcare / Medical",
            company: "NVIDIA",
            bio: "Highly motivated strategic business development executive with an entrepreneurial spirit and a passion for the convergence healthcare and technology.",
            avatarUrl: "/avatars/david-niewolny.jpeg"
        },
        {
            id: "8",
            name: "Annette Bruls",
            title: "Corporate Vice-President",
            company: "Edwards Lifesciences",
            bio: "Experienced Senior Executive with demonstrated track record in the medical device industry. Lifelong passion for innovation and technology to improve lives. Advocate for diversity and inclusion, personally dedicated to improving opportunities available to mothers in the workplace. Firm believer that people, their engagement and dedication to the company's mission make all the difference !",
            avatarUrl: "/avatars/annette-bruls.jpeg"
        },
        {
            id: "9",
            name: "Gavin Wood",
            title: "Company Group Chairman",
            company: "Johnson & Johnson MedTech",
            bio: "My goal is to hire, develop and inspire leaders who deliver the best outcomes for patients. As such, we must grow our business to treat more patients, create equitable opportunities for our people and advance purposeful innovation to address unmet needs of today…and tomorrow. Who’s with me?",
            avatarUrl: "/avatars/gavin-woods.jpeg"
        },
        {
            id: "10",
            name: "Urmi Prasad Richardson",
            title: "President EMEA",
            company: "Thermo Fischer Scientific",
            bio: "Global executive with 20+ years of experience in conception to realisation of business plans and commercial operations, in the areas of biotechnology and healthcare. Leadership experience in strategic planning, business development, product commercialization and new market expansion (EMEA, APAC, North & South Americas). Accomplished programme manager with demonstrated ability to lead global and cross-functional project teams. Deep understanding of Healthcare markets and driving sustainable growth in emerging markets, including change through policy and public affairs. Proven track record in translating innovation into business results. Reliable and visible leadership in transformational times, being a change catalyst as well as an empowering coach for delivering high performance coupled with collaborative behaviours. Embracing cultural evolution to build alliances and mobilize partners for success. ",
            avatarUrl: "/avatars/urmi-prasad-richardson.jpeg"
        },
    ],
        maxAttendees: 4000,
        currentAttendees: 3500,
        isFeatured: false
    },
    {
        id: "london-blockchain-conference-2025",
        name: "London Blockchain Conference",
        description: "This event is for leaders who are passionate about and working with blockchain, web3, and AI. Whether you’re from an enterprise, startup, government agency, or investment firm, you’ll find breakthrough ideas, hands-on solutions, and network connections that take your output to the next level. We’re not just talking about the future — we’re building it, together.",
        date: "2025-10-22T00:00:00.000Z",
        endDate: "2025-10-23T23:59:59.000Z",
        location: "London, United Kingdom",
        price: 175,
        category: ["Blockchain", "web3", "AI"],
        imageUrl: "/logos/blockchain-logo.png",
        speakers: [
            {
                id: "0",
                name: "Sebastian Thrun",
                title: "Founder of Udacity & Ceo of Kitty Hawk",
                company: "Udacity",
                bio: "Sebastian Thrun connects lessons from DARPA, Google X, Udacity, and Kitty Hawk to show how we progress from a self-driving car to a self-running service economy. The talk maps agentic AI, smart contracts, and verifiable data into a practical trust stack that leaders can deploy today.",
                avatarUrl: "/avatars/sebastian-thrun.jpeg"        
            },
            {
                id: "1",
                name: "Elfried Samba",
                title: "CEO & CO-Founder @ Butterfly Effect",
                company: "Butterfly Effect",
                bio: "In today’s trust-scarce, founder-led world, personal brand is no longer optional. Elfried Samba reveals how leaders, creators, and innovators can build brands that cut through the noise and forge high-value relationships.",
                avatarUrl: "/avatars/elfried-samba.jpeg"
            },
            {
                id: "2",
                name: "Scott Zoldi",
                title: "Chief Analytics Officer",
                company: "FICO",
                bio: "Artificial Intelligence (AI) is driving critical decisions, but can we trust how those decisions are made? In this keynote, FICO’s Chief Analytics Officer, Dr. Scott Zoldi reveals how blockchain brings auditability, compliance, and trust to AI and Generative AI (GenAI) systems, demonstrating application to Focused Language Models.",
                avatarUrl: "/avatars/scott-zoldi.jpeg"
            },
            {
                id: "3",
                name: "Dr. Bernhard Kronfellner",
                title: "Partner & Associate Director",
                company: "Boston Consulting Group",
                bio: "This keynote gives leaders five practical tests to judge stablecoins, pinpointing real demand, the policy forces that shape scale, and the path from pilots to production.",
                avatarUrl: "/avatars/bernhard-kronfellner.jpeg"
            },
            {
                id: "4",
                name: "Jane Moore",
                title: "Head of Department, Payments and Digital Assets",
                company: "Financial Conduct Authority",
                bio: "A candid conversation with a regulator who’s been at the frontlines of digital asset policy.",
                avatarUrl: "/avatars/jane-moore.jpeg"
            },
            {
                id: "5",
                name: "Siim Sikkut",
                title: "Managing Partner",
                company: "Digital Nation",
                bio: "Hear from a public sector leader who brought blockchain into national systems — and what they’d do differently next time.",
                avatarUrl: "/avatars/siim-sikkut.jpeg"
            },
            {
                id: "6",
                name: "Lord (Chris) Holmes of Richmond",
                title: "Peer",
                company: "UK House of Lords",
                bio: "Lord Holmes shares his vision for how blockchain can transform public services, not just as a technology, but as a strategic enabler of a fairer, more efficient digital society.",
                avatarUrl: "/avatars/chris-holmes.jpeg"
            },
        ],
        maxAttendees: 10000,
        currentAttendees: 5000,
        isFeatured: false
    },
    {
        id: "tech-con-365-2025",
        name: "TechCon 365",
        description: "Microsoft TechCon 365, is a Microsoft 365 and Power Platform Training Conference that brings you the world’s leading experts in Microsoft 365, Power Platform, Azure, & AI. Whether you are new to Microsoft 365 and Power Platform or an experienced power user, admin, or developer, TechCon 365 has content designed to fit your experience level and area of interest. Our workshops and sessions are taught by Microsoft Certified Trainers, Microsoft MVPs, Microsoft Regional Directors and Microsoft product group members.",
        date: "2025-11-03T00:00:00.000Z",
        endDate: "2025-11-07T23:59:59.000Z",
        location: "Dallas, Texas",
        price: 2895,
        imageUrl: "/logos/microsoft.png",
        category: ["Software Engineering", "Microsoft", "AI"],
        speakers: [
            {
                id: "0",
                name: "Amarender Peddamalku",
                title: "Practice Lead ",
                company: "Microsoft",
                bio: "Amarender Peddamalku is a Microsoft MVP in Business Applications. As a Digital Transformation Leader and Microsoft Modern Work Practice Lead at Perficient, my focus is on Employee Experience and Power Platform. Has over 15 years of experience with Microsoft Technologies and worked with every single version of SharePoint since its inception.",
                avatarUrl: "/avatars/amarender-peddamalku.jpeg"
            },
            {
                id: "1",
                name: "Ryan Schouten",
                title: "Senior Systems Applications Engineer",
                company: "Sony Interactive Entertainment",
                bio: "With a passion for technology that is matched only by his commitment to community engagement, Ryan Schouten stands out as a Microsoft Most Valuable Professional (MVP). Hailing from the vibrant tech scene of California, Ryan has carved a niche for himself as a thought leader and advocate for Microsoft Products & Services.",
                avatarUrl: "/avatars/ryan-schouten.jpeg"
            },
            {
                id: "2",
                name: "Fabian Williams",
                title: "Principal Product Manager on the M365 Copilot Team",
                company: "Microsoft",
                bio: "FABIAN WILLIAMS is a Principal Product Manager on the Microsoft 365 Copilot Developer Experiences team at Microsoft. He is a former 7X MVP in Visual Studio & Developer Technologies and Microsoft Azure awardee. Fabian holds a Bachelors of Science degree in Computer Information System “Magna-Cum-Laude” from Strayer University, Washington D.C. and his Masters in Computer Information Technology studies at the Johns Hopkins University Carey School for Business in Columbia, Maryland. You may find him on twitter at the @fabianwilliams handle and blog https://fabswill.com",
                avatarUrl: "/avatars/fabian-williams.jpeg"
            },
            {
                id: "3",
                name: "Stephen Rose",
                title: "Copilot/AI and M365 Strategy Consultant",
                company: "Microsoft",
                bio: "Currently he is consulting with a variety of customers, helping them manage change and new work methods by showing companies how to use the tools they have today more effectively and get ready for the AI tools they will need to stay ahead.",
                avatarUrl: "/avatars/stephen-rose.jpeg"
            },
            {
                id: "4",
                name: "Lenore Flower",
                title: "Data Plumber & Trainer",
                company: "Data Plumber, LLC",
                bio: "Lenore Flower (MBA, MCT) is the owner of Data Plumber, LLC, a training and consulting business dedicated to helping companies build up their staff’s capacity in tandem with their Microsoft-based data infrastructure. An unapologetic generalist, Lenore loves helping others overcome intimidating concepts in data engineering and business intelligence, so they may maintain their organization’s systems independently and with confidence.",
                avatarUrl: "/avatars/lenore-flower.jpeg"       
            },
            {
                id: "5",
                name: "Don Kirkham",
                title: "MVP & MCT | Enterprise Architect",
                company: "Microsoft",
                bio: "Don is a Microsoft MVP in M365 Development. He has spent the last 20+ years working with companies of all sizes, helping them maximize their productivity in SharePoint, Teams, Viva, Office 365, Power Platform, and Azure. With over 30 years of programming experience, Don's passion for coding is centered around the complete Microsoft ecosystem of cloud technologies. Prior to working full-time in the IT world, Don spent 20 years as a pilot in the Air Force, accumulating over 4500 hours in various aircraft, including the T-1A, E-3B/C, and T-38.",
                avatarUrl: "/avatars/don-kirkham.jpeg"
            },
            {
                id: "6",
                name: "Richard Tolen",
                title: "Principal Architect, Developer & Owner",
                company: "Perpetual Reality, LLC",
                bio: "With experience spanning numerous industries, technologies, and platform disciplines. Primarily focused on Microsoft’s technologies stack, Richard has amassed a wealth of knowledge in enterprise development, support, governance, systems architecture and business practices encompassing the SharePoint, Azure and Microsoft 365 platforms’ endless product offerings. As a community evangelist, Richard continues to share his expertise in SharePoint, Microsoft 365, PowerBI, HoloLens, Azure, etc. to educate his colleagues and peers, empowering them to thrive with the skills to implement and support environments of any size, in any industry.",
                avatarUrl: "/avatars/richard-tolen.jpeg"
            },
            {
                id: "7",
                name: "Kanwal Khipple",
                title: "Chief Executive Officer",
                company: "2toLead",
                bio: "Kanwal Khipple is the CEO and Founder of 2toLead, a trailblazing consulting firm dedicated to innovative digital workplace transformations. Over the past decade, he has established himself as a trusted authority in creating engaging, award-winning employee experiences that seamlessly blend design, technology, and human-centric thinking. Recognized by the Nielsen Norman Group for designing two Top 10 Intranets, Kanwal continues to influence how modern organizations enhance collaboration, learning, and performance.",
                avatarUrl: "/avatars/kanwal-khipple.jpeg"
            },
            {
                id: "8",
                name: "Sarah Haase",
                title: "Principal Product Manager",
                company: "Microsoft",
                bio: "Sarah Haase is an enterprise collaboration strategist, corporate librarian, and product manager responsible for implementing enterprise-level governance, compliance, and adoption strategies for Microsoft 365. She's also a blogger, Innovation Games facilitator, international speaker, Microsoft Apps & Services MVP, and a community organizer for M365 Twin Cities. You can find Sarah online at http://blog.splibrarian.com and @sarahhaase. You can listen to her on the Microsoft 365 Voice podcast (m365voice.com).",
                avatarUrl: "/avatars/sarah-haase.jpeg"
            },
            {
                id: "9",
                name: "Asif Rehmani",
                title: "CEO",
                company: "VisualSP",
                bio: "Asif is the founder and CEO of VisualSP (https://www.visualsp.com). Asif is hyper focused on the areas of digital transformation and digital adoption and advises CIOs at organizations around the world routinely on how best to support and train their employees with a blended training approach that includes a mix of synchronous and asynchronous mechanisms.",
                avatarUrl: "/avatars/asif-rehmani.jpeg"
            },
        ],
        maxAttendees: 1000,
        currentAttendees: 600,
        isFeatured: false
    },
    {
        id: "QCon-2025",
        name: "QCon",
        description: "QCon San Francisco equips senior engineers, architects, and technical leaders with trusted, practical insights to lead the change in software development. Get real-world solutions and leadership strategies from senior software practitioners defining current trends and solving today's toughest software challenges.",
        date: "2025-11-17T00:00:00.000Z",
        endDate: "2025-11-21T23:59:59.000Z",
        location: "San Francisco, California",
        price: 3580,
        category: ["Software Engineering"],
        imageUrl: "/logos/engineer-logo.png",
        speakers: [
            {
                id: "0",
                name: "Nicole Forsgren",
                title: "Partner, Applied Research & Strategy",
                company: "Microsoft",
                bio: "Nicole’s work has been published in several peer-reviewed journals and conferences. Nicole earned her PhD in Management Information Systems and Masters in Accounting from the University of Arizona. She lives in the Southwest and recharges her brain with gym time, tacos, and Diet Coke.",
                avatarUrl: "/avatars/nicole-forsgren.jpeg"
            },
            {
                id: "1",
                name: "Frank Yu",
                title: "Director of Engineering",
                company: "Coinbase",
                bio: "Frank is an engineering leader at Coinbase, focusing on distributed low latency trading platforms. Prior to Coinbase, he served as Principal Engineer and later Director of Software Engineering at FairX, leading the design and build of what would become the Coinbase Derivatives Exchange post acquisition. Frank has spent over a decade making tradeoffs on mission critical systems with submillisecond response times and loves chatting about complexity, testing, and performance.",
                avatarUrl: "/avatars/frank-yu.jpeg"
            },
            {
                id: "2",
                name: "Chris Richardson",
                title: "Software Architect",
                company: "Microservices.io",
                bio: "Chris is a software architect and serial entrepreneur. He is a Java Champion, a JavaOne rock star and the author of POJOs in Action, which describes how to build enterprise Java applications with frameworks such as Spring and Hibernate. Chris was also the founder of the original CloudFoundry.com, an early Java PaaS for Amazon EC2.",
                avatarUrl: "/avatars/chris-richards.jpeg"
            },
            {
                id: "3",
                name: "Faye Zhang",
                title: "Staff Software Engineer",
                company: "Pinterest",
                bio: "Faye Zhang is a staff AI engineer and tech lead at Pinterest, where she leads Multimodal AI work for search traffic discovery, driving significant user growth globally. She combines expertise in large-scale distributed systems with cutting-edge NLP and AI Agent research pursuits at Stanford. She also volunteers in AI x genomic science for mRNA sequence analysis with work published at multiple science journals. As a recognized thought leader, Faye regularly shares insights at conferences across San Francisco and Paris.",
                avatarUrl: "/avatars/faye-zhang.jpeg"
            },
            {
                id: "4",
                name: "Michelle Brush",
                title: "Engineering Director, SRE",
                company: "Google",
                bio: "Michelle Brush is a math geek turned computer geek with over 20 years of software development experience. She has developed algorithms and data structures for pathfinding, search, compression, and data mining in embedded as well as distributed systems. In her current role as an Engineering Director, SRE for Google, she leads teams of SREs that ensure GCP's Compute Engine and Persistent Disk products are reliable. Previously, she served as the Director of HealtheIntent Architecture for Cerner Corporation, responsible for the data engineering platform for Cerner’s Population Health solutions. Prior to her time at Cerner, she was the lead engineer for Garmin's automotive routing algorithm. She is the author of 2 out of the 97 Things Every SRE Should Know.",
                avatarUrl: "/avatars/michelle-brush.jpeg"
            },
            {
                id: "5",
                name: "Sepehr Khosravi",
                title: "Machine Learning Platform Engineer",
                company: "Coinbase",
                bio: "Sepehr Khosravi is a software engineer at Coinbase working on machine learning infrastructure, and an instructor at UC Berkeley where he teaches courses on generative AI and rapid product development. He's also the founder of AI Scouts, a free program teaching students how to build AI-powered apps from scratch.",
                avatarUrl: "/avatars/sepehr-khosravi.jpeg"
            },
            {
                id: "6",
                name: "Sonya Natanzon",
                title: "VP of Engineering",
                company: "Heartflow",
                bio: "Sonya is a seasoned engineering leader and software architect who works at the intersection of the social and technical dimensions of software engineering. As VP of Engineering at Heartflow, she focuses on improving how software is built and operated in the healthcare sector. Sonya explores and applies methodologies such as Domain-Driven Design, Team Topologies, and the Architecture Advice Process to evolve both systems and teams. She regularly shares her insights and outcomes at international software architecture conferences and industry meetups.",
                avatarUrl: "/avatars/sonya-natanzon.jpeg"
            },
            {
                id: "7",
                name: "Trisha Ballakur",
                title: "Co-Founder & CEO",
                company: "Pointz",
                bio: "Trisha is a Gen-Z tech leader dedicated to impactful advancements in mobile app development and AI. With experience as a former startup CTO and in engineering roles at Adobe and Nasdaq, Trisha applies her expertise to drive positive change. With a B.S. in Computer Science from Brown, Trisha founded Pointz to make urban biking safer and more accessible.",
                avatarUrl: "/avatars/trisha-ballakur.jpeg"
            },
            {
                id: "8",
                name: "Benjamin Fedorka",
                title: "Staff Software Engineer, Productivity Engineer",
                company: "Netflix",
                bio: "Benjamin Fedorka is an engineer on Netflix’s Java Platform, focused on IPC ergonomics and resilience. With the launch of live programming, Benjamin has focused on helping teams prepare their clusters to entertain the world during these massive events. Benjamin has over ten years of engineering experience, primarily focused on platform engineering, and is passionate about enabling teams to solve new challenges instead of toiling on common problems. Together with Anirudh Mendiratta, Benjamin pioneered service-level prioritized load shedding allowing Netflix to handle live events at unprecedented scale.",
                avatarUrl: "/avatars/benjamin-fedorka.jpeg"
            },
            {
                id: "9",
                name: "Brian Martin",
                title: "Co-Founder and Software Engineer",
                company: "IOP Systems",
                bio: "Brian is a software engineer who focuses on performance optimization and distributed systems. He worked at Twitter for 8 years, initially with the Cache Team and later as a member of the newly created Performance Team. After November 2022, Brian joined his teammates from Twitter as a co-founder of IOP Systems and continues to work on improving software and platform performance, efficiency, and reliability.",
                avatarUrl: "/avatars/brian-martin.jpeg"
            },
        ],
        maxAttendees: 1500,
        currentAttendees: 1200,
        isFeatured: false
    },
    {
        id: "re-invent-aws-2025",
        name: "re:Invent AWS",
        description: "Every re:Invent marks a milestone of innovation. Join us in Las Vegas as cloud pioneers gather from across the globe for the latest AWS innovations, peer-to-peer learning, expert-led discussions, and invaluable networking opportunities.",
        date: "2025-12-01T00:00:00.000Z",
        endDate: "2025-12-05T23:59:59.000Z",
        location: "Las Vegas, Nevada",
        price: 2099,
        category: ["AWS", "Software Engineering"],
        imageUrl: "/logos/aws.png",
        speakers: [
            {
                id: "0",
                name: "Matt Garman",
                title: "CEO",
                company: "AWS",
                bio: "Matt Garman joined Amazon in 2006 and is currently the CEO of Amazon Web Services (AWS). Matt sits on Amazon’s executive senior leadership team, known as the S-Team. He has held several leadership positions in AWS during his time at Amazon. Matt previously served as Senior Vice President of the Sales, Marketing, and Global Services organization in AWS as well as Vice President of the Amazon EC2 and Compute Services businesses for AWS for over 10 years. He started at Amazon when AWS first launched in 2006 and served as one of the first Product Managers, helping to launch the initial set of AWS services. Prior to Amazon, Matt spent time in product management roles at early-stage Internet startups.",
                avatarUrl: "/avatars/matt-garman.jpeg"
            },
            {
                id: "1",
                name: "Dave Brown",
                title: "Vice President, Compute and Machine Learning Services",
                company: "AWS",
                bio: "Dave Brown leads the development and operation of foundational AWS services including Amazon EC2, AWS Lambda, Amazon Bedrock, and Amazon SageMaker. These services have become the backbone of cloud computing, serving millions of customers, including Amazon's own global operations. Dave joined AWS in 2007 and has been instrumental in shaping the cloud computing landscape. Beginning as a Software Development Engineer in Cape Town, he played a pivotal role in the early development of Amazon EC2. Since relocating to Seattle in 2012, the services under his leadership have grown to include core AWS offerings across compute and machine learning. A computer scientist by training, Dave began his career as a Software Developer in the financial industry. He holds a Computer Science & Economics degree from the Nelson Mandela University in Port Elizabeth, South Africa.",
                avatarUrl: "/avatars/dave-brown.jpeg"
            },
            {
                id: "2",
                name: "Dr. Swami Sivasubramanian",
                title: "Vice President, Agentic AI",
                company: "AWS",
                bio: "Dr. Swami Sivasubramanian is Vice President for Agentic AI at Amazon Web Services (AWS). At AWS, Swami has led the development and growth of leading AI services like Amazon DynamoDB, Amazon SageMaker, Amazon Bedrock, and Amazon Q. His team’s mission is to provide the scale, flexibility, and value that customers and partners require to innovate using agentic AI with confidence and build agents that are not just powerful and efficient, but also trustworthy and responsible. Swami also served from May 2022 through May 2025 as a member of the National Artificial Intelligence Advisory Committee, which was tasked with advising the President of the United States and the National AI Initiative Office on topics related to the National AI Initiative.",
                avatarUrl: "/avatars/swami-sivasubramanian.jpeg"
            },
            {
                id: "3",
                name: "Dr. Ruba Borno",
                title: "Vice President, Global Specialists and Partners",
                company: "AWS",
                bio: "Ruba leads the AWS Partner Organization (APO), a global team responsible for recruiting, enabling, buying, and selling with more than 100,000 companies in more than 150 countries within the AWS Partner Network (APN). She’s also responsible for AWS Marketplace and AWS Data Exchange, helping customers move quickly and responsibly to the cloud by making it easy to find, subscribe, and govern third-party software, data, and professional services. Prior to joining AWS, Ruba held several leadership positions over the course of her six-year tenure with Cisco. She is a member of The Forum of Young Global Leaders and also served on the Board of Directors at Experian. Ruba holds a PhD and a Master of Science in Electrical Engineering from the University of Michigan.",
                avatarUrl: "/avatars/ruba-borno.jpeg"
            },
            {
                id: "4",
                name: "Dr. Werner Vogels and Peter DeSantis",
                title: "CTO",
                company: "Amazon.com",
                bio: "As one of the forces behind Amazon's approach to cloud computing, Werner is passionate about helping young businesses reach global scale and transforming enterprises into fast-moving digital organizations. Werner joined Amazon in 2004 from Cornell University, where he was a distributed systems researcher. He’s also held technology leadership positions in companies that handle the transition of academic technology into industry. Werner holds a PhD from the Vrije Universiteit in Amsterdam and has authored many articles on distributed systems technologies for enterprise computing. On his blog, All Things Distributed, Werner shares thought leadership content on a range of topics, including his annual",
                avatarUrl: "/avatars/werner-volgels.jpeg"
            },

        ],
        maxAttendees: 70000,
        currentAttendees: 60000,
        isFeatured: false
    },
]