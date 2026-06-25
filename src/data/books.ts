export interface Book {
  slug: string;
  title: string;
  author: string;
  year: number;
  cover: string;
  coverExt: string;
  pitch: string;
  tags: string[];
  notes: string;
}

export const books: Book[] = [
  {
    slug: "shoe-dog",
    title: "Shoe Dog",
    author: "Phil Knight",
    year: 2016,
    cover: "/covers/shoe-dog.jpg",
    coverExt: "jpg",
    pitch: "The rawest founder memoir I've read. Knight doesn't romanticize — he shows the terror, the debt, the near-death moments that built Nike.",
    tags: ["memoir", "business"],
    notes: `Phil Knight built Nike on borrowed money, borrowed time, and a kind of irrational stubbornness that looks like genius in hindsight. This book is less about building a company and more about what it costs a person to refuse to quit. The writing is unusually good for a business memoir — vivid, self-aware, occasionally funny. Required reading if you want to understand what obsession actually looks like from the inside.`
  },
  {
    slug: "ego-is-the-enemy",
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    year: 2016,
    cover: "/covers/ego-is-the-enemy.jpg",
    coverExt: "jpg",
    pitch: "A Stoic argument that ego — not talent, not luck — is what kills most careers before they start.",
    tags: ["stoicism", "philosophy"],
    notes: `Holiday structures the book around three phases: aspiration, success, and failure. In each, ego shows up differently and does different damage. The historical examples are well-chosen and the writing is tight. I return to the chapters on "staying a student" and "the canvas strategy" most often. The core idea — that confidence without humility is a liability — is simple but most people don't internalize it until it's too late.`
  },
  {
    slug: "mans-search-for-meaning",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    year: 1946,
    cover: "/covers/mans-search-for-meaning.jpg",
    coverExt: "jpg",
    pitch: "Written by a Holocaust survivor and psychiatrist. The argument: meaning, not happiness, is what keeps people alive.",
    tags: ["memoir", "psychology", "philosophy"],
    notes: `The first half is Frankl's account of surviving Auschwitz. The second half introduces logotherapy — his therapeutic framework built on the premise that humans can endure almost any "how" if they have a "why." The book is short, dense, and permanently changes how you think about suffering and agency. One of those books that gets truer the more life you've lived.`
  },
  {
    slug: "extreme-ownership",
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    year: 2015,
    cover: "/covers/extreme-ownership.jpg",
    coverExt: "jpg",
    pitch: "Navy SEAL leadership principles applied to business. The core idea: the leader owns everything — no excuses, ever.",
    tags: ["leadership", "military"],
    notes: `Each chapter alternates between a combat story from Ramadi and a business application. The writing is blunt and the framework is simple: if something went wrong, it's the leader's fault. Period. The principle sounds harsh until you realize most organizational dysfunction is actually just people playing hot potato with accountability. Jocko's follow-up "Dichotomy of Leadership" is also worth reading — it adds nuance to the extremes.`
  },
  {
    slug: "confessions-advertising-man",
    title: "Confessions of an Advertising Man",
    author: "David Ogilvy",
    year: 1963,
    cover: "/covers/confessions-advertising-man.jpeg",
    coverExt: "jpeg",
    pitch: "Ogilvy's operating manual for advertising — still the best book on persuasion, copy, and what actually sells.",
    tags: ["advertising", "persuasion", "business"],
    notes: `Ogilvy writes with the confidence of someone who was right more often than he had any right to be. The chapters on headlines, copy, and what clients actually want are as useful today as they were in 1963. His rule — "the consumer is not a moron, she is your wife" — is a corrective that most marketers still need. Required reading before you write any sales copy.`
  },
  {
    slug: "the-obstacle-is-the-way",
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    year: 2014,
    cover: "/covers/the-obstacle-is-the-way.jpeg",
    coverExt: "jpeg",
    pitch: "Stoic philosophy applied to adversity. The obstacle you're facing is the training — not the problem.",
    tags: ["stoicism", "philosophy"],
    notes: `Holiday draws from Marcus Aurelius, Seneca, and a parade of historical figures who turned setbacks into fuel. The framework is simple: perception → action → will. The book is best read during a rough stretch — it's more useful as a companion to difficulty than as abstract philosophy. The chapter on amor fati (love of fate) is worth the whole book.`
  },
  {
    slug: "build-tony-fadell",
    title: "Build",
    author: "Tony Fadell",
    year: 2022,
    cover: "/covers/build-tony-fadell.jpg",
    coverExt: "jpg",
    pitch: "The guy who built the iPod and Nest writes a brutally honest guide to building products, companies, and a career.",
    tags: ["product", "business", "memoir"],
    notes: `Fadell structures the book as a series of lessons across career stages — starting out, joining a company, becoming a manager, building a product, leading a company. It's one of the few business books that actually tells you what it feels like from inside the room when things go wrong. The product chapters are exceptional. His discussion of how Apple killed projects is alone worth reading.`
  },
  {
    slug: "anything-you-want",
    title: "Anything You Want",
    author: "Derek Sivers",
    year: 2011,
    cover: "/covers/anything-you-want.jpeg",
    coverExt: "jpeg",
    pitch: "Sivers built CD Baby into a $22M company by accident, then gave the proceeds to charity. This tiny book holds more usable wisdom than most 400-page business tomes.",
    tags: ["business", "entrepreneurship"],
    notes: `At 96 pages, this is one of the most efficient books I've read. Sivers has a rare quality: he says what he actually thinks, not what sounds impressive. Key lessons — your business is a utopia you design for yourself, revolution is only a label given in hindsight, and "hell yeah or no" is the only real filter for decisions. Re-readable in under two hours. I've read it three times.`
  },
  {
    slug: "unreasonable-hospitality",
    title: "Unreasonable Hospitality",
    author: "Will Guidara",
    year: 2022,
    cover: "/covers/unreasonable-hospitality.jpg",
    coverExt: "jpg",
    pitch: "How Eleven Madison Park became the world's best restaurant — by making every guest feel like the most important person in the room.",
    tags: ["hospitality", "business", "service"],
    notes: `Guidara's argument: the best business strategy is unreasonable generosity. The stories about the gestures his team made for guests — small, thoughtful, perfectly timed — read almost like magic. But the operational philosophy beneath it is rigorous. The book changed how I think about client relationships, customer experience, and what it means to make someone feel genuinely seen. Applies far beyond restaurants.`
  },
  {
    slug: "the-daily-stoic",
    title: "The Daily Stoic",
    author: "Ryan Holiday & Stephen Hanselman",
    year: 2016,
    cover: "/covers/the-daily-stoic.jpeg",
    coverExt: "jpeg",
    pitch: "366 meditations from Marcus Aurelius, Seneca, and Epictetus. One per day. A practice, not a read.",
    tags: ["stoicism", "philosophy"],
    notes: `Less a book you read cover-to-cover, more a daily practice. Holiday curates the best passages from Stoic writers and adds brief commentary. Some days the entry lands directly on what you're going through; other days it's abstract. The cumulative effect of reading it over a year is real — it rewires how you respond to friction. Start in January and actually do it daily.`
  },
];
