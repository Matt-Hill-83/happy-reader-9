const story9926 = {
  title: "-------118 - working - new pattern",
  scenes: [
    {
      title: "barn",
      id: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
      sceneConfig: { coordinates: { col: 1, row: 0 } },
      frames: [
        {
          frameConfig: {
            critters1: [
              {
                name: "empty",
                sceneId: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
              },
            ],
            critters2: [
              {
                name: "elsa02",
                sceneId: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
              },
              {
                name: "merida02",
                sceneId: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
              },
              {
                name: "angus01",
                sceneId: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
              },
            ],
          },
          dialogs: [
            '{"elsa02" : "We need to go to the elfs, to help them find the ring of Anadakar!"}',
            '{"merida02" : "Who will take care of angus?"}',
            '{"angus01" : "angus: bark bark"}',
          ],
        },
        {
          frameConfig: {
            critters1: [
              { sceneId: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0", name: "kat" },
              { name: "liz2", sceneId: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0" },
            ],
            critters2: [{ name: "empty" }],
            faces: [
              { face: "happy", characterIndex: 1, character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
            ],
          },
          dialogs: [
            '{"kat" : "I am kat"}',
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
              { characterIndex: 0, face: "happy", character: "kat" },
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
              { face: "happy", character: "liz2", characterIndex: 1 },
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
      sceneConfig: { coordinates: { row: 1, col: 1 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "liz2" }],
            critters2: [
              { name: "elsa02" },
              { name: "angus01" },
              {
                name: "note01",
                sceneId: "ae0eb93f-d74d-482f-b259-9b5865c1a9fa",
              },
            ],
            faces: [{ characterIndex: 1, character: "liz2", face: "happy" }],
          },
          dialogs: [
            '{"elsa02" : "Liz, can you take Angus?"}',
            '{"liz2" : "Ok."}',
            '{"elsa02" : "one thing."}',
            '{"liz2" : "what?"}',
            '{"elsa02" : "Do not lose the puppy!"}',
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
          frameConfig: {
            critters2: [
              {
                name: "anna02",
                sceneId: "24b9464f-53de-4da0-ba52-ddd604df8e61",
              },
              { name: "angus01" },
            ],
          },
          dialogs: [
            '{"anna02" : "We got the fig!"}',
            '{"anna02" : "Now we need to find the pig!"}',
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
            critters2: [
              { name: "angus01" },
              {
                name: "spaceShip01",
                sceneId: "5eecdb96-c253-496b-a181-ba117ef6f16a",
              },
            ],
            faces: [{ characterIndex: 1, character: "liz2", face: "happy" }],
          },
          dialogs: [
            '{"liz2" : "oh look, a dog bed."}',
            '{"angus01" : "Ruff Ruff"}',
            '{"liz2" : "Angus, you can sleep here."}',
            '{"angus01" : "Bark bark"}',
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
      title: "cat01",
      id: "5dcc24ae-53a8-4349-818f-07d312aa366d",
      sceneConfig: { coordinates: { row: 1, col: 8 } },
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
      title: "boomALoo01",
      id: "623fe6fd-7c2b-4b47-b808-1e0985cd3ec4",
      sceneConfig: { coordinates: { col: 9, row: 1 } },
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
            critters2: [
              { sceneId: "555631be-57ad-4a7e-9cc2-93dbaca824b5", name: "mug" },
            ],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { character: "kat", characterIndex: 0, face: "happy" },
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
            faces: [{ face: "happy", character: "liz2", characterIndex: 1 }],
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
      sceneConfig: { coordinates: { col: 4, row: 2 } },
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
      title: "chick01",
      id: "c2840885-08d7-4b25-b5cd-afbda2b95121",
      sceneConfig: { coordinates: { row: 2, col: 9 } },
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
      title: "castle",
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
          frameConfig: {
            critters1: [
              {
                sceneId: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
                id: "fef5e6de-6699-4ed9-bc8e-51deef2be9ee",
                name: "ringOfZandar01",
              },
            ],
            critters2: [
              { name: "merida02" },
              { name: "cub", sceneId: "70aa676a-b748-4a47-9b63-0ef8a1888f30" },
            ],
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
      sceneConfig: { coordinates: { col: 3, row: 3 } },
      frames: [
        {
          frameConfig: {
            critters2: [{ name: "merida02" }, { name: "cub" }],
            faces: [{ characterIndex: 0, face: "happy", character: "anna02" }],
          },
          dialogs: [
            '{"merida02" : "I see a pin!"}',
            '{"cub" : "We can get the pin!"}',
          ],
        },
        {
          frameConfig: {
            critters2: [{ name: "anna02" }, { name: "merida02" }],
            faces: [{ face: "happy", character: "anna02", characterIndex: 0 }],
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
      title: "cap",
      id: "f19edf3b-1ab1-4b23-a394-f92e849d2a4d",
      sceneConfig: { coordinates: { col: 6, row: 3 } },
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
      sceneConfig: { coordinates: { col: 9, row: 3 } },
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
      title: "cave",
      id: "1df10ac0-56ef-4bb1-9527-e48ffcb1c20b",
      sceneConfig: { coordinates: { col: 2, row: 4 } },
      frames: [
        {
          frameConfig: {
            critters1: [{ name: "kat" }, { name: "liz2" }],
            critters2: [
              { name: "mug" },
              {
                name: "troll01",
                id: "e2266554-e218-4c05-b634-8fbe48afa4a6",
                sceneId: "1df10ac0-56ef-4bb1-9527-e48ffcb1c20b",
              },
            ],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
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
      title: "zita01",
      id: "600cbfc1-79dc-45a2-82d5-170df0bc311c",
      sceneConfig: { coordinates: { row: 4, col: 6 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { face: "happy", characterIndex: 0, character: "kat" },
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
      title: "bees",
      id: "be455c17-b6c9-4350-b6e0-6b0434ab963f",
      sceneConfig: { coordinates: { col: 2, row: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, character: "kat", face: "happy" },
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
      title: "balloons01",
      id: "7b5ec959-3562-49c4-9ce9-e26ddf66ef41",
      sceneConfig: { coordinates: { col: 3, row: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { face: "happy", character: "liz2", characterIndex: 1 },
              { face: "happy", characterIndex: 0, character: "kat" },
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
      title: "angus01",
      id: "8942420e-74b3-423a-af23-030155903efc",
      sceneConfig: { coordinates: { col: 4, row: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
              { character: "kat", face: "happy", characterIndex: 0 },
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
      title: "angusBalloon01",
      id: "c757d3ee-7f1e-4024-a7e1-312bd488b7b5",
      sceneConfig: { coordinates: { row: 5, col: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              { characterIndex: 0, character: "kat", face: "happy" },
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
      title: "bunny",
      id: "9b03e075-6880-4434-a29d-728dcc4a10d8",
      sceneConfig: { coordinates: { col: 6, row: 5 } },
      frames: [
        {
          frameConfig: {
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
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
    missions: [
      {
        rewards: [{ name: "gold", amount: 5 }],
        name: "Feed the pig",
        recipient: { name: "pig" },
        item: { name: "fig" },
      },
      {
        recipient: { name: "goatInABoat" },
        item: { name: "bun" },
        name: "Feed the goat.",
        rewards: [{ name: "gold", amount: 5 }],
      },
      {
        recipient: { name: "pinky01" },
        item: { name: "mug" },
        rewards: [{ name: "gold", amount: 5 }],
        name: "Give Pinky a gift.",
      },
      {
        name: "Give a Troll a Gift.",
        recipient: { name: "babyTroll01" },
        item: { name: "pin" },
        rewards: [{ amount: 5, name: "gold" }],
      },
    ],
    subQuests: [
      {
        missions: [
          {
            "2": { value: { name: "elsa02" } },
            item: { id: "24b9464f-53de-4da0-ba52-ddd604df8e61", name: "fig" },
            missionType: "giveItemToPerson",
            rewards: [{ name: "gold", amount: 5 }],
            recipient: {
              name: "pig",
              id: "9e2873f2-fe02-4b39-a6aa-be69f9688c91",
            },
            name: "feed the cute pig",
          },
          {
            name: "Feed the goat",
            id: "3c459edf-2a57-484d-bcc5-828d798b6503",
            recipient: {
              name: "goatInABoat",
              id: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
            },
            item: { id: "917b5276-eb79-4711-bb85-b7d3244e0ca8", name: "bun" },
            rewards: [{ name: "gold", amount: 5 }],
            missionType: "giveItemToPerson",
          },
          {
            recipient: {
              name: "dragon",
              id: "97b0888c-5246-4933-ad33-752ec1d59e4d",
            },
            item: { name: "spaceShip01" },
            name: "give the spaceship to the dragon",
            missionType: "giveItemToPerson",
            id: "7b9a138c-8202-454c-b89e-9525faf00c96",
            rewards: [{ amount: 5, name: "gold" }],
          },
          {
            id: "b95c5f57-4241-46dd-9125-4ae518224ca7",
            recipient: {
              name: "troll01",
              id: "e2266554-e218-4c05-b634-8fbe48afa4a6",
              sceneId: "1df10ac0-56ef-4bb1-9527-e48ffcb1c20b",
            },
            name: "bring the ring to the troll",
            missionType: "giveItemToPerson",
            item: {
              id: "fef5e6de-6699-4ed9-bc8e-51deef2be9ee",
              name: "ringOfZandar01",
              sceneId: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
            },
            rewards: [{ amount: 5, name: "gold" }],
          },
          {
            recipient: {
              name: "zita01",
              id: "600cbfc1-79dc-45a2-82d5-170df0bc311c",
            },
            name: "the the dog a balloon",
            item: {
              id: "c757d3ee-7f1e-4024-a7e1-312bd488b7b5",
              name: "angusBalloon01",
            },
            id: "ee4e0f35-93f0-48d0-bf53-b52b25e4698b",
            missionType: "giveItemToPerson",
            rewards: [{ name: "gold", amount: 5 }],
          },
          {
            rewards: [{ amount: 5, name: "gold" }],
            id: "2b228f61-83b6-4404-bbe0-1b2f3c2c82e6",
            missionType: "giveItemToPerson",
            recipient: {
              id: "67c3bd4c-d436-46dc-ba00-62d62c03ba87",
              name: "babyTroll01",
            },
            item: { name: "pin", id: "c74d66fb-23f8-4d0a-96e7-18a70790d5bd" },
            name: "help the baby troll",
          },
          {
            item: {
              name: "chick01",
              id: "c2840885-08d7-4b25-b5cd-afbda2b95121",
            },
            missionType: "giveItemToPerson",
            recipient: {
              id: "74217613-4c3d-45fc-9a6c-f14c64cb230a",
              name: "castle",
            },
            name: "take the chick to the castle",
            id: "36fbd367-f7f4-4261-a93c-fdfb4e825826",
            rewards: [{ amount: 5, name: "gold" }],
          },
        ],
        name: "my first subQuest",
        index: 0,
        scenes: [
          {
            name: "castle",
            sceneTriggers: [],
            id: "2b7b601b-8ecd-40b0-9dd8-8b7bc0eb0fb0",
            largeImage: true,
          },
          {
            id: "ae0eb93f-d74d-482f-b259-9b5865c1a9fa",
            name: "goat01",
            sceneTriggers: [],
          },
          {
            name: "fig",
            sceneTriggers: [],
            id: "24b9464f-53de-4da0-ba52-ddd604df8e61",
          },
          {
            id: "5eecdb96-c253-496b-a181-ba117ef6f16a",
            sceneTriggers: [],
            name: "stump",
          },
          {
            name: "pig",
            id: "9e2873f2-fe02-4b39-a6aa-be69f9688c91",
            sceneTriggers: [
              {
                name: "unlock",
                conditions: [{ completedMission: 2 }],
                id: "153bb40d-d7ea-47f1-8dc0-c054a6dd617d",
              },
            ],
          },
        ],
        triggers: [
          { conditions: [{ currentMission: 0 }], name: "cloud" },
          {
            conditions: [{ completedMission: 2 }],
            id: "dbd873f3-8be9-4abb-b0f5-1c5ea4f71c0d",
            name: "lock",
          },
        ],
      },
      {
        scenes: [
          {
            sceneTriggers: [
              {
                name: "lock",
                conditions: [{ currentMission: 0 }],
                id: "965c654c-f055-4f54-b049-249f3ba6d2ef",
              },
              {
                id: "6d68273d-bb1f-48df-a435-c13a80ce65b8",
                conditions: [{ completedMission: 0 }],
                name: "unlock",
              },
              {
                id: "b969e1de-1093-4bc4-8dd8-31a25a6ad6ce",
                name: "lock",
                conditions: [{ completedMission: 2 }],
              },
            ],
            name: "log",
            id: "555631be-57ad-4a7e-9cc2-93dbaca824b5",
          },
          {
            id: "70aa676a-b748-4a47-9b63-0ef8a1888f30",
            sceneTriggers: [
              {
                name: "lock",
                conditions: [{ completedMission: 2 }],
                id: "8ecb3e28-eba4-4680-9e2e-ce5d9efd79d1",
              },
            ],
            name: "goatInABoat",
          },
          {
            id: "917b5276-eb79-4711-bb85-b7d3244e0ca8",
            sceneTriggers: [],
            name: "bun",
          },
          {
            id: "c74d66fb-23f8-4d0a-96e7-18a70790d5bd",
            sceneTriggers: [
              {
                id: "816840b6-3d23-4102-9043-35c2ab918c90",
                conditions: [{ completedMission: 0 }],
                name: "lock",
              },
              {
                conditions: [{ completedMission: 1 }],
                name: "unlock",
                id: "41b5e912-41c3-49d8-af48-e90c7a0f7d56",
              },
            ],
            name: "pin",
          },
          {
            id: "1df10ac0-56ef-4bb1-9527-e48ffcb1c20b",
            sceneTriggers: [
              {
                name: "lock",
                conditions: [{ currentMission: 0 }, { completedMission: 0 }],
                id: "4aec9370-437b-467c-a80c-61c4bd26c788",
              },
              {
                name: "unlock",
                id: "b552ef65-e6b0-4359-a95b-7e7237fb4b64",
                conditions: [{ completedMission: 2 }],
              },
            ],
            name: "cave",
          },
        ],
        triggers: [
          {
            conditions: [{ currentMission: 0 }],
            name: "cloud",
            id: "b8785042-96e2-4954-b170-5f40e31e167e",
          },
          {
            conditions: [{ completedMission: 0 }],
            name: "cloud",
            id: "a5ea44ea-724a-4fcf-8a97-48daed6e81c6",
          },
        ],
        missions: [],
        index: 0,
        name: "SQ2",
      },
      {
        name: "find the dragon",
        scenes: [
          {
            id: "5b4acf11-ddcd-4db2-acda-51865a23db39",
            sceneTriggers: [
              {
                id: "fcb9949e-f85e-409a-9dbf-5fb2a8eed540",
                name: "lock",
                conditions: [{ currentMission: 0 }, { currentMission: 1 }],
              },
              {
                conditions: [{ completedMission: 1 }],
                name: "unlock",
                id: "86c7bf18-d30c-4b37-b247-62340292de0d",
              },
              {
                name: "cloud",
                conditions: [{ currentMission: 1 }],
                id: "943907f7-7234-4b4a-8510-17fc13ba3e91",
              },
            ],
            name: "pinky01",
          },
          {
            sceneTriggers: [],
            id: "97b0888c-5246-4933-ad33-752ec1d59e4d",
            name: "dragon",
          },
          {
            name: "waterfall",
            id: "8942420e-74b3-423a-af23-030155903efc",
            sceneTriggers: [],
          },
        ],
        triggers: [
          {
            name: "cloud",
            conditions: [{ currentMission: 0 }],
            id: "3f1bdef4-c70b-44da-a199-f19e20dfb4a3",
          },
        ],
        index: 0,
        missions: [],
      },
      {
        name: "meet the cub",
        triggers: [
          {
            name: "cloud",
            id: "34459125-cc40-4796-8d99-b165f4d83deb",
            conditions: [{ currentMission: 0 }],
          },
          {
            conditions: [{ completedMission: 0 }],
            id: "ab20041a-6267-482f-9c00-4ebfdb62f747",
            name: "cloud",
          },
          {
            conditions: [{ completedMission: 2 }],
            name: "hide",
            id: "774066d7-bac6-4958-9728-ce31de71431f",
          },
        ],
        index: 0,
        scenes: [
          {
            name: "cub",
            sceneTriggers: [
              {
                id: "42cfa0fa-d45d-43cd-882d-68022338dbd8",
                name: "lock",
                conditions: [{ completedMission: 2 }],
              },
            ],
            id: "87c89f27-17c0-4baf-874d-4b4a36ffa67e",
          },
          {
            id: "2a53b3a9-4ba7-4e8e-980e-d74bc0a68db3",
            name: "hog",
            sceneTriggers: [],
          },
          {
            sceneTriggers: [],
            id: "f715b6bc-f7bb-4ab8-8dbe-94f2ae56f24f",
            name: "sassafras01Happy",
          },
          {
            id: "5dcc24ae-53a8-4349-818f-07d312aa366d",
            sceneTriggers: [],
            name: "cat01",
          },
          {
            sceneTriggers: [],
            id: "623fe6fd-7c2b-4b47-b808-1e0985cd3ec4",
            name: "boomALoo01",
          },
        ],
        missions: [],
      },
      {
        scenes: [
          {
            largeImage: false,
            name: "bees",
            id: "be455c17-b6c9-4350-b6e0-6b0434ab963f",
            sceneTriggers: [
              {
                name: "cloud",
                id: "6f0598bb-f334-4cd1-8795-46e854a761a2",
                conditions: [{ currentMission: 0 }],
              },
              {
                name: "cloud",
                id: "81ef82ff-2925-4077-9320-a59be789b492",
                conditions: [{ currentMission: 0 }],
              },
            ],
          },
          {
            id: "7b5ec959-3562-49c4-9ce9-e26ddf66ef41",
            sceneTriggers: [],
            name: "coop",
          },
          {
            sceneTriggers: [],
            name: "waterfall",
            id: "8942420e-74b3-423a-af23-030155903efc",
          },
          {
            id: "c757d3ee-7f1e-4024-a7e1-312bd488b7b5",
            sceneTriggers: [],
            name: "angusBalloon01",
          },
          {
            name: "bunny",
            sceneTriggers: [],
            id: "9b03e075-6880-4434-a29d-728dcc4a10d8",
          },
          {
            name: "log",
            id: "600cbfc1-79dc-45a2-82d5-170df0bc311c",
            sceneTriggers: [],
          },
        ],
        name: "troll cave",
        missions: [],
        triggers: [
          {
            conditions: [{ currentMission: 0 }, { completedMission: 0 }],
            id: "7138cc94-0f4a-4fb9-9a16-dd4fc63e6afd",
            name: "cloud",
          },
          {
            name: "hide",
            id: "56946c13-e87d-486b-a7d0-1a5c34c3cfa5",
            conditions: [{ currentMission: 0 }, { completedMission: 0 }],
          },
          {
            conditions: [{ completedMission: 3 }],
            name: "unhide",
            id: "38998f8b-2058-431c-ab15-5365e9f78e75",
          },
        ],
        index: 0,
      },
      {
        triggers: [
          {
            name: "cloud",
            id: "4a403735-629d-4ce9-8071-d66a556ac682",
            conditions: [{ currentMission: 0 }, { completedScene: 0 }],
          },
          {
            conditions: [{ completedMission: 2 }],
            id: "32470221-9686-43dc-a249-1647e63fc1c0",
            name: "hide",
          },
          {
            id: "7b001840-30ba-4188-85c6-87bf57a8cc81",
            name: "unhide",
            conditions: [{ completedMission: 4 }],
          },
        ],
        name: "baby troll",
        index: 0,
        scenes: [
          {
            sceneTriggers: [
              {
                name: "lock",
                conditions: [{ completedMission: 2 }],
                id: "667ef0c0-4673-495f-a52b-760b870cff3b",
              },
            ],
            largeImage: false,
            id: "4807801b-1c79-4f46-a87a-8b98ebcc1c86",
            name: "katieKooper01",
          },
          {
            id: "f19edf3b-1ab1-4b23-a394-f92e849d2a4d",
            name: "cap",
            sceneTriggers: [],
          },
          {
            sceneTriggers: [],
            id: "4b828107-5be5-4edc-9c49-396396af4149",
            name: "foxy01",
          },
          {
            name: "fan",
            id: "cd5fe3ec-4349-4e69-9000-8d950e2321d2",
            sceneTriggers: [],
          },
          {
            name: "babyTroll01",
            sceneTriggers: [],
            id: "67c3bd4c-d436-46dc-ba00-62d62c03ba87",
          },
          {
            name: "brindle01Happy",
            sceneTriggers: [],
            id: "c2840885-08d7-4b25-b5cd-afbda2b95121",
          },
        ],
        missions: [],
      },
      {
        missions: [
          {
            recipient: { name: "pig" },
            name: "Feed the pig",
            item: { name: "fig" },
            missionType: "giveItemToPerson",
            rewards: [{ name: "gold", amount: 5 }],
          },
        ],
        index: 0,
        scenes: [
          {
            id: "c2840885-08d7-4b25-b5cd-afbda2b95121",
            name: "chick01",
            sceneTriggers: [],
          },
          {
            id: "74217613-4c3d-45fc-9a6c-f14c64cb230a",
            name: "castle",
            sceneTriggers: [
              {
                conditions: [{ currentMission: 0 }, { completedMission: 0 }],
                name: "uncloud",
                id: "7dd9203a-2d28-4afe-8a5d-456b81c61567",
              },
            ],
          },
        ],
        triggers: [
          {
            conditions: [{ currentMission: 0 }, { completedMission: 0 }],
            name: "cloud",
            id: "1c29033c-3f6a-4623-9d59-9f35e5d36d75",
          },
          {
            conditions: [{ completedMission: 2 }],
            id: "be203d65-05f0-4b3b-a56c-4598068b84ee",
            name: "hide",
          },
          {
            name: "unhide",
            conditions: [{ completedMission: 5 }],
            id: "5b9777b4-4e0f-4f6a-af33-017eafe40ab4",
          },
        ],
        name: "go to the castle",
      },
    ],
  },
}
export default story9926
