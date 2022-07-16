exports.run = {
   usage: ['afk'],
   async: async (m, {
      client,
      text
   }) => {
      try {
         let user = global.users[m.sender]
         user.afk = +new Date
         user.afkReason = text
         let tag = m.sender.split`@` [0]
         return client.reply(m.chat, `›  *@${tag} sedang afk*`, m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   group: true
}