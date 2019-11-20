var Symbol = {
    Schere: 1,
    Stein: 2,
    Papier: 3,
    Spock: 4,
    Echse: 5
};

var Ergebnis = {
    Gewonnen: 1,
    Verloren: 2,
    Unentschieden: 3
};

function spielen( symbol )
{
    var userAuswahl = Symbol[ symbol ];
    var computerAuswahl = generiereComputerAuswahl();

    var spielDiv = document.getElementById( 'spiel' );
    var computerDiv = document.getElementById( 'computer' );
    var userDiv = document.getElementById( 'user' );
    var ergebnisDiv = document.getElementById( 'ergebnis' );

    spielDiv.style.display = 'flex';

    userDiv.innerHTML = '<div class="symbol ' + bestimmeClass( Symbol, userAuswahl ) + '"></div>';
    computerDiv.innerHTML = '<div class="symbol ' + bestimmeClass( Symbol, computerAuswahl ) + '"></div>';

    var ergebnis = auswerten( userAuswahl, computerAuswahl );

    var ergebnisText = bestimmeText( Ergebnis, ergebnis );
    ergebnisDiv.innerHTML = '<span class="' + ergebnisText.toLowerCase() + '">' + ergebnisText + '</span>';
}

function generiereComputerAuswahl()
{
    return Math.floor( (Math.random() * 5) + 1 );
}

function bestimmeText( obj, index )
{
    return Object.keys( obj )[ index - 1 ];
}

function bestimmeClass( obj, index )
{
    return 'symbol-' + bestimmeText( obj, index ).toLowerCase();
}

function auswerten( userAuswahl, computerAuswahl )
{
    var ergebnis;
    if ( computerAuswahl == Symbol.Stein )
    {
        if ( userAuswahl == Symbol.Papier || userAuswahl == Symbol.Spock )
        {
            ergebnis = Ergebnis.Gewonnen;
        } else if ( userAuswahl == Symbol.Stein )
        {
            ergebnis = Ergebnis.Unentschieden;
        } else
        {
            ergebnis = Ergebnis.Verloren;
        }
    } 
    else
    	{
	    if ( computerAuswahl == Symbol.Echse )
	    {
	        if ( userAuswahl == Symbol.Stein || userAuswahl == Symbol.Schere )
	        {
	            ergebnis = Ergebnis.Gewonnen;
	        } else if ( userAuswahl == Symbol.Echse )
	        {
	            ergebnis = Ergebnis.Unentschieden;
	        } else
	        {
	            ergebnis = Ergebnis.Verloren;
	        }
	    }
	    else
	    	{ 
		    if ( computerAuswahl == Symbol.Spock )
		    {
		        if ( userAuswahl == Symbol.Echse || userAuswahl == Symbol.Papier )
		        {
		            ergebnis = Ergebnis.Gewonnen;
		        } else if ( userAuswahl == Symbol.Spock )
		        {
		            ergebnis = Ergebnis.Unentschieden;
		        } else
		        {
		            ergebnis = Ergebnis.Verloren;
		        }
		    }
		    else
		    	{ 
			    if ( computerAuswahl == Symbol.Schere )
			    {
			        if ( userAuswahl == Symbol.Stein || userAuswahl == Symbol.Spock )
			        {
			            ergebnis = Ergebnis.Gewonnen;
			        } else if ( userAuswahl == Symbol.Schere )
			        {
			            ergebnis = Ergebnis.Unentschieden;
			        } else
			        {
			            ergebnis = Ergebnis.Verloren;
			        }
			    }
			    else
			    	{ 
			    
				    if ( computerAuswahl == Symbol.Papier )
				    {
				        if ( userAuswahl == Symbol.Schere || userAuswahl == Symbol.Echse )
				        {
				            ergebnis = Ergebnis.Gewonnen;
				        } else if ( userAuswahl == Symbol.Papier )
				        {
				            ergebnis = Ergebnis.Unentschieden;
				        } else
				        {
				            ergebnis = Ergebnis.Verloren;
				        }
				    } 
				  }  
				}
			}
		}
    return ergebnis;
}

var Module = { auswerten: auswerten, Symbol: Symbol, Ergebnis: Ergebnis, bestimmeText: bestimmeText };
module.exports = Module;



