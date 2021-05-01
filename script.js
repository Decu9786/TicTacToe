		var ob = 0;
		var gra = 0;
		var tab = [];
		var pktX = 0;
		var pktY = 0;
		function reset()
		{
			for (var i = 1 ; i <= 9 ; i++)
			{
				tab[i] = 0;
				var pole = document.getElementById(i);
				pole.innerHTML = "Z";
				pole.style.color = "black";
			}
			gra++;
			ob = gra;
			var pole = document.getElementById("WYNIK");
			pole.innerHTML = "Wynik " + pktX + " : " + pktY;
		}
		function pokaz(wartosc)
		{
			if(tab[wartosc] != 0)
			{
				return ;
			}
			var pole = document.getElementById(wartosc);
			var mod = ob % 2;
			if (mod == 0)
			{
				pole.innerHTML = "O";
				pole.style.color = "white";
				tab[wartosc] = -1;
			}
			else
			{
				pole.innerHTML = "X";
				pole.style.color = "white";
				tab[wartosc] = 1;
			}
			ob++;
			sprawdz();
		}
		function XD(start,moc,skok)
		{
			var St = start;
			for(var klk = 1 ; klk <= 3 ; klk++)
			{
				start = St + (klk-1) * moc;
				var suma = 0;
				for(var il = 1 ; il <= 3 ; il++)
				{
					suma += tab[start + (il-1) * skok];
				}
				if(suma == 3)
				{
					pktX++;
					reset();
				}
				if(suma == -3)
				{
					pktY++;
					reset();
				}
			}
		}
		function sprawdz()
		{
			XD(1,1,3);
			XD(1,3,1);
			XD(1,10,4);
			XD(3,10,2);
			if(ob == gra + 9)
			{
				reset();
			}
		}