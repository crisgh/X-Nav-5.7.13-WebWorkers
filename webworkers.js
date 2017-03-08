
self.onmessage = function(event) {
  console.log("Numeros recibidos: " + event.data);
  var n = 1;
  var cont = 0;
  primelist = "";
  search: while (n<event.data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
        // buscarPrimos
        primelist += " " + n;
        cont++;
        if(cont==250){
          self.postMessage(primelist);
          cont=0;
          primelist=""
        }
    }
    self.postMessage(primelist);
    self.postMessage("terminado");
}
