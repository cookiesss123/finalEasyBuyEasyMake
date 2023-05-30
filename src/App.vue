<template>
  <router-view />
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { db, auth } from './firebase/db'
// limitToLast
import { ref, push, set, onValue, remove, update, query, orderByChild } from 'firebase/database'
// onAuthStateChanged 監聽登入
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export default {
  data () {
    return {
      array: [
        {
          username: '大宇哥',
          score: 97
        },
        {
          username: '多多',
          score: 100

        },
        {
          username: '大丸哥',
          score: 99

        },
        {
          username: '大高哥',
          score: 70

        },
        {
          username: '綠茶伯',
          score: 80

        },
        {
          username: '漲價元',
          score: 60

        },
        {
          username: '鴨鴨',
          score: 75

        }
      ],
      sortScoreArr: []
    }
  },
  mounted () { // 等資料都載入 元素也載入了 再載入AOS 有載入先後順序建議放app.vue
    AOS.init()
    // 加入資料
    // this.array.forEach(item => {
    //   this.writeUserData(item.username, item.score)
    // })
    // this.update('-NUqlnCFa6spkaVpYoeS')
  },
  methods: {

    // 寫入資料
    writeUserData (title, content) {
      // 在裡面再加一個 id 沒意義，因為id 不會相同 id 只要放最外面就好
      // 定義資料結構 根目錄 user 子分支 userId 若id 相同 內容不同 會被覆蓋 不會新增
      // const reference = ref(db, 'users/' + userId)
      const reference = ref(db, 'users/')
      // push 自動生成 亂數 id
      const newUserRef = push(reference)

      set(newUserRef, {
        title,
        content
      })
    },

    // 讀取資料 當資料有變動時自動再重抓一次資料，很適合做成像聊天室之類的功能。
    readUserData (userId) {
      // 1. const dataRef = ref(db, 'users/') 取得 users 項下所有資料
      // 2. 取得 user s的特定子分支資料
      const dataRef = ref(db, 'article/')
      // const dataRef = ref(db, 'article/' + userId)
      onValue(dataRef, snapshot => {
        const data = snapshot.val()
        console.log(data, '讀取的資料')
      })
      // 只讀取一次數據的寫法： 不能用因為會從本地讀取!!!
      // 1. 加入 onlyOnce: true 注意：這會從本地取得資料
      // onValue(dataRef, snapshot => {
      //   const data = snapshot.val()
      //   console.log(data)
      // }, {
      //   onlyOnce: true
      // })
      // 2.從伺服器取得
      //       import { getDatabase, ref, get, child } from "firebase/database";
      // const db = getDatabase();
      // const dbRef = ref(getDatabase());

      // get(child(dbRef, 'users/')).then((snapshot) => {
      //   if(snapshot.exists()) {
      //     console.log(snapshot.val());
      //   } else {
      //     console.log('沒有資料');
      //   }
      //   }).catch((error) => {
      //     console.error(error);
      //   });

      //
    },
    // 用 forEach 遍歷多個資料
    getData () {
      const dataRef = ref(db, 'article/')
      onValue(dataRef, snapshot => {
        snapshot.forEach(childSnapshot => {
          // key 是取得物件屬性值
          const childKey = childSnapshot.key
          // val 是取得物件value值
          const childData = childSnapshot.val()
          console.log(childKey, childData, '有什麼差別')
        })
      }, {
        onlyOnce: true
      })
    },
    // 更新資料 用新增資料去改的 如過原本的方法不能用再用這個
    // updateData (userId, name, email, imageUrl) {
    //   const reference = ref(db, 'users/' + userId)
    //   // push 自動生成 亂數 id

    //   set(reference, {
    //     username: name,
    //     email,
    //     profile_picture: imageUrl
    //   })
    // },
    // 刪除資料
    removeData (userId) {
      remove(ref(db, `users/${userId}`))
    },
    // 更新
    update (userId) {
      // 建立一組亂數序號
      // const newKey = push(child(ref(db), 'users')).key

      // 更新資料
      // update(ref(db), {
      //   ['users/' + userId]: {
      //     username: '可瑜妹',
      //     email: 'cute@gmail.com',
      //     profile_picture: 'imageUrl'
      //   }
      // })

      // 更新子層資料寫法
      update(ref(db), {
        ['users/' + `${userId}/` + 'score']: {
          english: 100,
          math: 99,
          chinese: 80
        }
      })
    },
    // 數值小到大
    order () {
      // , limitToLast(10)
      const dbRef = ref(db, 'users/')
      const sortedRef = query(dbRef, orderByChild('score'))
      // 更新畫面
      onValue(sortedRef, (snapshot) => {
        this.sortScoreArr = []
        snapshot.forEach(item => {
          console.log(item.key + ' ' + item.val().score, '排序結果')
          const obj = {
            username: item.val().username,
            score: item.val().score
          }
          this.sortScoreArr.push({
            [item.key]: obj
          })
        })
        console.log(this.sortScoreArr, '結果')
      })
    },
    // 註冊 看官網寫的 密碼至少要 6 字
    createUser (email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user, '使用者')
          // 把註冊的使用者寫入 資料庫
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log('錯誤', errorCode, errorMessage)
          // ..
        })
    },
    // 註冊 筆記寫的
    async signUp  () {
      const email = 'xxxx@example.com'
      const password = 'ooooxxxx'
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const loginUser = userCredential.user
        console.log(loginUser, '取得user 資料')
      } catch (e) {
        alert(e.message, '錯誤')
      }
    },
    // 登入
    signin (email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user, '登入結果')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage, '錯誤')
        })
    },
    // 登入 筆記寫的
    async login () {
      const email = 'xxxx@example.com'
      const password = 'ooooxxxx'
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const loginUser = userCredential.user
        console.log(loginUser, '登入結果')
      } catch (e) {
        alert(e.message)
      }
    },
    checkLogin () {
      // onAuthStateChanged 監聽使用者是否登入
      // 建議放在 mounted 因為這會隨時監聽使用者登入
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid
          console.log(uid, '使用者已登入取得 uid')
          // ...
        } else {
          // User is signed out
          // ...
          console.log('並未登入')
        }
      })
    }
    // 還沒學會 排序、登入註冊驗證

    // 才發現上面幾個函式的 + 是合併字串的意思...
  }
}
</script>

<style lang="scss">
  body{
      font-family: 'Noto Sans TC', sans-serif;
      color: #493A25;
  }
  /* 更改 Select 组件的背景颜色和文本颜色 */
.form-select:hover {
  background-color: #FBF8F3;
}

select:focus > option:checked {
    background: #C0AB8E !important;
}

select:focus > option:hover {
  background-color: #C0AB8E !important;
}

</style>
