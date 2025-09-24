## Tech Conference Explorer

Explore, and get registered for the next big tech conference of the year! 

## Tech Stack
- Next.js
- Tailwind 
- React

## Overview

1. ```/```
    1. ```<ConferenceCard />```
        - Displays Name, Date, Price, Location, Registration availability, and category per conference
    2. ```<SearchPanel />```
        - UI/UX focused basic search tool, (Google inspired) that filters conferences by name.
    3. ```<FiltersClient />```
        - Contains advanced search capabilities expanding the search panel enabling the user to filter conferences by name, category, price (max & min), date (start and end).
    3. Pagination
        - Utilized Next.js's pre-made component ```<Link>``` to allow users to navigate between pages of conferences. (PageSize preference is set on user's ```/dashboard``` page)

2. ```/admin```
    1. Users can perform all CRUD operations from this page, creating new conferences, read upcoming conferences, edit and delete existing conferences, via the ```<AdminClient />``` custom component.
    2. Form fields validate client side with error handling toasts for invalid form submissions. 


3. ```/dashboard```
    1. Users have the ability to save basic profile pferences (name, email, preferred conferences displayed per page, and a dark/light mode toggle). 
    2. ```<DashboardClient>``` 
        - Renders a ```<Countdown />``` that provides a dd/hh:mm:ss digital countdown to the next closest tech conference 
        - Displays two lists with the client's favorite and registered conferences containing the ```<ConferenceCard />```

4. ```/conference/conference[id]```
    1. Users have the ability to view details of the conference of their choosing including the ```<Agenda />``` and ```<Speakers />```. By selecting the ```<FavoriteButton>``` conferences will appear on the user's dashboard as well as in the case of submitting a registration form via the ```<RegistraionForm />``` at the bottom of the page.
    2. Users can read more about the featured speakers via selecting the ```<Avatar />``` component displaying each speaker's bio snippet.


## Getting Started
1) Install deps
```npm i```

2) Run Dev
```npm run dev```

3) Open
```http://localhost:3000```

## Scripts
- ```npm run dev``` 
- ```npm run build``` 
- ```npm start``` 
- ```npm run lint```

## API
- ```GET /api/conferences``` 
    - List with filters/pagination
- ```GET /api/conferences/:id```
    - single conference
- ```POST /api/conferences/:id/register```
    - conference registration
- ```GET/POST /api/admin/conferences```
    - retrieve and create conferences on admin page
- ```GET/PUT/DELETE /api/admin/conferences/:id```
    - CRUD operations on conferences 

## Accessibility
- Decorative images use ```aria-hidden``` overlays and informative ```alt```.
- Contrast on category chips and buttons to improve visual recognition.

## Future Work
1. Round out the system and UI/UX by adding the remainder of the Bonus (optional) content (Social Login integration started but not fully flushed out)
2. Adding a nav bar for ease of navigation between pages
3. Improve component responsiveness via custom CSS/Tailwind rulesets.
4. User profile calendar toggle to switch from the basic dashboard UI to a calendar UI with registered conferences cards displayed as chips (Google Calendar).
5. Finish support for a light/dark mode toggle. 

## Technical Tradeoffs
1. Data & Persistence
    -In-memory store (db over a real DB)
        Why: Quickest to build and prioritize UI/UX and API shape.
        Trade-off: Data resets on restart/redeploy; no concurrency or migrations. 

    - Admin API mutates the runtime store
        Why: Allows the Admin page to instantly impact the landing page.
        Trade-off: Not durable or ideal for a multiple instances however priority went to development efficiency and keeping this a lightweight project.

2. API Design
    - RESTful routes with server validation
        Why: Explicity and testable endpoints that provide a single place to enforce input types.
        Trade-off: Duplication with client validation (still validates client-side for UX).
        Alternative: Schema sharing across client/server to avoid drift.
    - List endpoint computes filters/pagination server-side
        Why: Keeps the page simple and scalable as data grows.
        Trade-off: A bit more code on the server and the need to carefully parse URL params.
        Alternative: Push filters to a DB layer for larger datasets.

3. Filtering & UX
    - URL is the source of truth via query params
        Why: Sharable, back/forward browser friendly and SSR works with the same inputs.
        Trade-off: More careful parsing/serialization and easy to introduce param bugs
        Alternative: Client-only state + shallow routing (less portable)
    - Advanced Search collapsible
        Why: Cleaner primary UX (Googl inspired), with the other filters still available per need.
        Trade-off: A bit more client code for state + accessibility management. 

4. State Management
    - Small custom store with a useReducer and localStorage
        Why: Zero dependencies, very simple for favorites/registrations/ and profile.
        Tradeoff: No cross-device sync and requires manual hydration logic
        Alternative: Zustand/Redux or server sessions for multi-device persistance.
    -Registrations stored locally 
        Why: Development efficiency while still implementing server checks via status.
        Trade-off: local registration doesn't imply real ticketing
5. Validation
    - Loose email validation
        Why: Avoid false negatives due to a bug that prevented valid edge cases from passing
        Trade-Off: Relies more on backend for reinforced checks
6. Performance & Caching
    - ```force-dynamic``` and ```cache: "no-store"``` for lists
        Why: Guarentees the Home page reflects Admin edits 
        Trade-off: fewer caching wins and higher server effort.
        Alternative: Fine-grained revalidation 
 
        
    







