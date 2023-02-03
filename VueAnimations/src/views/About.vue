<template>
  <div class="about">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1>About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p>
    <p ref="tel" class="tel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus
      inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod
      quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!
    </p>
    
    <button @click="light">glic</button>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ref, onMounted } from 'vue'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tel = ref(null)

const beforeEnter = (el) => {
  console.log("beforeEnter")
  el.style.transform = 'translateY(-60px)'
  el.style.opacity = 0
}
const enter = (el, done) => {
  console.log("enter")
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power1.inOut",
    onComplete: done
  })
}

const light = () => {
  gsap.fromTo(".tel", {
    color: "blue",
    ease: "power1.inOut"
  }, {
    color: "red",
    duration: 2,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".tel",
      start: "top 80%",
      end: "bottom 20%",
      markers: true
    }
  })

}

onMounted(() => {
  light();
})

</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}
</style>