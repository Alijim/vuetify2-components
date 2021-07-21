<template>
<tr>
    <td >

        <!--<div v-switch="type">
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
        {{toBeTicked}}
    </td>
    <td>
        {{ticked}}
    </td>
    <td>
        <v-select
            v-model="type"
            v-on:change ="mdii(type)"
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
        type : 'none',
        item : ['none', 'circle', 'mark', 'box'],
        icon : '',
        color : 'black',
    }),

   beforeMount(){
        this.mdii(this.typeIcon)
    }, 

    methods:{
         mdii (t) {
            if (t== 'circle') 
                this.icon = 'mdi-circle-outline'
            else if (t == 'mark') 
                this.icon = 'mdi-close'                
            else if (t == 'box') 
                this.icon = 'mdi-square-outline'
            else if(t == 'none')
                this.icon = ''
        }
    },

    props : {
        toBeTicked: String,
        ticked: String,
        typeIcon : String,
        colorIcon : String
    }




  }
</script>