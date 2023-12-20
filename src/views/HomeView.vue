<script setup>
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const articles = ref([]);

// 이 부분을 교체하세요
const firebaseConfig = {
  apiKey: "AIzaSyD4ArVfpfthN1tZVLrUGMK-iWDqMTCQDGk",
  authDomain: "sample-fb558.firebaseapp.com",
  projectId: "sample-fb558",
  storageBucket: "sample-fb558.appspot.com",
  messagingSenderId: "461305644484",
  appId: "1:461305644484:web:70d80599b22bbf19bb5091",
  measurementId: "G-ERTK6ZN0NM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchArtcles() {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    articles.value = querySnapshot.docs.map((doc) => ({
      articleId: doc.id,
      ...doc.data(),
    }));
    console.log(articles.value);
    0;
  } catch (error) {
    console.error(error);
  }
}

fetchArtcles();
</script>

<template>
  <h1>게시판</h1>
  <ul v-if="articles.length">
    <li v-for="article in articles" :key="article.articleId">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <p>{{ article.date }}</p>
    </li>
  </ul>
  <p v-else>loading...</p>
</template>
