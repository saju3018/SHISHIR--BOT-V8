module.exports = {
 config: {
 name: "out",
 author: "Anik Islam Sadik",
 role: 2, 
 shortDescription: "Make the bot leave the group",
 category: "admin",
 guide: "{pn}"
 },

 onStart: async function ({ api, event }) {
 const threadID = event.threadID;

 // Check if it's a group chat
 const threadInfo = await api.getThreadInfo(threadID);
 if (!threadInfo.isGroup) {
 return api.sendMessage("❌ This command can only be used in group chats.", threadID);
 }

 await api.sendMessage("👋 -শিশির বস বের করে দিলা খুব কষ্ট পাইলাম ভালো থাইকো ভাবির খেয়াল রাইখো LOVE YOU Boss-☺️🫂👑..", threadID, () => {
 api.removeUserFromGroup(api.getCurrentUserID(), threadID);
 });
 }
};
