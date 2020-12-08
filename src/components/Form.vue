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
        submitForm() {
            const data = {
                name: this.name,
                email: this.email,
                phone: this.phone
            }

            this.$emit('userInfo', data)
        }
    }

}
</script>

<style>

</style>