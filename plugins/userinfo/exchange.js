exports.run = {
	   usage: ['exchange', 'buy'],
	   async: async (m, {
	      client,
	      args,
	      command
	   }) => {
	      try {
	         let user = global.db.users[m.sender]
	         let price = ((3 / 100) * user.point).toFixed(0)
	         if (isNaN(args[0])) return client.reply(m.chat, `*Limit harus berupa angka.*`, m)
	         if (user.point >= price * parseInt(args[0])) {
	            user.point -= price * parseInt(args[0])
	            user.limit += parseInt(args[0])
	            return command == 'exchange' ? client.reply(m.chat, `Anda menukar *${Func.simpFormat(Func.formatNumber(price * args[0]))}* poin untuk *${args[0]}* limit.`, m) : client.reply(m.chat, `Anda membeli *${args[0]}* limit dengan *${Func.simpFormat(Func.formatNumber(price * args[0]))}* point`, m)
	         } else {
	            client.reply(m.chat, `*Poin Anda tidak cukup untuk melakukan ${command == 'buy' ? 'purchase' : 'exchanged'} untuk ${args[0]} limit.*`, m)
	         }
	      } catch (e) {
	         client.reply(m.chat, require('util').format(e), m)
	      }
	   },
	   error: false
	}