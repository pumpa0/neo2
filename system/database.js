module.exports = (m) => {
   const isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.users[m.sender]
   if (user) {
   if (!isNumber(user.afk)) user.afk = -1
   if (!('afkReason' in user)) user.afkReason = ''
      if (!('banned' in user)) user.banned = false
      if (!isNumber(user.banTemp)) user.banTemp = 0
      if (!isNumber(user.banTimes)) user.banTimes = 0
      if (!isNumber(user.limit)) user.limit = global.limit
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.lastclaim)) user.lastclaim = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.usebot)) user.usebot = 0
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.spam)) user.spam = 0
      if (!isNumber(user.warning)) user.warning = 0
   } else {
      global.db.users[m.sender] = {
         afk: -1,
         afkReason: '',
         banned: false,
         banTemp: 0,
         banTimes: 0,
         limit: global.limit,
         premium: false,
         lastclaim: 0,
         lastseen: 0,
         usebot: 0,
         hit: 0,
         spam: 0,
         warning: 0
      }
   }

   if (m.isGroup) {
      let group = global.db.groups[m.chat]
      if (group) {
         if (!('autoread' in group)) group.autoread = true
         if (!('antidelete' in group)) group.antidelete = true
         if (!('antilink' in group)) group.antilink = true
         if (!('antivirtex' in group)) group.antivirtex = true
         if (!('games' in group)) group.game = true
         if (!('filter' in group)) group.filter = false
         if (!('left' in group)) group.left = false
         if (!('localonly' in group)) group.localonly = false
         if (!('mute' in group)) group.mute = false
         if (!('member' in group)) group.member = {}
         if (!('text_left' in group)) group.text_left = ''
         if (!('text_welcome' in group)) group.text_welcome = ''
         if (!('welcome' in group)) group.welcome = true
      } else {
         global.db.groups[m.chat] = {
            autoread: true,
            antidelete: true,
            antilink: false,
            antivirtex: false,
            games: true,
            filter: false,
            left: false,
            localonly: false,
            mute: false,
            member: {},
            text_left: '',
            text_welcome: '',
            welcome: true
         }
      }
   }

   let chat = global.db.chats[m.chat]
   if (chat) {
      if (!isNumber(chat.chat)) chat.chat = 0
      if (!isNumber(chat.lastchat)) chat.lastchat = 0
      if (!isNumber(chat.command)) chat.command = 0
   } else {
      global.db.chats[m.chat] = {
         chat: 0,
         lastchat: 0,
         command: 0
      }
   }

   let setting = global.db.setting
   if (setting) {
  	if (!('autodownload' in setting)) setting.autodownload = true
  	if (!('debug' in setting)) setting.debug = false
  	if (!('game' in setting)) setting.games = true
      if (!('chatbot' in setting)) setting.chatbot = true
      if (!('error' in setting)) setting.error = []
      if (!('pluginDisable' in setting)) setting.pluginDisable = []
      if (!('sk_pack' in setting)) setting.sk_pack = 'WhatsApp Bot'
      if (!('sk_author' in setting)) setting.sk_author = 'IG: @terserah_bomat'
      if (!('self' in setting)) setting.self = false
      if (!('mimic' in setting)) setting.mimic = []
      if (!('multiprefix' in setting)) setting.multiprefix = true
      if (!('prefix' in setting)) setting.prefix = ['.', '/', '!', '#']
      if (!('toxic' in setting)) setting.toxic = ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"]
      if (!('online' in setting)) setting.online = true
      if (!('onlyprefix' in setting)) setting.onlyprefix = '+'
      if (!('owners' in setting)) setting.owners = ['6285731855426']
      if (!('msg' in setting)) setting.msg = 'I am a Whatsapp BOT, use a bot in private chat so that bots can respond quickly.'
      if (!('cover' in setting)) setting.cover = 'https://telegra.ph/file/bf9a6987a268545279452.jpg'
      if (!('header' in setting)) setting.header = 'HanBotzX'
      if (!('footer' in setting)) setting.footer = 'HanBotzX'
   } else {
      global.db.setting = {
         autodownload: true,
         chatbot: true,
         debug: false,
         game: true,
         error: [],
         pluginDisable: [],
         sk_pack: 'WhatsApp Bot',
         sk_author: 'IG: @terserah_bomat',
         self: false,
         mimic: [],
         multiprefix: true,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
         online: true,
         onlyprefix: '+',
         owners: ['6285731855426'],
         msg: 'I am a Whatsapp BOT, use a bot in private chat so that bots can respond quickly.',
         cover: 'https://telegra.ph/file/bf9a6987a268545279452.jpg',
         header: 'HanBotzX',
         footer: 'HanBotzX'
         
      }
   }
}