const story9926 = {
  title: "---014",
  scenes: [
    {
      title: "castle",
      sceneConfig: {
        coordinates: { col: 1, row: 0 },
        subQuestId: 0,
        creatures: ["anna02"],
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
            faces: [{ character: "liz2", characterIndex: 1, face: "happy" }],
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
        coordinates: { col: 2, row: 1 },
        subQuestId: 0,
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
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            critters2: [{ name: "angus01" }, { name: "spaceShip01" }],
            faces: [{ face: "happy", characterIndex: 1, character: "liz2" }],
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
        coordinates: { col: 5, row: 1 },
        subQuestId: 4,
        triggers: { unlockSceneConditions: { currentMission: 3 } },
        creatures: ["anna02", "merida02"],
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
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
        coordinates: { col: 7, row: 1 },
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
                face: "kat-happy.9e02afab.png",
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
      title: "cat01",
      sceneConfig: {
        coordinates: { row: 1, col: 8 },
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
                face: "kat-happy.9e02afab.png",
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
      title: "boomALoo01",
      sceneConfig: {
        coordinates: { row: 1, col: 9 },
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
        creatures: ["kat", "liz2"],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            faces: [{ character: "liz2", face: "happy", characterIndex: 1 }],
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
        coordinates: { col: 4, row: 2 },
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
        coordinates: { col: 5, row: 2 },
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
        coordinates: { col: 9, row: 2 },
        triggers: { unlockSceneConditions: { currentMission: 5 } },
        creatures: ["anna02", "merida02"],
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                character: "anna02",
                face: "kat-happy.9e02afab.png",
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
        creatures: ["anna02", "merida02"],
        subQuestId: 7,
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
        creatures: ["anna02", "merida02"],
        subQuestId: 7,
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
        coordinates: { col: 0, row: 3 },
        subQuestId: 1,
        creatures: ["merida02"],
        triggers: { unlockSceneConditions: { currentMission: 1 } },
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
        coordinates: { col: 2, row: 3 },
        subQuestId: 1,
        creatures: ["merida02", "cub"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ face: "happy", character: "anna02", characterIndex: 0 }],
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
        coordinates: { row: 3, col: 3 },
        subQuestId: 1,
        creatures: ["merida02", "cub"],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ characterIndex: 0, face: "happy", character: "anna02" }],
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
        coordinates: { row: 3, col: 5 },
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
      title: "cap",
      sceneConfig: {
        coordinates: { row: 3, col: 6 },
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
        creatures: ["anna02", "merida02"],
        subQuestId: 5,
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
      title: "sassafras01Happy",
      sceneConfig: {
        coordinates: { col: 11, row: 3 },
        creatures: ["anna02", "merida02"],
        subQuestId: 8,
        triggers: { unlockSceneConditions: { currentMission: 7 } },
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
      title: "van",
      sceneConfig: {
        coordinates: { row: 3, col: 13 },
        creatures: ["anna02", "merida02"],
        subQuestId: 8,
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
      title: "mat",
      sceneConfig: {
        coordinates: { row: 4, col: 13 },
        creatures: ["anna02", "merida02"],
        subQuestId: 9,
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
      title: "stump",
      sceneConfig: {
        coordinates: { row: 4, col: 14 },
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
        missions: [
          {
            recipient: { name: "pig" },
            item: { name: "fig" },
            missionType: "giveItemToPerson",
            rewards: [{ name: "gold", amount: 5 }],
            name: "Feed the pig",
          },
          {
            name: "Feed the goat.",
            recipient: { name: "goatInABoat" },
            item: { name: "bun" },
            missionType: "giveItemToPerson",
            rewards: [{ amount: 5, name: "gold" }],
          },
          {
            name: "Give Pinky a gift.",
            recipient: { name: "pinky01" },
            item: { name: "mug" },
            missionType: "giveItemToPerson",
            rewards: [{ name: "gold", amount: 5 }],
          },
          {
            item: { name: "pin" },
            recipient: { name: "babyTroll01" },
            rewards: [{ amount: 5, name: "gold" }],
            name: "Give a Troll a Gift.",
            missionType: "giveItemToPerson",
          },
          { location: { name: "log" }, missionType: "getToLocation" },
        ],
        index: 0,
        name: "Meet Your New Best Friend",
        triggers: [
          { name: "unlock", conditions: [{ frameSetIndex: 0 }] },
          {
            conditions: [{ completedMission: 0, frameSetIndex: 1 }],
            name: "unhide",
          },
        ],
        scenes: [
          {
            id: "6db89bd8-14c7-4631-afd9-56cdda4a1af7",
            name: "castle",
            sceneTriggers: [
              {
                "0": "unhide",
                conditions: [{ currentMission: "0" }],
                name: "lock",
              },
              {
                "0": "unhide",
                name: "unlock",
                conditions: [{ completedMission: "0" }],
              },
              {
                "0": "unhide",
                conditions: [{ currentMission: "2" }],
                name: "lock",
              },
              { name: "unlock", conditions: [{ completedMission: "2" }] },
              {
                "0": "unhide",
                conditions: [{ completedMission: "0" }, { frameSetIndex: "1" }],
                name: "updateFrameSet",
              },
            ],
          },
          { id: "833f99c1-9f80-4ba2-a43e-37aeba0295bc", name: "goat01" },
          { name: "fig", id: "60e6830d-a5b8-49b6-ac08-c6b054ddaea6" },
          { name: "stump", id: "42908835-8359-4c0b-bbc8-8dc010e3ef1c" },
          { name: "pig", id: "96e11e7c-39f5-40de-ab0a-55d39219200e" },
        ],
      },
      {
        scenes: [
          { id: "a47365e3-98c5-4342-913d-c61fd1788c8b", name: "log" },
          { id: "4d3e94bf-7fcc-45eb-b636-b59d3bc9dabd", name: "goatInABoat" },
          { name: "bun", id: "33835422-0740-47b2-925b-df2f28b4aa64" },
          { id: "38a5b2e7-aeaa-4430-b0f9-1411a0451f5b", name: "pin" },
        ],
        name: "Win the Rap Battle",
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
          { name: "unlock", conditions: [{ completedMission: 0 }] },
          { name: "hide", conditions: [{ completedMission: 0 }] },
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
