BEGIN;
SET client_min_messages TO 'warning';

INSERT INTO language (id, isocode_3t, isocode_3b, isocode_2, name) VALUES (1, 'deu', 'ger', 'de', 'German');
INSERT INTO script (id, isocode, isonumber, name) VALUES (1, 'Ugar', '040', 'Ugaritic');
INSERT INTO country (id, isocode, name) VALUES (1, 'GB', 'United Kingdom');

INSERT INTO artist_name (id, name) VALUES (2, 'Other Artist');
INSERT INTO artist (id, name, sortname, gid) VALUES (2, 2, 2, '9f5ad190-caee-11de-8a39-0800200c9a66');
INSERT INTO tracklist (id) VALUES (3);
INSERT INTO track (id, tracklist, position, recording, name, artist_credit, length) VALUES (17, 3, 1, 1, 1, 1, 293720);
INSERT INTO medium_format (id, name) VALUES (2, 'Musical Box');
INSERT INTO release_packaging (id, name) VALUES (2, 'Digipak');
INSERT INTO release_status (id, name) VALUES (2, 'Promotion');

ALTER SEQUENCE artist_name_id_seq RESTART 3;
ALTER SEQUENCE medium_id_seq RESTART 5;
ALTER SEQUENCE tracklist_id_seq RESTART 4;
ALTER SEQUENCE track_id_seq RESTART 18;

COMMIT;