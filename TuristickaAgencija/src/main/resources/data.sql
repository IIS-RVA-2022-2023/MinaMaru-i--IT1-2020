
---------------------------------TABELA DESTINACIJA--------------

INSERT INTO "destinacija"("id", "mesto", "drzava", "opis")
VALUES(nextval('destinacija_seq'), 'Barselona', 'Spanija', 'Barselona je grad nesvakidašnjeg izgleda i maštovite arhitekture, grad bogate istorije, umetnosti i kulture');

INSERT INTO "destinacija"("id", "mesto", "drzava", "opis")
VALUES(nextval('destinacija_seq'), 'Madrid', 'Spanija', 'Madrid je glavni i najveći grad Španije. Smešten je u samom središtu države, u Kastilji, a leži na obali reke Manzanares' );

INSERT INTO "destinacija"("id", "mesto", "drzava", "opis")
VALUES(nextval('destinacija_seq'), 'Sevilla', 'Spanija', 'Севиља (шп. Sevilla) је привредни, културни и финансијски центар Шпаније и главни град покрајине Андалузије. ');

INSERT INTO "destinacija"("id", "mesto", "drzava", "opis")
VALUES(nextval('destinacija_seq'), 'Marbelja', 'Spanija', 'Marbelja je poznato mondensko letovalište na jugu Španije.');

INSERT INTO "destinacija"("id", "mesto", "drzava", "opis")
VALUES(nextval('destinacija_seq'), 'Pariz', 'Francuska', 'Pariz (na francuskom Paris) je glavni i najveći grad Francuske. ');

INSERT INTO "destinacija"("id", "mesto", "drzava", "opis")
VALUES(nextval('destinacija_seq'), 'Bec', 'Austrija', ' Beč je jedan od najlepših gradova u Evropi. Grad bogate istorije, prelepih građevina i mesta za zabavu. ');


------------------------------TABELA TURISTICKA_AGENCIJA

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'EUROTURS', 'Vase Pelagica 11','062/345678');

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'Maestral', 'Hadzi Ruvimova 15','062/340654');

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'Lider Travel', 'Vase Stajica 23','069/300678');

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'Sabra Travel', 'Zeleznicka 4','062/567342');

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'Tango travel', 'Bulevar Oslobodjenja','067/890890');

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'Big Blue', 'Masima Gorkog 101','062/344444');

INSERT INTO "turisticka_agencija"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('turisticka_agencija_seq'), 'Oktopod travel', 'Las Lagala 23','062/300678');


-------------------------------------TABELA HOTEL----------------------
--1 Barselona
INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Generator Barcelona', '3', 'Jedinstveni privatni apartmani',1 );

INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'W Barcelona', '4', 'Sik sobe u modernom hotelu sa bogledom na more i bar na vrhu zgrade',1 );

--2 Madrid
INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Safestay Madrid Central', '5', 'Moderni apartmani na odlicnoj lokaciji',2 );

INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'ibis budget Madrid Getafe', '4', 'Hotel sa najlepsim pogledom u Madridu',2 );

--3Sevilla
INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Sevilla Macarena', '4', 'Najstariji hotel u Spaniji',3 );

INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Alcobia', '5', 'Hotel sa najboljom lokacijom u Sevilji',3 );

--4Marbelja
INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Marbela Spa Hotel', '5', 'Hotel sa najvecim spa centrom u Spaniji',4 );

INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Marbella Club Hotel', '5', 'Hotel na obali mora',4 );

--5Pariz
INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'International Youth Hostel', '2', 'Najbolje ocenjen hotel u Parizu',5 );

INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'The People Paris Marais', '4', 'Hotel sa pogledom na Ajfelov Toranj',5 );

--6Bec
INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Hadrigan', '5', 'Hotel u samom centru Beca',6 );

INSERT INTO "hotel"("id", "naziv", "broj_zvezdica", "opis", "destinacija")
VALUES (nextval('hotel_seq'), 'Exe Vienna', '3', 'Moderan hotel u lezarnom objektu u kojem se nudi najbolja usluga',6);







/*
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 1, 1, 1, 20, 'komad', 100);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 1, 2, 2, 30, 'komad', 150);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 1, 3, 3, 15, 'komad', 500);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 2, 1, 4, 30, 'komad', 1000);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 2, 2, 5, 18, 'komad', 1300);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 2, 3, 6, 20, 'komad', 500);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 3, 1, 7, 30, 'kg', 200);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 3, 2, 8, 50, 'kg', 80);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 3, 3, 9, 25, 'kg', 130);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 4, 1, 10, 5, 'kg', 300);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 4, 2, 11, 2, 'kg', 500);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 4, 3, 12, 3, 'kg', 400);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 5, 1, 11, 10, 'kg', 300);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikal", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 5, 2, 12, 10, 'kg', 500);*/