\set ON_ERROR_STOP 1

BEGIN;

CREATE CONSTRAINT TRIGGER delete_unused_tag
AFTER DELETE ON event_tag DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW EXECUTE PROCEDURE trg_delete_unused_tag_ref();

CREATE CONSTRAINT TRIGGER delete_unused_tag
AFTER DELETE ON place_tag DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW EXECUTE PROCEDURE trg_delete_unused_tag_ref();

CREATE CONSTRAINT TRIGGER delete_unused_tag
AFTER DELETE ON recording_tag DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW EXECUTE PROCEDURE trg_delete_unused_tag_ref();

CREATE CONSTRAINT TRIGGER delete_unused_tag
AFTER DELETE ON release_tag DEFERRABLE INITIALLY DEFERRED
FOR EACH ROW EXECUTE PROCEDURE trg_delete_unused_tag_ref();

COMMIT;
