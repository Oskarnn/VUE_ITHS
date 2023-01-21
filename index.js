// alert("Hello world");

// let array = [1, 2, 4, 654, 234, 33, 654, 156, 55, 66];


// array.forEach(function(newArray){
//  if(newArray < 40) {
//     console.log(newArray)
//  }
//  else{
//     console.log("För stort") 
//  }
// });

// Vue.createApp({
// data(){
//     return {
//         title: 'HEJ ALLA',
//         age: 45,
//         Boolean: true
// }
// }
// })

// // "mount" berätta vad i html dokumentet (vilken widget) vi ska jobba med
// //  exporterar funktioen till html
// .mount("#app")


// MODUL 1, textinterpolering ({{ och }}) och “variabler” (data)

// UPPGIFT 1

// Vue.createApp({}).mount('#app') 

// UPPGIFT 2

// Vue.createApp({
//     data(){
//         return {
//             name: "Alice"
//         }
//     }
// }).mount('#app')

// UPPGIFT 3

// Vue.createApp({
//     data(){
//         return {
//             s: "Hello World",
//             n: 2,
//             Boolean: true,
//             nu: null,
//             u: undefined  
//         }
//     }

// }).mount('#app') 

// UPPGIFT 4

// Vue.createApp({
//     data() {
//         return{
//            array: [1, 2, 3],
//            object: { 1: 1, 2: 2, 3: 3 }
//         }

//     }
// }).mount('#app')

// UPPGIFT 5 (VG)

// Vue.createApp({
//     data() {
//       return { markup: '<h1>Välkommen!</h1>' }
//     }
//   }).mount('#app')
  
// MODUL 2 Attributinterpolering (v-bind)

// UPPGIFT 1

// Vue.createApp({
//     data(){
//       return { avatar: 'fox@150px.jpeg'}
//     }
//   }).mount('#app')

// UPPGIFT 2

// Vue.createApp({
//     data() {
//       return { isDisabled: true }
//     }
//   }).mount('#app')



// UPPGIFT 3 !!!!

// Vue.createApp({
//     data(){
//       return {
//         n: 3 
//       }
//     }
//   }).mount('#app')
  
// UPPGIFT 4

// const style = Vue.createApp({
//   data(){
//     return{
//         suit: 'HEARTS'
//     }
//       }
// })

// style.mount('#app')

// UPPGIFT 5 (VG)

// MODUL 3 Villkorlig rendering (v-if) och listrendering (v-for)

// FRÅN VUEJS.ORG OM V-FOR

// data() {
//   return {
//     myObject: {
//       title: 'How to do lists in Vue',
//       author: 'Jane Doe',
//       publishedAt: '2016-04-10'
//     }
//   }
// }


// <li v-for="(value, key, index) in myObject">
//   {{ index }}. {{ key }}: {{ value }}
// </li>

// UPPGIFT 1
// Vue.createApp({
//   data(){
//     return {
//       credits: 1
//     }
//   }
// }).mount('#app')

// UPPGIFT 2

    // <div id="app">
    //   <span v-if="oneOrZero < 0.5">Krona</span>
    //   <span v-else>Klave</span>
    // </div>



// Vue.createApp({
//   data() {
//     return { oneOrZero: Math.round(Math.random()) }
//   }
// }).mount('#app')

// UPPGIFT 3

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Spelare</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <ul>
//         <li v-for="player in players">{{player}}</li>
//       </ul>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// VUE

// Vue.createApp({
//   data() {
//     return { players: ['Alice', 'Bob', 'Cesar'] }
//   }
// }).mount('#app')

// UPPGIFT 4

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Spelare och poäng</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//     <style>
//      .credits {
//        color: #555;
//        font-size: 0.85em;
//      }
//     </style>
//   </head>
//   <body>
//     <div id="app">
//       <ul>
//         <li v-for="player in players"> {{player.name}}
//           <span class="credits"> {{player.credits}} </span>
//         </li>
       
//       </ul>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// Vue.createApp({
//   data() {
//     return {
//       players: [
//         { name: 'Alice', credits: 150 },
//         { name: 'Bob', credits: 100 },
//         { name: 'Cesar', credits: 50 }
//       ]
//     }
//   }
// }).mount('#app')


// UPPGIFT 5 (VG)

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>v-for med objekt (VG)</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <ul>
//         <li v-for="(x, y) in products">
//           {{ y }}</li>
       
//       </ul>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// VUE

// Vue.createApp({
//   data() {
//     return {
//       products: {
//         'dd3ce0a3-1d30-4e3e-bcec-7095590019d9': {
//           name: 'Jacket',
//           price: 200,
//           quantity: 0
//         },
//         'faf68d1f-8f3e-4668-891c-56118cc330f4': {
//           name: 'Pants',
//           price: 100,
//           quantity: 0
//         },
//         'dd2bb41e-7f0a-4cb8-884b-588f9457dd54': {
//           name: 'Shoes',
//           price: 100,
//           quantity: 0
//         }
//       }
//     }
//   }
// }).mount('#app')

// MODUL 4 Händelser (v-on) och metoder (methods)

//  UPPGIFT 1 

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>En klickbar knapp</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input v-on:click="onClick" type="button" value="Klicka här">
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>



// Vue.createApp({
//     methods: {
//         onClick: function() {
//             alert("Hello World!")
//         }
//     }
// }).mount('#app')

// Går att skriva onClick()

// data(), methods:, 

// UPPGIFT 2

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Öka insatsen</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input v-on:click="increase" type="button" :value="value">
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>


// Vue.createApp({
//     data() {
//         return {
//             value: 1
//         }
//     },

//     methods: {
//         increase() {
//             this.value = this.value + 1
//         }

//     }
// }).mount('#app')

// methods för att hämta info i data vid specifika tillfällen??

// UPPGIFT 3

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Öka och minska insatsen</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input :disabled="value === 1" @click="decrease" type="button" value="-">
//       <input @click="increase" type="button" value="+">
//       <p>{{ value }}</p>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// Vue.createApp({
//     data(){               //data() är en funktionen som retunerar värden i varieblar till sig själv                               
//         return {
//             value: 1
//         }
//     },
//     methods: {
//         increase(){
//             this.value = this.value +1 
//         },
//         decrease(){
//             this.value = this.value -1
//         }
//     }                   

// }).mount('#app')

// UPPGIFT 4

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Öka insatsen variabelt</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input @click="increase(1)" type="button" value="Öka med 1">
//       <input @click="increase(2)" type="button" value="Öka med 2">
//       <p>
//         {{ value }}
//       </p>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// // tänk dig att increase(1) och increase(2) är parametrar som skickas in så funktionen kan exempelvis definieras increase(value)

// Vue.createApp({
//     data(){
//         return{
//             value: 1
//         }
//     },

//     methods: {
//         increase(number) {
//             this.value = this.value + number
//         }
//     }

// }).mount('#app')

// UPPGIFT 5 (VG)

// HTML 

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>En kundvagn (VG)</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <table>
//         <thead>
//           <tr>
//             <th>Produkt</th>
//             <th>Antal</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr v-for="(product, idx) in products">
//             <td>{{product.name}}</td>
//             <td>{{product.quantity}}</td>
//             <td>{{product.price}}</td>
//             <td><input @click="addToCart(idx)" type="button" value="+"></td>
//           </tr>
        
//         </tbody>
//       </table>
//       <p>Totalsumma: {{total}}</p>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// Vue.createApp({
//     computed: {
//       total() {
//         return Object.values(this.products).reduce(
//           (accumulator, value) => accumulator + value.price * value.quantity,
//           0
//         )
//       }
//     },
//     data() {
//       return {
//         products: {    //Vilket index (UUID-nummer) som ska läggas till
//           'dd3ce0a3-1d30-4e3e-bcec-7095590019d9': {
//             name: 'Jacket',
//             price: 200,
//             quantity: 0
//           },
//           'faf68d1f-8f3e-4668-891c-56118cc330f4': {
//             name: 'Pants',
//             price: 100,
//             quantity: 0
//           },
//           'dd2bb41e-7f0a-4cb8-884b-588f9457dd54': {
//             name: 'Shoes',
//             price: 100,
//             quantity: 0
//           }
//         }
//       }
//     },
//     methods: {
//       addToCart(productId) {
//         this.products[productId].quantity++
//       } //Vilket index (UUID-nummer) som ska läggas till
//     }
//   }).mount('#app')

// MODUL 5 Formulärhantering (v-model), beräknade egenskaper (computed) och bevakare (watch)

// "v-model skapar en koppling mellan formulärkomponenter och data-värden."

// "Om man vill ha ett annat värde än textinnehållet i option-elementet, så kan man använda name-attributet, till exempel så här: <option name="gnu-linux">GNU/Linux</option>."

// EXEMPEL FRPN HANDOUT PÅ V-MODEL


// <div id="app">
//   <textarea v-model="biography"></textarea>
//   <div style="white-space: pre;">{{ biography }}</div>
//   <!-- Making the world...

// a better place! -->
// </div>
// <script>
//   Vue.createApp({
//     data() {
//       return { biography: 'Making the world...\n\n... a better place!' }
//     }
//   }).mount('#app')
// </script>


// OCH 

// {/* <div id="app">
//   <select v-model="operatingSystem">
//     <option>GNU/Linux</option>
//     <option>macOS</option>
//     <option>Windows</option>
//   </select>
//   {{ operatingSystem }} <!-- macOS -->
// </div>
// <script>
//   Vue.createApp({
//     data() {
//       return { operatingSystem: 'macOS' }
//     }
//   }).mount('#app')
// </script> */}

// OCH

/* <div id="app">
  <input v-model="name" />
  {{ name }} <!-- Jane Doe -->
  {{ initials }} <!-- J.D -->
</div>
<script>
  Vue.createApp({
    computed: {
      initials() {
        return this.name // 'Jane Doe'
          .split(' ') // ['Jane', 'Doe']
          .map((name) => name.charAt(0)) // ['J', 'D']
          .join('.') // 'J.D'
      }
    },
    data() {
      return { name: 'Jane Doe' }
    }
  }).mount('#app')
</script> */

// UPPGIFT 1

// HTML-KOD

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Meddelande i konsolen</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input v-model="userName">
//       <input @click="onClick" type="button" value="Klicka här">
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// VUE-KOD

// Vue.createApp({
//     data(){
//         return {
//             userName: ""
//         }
//     },
//     methods: {
//         onClick() {
//             console.log(this.userName);
//         }
//     }
// }).mount('#app')

// UPPPGIFT 2

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Två textfält med samma innehåll</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input v-model="s">
//       <input v-model="s">
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// Vue.createApp({
//     data() {
//       return { s: '' }
//     }
//   }).mount('#app')

// UPPGIFT 3

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Beräknad egenskap</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input v-model="s">
//       <p>Du har skrivit in {{ n }} tecken.</p>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// Vue.createApp({
//     data(){
//         return{
//             s: ""
//         }
//     },
//     computed: {
//         n(){
//             return this.s.length
//         }
//     }
// }).mount('#app')

// UPPGIFT 4

// Vue.createApp({
//     data(){
//         return {
//             s: ""
//         }
//     },
//     watch: {
//         s(event){
//             console.log(event)
//         }
//     }

// }).mount('#app')

// // ELLER

// Vue.createApp({
//     data(){
//         return {
//             s: ""
//         }
//     },
//     watch: {
//         s(){
//             console.log(this.s)
//         }
//     }

// }).mount('#app')

// UPPGIFT 5 (VG) INTE KLAR

// Vue.createApp({
//     data(){
//         return{
//             userName: "",
//             message: 'Välkommen'
            
//         }
//     },

//     methods: {
//         onClick() {

//         }
//     }
// }).mount('#app')

// MODUL 6



// ANTECKNINGAR 

// fetch('https://avancera.app/cities/', {
//   body: '{ "name": "Teststad", "population": 123 }',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   method: 'POST'
// })
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })

// UPPGIFT 1

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Hämta städer med en knapp</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <input @click="fetchCities" type="button" value="Hämta städer">
//       <dl v-if="cities !== null">
//         <template v-for="city in cities">
//           <dt>{{ city.name }}</dt>
//           <dd>{{ city.population }}</dd>
//           <dd>{{ city.id }}</dd>
//         </template>
//       </dl>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// const app = Vue.createApp({
//       data(){
//         return{
//           cities: null
//         }
//       },
//       methods: {
//         fetchCities(){
//           fetch('https://avancera.app/cities/')

//             .then((response) => response.json())
//             .then((result) =>  {
//               this.cities = result
//             })
//         }
//     }
// })

// app.mount('#app')

// UPPGIFT 2

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Hämta städer automatiskt</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <dl v-if="cities !== null">
//         <template v-for="city in cities">
//           <dt>{{ city.name }}</dt>
//           <dd>{{ city.population }}</dd>
//         </template>
//       </dl>
//       <p v-else>Laddar...</p>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// const app = Vue.createApp({
//   created(){
//       this.fetchCities()
    
//   },

//   data(){
//     return{
//       cities: null
//     }
//   },
//   methods: {
//     fetchCities(){
//       fetch('https://avancera.app/cities/')

//         .then((response) => response.json())
//         .then((result) =>  {
//           this.cities = result
//         })
//     }
// }
// })

// app.mount('#app')

// UPPGIFT 3

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>Lägg till en stad</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <label>
//         Namn
//         <input v-model="name" placeholder="Namn">
//       </label>
//       <label>
//         Befolkning
//         <input v-model="population" placeholder="Befolkning" type="number">
//       </label>
//       <input @click="addCity()" type="button" value="Lägg till stad">
//       <dl v-if="cities !== null">
//         <template v-for="city in cities">
//           <dt>{{ city.name }}</dt>
//           <dd>{{ city.population }}</dd>
//         </template>
//       </dl>
//       <p v-else>Laddar...</p>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// const app = Vue.createApp({
//   created(){
//     fetch('https://avancera.app/cities/')

//     .then((response) => response.json())
//     .then((result) => {
//       this.cities = result
//       })
//     },
//   data(){
//     return{
//       cities: null,
//       name: null,
//       population: null
//         }
//   },

//   methods: {
// addCity() {
      
//   fetch('https://avancera.app/cities/', {
//           body: JSON.stringify({
        
//           name: this.name,
//           population: this.population
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         method: 'POST'
//       })


//         .then((response) => response.json())
//         .then((result) => {
//           this.cities = result
//         })
//     }
//   }
// })


// app.mount('#app')

// UPPGIFT 4


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Kattfakta</title>
// </head>
// <body>
//   <div id="app">
//     <button @click="fetchCats"> Hämta Kattfakta</button>
//     <ul v-for="cat in cats">
//       <li>{{cat.text}}</li>
//     </ul>
//     <div v-if="cats !== null">
//       <p> För att se när dessa fakta skapades..</p>
//       <button @click="showDate()">Klicka här</button>
//       <ul v-if="date !== null">
//         <li>{{date}}</li>
//       </ul>
//     </div>

//   </div>
//   <script src="https://unpkg.com/vue@3"></script>
//   <script>
//     const app = Vue.createApp({
//   data(){
//     return {
//       cats: null,
//       date: null
//     }
//   },
//   methods: {
//     fetchCats(){
//       fetch('https://cat-fact.herokuapp.com/facts')
//       .then((response) => response.json())
//       .then((result) => {
//         this.cats = result
//         console.log(this.cats)
//       })
//     },
//     showDate(){
//       this.date = this.cats[1].createdAt
//     }
//   }

// })

// app.mount('#app')
//   </script>
// </body>
// </html>

// UPPGIFT 5 (VG)

// MODUL 6 Komponenter

// UPPGIFT 1

// HTML

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Navbar</title>
// </head>
// <body>
//   <div id="app">
//   <navbar></navbar>
//   </div>
//   <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
// </body>
// </html>

// SCRIPT

// const navbar = Vue.createApp({})

// navbar  .component( 'navbar', {
//     template: `
//               <nav>
//                 <a href="https://www.wikipedia.org">Wikipedia</a>

//                 <a href="https://www.google.com">Google</a>
//                 <a href="https://www.facebook.com">Facebook</a>
//               </nav>
//     `
  
// })

// navbar.mount("#app")

// UPPGIFT 2

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>En singla slant-komponent</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <div id="app">
//       <h1>Några slumpmässiga utfall</h1>
//       <ul>
//         <li><coin-toss></coin-toss></li>
//         <li><coin-toss></coin-toss></li>
//         <li><coin-toss></coin-toss></li>
//         <li><coin-toss></coin-toss></li>
//         <li><coin-toss></coin-toss></li>
//       </ul>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// const app = Vue.createApp({})

// app.component( 'coin-toss', {
//   data() {
//     return { oneOrZero: Math.round(Math.random()) }
//   },

//  template:`
//            <span v-if="oneOrZero < 0.5">Krona</span>
//            <span v-else>Klave</span>
//  `

// })

// app.mount('#app')

// UPPGIFT 3

// HTML

// <!DOCTYPE html>
// <html lang="sv">
//   <head>
//     <meta charset="utf-8">
//     <title>En tärningskomponent</title>
//     <meta content="initial-scale=1, width=device-width" name="viewport">
//   </head>
//   <body>
//     <h1> Få en sexa och vinn en miljon</h1>
//     <div id="app">
//       <dice></dice>
//     </div>
//     <script src="https://unpkg.com/vue@3"></script>
//     <script src="index.js"></script>
//   </body>
// </html>

// SCRIPT

// const dice = Vue.createApp({})


// dice.component( 'dice', {
//   created() {
//     this.randomNum()
//   },

//   data(){
//     return{
//       count: null,
//       message: "Grattis en sexa"
//     }
//   },

//   methods: {
//     randomNum(){
//       this.count = Math.floor(Math.random() * 6) + 1
//       console.log(this.count)
      
//     }
//   },

  

//   template: `
//               <input type="button" @click="randomNum()" :value="this.count"> 
//               <p v-if="this.count === 6">{{message}}</p>
//               <p v-else-if="this.count === 5">Nästan där, Försök igen</p>
//   `

// })

// dice.mount("#app")
