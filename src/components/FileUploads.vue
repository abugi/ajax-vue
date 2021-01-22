<template>
  <!-- <form>
        <input
            type="file" 
            accept="image/png, image/jpeg, image/jpg, image/tiff"
            multiple
            @change="handleFileUploads"
        >

        <div v-if="!file" @click="attachFile" class="attach-file">Attach a file</div>

        <div v-if="file" class="image-preview">
            <img />

            <button @click.prevent="uploadFile">Upload</button>
            <span @click="closePreview">X</span>
        </div>
  </form> -->

  <main>
    <div @dragover.prevent="handleDragOver" @dragleave.prevent="handleDragLeave" @drop.prevent="handleDrop" id="drop-area">
        <form class="my-form">
            <p>Darg and drop files here</p>
            <p>or</p>
            <input @change="handleFileUploads" type="file" id="fileElem" multiple accept="image/*">
            <label class="button" for="fileElem">Select files</label>
        </form>
    </div>

    <div v-if="file" class="image-preview">
        <img />
    </div>
</main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      file: null
    }
  },
  methods: {
    handleDragOver() {
        const el = document.querySelector("#drop-area");
        el.classList.add('highlight')
    },
    handleDragLeave() {
        const el = document.querySelector("#drop-area");
        el.classList.remove('highlight')
    },
    handleDrop(event) {
        this.file = event.dataTransfer.files[0]
        
        var reader = new FileReader();

        reader.onload = function () {
            const el = document.querySelector(".image-preview > img");
            el.src = reader.result;
        };
       
        this.handleDragLeave()
        reader.readAsDataURL(this.file);
    },
    // attachFile() {
    //   const el = document.querySelector('input')

    //   el.click()
    // },
    handleFileUploads(event) {
            this.file = event.target.files[0];

            var reader = new FileReader();

            reader.onload = function () {
                const el = document.querySelector(".image-preview > img");
                el.src = reader.result;
            };
            reader.readAsDataURL(this.file);
    },
    closePreview() {
      this.file = null
    }
  }
}
</script>


<style scoped>
form{
    width: 50%;
    margin: 5vh auto;
    text-align: center;
}

form > input {
    visibility: hidden;
}

.image-preview {
    width: 100%;
}

.image-preview > img{
    width: 10%;
    display: block;
    margin: 0 auto;
}

#drop-area {
  border: 2px dashed #ccc;
  border-radius: 20px;
  width: 480px;
  font-family: sans-serif;
  margin: 50px auto;
  padding: 20px;
}

#drop-area.highlight {
  border-color: purple;
  background-color: beige;
}
p {
  margin-top: 0;
}
.my-form {
  margin-bottom: 10px;
}

.button {
  display: inline-block;
  padding: 10px;
  background: #ccc;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.button:hover {
  background: #ddd;
}



/* form{
    width: 50%;
    margin: 15vh auto;
}

form > input {
    visibility: hidden;
}

.image-preview {
  position: relative;
}

.image-preview > img{
    display: block;
    margin: 0 auto;
    width: 100%;
}

.image-preview > span {
  position: absolute;
  top: -30px;
  right: -30px;
  font-size: 1.8rem;
  cursor: pointer;
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
} */
</style>
