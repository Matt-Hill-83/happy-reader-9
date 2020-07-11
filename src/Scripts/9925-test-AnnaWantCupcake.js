const story9925 = {
  title: "---   000--9925-test-AnnaWantCupcake",

  scenes: [
    {
      title: "log",
      sceneConfig: {
        triggers: {
          unlockSceneConditions: { currentMission: 1 },
        },
        subQuestId: 1,
        coordinates: { col: 0, row: 3 },
        creatures: ["merida02"],
        // items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"merida02" : "La la la la la!"}',
            '{"cub" : "I am lost."}',
            '{"merida02" : "I can help you find your mom"}',
            '{"cub" : "Me want mommy!"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "goatInABoat",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        subQuestId: 1,
        coordinates: { row: 3, col: 1 },
        creatures: ["merida02", "cub"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"merida02" : "Hello goat."}',
            '{"cub" : "You are not my mommy."}',
            '{"goat" : "baaaaaa"}',
          ],
        },
      ],
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"merida02" : "Goat, what do you want?"}',
            '{"goat" : "Me want food!"}',
            '{"cub" : "Goat, we will find you food!"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"goat" : "Me eat bun!"}',
            '{"goat" : "Yum! Yum!"}',
            '{"angus01" : "Bark! Bark!"}',
          ],
        },
      ],
    },
    {
      title: "bun",
      sceneConfig: {
        subQuestId: 1,
        coordinates: { row: 3, col: 2 },
        creatures: ["merida02", "cub"],
        // items: [{ name: "fig" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [{ characterIndex: 0, character: "anna02", face: "happy" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"merida02" : "I see a bun!"}',
            '{"cub" : "I see a bun... in the sun!"}',
            '{"merida02" : "We will get the bun!"}',
            '{"cub" : "We can give the bun to the goat."}',
          ],
        },
      ],
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [{ characterIndex: 0, character: "anna02", face: "happy" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"merida02" : "Fun! Fun! Fun!"}',
            '{"cub" : "We can run with the bun."}',
            '{"merida02" : "We can run with the bun.. in the sun!"}',
            '{"cub" : "Tee hee hee!"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pin",
      sceneConfig: {
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 1,
        coordinates: { row: 3, col: 3 },
        creatures: ["merida02", "cub"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [{ characterIndex: 0, face: "happy", character: "anna02" }],
            creatures: ["merida02", "cub"],
          },
          dialogs: [
            '{"merida02" : "I see a pin!"}',
            '{"cub" : "We can get the pin!"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cub",
      sceneConfig: {
        triggers: {
          unlockSceneConditions: { currentMission: 3 },
        },
        subQuestId: 4,
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { col: 5, row: 1 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hog",
      sceneConfig: {
        subQuestId: 4,
        coordinates: { row: 1, col: 6 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "sassafras01Happy",
      sceneConfig: {
        subQuestId: 4,
        coordinates: { col: 7, row: 1 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                characterIndex: 0,
                character: "anna02",
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cat01",
      sceneConfig: {
        subQuestId: 4,
        coordinates: { col: 8, row: 1 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                characterIndex: 0,
                character: "anna02",
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "boomALoo01",
      sceneConfig: {
        subQuestId: 4,
        coordinates: { row: 1, col: 9 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pig",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
        coordinates: { row: 1, col: 3 },
        creatures: ["anna02"],
        // items: [{ name: "babyTroll01" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"angus01" : "Hi pig."}',
            '{"anna02" : "You can have a fig!"}',
            '{"pig" : "Oink!"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: ['{"angus01" : "Hi pig."}', '{"pig" : "Oink!"}'],
        },
      ],
    },
    {
      title: "pinky01",
      sceneConfig: {
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 2,
        coordinates: { row: 2, col: 4 },
        creatures: ["anna02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "dragon",
      sceneConfig: {
        subQuestId: 2,
        coordinates: { row: 2, col: 5 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "brindle01Happy",
      sceneConfig: {
        subQuestId: 7,
        triggers: {
          unlockSceneConditions: { currentMission: 5 },
        },
        coordinates: { col: 9, row: 2 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pug",
      sceneConfig: {
        subQuestId: 7,
        coordinates: { col: 10, row: 2 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "elf",
      sceneConfig: {
        subQuestId: 7,
        coordinates: { col: 11, row: 2 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                character: "anna02",
                characterIndex: 0,
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "home",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
        coordinates: { row: 0, col: 1 },
        creatures: ["anna02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Hi girls."}',
            '{"angus01" : "Hi girls. Bark. Bark."}',
            '{"anna02" : "My name is Anna."}',
            '{"angus01" : "And I am Angus."}',
          ],
        },
        {
          frameConfig: {
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Can you play with us today?"}',
            '{"anna02" : "We can go to a cup cake party."}',
            '{"angus01" : "A cup cake party!"}',
          ],
        },
        {
          frameConfig: {
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Angus likes cupcakes."}',
            '{"angus01" : "Me like cupcakes!"}',
            '{"angus01" : "Me love cupcakes!"}',
          ],
        },
        {
          frameConfig: {
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "The cup cake party is at the hill."}',
            '{"angus01" : "We can go to the hill!"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "I see my home."}',
            '{"angus01" : "Bark. Bark."}',
          ],
        },
      ],
    },
    {
      title: "slide",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { row: 1, col: 0 },
        creatures: ["anna02", "merida02"],
        items: [{ name: "mug" }],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "mug" }],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "goat01",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
        coordinates: { row: 1, col: 1 },
        creatures: ["anna02", "angus01"],
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "note01", name: "top" }],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Look!  I see a note!"}',
            '{"angus01" : "You see a note?"}',
            '{"anna02" : "I see a note... on a goat."}',
            '{"angus01" : "Hi goat!"}',
          ],
        },
        {
          frameConfig: {
            items: [{ name: "note01" }],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "The note is from Elsa."}',
            '{"angus01" : "I love Elsa!"}',

            '{"anna02" : "Elsa wants us to help her. "}',
            '{"angus01" : "Elsa wants help?"}',
          ],
        },
        {
          frameConfig: {
            items: [{ name: "note01" }],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Elsa wants us to feed the pig"}',
            '{"angus01" : "I love the pig."}',
            '{"anna02" : "We need to feed the pig a fig."}',
          ],
        },
        {
          frameConfig: {
            items: [{ name: "note01" }],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "We do not have a fig."}',
            '{"angus01" : "Boo Hoo!"}',
            '{"anna02" : "We can find a fig!"}',
            '{"angus01" : "We can find a fig, and feed it to the pig!"}',
          ],
        },
        {
          frameConfig: {
            items: [{ name: "note01" }],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "After we feed the pig, we go to the cupcake party."}',
            '{"angus01" : "Me want cup cake!"}',
            '{"angus01" : "Me love cup cake!"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: ['{"anna01" : "Hi goat!"}', '{"goat" : "Baaaaa!"}'],
        },
      ],
    },
    {
      title: "fig",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
        coordinates: { row: 1, col: 2 },
        creatures: ["anna02", "angus01"],
        items: [],
        // items: [{ name: "fig" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: [
            '{"angus01" : "We got the fig!"}',
            '{"anna01" : "Now we need to find the pig!"}',

            '{"anna02" : "Angus, do you see a pig?"}',
            '{"angus01" : "Yes! I see a pig."}',
            '{"anna02" : "Good work!  Let\'s go to the pig?"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: ['{"anna01" : "I see a fig!"}'],
        },
      ],
    },
    {
      title: "hill",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        subQuestId: 0,
        coordinates: { col: 3, row: 2 },
        // creatures: ["anna02", "angus01"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "note" }],
            creatures: ["anna02", "angus01", "troll01", "babyTroll01"],
          },
          dialogs: [
            '{"anna02" : "Oh no.  The Trolls ate all the cup cakes!"}',
            '{"anna02" : "The path is locked and blocked."}',
            '{"angus01" : "Boo Hoo."}',

            '{"anna02" : "Merida can help us?"}',
            '{"angus01" : "Merida is at the log."}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            creatures: ["anna02", "merida02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Merida!  Did you come to help?"}',
            '{"merida02" : "Yes.  I can help."}',
            '{"anna02" : "The Trolls ate the cup cakes!"}',
            '{"merida02" : "They ate all the cup cakes?"}',
            '{"anna02" : "Can we get more?"}',
            '{"merida02" : "We can get more."}',
          ],
        },
      ],
    },
    {
      title: "katieKooper01",
      sceneConfig: {
        subQuestId: 5,
        triggers: {
          unlockSceneConditions: { currentMission: 4 },
        },
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { row: 3, col: 5 },
        creatures: ["anna02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cap",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 6, row: 3 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "bun",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { row: 3, col: 7 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "fan",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 8, row: 3 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cat_king",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 9, row: 3 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "sassafras01Happy",
      sceneConfig: {
        subQuestId: 8,
        triggers: {
          unlockSceneConditions: { currentMission: 7 },
        },
        coordinates: { row: 3, col: 11 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "mop",
      sceneConfig: {
        subQuestId: 8,
        coordinates: { row: 3, col: 12 },
        creatures: ["anna02", "merida02"],
        items: [{ name: "note01" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "van",
      sceneConfig: {
        subQuestId: 8,
        coordinates: { row: 3, col: 13 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                characterIndex: 0,
                character: "anna02",
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "mat",
      sceneConfig: {
        subQuestId: 9,
        coordinates: { col: 13, row: 4 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "anna02",
              },
            ],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "stump",
      sceneConfig: {
        subQuestId: 9,
        coordinates: { col: 14, row: 4 },
        creatures: ["anna02", "merida02"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [],
            creatures: ["anna02", "merida02"],
          },
          dialogs: [
            '{"anna02" : "---------------"}',
            '{"merida02" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
  ],
  questConfig: {
    subQuestTriggersList: [
      // { subQuestId: 0, unHideTriggers: {} },
      { subQuestId: 1, unHideTriggers: { completedMission: 0 } },
      { subQuestId: 2, unHideTriggers: { completedMission: 1 } },
      { subQuestId: 3, unHideTriggers: { completedMission: 2 } },
      { subQuestId: 4, unHideTriggers: { completedMission: 2 } },
      { subQuestId: 5, unHideTriggers: { completedMission: 3 } },
    ],
    missions: [
      {
        item: { name: "fig" },
        name: "Feed the pig",
        rewards: [{ amount: 5, name: "gold" }],
        recipient: { name: "pig" },
      },
      {
        item: { name: "bun" },
        name: "Feed the goat.",
        rewards: [{ amount: 5, name: "gold" }],
        recipient: { name: "goatInABoat" },
      },
      {
        recipient: { name: "pinky01" },
        name: "Give Pinky a gift.",
        item: { name: "mug" },
        rewards: [{ name: "gold", amount: 5 }],
      },
      {
        recipient: { name: "babyTroll01" },
        name: "Give a Troll a Gift.",
        item: { name: "pin" },
        rewards: [{ name: "gold", amount: 5 }],
      },
    ],
  },
}
export default story9925
