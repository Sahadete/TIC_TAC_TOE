/*************************
 © Sahadete Jashari
	19.08.2016
 *************************/

var butonat= document.getElementsByClassName("buttons");

function newgame()
{
	
	for(i=0; i<butonat.length; i++)
	{
		butonat[i].style.backgroundColor="#CCCCCC";
		butonat[i].innerHTML = "*";
		butonat[i].style.color="black";
	}
	firstPlayerRound= true;
	document.getElementById("nextplayer").style.backgroundColor="#0000FF";
		
	
}

var firstPlayerRound=true;

function nextMove(indeksi)
{	if(butonat[indeksi].innerHTML != "*")
		return;
	
	if(firstPlayerRound)
	{
		firstPlayerRound= false;
		document.getElementById("nextplayer").style.backgroundColor="red";
		butonat[indeksi].innerHTML = "X";
		butonat[indeksi].style.color = "blue";
		
	}
	else{
		firstPlayerRound= true;
		document.getElementById("nextplayer").style.backgroundColor="blue";
		butonat[indeksi].innerHTML = "O";
		butonat[indeksi].style.color = "red";
	}
	
	
	
	checkWinner();
}

function checkWinner()
{		
	
	if(butonat[0].innerHTML != "*" && butonat[0].innerHTML==butonat[1].innerHTML && butonat[1].innerHTML == butonat[2].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}
	if(butonat[0].innerHTML != "*" && butonat[0].innerHTML==butonat[3].innerHTML && butonat[3].innerHTML == butonat[6].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[1].innerHTML != "*" && butonat[1].innerHTML==butonat[4].innerHTML && butonat[4].innerHTML == butonat[7].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[0].innerHTML != "*" && butonat[0].innerHTML==butonat[1].innerHTML && butonat[1].innerHTML == butonat[2].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[2].innerHTML != "*" && butonat[2].innerHTML==butonat[5].innerHTML && butonat[5].innerHTML == butonat[8].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[3].innerHTML != "*" && butonat[3].innerHTML==butonat[4].innerHTML && butonat[4].innerHTML == butonat[5].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[6].innerHTML != "*" && butonat[6].innerHTML==butonat[7].innerHTML && butonat[7].innerHTML == butonat[8].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[0].innerHTML != "*" && butonat[0].innerHTML==butonat[4].innerHTML && butonat[4].innerHTML == butonat[8].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	if(butonat[2].innerHTML != "*" && butonat[2].innerHTML==butonat[6].innerHTML && butonat[6].innerHTML == butonat[2].innerHTML)
	{	
		if(firstPlayerRound)
			alert("Player TWO wins the game!");
		else
			alert("Player ONE wins the game!");
		return;
	}	
	
	
	
	for(i=0; i<butonat.length; i++)
	{
		if(butonat[i].innerHTML == "*")
			return;		
	}
	
	alert("Draw");
	
}



