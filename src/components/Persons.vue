<template>
  <main>
    <h1>Users</h1>
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
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      persons: null,
      newUser: null
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

<style scoped>
ul {
  list-style-type: none;
}

li {
  margin: 3rem;
  background: #eee;
  padding: 1rem;
};
</style>
