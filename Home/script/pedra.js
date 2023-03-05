function pedra() {
  var acoPossuido = parseInt(document.getElementById('pedra-heroic').value) || 0;
  var raroPossuido = parseInt(document.getElementById('pedra-raro').value)/10 || 0;
  var heroic=100;
  var acoRestante = heroic - acoPossuido - raroPossuido;
  var reqNecessario, raroNecessario, poraro, poreq, pototal, cobreraro, cobrereq, cobretotal, dar_raro, dar_req, dar_total;

  if (raroPossuido === 1000/10) {
      acoRestante=100-acoPossuido;
      reqNecessario = 0;
      raroNecessario = 0;
      cobretotal = acoRestante*20000;
      dar_total = acoRestante*5000;
      pototal = acoRestante*25;
  } else {
      reqNecessario = acoRestante * 100;
      raroNecessario = acoRestante * 10;
      //po magico necessario
      poraro=raroNecessario/10*25;
      poreq=reqNecessario/10*2;
      pototal=poraro+poreq;
      //cobre necessario
      cobreraro=raroNecessario/10*20000;
      cobrereq=reqNecessario/10*2000;
      cobretotal=cobreraro+cobrereq;
      //darksteel necessario
      dar_raro=raroNecessario/10*5000;
      dar_req=reqNecessario/10*1000;
      dar_total=dar_raro+dar_req;
  }

  document.getElementById('p-aco-restante').innerHTML = acoRestante > 0 ? acoRestante : '0';
  document.getElementById('p-necessario').innerHTML = reqNecessario.toLocaleString();
  document.getElementById('p-raro-necessario').innerHTML = raroNecessario > 0 ? raroNecessario.toLocaleString() : '0';
  document.getElementById('p-cobre').innerHTML = cobretotal > 0 ? cobretotal.toLocaleString() : '0';
  document.getElementById('p-dark').innerHTML = dar_total > 0 ? dar_total.toLocaleString() : '0';
  document.getElementById('p-magic').innerHTML = pototal > 0 ? pototal.toLocaleString() : '0';
}

document.getElementById('pedra-heroic').addEventListener('input', function() {
  pedra();
});

document.getElementById('pedra-raro').addEventListener('input', function() {
  pedra();
});
