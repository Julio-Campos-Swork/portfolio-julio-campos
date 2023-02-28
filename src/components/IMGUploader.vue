<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
  <v-container>
      <h1 class="text-center text-indigo mb-3">IMG Manager</h1>

    <v-row class="mb-5">
      <v-col>
        <v-card title="Lista de Imagenes">
          <v-card-text class="text-start" >
            <v-list  >
              <v-list-item border="sm" style="font-size: small" variant="text"
                v-for="nombres in imageList"
                :key="nombres"
                :title="nombres"
                @click="getImg(nombres)"
                 prepend-icon="mdi mdi-image-edit-outline"
              ></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card elevation="0">
          <v-card-text class="text-center">
            <h5>{{ tempName }}</h5>
            <v-img :src="downloadImg" @click="dialogIMG = !dialogIMG"></v-img>
            <v-btn v-if="downloadImg" rounded class="mt-4" color="red" size="small" @click="deleteFile(tempName)">Borrar Imagen</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
      <h2 class="text-center text-indigo mb-3">Upload imagenes</h2>
    <v-row>
      <v-file-input
        v-model="fileUp"
        accept="image/png, image/jpeg, image/bmp"
        label="Select image from pc"
        variant="solo"
        prepend-icon="mdi-camera"
        :rules="rules"
        append-icon="mdi mdi-send-circle-outline"
        @click:append="uploadImage()"
      ></v-file-input>
    </v-row>
    <v-dialog v-model="dialogIMG" max-height="600" max-width="800">
      <v-card>


      <v-img :src="downloadImg" @click="dialogIMG = !dialogIMG"></v-img>

      </v-card>

    </v-dialog>
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";
import { supabase } from "@/helpers/supabaseConfig";

const dialogIMG = ref(false)
const downloadImg = ref(null);
const tempName = ref('')
const imageList = reactive([]);
const fileUp = ref(null);
const rules = [
  (value) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      "Avatar size should be less than 2 MB!"
    );
  },
];

const uploadImage = async () => {
  // fileUp.value = evt.target.files
  console.log(fileUp.value);
  try {
    if (!fileUp.value || fileUp.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = fileUp.value[0];
    // const fileName = file.name.split('.').shift()
    // const fileExt = file.name.split('.').pop()
    // const filePath = `${fileName}.${fileExt}`
    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(file.name, file);
    if (uploadError) throw uploadError;
  } catch (error) {
    alert(error.message);
  }
  await getNames();
};

const getImg = async (name) => {
  // Use the JS library to download a file.
  tempName.value = name;
  const { data, error } = await supabase.storage.from("avatars").download(name);
  // console.log(data, error)
  downloadImg.value = URL.createObjectURL(data);
};

const getNames = async () => {
  const { data, error } = await supabase.storage.from("avatars").list("", {
    limit: 100,
    offset: 0,
    sortBy: { column: "name", order: "asc" },
  });
  if (!error) {
    imageList.splice(0)
    data.forEach((el) => {
      imageList.push(el.name);
    });
    await getImg(imageList[0])
  }
};
const deleteFile = async (nombre) => {
console.log("nombre",nombre)
  const { data, error } = await supabase
  .storage
  .from('avatars')
  .remove([nombre])
  // console.log(data, error)
  if(data){
    downloadImg.value = null;
  }
await getNames();

}
getNames();
</script>
