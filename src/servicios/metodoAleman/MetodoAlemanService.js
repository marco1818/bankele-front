import BaseServicio from "@/utils/BaseServicio"

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export default {
    simular(formulario) {
        return BaseServicio.post(`metodoAleman/tablaAmortizacion`,formulario, config)
    }

}