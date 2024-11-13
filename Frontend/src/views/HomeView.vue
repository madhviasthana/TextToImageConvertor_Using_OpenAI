<template>
<section>
    <div class="home-title">
        <h1>Explore the Finest Visual Creations</h1>
    </div>
    <div>        
      <p class="text-center">Delve into an exclusive collection of breathtaking, AI-crafted masterpieces</p>
    </div>

    <div class="search-input">
  <div class="input-wrapper">
    <div class="label-container">
    </div>
    <div class="search-icon-wrapper">
      <input
        type="text"
        id="text"
        name="text"
        placeholder="Search something..."
        v-model="searchText"
        required
      />
      <!-- Magnifying glass icon -->
      <span class="search-icon">🔍</span>

    </div>
  </div>
</div>

    <div class="mt-10">
        <div class="flex-justify-center items-center" v-if="loading">
            <p>It's Loading</p>
        </div>
        <div v-else>
            <h2 v-if="searchText" class="search-text">
                Showing Results for <span>{{searchText}}</span>
            </h2>
            <div class="cards-wrapper">
                <template v-if="filteredPost?.length > 0">
                    <!----<Card v-for="(post,i) in filteredPost" :post="post" :key="index"/>-->

                    <Card v-for="(post, i) in filteredPost" :post="post" :key="i" />

                </template>

                <h2 v-else class="title">
                    {{ title }}
                </h2>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import Card from '@/components/card.vue';
import { computed, onMounted, ref } from 'vue';

const searchText=ref('')
const loading=ref(false)
const allPosts=ref([]);
const title=ref('')

// const fetchPosts = async () => {
//   if (form.prompt && form.photo) {
//     try {
//       loading.value = true;
//       const response = await fetch('http://localhost:8000/api/v1/post', {
//         method: 'GET',
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });
// const result=  await response.json();
// allPosts.value=result.data.reverse();
// if(result.data.length==0){
//     title.value='No Posts Yet'
// }
      
//     } catch (error) {
//       alert("An error occurred",error);
//       console.error("Exception occurred during sharing the image:", error);
//     } finally {
//       loading.value = false;
//     }
//   }
// };

const fetchPosts = async () => {
  try {
    loading.value = true;
    const response = await fetch('http://localhost:8000/api/v1/post', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await response.json();
    allPosts.value = result.data.reverse();
    if (result.data.length === 0) {
      title.value = 'No Posts Yet';
    }
  } catch (error) {
    alert("An error occurred", error);
    console.error("Exception occurred during sharing the image:", error);
  } finally {
    loading.value = false;
  }
};
// const filteredPost=computed(()=>{
//     if(searchText.value==''){
//         return allPosts.value
//     }
//     else{
//         const result=allPosts.value.filter((item)=> item.name.toLowerCase().includes(searchText.value.toLowerCase())
//     ||item.prompt.toLowerCase().includes(searchText.value.toLowerCase()));
//     if (result.data.length === 0) {
//       title.value = 'No Search Results Found';
//     };
//     return result

//     }
// });

const filteredPost = computed(() => {
  // If there is no search text, show all posts
  if (!searchText.value) {
    return allPosts.value || []; // Ensure allPosts is an array
  }

  // Filter posts based on search text
  const result = allPosts.value
    ? allPosts.value.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
          item.prompt.toLowerCase().includes(searchText.value.toLowerCase())
      )
    : []; // Default to empty array if allPosts is undefined

  // Update title if no results are found
  if (result.length === 0) {
    title.value = 'No Search Results Found';
  }

  return result;
});


onMounted(async()=>{
await fetchPosts()})


</script>

<style scoped>
/* General styles */
.home-title h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

.text-center {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
}

/* Search input container */
.search-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.input-wrapper {
    position: relative;
    max-width: 500px;
    width: 100%;
}

.label-container {
    position: absolute;
    top: -25px;
    left: 10px;
    font-size: 0.9rem;
    color: #777;
}



input[type="text"]:focus {
    border-color: green; /* Green border on focus */
    outline: none; /* Remove default focus outline */
}

/* Loading message */
.flex-justify-center {
    display: flex;
    justify-content: center;
}

.search-text span {
    font-weight: bold;
    color: #5a67d8;
}

.cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

/* Title styles */
.title {
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    margin-top: 20px;
}

/* Wrapper to hold input and icon */
.search-icon-wrapper {
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 0 auto; /* Center horizontally if needed */
  display: flex;
  align-items: center;
}

/* Input field */
input[type="text"] {
  width: 100%;
  height: 50px; /* Explicit height */
  padding: 0 45px 0 20px; /* Leave space for the icon */
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; /* Ensure padding is included */
}



/* Magnifying glass icon */
.search-icon {
  position: absolute;
  right: 15px; /* Adjust icon position */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Prevent icon from being interactive */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; /* Ensure a consistent size */
  height: 30px;
  color: #666; /* Icon color */
  background-color: white; /* Match input background */
}

/* SVG Icon styles */
.search-icon .icon {
  width: 20px;
  height: 20px;
  stroke: #666; /* Use an explicit color for debugging */
}

.text-center {
    text-align: center;
    font-size: 0.9rem; /* Smaller font size */
    color: #666; /* Existing color */
    margin-bottom: 20px; /* Keep margin as needed */
}



</style>