const story8054 = {
  title: "-----test-002",
  scenes: [
    {
      title: "dog01",
      sceneConfig: {
        worldTitle: "002",
        coordinates: { row: 1, col: 1 },
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
                face: "kat-happy.9e02afab.png",
                characterIndex: 0,
                character: "kat",
              },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "Nine time six"}',
            '{"liz2" : "is 54 bricks!"}',
            '{"kat" : "Nine time six"}',
            '{"liz2" : "is 54 bricks!"}',
          ],
        },
      ],
    },
  ],
}
export default story8054
