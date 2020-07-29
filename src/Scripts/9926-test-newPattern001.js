const story9926 = {
  title: "---017",
  scenes: [
    {
      title: "castle",
      id: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
      sceneConfig: {
        coordinates: { row: 0, col: 1 },
        creatures: ["anna02"],
        subQuestId: 0,
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
      id: "ae0eb93f-d74d-482f-b259-9b5865c1a9fa",
      sceneConfig: {
        coordinates: { col: 1, row: 1 },
        creatures: ["anna02", "angus01"],
        subQuestId: 0,
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
      id: "24b9464f-53de-4da0-ba52-ddd604df8e61",
      sceneConfig: {
        coordinates: { row: 1, col: 2 },
        creatures: ["anna02", "angus01"],
        subQuestId: 0,
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
      id: "5eecdb96-c253-496b-a181-ba117ef6f16a",
      sceneConfig: {
        coordinates: { row: 1, col: 3 },
        creatures: ["anna02"],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            critters2: [{ name: "angus01" }, { name: "spaceShip01" }],
            faces: [{ face: "happy", character: "liz2", characterIndex: 1 }],
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
      id: "87c89f27-17c0-4baf-874d-4b4a36ffa67e",
      sceneConfig: {
        coordinates: { col: 5, row: 1 },
        triggers: { unlockSceneConditions: { currentMission: 3 } },
        creatures: ["anna02", "merida02"],
        subQuestId: 4,
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
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
      title: "hog",
      id: "2a53b3a9-4ba7-4e8e-980e-d74bc0a68db3",
      sceneConfig: {
        coordinates: { row: 1, col: 6 },
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
      title: "sassafras01Happy",
      id: "f715b6bc-f7bb-4ab8-8dbe-94f2ae56f24f",
      sceneConfig: {
        coordinates: { row: 1, col: 7 },
        subQuestId: 4,
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
      title: "cat01",
      id: "5dcc24ae-53a8-4349-818f-07d312aa366d",
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
      title: "boomALoo01",
      id: "623fe6fd-7c2b-4b47-b808-1e0985cd3ec4",
      sceneConfig: {
        coordinates: { col: 9, row: 1 },
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
      title: "pig",
      id: "9e2873f2-fe02-4b39-a6aa-be69f9688c91",
      sceneConfig: {
        coordinates: { row: 2, col: 3 },
        creatures: ["kat", "liz2"],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            faces: [{ face: "happy", characterIndex: 1, character: "liz2" }],
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
      id: "5b4acf11-ddcd-4db2-acda-51865a23db39",
      sceneConfig: {
        coordinates: { col: 4, row: 2 },
        subQuestId: 2,
        creatures: ["anna02"],
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
      id: "97b0888c-5246-4933-ad33-752ec1d59e4d",
      sceneConfig: {
        coordinates: { col: 5, row: 2 },
        subQuestId: 2,
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
      title: "brindle01Happy",
      id: "c2840885-08d7-4b25-b5cd-afbda2b95121",
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
      id: "74217613-4c3d-45fc-9a6c-f14c64cb230a",
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
      id: "c650982f-8121-414b-a5d3-936fb9af9164",
      sceneConfig: {
        coordinates: { row: 2, col: 11 },
        creatures: ["anna02", "merida02"],
        subQuestId: 7,
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
      title: "log",
      id: "e637450a-ba0b-4b73-8182-643077ca4afe",
      sceneConfig: {
        coordinates: { row: 3, col: 0 },
        subQuestId: 1,
        triggers: { unlockSceneConditions: { currentMission: 1 } },
        creatures: ["merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }],
            faces: [{ character: "kat", characterIndex: 0, face: "happy" }],
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
      id: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
      sceneConfig: {
        coordinates: { col: 1, row: 3 },
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
      id: "917b5276-eb79-4711-bb85-b7d3244e0ca8",
      sceneConfig: {
        coordinates: { col: 2, row: 3 },
        subQuestId: 1,
        creatures: ["merida02", "cub"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
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
      id: "c74d66fb-23f8-4d0a-96e7-18a70790d5bd",
      sceneConfig: {
        coordinates: { col: 3, row: 3 },
        subQuestId: 1,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        creatures: ["merida02", "cub"],
      },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ face: "happy", characterIndex: 0, character: "anna02" }],
          },
          dialogs: [
            '{"merida02" : "I see a pin!"}',
            '{"cub" : "We can get the pin!"}',
          ],
        },
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [{ character: "anna02", face: "happy", characterIndex: 0 }],
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
      id: "4807801b-1c79-4f46-a87a-8b98ebcc1c86",
      sceneConfig: {
        coordinates: { col: 5, row: 3 },
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
        subQuestId: 5,
        triggers: { unlockSceneConditions: { currentMission: 4 } },
        creatures: ["anna02"],
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
      id: "f19edf3b-1ab1-4b23-a394-f92e849d2a4d",
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
      id: "4b828107-5be5-4edc-9c49-396396af4149",
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
      id: "cd5fe3ec-4349-4e69-9000-8d950e2321d2",
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
      id: "67c3bd4c-d436-46dc-ba00-62d62c03ba87",
      sceneConfig: {
        coordinates: { row: 3, col: 9 },
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
      title: "sassafras01Happy",
      id: "a1c120ec-be3e-441c-a265-f5f7a558a298",
      sceneConfig: {
        coordinates: { row: 3, col: 11 },
        creatures: ["anna02", "merida02"],
        triggers: { unlockSceneConditions: { currentMission: 7 } },
        subQuestId: 8,
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
      id: "6f7d1217-45a7-429c-9c39-f4bc986a5681",
      sceneConfig: {
        coordinates: { col: 12, row: 3 },
        subQuestId: 8,
        creatures: ["anna02", "merida02"],
        items: [{ name: "note01" }],
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
      title: "van",
      id: "68f5f0af-22a7-450f-a21f-272ac0862f73",
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
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
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
      id: "9d11e227-f3f6-4bf4-8587-796d391cb006",
      sceneConfig: {
        coordinates: { col: 13, row: 4 },
        subQuestId: 9,
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
      title: "stump",
      id: "713518a3-e4ae-4b7d-b667-c4c93a0667db",
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
        index: 0,
        name: "Meet Your New Best Friend",
        triggers: [
          { conditions: [{ frameSetIndex: 0 }], name: "unlock" },
          {
            conditions: [{ frameSetIndex: 1, completedMission: 0 }],
            name: "unhide",
          },
        ],
        missions: [
          {
            name: "Feed the pig",
            missionType: "giveItemToPerson",
            item: { name: "fig" },
            recipient: { name: "pig" },
            rewards: [{ name: "gold", amount: 5 }],
          },
          {
            recipient: { name: "goatInABoat" },
            missionType: "giveItemToPerson",
            item: { name: "bun" },
            rewards: [{ amount: 5, name: "gold" }],
            name: "Feed the goat.",
          },
          {
            name: "Give Pinky a gift.",
            recipient: { name: "pinky01" },
            rewards: [{ amount: 5, name: "gold" }],
            missionType: "giveItemToPerson",
            item: { name: "mug" },
          },
          {
            item: { name: "pin" },
            missionType: "giveItemToPerson",
            rewards: [{ name: "gold", amount: 5 }],
            recipient: { name: "babyTroll01" },
            name: "Give a Troll a Gift.",
          },
          { missionType: "getToLocation", location: { name: "log" } },
        ],
        scenes: [
          {
            id: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
            name: "castle",
            sceneTriggers: [
              {
                "0": "unhide",
                conditions: [{ currentMission: "0" }],
                name: "lock",
              },
              {
                "0": "unhide",
                conditions: [{ completedMission: "0" }],
                name: "unlock",
              },
              {
                "0": "unhide",
                conditions: [{ currentMission: "2" }],
                name: "lock",
              },
              { name: "unlock", conditions: [{ completedMission: "2" }] },
              {
                "0": "unhide",
                name: "updateFrameSet",
                conditions: [{ completedMission: "0" }, { frameSetIndex: "1" }],
              },
            ],
          },
          { name: "goat01", id: "ae0eb93f-d74d-482f-b259-9b5865c1a9fa" },
          { id: "24b9464f-53de-4da0-ba52-ddd604df8e61", name: "fig" },
          { id: "713518a3-e4ae-4b7d-b667-c4c93a0667db", name: "stump" },
          { id: "9e2873f2-fe02-4b39-a6aa-be69f9688c91", name: "pig" },
        ],
      },
      {
        scenes: [
          { id: "a47365e3-98c5-4342-913d-c61fd1788c8b", name: "log" },
          { name: "goatInABoat", id: "4d3e94bf-7fcc-45eb-b636-b59d3bc9dabd" },
          { id: "33835422-0740-47b2-925b-df2f28b4aa64", name: "bun" },
          { name: "pin", id: "38a5b2e7-aeaa-4430-b0f9-1411a0451f5b" },
        ],
        name: "Win the Rap Battle",
        triggers: [
          {
            conditions: [
              { completedMission: 0 },
              { currentMission: 0 },
              { completedScene: "log" },
              { pocketContains: "hat" },
            ],
            name: "lock",
          },
          { conditions: [{ completedMission: 0 }], name: "unlock" },
          { name: "hide", conditions: [{ completedMission: 0 }] },
          {
            name: "updateFrameSet",
            conditions: [{ completedMission: 0, frameSetIndex: 1 }],
          },
        ],
      },
    ],
  },
}
export default story9926
