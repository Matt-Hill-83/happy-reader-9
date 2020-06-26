const story9104 = {
  title: "char and lucy",
  scenes: [
    {
      title: "bunny",
      sceneConfig: {
        worldTitle: "char and lucy",
        coordinates: { row: 3, col: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [
          { name: "dennisTheMenace" },
          { name: "pantherGirl01" },
          { name: "pantherGirl02" },
          { name: "trumpetGirl01" },
          { name: "sweaterGirl01" },
        ],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, character: "liz2", face: "happy" },
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
    },
    {
      title: "stump",
      sceneConfig: {
        worldTitle: "char and lucy",
        coordinates: { row: 3, col: 1 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "cup" }, { name: "pig" }],
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
    },
    {
      title: "pantherGirl01",
      sceneConfig: {
        worldTitle: "char and lucy",
        coordinates: { row: 3, col: 2 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: false,
        items: [{ name: "brindle01Happy" }, { name: "wizard" }],
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
                face: "kat-ponytail.3416645f.png",
              },
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
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy", characterIndex: 1 },
              {
                character: "kat",
                face: "kat-pigtails.22bff545.png",
                characterIndex: 0,
              },
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
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", characterIndex: 1, face: "happy" },
              {
                character: "kat",
                face: "kat-pigtails.22bff545.png",
                characterIndex: 0,
              },
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
        {
          frameConfig: {
            items: [],
            faces: [
              { characterIndex: 1, face: "happy", character: "liz2" },
              { characterIndex: 0, character: "kat", face: "happy" },
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
    },
  ],
  questConfig: { data: "none" },
};
export default story9104;
