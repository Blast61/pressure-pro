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
     agenda: [
        {
            date: "2025-11-18",
            items: [
                {
                start: "08:15",
                title: "Opening Ceremony",
            }, {
                start: "08:35",
                title: "React beyond the DOM",
                speakerId: 'erik-rasmussen',
                track: "summit",
                description: "It's easy to forget what the creators of React knew from the start: that React is not only for building web pages. Most of us have heard of React Native, that renders to native mobile components, but React doesn't have to render to 'components' at all. There's React PDF to generate PDFs and Ink for building UI in the terminal. At my company, we've built a way for developers to use React to build plugins for our webapp that render to our custom components, giving us full control over the UI design (the 'how'), whilst giving the plugin developer full control UX (the 'what'). In my talk, I'll explain what it's like to build a React renderer and reconciler, what they are and how to use them. I'd like to do a live demo showing how React can be used to convert html to markdown. And then I'd like to demonstrate how React can render to the Real World, by controlling IOT devices.",
            }, {
                start: "08:55",
                title: "QnA with Erik Rasmussen",
                track: "summit"
            }, {
                start: "09:15",
                title: "Generative UI Beyond Calling Premade Components",
                speakerId: "shawn-swyx-wang",
                track: "summit",
                description: "GPT5 is a better frontend coder than me, and Cerebras Code is a 10x faster coder than me. But 'generative UI' is mostly still stuck in a paradigm of function calling premade widgets. New, fast, coding oriented models create new opportunities for creating truly personal, customized experiences, without the offsetting concern that people want their apps to stay stable and reliable.",
            }, {
                start: "09:35",
                title: "QnA with Shawn Swyx Wang",
                track: "summit"
            }, {
                start: "09:55",
                title: "TanStack Start 1.0 - A New Full Stack Framework for React and Friends",
                speakerId: "tanner-linsley",
                track: "summit",
                description: "Join Tanner Linsley, creator of TanStack's as he unveils TanStack Start - the full-stack framework for React and Solid. He'll talk about how it can handle the beefiest of full-stack routing requirements, how you can have rich and interactive applications, and why you don't need to compromise between client-side vs server-side application experiences.",
            }, {
                start: "09:15",
                title: "Talk TBA",
                speakerId: "jimmy-lai",
                track: "base-camp"
            }, {
                start: "09:35",
                speakerId: "jimmy-lai",
                title: "QnA with Jimmy Lai",
                track: 'base-camp'
            }, {
                start: "09:55",
                title: "React Strict Dom: Cross-Platform React Based on the Web",
                speakerId: "nicolas-gallagher",
                track: "base-camp",
                description: "The talk will explain what React Strict DOM is, why it was created, how it was adopted at Meta, how it's being used, the results so far, and the potential next steps.",
            }, {
                start: "10:15",
                title: "QnA with Tanner Linsley",
                speakerId: "tanner-linsley",
                track: "summit"
            }, {
                start: "10:15",
                title: "QnA with Nicolas Gallagher",
                speakerId: "nicolas-gallagher",
                track: "base-camp"
            }, {
                start: "10:25",
                title: "Break",
                track: "summit",
            }, {
                start: "10:25",
                title: "Break",
                track: "base-camp"
            }, {
                start: "10:45",
                title: "Panel Discussion",
                track: "summit"
            }, {
                start: "10:45",
                title: "5 Tough Conversations Managers Need to Have",
                speakerId: "kelly-vaughn",
                track: "base-camp",
                description: "You don’t get promoted for your communication skills—but the moment you step into leadership, they become your most important asset. Whether you’re an engineer growing into influence or a manager leading a team, knowing how to navigate the human side of work is essential. In this session, we’ll cover five of the toughest conversations you’ll face at work: underperformance, giving feedback, saying “no,” career growth, and setting boundaries. You’ll walk away with practical, repeatable frameworks to approach each conversation with clarity and confidence—building trust, strengthening collaboration, and showing up as the kind of leader people want to work with.",
            }, {
                start: "11:00",
                title: "Talk TBA",
                track: "summit"
            }, {
                start: "11:05",
                title: "QnA with Kelly Vaughn",
                speakerId: "kelly-vaughn",
                track: "base-camp"
            }, {
                start: "11:45",
                title: "QnA with TBA",
                track: "summit",
            }, {
                start: "11:25",
                title: "Talk TBA",
                track: "base-camp"
            }, {
                start: "11:45",
                title: "QnA with TBA",
                track: "base-camp"
            }, {
                start: "12:00",
                title: "Break",
                track: "summit"
            }, {
                start: "12:00",
                title: "Break",
                track: "base-camp"
            }, {
                start: "13:00",
                title: "Talk TBA",
                track: "summit"
            }, {
                start: "13:00",
                title: "React at the Edge: Building a Framework from Scratch(Live)",
                track: "base-camp",
                speakerId: "daniel-roe",
                description: "What would a React framework look like if we built it today—with edge-first deployment, serverless-native rendering, and zero-config developer experience? In this live-coded session, we’ll build a new React framework from scratch using the same open-source engine that powers Nuxt 3. Come see how tooling originally built for Vue can unlock serious performance and DX wins for React.",
            }, {
                start: "13:20",
                title: "QnA with Ken Wheeler",
                track: "summit"
            }, {
                start: "13:40",
                title: "Lightning Talks",
                track: "summit"
            }, {
                start: "13:20",
                title: "QnA with Daniel Roe",
                track: "base-camp"
            }, {
                start: "13:40",
                title: "React at 120FPS: When to Loop",
                speakerId: "kristopher-baumgartner",
                description: "How do you make a React app update at 120fps? Many of our React apps are happily event driven but sometimes we need to break into real-time, whether it is for a particle effect, animation, 3D hero or even a game. Time for the forbidden loop. Together we will (briefly) look at when and how to loop state updates in React.",
                track: "base-camp"
            }, {
                start: "14:15",
                title: "Break",
                track: "summit"
            }, {
                start: "14:00",
                title: "QnA with Kristopher Baumgartner",
                track: "base-camp"
            }, {
                start: "14:35",
                title: "Goodbye, useState",
                track: "summit",
                speakerId: "david-khourshid",
                description: "State management is easy, until it's not. Sure, useState() is fine for simple component state management – that's literally what it's for. But as our React apps grow in complexity, the inevitable long chain of useStates make it more difficult to understand and maintain app logic, turning our components into Rube Goldberg machines. React 19 opens up a whole new world of state management patterns that actually make sense for local, shared, and global state. In this talk, we'll transition from using useState() everywhere to discovering how server components, URL parameters, and more can make state management much simpler. We'll also revisit classic hooks, learn about new hooks, and see how 3rd-party state management libraries and local-first apps can be useful. Let's say goodbye (mostly) to useState(), and hello to a future where state management isn't just a stack of setStates."
            }, {
                start: "14:55",
                title: "QnA with David Khourshid",
                track: "summit"
            }, {
                start: "14:10",
                title: "Break",
                track: "base-camp"
            }, {
                start: "14:35",
                title: "Styled & SASSy: Choosing the Right Reacat Styling Solution",
                speakerId: "bree-hall",
                track: "base-camp",
                description: "React’s styling landscape is rapidly evolving. With React 19, Tailwind v4, and major changes across the CSS ecosystem, the way we style components needs to be revisited, especially when performance, DX, and scalability are on the line. In this talk, we’ll evaluate three of the most widely used approaches in modern React apps, CSS Modules, Tailwind CSS, and CSS-in-JS, and put them head-to-head against the realities of today’s frontend demands: server components, async rendering, scalable theming, and runtime performance. You’ll walk away with a clear, practical framework for choosing the right styling approach for your project — one that balances developer experience, design system needs, and long-term maintainability. We’ll break down: How React 19 and server components are reshaping styling decisions; Trade-offs between utility-first, scoped CSS, and runtime CSS-in-JS; Common pitfalls that surface at scale and how to future-proof your choice; Whether you're starting a new app or re-evaluating a legacy codebase, this talk will help you make informed, future-focused styling decisions.",
            }, {
                start: "14:55",
                title: "QnA with Bree Hall",
                track: "base-camp"
            }, {
                start: "15:00",
                title: "DX vs. UX: The RSC False Dichotomy",
                speakerId: "amy-dutton",
                track: "summit",
                description: "React Server Components face a unique challenge in the React ecosystem: they're powerful, but they're primarily associated with a single framework. This talk examines the broader industry implications of RSC's current adoption pattern and why the technology's success depends on ecosystem-wide support, not just Next.js implementation. We'll explore the real barriers to RSC adoption—from legacy codebase constraints to the substantial engineering investment required—and why these challenges have created a subtle industry narrative that 'RSC might not be worth it.' This session provides both a technical assessment of RSC's current capabilities and a strategic view of its role in React's future.",
            }, {
                start: "15:35",
                title: "QnA with Amy Dutton",
                track: "summit"
            }, {
                start: "15:55",
                title: "How Good is AI at Coding React (really)?",
                speakerId: "addy-osmani",
                track: "summit",
                description: "While developers are increasingly turning to AI assistants for everything from component creation to generating full-blown apps, a critical question remains: just how good is AI at truly understanding and fluently writing production-quality React code? This talk moves beyond the hype to offer a candid, behind-the-scenes look at our work in quantifying the capabilities of large language models, in the real world of web development. We will explore key insights from industry benchmarks on their ability to build functional and interactive web applications using technologies like Next.js. We will share our explorations into building stronger full-stack coding support for React using Gemini. Join us for a data-driven yet deeply human exploration of the current state and future potential of AI code generation in the world of React.",
            }, {
                start: "16:15",
                title: "QnA with Addy Osmani",
                track: "summit"
            }, {
                start: "16:25",
                title: "Closing Ceremony"
            }]
        }, {
            date: "2025-11-21",
            items: [
                {
                    start: "09:00",
                    title: "Opening",
                }, 
                {
                    start: "09:10",
                    title: "Optimizing React Applications: Deep Dive into the React Compiler",
                    track: "summit",
                    speakerId: "Vitor Malencar",
                    description: "React 18 introduces the React Compiler, a powerful tool for optimizing component rendering and enhancing performance. In this talk, we'll explore how the compiler works, demonstrate practical performance improvements, and show you how to integrate these optimizations into your projects. Whether you're working on new or existing applications, you'll leave with actionable insights to harness the full potential of React 18.",
                }, 
                {
                    start: "09:30",
                    title: "Lessons From Adopting React Compiler",
                    track: "summit",
                    speakerId: "akash-hamirwasia",
                    description:"React Compiler has been around for a while, but how does it hold up in real-world projects? In this talk, I’ll share my experience adopting React Compiler in my product slantit.app, the practical challenges I ran into, and how I debugged and worked around them. I’ll also walk through the measurable impact it had, and what you should know before using it in your own projects.",
                },
                {
                    start: "09:50",
                    title: "Slots, Slots, Slots, Everybody!",
                    track: "summit",
                    speakerId: "abbey-perini",
                    description: "Let's use slots to fill Lil Jon's club with people! Starting with web components, we'll walk through how to use slots to make highly extensible wrappers for dynamic content. Then we'll talk about how Vue and Angular leverage this HTML feature and how React children are different.",
                }, 
                {
                    start: "09:10",
                    title: "Practical Guide to Animation in React",
                    track: "base-camp",
                    speakerId: "kateryna-porshnieva",
                    description: "Small animations can make UIs more delightful and improve user experience. In this talk, we’ll explore how to add these animation to your React apps, using everything from simple CSS transitions to more complex spring-based motion. We'll walk through practical examples to show how these animations can enhance user experience without getting in the way. Plus, we'll discuss how to keep them running smoothly and make sure they're accessible to everyone.",
                }, 
                {
                    start: "09:30",
                    title: "View Transitions in React: A New Era of Seamless UI",
                    track: "base-camp",
                    speakerId: "simon-ouyang",
                    description: "React’s new support for the native View Transitions API unlocks smooth, layout-aware animations between routes and components — no more manual DOM hacks or client-only libraries. In this talk, we’ll explore how to use View Transitions with React 19+, Next.js App Router, and React Server Components to build polished, performance-first UIs with minimal code.",
                },
                {
                    start: "09:50",
                    title: "Caching, Payloads, and Other Dark Arts: A Frontend Engineer's Journey",
                    track: "base-camp",
                    speakerId: "faris-aziz",
                    description: "but you have zero control over the backend? This was the reality we faced while building a fintech payments dashboard. Massive payloads, strict compliance, and an unchangeable API were slowing operators down and wrecking workflows. In this talk, I’ll walk through our real-world quest to rescue the user experience without touching the backend. You’ll see how we profiled true bottlenecks, built a Backend-for-Frontend layer to reshape data for the UI, managed financial data caching strategies, and balanced performance against several constraints. Expect live demos, battle-tested patterns, and hard-earned lessons for shipping resilient, user-centric frontends, even when the backend isn’t on your side.",
                }, 
                {
                    start: "10:10",
                    title: "Design to Code Using a Custom Design System with AI",
                    track: "summit",
                    speakerId: "chaitanya-deorukhkar",
                    description: "This talk explores how we built an AI-powered system that transforms Figma designs into production-ready React code using Razorpay’s custom Design System. Learn how we solved the problem of brand inconsistency in generic AI tools and created a solution that understands our unique design language, enabling faster development without compromising on quality.",
                }, 
                {
                   start: "10:30",
                   title: "When Raspberry Pi Said No to Node: How We Rewired Our Next.js App",
                   track: "summit",
                   speakerId: "tapas-adhikary",
                   description: "What happens when your React + Next.js app, built with the best of charts and animations, suddenly has to run on a device like a Raspberry Pi, with no Node.js, no server runtime, and several hardware constraints? In this talk, I will share the real-world story of reengineering a battery management system for electric vehicles using Next.js, D3.js, and clever frontend-only strategies. From initial roadblocks to lightweight rebuilds — this is an insightful journey into how constraints can drive creativity and architecture choices.",
                },
                {
                    start: "10:50",
                    title: "Break"
                },
                {
                    start: "10:55",
                    title: "React Components for both the Client & the Server",
                    track: "summit",
                    speakerId: "kiril-peyanski",
                    description: "React Server Components are changing how we think about component architecture-but in practice, most real-world UIs don’t live purely on the server or the client. In this talk, we’ll explore how to build hybrid components that span both, maintaining a clean separation of concerns while delivering interactivity and performance.",
                },
                {
                    start: "10:10",
                    title: "Frontend Internationalization That Reads Like English (Thanks, gettext!)",
                    track: "base-camp",
                    speakerId: "henry-lie",
                    description: "What if writing internationalized code could feel as natural as writing plain English? In this talk, we’ll explore how gettext, a time-tested localization standard familiar to many back-end and desktop developers, can bring a more intuitive and streamlined approach to frontend i18n. We’ll see how gettext principles can be applied to modern JavaScript projects to simplify translation workflows, reduce boilerplate, and make your codebase more human-friendly.",
                }, 
                {
                    start: "10:30", 
                    title: "The Journey of Rebranding 7+ Years Old App",
                    track: "base-camp",
                    speakerId: "kasia-jastrzebska",
                    description: "What does it take to rebrand a massive, legacy codebase without breaking everything—or everyone? Join me on a storytelling journey through Cleo’s rebrand: a 7+ year old financial app built in React Native, layered with AI-powered chat, budget tools, and a credit-building card. This talk is a candid, practical case study on how we tackled technical debt, an inconsistent design system, webviews lurking in corners, and the sheer scale of a complex product. You'll hear how we gathered data, unified design tokens, incentivized adoption across squads, and introduced automation to prepare for the ultimate challenge: running a bold A/B test of two entirely different brand experiences—at scale. Whether you're dealing with a legacy app or planning a design system refresh, this talk offers actionable insights on navigating change in large mobile apps, while keeping your team and user experience intact."
                },
                {
                    start: "10:55",
                    title: "Building an Operating System with React Native",
                    track: "base-camp",
                    speakerId: "hugh-francis",
                    description: "What happens when you push React Native to its limits? In 2018, we built LightOS - the operating system for the Light Phone II - as a custom fork of AOSP, running  React Native as the view layer. That ecosystem is now the same codebase shipping to long awaited The Light Phone III. This talk reveals the technical journey bolting React Native into the OS level, tackling challenges like rendering at 2fps for e-ink displays, custom batching systems for consistent updates, and embedding React Native directly into Android firmware, running on multiple hardware platforms. You'll discover advanced performance patterns, custom rendering pipelines, and platform integration techniques that apply to any demanding React Native application. The Light Phone II shipped to hundreds of thousands of users and was named one of Time Magazine's best inventions, and the Light Phone III is shipping now to preorder customers."
                },
                {
                    start: "11:15",
                    title: "This Is How We Made Postman Launch Twice as Fast",
                    track: "summit",
                    speakerId: "ruben-casas",
                    description: "We Made Postman Launch in Half the Time! Postman used to take 30 seconds to launch on some machines which felt like an eternity in the world of developer tools. Our engineers refused to accept that, so we went deep: profiling bottlenecks, re‑evaluating assumptions, and reshaping how the app loads and initializes. In this talk, you’ll learn the six concrete strategies we used to cut launch times in half, from code-splitting and deferring bundles to caching smarter and making Electron work for us, not against us. We’ll walk through how we identified hotspots, experimented with alternatives, and measured wins. You’ll come away with actionable ideas and a roadmap for making any large‑scale React or Electron app launch faster, making your users (and your team) a lot happier.",
                }, 
                {
                    start: "11:35",
                    title: "Winning the Hydration Battle: Unlocking React Performance with the Power of Suspense",
                    track: "summit",
                    speakerId: "gil-eckstein",
                    description: "Rendering a React app with server-side rendering (SSR) can feel bittersweet - on one hand, SSR ensures fast page load and great SEO by rendering the entire page on the server, however the client must download and hydrate all these components to make the page interactive. For pages with lots of content, this can lead to a significant amount of JavaScript being loaded and executed, causing slower interaction times and major performance issues. At Wix, we faced a significant challenge: how could we deliver blazing-fast interaction times while avoiding the performance bottleneck of downloading and hydrating every SSR-rendered component on the client? For a long time, this felt like an unsolvable problem - until the new Suspense API changed the game. In this talk, I’ll share the story of how we tackled this problem head-on, leveraging the new Suspense API introduced in React 18 to dynamically load and hydrate React components only when they enter the viewport. While Suspense's promise-based rendering capabilities aren’t widely documented, they proved to be the game-changing tool we needed to break free from the limitations of traditional hydration and improve the performance of millions Wix websites. Prepare for a technical deep dive with lots of code examples that will equip you to tackle hydration challenges and boost React performance!",
                },
                {
                    start: "11:55",
                    title: "React Perfmance Redefined: 10 Lessons from Building a Design Tool",
                    track: "summit",
                    speakerId: "shivakant-shukla",
                    description: "Modern design tools demand pixel-perfect precision, lightning-fast interactions, and massive flexibility — all without compromising performance. In this talk, I’ll take you behind the scenes of building a complex, Canva-like design editor using React. From virtual rendering and custom canvas interactions to state management and component architecture, this talk will cover 10 practical performance lessons we learned (some the hard way!) while pushing React to its limits. You’ll walk away with real-world insights on: Optimizing rendering in dynamic UIs (e.g., drag-and-drop, layers, zooming). Efficient use of useMemo, useCallback, React.memo, and IntersectionObserver. Handling thousands of DOM nodes without crashing the browser. Structuring performant state in large collaborative apps. When to avoid React and drop to raw DOM or canvas APIs. Whether you're building a dashboard, a rich editor, or just curious about scaling React, this talk will sharpen your performance mindset and give you tools to build smoother experiences for your users."
                },
                {
                    start: "11:15",
                    title: "Seamless BLE-to-Live Activity Sync in React Native - No Push Needed",
                    speakerId: "rajni-gediya",
                    track: "base-camp",
                    description: "Learn how to connect Bluetooth Low Energy (BLE) devices directly to iOS Live Activities in React Native—without using push notifications. I’ll show how I built a custom module that enables real-time updates from a BLE device to the lock screen and Dynamic Island, using Swift and React Native. Perfect for developers working with IoT, wearables, or real-time apps.",
                }, 
                {
                    start: "11:35",
                    title: "The Journey of a Pixel in a React Application",
                    speakerId: "shem-magnezi",
                    track: "base-camp",
                    description: "Join us as we explore the fascinating journey of a pixel in rendering a React application, starting from the moment a user types a URL into their browser, all the way to the final rendering and interaction phase. We will dive into each stage in detail, covering what happens behind the scenes, why it happens, and how developers can optimize each part for a smoother user experience. This talk will provide insights into key areas like server calls, JavaScript processing, resource fetching, and dynamic rendering. It’s ideal for web developers looking to deepen their understanding of the entire rendering process and find actionable ways to improve application efficiency and performance."
                }, 
                {
                    start: "11:55",
                    title: "Oh My GHaaD: Git Hosting as a Database",
                    speakerId: "chris-griffing",
                    track: "base-camp",
                    description: "If you squint your eyes enough, git is a multiplayer database. Squint a little more and git hosting providers fill out even more of the needs of a backend for your applications. GitHub and most other providers allow authentication via OAUTH. They provide permissions to make sure only authorized users can modify the data. By leveraging the git provider’s API you can make what is essentially a serverless application. You probably wouldn’t want to host apps on a massive scale this way, but this kind of app is pretty compelling when you are building internal tools. This talk will dig into how such an app can be built and will hopefully inspire developers and companies to build more with less overhead.",
                },
                {
                    start: "12:15",
                    title: "Design Systems and UI in a Bi-directional World",
                    speakerId: "matt-seccafien",
                    track: "summit",
                    description: "When DeepL added Arabic—its first RTL language—it wasn’t just a styling problem, it was a design systems challenge. This talk will go deep on logical CSS, platform-agnostic icon mirroring and automation, soft enforcement strategies for design consistency, and how to wield influence across hundreds of engineers with minimal headcount. This isn’t a story about building components—it’s about wiring them together at scale, with smart defaults, localization and directional and empathy.",
                },
                {
                    start: "12:35",
                    title: "Break",
                    track: "summit"
                },
                {
                    start: "12:25",
                    title: "Break",
                    track: "base-camp"
                },
                {
                    start: "12:40",
                    title: "Deep Dive on React Hooks Architecture",
                    track: "summit",
                    speakerId: "daniel-espino-garcia",
                    description: "Have you ever wonder how React hooks work on the inside? There is a lot of magic going on, like functions being able to store state. How is that possible? Join me and let's do a quick deep dive into how React hooks work on the inside.",
                },
                {
                    start: "12:05",
                    title: "The No Frills Frontend Migration Survival Guide",
                    track: "base-camp",
                    speakerId: "hadar-geva",
                    description: "Migrating a large frontend application, say, moving from AngularJS to React can feel overwhelming at first. It’s easy to think of it as a huge “all-or-nothing” rewrite. But in reality, a gradual migration, done one piece at a time, is not only possible, it's actually the smarter way to go. In this talk, I’ll walk you through what it really takes to pull off a migration like this without disrupting your team or your product. We’ll look at some of the common challenges you’ll run into like dealing with two different routing systems, keeping state consistent across frameworks, and managing bundle size when both frameworks need to live side by side for a while. We’ll also get into practical strategies that have worked well in real-world projects, including patterns like the Strangler Fig. The goal is to give you a clear, realistic path forward so you can modernize your app, reduce tech debt, and end up with a cleaner, more maintainable codebase all without grinding your velocity.",
                },
                {
                    start: "12:30",
                    title: "A JavaScript Less Future - New Browser APIs and Their Impact on the Future of React Development",
                    track: "base-camp",
                    speakerId: "ameer-sami",
                    description: "In recent years we've seen browsers deliver powerful APIs such as popover, anchor, Navigation, View Transition, interpolate-size, :has(), and many more. Each addresses a problem that was previously only solve-able with JavaScript. What does this mean for the future of React development? A future with less JavaScript for interaction logic. In this talk we'll discuss how you can leverage these new APIs and the impacts they will have on, application performance, developer experience, user experience, and the future of React app development.",
                },
                {
                    start: "12:50",
                    title: "Building Browser Extensions with React - That Don't Break Browsers",
                    track: "base-camp",
                    speakerId: "johnny-fekete",
                    description: "Browser extensions face unique challenges that web apps never encounter - from Manifest V3 constraints to cross-script communication. After 4+ years building production ready browser extensions in React, I'll share the architecture patterns, performance optimizations, and debugging techniques that prevent extensions from breaking user browsing experience. You'll learn battle-tested solutions for state management across tabs, inter-script communication, and the performance pitfalls that can kill your extension's adoption.",
                },
                {
                    start: "13:00",
                    title: "Suspensful Component Composition",
                    track: "summit",
                    speakerId: "simeon-griggs",
                    description: "Suspense is a powerful part of the React library, but almost every example that you see in the documentation falls short of a good implementation. Explore Suspense a little deeper to ensure that your usage does not result in a worse user experience, layout shift, or worse.",
                },
                {
                    start: "13:20",
                    title: "The Cake Is a Lie... And So Is Your Login's Accessibility",
                    track: "summit",
                    speakerId: "ramona-schwering",
                    description: "Much like the promise of cake in Portal, login forms are everywhere in web development. While they may seem functional at first glance, many users with disabilities encounter a maze of invisible walls, from keyboard traps to inaccessible CAPTCHAs. It's as if GLaDOS designed these forms herself to test us! In this practical walkthrough, we will debug the accessibility issues of a real React login component live, similar to traversing those test chambers: Using an actual screen reader, we'll show how minor improvements, such as proper ARIA implementation and effective focus management, can transform a complex test chamber into a smooth user experience. Additionally, we will address the common pitfalls that GLaDOS might throw at us in both the Portal universe and the real world of accessibility, especially concerning authentication processes and its special needs. So grab your portal gun—let's work together to break down these barriers and ensure that authentication truly works for everyone. The cake might be a lie, but accessibility doesn't have to be!",
                },
                {
                    start: "13:40",
                    title: "From Pull To Push? - It's Time To Talk About Signals",
                    track: "summit",
                    speakerId: "julian-burr",
                    description: "With the active TC39 proposal in play, I think it’s about time we talk about Signals. Over the years, the concept has had many different names. From “observables” in KnockoutJS, to “refs” in VueJS, before Solid made “signals” popular. We’ve seen the carcinization of frontend frameworks in the pursuit of more seamless and fine-grained reactivity in our applications. But what actually are Signals? Why do we keep coming back to them? And where does React fit into all of this?",
                },
                {
                    start: "13:10",
                    title: "Secure Micro-Frontends: Authentication Magic at Dutch Railways",
                    track: "base-camp",
                    speakerId: "peter-eijgermans",
                    description: "Jump into an action-packed session where we crack open the hood of Dutch Railways' enterprise micro-frontend platform! We're diving deep into the nuts and bolts of secure authentication across distributed apps using MSAL and OpenID Connect. Watch live as we build a rock-solid authentication setup that works smoothly across multiple apps. See Module Federation in action, handling shared dependencies like a champ while keeping everything locked down tight. From MSAL implementation headaches to OIDC token flows - we'll tackle the real challenges head-on. You'll walk away knowing how to: ✓ Lock down micro-frontends with MSAL authentication ✓ Share secure state across app boundaries ✓ Handle token refresh flows like a pro ✓ Keep your federated modules safe. Bring your toughest auth questions - this no-fluff session packs real solutions from the trenches!"
                },
                {
                    start: "13:30",
                    title: "Closing",
                    track: "base-camp"
                },
                {
                    start: "14:00",
                    title: "Particles, Pixels, and Purpose: Creative Frontend Beyond the Grid",
                    track: "summit",
                    speakerId: "cristobal-chao",
                    description: "A visual journey into the creative edge of frontend—blending shaders, Three.js, and storytelling to craft interactive experiences that move beyond the grid.",
                },
                {
                    start: "14:20",
                    title: "From TV to Touch: How We Made React UI Work Across Every Input Mode",
                    track: "summit",
                    speakerId: "seungho-park",
                    description: "How do you build a React UI that works flawlessly across remote control, pointer, and touch input all at the same time? In modern TVs like LG StandbyME, users switch between 5-way keys, pointing, and touch swiping naturally, but handling this in your code is far from simple. Based on over a decade of experience building React UI frameworks for TV, I’ll share real-world techniques, design patterns, and lessons learned from creating seamless, adaptive navigation for complex hybrid input environments."
                },
                {
                    start: "14:40",
                    title: "Closing",
                    track: "summit"
                }
            ]
        }
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