<template>
    <v-card>
            <v-card-title>Question 1</v-card-title>
            <v-card-text>
              <v-row >
                <v-col>
                  <v-select
                    :items="typeQuestion"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                  :items="orderQuestion"
                  ></v-select>
                </v-col>
                <v-col>
                   <v-checkbox
                    input-value="true"
                    value
                    label = "Ordered"
                  >Ordered</v-checkbox>
                </v-col>
                <v-col>
                  <v-select
                  :items="columns"
                  ></v-select>
                </v-col>
                <v-col>
                   <v-checkbox
                    input-value="true"
                    label = "Boxed"
                  >Ordered</v-checkbox>
                </v-col>
                <v-col>
                  <v-btn
                    icon
                    color="blue"
                    
                    sm="0"
                    md="0"
                  >
                    <v-icon>mdi-help-circle</v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                    <v-btn
                    icon
                    color="blue"
                    sm="3"
                    md="3"
                  >
                    <v-icon>mdi-help-circle</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text>
                <v-text-field
                label="Saisir l'intitulé de la question"
                ></v-text-field>
            </v-card-text>
            <v-card-text>
              <answer/>
            </v-card-text>
          </v-card>
</template>

<script>

  import Answer from './Answer'


  export default {
    name: 'Question',

      components: {
      Answer
    },
  }
</script>
