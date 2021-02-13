const app = {
    data() {
      return {
        image: [
          {url: "images/panda.jpg",
            title: "panda",
            done: false,
          },
          { url: "images/pig.jpg",
              title: "pig", 
              done: false },

          {url: "images/quokka.jpg",
            title: "quokka",
            done: false,
          },
        ],
      };
    },
    methods: {
      toggleDone(index) {
        this.image[index].done = !this.image[index].done;
      },
    },
    computed: {
      countUndone() {
        return this.image.filter((t) => t.done).length;
      },
    },
  };
  Vue.createApp(app).mount("#app");