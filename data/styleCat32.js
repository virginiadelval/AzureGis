// function getCodigodeCategoria32(feature) {
//     let codCategoria;
//     let codLink = feature.properties.COD_LINK;

//     if (codLink === '102030405060') {
//         codCategoria = '2';
//     } else if (codLink === '102030415160' || codLink === '102030415061' || codLink === '102030425060') {
//         codCategoria = '3';
//     } else if (codLink === '102030405160' || codLink === '102030405061') {
//         codCategoria = '4';
//     } else if (codLink === '102030415161') {
//         codCategoria = '5';
//     } else if (codLink === '102030405161') {
//         codCategoria = '6';
//     } else if (codLink === '102131415060') {
//         codCategoria = '7';
//     } else if (codLink === '102131405060') {
//         codCategoria = '8';
//     } else if (codLink === '102131415061' || codLink === '102131415160' || codLink === '102131425060' || codLink === '102131405160' || codLink === '102131405061') {
//         codCategoria = '9';
//     } else if (codLink === '102131415161' || codLink === '102131425160' || codLink === '102131425061') {
//         codCategoria = '10';
//     } else if (codLink === '102131405161') {
//         codCategoria = '11';
//     } else if (codLink === '102131425161') {
//         codCategoria = '12';
//     } else if (codLink === '102132415060') {
//         codCategoria = '13';
//     } else if (codLink === '102132405060') {
//         codCategoria = '14';
//     } else if (codLink === '102132415061' || codLink === '102132415160' || codLink === '102032405061') {
//         codCategoria = '15';
//     } else if (codLink === '102132405061' || codLink === '102132405160') {
//         codCategoria = '16';
//     } else if (codLink === '102132415161' || codLink === '102132425061' || codLink === '102132425160' || codLink === '102332425160') {
//         codCategoria = '17';
//     } else if (codLink === '102132405161') {
//         codCategoria = '18';
//     } else if (codLink === '102132425161') {
//         codCategoria = '19';
//     } else if (codLink === '102133415060' || codLink === '102233415060') {
//         codCategoria = '20';
//     } else if (codLink === '102133405060') {
//         codCategoria = '21';
//     } else if (codLink === '102133415061' || codLink === '102133415160' || codLink === '102133425060' || codLink === '102233415061' || codLink === '102133405061' || codLink === '102133405160') {
//         codCategoria = '22';
//     } else if (codLink === '102133415161' || codLink === '102133425061' || codLink === '102133425160' || codLink === '102233415161' || codLink === '102233425061' || codLink === '102333405061' || codLink === '102333405160' || codLink === '102133405161' || codLink === '112133415061' || codLink === '122133415061' || codLink === '122133415160' || codLink === '122133425060' || codLink === '122233415061' || codLink === '122333405060') {
//         codCategoria = '23';
//     } else if (codLink === '102333415060' || codLink === '102333415160' || codLink === '102333405060') {
//         codCategoria = '24';
//     } else if (codLink === '102333415061' || codLink === '102133425161' || codLink === '102333405161' || codLink === '102333415161' || codLink === '102233425161' || codLink === '102333425061' || codLink === '102333425160' || codLink === '112133425061' || codLink === '112133405061' || codLink === '112133415161' || codLink === '112133405161' || codLink === '122233415161' || codLink === '122333415061' || codLink === '122133425061' || codLink === '122133405161' || codLink === '122133415161') {
//         codCategoria = '25';
//     } else if (codLink === '102333425161' || codLink === '112133425161' || codLink === '122133425161' || codLink === '122333415161') {
//         codCategoria = '26';
//     } else if (codLink === '102134415060' || codLink === '102134405060') {
//         codCategoria = '27';
//     } else if (codLink === '102134415061' || codLink === '102134425060' || codLink === '102134405061' || codLink === '102134405160' || codLink === '102134415160' || codLink === '102234415061' || codLink === '102334405060' || codLink === '102334415060' || codLink === '112134415060' || codLink === '112134405060' || codLink === '122134415060') {
//         codCategoria = '28';
//     } else if (codLink === '102334415061' || codLink === '102334415160' || codLink === '102134415161' || codLink === '102134425061' || codLink === '102134425160' || codLink === '102234415161' || codLink === '102334405061' || codLink === '102334405160' || codLink === '112134415160' || codLink === '112134415061' || codLink === '112234415061' || codLink === '112334405060' || codLink === '122134415160' || codLink === '122134415061' || codLink === '122234415061' || codLink === '102134405161' || codLink === '122134405160' || codLink === '112134405061' || codLink === '122134405061') {
//         codCategoria = '29';
//     } else if (codLink === '102334415161' || codLink === '102334425061' || codLink === '102334425160' || codLink === '112034415161' || codLink === '122334415061' || codLink === '112334415061' || codLink === '102134425161' || codLink === '102234425161' || codLink === '112234415161' || codLink === '112134425061' || codLink === '122134425061' || codLink === '112134415161' || codLink === '102334405161' || codLink === '112334405061' || codLink === '112134425160' || codLink === '122134415161' || codLink === '122234415161' || codLink === '112134405161' || codLink === '122134405161') {
//         codCategoria = '30';
//     } else if (codLink === '102334425161' || codLink === '112334415161' || codLink === '112334425061' || codLink === '112334425160' || codLink === '112134425161' || codLink === '122134425161' || codLink === '122234425161' || codLink === '122334405161' || codLink === '112234425161' || codLink === '112334405161' || codLink === '122334415161' || codLink === '122334425061') {
//         codCategoria = '31';
//     } else if (codLink === '112334425161' || codLink === '122334425161') {
//         codCategoria = '32';
//     } else {
//         codCategoria = '-';
//     }

//     return codCategoria;
// }

// function getCodigodeCategoria31(COD_LINK) {
//     let codCategoria;

//     switch (COD_LINK) {
//         case '102030405060': 
//             codCategoria = '2';
//             break;
//         case '102030415160': 
//         case '102030415061': 
//         case '102030425060': 
//             codCategoria = '3';
//             break;
//         case '102030405160': 
//         case '102030405061': 
//             codCategoria = '4';
//             break;
//         case '102030415161': 
//             codCategoria = '5';
//             break;
//         case '102030405161': 
//             codCategoria = '6';
//             break;
//         case '102131415060': 
//             codCategoria = '7';
//             break;
//         case '102131405060': 
//             codCategoria = '8';
//             break;
//         case '102131415061': 
//         case '102131415160': 
//         case '102131425060': 
//         case '102131405160': 
//         case '102131405061': 
//             codCategoria = '9';
//             break;
//         case '102131415161': 
//         case '102131425160': 
//         case '102131425061': 
//             codCategoria = '10';
//             break;
//         case '102131405161': 
//             codCategoria = '11';
//             break;
//         case '102131425161': 
//             codCategoria = '12';
//             break;
//         case '102132415060': 
//             codCategoria = '13';
//             break;
//         case '102132405060': 
//             codCategoria = '14';
//             break;
//         case '102132415061': 
//         case '102132415160': 
//         case '102032405061': 
//             codCategoria = '15';
//             break;
//         case '102132405061': 
//         case '102132405160': 
//             codCategoria = '16';
//             break;
//         case '102132415161': 
//         case '102132425061': 
//         case '102132425160': 
//         case '102332425160': 
//             codCategoria = '17';
//             break;
//         case '102132405161': 
//             codCategoria = '18';
//             break;
//         case '102132425161': 
//             codCategoria = '19';
//             break;
//         case '102133415060': 
//         case '102233415060': 
//             codCategoria = '20';
//             break;
//         case '102133405060': 
//             codCategoria = '21';
//             break;
//         case '102133415061': 
//         case '102133415160': 
//         case '102133425060': 
//         case '102233415061': 
//         case '102133405061': 
//         case '102133405160': 
//             codCategoria = '22';
//             break;
//         case '102133415161': 
//         case '102133425061': 
//         case '102133425160': 
//         case '102233415161': 
//         case '102233425061': 
//         case '102333405061': 
//         case '102333405160': 
//         case '102133405161': 
//         case '112133415061': 
//         case '122133415061': 
//         case '122133415160': 
//         case '122133425060': 
//         case '122233415061': 
//         case '122333405060': 
//             codCategoria = '23';
//             break;
//         case '102333415060': 
//         case '102333415160': 
//         case '102333405060': 
//             codCategoria = '24';
//             break;
//         case '102333415061': 
//         case '102133425161': 
//         case '102333405161': 
//         case '102333415161': 
//         case '102233425161': 
//         case '102333425061': 
//         case '102333425160': 
//         case '112133425061': 
//         case '112133405061': 
//         case '112133415161': 
//         case '112133405161': 
//         case '122233415161': 
//         case '122333415061': 
//         case '122133425061': 
//         case '122133405161': 
//         case '122133415161': 
//             codCategoria = '25';
//             break;
//         case '102333425161': 
//         case '112133425161': 
//         case '122133425161': 
//         case '122333415161': 
//             codCategoria = '26';
//             break;
//         case '102134415060': 
//         case '102134405060': 
//             codCategoria = '27';
//             break;
//         case '102134415061': 
//         case '102134425060': 
//         case '102134405061': 
//         case '102134405160': 
//         case '102134415160': 
//         case '102234415061': 
//         case '102334405060': 
//         case '102334415060': 
//         case '112134415060': 
//         case '112134405060': 
//         case '122134415060': 
//             codCategoria = '28';
//             break;
//         case '102334415061': 
//         case '102334415160': 
//         case '102134415161': 
//         case '102134425061': 
//         case '102134425160': 
//         case '102234415161': 
//         case '102334405061': 
//         case '102334405160': 
//         case '112134415160': 
//         case '112134415061': 
//         case '112234415061': 
//         case '112334405060': 
//         case '122134415160': 
//         case '122134415061': 
//         case '122234415061': 
//         case '102134405161': 
//         case '122134405160': 
//         case '112134405061': 
//         case '122134405061': 
//             codCategoria = '29';
//             break;
//         case '102334415161': 
//         case '102334425061': 
//         case '102334425160': 
//         case '112034415161': 
//         case '122334415061': 
//         case '112334415061': 
//         case '102134425161': 
//         case '102234425161': 
//         case '112234415161': 
//         case '112134425061': 
//         case '122134425061': 
//         case '112134415161': 
//         case '102334405161': 
//         case '112334405061': 
//         case '112134425160': 
//         case '122134415161': 
//         case '122234415161': 
//         case '112134405161': 
//         case '122134405161': 
//             codCategoria = '30';
//             break;
//         case '102334425161': 
//         case '112334415161': 
//         case '112334425061': 
//         case '112334425160': 
//         case '112134425161': 
//         case '122134425161': 
//         case '122234425161': 
//         case '122334405161': 
//         case '112234425161': 
//         case '112334405161': 
//         case '122334415161': 
//         case '122334425061': 
//             codCategoria = '31';
//             break;
//         case '112334425161': 
//         case '122334425161': 
//             codCategoria = '32';
//             break;
//         default: 
//             codCategoria = '-';
//     }

//     return codCategoria;
// }

function getCodigodeCategoria(feature) {
    let codCategoria;
    let codLink = feature.properties.COD_LINK;

    if (codLink === '102030405060') {
        codCategoria = '2';
    } else if (codLink === '102030415160' || codLink === '102030415061' || codLink === '102030425060') {
        codCategoria = '3';
    } else if (codLink === '102030405160' || codLink === '102030405061') {
        codCategoria = '4';
    } else if (codLink === '102030415161') {
        codCategoria = '5';
    } else if (codLink === '102030405161') {
        codCategoria = '6';
    } else if (codLink === '102131415060') {
        codCategoria = '7';
    } else if (codLink === '102131405060') {
        codCategoria = '8';
    } else if (codLink === '102131415061' || codLink === '102131415160' || codLink === '102131425060' || codLink === '102131405160' || codLink === '102131405061') {
        codCategoria = '9';
    } else if (codLink === '102131415161' || codLink === '102131425160' || codLink === '102131425061') {
        codCategoria = '10';
    } else if (codLink === '102131405161') {
        codCategoria = '11';
    } else if (codLink === '102131425161') {
        codCategoria = '12';
    } else if (codLink === '102132415060') {
        codCategoria = '13';
    } else if (codLink === '102132405060') {
        codCategoria = '14';
    } else if (codLink === '102132415061' || codLink === '102132415160' || codLink === '102032405061') {
        codCategoria = '15';
    } else if (codLink === '102132405061' || codLink === '102132405160') {
        codCategoria = '16';
    } else if (codLink === '102132415161' || codLink === '102132425061' || codLink === '102132425160' || codLink === '102332425160') {
        codCategoria = '17';
    } else if (codLink === '102132405161') {
        codCategoria = '18';
    } else if (codLink === '102132425161') {
        codCategoria = '19';
    } else if (codLink === '102133415060' || codLink === '102233415060') {
        codCategoria = '20';
    } else if (codLink === '102133405060') {
        codCategoria = '21';
    } else if (codLink === '102133415061' || codLink === '102133415160' || codLink === '102133425060' || codLink === '102233415061' || codLink === '102133405061' || codLink === '102133405160') {
        codCategoria = '22';
    } else if (codLink === '102133415161' || codLink === '102133425061' || codLink === '102133425160' || codLink === '102233415161' || codLink === '102233425061' || codLink === '102333405061' || codLink === '102333405160' || codLink === '102133405161' || codLink === '112133415061' || codLink === '122133415061' || codLink === '122133415160' || codLink === '122133425060' || codLink === '122233415061' || codLink === '122333405060') {
        codCategoria = '23';
    } else if (codLink === '102333415060' || codLink === '102333415160' || codLink === '102333405060') {
        codCategoria = '24';
    } else if (codLink === '102333415061' || codLink === '102133425161' || codLink === '102333405161' || codLink === '102333415161' || codLink === '102233425161' || codLink === '102333425061' || codLink === '102333425160' || codLink === '112133425061' || codLink === '112133405061' || codLink === '112133415161' || codLink === '112133405161' || codLink === '122233415161' || codLink === '122333415061' || codLink === '122133425061' || codLink === '122133405161' || codLink === '122133415161') {
        codCategoria = '25';
    } else if (codLink === '102333425161' || codLink === '112133425161' || codLink === '122133425161' || codLink === '122333415161') {
        codCategoria = '26';
    } else if (codLink === '102134415060' || codLink === '102134405060') {
        codCategoria = '27';
    } else if (codLink === '102134415061' || codLink === '102134425060' || codLink === '102134405061' || codLink === '102134405160' || codLink === '102134415160' || codLink === '102234415061' || codLink === '102334405060' || codLink === '102334415060' || codLink === '112134415060' || codLink === '112134405060' || codLink === '122134415060') {
        codCategoria = '28';
    } else if (codLink === '102334415061' || codLink === '102334415160' || codLink === '102134415161' || codLink === '102134425061' || codLink === '102134425160' || codLink === '102234415161' || codLink === '102334405061' || codLink === '102334405160' || codLink === '112134415160' || codLink === '112134415061' || codLink === '112234415061' || codLink === '112334405060' || codLink === '122134415160' || codLink === '122134415061' || codLink === '122234415061' || codLink === '102134405161' || codLink === '122134405160' || codLink === '112134405061' || codLink === '122134405061') {
        codCategoria = '29';
    } else if (codLink === '102334415161' || codLink === '102334425061' || codLink === '102334425160' || codLink === '112034415161' || codLink === '122334415061' || codLink === '112334415061' || codLink === '102134425161' || codLink === '102234425161' || codLink === '112234415161' || codLink === '112134425061' || codLink === '122134425061' || codLink === '112134415161' || codLink === '102334405161' || codLink === '112334405061' || codLink === '112134425160' || codLink === '122134415161' || codLink === '122234415161' || codLink === '112134405161' || codLink === '122134405161') {
        codCategoria = '30';
    } else if (codLink === '102334425161' || codLink === '112334415161' || codLink === '112334425061' || codLink === '112334425160' || codLink === '112134425161' || codLink === '122134425161' || codLink === '122234425161' || codLink === '122334405161' || codLink === '112234425161' || codLink === '112334405161' || codLink === '122334415161' || codLink === '122334425061') {
        codCategoria = '31';
    } else if (codLink === '112334425161' || codLink === '122334425161') {
        codCategoria = '32';
    } else {
        codCategoria = '-';
    }

    return codCategoria;
}


function styleCategoria32(feature) {
    const { color, weight } = getCodigodeCategoria(feature.properties.COD_LINK);
    return {
      color: color,
      weight: weight,
      opacity: 0.7,
      dashArray: "0",
      fillOpacity: 0.5,
    };
  }


function categoria31_pop(feature, layer) {
    let tipoCalle;
    if (feature.properties.COD_CALLE === 10) {
        tipoCalle = 'Asfalto/Hormigón/Adoquín';
    } else if (feature.properties.COD_CALLE === 11) {
        tipoCalle = 'Tierra con cordón';
    } else if (feature.properties.COD_CALLE === 12) {
        tipoCalle = 'Tierra sin cordón';
    } else {
        tipoCalle = 'Desconocido';
    }

    let tipoRecol;
    if (feature.properties.COD_RECOL === 20) {
        tipoRecol = 'Servicio Especial';
    } else if (feature.properties.COD_RECOL === 21) {
        tipoRecol = 'Recolección 6 veces';
    } else if (feature.properties.COD_RECOL === 22) {
        tipoRecol = 'Contenedores';
    } else if (feature.properties.COD_RECOL === 23) {
        tipoRecol = 'Sin servicios';
    } else {
        tipoRecol = 'Desconocido'; 
    }

    let tipoBarrido;
    if (feature.properties.COD_BARRIDO === 30) {
        tipoBarrido = 'Servicio Especial';
    } else if (feature.properties.COD_BARRIDO === 31) {
        tipoBarrido = 'Barrido 6 veces';
    } else if (feature.properties.COD_BARRIDO === 32) {
        tipoBarrido = 'Barrido 3 veces';
    } else if (feature.properties.COD_BARRIDO === 33) {
        tipoBarrido = 'Barrido 1 o 2 veces';
    } else if (feature.properties.COD_BARRIDO === 34) {
        tipoBarrido = 'Sin servicios';
    } else {
        tipoBarrido = 'Desconocido'; 
    }

    let tipoLuz;
    if (feature.properties.COD_LUSAL === 40) {
        tipoLuz = 'Con Luces LED';
    } else if (feature.properties.COD_LUSAL === 41) {
        tipoLuz = 'No LED';
    } else if (feature.properties.COD_LUSAL === 42) {
        tipoLuz = 'Sin servicios';
    } else {
        tipoLuz = 'Desconocido'; 
    }

    let tipoEV;
    if (feature.properties.COD_SEV === 50) {
        tipoEV = 'Con Espacio Verde';
    } else if (feature.properties.COD_SEV === 51) {
        tipoEV = 'Sin Espacio Verde';
    } else {
        tipoEV = 'Desconocido'; 
    }

    let tipoSEM;
    if (feature.properties.COD_SEMAF === 60) {
        tipoSEM = 'Con Semáforo';
    } else if (feature.properties.COD_SEMAF === 61) {
        tipoSEM = 'Sin Semáforo';
    } else {
        tipoSEM = 'Desconocido'; 
    }

    let codCategoria;
    let codLink = feature.properties.COD_LINK;

    // Mismo código de evaluación de 'codCategoria'...

    let popupContent =
        "<h4>Código de Categoria: " + feature.properties.COD_LINK + "</h4>" + "<br>" +
        "<h4>Código de 32 Categoria: " + codCategoria + "</h4><br>" +
        "<hr align='left' noshade='noshade' size='2' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b>Tipo de Calle: </b>" + tipoCalle + "<br>" +
        "<b>Recolección: </b>" + tipoRecol + "<br>" +
        "<b>Barrido: </b>" + tipoBarrido + "<br>" +
        "<b>Luminaria: </b>" + tipoLuz + "<br>" +
        "<b>Servicio en Espacios Verdes: </b>" + tipoEV + "<br>" +
        "<b>Semáforo: </b>" + tipoSEM + "<br>" +
        "</div>";

    layer.bindPopup(popupContent);
}

function eventOpenPopup(e) {
    var layer = e.layer;
    layer.closePopup();
    layer.openPopup();
}
