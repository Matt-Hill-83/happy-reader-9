const story9926 = {
  title: "--- 9926-test-newPattern001 - with critters---test2",
  scenes: [
    {
      title: "castle",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 1, row: 0 },
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        creatures: ["anna02"],
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 1 } },
      },
      frames: [
        {
          frameConfig: {
            critters1: [
              { name: "merida02" },
              { name: "elsa02" },
              { name: "angus01" },
            ],
            critters2: [
              { name: "blank" },
              { name: "blank" },
              { name: "empty" },
            ],
            faces: [
              { character: "blank", face: "happy", characterIndex: 1 },
              { characterIndex: 0, character: "blank", face: "happy" },
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
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "angus01" },
              { name: "empty" },
            ],
            faces: [],
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
        coordinates: { col: 1, row: 1 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        subQuestId: 0,
        creatures: ["anna02", "angus01", "note01"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [
              { name: "liz2" },
              { name: "elsa02" },
              { name: "angus01" },
              { name: "fig" },
            ],
            critters2: [{ name: "blank" }, { name: "empty" }],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { face: "happy", characterIndex: 0, character: "blank" },
            ],
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
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "angus01" },
              { name: "empty" },
            ],
            faces: [],
          },
          dialogs: ['{"anna01" : "Hi goat!"}', '{"goat" : "Baaaaa!"}'],
        },
      ],
    },
    {
      title: "fig",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 2 },
        isEndScene: false,
        isStartScene: false,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
        creatures: ["anna02", "angus01"],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "empty" }],
            critters2: [
              { name: "anna02" },
              { name: "angus01" },
              { name: "empty" },
            ],
            faces: [],
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
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "angus01" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        triggers: { newFrameSetConditions: { currentMission: 1 } },
        items: [{ name: "empty" }],
        creatures: ["anna02"],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            critters1: [
              { name: "liz2" },
              { name: "angus01" },
              { name: "spaceShip01" },
            ],
            critters2: [{ name: "blank" }, { name: "empty" }],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { face: "happy", character: "blank", characterIndex: 0 },
            ],
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
            critters1: [],
            critters2: [{ name: "empty" }],
            faces: [],
          },
          dialogs: [
            '{"liz2" : "Oh no! Angus is gone!"}',
            '{"Kat" : "This is bad!"}',
          ],
        },
        {
          frameConfig: {
            critters1: [{ name: "liz2" }, { name: "kat" }, { name: "dog01" }],
            critters2: [{ name: "empty" }],
            faces: [],
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
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
        coordinates: { row: 1, col: 5 },
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 3 } },
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
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
      title: "hog",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 6 },
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        coordinates: { col: 7, row: 1 },
        isEndScene: false,
        isStartScene: false,
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
        subQuestId: 4,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
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
      title: "cat01",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 8, row: 1 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 4,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
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
      title: "boomALoo01",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 1, col: 9 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        creatures: ["anna02", "merida02"],
        subQuestId: 4,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        coordinates: { row: 2, col: 3 },
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        creatures: ["kat", "liz2"],
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "blank" }, { name: "liz2" }],
            critters2: [{ name: "blank" }, { name: "empty" }],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, face: "happy", character: "blank" },
            ],
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
            critters1: [],
            critters2: [{ name: "empty" }],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        creatures: ["anna02"],
        subQuestId: 2,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        subQuestId: 2,
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 5 } },
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
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
      title: "pug",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 10, row: 2 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        creatures: ["anna02", "merida02"],
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        subQuestId: 7,
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
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
      title: "log",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 0 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 1 } },
        subQuestId: 1,
        creatures: ["merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "blank" }],
            critters2: [{ name: "blank" }, { name: "empty" }],
            faces: [
              { characterIndex: 1, face: "happy", character: "blank" },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        creatures: ["merida02", "cub"],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "merida02" },
              { name: "cub" },
              { name: "empty" },
            ],
            faces: [{ characterIndex: 0, face: "happy", character: "anna02" }],
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
            critters1: [],
            critters2: [
              { name: "merida02" },
              { name: "cub" },
              { name: "empty" },
            ],
            faces: [{ character: "anna02", face: "happy", characterIndex: 0 }],
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
        coordinates: { col: 2, row: 3 },
        isEndScene: false,
        isStartScene: false,
        subQuestId: 1,
        items: [{ name: "empty" }],
        creatures: ["merida02", "cub"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "merida02" },
              { name: "cub" },
              { name: "empty" },
            ],
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
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 3, row: 3 },
        isEndScene: false,
        isStartScene: false,
        creatures: ["merida02", "cub"],
        subQuestId: 1,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "merida02" },
              { name: "cub" },
              { name: "empty" },
            ],
            faces: [{ face: "happy", character: "anna02", characterIndex: 0 }],
          },
          dialogs: [
            '{"merida02" : "I see a pin!"}',
            '{"cub" : "We can get the pin!"}',
          ],
        },
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [{ character: "anna02", characterIndex: 0, face: "happy" }],
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
        worldTitle: "--- 9926-test-newPattern001 - with critters---test2",
        coordinates: { col: 5, row: 3 },
        isEndScene: false,
        isStartScene: false,
        subQuestId: 5,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 4 } },
        creatures: ["anna02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
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
      title: "cap",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 6, row: 3 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        creatures: ["anna02", "merida02"],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        subQuestId: 5,
        items: [{ name: "empty" }],
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
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
      title: "fan",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 8 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 5,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        creatures: ["anna02", "merida02"],
        subQuestId: 5,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
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
      title: "sassafras01Happy",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { row: 3, col: 11 },
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 7 } },
        creatures: ["anna02", "merida02"],
        subQuestId: 8,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "note01" }],
        subQuestId: 8,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
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
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 13, row: 3 },
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 8,
        creatures: ["anna02", "merida02"],
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
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
      title: "mat",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 13, row: 4 },
        isEndScene: false,
        isStartScene: false,
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
        subQuestId: 9,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
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
      title: "stump",
      sceneConfig: {
        worldTitle: "--- 9926-test-newPattern001",
        coordinates: { col: 14, row: 4 },
        isEndScene: false,
        isStartScene: false,
        creatures: ["anna02", "merida02"],
        items: [{ name: "empty" }],
        subQuestId: 9,
      },
      frames: [
        {
          frameConfig: {
            critters1: [],
            critters2: [
              { name: "anna02" },
              { name: "merida02" },
              { name: "empty" },
            ],
            faces: [],
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
      { unHideTriggers: { completedMission: 1 }, subQuestId: 2 },
      { subQuestId: 3, unHideTriggers: { completedMission: 2 } },
      { subQuestId: 4, unHideTriggers: { completedMission: 2 } },
      { unHideTriggers: { completedMission: 3 }, subQuestId: 5 },
    ],
    missions: [
      {
        rewards: [{ name: "gold", amount: 5 }],
        name: "Feed the pig",
        recipient: { name: "pig" },
        item: { name: "fig" },
      },
      {
        name: "Feed the goat.",
        rewards: [{ amount: 5, name: "gold" }],
        item: { name: "bun" },
        recipient: { name: "goatInABoat" },
      },
      {
        item: { name: "mug" },
        rewards: [{ amount: 5, name: "gold" }],
        recipient: { name: "pinky01" },
        name: "Give Pinky a gift.",
      },
      {
        item: { name: "pin" },
        name: "Give a Troll a Gift.",
        rewards: [{ amount: 5, name: "gold" }],
        recipient: { name: "babyTroll01" },
      },
    ],
  },
}

export default story9926
