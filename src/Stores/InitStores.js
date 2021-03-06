import "@firebase/firestore"

import { Collection, Document, initFirestorter } from "firestorter"

import firebase from "@firebase/app"

firebase.initializeApp({
  projectId: "troll-need-gold-02-staging",
})

initFirestorter({ firebase: firebase })

class Map extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
    })
  }
}

const maps = new Collection("quests", {
  // const maps = new Collection("maps", {
  DocumentClass: Map,
})
class Quest extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
    })
  }
}

const quests = new Collection("quests", {
  DocumentClass: Quest,
})

class Book extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
    })
  }
}

const books = new Collection("books", {
  DocumentClass: Book,
})

class GameConfig extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
    })
  }
}

const gameConfig = new Collection("gameConfig", {
  DocumentClass: GameConfig,
})

// quests is a duplicate of maps used for transfering items to a new collection
export { maps, books, gameConfig, quests }
