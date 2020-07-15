import "@firebase/firestore"

import { Collection, Document, initFirestorter } from "firestorter"

import firebase from "@firebase/app"
import { toJS } from "mobx"

firebase.initializeApp({
  projectId: "happy-reader-4",
})

initFirestorter({ firebase: firebase })

class Map extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
    })
  }
}

const maps = new Collection("maps", {
  DocumentClass: Map,
})

export { maps }
