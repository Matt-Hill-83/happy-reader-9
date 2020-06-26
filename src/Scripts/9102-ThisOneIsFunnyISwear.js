const story9102 = {
  title: "9102-ThisOneIsFunnyISwear",
  questConfig: {
    missions: [
      {
        item: { name: "skull01" },
        name: "Bring the skull to Taffy",
        recipient: { name: "taffy01" },
        rewards: [{ amount: 5, name: "gold" }],
      },
      {
        recipient: { name: "madElf01" },
        item: { name: "goat01" },
        name: "Give the elf a pet.",
        rewards: [{ name: "gold", amount: 5 }],
      },
    ],
  },
  scenes: [
    {
      title: "home",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 0, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: true,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "taffy01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 1, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "strawberry01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 2, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "madElf01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 3, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "paradox01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 4, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "waterfall",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 5, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },

    // TODO
    // TODO
    // make locations trigger mission completion triggers
    // add locking of scenes based on whether the mission is complete
    // color code sub missions in quest
    // have frames for before and after a mission is completed
    // A mission should have a condition where you simply find an item and don't give it to anyone.
    {
      title: "goat01",
      sceneConfig: {
        unlockConditions: { currentMission: 1 },
        worldTitle: "--- test - 002",
        coordinates: { col: 1, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "skull01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 3, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "razzleDazzle01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 5, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "cave",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 6, row: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "zanzibar01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 5, row: 2 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "dress04",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 1, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "waterfall",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 3, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "gerald01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 5, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "goat01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 6, row: 3 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "ringOfZandar01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 0, row: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "zanyDog01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 1, row: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "ghandi01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 2, row: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "dennisTheMenace",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 3, row: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "lucy",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 4, row: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "hill",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 5, row: 4 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "rose01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 1, row: 5 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "log",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 0, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "slicerDicer01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 1, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "pantherGirl02",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 2, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "pinky01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 3, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "donutShop01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 4, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "hippityHop01",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 5, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: true,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
    {
      title: "end",
      sceneConfig: {
        worldTitle: "--- test - 002",
        coordinates: { col: 6, row: 6 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
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
            '{"kat" : "We can play."}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
            '{"liz2" : ""}',
          ],
        },
      ],
    },
  ],
};

export default story9102;
