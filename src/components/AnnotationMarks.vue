<template>
<tr>
    <td >

        <!--<div v-switch="e1">
            <v-icon v-case="'circle'"
            :color="color"
              large
            >{{mdi-icon}}
            </v-icon>
            <v-icon v-case="'mark'"
            :color="color"
              large
            >mark
            </v-icon>
        </div>-->
        <v-icon
            :color="color"
              large
            >{{icon}}
        </v-icon>
    </td>
    <td>
        {{e1}}
    </td>
    <td>
        {{icon}}
    </td>
    <td>
        <v-select
            v-model="e1"
            v-on:change ="mdii"
            :items="item" >
        </v-select>
    </td>
    <td>
        <v-btn
        v-on:click="color = 'black'"
        class="mx-2"
        color = "black"
        elevation="1"
        fab
        tile
        ></v-btn>

        <v-btn
        v-on:click="color = 'red'"
        class="mx-2"
        color = "red"
        elevation="1"
        fab
        tile
        ></v-btn>

        <v-btn
        v-on:click="color = 'green'"
        class="mx-2"
        color = "green"
        elevation="1"
        fab
        tile
        ></v-btn>

        <v-btn
        v-model="btnBlue"
        v-on:click="color = 'primary'"
        class="mx-2"
        color = "primary"
        elevation="1"
        fab
        tile
        ></v-btn>
    </td>
</tr>
    
</template>

<script>
  export default {

    name: 'AnnotationMarks',

    data: () => ({ 
        e1 : 'none',
        item : ['none', 'circle', 'mark', 'box'],
        icon : '',
        color : 'black',
    }),

    methods:{
         mdii () {
            if (this.e1 == 'circle') 
                this.icon = 'mdi-circle-outline'
            else if (this.e1 == 'mark') 
                this.icon = 'mdi-close'                
            else if (this.e1 == 'box') 
                this.icon = 'mdi-square-outline'
            else if(this.e1 == 'none')
                this.icon = ''
        }
    },




  }
</script>