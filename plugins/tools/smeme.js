exports.run = {
   usage: ['smeme'],
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         let exif = global.setting
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'apa kabar'), m)
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
               let img = await client.downloadMediaMessage(q)
               let url = await Func.uploadImage(img)
               let res = `https://api.akuari.my.id/sticker/imageaddtext?text=${text}&link=${url}`
               await client.sendSticker(m.chat, res, m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
               })
            } else client.reply(m.chat, Func.texted('bold', `Only for image!`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `Image not found!`), m)
            if (!/image\/(jpe?g|png)/.test(mime)) return clirnt.reply(m.chat, Func.texted('bold', `Only for image!`), m)
            let img = await q.download()
            let url = await Func.uploadImage(img)
            let res = `https://api.akuari.my.id/sticker/imageaddtext?text=${text}&link=${url}`
            await client.sendSticker(m.chat, res, m, {
               packname: exif.sk_pack,
               author: exif.sk_author
            })
         }
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false
}