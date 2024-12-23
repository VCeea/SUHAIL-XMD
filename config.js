const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134909039";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_28_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICA3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUkk1YVBZY1F6dUJDT2trcnFLZFpyNmpmdE1zU3o5dXRwbUEydmtXS0Voaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjJvRFJSQjJSU3F2U2xmaEpBSnMyQVwiLFxuICBcInBob25lSWRcIjogXCI2Njg3YTA3NC0yN2EwLTQyMTItOTVjOS05ZjQ3MzY1MzJkN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgNzQsXG4gICAgICAyMCxcbiAgICAgIDEwOSxcbiAgICAgIDcsXG4gICAgICAxNTksXG4gICAgICAxMDAsXG4gICAgICAxOTYsXG4gICAgICAyMTksXG4gICAgICAyMDEsXG4gICAgICAyNyxcbiAgICAgIDE5NSxcbiAgICAgIDUyLFxuICAgICAgMTM1LFxuICAgICAgMjIxLFxuICAgICAgMjI1LFxuICAgICAgOTksXG4gICAgICAyMTAsXG4gICAgICA3NSxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAyNDAsXG4gICAgICAzMyxcbiAgICAgIDE5MCxcbiAgICAgIDg2LFxuICAgICAgMTU5LFxuICAgICAgMTUxLFxuICAgICAgMTkyLFxuICAgICAgMjQ4LFxuICAgICAgMSxcbiAgICAgIDIzMCxcbiAgICAgIDE2MixcbiAgICAgIDE0NSxcbiAgICAgIDM5LFxuICAgICAgMTIzLFxuICAgICAgMTEsXG4gICAgICAxNjYsXG4gICAgICAxNjUsXG4gICAgICAyNDYsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQ1Y0V0hTV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4OTg2MjE0NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCShpzwk4qIW/CdlIjwnZSz8J2UpvCdlKld8JOKieKAosaUX8Ki0ZTRlOKAouKAp+KCisuaLsqLzrnJvs+F1oYuy5rigorigKfjgJDwk4aj44CRXCIsXG4gICAgXCJsaWRcIjogXCIyMzcyNTAyNTIxNDQ4Njc6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0xGLzlnQkVPYmRqcnNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkL2hxeHVPR3ZUSGxXQld2YnVXbkMxSEJDQWJYRlc3RGdpNEoxck5TZzNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdSZzJiOXRqQWdqb1NGTGtRN09zdHVLUzR0ZXVsWXFxV0xtMUR6RDNselRDRTRqZEMzMkx0bmhubjhDcUtiWkNoVEFiNnJ6VDI3UlNiU0p5dTY2ekN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndwbHR1Z0VSdlFJVU1rankwZTRPUEtkNmdNSHl6NUJPZFhzUWs0citNT2xGT25YaWpDZVgybU45Q0RNUGZ4N0dJalliU0RyUzM2U0ZiUUpmRVphMEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxODk4NjIxNDU6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTg2MDkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHZmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEdmYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5b0J0UnlZRWRId0o5bk9ZWnF5b0lNMVpuVDZ1VmNUZUFISTAwVDlEdXowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1NTA3NDQ2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAwNjUxOTA1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "〲᭙υяα°🧸⃟༑⌁ XMD",
  ownername:process.env.OWNER_NAME|| "〲ϦΛϦᵞ⋆♡⋆᭙υяα°🧸⃟༑⌁",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "〲ϦΛϦᵞ⋆♡⋆᭙υяα°🧸⃟༑⌁"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
