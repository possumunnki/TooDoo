import {AsyncStorage} from 'react-native'

export function storeTask(task) {
  AsyncStorage.getAllKeys()
  .then(keys => {
    let keyNumber = keys.length
    try {
      AsyncStorage.setItem(String(keyNumber), task)
    } catch(error) {
      console.log('Store: ', error)
    }
  })
}

export function retrieveTasks() {
  let data = []

  AsyncStorage.getAllKeys()
  .then(keys => {
    keys.map(key => {
      AsyncStorage.getItem(key).then((value) => {
        console.log('Key amount: ' + keys.length)
        console.log('Key: ' + key + ', item: ' + value)
        data.push({
          'key': key,
          'item' : JSON.parse(value)
        })
      })
    })
    console.log("TaskStorage, retrieveTasks()", data)
    return data
  })
}


