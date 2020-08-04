const story9926 = {
  title: "---024",
  scenes: [
    {
      title: "castle",
      id: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
      sceneConfig: { coordinates: { col: 1, row: 0 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "empty" }],
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
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "empty" }],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
          },
          dialogs: [
            '{"kat" : "111"}',
            '{"liz2" : "2112"}',
            '{"kat" : "123"}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "empty" }],
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
          },
          dialogs: [
            '{"kat" : "222"}',
            '{"liz2" : "222"}',
            '{"kat" : "222"}',
            '{"liz2" : "222"}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "empty" }],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
          },
          dialogs: [
            '{"kat" : "333"}',
            '{"liz2" : "333"}',
            '{"kat" : "333"}',
            '{"liz2" : "333"}',
            '{"kat" : "333"}',
            '{"liz2" : ""}',
          ],
        },
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "empty" }],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
          },
          dialogs: [
            '{"kat" : "444"}',
            '{"liz2" : "444"}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
            '{"kat" : ""}',
            '{"liz2" : ""}',
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
      sceneConfig: { coordinates: { col: 1, row: 1 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            critters2: [
              { name: "elsa02" },
              { name: "angus01" },
              { name: "note01" },
            ],
            faces: [{ characterIndex: 1, face: "happy", character: "liz2" }],
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
      sceneConfig: { coordinates: { col: 2, row: 1 } },
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
      sceneConfig: { coordinates: { col: 3, row: 1 } },
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
      id: "87c89f27-17c0-4baf-874d-4b4a36ffa67e",
      sceneConfig: { coordinates: { col: 5, row: 1 } },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
      id: "2a53b3a9-4ba7-4e8e-980e-d74bc0a68db3",
      sceneConfig: { coordinates: { col: 6, row: 1 } },
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
      sceneConfig: { coordinates: { row: 1, col: 7 } },
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
      sceneConfig: { coordinates: { row: 1, col: 8 } },
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
      title: "boomALoo01",
      id: "623fe6fd-7c2b-4b47-b808-1e0985cd3ec4",
      sceneConfig: { coordinates: { row: 1, col: 9 } },
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
      title: "log",
      id: "555631be-57ad-4a7e-9cc2-93dbaca824b5",
      sceneConfig: { coordinates: { row: 2, col: 1 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "mug" }],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { character: "kat", face: "happy", characterIndex: 0 },
            ],
          },
          dialogs: [
            '{"kat" : "asdf"}',
            '{"liz2" : "asdgf"}',
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
      title: "pig",
      id: "9e2873f2-fe02-4b39-a6aa-be69f9688c91",
      sceneConfig: { coordinates: { row: 2, col: 3 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            faces: [{ characterIndex: 1, face: "happy", character: "liz2" }],
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
      sceneConfig: { coordinates: { row: 2, col: 4 } },
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
      sceneConfig: { coordinates: { col: 5, row: 2 } },
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
      sceneConfig: { coordinates: { row: 2, col: 9 } },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
      title: "pug",
      id: "74217613-4c3d-45fc-9a6c-f14c64cb230a",
      sceneConfig: { coordinates: { row: 2, col: 10 } },
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
      title: "goatInABoat",
      id: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
      sceneConfig: { coordinates: { col: 1, row: 3 } },
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
      sceneConfig: { coordinates: { row: 3, col: 2 } },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ character: "anna02", face: "happy", characterIndex: 0 }],
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
      sceneConfig: { coordinates: { row: 3, col: 3 } },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ character: "anna02", face: "happy", characterIndex: 0 }],
          },
          dialogs: [
            '{"merida02" : "I see a pin!"}',
            '{"cub" : "We can get the pin!"}',
          ],
        },
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [{ face: "happy", characterIndex: 0, character: "anna02" }],
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
      sceneConfig: { coordinates: { col: 5, row: 3 } },
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
      title: "cap",
      id: "f19edf3b-1ab1-4b23-a394-f92e849d2a4d",
      sceneConfig: { coordinates: { row: 3, col: 6 } },
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
      title: "foxy01",
      id: "4b828107-5be5-4edc-9c49-396396af4149",
      sceneConfig: { coordinates: { row: 3, col: 7 } },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
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
      title: "fan",
      id: "cd5fe3ec-4349-4e69-9000-8d950e2321d2",
      sceneConfig: { coordinates: { row: 3, col: 8 } },
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
      title: "babyTroll01",
      id: "67c3bd4c-d436-46dc-ba00-62d62c03ba87",
      sceneConfig: { coordinates: { row: 3, col: 9 } },
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
      title: "cave",
      id: "1df10ac0-56ef-4bb1-9527-e48ffcb1c20b",
      sceneConfig: { coordinates: { row: 4, col: 2 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [{ name: "mug" }],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
          },
          dialogs: [
            '{"kat" : "asdf"}',
            '{"liz2" : "asdf"}',
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
      title: "bees",
      id: "be455c17-b6c9-4350-b6e0-6b0434ab963f",
      sceneConfig: { coordinates: { col: 2, row: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              { face: "happy", character: "kat", characterIndex: 0 },
            ],
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
      title: "coop",
      id: "7b5ec959-3562-49c4-9ce9-e26ddf66ef41",
      sceneConfig: { coordinates: { row: 5, col: 3 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { character: "kat", characterIndex: 0, face: "happy" },
            ],
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
      title: "waterfall",
      id: "8942420e-74b3-423a-af23-030155903efc",
      sceneConfig: { coordinates: { col: 4, row: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { characterIndex: 0, face: "happy", character: "kat" },
            ],
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
  ],
  questConfig: {
    subQuests: [
      {
        triggers: [{ conditions: [{ currentMission: 0 }], name: "cloud" }],
        missions: [
          {
            recipient: { name: "pig" },
            name: "Feed the pig",
            missionType: "giveItemToPerson",
            item: { name: "fig" },
            rewards: [{ name: "gold", amount: 5 }],
          },
          {
            recipient: { name: "goatInABoat" },
            name: "Feed the goat.",
            missionType: "giveItemToPerson",
            item: { name: "bun" },
            rewards: [{ name: "gold", amount: 5 }],
          },
          {
            recipient: { name: "pinky01" },
            missionType: "giveItemToPerson",
            rewards: [{ amount: 5, name: "gold" }],
            item: { name: "mug" },
            name: "Give Pinky a gift.",
          },
          {
            item: { name: "pin" },
            rewards: [{ name: "gold", amount: 5 }],
            name: "Give a Troll a Gift.",
            recipient: { name: "babyTroll01" },
            missionType: "giveItemToPerson",
          },
        ],
        name: "Meet Your New Best Friend",
        index: 0,
        scenes: [
          {
            sceneTriggers: [],
            name: "castle",
            id: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
          },
          {
            name: "goat01",
            sceneTriggers: [],
            id: "ae0eb93f-d74d-482f-b259-9b5865c1a9fa",
          },
          {
            name: "fig",
            id: "24b9464f-53de-4da0-ba52-ddd604df8e61",
            sceneTriggers: [],
          },
          {
            name: "stump",
            sceneTriggers: [],
            id: "5eecdb96-c253-496b-a181-ba117ef6f16a",
          },
          {
            id: "9e2873f2-fe02-4b39-a6aa-be69f9688c91",
            name: "pig",
            sceneTriggers: [],
          },
        ],
      },
      {
        name: "Win the Rap Battle",
        triggers: [{ name: "cloud", conditions: [{ currentMission: 0 }] }],
        scenes: [
          {
            name: "log",
            id: "555631be-57ad-4a7e-9cc2-93dbaca824b5",
            sceneTriggers: [
              { name: "lock", conditions: [{ currentMission: 0 }] },
              { name: "unlock", conditions: [{ completedMission: 0 }] },
            ],
          },
          {
            id: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
            sceneTriggers: [],
            name: "goatInABoat",
          },
          {
            id: "917b5276-eb79-4711-bb85-b7d3244e0ca8",
            name: "bun",
            sceneTriggers: [],
          },
          {
            id: "c74d66fb-23f8-4d0a-96e7-18a70790d5bd",
            name: "pin",
            sceneTriggers: [
              { name: "lock", conditions: [{ completedMission: 0 }] },
              { conditions: [{ completedMission: 1 }], name: "unlock" },
            ],
          },
          {
            id: "1df10ac0-56ef-4bb1-9527-e48ffcb1c20b",
            sceneTriggers: [
              { conditions: [{ currentMission: 0 }], name: "lock" },
              { conditions: [{ completedMission: 2 }], name: "unlock" },
            ],
            name: "cave",
          },
        ],
      },
      {
        scenes: [
          {
            id: "5b4acf11-ddcd-4db2-acda-51865a23db39",
            sceneTriggers: [
              { name: "lock", conditions: [{ completedMission: 0 }] },
              { conditions: [{ completedMission: 1 }], name: "unlock" },
            ],
            name: "pinky01",
          },
          {
            sceneTriggers: [],
            id: "97b0888c-5246-4933-ad33-752ec1d59e4d",
            name: "dragon",
          },
        ],
        triggers: [
          { "0": "unhide", name: "cloud", conditions: [{ currentMission: 0 }] },
        ],
        id: "xxx",
        name: "Talk to Pinky",
        sceneTriggers: [{ name: "lock", conditions: [{ currentMission: 0 }] }],
      },
      {
        scenes: [
          {
            sceneTriggers: [
              { conditions: [{ currentMission: 0 }], name: "lock" },
              { name: "unlock", conditions: [{ completedMission: 3 }] },
            ],
            name: "cub",
            id: "87c89f27-17c0-4baf-874d-4b4a36ffa67e",
          },
          {
            name: "hog",
            sceneTriggers: [],
            id: "2a53b3a9-4ba7-4e8e-980e-d74bc0a68db3",
          },
          {
            name: "sassafras01Happy",
            id: "f715b6bc-f7bb-4ab8-8dbe-94f2ae56f24f",
            sceneTriggers: [],
          },
          {
            name: "cat01",
            sceneTriggers: [],
            id: "5dcc24ae-53a8-4349-818f-07d312aa366d",
          },
          {
            id: "623fe6fd-7c2b-4b47-b808-1e0985cd3ec4",
            sceneTriggers: [],
            name: "boomALoo01",
          },
        ],
        id: "xxx",
        triggers: [{ conditions: [{ currentMission: 0 }], name: "cloud" }],
        name: "Find the Cub",
        sceneTriggers: [{ name: "lock", conditions: [{ currentMission: 0 }] }],
      },
      {
        triggers: [{ name: "cloud", conditions: [{ currentMission: 0 }] }],
        scenes: [
          {
            id: "4807801b-1c79-4f46-a87a-8b98ebcc1c86",
            sceneTriggers: [],
            name: "katieKooper01",
          },
          {
            id: "f19edf3b-1ab1-4b23-a394-f92e849d2a4d",
            name: "cap",
            sceneTriggers: [],
          },
          {
            name: "foxy01",
            id: "4b828107-5be5-4edc-9c49-396396af4149",
            sceneTriggers: [],
          },
          {
            name: "fan",
            sceneTriggers: [],
            id: "cd5fe3ec-4349-4e69-9000-8d950e2321d2",
          },
          {
            id: "67c3bd4c-d436-46dc-ba00-62d62c03ba87",
            sceneTriggers: [],
            name: "cat_king",
          },
          {
            sceneTriggers: [],
            id: "c2840885-08d7-4b25-b5cd-afbda2b95121",
            name: "brindle01Happy",
          },
          {
            name: "pug",
            id: "74217613-4c3d-45fc-9a6c-f14c64cb230a",
            sceneTriggers: [],
          },
        ],
        index: 0,
        missions: [
          {
            name: "Feed the pig",
            missionType: "giveItemToPerson",
            rewards: [{ amount: 5, name: "gold" }],
            recipient: { name: "pig" },
            item: { name: "fig" },
          },
        ],
        name: "Win the game",
      },
      {
        triggers: [
          { name: "cloud", conditions: [{ currentMission: 0 }] },
          { conditions: [{ currentMission: 0 }], name: "hide" },
          { name: "unhide", conditions: [{ completedMission: 2 }] },
        ],
        missions: [
          {
            rewards: [{ amount: 5, name: "gold" }],
            name: "Feed the pig",
            recipient: { name: "pig" },
            missionType: "giveItemToPerson",
            item: { name: "fig" },
          },
        ],
        scenes: [
          {
            id: "be455c17-b6c9-4350-b6e0-6b0434ab963f",
            name: "bees",
            sceneTriggers: [],
          },
          {
            sceneTriggers: [
              { conditions: [{ currentMission: 0 }], name: "lock" },
            ],
            name: "coop",
            id: "7b5ec959-3562-49c4-9ce9-e26ddf66ef41",
          },
          {
            name: "waterfall",
            sceneTriggers: [],
            id: "8942420e-74b3-423a-af23-030155903efc",
          },
        ],
        name: "new SubQuest",
        index: 0,
      },
    ],
  },
}
export default story9926
