export type Testimonial = {
  name: string;
  background: string;
  quote: string;
  photo: string;
  fullStory: { question?: string; answer: string }[];
};

// Names, quotes, photos, and full stories verified against
// interprofinland.fi/testimonials.
export const testimonials: Testimonial[] = [
  {
    name: "Junior Perri",
    background: "Architect from Italy — Community Member",
    quote:
      "To integrate in the Finnish Architecture community, participation and commitment are the keys.",
    photo: "/images/testimonials/junior-perri.jpg",
    fullStory: [
      {
        question:
          "Can you share your feelings about getting licensed to practice in Finland? How does it feel to reach this milestone?",
        answer:
          "I am happy to have reached this milestone and it felt a bit like a relief. Architect is a title that is linked to the profession, so to be an architect you need to be recognised as that by the state in which you are practising. But first of all we are architectural workers, and in Finland most architects work in salaried jobs. I started working in my current occupation as an entry level, one year after I moved to Finland, and 2 years after completing my studies. Out of 5 people, employer included, I am the only one that has studied abroad. Two colleagues share an international background but did their master's degree here in Finland.",
      },
      {
        question:
          "What challenges did you face during the qualification recognition process, and what helped you to overcome them?",
        answer:
          "The recognition of a degree from another EU country (Italy in my case) is a pretty straightforward process, done in accordance with Directive 36/2005/EU. Preliminary they said that the process could have been 3 months long, it actually lasted only 20 days since I first opened the application. The person in charge of the process from Opetushallitus has been really helpful and has answered promptly to my questions while guiding me in what documents to provide them. At the moment it is not important since I am not in the stage of my career to sign for projects yet — even those who completed their studies here need work experience in order to practise, and the legislation is under change this year. But it is a progress for my personal career. To integrate in the Finnish Architecture community, participation and commitment are the key. In my plan there is to keep my knowledge up to date, be active within the association at a local level as well as in its focus groups, and keep importing and exporting knowhow playing actively my international role. I am willing to connect with other international architects in Finland and actively network!",
      },
      {
        question:
          "What advice would you give to other international professionals seeking to have their qualifications recognized in Finland?",
        answer:
          "Start the process as soon as you can, so as to accelerate your integration in the professional environment. Once your degree is recognised you can apply for joining the professional union of your field — in my example SAFA, the Finnish Association of Architects. The process is simple: provide Opetushallitus official degree certificates from your university studies and pay the fees for processing the application. I suggest you take preliminary contact with Opetushallitus so as to understand what kind of documents you need to provide them, and if your documents need a transcription in another language. Once you have those, apply for the recognition!",
      },
    ],
  },
  {
    name: "Svetlana Bilevich",
    background: "Psychotherapist — Degree Amplify Participant",
    quote: "I feel like a hero, who has gone through these all challenges.",
    photo: "/images/testimonials/svetlana-bilevich.jpg",
    fullStory: [
      {
        question:
          "How does it feel to get licensed to practice in Finland, what challenges did you face during the qualification recognition process, and what helped you to overcome them?",
        answer:
          "Obviously, I feel like a hero, who has gone through these all challenges. The first huge disappointment was when Valvira refused to accept my European certificate of psychotherapy. At that moment, I realized that this would not be an easy path. The main challenges were bureaucratic hurdles and adapting to local standards. Translating and preparing all the documents, along with learning the local laws and regulations, was not an easy task. However, the support from my friends, colleagues, and my own persistence and self-belief helped me overcome these difficulties. I was searching for help everywhere and telling everybody about my Valvira process and asking for help. This is how I found Annabel and PPF, my assistant and a lot of support and friends.",
      },
    ],
  },
  {
    name: "Mariam",
    background: "Electrical Engineer — Degree Amplify Participant",
    quote: "This project opened my eyes to information I didn't know before.",
    photo: "/images/testimonials/mariam.jpg",
    fullStory: [
      {
        answer:
          "Taking part in the Degree Amplify project opened my eyes to information I didn't know before. For example, I got to understand the main idea about recognition of diplomas in Finland, Opetushallitus (OPH), and what are regulated professions in Finland, and details related to my diploma in electrical engineering. I also got to know about Ely-keskus and the role they play with regards to the recognition of previous diplomas. It was a challenge for me to find out that I do not qualify for the TE toimisto training where they can assist in paying the application fees for the recognition, because I have already lived in Finland for more than 3 years. So that is why I have to participate in this project and also pay for the application fees by myself — because I need to get my diploma recognized so I can move on to the next steps in my career.",
      },
    ],
  },
  {
    name: "Kristina",
    background: "Psychologist — Degree Amplify Participant",
    quote:
      "My Degree AMPLIFY mentor provided me with new information and answered all my worries.",
    photo: "/images/testimonials/kristina.jpg",
    fullStory: [
      {
        answer:
          "I found out that I need to apply for a license from Valvira, in order to work as a psychologist in Finland. This was something new and confusing for me. I tried a couple of times to start the process, but I always felt that I should focus on the Finnish language because without that I couldn't go further, and I also felt alone, not knowing where to start. With Degree Amplify, my mentor, to whom I am very grateful, gave me the courage to continue with the process, focusing on the things that I already have. She also provided me with new information and answered all my worries and questions. Having someone to guide you is great support mentally, and also an opportunity to meet new friends. Thanks to all the team for the support!",
      },
    ],
  },
  {
    name: "Kelly",
    background: "One Mentor One Participant",
    quote:
      "Discovering interests assists in overcoming work-related challenges.",
    photo: "/images/testimonials/kelly.jpg",
    fullStory: [
      {
        answer:
          "My mentor guided me in discovering my interests and assisted me in overcoming some work-related challenges. Through this mentorship program, I discovered my interests and overcame some work-related challenges. Interests, unfortunately, can often be overlooked during one's career journey — but when identifying competencies and interests, individuals can align their careers with them, and may feel more motivated to acquire relevant knowledge and skills, set high career objectives, and take action to meet those objectives. As for the work-related challenges, we all face them, sometimes to a big extent, sometimes to a small extent. Nevertheless, it is good to discuss them with peers and find a way, with their help, to overcome them, as it is part of our professional journey.",
      },
    ],
  },
  {
    name: "Cyrille",
    background: "One Mentor One Participant",
    quote:
      "I was able to save time because my mentor knows how the diploma equivalency process works.",
    photo: "/images/testimonials/cyrille.jpg",
    fullStory: [
      {
        answer:
          "I was able to save time because my mentor knows how the diploma equivalency process works and gave me great advice about it. This mentorship made me gain confidence in my integration process and therefore accelerated it. Talents with higher education diplomas relevant to regulated professions (e.g. teachers) need to have the qualifications claimed from abroad recognized in Finland to work in those sectors. Unfortunately, many foreigners arriving in Finland do not know this, and hence their integration process becomes more complicated and slower. Therefore, internationals need to become familiar with such procedures and gain an insight into them so they do not feel lost.",
      },
    ],
  },
  {
    name: "Maha",
    background: "SATAtalents Participant",
    quote: "The organization is as helpful as good family members.",
    photo: "/images/testimonials/maha.jpg",
    fullStory: [
      {
        answer:
          "I've come across endless bittersweet stories since I got into the international professional circle. That's when I started stalking the International Professionals Finland ry community, and started bugging Olivia Kumpula every now and then to help me out. I owe you — for being so generous with your time, energy, contacts, and for taking it upon yourself to come up with answers to my very specific case. I met my employer, Spear Innovations, at a networking event held by International Professionals Finland ry in Pori, and I will be forever thankful they saw past the language barrier. To the world, this is no major news. To me, I know this is a matter of trajectory, and that it's put me on the right one. If you need any support, or have any questions, feel free to reach out to the organization — they are as helpful as good family members.",
      },
    ],
  },
  {
    name: "Jichen",
    background: "International Student — SATAtalents Participant",
    quote: "I highly recommend everyone to get involved in events like the project.",
    photo: "/images/testimonials/jichen.jpg",
    fullStory: [
      {
        answer:
          "This project largely helped me to develop my career. I received support and encouragement from Olivia Kumpula, who is the CEO of International Professionals Finland ry, and my career coach Minna Franck. This project helped me to find my current job to some extent. I highly recommend everyone to get involved in events like the #satatalents project — you will gain more than you think. As an international student in Finland, I understand very well that living in another country you will encounter many challenges, so it is important to have an optimistic mind. You will learn and grow from the difficulties and eventually overcome them.",
      },
    ],
  },
];
