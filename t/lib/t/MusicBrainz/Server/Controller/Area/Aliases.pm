package t::MusicBrainz::Server::Controller::Area::Aliases;
use Test::Routine;
use MusicBrainz::Server::Test qw( html_ok page_test_jsonld );

with 't::Mechanize', 't::Context';

=head2 Test description

This test checks whether area aliases are correctly listed in the JSON-LD
of an area's alias page.

=cut

test 'Area alias appears on JSON-LD' => sub {
    my $test = shift;
    my $mech = $test->mech;
    my $c = $test->c;

    MusicBrainz::Server::Test->prepare_test_database($c, '+area');

    $mech->get_ok(
        '/area/106e0bec-b638-3b37-b731-f53d507dc00e/aliases',
        'Fetched area aliases page',
    );
    html_ok($mech->content);

    page_test_jsonld $mech => {
        '@id' => 'http://musicbrainz.org/area/106e0bec-b638-3b37-b731-f53d507dc00e',
        'alternateName' => ["\x{30aa}\x{30fc}\x{30b9}\x{30c8}\x{30e9}\x{30ea}\x{30a2}"],
        '@context' => 'http://schema.org',
        'name' => 'Australia',
        '@type' => 'Country'
    };
};

1;
