const story9123 = {
  title: "------9923-test-FrogHopper - 001",
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : ""}',
            '{"liz2" : "I see a frog. I see a frog on a log."}',
            '{"kat" : ""}',
            '{"liz2" : "Tee Hee Hee."}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { face: "happy", character: "kat", characterIndex: 0 },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : ""}',
            '{"liz2" : "I need a pet."}',
            '{"kat" : ""}',
            '{"liz2" : "I will get a pet."}',
            '{"kat" : ""}',
            '{"liz2" : "I will go to the vet."}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["liz2"],
          },
          dialogs: [
            '{"kat" : ""}',
            '{"liz2" : "I did not get a pet yet."}',
            '{"kat" : ""}',
            '{"liz2" : "My feet are wet."}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "lake",
      sceneConfig: {
        subQuestId: 1,
        coordinates: { row: 3, col: 1 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "goat01" }],
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
            '{"kat" : ""}',
            '{"liz2" : "I see a pig."}',
            '{"kat" : ""}',
            '{"liz2" : " I see a pig in a wig."}',
            '{"kat" : ""}',
            '{"liz2" : "That pig is big. Tee Hee Hee."}',
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
            '{"kat" : ""}',
            '{"liz2" : "I see a twig."}',
            '{"kat" : ""}',
            '{"liz2" : "I wish I had a pet."}',
            '{"kat" : ""}',
            '{"liz2" : "I will look. I will look in a book."}',
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
            '{"kat" : ""}',
            '{"liz2" : "I wish I had a pal."}',
            '{"kat" : ""}',
            '{"liz2" : "I will find a pal."}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hat",
      sceneConfig: {
        subQuestId: 1,
        coordinates: { row: 3, col: 2 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : ""}',
            '{"liz2" : "I will go to the bun."}',
            '{"kat" : ""}',
            '{"liz2" : "The bun will be fun."}',
            '{"kat" : ""}',
            '{"liz2" : "I will run to the bun!"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "helicopter01",
      sceneConfig: {
        subQuestId: 1,
        coordinates: { row: 3, col: 3 },
        creatures: ["liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : ""}',
            '{"liz2" : "I see a..."}',
            '{"kat" : ""}',
            '{"liz2" : "I see a..."}',
            '{"kat" : ""}',
            '{"liz2" : "I have no idea what I see."}',
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
            '{"kat" : ""}',
            '{"liz2" : "I see a red lego car..."}',
            '{"kat" : ""}',
            '{"liz2" : "...that can fly?"}',
            '{"kat" : ""}',
            '{"liz2" : "Oh my. Oh my."}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cub",
      sceneConfig: {
        subQuestId: 5,
        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { col: 5, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hog",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { row: 1, col: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "sassafras01Happy",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 7, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cat01",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { col: 8, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "boomALoo01",
      sceneConfig: {
        subQuestId: 5,
        coordinates: { row: 1, col: 9 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "hill",
      sceneConfig: {
        subQuestId: 5,
        subQuestId: 3,
        coordinates: { row: 2, col: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
          dialogs: [
            '{"kat" : "I see a girl."}',
            '{"liz2" : ""}',
            '{"kat" : "I see a girl..."}',
            '{"liz2" : ""}',
            '{"kat" : "...twirl."}',
            '{"liz2" : ""}',
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
            '{"kat" : "Hello girl."}',
            '{"liz2" : "Oh my gosh! I see a girl too!"}',
            '{"kat" : ""}',
            '{"liz2" : "Are you a girl..."}',
            '{"kat" : ""}',
            '{"liz2" : "...or a robot?"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { face: "happy", character: "kat", characterIndex: 0 },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "I am a girl."}',
            '{"liz2" : "Yay! Will you be my pal?"}',
            '{"kat" : "I will be your pal!"}',
            '{"liz2" : "Yay!"}',
            '{"kat" : "You are my best pal!"}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "We can have fun."}',
            '{"liz2" : "We can have fun..."}',
            '{"kat" : "...in the sun!"}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { face: "happy", character: "kat", characterIndex: 0 },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : ""}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pinky01",
      sceneConfig: {
        subQuestId: 3,
        coordinates: { row: 2, col: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "dragon",
      sceneConfig: {
        subQuestId: 3,
        coordinates: { row: 2, col: 5 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "brindle01Happy",
      sceneConfig: {
        subQuestId: 7,
        coordinates: { col: 9, row: 2 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pig",
      sceneConfig: {
        subQuestId: 7,
        coordinates: { col: 11, row: 2 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "home",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { row: 1, col: 0 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "Today is the big day."}',
            '{"liz2" : ""}',
            '{"kat" : "Do the steps."}',
            '{"liz2" : ""}',
            '{"kat" : "Do the steps and get the dress."}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "First get the bun."}',
            '{"liz2" : ""}',
            '{"kat" : "Do the steps."}',
            '{"liz2" : ""}',
            '{"kat" : "Get the dress."}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "Get the bun."}',
            '{"liz2" : ""}',
            '{"kat" : "Give the bun to the pig."}',
            '{"liz2" : ""}',
            '{"kat" : "I will find the bun."}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I need to find the bun."}',
            '{"liz2" : ""}',
            '{"kat" : "I will find a bun..."}',
            '{"liz2" : ""}',
            '{"kat" : "...in the sun. Tee Hee Hee."}',
            '{"liz2" : ""}',
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
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I see the bun!"}',
            '{"liz2" : ""}',
            '{"kat" : "I see the bun!"}',
            '{"liz2" : ""}',
            '{"kat" : "I will run to the bun."}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I will run to the bun..."}',
            '{"liz2" : ""}',
            '{"kat" : "...in the sun!"}',
            '{"liz2" : ""}',
            '{"kat" : "Tee Hee Hee!"}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "bun",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { row: 1, col: 2 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "Yay! I got the bun!"}',
            '{"liz2" : ""}',
            '{"kat" : "Ok Kat. Good job."}',
            '{"liz2" : ""}',
            '{"kat" : "Now. Give the bun to the pig."}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "Find the pig."}',
            '{"liz2" : ""}',
            '{"kat" : "Give the bun to the pig."}',
            '{"liz2" : ""}',
            '{"kat" : "Do the steps. Get the dress."}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I need to find a pig."}',
            '{"liz2" : ""}',
            '{"kat" : "Here piggy piggy piggy!"}',
            '{"liz2" : ""}',
            '{"kat" : "I will find a big pig."}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pig",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { col: 3, row: 1 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I see the pig!"}',
            '{"liz2" : ""}',
            '{"kat" : "Wow! The pig is big."}',
            '{"liz2" : ""}',
            '{"kat" : "Hello pig!"}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "Pig, do you want a twig?"}',
            '{"liz2" : "pig: me want more bun."}',
            '{"kat" : "More bun? Wow. You eat a lot."}',
            '{"liz2" : ""}',
            '{"kat" : "Feeding a pig is a lot of work."}',
            '{"liz2" : "pig: oink!"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "katieKooper01",
      sceneConfig: {
        subQuestId: 6,

        worldTitle: "--- test - FrogHopper - 001",
        coordinates: { row: 3, col: 5 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cap",
      sceneConfig: {
        subQuestId: 6,
        coordinates: { col: 6, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "bun",
      sceneConfig: {
        subQuestId: 6,
        coordinates: { row: 3, col: 7 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "fan",
      sceneConfig: {
        subQuestId: 6,
        coordinates: { col: 8, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "cat_king",
      sceneConfig: {
        subQuestId: 6,
        coordinates: { col: 9, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "sassafras01Happy",
      sceneConfig: {
        subQuestId: 8,
        coordinates: { row: 3, col: 11 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
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
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "pin" }],
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
      frames2: [],
    },
  ],
  questConfig: {
    subQuestTriggersList: [
      { subQuestId: 0, unHideTriggers: {} },
      { subQuestId: 1, unHideTriggers: { completedMission: 0 } },
      { subQuestId: 2, unHideTriggers: { completedMission: 1 } },
      { subQuestId: 3, unHideTriggers: { completedMission: 2 } },
    ],
    missions: [
      {
        item: { name: "bun" },
        name: "Feed the pig",
        rewards: [{ amount: 5, name: "pin" }],
        recipient: { name: "pig" },
      },
      {
        item: { name: "fig" },
        name: "Feed the goat.",
        rewards: [{ amount: 5, name: "top" }],
        recipient: { name: "goat01" },
      },
      {
        recipient: { name: "gerald01" },
        name: "Bring the skull to Grimelda.",
        item: { name: "helicopter01" },
        rewards: [{ name: "hat", amount: 5 }],
      },
      {
        recipient: { name: "gerald01" },
        name: "Bring the skull to Grimelda.",
        item: { name: "helicopter01" },
        rewards: [{ name: "hat", amount: 5 }],
      },
    ],
  },
}
export default story9123
