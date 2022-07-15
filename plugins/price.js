exports.run = {
   usage: ['premium'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Upgrade ke paket premium dengan harga Rp. 5.000 untuk 1.000 Limit, kirim *${isPrefix}owner* jika ingin membeli.`, m)
   },
   error: false,
   cache: true,
   location: __filename
}