<script>
import axios from "axios";
export default {
  data() {
    return {
      courses: [],
      qualities: [],
      works: [],
    };
  },
  created() {
    axios
      .get("courses.json")
      .then((response) => (this.courses = response.data));
    axios
      .get("qualities.json")
      .then((response) => (this.qualities = response.data));
    axios.get("resume.json").then((response) => (this.works = response.data));
  },
};
</script>

<template>
  <div class="skills-grid-container">
    <h1 id="courses-header" class="skills-headers">COURSES</h1>
    <div class="finished-courses">
      <div id="finished" class="horizontal"></div>
      <div id="finished" class="horizontal"></div>
      <div id="finished" class="horizontal"></div>
      <div id="finished" class="horizontal"></div>
      <div id="finished" class="horizontal"></div>
      <div id="finished" class="horizontal"></div>
      <div id="unfinished" class="horizontal"></div>
      <div id="unfinished" class="horizontal"></div>
      <div id="unfinished" class="horizontal"></div>
      <div id="unfinished" class="horizontal"></div>
    </div>
    <div id="courses-list" class="skills-lists">
      <ul>
        <li v-for="course in courses" :key="course.id">
          {{ course.name }}
        </li>
      </ul>
    </div>
    <h2 id="qualities-header" class="skills-headers">QUALITIES</h2>
    <div id="qualities-list" class="skills-lists">
      <div class="vertical"></div>
      <ul>
        <li v-for="quality in qualities" :key="quality.id">
          {{ quality.quality }}
        </li>
      </ul>
    </div>
    <h2 id="work-header" class="skills-headers">WORK</h2>
    <div id="work-list" class="skills-lists">
      <ul>
        <li v-for="work in works" :key="work.id">
          {{ work.work }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 320px) {
  .skills-grid-container {
    padding-top: 5vh;
    display: grid;
    box-sizing: border-box;
    background-color: rgba(157, 217, 217, 0.444);
    border-top-left-radius: 400px;
    border-bottom-right-radius: 900px;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 0.2fr 0.5fr 0.2fr 1fr;
    gap: 10px;
    justify-items: center;
    align-items: center;
  }

  .skills-headers {
    font-size: 2rem;
    font-family: Fira Code;
    /* width: 20vw; */
    font-weight: bold;
    margin-top: 5vh;
  }

  #courses-header {
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    /* margin-right: 30%;
    margin-left: 30%; */
  }
  #courses-list {
    list-style-type: none;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .skills-lists ul {
    list-style-type: none;
  }

  .skills-lists ul li {
    margin-bottom: 2vh;
  }

  #qualities-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-right: 50%;
    margin-left: 59%;
    margin-top: 5vh;
  }

  #qualities-list {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  #work-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
    margin-top: 5vh;
  }

  #work-list {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .vertical {
    display: none;
    /* margin-top: 0.5vh; */
  }

  .finished-courses {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 45vw;
    margin-top: 1vh;
  }

  #finished {
    background-color: #000000;
    border: 2px solid #000000;
  }

  #unfinished {
    background-color: #848282;
    border: 2px solid #737373;
  }

  .horizontal {
    border-radius: 10px;
    height: 5px;
    width: 2vw;
    margin-bottom: 3.6vh;
  }
}
@media (min-width: 600px) {
  .skills-grid-container {
    /* margin-top: 5vh; */
    padding-top: 5vh;
    display: grid;
    box-sizing: border-box;
    background-color: rgba(157, 217, 217, 0.444);
    /* border-end-start-radius: 40px; */
    /* border-top-left-radius: 150px; */
    border-top-left-radius: 400px;
    border-bottom-right-radius: 900px;
    /* border-bottom-left-radius: 300px; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 0.2fr 0.5fr 0.2fr 1fr;
    gap: 10px;
    justify-items: start;
    align-items: start;
  }

  .skills-headers {
    font-size: 2rem;
    font-family: Fira Code;
    width: 20vw;
    font-weight: bold;
    margin-top: 5vh;
  }

  #courses-header {
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-right: 50%;
    margin-left: 50%;
  }
  #courses-list {
    list-style-type: none;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .skills-lists ul {
    list-style-type: none;
  }

  .skills-lists ul li {
    margin-bottom: 2vh;
  }

  #qualities-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-right: 50%;
    margin-left: 40%;
    margin-top: 5vh;
  }

  #qualities-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  #work-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
    margin-right: 50%;
    margin-left: 60%;
    margin-top: 5vh;
  }

  #work-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .vertical {
    border-left: 4px solid black;
    height: 50vh;
    position: absolute;
    left: 50%;
    /* margin-top: 0.5vh; */
  }

  .finished-courses {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 45vw;
    margin-top: 1vh;
  }

  #finished {
    background-color: #000000;
    border: 2px solid #000000;
  }

  #unfinished {
    background-color: #848282;
    border: 2px solid #737373;
  }

  .horizontal {
    border-radius: 10px;
    height: 5px;
    width: 2vw;
    margin-bottom: 3.6vh;
  }
}
@media (min-width: 900px) {
  .skills-grid-container {
    /* margin-top: 5vh; */
    padding-top: 5vh;
    display: grid;
    box-sizing: border-box;
    background-color: rgba(157, 217, 217, 0.444);
    /* border-end-start-radius: 40px; */
    /* border-top-left-radius: 150px; */
    border-top-left-radius: 400px;
    border-bottom-right-radius: 900px;
    /* border-bottom-left-radius: 300px; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 0.2fr 0.5fr 0.2fr 1fr;
    gap: 10px;
    justify-items: start;
    align-items: start;
  }

  .skills-headers {
    font-size: 2rem;
    font-family: Fira Code;
    width: 20vw;
    font-weight: bold;
    margin-top: 5vh;
  }

  #courses-header {
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-right: 50%;
    margin-left: 58%;
  }
  #courses-list {
    list-style-type: none;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .skills-lists ul {
    list-style-type: none;
  }

  .skills-lists ul li {
    margin-bottom: 2vh;
  }

  #qualities-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-right: 50%;
    margin-left: 59%;
    margin-top: 5vh;
  }

  #qualities-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  #work-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
    margin-right: 50%;
    margin-left: 60%;
    margin-top: 5vh;
  }

  #work-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .vertical {
    border-left: 4px solid black;
    height: 50vh;
    position: absolute;
    left: 50%;
    /* margin-top: 0.5vh; */
  }

  .finished-courses {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 45vw;
    margin-top: 1vh;
  }

  #finished {
    background-color: #000000;
    border: 2px solid #000000;
  }

  #unfinished {
    background-color: #848282;
    border: 2px solid #737373;
  }

  .horizontal {
    border-radius: 10px;
    height: 5px;
    width: 2vw;
    margin-bottom: 3.6vh;
  }
}
@media (min-width: 1200px) {
  .skills-grid-container {
    /* margin-top: 5vh; */
    padding-top: 5vh;
    display: grid;
    box-sizing: border-box;
    background-color: rgba(157, 217, 217, 0.444);
    /* border-end-start-radius: 40px; */
    /* border-top-left-radius: 150px; */
    border-top-left-radius: 400px;
    border-bottom-right-radius: 900px;
    /* border-bottom-left-radius: 300px; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 0.2fr 0.5fr 0.2fr 1fr;
    gap: 10px;
    justify-items: start;
    align-items: start;
  }

  .skills-headers {
    font-size: 2rem;
    font-family: Fira Code;
    width: 20vw;
    font-weight: bold;
    margin-top: 5vh;
  }

  #courses-header {
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-right: 50%;
    margin-left: 58%;
  }
  #courses-list {
    list-style-type: none;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .skills-lists ul {
    list-style-type: none;
  }

  .skills-lists ul li {
    margin-bottom: 2vh;
  }

  #qualities-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-right: 50%;
    margin-left: 59%;
    margin-top: 5vh;
  }

  #qualities-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  #work-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
    margin-right: 50%;
    margin-left: 60%;
    margin-top: 5vh;
  }

  #work-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .vertical {
    border-left: 4px solid black;
    height: 50vh;
    position: absolute;
    left: 50%;
    /* margin-top: 0.5vh; */
  }

  .finished-courses {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 45vw;
    margin-top: 1vh;
  }

  #finished {
    background-color: #000000;
    border: 2px solid #000000;
  }

  #unfinished {
    background-color: #848282;
    border: 2px solid #737373;
  }

  .horizontal {
    border-radius: 10px;
    height: 5px;
    width: 2vw;
    margin-bottom: 3.6vh;
  }
}
@media (min-width: 1900px) {
  .skills-grid-container {
    /* margin-top: 5vh; */
    padding-top: 5vh;
    display: grid;
    box-sizing: border-box;
    background-color: rgba(157, 217, 217, 0.444);
    /* border-end-start-radius: 40px; */
    /* border-top-left-radius: 150px; */
    border-top-left-radius: 500px;
    border-bottom-right-radius: 1000px;
    /* border-bottom-left-radius: 300px; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 0.2fr 0.5fr 0.2fr 1fr;
    gap: 10px;
    justify-items: start;
    align-items: start;
  }

  .skills-headers {
    font-size: 2rem;
    font-family: Fira Code;
    width: 20vw;
    font-weight: bold;
    margin-top: 5vh;
  }

  #courses-header {
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-right: 50%;
    margin-left: 58%;
  }
  #courses-list {
    list-style-type: none;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .skills-lists ul {
    list-style-type: none;
  }

  .skills-lists ul li {
    margin-bottom: 2vh;
  }

  #qualities-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    margin-right: 50%;
    margin-left: 59%;
    margin-top: 5vh;
  }

  #qualities-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  #work-header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
    margin-right: 50%;
    margin-left: 60%;
    margin-top: 5vh;
  }

  #work-list {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 6;
  }

  .vertical {
    border-left: 4px solid black;
    height: 49vh;
    position: absolute;
    left: 50%;
    /* margin-top: 0.5vh; */
  }

  .finished-courses {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 45vw;
    margin-top: 1vh;
  }

  #finished {
    background-color: #000000;
    border: 2px solid #000000;
  }

  #unfinished {
    background-color: #848282;
    border: 2px solid #737373;
  }

  .horizontal {
    border-radius: 10px;
    height: 5px;
    width: 2vw;
    margin-bottom: 3.6vh;
  }
}
</style>
