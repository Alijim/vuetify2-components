<template>
  <div class="about">

      <section v-if="errored">
        <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
      </section>

      <section v-else>
        <div v-if="loading">Chargement...</div>

    <h2>Collaborators</h2>
    <v-combobox
          v-model="select"
          label="Add a username"
          :items="ctrl.users"
          chips
          multiple
        ></v-combobox>  
    <h2>Raw exports</h2>

	<p>
     <v-btn
      elevation="2"
      class="py-4 mx-2"
      color="primary"
      v-on:click="printValues()"
      >Download <small>project.zip</small>
    </v-btn>

    <v-btn
      elevation="2"
      class="py-4 mx-2"
      color="primary"
      >Download <small>export.ods</small>
    </v-btn>

    <v-btn
      elevation="2"
      class="py-4 mx-2"
      color="primary"
      >Download <small>students.csv</small>
    </v-btn>
	</p>

  <h2>Options</h2>
	<p>
		<v-btn
      elevation="2"
      class="py-4 mx-2"
      color="orange"
      >Save option
    </v-btn>
	</p>

  <h3>Print</h3>
      <v-text-field
        :value="ctrl.options.nombre_copies"
        hide-details
        single-line
        label="Nb of copies"
        hint="Nb of copies"
        type="number"
      /> 
      <v-checkbox
        input-value="true"
        value
        label = "Print answersheet in separate file."
      >
      </v-checkbox>

  <h3>Scan</h3>
	<p>
		<label>Threshold: <span
            class="font-weight-light"
            v-text="percent"
          ></span> black filled</label>
    <v-slider
        v-model="percent"
        :value="ctrl.options.seuil"
        step="0.1"
        min = "0"
        max = "1"
        thumb-label        
        >
    </v-slider>
  
		<label> When one uses a separate answer sheet, letters or digits use at least 0.5. </label>
	</p>

  <p>
		<b>Type of scans</b>
		<v-select
          :items="typeOfScan"
          label="Type of scans"
          dense
        ></v-select>
	</p>


    
	<h3>Annotation</h3>
	<v-text-field
  v-model="anotate"
      :value="ctrl.options.modele_regroupement"

    label="Annotation filename pattern"
  ></v-text-field>
	<p>(ID) is replaced by the student's name.<br/>
		(N) is replaced by the student number.<br/>
		(<i>COLNAME</i>) any other column name in the student.csv</p>

  
     <div>
		Click to add:
      <v-chip
      class="ma-2"
      v-on:click="addColToFileName('(FinalGrade)')"
      >
      FinalGrade
      </v-chip>
      <v-chip
      class="ma-2"
      v-on:click="addColToFileName('(Total)')"

      >
      Total
      </v-chip>
      <v-chip
      class="ma-2"
      v-on:click="addColToFileName('(id)')"

      >
      Id
      </v-chip>
      <v-chip
      class="ma-2"
      v-on:click="addColToFileName('(Name)')"

      >
      Name
      </v-chip>
		</div>

  <h3>Annotation</h3>
  <p>{{ctrl.options.verdict}}</p>
	<v-text-field
      v-model="annotation"

    :value="ctrl.options.verdict"
    label="Annotation filename pattern">
  </v-text-field>

    <p>
		%(ID) is replaced by the student's name.<br/>
		%(COLNAME) is replaced by the value of column COLNAME in the students list for the current student.<br/>
		%S is replaced by the student's total score.<br/>
		%M is replaced by the maximum total score.<br/>
		%s is replaced by the student's mark.<br/>
		%m is replaced by the maximum mark.
    </p>

    <div>
		Click to add:
      <v-chip
      class="ma-2"
      v-on:click="addColToAnnotation('(FinalGrade)')"
      >
      FinalGrade
      </v-chip>
      <v-chip
      class="ma-2"
      v-on:click="addColToAnnotation('(Total)')"

      >
      Total
      </v-chip>
      <v-chip
      class="ma-2"
      v-on:click="addColToAnnotation('(id)')"

      >
      Id
      </v-chip>
      <v-chip
      class="ma-2"
      v-on:click="addColToAnnotation('(Name)')"

      >
      Name
      </v-chip>
		</div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr> 
            <th>Preview</th>
            <th>To be ticked</th>
            <th>Ticked</th>
            <th>Type</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <annotation-marks :typeIcon= "ctrl.options.symbole_0_0_type"  :colorIcon = "ctrl.options.symbole_0_0_color" toBeTicked = "no" ticked="no"></annotation-marks>
          <annotation-marks :typeIcon= "ctrl.options.symbole_0_1_type" :colorIcon = "ctrl.options.symbole_0_1_color" toBeTicked = "no" ticked="yes"></annotation-marks>
          <annotation-marks :typeIcon= "ctrl.options.symbole_1_0_type" :colorIcon = "ctrl.options.symbole_1_0_color" toBeTicked = "yes" ticked="no"></annotation-marks>
          <annotation-marks :typeIcon= "ctrl.options.symbole_1_1_type" :colorIcon = "ctrl.options.symbole_1_1_color" toBeTicked = "yes" ticked="yes"></annotation-marks>
        </tbody>
        
      </template>
    </v-simple-table>
    </section>
</div>

</template>

<script>

import AnnotationMarks from '../components/AnnotationMarks'
import axios from 'axios';



  export default {



    name: 'Option',

      components: {
      AnnotationMarks,
    },

    /*data: () => ({ 
      anotate : '(id)_(ID)',
      annotation : '',
      ctrl : '',
      test: 'hello',
      percent : '0.2',
      copyNumber : 0,
      drawer: null,
      typeOfScan : ['Different answer sheets', 'Some answer sheets were photocopied'],
      
    }),*/

    data: () => ({ 
      anotate : '(id)_(ID)',
      annotation : '',
      ctrl : null,
      errored : false,
      loading : true,
      test: 'hello',
      percent : '0.2',
      copyNumber : 0,
      isLoaded : false,
      drawer: null,
      typeOfScan : ['Different answer sheets', 'Some answer sheets were photocopied'],
      
    }),

    beforeMount(){
      this.ctrl = this.fetchData()
      this.printValues()
    },

   

    mounted(){
      axios.get('option.json')
        .then(res => this.ctrl = res.data)
        .catch(err => {
        
          console.log(err)
          this.errored = true
        
        })
        .finally(() => this.loading = false)
    },


    methods: {

      addColToFileName(name) {
        this.anotate += name
      },

      addColToAnnotation(name) {
        this.annotation += name
        
      },

      printValues(){
        //this.percent = this.ctrl.options.seuil
        this.percent = this.ctrl.options.seuil
       },

      insertValues(v) {
        this.ctrl = v
      },

      fetchData() {
        axios.get('option.json')
        .then(res => res.data.data)
        .catch(err => console.log(err))
      },

  
      getValues(){

        this.fetchData();

        /*
        this.isLoaded = true

        return this.fetchData().then(items =>
        {
          this.isLoaded = false
          return {items}
        }
        )*/

    
        /*return this.axios.get('option.json')
        .then(res => this.insertValues(res.data))
        .catch(err => console.log(err))*/

      //this.ctrl.options.seuil
      //this.copyNumber =  parseInt(this.ctrl.options.nombre_copies)

      },
    
    }

  }
</script>