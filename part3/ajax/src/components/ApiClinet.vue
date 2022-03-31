

<script>
import axios from "axios";

export default {
  setup() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    function showResult(json) {
      document.getElementById("result").innerHTML = JSON.stringify(json);
    }
    function get() {
      console.log('get');
      fetch("http://localhost:4000/api/user/" + 1, {
        method: "GET",
        headers,
      })
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          showResult(json);
        });
    }
    function post() {
      console.log('post');
      const data = {
        id: 20,
        name: "hello",
      };
      axios
        .post("http://localhost:4000/api/user", data)
        .then((response) => {
          showResult(response.data);
        });
    }
    async function put() {
      const result = await axios
        .put("http://localhost:4000/api/user", {
          id: 1,
          name: "world",
        });
      showResult(result.data);
    }
    async function del() {
      try {
        const result = await axios.delete("http://localhost:4000/api/user");
        showResult(result.data);
      } catch (error) {
        showResult(error);
      }
    }
    return { get, post, put, del }
  }
}
</script>
