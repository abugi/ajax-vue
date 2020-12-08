<template>
  <main>
    <h1>Users</h1>
    <FormComponent @userInfo="sendUserInformation" :createdUser="newUser" />
    <ul v-for="person in persons" :key="person.id">
      <li>
        <p>Name: {{person.name}}</p>
        <p>Email: {{person.email}}</p>
        <p>Phone: {{person.phone}}</p>
        <div>Company: 
          <p>Name: {{person.company.name}}</p>
          <p>Catch Phrase: {{person.company.catchPhrase}}</p>
          <p>Business Structure: {{person.company.bs}}</p>

        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import FormComponent from '@/components/Form'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    FormComponent
  },
  data() {
    return {
      persons: null,
      newUser: null
    }
  },
  methods: {
    async sendUserInformation(data) {
      const url = 'https://jsonplaceholder.typicode.com/users'

      const response = await axios.post(url, data)

      console.log(response)
      if(response.status === 201) {
        this.newUser = response.data
      }
    }
  },
  async created() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users'

      const result = await axios.get(url)

      if(result.status === 200) {
        this.persons = result.data
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
}

li {
  margin: 3rem;
  background: #eee;
  padding: 1rem;
};
</style>
