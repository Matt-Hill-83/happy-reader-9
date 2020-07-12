const story9926 = {
  title: "--- 9926-test-newPattern001 - with critters",
  scenes: [
    {
      title: "castle",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 0, col: 1 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [
              { name: "merida02" },
              { name: "elsa02" },
              { name: "angus01" },
            ],
            faces: [
              { characterIndex: 1, character: "blank", face: "happy" },
              { face: "happy", characterIndex: 0, character: "blank" },
            ],
            creatures: ["blank", "blank"],
          },
          dialogs: [
            '{"blank" : "We need to go to the elfs, to help them find the ring of Anadakar!"}',
            '{"blank" : "Who will take care of angus?"}',
            '{"blank" : "angus: bark bark"}',
            '{"blank" : ""}',
            '{"blank" : ""}',
            '{"blank" : ""}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [],
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
      title: "goat01",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 1 },
        creatures: ["anna02", "angus01", "note01"],
        isEndScene: false,
        isStartScene: false,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [
              { name: "liz2" },
              { name: "elsa02" },
              { name: "angus01" },
            ],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { character: "blank", face: "happy", characterIndex: 0 },
            ],
            creatures: ["blank", "liz2"],
          },
          dialogs: [
            '{"blank" : "Liz, can you take Angus?"}',
            '{"liz2" : "Ok."}',
            '{"blank" : ""}',
            '{"liz2" : ""}',
            '{"blank" : ""}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "ghandi01" }, { name: "goblin" }],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "did this ex/im?"}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: ['{"anna01" : "Hi goat!"}', '{"goat" : "Baaaaa!"}'],
        },
      ],
    },
    {
      title: "fig",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 2, row: 1 },
        creatures: ["anna02", "angus01"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 1 } },
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [],
            creatures: ["anna02", "angus01"],
          },
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
          frameConfig: {
            items: [],
            critters1: [],
            faces: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: ['{"anna01" : "I see a fig!"}'],
        },
      ],
    },
    {
      title: "pig",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 3 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [],
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
            critters1: [],
            faces: [],
            creatures: ["anna02", "angus01"],
          },
          dialogs: ['{"angus01" : "Hi pig."}', '{"pig" : "Oink!"}'],
        },
      ],
    },
    {
      title: "cub",
      sceneConfig: {
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { row: 1, col: 5 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 3 } },
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 6, row: 1 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 7 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [
              {
                character: "anna02",
                face: "kat-happy.9e02afab.png",
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
      title: "cat01",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 8, row: 1 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "boomALoo01",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 9 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "hill",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 2, col: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "note" }],
            critters1: [],
            faces: [],
            creatures: ["anna02", "angus01", "troll01", "babyTroll01"],
          },
          dialogs: [
            '{"anna02" : "Oh no. The Trolls ate all the cup cakes!"}',
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
            critters1: [],
            faces: [],
            creatures: ["anna02", "merida02", "angus01"],
          },
          dialogs: [
            '{"anna02" : "Merida! Did you come to help?"}',
            '{"merida02" : "Yes. I can help."}',
            '{"anna02" : "The Trolls ate the cup cakes!"}',
            '{"merida02" : "They ate all the cup cakes?"}',
            '{"anna02" : "Can we get more?"}',
            '{"merida02" : "We can get more."}',
          ],
        },
      ],
    },
    {
      title: "pinky01",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 4, row: 2 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        items: [{ name: "empty" }],
        subQuestId: 2,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 5, row: 2 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 2,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 9, row: 2 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 5 } },
        items: [{ name: "empty" }],
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 2, col: 10 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 2, col: 11 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 7,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "log",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 0, row: 3 },
        creatures: ["merida02"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 1 } },
        subQuestId: 1,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 1, row: 3 },
        creatures: ["merida02", "cub"],
        isEndScene: false,
        isStartScene: false,
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        items: [{ name: "empty" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [{ face: "happy", characterIndex: 0, character: "anna02" }],
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
            critters1: [],
            faces: [{ face: "happy", character: "anna02", characterIndex: 0 }],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 2 },
        creatures: ["merida02", "cub"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [{ face: "happy", character: "anna02", characterIndex: 0 }],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 3 },
        creatures: ["merida02", "cub"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        items: [{ name: "empty" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [{ face: "happy", characterIndex: 0, character: "anna02" }],
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
            critters1: [],
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
      title: "katieKooper01",
      sceneConfig: {
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { col: 5, row: 3 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 5,
        triggers: { unlockSceneConditions: { currentMission: 4 } },
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "cap",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 6 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 5,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 7 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [
              {
                character: "anna02",
                characterIndex: 0,
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
      title: "fan",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 8 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 9 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 5,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "sassafras01Happy",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 11 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 7 } },
        items: [{ name: "empty" }],
        subQuestId: 8,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 12, row: 3 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 8,
        items: [{ name: "note01" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "van",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 13 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 8,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "mat",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 13, row: 4 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 9,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
      title: "stump",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 14, row: 4 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 9,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
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
    missions: [
      {
        rewards: [{ amount: 5, name: "gold" }],
        item: { name: "fig" },
        name: "Feed the pig",
        recipient: { name: "pig" },
      },
      {
        rewards: [{ name: "gold", amount: 5 }],
        recipient: { name: "goatInABoat" },
        name: "Feed the goat.",
        item: { name: "bun" },
      },
      {
        name: "Give Pinky a gift.",
        recipient: { name: "pinky01" },
        rewards: [{ name: "gold", amount: 5 }],
        item: { name: "mug" },
      },
      {
        name: "Give a Troll a Gift.",
        item: { name: "pin" },
        rewards: [{ name: "gold", amount: 5 }],
        recipient: { name: "babyTroll01" },
      },
    ],
    subQuestTriggersList: [
      { subQuestId: 1, unHideTriggers: { completedMission: 0 } },
      { unHideTriggers: { completedMission: 1 }, subQuestId: 2 },
      { unHideTriggers: { completedMission: 2 }, subQuestId: 3 },
      { unHideTriggers: { completedMission: 2 }, subQuestId: 4 },
      { unHideTriggers: { completedMission: 3 }, subQuestId: 5 },
    ],
  },
}

export default story9926
