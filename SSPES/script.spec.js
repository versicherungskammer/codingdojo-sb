var spiel = require( './script' );
var auswerten = spiel.auswerten;
var Symbol = spiel.Symbol;
var Ergebnis = spiel.Ergebnis;
var bestimmeText = spiel.bestimmeText;
describe( 'Spielregeln', function () {

    function gewinntGegen( gewinner, verlierer )
    {
        expect( auswerten( gewinner, verlierer ) ).toBe( Ergebnis.Gewonnen );
        expect( auswerten( verlierer, gewinner ) ).toBe( Ergebnis.Verloren );
    }

    it( 'Schere schneidet Papier', function () {
        gewinntGegen( Symbol.Schere, Symbol.Papier );
    } );
    it( 'Papier bedeckt Stein', function () {
        gewinntGegen( Symbol.Papier, Symbol.Stein );
    } );
    it( 'Stein zerquetscht Echse', function () {
        gewinntGegen( Symbol.Stein, Symbol.Echse );
    } );
    it( 'Echse vergiftet Spock', function () {
        gewinntGegen( Symbol.Echse, Symbol.Spock );
    } );
    it( 'Spock zertrümmert Schere', function () {
        gewinntGegen( Symbol.Spock, Symbol.Schere );
    } );
    it( 'Schere köpft Echse', function () {
        gewinntGegen( Symbol.Schere, Symbol.Echse );
    } );
    it( 'Echse frisst Papier', function () {
        gewinntGegen( Symbol.Echse, Symbol.Papier );
    } );
    it( 'Papier wiederlegt Spock', function () {
        gewinntGegen( Symbol.Papier, Symbol.Spock );
    } );
    it( 'Spock verdampft Stein', function () {
        gewinntGegen( Symbol.Spock, Symbol.Stein );
    } );
    it( 'Stein schleift Schere', function () {
        gewinntGegen( Symbol.Stein, Symbol.Schere );
    } );
} );

