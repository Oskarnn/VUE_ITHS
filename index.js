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

// MODUL 4

//  UPPGIFT 1 Händelser (v-on) och metoder (methods)




