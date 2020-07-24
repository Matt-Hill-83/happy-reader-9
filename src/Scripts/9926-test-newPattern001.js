const story9926 = {
  title: "--- 9926-test-newPattern -002---test2",
  scenes: [
    {
      title: "castle",
      sceneConfig: {
        coordinates: { row: 0, col: 1 },
        creatures: ["anna02"],
        subQuestId: 0,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
      },
      frames: [
        {
          frameConfig: {
            critters2: [
              { name: "elsa02" },
              { name: "merida02" },
              { name: "angus01" },
            ],
          },
          dialogs: [
            '{"blank" : "We need to go to the elfs, to help them find the ring of Anadakar!"}',
            '{"blank" : "Who will take care of angus?"}',
            '{"blank" : "angus: bark bark"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: { critters2: [{ name: "anna02" }, { name: "angus01" }] },
          dialogs: [
            '{"anna02" : "I see my home."}',
            '{"angus01" : "Bark. Bark."}',
          ],
        },
      ],
    },
    {
      title: "goat01",
      sceneConfig: {
        coordinates: { row: 1, col: 1 },
        subQuestId: 0,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        creatures: ["anna02", "angus01"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            critters2: [
              { name: "elsa02" },
              { name: "angus01" },
              { name: "fig" },
              { name: "note01" },
            ],
            faces: [{ characterIndex: 1, face: "happy", character: "liz2" }],
          },
          dialogs: [
            '{"blank" : "Liz, can you take Angus?"}',
            '{"liz2" : "Ok."}',
            '{"blank" : "one thing."}',
            '{"liz2" : "what?"}',
            '{"blank" : "Do not lose the puppy!"}',
            '{"liz2" : "I will not lose the puppy."}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: { critters2: [{ name: "anna02" }, { name: "angus01" }] },
          dialogs: ['{"anna01" : "Hi goat!"}', '{"goat" : "Baaaaa!"}'],
        },
      ],
    },
    {
      title: "fig",
      sceneConfig: {
        coordinates: { row: 1, col: 2 },
        subQuestId: 0,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        creatures: ["anna02", "angus01"],
      },
      frames: [
        {
          frameConfig: { critters2: [{ name: "anna02" }, { name: "angus01" }] },
          dialogs: [
            '{"angus01" : "We got the fig!"}',
            '{"anna01" : "Now we need to find the pig!"}',
            '{"anna02" : "Angus, do you see a pig?"}',
            '{"angus01" : "Yes! I see a pig."}',
            '{"anna02" : "Good work! Let\'s go to the pig?"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: { critters2: [{ name: "anna02" }, { name: "angus01" }] },
          dialogs: ['{"anna01" : "I see a fig!"}'],
        },
      ],
    },
    {
      title: "stump",
      sceneConfig: {
        coordinates: { col: 3, row: 1 },
        creatures: ["anna02"],
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            critters2: [{ name: "angus01" }, { name: "spaceShip01" }],
            faces: [{ character: "liz2", face: "happy", characterIndex: 1 }],
          },
          dialogs: [
            '{"liz2" : "oh look, a dog bed."}',
            '{"blank" : "Ruff Ruff"}',
            '{"liz2" : "Angus, you can sleep here."}',
            '{"blank" : "Bark bark"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {},
          dialogs: [
            '{"liz2" : "Oh no! Angus is gone!"}',
            '{"Kat" : "This is bad!"}',
          ],
        },
        {
          frameConfig: {
            critters2: [{ name: "liz2" }, { name: "kat" }, { name: "dog01" }],
          },
          dialogs: [
            '{"liz2" : "Oh no! Angus is gone!"}',
            '{"Kat" : "This is bad!"}',
          ],
        },
      ],
    },
    {
      title: "cub",
      sceneConfig: {
        coordinates: { row: 1, col: 5 },
        subQuestId: 4,
        triggers: { unlockSceneConditions: { currentMission: 3 } },
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                character: "anna02",
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
              },
            ],
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
        coordinates: { row: 1, col: 6 },
        subQuestId: 4,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { row: 1, col: 7 },
        creatures: ["anna02", "merida02"],
        subQuestId: 4,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                characterIndex: 0,
                character: "anna02",
                face: "kat-happy.9e02afab.png",
              },
            ],
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
        coordinates: { col: 8, row: 1 },
        subQuestId: 4,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                character: "anna02",
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
              },
            ],
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
        coordinates: { col: 9, row: 1 },
        creatures: ["anna02", "merida02"],
        subQuestId: 4,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { row: 2, col: 3 },
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        creatures: ["kat", "liz2"],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            faces: [{ face: "happy", character: "liz2", characterIndex: 1 }],
          },
          dialogs: ['{"liz2" : "I will wait here for kat."}'],
        },
      ],
      frames2: [
        {
          frameConfig: {},
          dialogs: [
            '{"kat" : "Hi Liz!"}',
            '{"liz2" : "Do you want to see the cutest puppy?"}',
            '{"kat" : "Yes."}',
            '{"liz2" : "The puppy is sleeping in her dog bed."}',
            '{"kat" : "Can we get more?"}',
            '{"liz2" : "We can get more."}',
          ],
        },
      ],
    },
    {
      title: "pinky01",
      sceneConfig: {
        coordinates: { row: 2, col: 4 },
        creatures: ["anna02"],
        subQuestId: 2,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { row: 2, col: 5 },
        creatures: ["anna02", "merida02"],
        subQuestId: 2,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { row: 2, col: 9 },
        creatures: ["anna02", "merida02"],
        subQuestId: 7,
        triggers: { unlockSceneConditions: { currentMission: 5 } },
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                character: "anna02",
                characterIndex: 0,
              },
            ],
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
        coordinates: { col: 10, row: 2 },
        subQuestId: 7,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { col: 11, row: 2 },
        subQuestId: 7,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                character: "anna02",
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
              },
            ],
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
      title: "log",
      sceneConfig: {
        coordinates: { row: 3, col: 0 },
        triggers: { unlockSceneConditions: { currentMission: 1 } },
        subQuestId: 1,
        creatures: ["merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }],
            faces: [{ characterIndex: 0, face: "happy", character: "kat" }],
          },
          dialogs: [
            '{"kat" : "I will go find liz"}',
            '{"kat" : ""}',
            '{"kat" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "goatInABoat",
      sceneConfig: {
        coordinates: { row: 3, col: 1 },
        subQuestId: 1,
        creatures: ["merida02", "cub"],
        triggers: { newFrameSetConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: { critters2: [{ name: "merida02" }, { name: "cub" }] },
          dialogs: [
            '{"merida02" : "Goat, what do you want?"}',
            '{"goat" : "Me want food!"}',
            '{"cub" : "Goat, we will find you food!"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: { critters2: [{ name: "merida02" }, { name: "cub" }] },
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
        coordinates: { row: 3, col: 2 },
        subQuestId: 1,
        creatures: ["merida02", "cub"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ face: "happy", characterIndex: 0, character: "anna02" }],
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
        coordinates: { col: 3, row: 3 },
        creatures: ["merida02", "cub"],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ characterIndex: 0, character: "anna02", face: "happy" }],
          },
          dialogs: [
            '{"merida02" : "I see a pin!"}',
            '{"cub" : "We can get the pin!"}',
          ],
        },
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [{ face: "happy", character: "anna02", characterIndex: 0 }],
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
      title: "katieKooper01",
      sceneConfig: {
        coordinates: { col: 5, row: 3 },
        triggers: { unlockSceneConditions: { currentMission: 4 } },
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
        creatures: ["anna02"],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                character: "anna02",
                characterIndex: 0,
              },
            ],
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
        coordinates: { col: 6, row: 3 },
        subQuestId: 5,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { col: 7, row: 3 },
        subQuestId: 5,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                characterIndex: 0,
                character: "anna02",
                face: "kat-happy.9e02afab.png",
              },
            ],
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
        coordinates: { row: 3, col: 8 },
        subQuestId: 5,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { row: 3, col: 9 },
        creatures: ["anna02", "merida02"],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                characterIndex: 0,
                character: "anna02",
                face: "kat-happy.9e02afab.png",
              },
            ],
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
        coordinates: { col: 11, row: 3 },
        subQuestId: 8,
        triggers: { unlockSceneConditions: { currentMission: 7 } },
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
        coordinates: { col: 12, row: 3 },
        subQuestId: 8,
        items: [{ name: "note01" }],
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "note01" },
            ],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                character: "anna02",
                characterIndex: 0,
              },
            ],
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
        coordinates: { row: 3, col: 13 },
        subQuestId: 8,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
                character: "anna02",
              },
            ],
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
        coordinates: { row: 4, col: 13 },
        subQuestId: 9,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                character: "anna02",
                characterIndex: 0,
              },
            ],
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
        coordinates: { col: 14, row: 4 },
        creatures: ["anna02", "merida02"],
        subQuestId: 9,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
    subQuests: [
      {
        name: "Meet Your New Best Friend",
        missions: [
          {
            name: "Feed the pig",
            item: { name: "fig" },
            missionType: "giveItemToPerson",
            recipient: { name: "pig" },
            rewards: [{ name: "gold", amount: 5 }],
          },
          {
            missionType: "giveItemToPerson",
            recipient: { name: "goatInABoat" },
            name: "Feed the goat.",
            rewards: [{ name: "gold", amount: 5 }],
            item: { name: "bun" },
          },
          {
            missionType: "giveItemToPerson",
            recipient: { name: "pinky01" },
            name: "Give Pinky a gift.",
            item: { name: "mug" },
            rewards: [{ amount: 5, name: "gold" }],
          },
          {
            missionType: "giveItemToPerson",
            recipient: { name: "babyTroll01" },
            name: "Give a Troll a Gift.",
            rewards: [{ name: "gold", amount: 5 }],
            item: { name: "pin" },
          },
          {
            missionType: "getToLocation",
            location: { name: "log" },
          },
        ],
        scenes: [
          {
            name: "castle",
            sceneTriggers: [
              {
                name: "lock",
                conditions: [{ currentMission: 0 }],
              },
              {
                name: "unlock",
                conditions: [{ completedMission: 1 }],
              },
              {
                name: "updateFrameSet",
                conditions: [{ frameSetIndex: 1, completedMission: 0 }],
              },
            ],
          },
          { name: "goat" },
          { name: "fig" },
          { name: "stump" },
          { name: "pig" },
        ],
        triggers: [
          {
            name: "lock",
            conditions: [
              { completedMission: 0 },
              { currentMission: 0 },
              { completedScene: "log" },
              { pocketContains: "hat" },
            ],
          },
          {
            name: "unlock",
            conditions: [{ completedMission: 0 }],
          },
          {
            name: "hide",
            conditions: [{ completedMission: 0 }],
          },
          {
            name: "updateFrameSet",
            conditions: [{ frameSetIndex: 1, completedMission: 0 }],
          },
        ],
      },
      {
        name: "Win the Rap Battle",
        scenes: [
          { name: "castle" },
          { name: "goat" },
          { name: "fig" },
          { name: "log" },
        ],
        triggers: [
          {
            name: "lock",
            conditions: [
              { completedMission: 0 },
              { currentMission: 0 },
              { completedScene: "log" },
              { pocketContains: "hat" },
            ],
          },
          {
            name: "unlock",
            conditions: [{ completedMission: 0 }],
          },
          {
            name: "hide",
            conditions: [{ completedMission: 0 }],
          },
          {
            name: "updateFrameSet",
            conditions: [{ frameSetIndex: 1, completedMission: 0 }],
          },
        ],
      },
    ],
  },
}
export default story9926
