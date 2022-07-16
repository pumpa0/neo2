exports.run = {
   usage: ['botstat', 'stat'],
   async: async (m, {
      client
   }) => {
      try {
         let users = Object.entries(global.db.users).length
         let chats = Object.keys(global.db.chats).filter(v => v.endsWith('.net')).length
         let groups = Object.entries(global.db.groups).length
         let premium = Object.entries(global.db.users).filter(([jid, data]) => data.premium).length
         const stats = {
            users,
            chats,
            groups,
            mimic: (global.db.setting.mimic).length,
            premium,
            uptime: Func.toTime(process.uptime() * 1000)
         }
         const system = global.db.setting
         client.sendMessageModify(m.chat, statistic(stats, system), m, {
            title: '© HanBotzX',
            ads: false,
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/bf9a6987a268545279452.jpg')
         })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   owner: true,
   cache: true,
   location: __filename
}

const statistic = (stats, system) => {
   return `乂  *B O T S T A T*

	◦  ${Func.texted('bold', stats.groups)} Groups Joined
	◦  ${Func.texted('bold', stats.chats)} Personal Chats
	◦  ${Func.texted('bold', stats.users)} Users In Database
	◦  ${Func.texted('bold', stats.mimic)} Mimic Target
	◦  ${Func.texted('bold', stats.premium)} Premium Users

乂  *S Y S T E M*

	◦  ${system.autodownload ? '🟢' : '🔴'}  Auto Download
	◦  ${system.chatbot ? '🟢' : '🔴'}  Chat AI
	◦  ${system.debug ? '🟢' : '🔴'}  Debug Mode
	◦  ${system.online ? '🟢' : '🔴'}  Always Online
	◦  ${system.self ? '🟢' : '🔴'}  Self Mode
	◦  Prefix : ${Func.texted('bold', system.multiprefix ? '( ' + system.prefix.map(v => v).join(' ') + ' )' : '( ' + system.onlyprefix + ' )')}
	◦  Uptime : ${Func.texted('bold', stats.uptime)}

${global.footer}`
}