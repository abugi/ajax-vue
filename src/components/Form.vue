<template>
    <main>
        <form>
            <div>
                <input type="text" placeholder="Name" v-model="name">
            </div>
            <div>
                <input type="email" placeholder="email" v-model="email">
            </div>
            <div>
                <input type="text" placeholder="phone number" v-model="phone">
            </div>
        </form>
        <button @click="submitForm">Submit</button>

        <div>{{createdUser}}</div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    props: ['createdUser'],
    data() {
        return {
            name: null,
            email: null,
            phone: null
        }
    },
    methods: {
    async submitForm() {
        const data = {
                name: this.name,
                email: this.email,
                phone: this.phone
            }

      const url = 'https://jsonplaceholder.typicode.com/users'

      const response = await axios.post(url, data)

      if(response.status === 201) {
        this.newUser = response.data
        this.$router.push({name: 'landingPage'})
      }
    }
  },

}
</script>

<style>

</style>