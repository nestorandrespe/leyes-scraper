const axios = require('axios');
const apiUrl = 'http://localhost:1500';

const url = apiUrl + '/resultados/count'
const resp = axios.get(url)
.then(data=>console.log(data.data))
.catch(err => console.log(err))

const coleccion = 'cc'

const resultados = axios.post('http://www.suin-juriscol.gov.co/CiclopeWs/Ciclope.svc/Find',
    {
        "form": "jurisprudencia",
        "hitlist": "cc",
        "anio_desde": "1950",
        "anio_hasta": "1960",
        "tipo": "CorteConstitucional",
        "fields": "numero_proviencia|fecha_providencia|magistrado_ponente|extracto_relatoria",
        "Corporacion": "CorteConstitucional",
        // "norma_demandada": "Ley 1607 de 2012",
        "coleccion": coleccion,
        "usuario": "web",
        "passwd": "dA4qd1uUGLLtM6IK+1xiVQ=="
    }, 
    {
        headers: { 
            'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',
            'Content-Type' : 'text/plain' 
        }
    }
).then(data => {
    // ACA SE CARGA EL DATA
    console.log(data.data)

    let docs = data.data.docs

    docs.map(d => {
        // variable d es el documento
        // console.log(d)

        let titulo = d.title
        let fecha = d.fields[1].value
        // let extracto = 

        // axios.post(apiUrl + '/resultados', {
        //     title: titulo,
        //     date: fecha
        // })
    })
}).catch(err => console.log(err))