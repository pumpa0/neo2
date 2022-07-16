exports.run = {
   usage: ['claim'],
   async: async (m, {
      client
   }) => {
      let user = global.users[m.sender]
      let timeClaim = 3600000
      let claimed = new Date(user.lastclaim + timeClaim)
      let timeout = claimed - new Date()
      if (new Date - user.lastclaim > timeClaim) {
         client.reply(m.chat, Func.texted('bold', `Anda mendapatkan 100 poin dan 5 limit.`), m)
         user.point += 100
         user.limit += 5
         user.lastclaim = new Date() * 1
      } else {
         client.reply(m.chat, `*Anda sudah mengklaim, Anda dapat mengklaimnya lagi dalam satu jam berikutnya.*\n\n*Timeout : [ ${Func.toTime(timeout)} ]*`, m)
      }
   },
   error: false
}