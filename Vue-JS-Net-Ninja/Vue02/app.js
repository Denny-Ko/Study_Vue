const app = Vue.createApp({
    // template: `        <div v-if="showBooks">
    //         <p>{{ title }} - {{ author }} - {{ age }}</p>
    //         <button v-on:click="age++">increase</button>
    //         <button v-on:click="age--">decrease</button>

    //         <button @click="changeTitle">change book title</button>
    //     </div>

    //     <button @click="toggleShowBooks">
    //         <span v-if="showBooks">hide Books</span>
    //         <span v-else>show Books</span>
    //     </button>

    //     <div v-show="showBooks">currently showing books</div>`,

    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: true
        }
    },
    methods: {
        changeTitle() {
            this.title = 'The Harry Potter'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')