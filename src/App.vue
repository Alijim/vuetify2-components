<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main class="white">
      <v-container>
        <h1> Liste des composants </h1>
        <v-row>
          <v-col cols="2">
            <h2>Chip</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-chip
              v-if="chip1"
              class="ma-2"
              close
              @click:close="chip1 = false">
              alijim.bouverat
            </v-chip>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <h2>Cards</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col col="2">
            <v-card
              class="mx-auto my-12"
              max-width="374"
            >
            <v-card-text>
              <v-input >
                  <v-text-field
                  label="Username"
                  class="my-4"
                ></v-text-field>
              </v-input>
              <v-input>
                <v-text-field
                label="Password"
                ></v-text-field>
              </v-input>
            </v-card-text>
              <v-card-actions>
                  <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                  >
                    Login
                  </v-btn>
                    <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                  >
                    Create
                  </v-btn>
              </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
        <v-row>
          <v-col col="2">
            <v-card
              class="mx-auto my-12"
              max-width="374"
            >
              <v-card-title>
              <v-card-title-text>
                <span class="md-headline">New Project</span>
              </v-card-title-text>
              </v-card-title>
              <v-card-text>
                <v-input >
                    <v-text-field
                    label="project name"
                    class="my-4"
                  ></v-text-field>

                  <v-btn
                  elevation="2"
                  color="primary"
                  class="my-1"
                  >CREATE PROJECT</v-btn>
                </v-input>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="2">
            <v-card
              class="mx-auto my-12"
              max-width="374"
            >
              <v-card-title>
              <v-card-title-text>
                <span class="md-headline">New Project</span>
              </v-card-title-text>
              </v-card-title>
              <v-card-text>
                <v-input >
                    <v-text-field
                    label="project name"
                    class="my-4"
                  ></v-text-field>
                  <v-btn
                  elevation="2"
                  class="py-4"
                  color="primary"
                  >CREATE</v-btn>
                </v-input>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <h2>Checkbox</h2>
          </v-col>
        </v-row>
        <v-row>
           <v-checkbox
          input-value="true"
          value
        ></v-checkbox>
        </v-row>
        <v-row>
          <v-col cols="2">
            <h2>Button</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
           <v-btn
              elevation="2"
              class="py-4"
              color="red darken-1"
              >ANNOTATE ALL
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
           <v-btn
              elevation="2"
              class="py-4"
              color="primary"
              >DOWNLOAD (ZIP WITH ANNOTATED PDFS)
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
           <v-btn
              elevation="2"
              class="py-4"
              color="grey lighten-3"
              >SCORING (FORCE REDO)
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <h2>Icon</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
              large
            >mdi-help-circle
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
              large
            >mdi-content-copy
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
              large
            >mdi-delete
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
              large
            >mdi-pencil
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
            color="orange"
              large
            >mdi-close
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
            color="green"
              large
            >mdi-circle-outline
            </v-icon>
          </v-col>
        </v-row>
         <v-row>
          <v-col cols="2">
            <v-icon
              large
              color="red"
            >mdi-circle-outline
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon
            color="blue"
              large
            >mdi-eye 
            </v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <h2>Slider</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <v-slider
            v-model="slider"
            thumb-label
            step="5"
          ></v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2>V-tabs, cards and more</h2>
          </v-col>
        </v-row>
        <v-row>
        <v-card
              class="mx-auto my-12"
            
            >
              <v-card-title>
              <v-card-title-text>
                <span class="md-headline">Existing Projects</span>
              </v-card-title-text>
              </v-card-title>
              <v-card-text>
                <v-input >
                    <v-text-field
                    label="Search"
                    class="my-4"
                  ></v-text-field>
                </v-input>
                <v-input >
                  <v-tabs v-model="tab">
                    <v-tab >
                        Recent
                    </v-tab>
                    <v-tab>
                        All
                    </v-tab>     
                  </v-tabs>
                </v-input>
                <v-input>
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-simple-table>
                          <thead>
                            <tr>
                              <th colspan="2" class="text-left">
                                Name
                              </th>
                              <th class="text-left">
                                Status
                              </th>
                              <th class="text-left">
                                Collaborators
                              </th>
                              <th colspan="2" class="text-left">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>test</td>
                              <td>project-n1</td>
                              <td>annotated</td>
                              <td>alijim.bouverat</td>
                              <td>
                                <v-icon
                                color="blue"
                                large
                                >mdi-eye 
                                </v-icon>
                              </td>
                              <td>
                                <v-icon
                                large
                                >mdi-content-copy
                                </v-icon>
                              </td>
                            </tr>
                          </tbody>
                      </v-simple-table>
                    </v-tab-item>
                  </v-tabs-items>
                </v-input>
              </v-card-text>
            </v-card>
        </v-row>


        <v-row>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th colspan="2" class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Status
                  </th>
                  <th class="text-left">
                    Collaborators
                  </th>
                  <th colspan="2" class="text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>project-n1</td>
                  <td>annotated</td>
                  <td>alijim.bouverat</td>
                  <td>
                    <v-icon
                    color="blue"
                    large
                    >mdi-eye 
                    </v-icon>
                  </td>
                  <td>
                    <v-icon
                    large
                    >mdi-content-copy
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-row>
        <v-row>
          <v-col >
            <h2>V-progress-linear</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col >
          <p>Loading</p>
          <v-progress-linear
          indeterminate
          color="blue"
        ></v-progress-linear>
          </v-col>
        </v-row>
        <v-row>
          <v-col >
            <h2>V-option, v-select</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <v-select
          v-model="e2"
          :items="levels"
        ></v-select>
          </v-col>

        </v-row>
        <v-row>
          <v-col >
            <h2>V-divider, V-switch</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Add section</v-list-item-title>
              <v-divider></v-divider>
               <v-list-item-title>
                 <v-switch
                  v-model="switch1"
                  :label="`Activate copy`"
                ></v-switch>
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-col>
        </v-row>
        <v-row>
            <v-col >
            <h2>V-autocomplete</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <v-autocomplete
            :items="student"
            color="blue-grey lighten-2"
            label="name"
            item-text="name"
            return-object
            >
           
          </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      chip1: true,
      tab: null,
      e2 : 'Level 1',
      levels : ['Level 1', 'Level 2', 'Level 3'],
      studentNames : ['Marshall', 'Nunes'],
      student: [{
        name : 'Marshall',
        firstName : 'Jean'
      },{
        name : 'Nunes',
        firstName : 'Kevin'
      }
      ]
    }),
  }
</script>