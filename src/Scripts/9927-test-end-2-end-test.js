const story9927 = {
  title: "9924 - hey kid",
  scenes: [
    {
      title: "home",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 1, row: 0 },
        creatures: ["kat", "dog01"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }],
            critters2: [{ name: "dog01" }],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "Hi kid."}',
            '{"kat" : "I am Kat."}',
            '{"kat" : "Today is a big day."}',
            '{"kat" : "...big day."}',
            '{"kat" : "Hey kid! Will you help me get some gold?"}',
            '{"kat" : "Wait. You do not look happy."}',
            '{"kat" : "You look like your Mom is making you read this."}',
            '{"kat" : "Poor kid."}',
            '{"kat" : "Wait. Are you the kid that eats worms?"}',
            '{"kat" : "I see that smile."}',
            '{"kat" : "Yes. You are the kid that eats worms!"}',
            '{"kat" : "I remember you."}',
            '{"kat" : "I like you kid."}',
            '{"kat" : "And I have a deal for you."}',
            '{"kat" : "Do you like gems?"}',
            '{"kat" : "Do you like sparkles?"}',
            '{"kat" : "Do you like tiny puppies?"}',
            '{"kat" : "Then you are going to love this deal."}',
            '{"kat" : "Here is the deal."}',
            '{"kat" : "If you help me get the gold, we can go to Happy Time Baby Land."}',
            '{"kat" : "There are sparkles and gems and cute pets there."}',
            '{"kat" : "Plus, I can make the words very easy."}',
            '{"kat" : "Are you in?"}',
            '{"kat" : "I see you smiling."}',
            '{"kat" : "Come on, let\'s go on a trip!"}',
            '{"kat" : "We are going to be best friends."}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "slide",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 1, col: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        items: [{ name: "mug" }],
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "mug" }],
            critters1: [{ name: "kat" }],
            critters2: [{ name: "dog01" }, { name: { name: "mug" } }],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "ant",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 1, col: 1 },
        creatures: ["kat", "dog01"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }],
            critters2: [{ name: "dog01" }],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "I will tell you how to get the gold."}',
            '{"kat" : "See the words up there."}',
            '{"kat" : "At the top of the screen..."}',
            '{"kat" : "That tells you the steps."}',
            '{"disembodied voice" : "What are the steps?"}',
            '{"kat" : "Great question."}',
            '{"kat" : "If you do the steps, you get the gold."}',
            '{"kat" : "Step 1, get the fig to the pig..."}',
            '{"kat" : "Get it?"}',
            '{"kat" : "Easy as pie!"}',
            '{"kat" : "We can go find a fig."}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "fig",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 2, row: 1 },
        creatures: ["kat", "dog01"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }],
            critters2: [{ name: "dog01" }],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "We got the fig!"}',
            '{"kat" : "Good work kid!"}',
            '{"kat" : "We got 5 gold!"}',
            '{"kat" : "Now, do you see a pig?"}',
            '{"kat" : "You do? Let\'s go to the pig?"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pig",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 1, col: 3 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 0,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: ['{"kat" : "Hi pig."}', '{"kat" : "You can have a fig!."}'],
        },
      ],
      frames2: [],
    },
    {
      title: "cub",
      sceneConfig: {
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { row: 1, col: 5 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        triggers: { unlockSceneConditions: { currentMission: 3 } },
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hog",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 1, col: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 4,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              {
                character: "kat",
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "sassafras01Happy",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 1, col: 7 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              {
                character: "kat",
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cat01",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 8, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 4,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              {
                characterIndex: 0,
                character: "kat",
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "boomALoo01",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 9, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 4,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hill",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 3, row: 2 },
        creatures: ["kat", "dog01"],
        isEndScene: false,
        isStartScene: false,
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        items: [{ name: "empty" }],
        subQuestId: 0,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }],
            critters2: [{ name: "dog01" }],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "Oh no. The path is locked."}',
            '{"kat" : "The path is locked and blocked."}',
            '{"kat" : "Boo Hoo."}',
            '{"kat" : "What can we do?"}',
            '{"dog01" : "Ask the kid."}',
            '{"kat" : "Hey kid!"}',
            '{"kat" : "Yeah you!"}',
            '{"kat" : "The kid that eats worms!"}',
            '{"kat" : "Kid, we are stuck.!"}',
            '{"kat" : "Can you get us to the log?"}',
          ],
        },
      ],
      frames2: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "Liz! You came back."}',
            '{"liz2" : "Yes. I came back from my trip."}',
            '{"kat" : "----------"}',
            '{"liz2" : "----------"}',
            '{"kat" : "----------"}',
            '{"liz2" : "----------"}',
          ],
        },
      ],
    },
    {
      title: "pinky01",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 2, col: 4 },
        creatures: ["kat", "liz2"],
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
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              {
                character: "kat",
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "dragon",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 2, col: 5 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 2,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              {
                characterIndex: 0,
                character: "kat",
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "brindle01Happy",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 9, row: 2 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 5 } },
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "kat",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pug",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 10, row: 2 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 7,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "kat",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "elf",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 2, col: 11 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 7,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "log",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 0 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 1 } },
        items: [{ name: "top" }, { name: "cup" }, { name: "mug" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "liz2" }],
            critters2: [{ name: "top" }, { name: "cup" }, { name: "mug" }],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "top" }, { name: "cup" }, { name: "mug" }],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "top" }, { name: "cup" }, { name: "mug" }],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "goat01",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 1, row: 3 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "hog" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "liz2" }],
            critters2: [{ name: "hog" }],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "hog" }],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { face: "happy", character: "kat", characterIndex: 0 },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "hog" }],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "bun",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 2 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "fig" }],
        subQuestId: 1,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "liz2" }],
            critters2: [{ name: "fig" }],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pin",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 3 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 1,
        items: [{ name: "empty" }],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "katieKooper01",
      sceneConfig: {
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { row: 3, col: 5 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        triggers: { unlockSceneConditions: { currentMission: 4 } },
        items: [{ name: "empty" }],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              {
                characterIndex: 0,
                character: "kat",
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cap",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 5,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              {
                character: "kat",
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "bun",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 7, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 5,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "fan",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 8 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cat_king",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 9, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 5,
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              {
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
                character: "kat",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "sassafras01Happy",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { col: 11, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "empty" }],
        subQuestId: 8,
        triggers: { unlockSceneConditions: { currentMission: 7 } },
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "mop",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 12 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 8,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              {
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
                character: "kat",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "van",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 3, col: 13 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 8,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              {
                character: "kat",
                characterIndex: 0,
                face: "kat-happy.9e02afab.png",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "mat",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 4, col: 13 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 9,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              {
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "kat",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "stump",
      sceneConfig: {
        worldTitle: "------9924-test-FrogHopperPart01",
        coordinates: { row: 4, col: 14 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        subQuestId: 9,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              {
                face: "kat-happy.9e02afab.png",
                character: "kat",
                characterIndex: 0,
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "---------------"}',
            '{"liz2" : "---------------"}',
          ],
        },
      ],
      frames2: [],
    },
  ],
  questConfig: {
    subQuestTriggersList: [
      { unHideTriggers: { completedMission: 0 }, subQuestId: 1 },
      { unHideTriggers: { completedMission: 1 }, subQuestId: 2 },
      { subQuestId: 3, unHideTriggers: { completedMission: 2 } },
      { unHideTriggers: { completedMission: 2 }, subQuestId: 4 },
      { subQuestId: 5, unHideTriggers: { completedMission: 3 } },
    ],
    missions: [
      {
        recipient: { name: "pig" },
        item: { name: "fig" },
        name: "Feed the pig",
        rewards: [{ amount: 5, name: "gold" }],
      },
      {
        recipient: { name: "goat01" },
        item: { name: "bun" },
        rewards: [{ amount: 5, name: "gold" }],
        name: "Feed the goat.",
      },
      {
        rewards: [{ amount: 5, name: "gold" }],
        name: "Give Pinky a gift.",
        item: { name: "mug" },
        recipient: { name: "pinky01" },
      },
      {
        name: "Give a Troll a Gift.",
        rewards: [{ name: "gold", amount: 5 }],
        item: { name: "pin" },
        recipient: { name: "babyTroll01" },
      },
    ],
  },
}
export default story9927
