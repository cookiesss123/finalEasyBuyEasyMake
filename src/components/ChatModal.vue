<template>
    <div class="modal right" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down w-100">
            <div class="modal-content scroll-y min-height-100" >
              <div class="modal-header bg-primary rounded-0">
                  <h5 class="modal-title text-white" v-if="uid">
                    <img src="https://plus.unsplash.com/premium_photo-1672192166439-f20d9ec1dbbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" style="height: 40px; width: 40px;" class="rounded-circle me-1" alt="客服大頭貼">
                    甜點食譜一鍵購客服
                  </h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex flex-column bg-secondary" >
                <div v-if="!user.admin">
                  <div v-for="chat in chats" :key="chat" class="">
                  <div v-if="chat.nickName === '甜點食譜一鍵購客服'" class="d-flex  mb-3">
                    <img :src="chat.headshotImg" style="height: 40px; width: 40px;" class="mb-auto rounded-circle me-3" alt="客服大頭貼">
                    <div style="max-width: 90%;">
                      <p class="mb-1">{{ chat.nickName }}</p>
                      <p class="speech-bubble speech-bubble-left bg-white px-3 py-1 d-inline-block rounded-4 mb-0 text-newline">{{ chat.message }}</p>
                      <p class="ms-1 text-muted fs-14">{{ new Date(chat.time).toLocaleDateString() }} {{ new Date(chat.time).getHours() }}:{{ new Date(chat.time).getMinutes() }} </p>
                    </div>
                  </div>
                  <div v-else-if="chat.nickName !== '甜點食譜一鍵購客服'" class="d-flex flex-column">
                    <div class="mb-2 ms-auto d-flex flex-column align-items-end" style="max-width: 90%;">
                      <p class="mb-0 speech-bubble speech-bubble-right bg-primary text-white px-3 py-1 d-inline-block rounded-4 text-newline">{{ chat.message }}</p>
                      <p class="text-muted me-1 fs-14">{{ new Date(chat.time).toLocaleDateString() }} {{ new Date(chat.time).getHours() }}：{{ new Date(chat.time).getMinutes() }} </p>
                    </div>
                  </div>
                  </div>
                </div>
                <div v-else-if="user.admin">
                  <div v-for="(item, index) in chats" :key="index">
                    <a href="#" class="text-decoration-none link-primary d-block border-bottom border-primary py-2 d-flex align-items-center">
                      <p class="mb-0 w-100" @click.prevent="getInfo(index)">
                        {{ index }}
                        <span v-if="item.newChatNum" class="ms-2 badge bg-primary">{{ item.newChatNum }}</span>
                      </p>
                      <button class="btn btn-primary ms-auto" type="button" @click.prevent="openId = ''"><i class="bi bi-x"></i></button>
                    </a>
                    <div v-if="openId === index" class="pt-3">
                      <div v-for="chat in item" :key="chat" class="">
                        <div v-if="chat.nickName !== '甜點食譜一鍵購客服'" class="d-flex mb-3">
                          <img :src="chat.headshotImg" style="height: 40px; width: 40px;" class="mb-auto rounded-circle me-3" alt="顧客大頭貼">
                          <div style="max-width: 90%;">
                            <p class="mb-1">{{ chat.nickName }}</p>
                            <p class="speech-bubble speech-bubble-left bg-white px-3 py-1 d-inline-block rounded-4 mb-0 text-newline">{{ chat.message }}</p>
                            <p class="ms-1 text-muted fs-14">{{ new Date(chat.time).toLocaleDateString() }} {{ new Date(chat.time).getHours() }}:{{ new Date(chat.time).getMinutes() }} </p>
                          </div>
                        </div>
                        <div v-else-if="chat.nickName === '甜點食譜一鍵購客服'" class="d-flex flex-column">
                          <p class="mb-0 ms-auto speech-bubble speech-bubble-right bg-primary text-white px-3 py-1 d-inline-block rounded-4 text-newline" style="max-width: 90%;">{{ chat.message }}</p>
                          <p class="ms-auto me-1 text-muted fs-14">{{ new Date(chat.time).toLocaleDateString() }} {{ new Date(chat.time).getHours() }}:{{ new Date(chat.time).getMinutes() }} </p>
                        </div>
                      </div>
                      <div class="input-group mt-5 mb-3">
                        <input type="text" @keyup.enter="sendCustomerMessage(index)" class="form-control border-primary " placeholder="您有什麼疑問呢？" v-model="message">
                        <button @click="sendCustomerMessage(index)" class="btn btn-outline-primary" type="button"><i class="bi bi-send-fill"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="!user.admin" class="input-group mt-auto">
                  <input type="text" @keyup.enter="sendMessage" class="form-control border-primary " placeholder="您有什麼疑問呢？" v-model="message">
                  <button @click="sendMessage"   class="btn btn-outline-primary" type="button"><i class="bi bi-send-fill"></i></button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/carts'
import numberCommaMixin from '../mixins/numberCommaMixin'
import { db, auth } from '../firebase/db'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, set, onValue } from 'firebase/database'
export default {
  data () {
    return {
      uid: '',
      user: {},
      message: '',
      chats: [],
      newChatNum: 0,
      oneChats: [],
      openId: ''
    }
  },
  mixins: [modalMixin, numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['updateCartNum', 'toastMessage']),
    getMessages () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            if (this.user.admin) {
              const dataRef = ref(db, 'chats/')
              onValue(dataRef, snapshot => {
                this.chats = snapshot.val()
                let newChatNum = 0
                if (!this.chats) {
                  this.newChatNum = 0
                  return
                }
                Object.values(this.chats).forEach(item => {
                  if (item.nickName !== '甜點食譜一鍵購客服') {
                    const reverseArr = [...item].reverse()
                    let index = reverseArr.findIndex((chat) => chat.nickName === '甜點食譜一鍵購客服')
                    if (index === -1) {
                      index = item.length
                    }
                    item.newChatNum = index
                    newChatNum += index
                  } else if (item.nickName === '甜點食譜一鍵購客服') {
                    item.newChatNum = 0
                  }
                })
                this.newChatNum = newChatNum
              })
              return
            }
            const dataRef = ref(db, `chats/${this.uid}/`)
            onValue(dataRef, snapshot => {
              this.chats = snapshot.val()

              if (!this.chats) {
                this.newChatNum = 0
                return
              }
              if (this.chats[this.chats.length - 1].nickName === '甜點食譜一鍵購客服') {
                const reverseArr = [...this.chats].reverse()
                const index = reverseArr.findIndex((item) => item.nickName !== '甜點食譜一鍵購客服')
                this.newChatNum = index
              } else if (this.chats[this.chats.length - 1].nickName !== '甜點食譜一鍵購客服') {
                this.newChatNum = 0
              }
            })
          })
        } else {
          this.uid = null
          this.user = {}
        }
      })
    },
    sendMessage () {
      if (!this.message) {
        return
      }
      let chatsNum = 0
      if (this.chats) {
        chatsNum = this.chats.length
      }
      const reference = ref(db, `chats/${this.uid}/${chatsNum}`)
      set(reference, {
        nickName: this.user.nickName,
        message: this.message,
        headshotImg: this.user.headshotImg,
        time: new Date().getTime()
      })
      this.message = ''
    },
    sendCustomerMessage (uid) {
      if (!this.message) {
        return
      }
      const chatsNum = this.oneChats.length
      const reference = ref(db, `chats/${uid}/${chatsNum}`)
      set(reference, {
        nickName: '甜點食譜一鍵購客服',
        message: this.message,
        headshotImg: 'https://plus.unsplash.com/premium_photo-1672192166439-f20d9ec1dbbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        time: new Date().getTime()
      })
      this.message = ''
    },
    getInfo (uid) {
      this.openId = uid
      const dataRef = ref(db, `chats/${uid}/`)
      onValue(dataRef, snapshot => {
        this.oneChats = snapshot.val()
      })
    }
  },
  mounted () {
    this.getMessages()
  },
  computed: {
    ...mapState(cartStore, ['loadingItem'])
  }
}
</script>
