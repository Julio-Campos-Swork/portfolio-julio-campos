<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
  <v-container>

      <v-card
    elevation="24"
    class="mb-8 mt-4 bg-blue-grey-lighten-5"
    rounded="xl"
    theme="light"
  >

          <v-card-text class="text-start">
            <v-row  justify="center" class="mt-6 mb-6 ml-6 mr-6" >
      <v-file-input
        v-model="fileUp"
        accept="image/png, image/jpeg, image/bmp"
        label="Select image from device"
        variant="solo"
        prepend-icon="mdi-camera"
        :rules="rules"
        append-icon="mdi mdi-send-circle-outline"
        @click:append="uploadImage()"
      ></v-file-input>
    </v-row>
      <v-row justify="start" class="mt-6 mb-6">
        <v-card-text>
            <h3 class="text-center">Image List</h3>
            <v-list >
              <v-list-item
                border="sm"
                style="font-size: small"
                variant="plain"
                v-for="nombres in imageList"
                :key="nombres"
                :title="nombres"
                @click="getImg(nombres)"
              ></v-list-item>
            </v-list>
        </v-card-text>
        <v-card-text>

            <h3 class="text-center mb-2">{{ tempName }}</h3>
            <v-img :src="downloadImg" @click="dialogIMG = !dialogIMG"></v-img>
          </v-card-text>

      </v-row>
      <v-btn
              v-if="downloadImg"
              rounded
              class="mt-4"
              color="red"
              size="small"
              @click="deleteFile(tempName)"
              >Delete image</v-btn
            >

          </v-card-text>
        </v-card>
  </v-container>

    <v-dialog v-model="dialogIMG" max-height="600" max-width="800">
      <v-card>
        <v-img :src="downloadImg" @click="dialogIMG = !dialogIMG"></v-img>
      </v-card>
    </v-dialog>

</template>

<script setup>
import { reactive, ref } from "vue";
import { supabase } from "@/helpers/supabaseConfig";

const dialogIMG = ref(false);
const downloadImg = ref(null);
const tempName = ref("");
const imageList = reactive([]);
const fileUp = ref(null);
const rules = [
  (value) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      "Image size should be less than 2 MB!"
    );
  },
];

const uploadImage = async () => {
  console.log(fileUp.value);
  try {
    if (!fileUp.value || fileUp.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = fileUp.value[0];
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
  if (error) console.log(error);
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
    imageList.splice(0);
    data.forEach((el) => {
      imageList.push(el.name);
    });
    await getImg(imageList[0]);
  }
};
const deleteFile = async (nombre) => {
  console.log("nombre", nombre);
  const { data, error } = await supabase.storage.from("avatars").remove([nombre]);
  // console.log(data, error)
  if (error) console.log(error);
  if (data) {
    downloadImg.value = null;
  }
  await getNames();
};
getNames();
</script>
