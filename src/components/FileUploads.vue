<template>
  <form>
        <input
            type="file" 
            accept="image/png, image/jpeg, image/jpg, image/tiff"
            @change="handleFileUploads"
        >
        <div v-if="!file" @click="attachFile" class="attach-file">Attach a file</div>
        <div v-else class="image-preview">
            <img v-if="file" />

            <button>Upload</button>
        </div>
  </form>
</template>

<script>
export default {
    name: 'FileUploads',
    data() {
        return {
            file: null
        }
    },
    methods: {
        attachFile() {
            const el = document.querySelector('input')

            el.click()
        },
        handleFileUploads(event) {
            this.file = event.target.files[0];

            var reader = new FileReader();

            reader.onload = function () {
                const el = document.querySelector(".image-preview > img");
                el.src = reader.result;
            };
            reader.readAsDataURL(this.file);
        }
    }

}
</script>

<style scoped>
form{
    width: 50%;
    margin: 15vh auto;
}

form > input {
    visibility: hidden;
}

.image-preview > img{
    display: block;
    margin: 0 auto;
}

.attach-file{
    width: 35%;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 auto;
    cursor: pointer;
    background-color: aquamarine;
    padding: .5rem 1rem;
    border-radius: 5px;
    text-align: center;
}

button {
    font-size: 1.2rem;
    font-weight: 600;
    color: aliceblue;
    background-color: darkmagenta;
    border-radius: 5px;
    padding: .6rem 1rem;
    display: block;
    margin: 1rem auto;
}
</style>