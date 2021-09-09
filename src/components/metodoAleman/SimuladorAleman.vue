<template>
  <div>
<table>

  <tr>
    <td>
      <label>Monto Solicitado:</label>
    </td>
    <td>
      <input v-model="montoSolicitado">
    </td>
  </tr>

  <tr>
    <td>
      <label>Periodicidad:</label>
    </td>
    <td>
      <input v-model="periodicidad">
    </td>
  </tr>



  <tr>
    <td>
      <label>Numero Cuotas:</label>
    </td>
    <td>
      <input v-model="numeroCuotas">
    </td>
  </tr>

  <tr>
    <td>
      <label>Interes:</label>
    </td>
    <td>
      <input v-model="interes">
    </td>
  </tr>

  <tr>
    <input type="button" id="simular" value="Simular" v-on:click="simular">
  </tr>
</table>
  <br><br>
    <h1>Tabla de Amortización</h1>
  <table style="margin: 0 auto; width: 80%; border-color: black;" border="1;">
    <tr>
      <td>Cuota</td>
      <td>Cuota Pagar</td>
      <td>Interes</td>
      <td>Capital Amortizado</td>
      <td>Capital Vivo</td>
    </tr>
    <tr v-for="amortizacion in amortizaciones" v-bind:key="amortizacion.cuota">
      <td style="width: 10%">{{amortizacion.cuota}}</td>
      <td style="width: 10%; text-align: right;">{{formatoMoneda(amortizacion.cuotaPagar)}}</td>
      <td style="width: 10%;text-align: right;">{{formatoMoneda(amortizacion.interes)}}</td>
      <td style="width: 10%;text-align: right;">{{formatoMoneda(amortizacion.capitalAmortizado)}}</td>
      <td style="width: 10%;text-align: right;">{{formatoMoneda(amortizacion.capitalVivo)}}</td>

    </tr>
  </table>
</div>
</template>

<script>
import MetodoAlemanService from "@/servicios/metodoAleman/MetodoAlemanService";

export default {
  name: "SimuladorAleman",
  data(){
    return {
      montoSolicitado:0.0,
      periodicidad:"Mensual",
      numeroCuotas:0,
      interes:0,
      amortizaciones:null
    }
  },
  methods:{
    simular(){
      const formulario = {
                            montoSolicitado: this.montoSolicitado,
                            periodicidad:this.periodicidad,
                            numeroCuotas:this.numeroCuotas,
                            tasaNominal:this.interes
      };
      MetodoAlemanService.simular(formulario).then(response=> (this.amortizaciones = response.data))
      console.log(this.amortizaciones)
    },
    formatoMoneda(valor) {
      let val = (valor/1).toFixed(2).replace('.', ',')
      return "$"+val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>

<style scoped>

</style>