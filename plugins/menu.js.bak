exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'ALL MENU',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }]
      let text = '*HanBotz* adalah sistem otomatis WhatsApp (WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data / informasi hanya dengan melalui WhatsApp.\n\n'
      text += '◦ *Website* : https://hanbotz.xyz\n'
      text += '◦ *Group* : https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ\n\n'
      text += 'Enjoy✨.'
      await client.sendList(m.chat, '', text, '© 2022 HanBotzX', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}