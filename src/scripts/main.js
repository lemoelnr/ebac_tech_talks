AOS.init();

const dataDoEvento= new Date("Apr 28, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAshoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000* 60 * 60 * 24;
    const horaEmMs = 1000* 60 * 60;
    const minutoEmMs = 1000* 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento/diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs)/horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs)/minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs)/1000);

    console.log(diasAteOEvento, horasAteOEvento, minutosAteOEvento, segundosAteOEvento);

    document.getElementById('contador').innerHTML = `começa ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAshoras);
        document.getElementById('contador').innerHTML = 'Evento expirador';
    }

},1000);
