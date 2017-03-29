var objflup, objtrf, objchk, objchkans, objrd1, objrd2;	

var flup, trf, chk, chkans, rd1, rd2;	

var flupq, flupans, trfq, trfans, chkq, chkopt, rd1q, rd1opt, rd1ans, rd2q, rd2opt, rd2ans;

var chkopt1, chkopt2, chkopt3, chkopt4, chkans1, chkans2, rd1opt1, rd1opt2, rd1opt3, rd2opt1, rd2opt2, rd2opt3;

var uchkans1, uchkans2;

var surd1ans, surd2ans;

var unchkans = 0;

var uchknans = Array(2);

var rno = 0 , flag = 0, lk = 0, noq = 0, q = 0;

var j = 0;

var len1 = 0, len2 = 0, len3 = 0, len4 = 0, len5 = 0, len6 = 0, len7 = 0, len8 = 0, len9 = 0;

var scr = 0, tscr = 0;

var qflag = 0;

var qno = 0;

var noqask = 5;

var bflag = 0;

var tques = 5;

var sufluans = "";


	objDOM = new ActiveXObject("MSXML.DOMDocument");
			objDOM.load("nvqp.xml");

			objflup = objDOM.getElementsByTagName("flup");
			objtrf = objDOM.getElementsByTagName("trf");
			objchk = objDOM.getElementsByTagName("chk");
			objchkans = objDOM.getElementsByTagName("chkans");
			objrd1 = objDOM.getElementsByTagName("rd1");
			objrd2 = objDOM.getElementsByTagName("rd2");
			noq = objflup.length; 
	        arr =  Array(noq);

function xmlassgn()
{

	if(bflag == 0)
	{
	if(qno < noqask)
	{
	if(qflag == 0)
	{
	len1 = 0, len2 = 0, len3 = 0, len4 = 0, len5 = 0, len6 = 0, len7 = 0, len8 = 0, len9 = 0;

	flupq = "", flupans = "", trfq = "", trfans = "", chkq = "", chkopt = "", rd1q = "", rd1opt = "", rd1ans = "", rd2q = "", rd2opt = "", rd2ans = "";

	chkopt1 = "", chkopt2 = "", chkopt3 = "", chkopt4 = "", chkans1 = "", chkans2 = "", rd1opt1 = "", rd1opt2 = "", rd1opt3 = "", rd2opt1 = "", rd2opt2 = "", rd2opt3 = "";

	scr = 0; sufluans = "";

	 unchkans = 0;
	 
	document.graph.qbox.value = (qno+1) +" / "+noqask;

	document.graph.uflupans.focus();
	document.graph.uflupans.value = "";
	document.graph.uchkans[0].checked = false;
	document.graph.uchkans[1].checked = false;
	document.graph.uchkans[2].checked = false;
	document.graph.uchkans[3].checked = false;
	document.graph.urd1ans[0].checked = false;
	document.graph.urd1ans[1].checked = false;
	document.graph.urd1ans[2].checked = false;
	document.graph.urd2ans[0].checked = false;
	document.graph.urd2ans[1].checked = false;
	document.graph.urd2ans[2].checked = false;

	document.flupansi.src = "images/blankw.jpg";
	document.trfansi.src = "images/blankw.jpg";
	document.chkansi.src = "images/blankw.jpg";
	document.rd1ansi.src = "images/blankw.jpg";
	document.rd2ansi.src = "images/blankw.jpg";

	uansbox1.className = "clsh";
	uansbox2.className = "clsh";
	uansbox3.className = "clsh";
	uansbox4.className = "clsh";
	uansbox5.className = "clsh";

	cansbox1.className = "clsh";
	cansbox2.className = "clsh";
	cansbox3.className = "clsh";
	cansbox4.className = "clsh";
	cansbox5.className = "clsh";

	document.graph.scrbox.className = "clsh";

	surd1ans = "";
	surd2ans = "";



	gm();

	flup = objflup.item(rno).firstChild.nodeValue;
	trf = objtrf.item(rno).firstChild.nodeValue;
	chk = objchk.item(rno).firstChild.nodeValue;
	chkans = objchkans.item(rno).firstChild.nodeValue;
	rd1 = objrd1.item(rno).firstChild.nodeValue;
	rd2 = objrd2.item(rno).firstChild.nodeValue;


	len1 = flup.length; flupq = flup.substring(j,(flup.indexOf("-",j)));	  j = flup.indexOf("-",j)+1;	 flupans = flup.substring(j,len1); 	j=0; 
	len2 = trf.length;  trfq = trf.substring(j,(trf.indexOf("-",j)));	      j = trf.indexOf("-",j)+1; 	 trfans = trf.substring(j,len2);    j=0;
	len3 = chk.length;  chkq = chk.substring(j,(chk.indexOf("-",j)));	      j = chk.indexOf("-",j)+1;	     chkopt = chk.substring(j,len3);	j=0;
	len4 = rd1.length;  rd1q = rd1.substring(j,(rd1.indexOf("-",j)));	      j = rd1.indexOf("-",j)+1;	     rd1opt = rd1.substring(j,(rd1.indexOf("|",j))); j = rd1.indexOf("|",j)+1; rd1ans = rd1.substring(j,len4);	j=0;
	len5 = rd2.length;  rd2q = rd2.substring(j,(rd2.indexOf("-",j)));	      j = rd2.indexOf("-",j)+1;	     rd2opt = rd2.substring(j,(rd2.indexOf("|",j))); j = rd2.indexOf("|",j)+1; rd2ans = rd2.substring(j,len5);	j=0;

    len6 = chkopt.length; 
    chkopt1 = chkopt.substring(j,(chkopt.indexOf(",",j))); j = chkopt.indexOf(",",j)+1; 
    chkopt2 = chkopt.substring(j,(chkopt.indexOf(",",j))); j = chkopt.indexOf(",",j)+1;	
    chkopt3 = chkopt.substring(j,(chkopt.indexOf(",",j))); j = chkopt.indexOf(",",j)+1;
    chkopt4 = chkopt.substring(j,len6); j = 0;

    len7 = chkans.length; 
    chkans1 = chkans.substring(j,(chkans.indexOf(",",j))); j = chkans.indexOf(",",j)+1; 
    chkans2 = chkans.substring(j,len7); j = 0;

    len8 = rd1opt.length; 
    rd1opt1 = rd1opt.substring(j,(rd1opt.indexOf(",",j))); j = rd1opt.indexOf(",",j)+1; 
    rd1opt2 = rd1opt.substring(j,(rd1opt.indexOf(",",j))); j = rd1opt.indexOf(",",j)+1; 
    rd1opt3 = rd1opt.substring(j,len8); j = 0;

    len9 = rd2opt.length; 
    rd2opt1 = rd2opt.substring(j,(rd2opt.indexOf(",",j))); j = rd2opt.indexOf(",",j)+1; 
    rd2opt2 = rd2opt.substring(j,(rd2opt.indexOf(",",j))); j = rd2opt.indexOf(",",j)+1; 
    rd2opt3 = rd2opt.substring(j,len9); j = 0;

    document.bsgimg.src = "images/G"+(rno+1)+".jpg";	
    bsflupq.innerHTML = flupq;
    bstrfq.innerHTML = trfq;
    bschkq.innerHTML = chkq;
    document.graph.uchkans[0].value = chkopt1;
    document.graph.uchkans[1].value = chkopt2;
    document.graph.uchkans[2].value = chkopt3;
    document.graph.uchkans[3].value = chkopt4;
    bschkopt1.innerHTML = chkopt1;
    bschkopt2.innerHTML = chkopt2;
    bschkopt3.innerHTML = chkopt3;
    bschkopt4.innerHTML = chkopt4;
    bsrd1q.innerHTML = rd1q;
    document.graph.urd1ans[0].value = rd1opt1;
    document.graph.urd1ans[1].value = rd1opt2;
    document.graph.urd1ans[2].value = rd1opt3;
    bsrd1opt1.innerHTML = rd1opt1;
    bsrd1opt2.innerHTML = rd1opt2;
    bsrd1opt3.innerHTML = rd1opt3;
    bsrd2q.innerHTML = rd2q;
    document.graph.urd2ans[0].value = rd2opt1;
    document.graph.urd2ans[1].value = rd2opt2;
    document.graph.urd2ans[2].value = rd2opt3;
    bsrd2opt1.innerHTML = rd2opt1;
    bsrd2opt2.innerHTML = rd2opt2;
    bsrd2opt3.innerHTML = rd2opt3;
    qno++;
    bflag = 1;
    document.sbt.src = "images/submit.jpg";

}
}
else
	alert("T h e  E n d");


}
else if(bflag == 1)
{
	chck();
	document.sbt.src = "images/next.jpg";
	
	if(qno == noqask)
    {
    	document.sbt.src = "images/end.jpg";
    	qflag = 1;
    }
	bflag = 0;
}

}

function chck()
{
	uansbox1.className = "clsv";
	uansbox2.className = "clsv";
	uansbox3.className = "clsv";
	uansbox4.className = "clsv";
	uansbox5.className = "clsv";

	cansbox1.className = "clsv";
	cansbox2.className = "clsv";
	cansbox3.className = "clsv";
	cansbox4.className = "clsv";
	cansbox5.className = "clsv";

	document.graph.scrbox.className = "clsv";
	document.graph.tscrbox.className = "clsv";

	if(document.graph.uchkans[0].checked == true)
		  uchknans[unchkans++] = 0; 
	if(document.graph.uchkans[1].checked == true)
		  uchknans[unchkans++] = 1;
	if(document.graph.uchkans[2].checked == true)
		  uchknans[unchkans++] = 2;
	if(document.graph.uchkans[3].checked == true)
		  uchknans[unchkans++] = 3;

	
	if(document.graph.urd1ans[0].checked == true)
		surd1ans = document.graph.urd1ans[0].value;
	else if(document.graph.urd1ans[1].checked == true)
		surd1ans = document.graph.urd1ans[1].value;
	else if(document.graph.urd1ans[2].checked == true)
		surd1ans = document.graph.urd1ans[2].value;

	if(document.graph.urd2ans[0].checked == true)
		surd2ans = document.graph.urd2ans[0].value;
	else if(document.graph.urd2ans[1].checked == true)
		surd2ans = document.graph.urd2ans[1].value;
	else if(document.graph.urd2ans[2].checked == true)
		surd2ans = document.graph.urd2ans[2].value;
	
	sufluans = document.graph.uflupans.value;

	 cansbox1.innerHTML = "1) Correct Answer: "+flupans;
	 uansbox1.innerHTML = "1) Your Answer: "+document.graph.uflupans.value;

	if( flupans.toUpperCase() == sufluans.toUpperCase() )
		{
			document.flupansi.src = "images/correct_green.gif";
			uansbox1.style.color = "green";
			scr++; tscr++;
		}
	else
	{
		document.flupansi.src = "images/wrong_black.gif";
		uansbox1.style.color = "red";
	}

	if(trfans == "y")
	cansbox2.innerHTML = "2) Correct Answer: True";
    else
    cansbox2.innerHTML = "2) Correct Answer: False";    	

	if(document.graph.utrfans.value == "y")
			uansbox2.innerHTML = "2) Your Answer: True";
    else if(document.graph.utrfans.value == "n")
    		uansbox2.innerHTML = "2) Your Answer: False";
    else
    		uansbox2.innerHTML = "2) Your Answer: ";


	if(trfans == document.graph.utrfans.value)
	{
		document.trfansi.src = "images/correct_green.gif";
		uansbox2.style.color = "green";
		scr++; tscr++;
	}
	else
	{
		document.trfansi.src = "images/wrong_black.gif";
		uansbox2.style.color = "red";
	}

	 cansbox3.innerHTML = "3) Correct Answer: "+chkans1+" & "+chkans2;

	 if(unchkans == 1)
				uansbox3.innerHTML = "3) Your Answer: "+document.graph.uchkans[uchknans[0]].value;
			else if(unchkans == 2)
				uansbox3.innerHTML = "3) Your Answer: "+ document.graph.uchkans[uchknans[0]].value+" & "+document.graph.uchkans[uchknans[1]].value;
			else if(unchkans == 3)
				uansbox3.innerHTML = "3) Your Answer: "+document.graph.uchkans[uchknans[0]].value+", "+document.graph.uchkans[uchknans[1]].value+" & "+document.graph.uchkans[uchknans[2]].value;
			else if(unchkans == 4)
				uansbox3.innerHTML = "3) Your Answer: "+document.graph.uchkans[uchknans[0]].value+", "+document.graph.uchkans[uchknans[1]].value+", "+document.graph.uchkans[uchknans[2]].value+" & "+document.graph.uchkans[uchknans[3]].value;
			else
				uansbox3.innerHTML = "3) Your Answer: ";

	if(unchkans == 2)
		{

			uchkans1 = document.graph.uchkans[uchknans[0]].value;	
			uchkans2 = document.graph.uchkans[uchknans[1]].value;

			if((chkans1 == uchkans1) && (chkans2 == uchkans2))
			{
				document.chkansi.src = "images/correct_green.gif";
				uansbox3.style.color = "green";
				scr++; tscr++;
			}
			else
			{
				document.chkansi.src = "images/wrong_black.gif";
				uansbox3.style.color = "red";
			}

		}
		else
		{
			document.chkansi.src = "images/wrong_black.gif";
	        uansbox3.style.color = "red";

		}

	if(surd1ans == undefined)
		surd1ans = "";

	 cansbox4.innerHTML = "4) Correct Answer: "+rd1ans;
	 uansbox4.innerHTML = "4) Your Answer: "+surd1ans;

	if(rd1ans == surd1ans)
	{
		document.rd1ansi.src = "images/correct_green.gif";
		uansbox4.style.color = "green";
		scr++; tscr++;
	}
	else
	{
		document.rd1ansi.src = "images/wrong_black.gif";
		uansbox4.style.color = "red";
	}

	if(surd2ans == undefined)
		surd2ans = "";

	cansbox5.innerHTML = "5) Correct Answer: "+rd2ans;
	uansbox5.innerHTML = "5) Your Answer: "+surd2ans;

	if(rd2ans == surd2ans)
	{
		document.rd2ansi.src = "images/correct_green.gif";
		uansbox5.style.color = "green";
		scr++; tscr++;
	}
	else
	{
		document.rd2ansi.src = "images/wrong_black.gif";
		uansbox5.style.color = "red";
	}

	document.graph.scrbox.value = scr +" / 5";
	document.graph.tscrbox.value = tscr +" / "+tques;
	tques += 5;

	flag = 0;

}



function gm() //select unique question..
	{ 
	
	var j=0;
	
	while ( lk == 0 ) 
		{ 
		 rno = Math.floor(Math.random() * noq + 1) ;
		  if ( rno >= noq ) continue ;
		  if ( q > noq ) 
		   {
			  alert("Data Bank has been Exhausted."); break ;
		   }

		   for(j=0 ; j<= q ; j++)
			{
			 if (arr[j] == rno )
			  {
				flag = 1 ; break ; 
			   }
			 else
				flag = 0 ;
			}
			 if ( flag == 1 ) continue ;
			 if ( flag == 0 && q < noq ) 
			 {   
				 arr[q++] = rno ; 				 
				 break ;
			} 
		}
	}
