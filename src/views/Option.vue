<template>
  <div class="about">
    <h1>This is an page</h1>
    <h2>Collaborators</h2>
	<v-chip placeholder="add another username" secondary-placeholder="+username"></v-chip>
  <h2>Raw exports</h2>
	<p>
     <v-btn
      elevation="2"
      class="py-4 mx-2"
      color="primary"
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
      color="primary"
      >Save option
    </v-btn>
	</p>

  <h3>Print</h3>
      <v-text-field
        v-model="numberValue"
        hide-details
        single-line
        label="Nb of copies"
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
            class="text-h2 font-weight-light"
            v-text="percent"
          ></span> black filled</label>
    <v-slider
        v-model="percent"
        step="5"
        thumb-label>
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
    label="Annotation filename pattern"
    value="(id)_(ID)"
  ></v-text-field>
	<p>(ID) is replaced by the student's name.<br/>
		(N) is replaced by the student number.<br/>
		(<i>COLNAME</i>) any other column name in the student.csv</p>

  
     <div>
		Click to add:
      <v-chip
      class="ma-2"
      >
      FinalGrade
      </v-chip>
      <v-chip
      class="ma-2"
      >
      Total
      </v-chip>
      <v-chip
      class="ma-2"
      >
      Id
      </v-chip>
      <v-chip
      class="ma-2"
      >
      Name
      </v-chip>
		</div>

  <h3>Annotation</h3>
	<v-text-field
    label="Annotation filename pattern"
    value="Mark: %(FinalGrade)/%m (total score: %S/%M)">
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
      >
      FinalGrade
      </v-chip>
      <v-chip
      class="ma-2"
      >
      Total
      </v-chip>
      <v-chip
      class="ma-2"
      >
      Id
      </v-chip>
      <v-chip
      class="ma-2"
      >
      Name
      </v-chip>
		</div>

    

    

</div>

</template>

<script>


  export default {

    name: 'Option',



    data: () => ({ 
      drawer: null,
      typeOfScan : ['Different answer sheets', 'Some answer sheets were photocopied'],
    }),
  }
</script>