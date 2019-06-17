import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
	
	
	constructor(private httpService: HttpService) {}
	   
	private url: string = 'https://let-api-test.akelius.com/api/v2/marketing';
	
	// suddenly started to get "No authorization token was found" error, so I used a mock data to display apartments
	private apartments = [{"id":"7296-0019","internalId":"e49a5760-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"80","postalCode":"14059","borough":"Test","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA Regression 15.08.2018","details":{"size":51.7,"numberOfRooms":2,"rent":{"totalRent":1100,"baseRent":1000,"deposit":3000,"operationalCosts":100},"floor":1}},{"id":"4017-0019","internalId":"40170019063","type":"living","address":{"streetName":"Gürtelstraße","houseNumber":"35","postalCode":"10247","borough":"Friedrichshain","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzQwMTcvNDAxN18tX0ludGVyaW9yX0xhdW5kcnklMjBSb29tJTIwMV8yMDExLTA4Xy1fTWFya2V0aW5nXy1fLV9MYW5kc2NhcGUuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"testing neighborhood migration","details":{"size":37.16,"numberOfRooms":1,"rent":{"totalRent":724,"baseRent":678,"deposit":2034,"operationalCosts":46}}},{"id":"7065-0027","internalId":"70650027001","type":"living","address":{"streetName":"Lastropsweg","houseNumber":"21","postalCode":"20255","borough":"Eimsbüttel","city":"Hamburg","countryCode":"DE"},"availableFromDate":"2018-06-23T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwNjUvNzA2NV8tX0V4dGVyaW9yX0ZhY2FkZSUyMDVfMjAxMC0wN18tX01hcmtldGluZ18tXy1fTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA new base rent","details":{"size":78.85,"numberOfRooms":3,"rent":{"totalRent":1010,"baseRent":1000,"deposit":3000,"operationalCosts":10}}},{"id":"4014-0077","internalId":"40140077060","type":"parking","address":{"streetName":"Rungestraße","houseNumber":"25-27","postalCode":"10179","borough":"Mitte","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzQwMTQvNDAxNF8tX0ludGVyaW9yX0xhdW5kcnklMjBSb29tJTIwMV8yMDExLTA4Xy1fTWFya2V0aW5nXy1fLV9MYW5kc2NhcGUuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA parking Republish 9th Nov","details":{"rent":{"totalRent":595,"baseRent":500,"deposit":1500}}},{"id":"7011-0002","internalId":"0be494d9-6d9e-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Neustrelitzer Straße","houseNumber":"9","postalCode":"13055","borough":"Alt-Hohenschönhausen","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTEvNzAxMV8tX0V4dGVyaW9yX0ZhY2FkZSUyMDEwXzIwMTUtMDdfLV9NYXJrZXRpbmdfLV8tX0xhbmRzY2FwZS5qcGcuaW5mbw==/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Test Immo 1","details":{"size":62.5,"numberOfRooms":3,"rent":{"totalRent":579,"baseRent":123,"deposit":369,"operationalCosts":456}}},{"id":"7070-0001","internalId":"249cf3e6-6da4-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Fuhlsbüttler Straße","houseNumber":"414","postalCode":"22309","borough":"Barmbek-Nord","city":"Hamburg","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwNzAvNzA3MF8tX0V4dGVyaW9yX0ZhY2FkZSUyMDJfMjAwOC0wNF8tX01hcmtldGluZ18tX0Z1aGxzYiVDMyVCQ3R0bGVyc3RyLiUyMDQxNF9MYW5kc2NhcGUuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"bla test","details":{"size":109,"numberOfRooms":4,"rent":{"totalRent":1100,"baseRent":1000,"deposit":3000,"operationalCosts":100},"floor":1}},{"id":"7033-0073","internalId":"cac13ce8-5290-11e8-bcf7-000d3a2b8cf3","type":"parking","address":{"streetName":"Noldering","houseNumber":"33","postalCode":"22309","borough":"Steilshoop","city":"Hamburg","state":"Hamburg","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMzMvNzAzM18tX0V4dGVyaW9yX0ZhY2FkZSUyMDJfMjAwOC0wNF8tX01hcmtldGluZ18tX05vbGRlcmluZyUyMDMzX1BvcnRyYWl0LmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Parking test","details":{"rent":{"totalRent":23.8,"baseRent":20,"deposit":60}}},{"id":"7209-0001","internalId":"7725bdc0-6daa-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Mainzer Straße","houseNumber":"6","postalCode":"12053","borough":"Neukölln","city":"Berlin","latitude":52.4839239,"longitude":13.4271543,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-84b3bb96-6efe-11e8-8b4e-0003ff889acf/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA new publication 12th Oktober","details":{"size":88,"numberOfRooms":2,"rent":{"totalRent":520,"baseRent":300,"deposit":900,"operationalCosts":220}}},{"id":"7023-0001","internalId":"61333c13-6da1-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Dernburgstraße","houseNumber":"19","postalCode":"14057","borough":"Charlottenburg","city":"Berlin","latitude":52.5028786,"longitude":13.2874028,"countryCode":"DE"},"availableFromDate":"2019-04-03T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMjMvNzAyM18tX0ludGVyaW9yX1N0YWlyd2VsbCUyMDJfMjAxNS0xMV8tX01hcmtldGluZ18tXy1fUG9ydHJhaXQuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA new pub ","details":{"size":48.97,"numberOfRooms":2,"rent":{"totalRent":1130,"baseRent":1000,"deposit":3000,"operationalCosts":130}}},{"id":"7018-0001","internalId":"2a3d8573-6da0-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Abrahamstraße","houseNumber":"17","postalCode":"22145","borough":"Rahlstedt","city":"Hamburg","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTgvNzAxOF8tX0V4dGVyaW9yX0ZhY2FkZSUyMDZfMjAwOC0wNF8tX01hcmtldGluZ18tXy1fTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA phone number formatting","details":{"size":80.63,"numberOfRooms":3.5,"rent":{"totalRent":750,"baseRent":500,"deposit":1500,"operationalCosts":250}}},{"id":"4014-0078","internalId":"40140078060","type":"parking","address":{"streetName":"Rungestraße","houseNumber":"25-27","postalCode":"10179","borough":"Mitte","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-6746700d-7e9b-11e8-8f45-0003ff887004/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA 12th Nov","details":{"rent":{"totalRent":250,"baseRent":250,"deposit":750}}},{"id":"7296-0017","internalId":"e434699c-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"20","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":"2018-06-01T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA fridge key fact","details":{"size":54,"numberOfRooms":2,"rent":{"totalRent":110,"baseRent":100,"deposit":300,"operationalCosts":10}}},{"id":"7180-0001","internalId":"5f3349d9-6da8-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Alsterdorfer Straße","houseNumber":"149","postalCode":"22297","borough":"Alsterdorf","city":"Hamburg","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcxODAvNzE4MF8tX0V4dGVyaW9yX0ZhY2FkZSUyMDNfLV8tX01hcmtldGluZ18tXy1fTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Test Ali test1","details":{"size":57.5,"numberOfRooms":3,"rent":{"totalRent":246,"baseRent":123,"deposit":369,"operationalCosts":123}}},{"id":"7296-0016","internalId":"e402ab3a-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":"2018-06-09T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA 11th of June - Update dash","details":{"size":108.99,"numberOfRooms":3,"rent":{"totalRent":5020,"baseRent":5000,"deposit":15000,"operationalCosts":20},"floor":4}},{"id":"7296-0003","internalId":"72960003002","type":"commercial","address":{"streetName":"Erkelenzdamm","houseNumber":"11,13","postalCode":"10999","borough":"Kreuzberg","city":"Berlin","countryCode":"DE"},"availableFromDate":"2018-06-08T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-480be5e2-4747-11e9-8fc2-0a580ae94c39/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA marketing address with 11-13 - Republish 22nd","details":{"size":36,"numberOfRooms":1,"rent":{"totalRent":790,"baseRent":560,"deposit":1680,"operationalCosts":230},"floor":5,"commercialType":"practice"}},{"id":"7296-0015","internalId":"e3d35dd8-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"24","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":"2018-12-19T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA test 5th Nov","details":{"size":37.78,"numberOfRooms":2,"rent":{"totalRent":320,"baseRent":200,"deposit":600,"operationalCosts":120},"floor":4}},{"id":"4010-0001","internalId":"40100001056","type":"commercial","address":{"streetName":"Lehderstraße","houseNumber":"5","postalCode":"13086","borough":"Bezirk ","city":"Berlin","countryCode":"DE"},"availableFromDate":"0020-02-02T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-17ea371c-6eed-11e8-8b4e-0003ff889acf/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA example image e","details":{"size":87.79,"numberOfRooms":2,"rent":{"totalRent":3456,"baseRent":2222,"deposit":6666,"operationalCosts":1234},"floor":1,"commercialType":"restaurant"}},{"id":"7077-0002","internalId":"5119f62d-6da4-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"An der Spandauer Brücke","houseNumber":"6","postalCode":"10178","borough":"Mitte","city":"Berlin","latitude":52.523599999999988,"longitude":13.4033,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwNzcvNzA3N18tX0V4dGVyaW9yX0NvdXJ0eWFyZCUyMDFfMjAxNC0wN18tX01hcmtldGluZ18tX0FuJTIwZGVyJTIwU3BhbmRhdWVyJTIwQnIlQzMlQkNja2UlMjA2X1Bhbm9yYW1hLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Kein Bezirk, was passiert?","details":{"size":93.38,"numberOfRooms":3,"rent":{"totalRent":300,"baseRent":100,"deposit":300,"operationalCosts":200}}},{"id":"7296-0001","internalId":"e1dbd37c-6dad-11e8-aba8-000d3a2b8cf3","type":"commercial","address":{"streetName":"Oberwalstr 15","houseNumber":"16","postalCode":"12345","borough":"Charlottenburg","city":"Berlin","countryCode":"DE"},"availableFromDate":"2019-01-24T00:00:00Z","availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-f5b2c864-9fbd-11e8-94cf-0a580ae946e8/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"lalalalalala","details":{"size":80,"numberOfRooms":3,"rent":{"totalRent":134,"baseRent":100,"deposit":300,"operationalCosts":19,"heatingCosts":15},"floor":5,"commercialType":"restaurant"}},{"id":"7296-0014","internalId":"e3a41076-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"20","postalCode":"11111","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-43ee993f-7e9f-11e8-8f45-0003ff887004/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA image example","details":{"size":112.12,"numberOfRooms":3,"rent":{"totalRent":110,"baseRent":100,"deposit":300,"operationalCosts":10},"floor":4}},{"id":"7182-0003","internalId":"7f4fa783-6da8-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Schliemannstraße","houseNumber":"14","postalCode":"10437","borough":"Prenzlauer Berg","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcxODIvNzE4Ml8tX0V4dGVyaW9yX0ZhY2FkZSUyMDhfMjAxNC0xMF8tX01hcmtldGluZ18tXy1fTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"test","details":{"size":119.18,"numberOfRooms":3,"rent":{"totalRent":568,"baseRent":234,"deposit":702,"operationalCosts":334},"floor":1}},{"id":"7011-0281","internalId":"a4870eca-5291-11e8-bcf7-000d3a2b8cf3","type":"parking","address":{"streetName":"Neustrelitzer Straße","houseNumber":"36","postalCode":"13055","borough":"Bla","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTEvNzAxMV8tX0V4dGVyaW9yX0VudHJhbmNlJTIwMl8yMDEzLTExXy1fTWFya2V0aW5nXy1fTmV1c3RyZWxpdHplciUyMFN0ci4lMjA5X0xhbmRzY2FwZS5qcGcuaW5mbw==/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Test Praking jo jo","details":{"rent":{"totalRent":100,"baseRent":100,"deposit":300}}},{"id":"7013-0001","internalId":"53bf8d3b-6d9f-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Straßburger Straße","houseNumber":"40","postalCode":"13581","borough":"Bezirk Spandau","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-3be6b163-6ef4-11e8-8b4e-0003ff889acf/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA TEst","details":{"size":64.59,"numberOfRooms":2,"rent":{"totalRent":1120,"baseRent":1000,"deposit":3000,"operationalCosts":120}}},{"id":"7296-0013","internalId":"e3773414-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA August 21st test","details":{"size":107.67,"numberOfRooms":3,"rent":{"totalRent":110,"baseRent":100,"deposit":300,"operationalCosts":10},"floor":3}},{"id":"7013-0171","internalId":"49cd6ad5-528f-11e8-bcf7-000d3a2b8cf3","type":"parking","address":{"streetName":"Straßburger Straße","houseNumber":"39","postalCode":"13581","borough":"Bezirk Spandau","city":"Berlin","countryCode":"DE"},"availableFromDate":"2018-07-27T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-3be6b163-6ef4-11e8-8b4e-0003ff889acf/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA parking space 03/07","details":{"rent":{"totalRent":100,"baseRent":100,"deposit":300}}},{"id":"7489-0031","internalId":"587279bb-6db7-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Soldiner Straße","houseNumber":"38","postalCode":"13359","borough":"Wedding","city":"Berlin","latitude":52.56004,"longitude":13.38207,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzc0ODkuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Temp Title 123","details":{"size":42.5,"numberOfRooms":1,"rent":{"totalRent":13579,"baseRent":12345,"deposit":37035,"operationalCosts":1234,"heatingCosts":0},"floor":1}},{"id":"7016-0234","internalId":"70160234001","type":"parking","address":{"streetName":"Sankt Pauli ","houseNumber":"15","postalCode":"20359","borough":"Sankt Pauli","city":"Hamburg","countryCode":"DE"},"availableFromDate":"2018-11-16T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTYvNzAxNl8tX0V4dGVyaW9yX0ZhY2FkZSUyMDlfMjAxMS0wNF8tX01hcmtldGluZ18tX05ldWVyJTIwUGZlcmRlbWFya3RfTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA 5th Nov pub","details":{"rent":{"totalRent":500,"baseRent":500,"deposit":1500}}},{"id":"7016-0001","internalId":"bbf0d45f-6d9f-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Augustenpassage","houseNumber":"5","postalCode":"20357","borough":"Sankt Pauli","city":"Hamburg","countryCode":"DE"},"availableFromDate":"2012-02-10T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTYvNzAxNl8tX0V4dGVyaW9yX0ZhY2FkZSUyMDdfMjAxMS0wNF8tX01hcmtldGluZ18tX05ldWVyJTIwUGZlcmRlbWFya3RfTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA test 12th March","details":{"size":47.05,"numberOfRooms":2,"rent":{"totalRent":783,"baseRent":333,"deposit":999,"operationalCosts":450}}},{"id":"7013-0002","internalId":"53d92fbd-6d9f-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Straßburger Straße test","houseNumber":"45","postalCode":"13581","borough":"Bezirk Spandau","city":"Berlin","countryCode":"DE"},"availableFromDate":"2018-06-09T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTMvNzAxM18tX0V4dGVyaW9yX0ZhY2FkZSUyMDEwXzIwMTQtMDhfLV9NYXJrZXRpbmdfLV8tX1BvcnRyYWl0LmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA Test","details":{"size":64.59,"numberOfRooms":2,"rent":{"totalRent":110,"baseRent":100,"deposit":300,"operationalCosts":10}}},{"id":"7077-0004","internalId":"5153cae1-6da4-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"An der Spandauer Brücke","houseNumber":"6","postalCode":"10178","borough":"Mitte","city":"Berlin","latitude":52.523599999999988,"longitude":13.4033,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwNzcvNzA3N18tX0V4dGVyaW9yX0ZhY2FkZSUyMDFfMjAxMi0wNF8tX01hcmtldGluZ18tXy1fTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"Test 3 images","details":{"size":95.8,"numberOfRooms":3,"rent":{"totalRent":1422,"baseRent":422,"deposit":1266,"operationalCosts":1000},"floor":1}},{"id":"7296-0012","internalId":"e34d3de2-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA 24th Parking","details":{"size":50,"numberOfRooms":2,"rent":{"totalRent":170,"baseRent":120,"deposit":360,"operationalCosts":20,"heatingCosts":30},"floor":3}},{"id":"7296-0011","internalId":"e3228460-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-d7848561-2d06-11e8-8121-00155d8e330a/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA Intercom","details":{"size":110,"numberOfRooms":3.5,"rent":{"totalRent":2000,"baseRent":1000,"deposit":3000,"operationalCosts":1000},"floor":3}},{"id":"4013-0002","internalId":"40130002059","type":"commercial","address":{"streetName":"Ufnaustraße","houseNumber":"2","postalCode":"10553","borough":"Moabit","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzQwMTMvNDAxM18tX0V4dGVyaW9yX1ZpZXclMjAxXzIwMTQtMDhfLV9NYXJrZXRpbmdfLV9GcmVnYXR0ZW4lMjA3X0xhbmRzY2FwZS5qcGcuaW5mbw==/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"test Javier from test Publishing service","details":{"size":103.91,"numberOfRooms":4,"rent":{"totalRent":112,"baseRent":111,"deposit":333,"operationalCosts":1},"floor":2,"commercialType":"practice"}},{"id":"7296-0009","internalId":"e2d5eafc-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA publication 26th July","details":{"size":50,"numberOfRooms":2,"rent":{"totalRent":2300,"baseRent":2100,"deposit":6300,"operationalCosts":200}}},{"id":"7296-0010","internalId":"e2faff2e-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","countryCode":"DE"},"availableFromDate":"2018-08-31T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-ac106395-2c24-11e8-8121-00155d8e330a/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"qa 21st floor test","details":{"size":110,"numberOfRooms":3,"rent":{"totalRent":1610,"baseRent":1600,"deposit":4800,"operationalCosts":10}}},{"id":"7016-0205","internalId":"150cdf57-6da0-11e8-aba8-000d3a2b8cf3","type":"commercial","address":{"streetName":"Neuer Pferdemarkt","houseNumber":"17","postalCode":"20359","borough":"Sankt Pauli","city":"Hamburg","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTYvNzAxNl8tX0V4dGVyaW9yX0ZhY2FkZSUyMDhfMjAxMS0wM18tX01hcmtldGluZ18tX05ldWVyJTIwUGZlcmRlbWFya3RfTGFuZHNjYXBlLmpwZy5pbmZv/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":" QA 22nd publication  - hamburg","details":{"size":165.35,"numberOfRooms":8,"rent":{"totalRent":1100,"baseRent":1000,"deposit":3000,"operationalCosts":100},"floor":1,"commercialType":"restaurant"}},{"id":"4017-0044","internalId":"40170044063","type":"parking","address":{"streetName":"Marketing address","houseNumber":"40","postalCode":"10247","borough":"Friedrichshain","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzQwMTcvNDAxN18tX0ludGVyaW9yX0xhdW5kcnklMjBSb29tJTIwMV8yMDExLTA4Xy1fTWFya2V0aW5nXy1fLV9MYW5kc2NhcGUuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA parking space 2nd July","details":{"rent":{"totalRent":1190,"baseRent":1000,"deposit":3000}}},{"id":"7011-0285","internalId":"a44830f1-5291-11e8-bcf7-000d3a2b8cf3","type":"parking","address":{"streetName":"Neustrelitzer Straße","houseNumber":"36","postalCode":"13055","borough":"Tegel","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTEvNzAxMV8tX0V4dGVyaW9yX0ZhY2FkZSUyMDEwXzIwMTUtMDdfLV9NYXJrZXRpbmdfLV8tX0xhbmRzY2FwZS5qcGcuaW5mbw==/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA Parking 06th September","details":{"rent":{"totalRent":300,"baseRent":300,"deposit":900}}},{"id":"7043-0303","internalId":"2413bbea-6da3-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Emil-von-Behring-Straße","houseNumber":"7 b","postalCode":"60439","borough":"Niederursel","city":"Frankfurt am Main","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-84bcd0c3-7aeb-11e8-9d29-0003ff887004/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA verify image order","details":{"size":77.28,"numberOfRooms":3,"rent":{"totalRent":111,"baseRent":100,"deposit":300,"operationalCosts":11}}},{"id":"7296-0008","internalId":"e2b0afba-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":"11","postalCode":"14059","borough":"Charlottenburg","city":"Berlin","latitude":52.5142971,"longitude":13.2940138,"countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcyOTYuSlBHLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA test 23rd Jan","details":{"size":119.3,"numberOfRooms":3,"rent":{"totalRent":700,"baseRent":500,"deposit":1500,"operationalCosts":200},"floor":2}},{"id":"7011-0286","internalId":"a4b6824e-5291-11e8-bcf7-000d3a2b8cf3","type":"parking","address":{"streetName":"Neustrelitzer Straße","houseNumber":"36","postalCode":"13055","borough":"Tegel","city":"Berlin","countryCode":"DE"},"availableFromDate":null,"availableFromNowOn":true,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/L2ZvdG93ZWIvYXJjaGl2ZXMvNTAwNy1Bc3NldHMvQXNzZXRzLzcwMTEvNzAxMV8tX0V4dGVyaW9yX0ZhY2FkZSUyMDdfMjAwNi0wOF8tX01hcmtldGluZ18tXy1fUG9ydHJhaXQuanBnLmluZm8=/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"test","details":{"rent":{"totalRent":132.09,"baseRent":111,"deposit":333}}},{"id":"7296-0021","internalId":"e507bf34-6dad-11e8-aba8-000d3a2b8cf3","type":"living","address":{"streetName":"Nehringstraße","houseNumber":" ","postalCode":"14050","borough":"Charlottenburg","city":"Berlin","countryCode":"DE"},"availableFromDate":"2019-01-24T00:00:00Z","availableFromNowOn":false,"teaserImageUrl":"https://mediaservice-cdn-test.azureedge.net/download/ak-Assets-6834d55a-c631-11e8-b673-0a580ae94843/600","localization":{"lengthUnit":"m","areaUnit":"sqm","currency":"EUR"},"title":"QA apartment publication 22nd Jan","details":{"size":51.7,"numberOfRooms":2,"rent":{"totalRent":1044,"baseRent":200,"deposit":700,"operationalCosts":400,"heatingCosts":444}}}];

	// get apartments with caching
	public getApartmentList() {
		return Observable.create((observer:any) => {
			if(this.apartments.length) {
				observer.next(this.apartments);
			} else {
				this.httpService.get(this.url + '/units?countryCode=DE').subscribe((apartments) => {
					this.apartments = apartments.data;
					observer.next(this.apartments);
				});
			}
		}).first();
	}
	
	public getApartment(id) {
		return this.getApartmentList().map(list => {
			return list.find(item => item.id === id);
		});
	}
	
}