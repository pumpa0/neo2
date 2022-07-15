exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'DOWNLOADER',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP TOOLS',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'USER INFO',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'UTILITIES',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }, {
         title: 'OWNER TOOLS',
         rowId: `${isPrefix}menutype 5`,
         description: ``
      }]
      let text = '*HanBotz* adalah sistem otomatis WhatsApp (WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data / informasi hanya dengan melalui WhatsApp.\n\n'
      text += '◦ *Website* : https://hanbotz.xyz\n'
      text += '◦ *Group* : https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ\n\n'
      text += 'Jika kamu menemukan bug/error, hubungi *#owner*.'
      await client.sendList(m.chat, '', text, '© 2022 HanBotzX', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}