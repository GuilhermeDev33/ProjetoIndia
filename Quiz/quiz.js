var certos=0;
var erros=0;
var resp=0;

function verifica1(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}

		event.target.classList.toggle('active');

		document.Fquiz.B1.disabled=true;
   		document.Fquiz.B2.disabled=true;
   		document.Fquiz.B3.disabled=true;
   		document.Fquiz.B4.disabled=true;
   		resp++;
	}

function verifica2(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}

		event.target.classList.toggle('active');
		document.Fquiz.B5.disabled=true;
   		document.Fquiz.B6.disabled=true;
   		document.Fquiz.B7.disabled=true;
   		document.Fquiz.B8.disabled=true;
   		resp++;
	}

function verifica3(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}

		event.target.classList.toggle('active');
		document.Fquiz.B9.disabled=true;
   		document.Fquiz.B10.disabled=true;
   		document.Fquiz.B11.disabled=true;
   		document.Fquiz.B12.disabled=true;
   		resp++;
	}

function verifica4(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}

		event.target.classList.toggle('active');
		document.Fquiz.B13.disabled=true;
   		document.Fquiz.B14.disabled=true;
   		document.Fquiz.B15.disabled=true;
   		document.Fquiz.B16.disabled=true;
   		resp++;
	}

function verifica5(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}

		event.target.classList.toggle('active');
		document.Fquiz.B17.disabled=true;
   		document.Fquiz.B18.disabled=true;
   		document.Fquiz.B19.disabled=true;
   		document.Fquiz.B20.disabled=true;
   		resp++;
	}

function verifica6(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}
		event.target.classList.toggle('active');
		document.Fquiz.B21.disabled=true;
   		document.Fquiz.B22.disabled=true;
   		document.Fquiz.B23.disabled=true;
   		document.Fquiz.B24.disabled=true;
   		resp++;
	}

function verifica7(rec, event){
		if(rec == 1){
			certos++;
		}else{
			erros++;
		}
		event.target.classList.toggle('active');
		document.Fquiz.B25.disabled=true;
   		document.Fquiz.B26.disabled=true;
   		resp++;
	}

function contar(){
	if (resp == 7) {
   		document.Fquiz.certosQ.value = certos;
   	}
}