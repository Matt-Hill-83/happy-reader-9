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
            creatures: ["liz2"],
          },
          dialogs: [
            '{"liz2" : "I see a frog. I see a frog on a log."}',
            '{"liz2" : "Tee Hee Hee."}',
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
            '{"liz2" : "I need a pet."}',
            '{"liz2" : "I will get a pet."}',
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
            '{"liz2" : "I did not get a pet yet."}',
            '{"liz2" : "My feet are wet."}',
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
            '{"liz2" : "I see a pig."}',
            '{"liz2" : " I see a pig in a wig."}',
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
            '{"liz2" : "I see a twig."}',
            '{"liz2" : "I wish I had a pet."}',
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
            '{"liz2" : "I wish I had a pal."}',
            '{"liz2" : "I will find a pal."}',
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
            '{"liz2" : "I will go to the bun."}',
            '{"liz2" : "The bun will be fun."}',
            '{"liz2" : "I will run to the bun!"}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pin",
      sceneConfig: {
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
            '{"liz2" : "I see a..."}',
            '{"liz2" : "I see a..."}',
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
            '{"liz2" : "I see a red lego car..."}',
            '{"liz2" : "...that can fly?"}',
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
        },
      ],
      frames2: [],
    },
    {
      title: "hill",
      sceneConfig: {
        triggers: { unlockSceneConditions: { currentMission: 2 } },
        subQuestId: 2,
        coordinates: { row: 2, col: 3 },
        creatures: ["kat", "liz2"],
        items: [{ name: "babyTroll01" }],
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
            '{"kat" : "I see a girl..."}',
            '{"kat" : "...twirl."}',
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
            '{"liz2" : "Are you a girl..."}',
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
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "pinky01",
      sceneConfig: {
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
          dialogs: ['{"pinky" : "Me need mug."}'],
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
            '{"kat" : "I need to go now."}',
            '{"liz2" : "We can play soon."}',
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
        items: [],
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
            '{"kat" : "Do the steps."}',
            '{"kat" : "Do the steps and get the dress."}',
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
            '{"kat" : "Do the steps."}',
            '{"kat" : "Get the dress."}',
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
            '{"kat" : "Give the bun to the pig."}',
            '{"kat" : "I will find the bun."}',
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
            '{"kat" : "I will find a bun..."}',
            '{"kat" : "...in the sun. Tee Hee Hee."}',
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
            '{"kat" : "You want a bun?"}',
            '{"liz2" : "Did you find that on the ground?"}',
            '{"kat" : "yes."}',
            '{"liz2" : "I do not want a bun."}',
            '{"kat" : "Good call."}',
          ],
        },
      ],
      frames2: [],
    },
    {
      title: "slide",
      sceneConfig: {
        subQuestId: 0,
        coordinates: { row: 0, col: 1 },
        creatures: ["kat", "liz2"],
        items: [{ name: "mug" }],
        triggers: { unlockSceneConditions: { currentMission: 3 } },
      },
      frames: [
        {
          frameConfig: {
            items: [{ name: "mug" }],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { face: "happy", characterIndex: 0, character: "kat" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I see the bun!"}',
            '{"kat" : "I see the bun!"}',
            '{"kat" : "I will run to the bun."}',
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
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I see the bun!"}',
            '{"kat" : "I see the bun!"}',
            '{"kat" : "I will run to the bun."}',
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
            '{"kat" : "...in the sun!"}',
            '{"kat" : "Tee Hee Hee!"}',
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
        items: [],
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
            '{"kat" : "Ok Kat. Good job."}',
            '{"kat" : "Now. Give the bun to the pig."}',
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
            '{"kat" : "Give the bun to the pig."}',
            '{"kat" : "Do the steps. Get the dress."}',
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
            '{"kat" : "Here piggy piggy piggy!"}',
            '{"kat" : "I will find a big pig."}',
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
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "I see the pig!"}',
            '{"kat" : "Wow! The pig is big."}',
            '{"kat" : "Hello pig!"}',
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
          dialogs: ['{"kat" : "We can play."}'],
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
    ],
    missions: [
      {
        item: { name: "bun" },
        name: "Feed the pig",
        rewards: [{ amount: 5, name: "gold" }],
        recipient: { name: "pig" },
      },
      {
        item: { name: "fig" },
        name: "Feed the goat.",
        rewards: [{ amount: 5, name: "gold" }],
        recipient: { name: "goat01" },
      },
      {
        recipient: { name: "babyTroll01" },
        name: "Give a Troll a Gift.",
        item: { name: "pin" },
        rewards: [{ name: "gold", amount: 5 }],
      },
      {
        recipient: { name: "pinky01" },
        name: "Give Pinky a gift.",
        item: { name: "mug" },
        rewards: [{ name: "gold", amount: 5 }],
      },
    ],
  },
}
export default story9123
