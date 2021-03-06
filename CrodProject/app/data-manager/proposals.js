/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  All of these data shall be change with API
*/
'use strict'
const proposals = [
   { id:0,
     profilePic: require("../../img/notification/man1.png"),
     fullName: "Just You",
     title: "Reduce parking lot by 20% in favor of bicycle parking",
     description: "React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not. Let's do this thing.",
     date: 16,
     monthNumber: 4,
     monthText: 'Apr',
     day: 'Sun',
     year: 2017,
     category: 'Social',
     categoryIcon: require("../../img/categories/social-fill.png"),
     articles: 7,
     discussions: 10,
     comment: 'HAHA',
     voteYes: 10,
     voteNo: 5
   },
   { id:1,
     profilePic: require("../../img/notification/man2.png"),
     fullName: "Michele Paoletti",
     title: "Can Facebook bring people together and create friendships?",
     description: "Facebook has become widely used as a social platform. It offers many possibilities for people to connect, form groups, create events, and have conversations. Still, many people criticize Facebook for its artificiality, people are not really bonding, because online communication is not real interaction. Do you think people's friendships can evolve and grow through Facebook?",
     date: 10,
     monthNumber: 4,
     monthText: 'Apr',
     day: 'Mon',
     year: 2017,
     category: 'Social',
     categoryIcon: require("../../img/categories/social-fill.png"),
     articles: 10,
     discussions: 57,
     comment: 'HAHAHA',
     voteYes: 10,
     voteNo: 5
   },
   { id:2,
     profilePic: require("../../img/notification/man3.png"),
     fullName: "Saba Saba",
     title: "Do you think that Brexit is legitimate?",
     description: "A very select group of people, namely older people and people who live in the countryside voted for Brexit. Most yes-votes came from England. The younger and urban generation wanted to stay with Europe. The outcome was 52%-48% pro-con. Should the break from the European Union be admitted with such a biased outcome?",
     date: 29,
     monthNumber: 4,
     monthText: 'Apr',
     day: 'Sat',
     year: 2017,
     category: 'Political',
     categoryIcon: require("../../img/categories/politics-fill.png"),
     articles: 3,
     discussions: 6,
     comment: 1,
     voteYes: 10,
     voteNo: 5
   },
   { id:3,
     profilePic: require("../../img/notification/woman1.png"),
     fullName: "Francesca Lagana",
     title: "The number of managers in companies is growing at a fast rate.",
     description: "In many companies, between the lowest paid workers and the CEOs there is a vast number of managers. Their function is not always clear, what they have to do is to report to their boss, who is also a manager. This way reports are being reported and those reports are being reported again, over and over. Do you think all this reporting are necessary steps in a companies processes?",
     date: 4,
     monthNumber: 5,
     monthText: 'May',
     day: 'Thu',
     year: 2017,
     category: 'Financial',
     categoryIcon: require("../../img/categories/finance-fill.png"),
     articles: 8,
     discussions: 41,
     comment: 1,
     voteYes: 10,
     voteNo: 5
   },
   { id:4,
     profilePic: require("../../img/notification/woman2.png"),
     fullName: "Sofia Listi",
      title: "Should scientist and researchers proceed with further investigations regarding planet Mars?",
     description: "Current developments point towards a plausibly successful venture to the planet Mars. Experts are keen to point out the possibilities for technological improvement, important comparisons with our planet in order to find out more about how life can come or cease to exist. Critics argue that it's so costly and time-consuming to even get to the planet, that the cost don't outweigh the benefits. They see no reason for travelling to other planets in the first place, as we should first of all take care of our own planet. Do you think investigations to Mars are relevant to the human race?",
     date: 5,
     monthNumber: 5,
     monthText: 'May',
     day: 'Fri',
     year: 2017,
     category: 'Science',
     categoryIcon: require("../../img/categories/science-fill.png"),
     articles: 16,
     discussions: 88,
     comment: 1,
     voteYes: 10,
     voteNo: 5
   },
   { id:5,
     profilePic: require("../../img/notification/man1.png"),
     fullName: "Coby Babani",
    title: "Cars are polluting our planet.",
     description: "Cars are a major source of pollution. There are many, many cars in the world and they all consume fossil fuels, pollute the air and cause accidents, injury and death. There are other options to travel, but so far they are very limited, since alternatives don't even get close to the comfort, ease of use, and flexibility of a car? Do you think there are too many cars in the world and that we should reduce the number?",
     date: 15,
     monthNumber: 6,
     monthText: 'June',
     day: 'Thu',
     year: 2017,
     category: 'Environment',
     categoryIcon: require("../../img/categories/environment-fill.png"),
     articles: 16,
     discussions: 88,
     comment: 1,
     voteYes: 10,
     voteNo: 5
   },

]

module.exports = proposals
