const story9926 = {
  title: "--- 9926-test-newPattern001 - with critters",
  scenes: [
    {
      title: "castle",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 1, row: 0 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
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
              { character: "blank", characterIndex: 1, face: "happy" },
              { characterIndex: 0, face: "happy", character: "blank" },
            ],
            creatures: ["blank", "blank"],
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
        subQuestId: 0,
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 1 } },
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [
              { name: "liz2" },
              { name: "elsa02" },
              { name: "angus01" },
              { name: "fig" },
            ],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { character: "blank", characterIndex: 0, face: "happy" },
            ],
            creatures: ["blank", "liz2"],
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
            critters1: [{ name: "empty" }],
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
      title: "stump",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 3, row: 1 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [
              { name: "liz2" },
              { name: "angus01" },
              { name: "spaceShip01" },
            ],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "blank", face: "happy" },
            ],
            creatures: ["blank", "liz2"],
          },
          dialogs: [
            '{"liz2" : "oh look, a dog bed."}',
            '{"blank" : "Ruff Ruff"}',
            '{"liz2" : "Angus, you can sleep here."}',
            '{"blank" : "Bark bark"}',
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
            // creatures: ["anna02"],
            // critters1: [{ name: "liz2" }, { name: "kat" }],
            creatures: ["liz2", "kat"],
          },
          dialogs: [
            '{"liz2" : "Oh no!  Angus is gone!"}',
            '{"Kat" : "This is bad!"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [],
            // creatures: ["anna02"],
            critters1: [{ name: "liz2" }, { name: "kat" }, { name: "dog01" }],
          },
          dialogs: [
            '{"liz2" : "Oh no!  Angus is gone!"}',
            '{"Kat" : "This is bad!"}',
          ],
        },
      ],
    },
    {
      title: "cub",
      sceneConfig: {
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
      title: "hog",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 6 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 4,
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
        items: [{ name: "empty" }],
        subQuestId: 4,
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
        items: [{ name: "empty" }],
        subQuestId: 4,
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
      title: "pig",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 3, row: 2 },
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
            critters1: [{ name: "blank" }, { name: "liz2" }],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { face: "happy", character: "blank", characterIndex: 0 },
            ],
            creatures: ["blank", "liz2"],
          },
          dialogs: [
            '{"liz2" : "I will wait here for kat."}',
            '{"liz2" : ""}',
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
            creatures: ["kat", "liz2"],
          },
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 4, row: 2 },
        creatures: ["anna02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 2,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
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
        coordinates: { row: 2, col: 5 },
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
        coordinates: { row: 2, col: 9 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 7,
        triggers: { unlockSceneConditions: { currentMission: 5 } },
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
      title: "log",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 0 },
        creatures: ["merida02"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "blank" }],
            faces: [
              { face: "happy", character: "blank", characterIndex: 1 },
              { face: "happy", character: "kat", characterIndex: 0 },
            ],
            creatures: ["kat", "blank"],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 1, row: 3 },
        creatures: ["merida02", "cub"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 1,
        triggers: { newFrameSetConditions: { currentMission: 2 } },
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
            faces: [{ characterIndex: 0, face: "happy", character: "anna02" }],
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
        subQuestId: 1,
        items: [{ name: "empty" }],
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
        coordinates: { col: 3, row: 3 },
        creatures: ["merida02", "cub"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 1,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [],
            faces: [{ character: "anna02", face: "happy", characterIndex: 0 }],
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
            faces: [{ characterIndex: 0, character: "anna02", face: "happy" }],
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
      title: "cap",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 6 },
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
      title: "fan",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 8, row: 3 },
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
        coordinates: { col: 9, row: 3 },
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 11 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 8,
        triggers: { unlockSceneConditions: { currentMission: 7 } },
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
      title: "mop",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 12 },
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
      title: "van",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 13, row: 3 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 8,
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
        coordinates: { row: 4, col: 13 },
        creatures: ["anna02", "merida02"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 9,
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
    subQuestTriggersList: [
      { subQuestId: 1, unHideTriggers: { completedMission: 0 } },
      { subQuestId: 2, unHideTriggers: { completedMission: 1 } },
      { unHideTriggers: { completedMission: 2 }, subQuestId: 3 },
      { unHideTriggers: { completedMission: 2 }, subQuestId: 4 },
      { subQuestId: 5, unHideTriggers: { completedMission: 3 } },
    ],
    missions: [
      {
        name: "Feed the pig",
        recipient: { name: "pig" },
        item: { name: "fig" },
        rewards: [{ name: "gold", amount: 5 }],
      },
      {
        recipient: { name: "goatInABoat" },
        item: { name: "bun" },
        rewards: [{ amount: 5, name: "gold" }],
        name: "Feed the goat.",
      },
      {
        recipient: { name: "pinky01" },
        name: "Give Pinky a gift.",
        item: { name: "mug" },
        rewards: [{ amount: 5, name: "gold" }],
      },
      {
        name: "Give a Troll a Gift.",
        recipient: { name: "babyTroll01" },
        rewards: [{ amount: 5, name: "gold" }],
        item: { name: "pin" },
      },
    ],
  },
}

export default story9926
