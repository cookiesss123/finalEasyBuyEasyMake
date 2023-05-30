export default {
  methods: {
    numberComma (num) {
      const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
      // 防止有 null 錯誤
      if (typeof num !== 'undefined' && num !== null) {
        return num.toString().replace(comma, ',')
      } else {
        return num
      }
    }
  }
}
