import { getDatabase, ref, onValue, set } from "firebase/database";
// var firebase = require('firebase')
const seedData = {
  "products": {
    "-Mk9cZAlxNfc-lga6F6D": {
      "createdBy": "OKUw0qHBAbWkDDqCqdv2SEa8nrw2",
      "productName": "Trainwreck",
      "thcPercentage": "12",
      "imageURL": "https://i.imgur.com/VzSLBpi.jpeg"
    },
    "-Mk9cdV3modIP4XPpZ3q": {
      "createdBy": "5wmuo5izpGahhJpOp6H4CC4yEwo1",
      "productName": "Sour Diesel",
      "thcPercentage": "15",
      "imageURL": "https://i.imgur.com/VzSLBpi.jpeg"

    },
    "-Mk9h_fKiKWo0NpU_1oS": {
      "createdBy": "5wmuo5izpGahhJpOp6H4CC4yEwo1",
      "productName": "Maui Wowie",
      "thcPercentage": "22",
      "imageURL": "https://i.imgur.com/VzSLBpi.jpeg"
    }
  },
  "users": {
    "5wmuo5izpGahhJpOp6H4CC4yEwo1": {
      "displayName": "Reid Sherman",
      "email": "reid.sherman@gmail.com",
      "photoURL": "https://lh3.googleusercontent.com/a-/AOh14GhXUQ5DcQqHe9SWeypzfR8lzrJ-FpynB1RiOhAcVA=s96-c",
      "uid": "5wmuo5izpGahhJpOp6H4CC4yEwo1"
    },
    "72ZPAdbblCeyguqJiWW5DpHbxgC3": {
      "displayName": "Howie Lang Hemp",
      "email": "howie@howielang.com",
      "photoURL": "",
      "uid": "72ZPAdbblCeyguqJiWW5DpHbxgC3"
    },
    "KsAydWU2DWcngWCSxb4NIyGXwxO2": {
      "displayName": "Gene Simmons",
      "email": "asdf@asdf.com",
      "photoURL": "asdf",
      "uid": "KsAydWU2DWcngWCSxb4NIyGXwxO2"
    },
    "OKUw0qHBAbWkDDqCqdv2SEa8nrw2": {
      "displayName": "Reid Sherman",
      "email": "rsherman@purepm.co",
      "photoURL": "https://lh3.googleusercontent.com/a-/AOh14GiZC4GJIdB-hQudPwFBW8KOmlAqb1l-nbZZ6Ns6=s96-c",
      "uid": "OKUw0qHBAbWkDDqCqdv2SEa8nrw2"
    },
    "gZ12q9Y38XVrjq9NsyaHY9g0pCo2": {
      "displayName": "Robert Samson",
      "email": "testt@test.om",
      "photoURL": "test",
      "uid": "gZ12q9Y38XVrjq9NsyaHY9g0pCo2"
    }
  }
}

export default {
  seed() {
    try {
      if (confirm("Re-seed the database?")) {
        const db = getDatabase()
        set(ref(db, "/"), seedData)
        console.log('db', seedData)
      }
    } catch (e) {
      console.error(e)
    }
  }
}