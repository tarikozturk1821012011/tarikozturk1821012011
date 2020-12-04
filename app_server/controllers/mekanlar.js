var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
 res.render('mekanlar-liste',{
 	'baslik':'Anasayfa',
 	'sayfaBaslik': {
 		'siteAd':'Mekan32',
 		'aciklama':'Isparta Civarındaki Mekanları Keşfedin!!'
 	},
 	'mekanlar':[
 	{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':2,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'mesafe':'9 km'
 	},
 	 {
 	 	'ad':'Viola Cafe&Bakery',
 	 	'adres':'Iyaş Park AVM karşısı',
 	 	'puan':3,
 	 	'imkanlar':['Nargile','Fast food','İçecekler'],
 	 	'mesafe':'7 km'
 	 },
 	 {
 	 	'ad':'Otogar Kıraathanesi.',
 	 	'adres':'Otogar.',
 	 	'puan':5,
 	 	'imkanlar':['Tost','Soğuk İçecekler','Çay'],
 	 	'mesafe':'6.8 km'
 	 },
 	 {
 	 	'ad':'Lucca Cafe',
 	 	'adres':'İyaş Park AVM karşısı',
 	 	'puan':5,
 	 	'imkanlar':['Nargile','Fast food','İçecekler'],
 	 	'mesafe':'7 km'
 	 },
 	 {
 	 	'ad':'Barida Cam Cafe',
 	 	'adres':'SDÜ Batı Kampüsü Mühendislik',
 	 	'puan':3,
 	 	'imkanlar':['Sıcak İçecekler','Oyunlar','Tatlılar'],
 	 	'mesafe':'13 km'
 	 }
 	]
 });
}

const mekanBilgisi=function(req,res,next){
 res.render('mekan-detay',{
 	'baslik':'Mekan Bilgisi',
 	'sayfaBaslik':'Starbucks',
 	'mekanBilgisi':{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':2,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'koordinatlar':{
 			'enlem':'37.781835',
 			'boylam':'30.566034'
 		},
 		'saatler':[
 		  {
 			'gunler':'Pazartesi - Cuma ',
 			'acilis':' 07:00 ',
 			'kapanis':' 23:00 ',
 			'kapali':false
 		  },
 		  {
 			'gunler':'Cumartesi ',
 			'acilis':' 09:00 ',
 			'kapanis':' 22:00 ',
 			'kapali':false
 			
 		  },
 		  {
			'gunler':'Pazar ',
 			'kapali':true
 		
 		  }
 		],
 		'yorumlar':[
 		   {
 		   	 'yorumYapan':'Tarık Öztürk',
 		   	 'puan':2,
 		   	 'tarih': '02.12.2020',
 		   	 'yorumMetni':'ehh iste'
 		   },
 		   {
 		 	 'yorumYapan':'Haydar Dümen',
 		   	 'puan':3,
 		   	 'tarih': '27.11.2020',
 		   	 'yorumMetni':'kahveler idare eder, pastalar baya iyi'
 		   }
 		]
 	   }
 });
}

const yorumEkle=function(req,res,next){
 res.render('yorum-ekle',{title:'Yorum Ekle'});
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}