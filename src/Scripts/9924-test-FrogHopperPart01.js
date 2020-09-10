const story9124 = {
  title: "9924 - FrogHopperPart01",

  scenes: [
    {
      title: "log",
      sceneConfig: {
        triggers: {
          unlockSceneConditions: { currentMission: 1 },
        },
        subQuestId: 1,
        coordinates: { col: 0, row: 3 },
        creatures: ["liz2"],
        items: [{ name: "top" }, { name: "cup" }, { name: "mug" }],
        // items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { character: "kat", characterIndex: 0, face: "happy" },
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
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { characterIndex: 0, face: "happy", character: "kat" },
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
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
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
        subQuestId: 1,
        coordinates: { row: 3, col: 1 },
        creatures: ["liz2"],
        items: [{ name: "hog" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { character: "kat", characterIndex: 0, face: "happy" },
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
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { characterIndex: 0, face: "happy", character: "kat" },
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
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
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
      title: "bun",
      sceneConfig: {
        subQuestId: 1,
        coordinates: { row: 3, col: 2 },
        creatures: ["liz2"],
        items: [{ name: "fig" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
      ],
      frames2: [],
    },
    {
      title: "pin",
      sceneConfig: {
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 1,
        coordinates: { row: 3, col: 3 },
        creatures: ["liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { characterIndex: 0, face: "happy", character: "kat" },
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
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
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
      title: "cub",
      sceneConfig: {
        triggers: {
          unlockSceneConditions: { currentMission: 3 },
        },
        subQuestId: 4,
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { col: 5, row: 1 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
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
      title: "hog",
      sceneConfig: {
        subQuestId: 4,
        coordinates: { row: 1, col: 6 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
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
        subQuestId: 4,
        coordinates: { col: 7, row: 1 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
      title: "cat01",
      sceneConfig: {
        subQuestId: 4,
        coordinates: { col: 8, row: 1 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
        subQuestId: 4,
        coordinates: { row: 1, col: 9 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
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
      title: "pig",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { row: 1, col: 3 },
        creatures: ["kat"],
        // items: [{ name: "babyTroll01" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: ['{"kat" : "Hi pig."}', '{"kat" : "You can have a fig!."}'],
        },
      ],
      frames2: [],
    },
    {
      title: "pinky01",
      sceneConfig: {
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 2,
        coordinates: { row: 2, col: 4 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
        subQuestId: 2,
        coordinates: { row: 2, col: 5 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
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
      title: "brindle01Happy",
      sceneConfig: {
        subQuestId: 7,
        triggers: {
          unlockSceneConditions: { currentMission: 5 },
        },
        coordinates: { col: 9, row: 2 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
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
      title: "pug",
      sceneConfig: {
        subQuestId: 7,
        coordinates: { col: 10, row: 2 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
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
      title: "elf",
      sceneConfig: {
        subQuestId: 7,
        coordinates: { col: 11, row: 2 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
      title: "home",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { row: 0, col: 1 },
        creatures: ["kat", "dog01"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "Hi kid."}',
            '{"kat" : "I am Kat."}',
            '{"kat" : "Today is a big day."}',
            '{"kat" : "...big day."}',

            '{"kat" : "Hey kid!  Will you help me get some gold?"}',
            '{"kat" : "Wait.  You do not look happy."}',
            '{"kat" : "You look like your Mom is making you read this."}',
            '{"kat" : "Poor kid."}',

            '{"kat" : "Wait.  Are you the kid that eats worms?"}',
            '{"kat" : "I see that smile."}',
            '{"kat" : "Yes.  You are the kid that eats worms!"}',
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
        subQuestId: 0,
        coordinates: { row: 1, col: 0 },
        creatures: ["kat", "liz2"],
        items: [{ name: "mug" }],
        triggers: { unlockSceneConditions: { currentMission: 2 } },
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "mug" }],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
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
        subQuestId: 0,
        coordinates: { row: 1, col: 1 },
        creatures: ["kat", "dog01"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
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
        subQuestId: 0,
        coordinates: { row: 1, col: 2 },
        creatures: ["kat", "dog01"],
        items: [],
        // items: [{ name: "fig" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "We got the fig!"}',
            '{"kat" : "Good work kid!"}',
            '{"kat" : "We got 5 gold!"}',

            '{"kat" : "Now, do you see a pig?"}',
            '{"kat" : "You do?  Let\'s go to the pig?"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hill",
      sceneConfig: {
        triggers: { newFrameSetConditions: { currentMission: 2 } },
        subQuestId: 0,
        coordinates: { col: 3, row: 2 },
        creatures: ["kat", "dog01"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat", "dog01"],
          },
          dialogs: [
            '{"kat" : "Oh no.  The path is locked."}',
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
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "Liz!  You came back."}',
            '{"liz2" : "Yes.  I came back from my trip."}',
            '{"kat" : "----------"}',
            '{"liz2" : "----------"}',
            '{"kat" : "----------"}',
            '{"liz2" : "----------"}',
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
        creatures: ["kat"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
      title: "cap",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 6, row: 3 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
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
      title: "bun",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { row: 3, col: 7 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
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
      title: "fan",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 8, row: 3 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
      title: "cat_king",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 9, row: 3 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
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
      title: "sassafras01Happy",
      sceneConfig: {
        subQuestId: 8,
        triggers: {
          unlockSceneConditions: { currentMission: 7 },
        },
        coordinates: { row: 3, col: 11 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
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
      title: "mop",
      sceneConfig: {
        subQuestId: 8,
        coordinates: { row: 3, col: 12 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
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
      title: "van",
      sceneConfig: {
        subQuestId: 8,
        coordinates: { row: 3, col: 13 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
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
      title: "mat",
      sceneConfig: {
        subQuestId: 9,
        coordinates: { col: 13, row: 4 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
        subQuestId: 9,
        coordinates: { col: 14, row: 4 },
        creatures: ["kat", "liz2"],
        items: [],
      },
      frames: [
        {
          frameConfig: {
            items: [],
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
        recipient: { name: "goat01" },
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
export default story9124
