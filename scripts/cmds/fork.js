module.exports = {
  config: {
    name: "fork",
    aliases: ["repo", "source"],
    version: "2.0",
    author: "Anik Islam Sadik",
    countDown: 3,
    role: 0,
    longDescription: "Returns the link to the official repository.",
    category: "system",
    guide: { en: "{pn}" }
  },

  onStart: async function({ message }) {
    const text = `╭━━━ 〈 𝘼𝙔-𝙈𝘼-𝐁𝐎𝐓-𝐕8 〉 ━━━╮
        
✧ 𝐒𝐭𝐚𝐭𝐮𝐬  ➪ 🟢 𝐀𝐜𝐭𝐢𝐯𝐞 & 𝐒𝐭𝐚𝐛𝐥𝐞
✧ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ➪ 👑 𝐀𝐡𝐦𝐞𝐃’𝐬 𝐒𝐇𝐈'𝐒𝐇𝐈𝐑 
✧ 𝐆𝐢𝐭𝐇𝐮𝐛  ➪ 🔗 -)শিশির বসের প্যান্টের নিচে আসে  চুষে দাও আর fork নিয়ে যাও🙂🐸

╰━━━ 〈 𝐊𝐞𝐞𝐩 𝐒𝐮𝐩𝐩𝐨𝐫𝐭𝐢𝐧𝐠 ❤️ 〉 ━━━╯`;
    
    await message.reply(text);
  }
};
